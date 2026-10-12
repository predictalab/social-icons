"""Batch pipeline of the add-icons skill: `plan` proposes a source for every key and writes an
editable manifest plus review sheets, `apply` writes the 3 source files from the manifest.

Manifest (WORKDIR/batch.tsv), one line per key, tab separated:
  key  source  color  category  name  domain  note
source: si:<slug> | local (WORKDIR/<key>.png) | mdi:<icon> | alias:<existing key> | ? (unresolved)
"""
import csv
import html as htmllib
import json
import os
import re
import subprocess
import sys
import unicodedata
from concurrent.futures import ThreadPoolExecutor

from PIL import Image, ImageDraw, ImageFont

import icons

GENERIC_FILE = os.path.join(os.path.dirname(__file__), "..", "generic-favicons.json")
COLUMNS = ["key", "source", "color", "category", "name", "domain", "note"]
DEFAULT_COLOR = "#607D8B"
KEY_RE = re.compile(r"^[a-z][a-z0-9]*$")
TSX = os.path.join(icons.ROOT, "src", "components", "SocialIcons.tsx")
NETWORK_TS = os.path.join(icons.ROOT, "src", "utils", "socialNetwork.ts")
TYPES_TS = os.path.join(icons.ROOT, "src", "types", "sourceTypes.ts")

# maigret tags / engines -> (mdi icon, category), first match wins: specific before generic
TAG_RULES = [
    ("porn", "mdi:fire", "adult"),
    ("dating", "mdi:heart", "dating"),
    ("hacking", "mdi:incognito", "hacking"),
    ("crypto", "mdi:bitcoin", "finance"),
    ("trading", "mdi:finance", "finance"),
    ("finance", "mdi:finance", "finance"),
    ("gambling", "mdi:cards-playing", "gaming"),
    ("gaming", "mdi:gamepad-variant", "gaming"),
    ("coding", "mdi:code-tags", "programming"),
    ("streaming", "mdi:video", "streaming"),
    ("video", "mdi:video", "video_platform"),
    ("movies", "mdi:movie-open", "video_platform"),
    ("anime", "mdi:animation", "other"),
    ("music", "mdi:music", "other"),
    ("photo", "mdi:camera", "other"),
    ("art", "mdi:palette", "other"),
    ("design", "mdi:palette", "other"),
    ("3d", "mdi:cube-outline", "other"),
    ("sport", "mdi:trophy", "sport"),
    ("auto", "mdi:car", "other"),
    ("military", "mdi:medal", "other"),
    ("travel", "mdi:airplane", "other"),
    ("shopping", "mdi:cart", "ecommerce"),
    ("classified", "mdi:tag", "ecommerce"),
    ("freelance", "mdi:briefcase", "other"),
    ("business", "mdi:briefcase", "other"),
    ("medicine", "mdi:medical-bag", "other"),
    ("science", "mdi:flask", "other"),
    ("research", "mdi:flask", "other"),
    ("education", "mdi:school", "other"),
    ("books", "mdi:book-open-page-variant", "other"),
    ("reading", "mdi:book-open-page-variant", "other"),
    ("writing", "mdi:feather", "other"),
    ("news", "mdi:newspaper-variant", "other"),
    ("maps", "mdi:map-marker", "other"),
    ("geosocial", "mdi:map-marker", "social"),
    ("messaging", "mdi:chat", "messaging_app"),
    ("tech", "mdi:laptop", "programming"),
    ("apps", "mdi:cellphone", "other"),
    ("wiki", "mdi:book-open-variant", "other"),
    ("blog", "mdi:post", "social"),
    ("hobby", "mdi:puzzle", "social"),
    ("forum", "mdi:forum", "social"),
    ("discussion", "mdi:forum", "social"),
    ("social", "mdi:account-group", "social"),
]
ENGINE_TAG = {"Lemmy": "forum", "Mastodon": "social", "GitLab": "coding", "Gitea": "coding"}


# --------------------------------------------------------------------------- keys
def spell_leading(key):
    """Leading digits spelled out, the rest kept: 4pda -> fourpda, 123rf -> onetwothreerf,
    auto63 -> auto63. Predicta keys cannot start with a digit."""
    m = re.match(r"\d+", key)
    return "".join(icons.UNITS[int(c)] for c in m.group()) + key[m.end():] if m else key


def norm(name):
    """icons.norm without dropping accented letters: Codédex -> codedex, not coddex."""
    name = unicodedata.normalize("NFKD", name)
    return icons.norm("".join(c for c in name if not unicodedata.combining(c)))


def is_domain_name(name):
    return " " not in name and bool(re.search(r"\.[a-z]{2,}$", name, re.I))


def key_candidates(name, domain):
    """Keys the API may use for an OSINT site, most likely first. Measured on the API
    (2026-10, `icons.py keys`): the first candidate is right for 85 % of the maigret sites the
    API has; most misses are variants folded into their parent network (VK (by id) -> vk).
    Rule: normalized name with leading digits spelled out, or the first label when the
    maigret name is a host (abc-accounting.ucoz.net -> abcaccounting); then fallbacks, the
    domain's second-level label last (Bambu Lab Forum -> bambulab)."""
    out = []
    if is_domain_name(name):
        label = name.lower().removeprefix("www.").split(".")[0]
        out.append(spell_leading(norm(label)))
    out.append(spell_leading(norm(name)))
    out.append("".join(icons.UNITS[int(c)] if c.isdigit() else c for c in norm(name)))
    out.append(norm(name))
    if domain:
        out.append(spell_leading(icons.domain_label(domain)))
    return [k for k in dict.fromkeys(out) if k and KEY_RE.match(k)]


def predict_key(name, domain):
    cands = key_candidates(name, domain)
    return cands[0] if cands else None


def build_index(sites):
    """{key: site} using the best (source, rule) pair: maigret first, then WMN, Sherlock."""
    order = {"maigret": 0, "wmn": 1, "sherlock": 2}
    best = {}
    for site in sites:
        src, name, domain, _, infos = site
        for rank, key in enumerate(key_candidates(name, domain)):
            score = (rank, order[src], 1 if infos.get("off") else 0, infos.get("rank", 10**9))
            if key not in best or score < best[key][0]:
                best[key] = (score, site)
    return {k: v[1] for k, v in best.items()}


# --------------------------------------------------------------------------- fetch
def ahash(im):
    """256-bit average hash on a white background, to spot identical generic favicons."""
    im = im.convert("RGBA")
    bg = Image.new("RGBA", im.size, "white")
    bg.alpha_composite(im)
    g = bg.convert("L").resize((16, 16), Image.LANCZOS)
    px = list(g.getdata())
    avg = sum(px) / len(px)
    return "%064x" % int("".join("1" if p > avg else "0" for p in px), 2)


def hamming(a, b):
    return bin(int(a, 16) ^ int(b, 16)).count("1")


def load_generic():
    try:
        return json.load(open(GENERIC_FILE))
    except FileNotFoundError:
        return {}


def generic_label(h, generic):
    for known, label in generic.items():
        if hamming(h, known) <= 20:
            return label
    return None


def decode_html(raw):
    m = re.search(rb'charset=["\']?([\w-]+)', raw[:4096], re.I)
    for enc in [m.group(1).decode() if m else "utf-8", "utf-8", "cp1251"]:
        try:
            return raw.decode(enc)
        except (LookupError, UnicodeDecodeError):
            continue
    return raw.decode("utf-8", "ignore")


def page_title(html):
    m = re.search(r'<meta[^>]+property=["\']og:site_name["\'][^>]*content=["\']([^"\']+)', html, re.I)
    if not m:
        m = re.search(r"<title[^>]*>([^<]+)</title>", html, re.I)
    if not m:
        return ""
    title = htmllib.unescape(m.group(1)).strip()
    title = re.split(r"\s+[|–—·»:\-]\s+", title)[0].strip()
    return title[:40]


def probe(domain):
    """Best logo of a site (icons.candidates order) + its title. Banners are dropped."""
    html = decode_html(icons.get(f"https://{domain}", timeout=15))
    found = []
    for kind, url in icons.candidates(domain, html):
        im = icons.as_image(icons.get(url, timeout=15))
        if not im or min(im.size) < 16:
            continue
        if max(im.size) > 1.5 * min(im.size):
            continue  # og:image banner
        found.append((kind != "og" and min(im.size) >= 128, min(im.size), kind, url, im))
    found.sort(key=lambda f: f[:2], reverse=True)
    best = found[0] if found else None
    return {
        "title": page_title(html),
        "im": best[4] if best else None,
        "kind": best[2] if best else None,
        "url": best[3] if best else None,
        "size": best[1] if best else 0,
    }


# --------------------------------------------------------------------------- simple-icons
def simple_icons(workdir):
    iconify = icons.cached_json(workdir, "iconify-simple-icons.json", icons.ICONIFY_SET)
    served = set(iconify["icons"]) | set(iconify.get("aliases", {}))
    brands = {}
    for entry in icons.cached_json(workdir, "simple-icons-data.json", icons.SI_DATA):
        brands[entry.get("slug") or icons.si_slug(entry["title"])] = entry
    return served, brands


def si_match(key, site, served, brands):
    """(slug, hex, confident) when simple-icons has the source's own brand, else None.
    Confident when the slug is the site's domain label or the brand title is the site name:
    `polygon` (polygon.com) must not become the Polygon blockchain silently."""
    name, domain = (site[1], site[2]) if site else ("", "")
    label = icons.domain_label(domain) if domain else ""
    for slug in dict.fromkeys(s for s in (key, icons.norm(name), label) if s):
        if slug not in served:
            continue
        entry = brands.get(slug, {})
        confident = bool(label) and (slug == label or icons.norm(entry.get("title", "")) == icons.norm(name))
        return slug, ("#" + entry["hex"]) if entry.get("hex") else None, confident
    return None


# --------------------------------------------------------------------------- plan
def tag_rule(infos):
    tags = list(infos.get("tags") or [])
    if infos.get("engine") in ENGINE_TAG:
        tags.append(ENGINE_TAG[infos["engine"]])
    for tag, icon, category in TAG_RULES:
        if tag in tags:
            return icon, category
    return "mdi:web", "other"


JUNK_TITLE = re.compile(r"just a moment|attention required|access denied|forbidden|not found|error|"
                        r"index of|welcome to|default page|captcha|ddos", re.I)


def display_name(key, site, title):
    """maigret's own name when it is not a host, else a short Latin page title, else the
    host's first label in words (aikido-mariupol.ucoz.ru -> Aikido Mariupol): names stay
    Latin like the existing ones (FishingSib, YaPishu)."""
    if site and not is_domain_name(site[1]) and "{" not in site[1]:
        return site[1][0].upper() + site[1][1:] if site[1].islower() else site[1]
    if title and title.isascii() and len(title) <= 30 and not JUNK_TITLE.search(title) and not is_domain_name(title):
        return title
    host = (site[2] if site else "").split("/")[0].removeprefix("www.")
    label = host.split(".")[0] if host else key
    return " ".join(w.capitalize() for w in re.split(r"[-_]+", label) if w) or key


def network_entries():
    """{key: (color, category, name)} of socialNetwork.ts, to copy for aliases."""
    ts = open(NETWORK_TS).read()
    out = {}
    for m in re.finditer(r'^  "?([\w-]+)"?: \{(.*?)\}', ts, re.M | re.S):
        body = m.group(2)
        get = lambda f: (re.search(rf'{f}: "([^"]*)"', body) or [None, ""])[1]
        out[m.group(1)] = (get("color"), get("category"), get("name"))
    return out


def plan_rows(keys, sites_by_key, workdir, preset=None):
    """Manifest rows for `keys` (missing ones only). preset: {key: site} forced (maigret mode)."""
    have = icons.existing_keys()
    entries = network_entries()
    assets = {os.path.splitext(f)[0] for f in os.listdir(icons.ASSETS)}
    served, brands = simple_icons(workdir)
    rows, to_fetch, used = {}, {}, {}
    for key in keys:
        if key in have:
            print(f"{key:24s} déjà couvert, ignoré", file=sys.stderr)
            continue
        site = used[key] = (preset or {}).get(key) or sites_by_key.get(key)
        domain = site[2] if site else ""
        infos = site[4] if site else {}
        icon, category = tag_rule(infos)
        row = dict(key=key, source="?", color="", category=category, name=key, domain=domain, note="")
        alt = icons.digits_form(key)
        if alt and alt in have and alt in entries:
            color, category, name = entries[alt]
            row.update(source=f"alias:{alt}", color=color, category=category, name=name)
        elif not site:
            row["note"] = "INCONNU : domaine à fournir"
        else:
            row["note"] = f"{site[0]}:{site[1]}" + (" (désactivé maigret)" if infos.get("off") else "")
            si = si_match(key, site, served, brands)
            if si:
                slug, hexcolor, confident = si
                row.update(source=f"si:{slug}", color=hexcolor or "")
                if not confident:
                    row["note"] += " ; simple-icons homonyme ? vérifier"
            to_fetch[key] = domain
            row["_mdi"] = icon
        rows[key] = row

    # Fetch every site in parallel (also for simple-icons rows: title, colour fallback)
    generic = load_generic()
    with ThreadPoolExecutor(16) as pool:
        results = dict(zip(to_fetch, pool.map(probe, to_fetch.values())))
    hashes = {}
    for key, res in results.items():
        if res["im"] is not None:
            res["hash"] = ahash(res["im"])
            hashes.setdefault(res["hash"], set()).add(to_fetch[key].split("/")[0])
    # Same favicon on >= 3 different hosts: a hosting platform default (uCoz "U"…); remembered
    learned = False
    for h, hosts in hashes.items():
        if len(hosts) >= 3 and not generic_label(h, generic):
            generic[h] = "auto: " + ", ".join(sorted(hosts)[:3])
            learned = True
    if learned:
        json.dump(generic, open(GENERIC_FILE, "w"), indent=1, sort_keys=True)
        print(f"favicons génériques appris -> {os.path.normpath(GENERIC_FILE)}", file=sys.stderr)

    for key, res in results.items():
        row = rows[key]
        row["name"] = display_name(key, used[key], res["title"])
        im = res["im"]
        is_generic = im is not None and generic_label(res["hash"], generic)
        if row["source"].startswith("si:"):
            if not row["color"]:
                row["color"] = icons.dominant_color(im) if im and not is_generic else DEFAULT_COLOR
            continue
        if im is not None and not is_generic and res["size"] >= 48:
            icons.save_png(im, os.path.join(workdir, key + ".png"))
            row.update(source="local", color=icons.dominant_color(im))
            row["note"] += f" ; {res['kind']} {res['size']}px"
        else:
            row["source"] = row["_mdi"]
            row["color"] = icons.dominant_color(im) if im is not None and not is_generic else DEFAULT_COLOR
            why = f"favicon générique ({is_generic})" if is_generic else (
                f"{res['size']}px" if im is not None else "aucun logo"
            )
            row["note"] += f" ; mdi auto : {why}"
    for row in rows.values():
        row.pop("_mdi", None)
        if row["source"] == "?" and not row["color"]:
            row["color"] = DEFAULT_COLOR
    return [rows[k] for k in sorted(rows)]


def write_manifest(rows, path):
    with open(path, "w", newline="") as f:
        w = csv.DictWriter(f, COLUMNS, delimiter="\t", lineterminator="\n")
        w.writeheader()
        w.writerows(rows)


def read_manifest(path):
    with open(path, newline="") as f:
        return [
            {c: (r.get(c) or "").strip() for c in COLUMNS}
            for r in csv.DictReader(f, delimiter="\t")
            if r.get("key") and not r["key"].startswith("#")
        ]


# --------------------------------------------------------------------------- review sheet
def iconify_png(workdir, icon, color, size=96):
    """Iconify SVG rasterized with rsvg-convert (cached), or None when unavailable."""
    cache = os.path.join(workdir, "iconify")
    os.makedirs(cache, exist_ok=True)
    out = os.path.join(cache, f"{icon.replace(':', '-')}-{color.lstrip('#')}.png")
    if not os.path.exists(out):
        prefix, name = icon.split(":", 1)
        svg = icons.get(f"https://api.iconify.design/{prefix}/{name}.svg?color=%23{color.lstrip('#')}")
        if not svg.startswith(b"<svg"):
            return None
        try:
            r = subprocess.run(["rsvg-convert", "-w", str(size), "-h", str(size), "-o", out], input=svg)
        except FileNotFoundError:
            return None
        if r.returncode:
            return None
    return Image.open(out)


def sheet_font(size=11):
    """A system font with Cyrillic (page titles), PIL's bitmap font otherwise."""
    try:
        path = subprocess.run(["fc-match", "-f", "%{file}", "sans:lang=ru"], capture_output=True, text=True).stdout
        return ImageFont.truetype(path, size)
    except (OSError, FileNotFoundError):
        return ImageFont.load_default()


def render_sheets(rows, workdir, per_sheet=36):
    """WORKDIR/batch-N.png: icon as it will render, colour swatch, key, source, name."""
    cols, cell, text_h = 6, 150, 46
    font = sheet_font()
    paths = []
    for n, start in enumerate(range(0, len(rows), per_sheet), 1):
        chunk = rows[start : start + per_sheet]
        lines = (len(chunk) + cols - 1) // cols
        sheet = Image.new("RGB", (cols * cell, lines * (cell + text_h)), "white")
        draw = ImageDraw.Draw(sheet)
        for i, row in enumerate(chunk):
            x, y = (i % cols) * cell, (i // cols) * (cell + text_h)
            src, color = row["source"], row["color"] or DEFAULT_COLOR
            im = None
            if src == "local":
                p = os.path.join(workdir, row["key"] + ".png")
                im = Image.open(p) if os.path.exists(p) else None
            elif src.startswith("si:"):
                im = iconify_png(workdir, "simple-icons:" + src[3:], color)
            elif src.startswith("mdi:"):
                im = iconify_png(workdir, src, color)
            if im is not None:
                im = im.convert("RGBA")
                im.thumbnail((cell - 40, cell - 40))
                sheet.paste(im, (x + (cell - im.width) // 2, y + 8 + (cell - 40 - im.height) // 2), im)
            else:
                draw.text((x + 10, y + 50), src, fill="red", font=font)
            draw.rectangle((x + 6, y + cell - 24, x + cell - 6, y + cell - 14), fill=color)
            label = src if src in ("local", "?") else src.split(":", 1)[0] + ":" + src.split(":", 1)[1][:16]
            draw.text((x + 4, y + cell - 11), row["key"][:24], fill="black", font=font)
            draw.text((x + 4, y + cell + 4), label[:24], fill="#555555", font=font)
            draw.text((x + 4, y + cell + 18), row["name"][:24], fill="#555555", font=font)
            draw.rectangle((x, y, x + cell - 1, y + cell + text_h - 1), outline="#DDDDDD")
        path = os.path.join(workdir, f"batch-{n}.png")
        sheet.save(path)
        paths.append(path)
    return paths


# --------------------------------------------------------------------------- apply
def categories():
    ts = open(NETWORK_TS).read()
    block = re.search(r"category:(.*?);", ts, re.S).group(1)
    return set(re.findall(r'"([^"]+)"', block))


def validate(rows, workdir):
    have = icons.existing_keys()
    served, _ = simple_icons(workdir)
    cats = categories()
    mdi = sorted({r["source"][4:] for r in rows if r["source"].startswith("mdi:")})
    missing_mdi = set()
    if mdi:
        data = json.loads(icons.get("https://api.iconify.design/mdi.json?icons=" + ",".join(mdi)) or b"{}")
        missing_mdi = set(data.get("not_found", [])) if data else set(mdi)
    errors, seen = [], set()
    for r in rows:
        k, src = r["key"], r["source"]
        if not KEY_RE.match(k):
            errors.append(f"{k}: clé invalide")
        if k in seen:
            errors.append(f"{k}: en double dans le manifeste")
        seen.add(k)
        if not re.fullmatch(r"#[0-9A-Fa-f]{6}", r["color"]):
            errors.append(f"{k}: couleur invalide {r['color']!r}")
        if r["category"] not in cats:
            errors.append(f"{k}: catégorie inconnue {r['category']!r}")
        if not r["name"]:
            errors.append(f"{k}: nom vide")
        if src.startswith("si:") and src[3:] not in served:
            errors.append(f"{k}: slug simple-icons absent d'Iconify {src[3:]}")
        elif src.startswith("mdi:") and src[4:] in missing_mdi:
            errors.append(f"{k}: icône mdi inconnue {src}")
        elif src == "local" and not os.path.exists(os.path.join(workdir, k + ".png")):
            errors.append(f"{k}: {k}.png absent de {workdir}")
        elif src.startswith("alias:") and src[6:] not in have:
            errors.append(f"{k}: cible d'alias inexistante {src[6:]}")
        elif not re.match(r"(si|mdi|alias):.|local$", src):
            errors.append(f"{k}: source non résolue {src!r}")
    return errors


def ts_string(s):
    return json.dumps(s, ensure_ascii=False)


def ts_key(k):
    return k if re.fullmatch(r"[A-Za-z_$][\w$]*", k) else ts_string(k)


def apply_rows(rows, workdir):
    """Writes the 3 files (and the WebP assets) for rows not covered yet. All or nothing:
    the manifest is validated before anything is written."""
    have = icons.existing_keys()
    rows = sorted((r for r in rows if r["key"] not in have), key=lambda r: r["key"])
    skipped = [r["key"] for r in rows if r["source"] == "?"]
    rows = [r for r in rows if r["source"] != "?"]
    errors = validate(rows, workdir)
    if errors:
        sys.exit("manifeste invalide, rien n'a été écrit :\n  " + "\n  ".join(errors))
    if not rows:
        sys.exit("rien à appliquer")

    types = open(TYPES_TS).read()
    union = "".join(f'\n  | "{r["key"]}"' for r in rows)
    end = types.rindex('";')
    types = types[: end + 1] + union + types[end + 1 :]

    ts = open(NETWORK_TS).read()
    block = "".join(
        f"  {ts_key(r['key'])}: {{\n    color: \"{r['color'].upper()}\",\n"
        f"    category: \"{r['category']}\",\n    name: {ts_string(r['name'])},\n  }},\n"
        for r in rows
    )
    end = ts.rindex("};")
    ts = ts[:end] + block + ts[end:]

    tsx = open(TSX).read()
    cases = []
    for r in rows:
        k, src = r["key"], r["source"]
        if src.startswith("alias:"):
            target = f'    case "{src[6:]}":\n'
            tsx = tsx.replace(target, f'    case "{k}":\n' + target, 1)
            continue
        if src == "local":
            icons.save_asset(Image.open(os.path.join(workdir, k + ".png")), os.path.join(icons.ASSETS, k + icons.ASSET_EXT))
            jsx = f"<LocalIcon file=\"{k}{icons.ASSET_EXT}\" alt={ts_string(r['name'])} />"
        else:
            icon = "simple-icons:" + src[3:] if src.startswith("si:") else src
            jsx = f'<Icon icon="{icon}" color={{socialNetworks.{k}.color}} />'
        cases.append(f'    case "{k}":\n      icon = {jsx};\n      break;\n')
    default = tsx.index("    default:")
    tsx = tsx[:default] + "".join(cases) + tsx[default:]

    open(TYPES_TS, "w").write(types)
    open(NETWORK_TS, "w").write(ts)
    open(TSX, "w").write(tsx)
    icons.gen_asset_loaders()
    by = {}
    for r in rows:
        by.setdefault(r["source"].split(":")[0], []).append(r["key"])
    for kind, keys in sorted(by.items()):
        print(f"{kind:6s} {len(keys):4d}")
    if skipped:
        print(f"non résolues, ignorées ({len(skipped)}) : {' '.join(skipped)}")
    print(f"\n{len(rows)} icônes ajoutées. Pour la PR :\nicons.py inputs " + " ".join(r["key"] for r in rows))


# --------------------------------------------------------------------------- commands
def maigret_targets(workdir, tag=None, include_disabled=False):
    """{predicted key: site} for maigret sites without icon, one per domain, by popularity."""
    have = icons.existing_keys()
    out, seen = {}, set()
    sites = [s for s in icons.osint_sites(workdir) if s[0] == "maigret"]
    for s in sorted(sites, key=lambda s: s[4]["rank"]):
        name, domain, infos = s[1], s[2], s[4]
        if (infos["off"] and not include_disabled) or domain in seen:
            continue
        if tag and tag not in infos["tags"]:
            continue
        key = predict_key(name, domain)
        if not key or key in have or key in out:
            continue
        stem = icons.VARIANT.sub("", icons.norm(name))
        if stem != icons.norm(name) and (stem in have or stem == icons.domain_label(domain)):
            continue  # VKByID, SteamGroup: same icon as the covered network
        if icons.covered_by(domain, have):
            continue
        seen.add(domain)
        out[key] = s
    return out


def cmd_plan(args):
    preset = None
    if args.api:
        url, networks = icons.fetch_networks(icons.NETWORKS_APIS)
        have = icons.existing_keys()
        keys = sorted(k for k, n in networks.items() if not n.get("deprecated") and k not in have)
        print(f"{len(keys)} réseaux API sans icône ({url})", file=sys.stderr)
    elif args.maigret:
        preset = maigret_targets(args.workdir, args.tag, args.include_disabled)
        keys = list(preset)
        print(f"{len(keys)} sites maigret sans icône (clés prédites)", file=sys.stderr)
    else:
        # `clé=domaine` for keys none of the OSINT bases know (airbuds=airbuds.fm)
        manual = dict(k.split("=", 1) for k in args.keys if "=" in k)
        keys = [k.split("=", 1)[0] for k in args.keys]
        preset = {k: ("manuel", d, d, "", {}) for k, d in manual.items()}
    if args.n:
        keys = keys[: args.n]
    if not keys:
        sys.exit("plan : donner des clés, --api ou --maigret")
    index = build_index(icons.osint_sites(args.workdir))
    rows = plan_rows(keys, index, args.workdir, preset)
    out = args.manifest or os.path.join(args.workdir, "batch.tsv")
    write_manifest(rows, out)
    counts = {}
    for r in rows:
        counts[r["source"].split(":")[0]] = counts.get(r["source"].split(":")[0], 0) + 1
    print(" ".join(f"{k}={v}" for k, v in sorted(counts.items())))
    print(f"manifeste : {out}")
    for p in render_sheets(rows, args.workdir):
        print(f"planche : {p}")


def cmd_sheet_batch(args):
    rows = read_manifest(args.manifest or os.path.join(args.workdir, "batch.tsv"))
    for p in render_sheets(rows, args.workdir):
        print(f"planche : {p}")


def cmd_apply(args):
    apply_rows(read_manifest(args.manifest or os.path.join(args.workdir, "batch.tsv")), args.workdir)


def cmd_keys(args):
    """Key prediction accuracy against the API: how far the maigret-wide import can trust it."""
    _, networks = icons.fetch_networks(icons.NETWORKS_APIS)
    api = set(networks)
    sites = [s for s in icons.osint_sites(args.workdir) if s[0] == "maigret"]
    matched = predicted = 0
    misses = []
    for s in sites:
        cands = key_candidates(s[1], s[2])
        hit = [k for k in cands if k in api]
        if not hit:
            continue
        matched += 1
        if cands[0] == hit[0]:
            predicted += 1
        else:
            misses.append(f"{s[1]} -> prédit {cands[0]}, API {hit[0]}")
    print(f"{matched} sites maigret présents dans l'API ; clé prédite exacte : {predicted} "
          f"({100 * predicted // max(matched, 1)} %)")
    for m in misses[: args.n]:
        print("  " + m)
