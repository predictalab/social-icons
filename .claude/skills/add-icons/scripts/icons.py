#!/usr/bin/env python3
"""Outillage du skill add-icons.

Sous-commandes :
  missing [--api URL]              réseaux de l'API Predicta sans icône (défaut sans argument
                                   du skill) : endpoint interne, sinon /networks public
  inputs  <clé>... [--api URL]     liste markdown des clés groupées par input API (username,
                                   name, email, phone…) pour la description de la PR
  lookup  <clé>...                 domaine officiel de chaque clé d'après maigret, puis
                                   WhatsMyName et Sherlock ; imprime la ligne `fetch` prête
  lookup  --missing [--tag t] [-n N]
                                   sites maigret actifs sans icône, triés par popularité
  check   <clé>...                 slug simple-icons + couleur de marque pour chaque clé
  fetch   <clé>=<domaine>... [--url <clé>=<url>]
                                   télécharge le meilleur logo candidat par clé dans WORKDIR
  sheet                            planche-contact de WORKDIR/*.png → WORKDIR/contact.png
  install <clé>...                 copie WORKDIR/<clé>.png en WebP 96px dans les assets
                                   et affiche la couleur dominante
  plan    <clé>... | --api | --maigret [--tag t] [--include-disabled] [-n N]
                                   propose une source par clé (simple-icons, logo local, mdi
                                   auto, alias) → WORKDIR/batch.tsv + planches batch-N.png
  review                           régénère les planches depuis batch.tsv après retouches
  apply                            écrit les 2 fichiers + assets depuis batch.tsv
  keys                             précision de la clé prédite pour maigret vs l'API

WORKDIR : --workdir <dir> (défaut : ./.icons-work, ignoré par git).
Dépendances : python3, Pillow, curl.
"""
import argparse
import colorsys
import difflib
import json
import os
import re
import subprocess
import sys
import time
import urllib.parse
from io import BytesIO

from PIL import Image, ImageChops, ImageDraw, ImageStat

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
ASSETS = os.path.join(ROOT, "src", "assets", "social-icons")
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0 Safari/537.36"
)
ICONIFY_SET = "https://raw.githubusercontent.com/iconify/icon-sets/master/json/simple-icons.json"
SI_DATA = "https://raw.githubusercontent.com/simple-icons/simple-icons/master/data/simple-icons.json"
MAIGRET = "https://raw.githubusercontent.com/soxoj/maigret/main/maigret/resources/data.json"
WMN = "https://raw.githubusercontent.com/WebBreacher/WhatsMyName/main/wmn-data.json"
SHERLOCK = (
    "https://raw.githubusercontent.com/sherlock-project/sherlock/master/sherlock_project/resources/data.json"
)
# Interne (tous les réseaux, y compris désactivés ; réseau local ou VPN), puis public
NETWORKS_APIS = [
    "http://192.168.13.67:2936/staging/graph-search/networks",
    "https://dev-b2c-api.predictalab.com/networks",
]


def get(url, timeout=25):
    # inline data: icons and absurd URLs scraped from a page (one overflowed curl's argv)
    if not url.startswith(("http://", "https://")) or len(url) > 4096:
        return b""
    r = subprocess.run(
        ["curl", "-sL", "--max-time", str(timeout), "-A", UA, "-H", "Accept: */*", url],
        capture_output=True,
    )
    return r.stdout if r.returncode == 0 else b""


def as_image(data):
    try:
        im = Image.open(BytesIO(data))
        im.load()
        return im
    except Exception:
        return None


CACHE_DAYS = 7  # maigret gains hundreds of sites a month: a stale copy misses new API keys


def cached_json(workdir, name, url):
    path = os.path.join(workdir, name)
    stale = not os.path.exists(path) or time.time() - os.path.getmtime(path) > CACHE_DAYS * 86400
    if stale:
        data = get(url, timeout=60)
        try:
            json.loads(data)
            open(path, "wb").write(data)
        except ValueError:
            if not os.path.exists(path):
                sys.exit(f"impossible de télécharger {url}")
            print(f"{url} injoignable, cache {name} conservé", file=sys.stderr)
    return json.load(open(path))


# --------------------------------------------------------------------------- lookup
def norm(name):
    return re.sub(r"[^a-z0-9]", "", name.lower())


def site_domain(url):
    """https://www.yandex.ru/q/ → www.yandex.ru/q (forme attendue par `fetch`)."""
    u = urllib.parse.urlparse(url)
    path = "" if "{" in u.path else u.path.rstrip("/")
    return u.netloc + path


SECOND_LEVEL = {"org", "com", "co", "net", "gov", "edu", "ac", "or", "ne"}


def domain_label(domain):
    """maps.google.com → google, {username}.tilda.ws → tilda, kali.org.ru → kali."""
    parts = [p for p in domain.split("/")[0].split(".") if p and "{" not in p]
    if len(parts) >= 3 and parts[-2] in SECOND_LEVEL:
        parts = parts[:-1]  # org.ru, com.au, co.uk: the registrable label is one further left
    return norm(parts[-2]) if len(parts) >= 2 else ""


# Variantes de vérification maigret d'un même réseau (VKByID, SteamGroup, FlickrGroups…)
VARIANT = re.compile(r"(byid|by[a-z]*id|group|groups|archived|api|search|profile|users?|package)$")


def covered_by(domain, have):
    """Clé existante qui couvre déjà ce domaine (laracasts.com → laracasts, dev.to → devto),
    ou None. Un sous-domaine ou un chemin (maps.google.com, yandex.ru/q) n'est pas couvert."""
    host = domain.split("/")[0].removeprefix("www.")
    if "/" in domain or host.count(".") > 1:
        return None
    for k in (domain_label(domain), norm(host)):
        if k in have:
            return k
    return None


def osint_sites(workdir):
    """[(source, nom, domaine, url de profil, infos)] depuis maigret, WhatsMyName et Sherlock."""
    sites = []
    for name, s in cached_json(workdir, "maigret-data.json", MAIGRET)["sites"].items():
        # 388 sites have no urlMain (CaringBridge, BYOND): fall back to the profile URL's host
        main = s.get("urlMain") or s.get("url", "")
        if main:
            infos = {
                "rank": s.get("alexaRank") or 10**9,
                "tags": s.get("tags", []),
                "off": s.get("disabled"),
                "engine": s.get("engine"),
                "probe": s.get("urlProbe") or "",
            }
            sites.append(("maigret", name, site_domain(main), s.get("url", ""), infos))
    for s in cached_json(workdir, "wmn-data.json", WMN)["sites"]:
        u = urllib.parse.urlparse(s["uri_check"])
        sites.append(("wmn", s["name"], u.netloc, s.get("uri_pretty") or s["uri_check"], {"tags": [s.get("cat")]}))
    for name, s in cached_json(workdir, "sherlock-data.json", SHERLOCK).items():
        if isinstance(s, dict) and s.get("urlMain"):
            sites.append(("sherlock", name, site_domain(s["urlMain"]), s.get("url", ""), {}))
    return sites


def existing_keys():
    ts = open(os.path.join(ROOT, "src", "utils", "socialNetwork.ts")).read()
    return set(re.findall(r'^  "?([\w-]+)"?: \{', ts, re.M))


# --------------------------------------------------------------------------- missing
UNITS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
TENS = {"twenty": 2, "thirty": 3, "forty": 4, "fifty": 5, "sixty": 6, "seventy": 7, "eighty": 8, "ninety": 9}
NUMBER_WORD = re.compile("|".join(sorted(list(TENS) + UNITS, key=len, reverse=True)))


def digits_form(key):
    """Clé API aux chiffres écrits en lettres → forme à chiffres de nos clés :
    sevencups → 7cups, onethreethreesevenx → 1337x, twentythreehq → 23hq. None sinon."""
    out, rest = "", key
    while m := NUMBER_WORD.match(rest):
        word, rest = m.group(), rest[m.end():]
        if word in TENS:
            unit = NUMBER_WORD.match(rest)
            if unit and unit.group() in UNITS[1:]:
                out += f"{TENS[word]}{UNITS.index(unit.group())}"
                rest = rest[unit.end():]
            else:
                out += f"{TENS[word]}0"
        else:
            out += str(UNITS.index(word))
    return out + rest if out and rest else None


def fetch_networks(urls):
    """{clé: infos} depuis le premier endpoint qui répond. Deux formats : {"items": [{name, …}]}
    (interne, avec is_active) ou {clé: {…}} (public, uniquement des réseaux actifs)."""
    for url in urls:
        data = get(url, timeout=8)
        try:
            payload = json.loads(data)
        except ValueError:
            print(f"{url} injoignable, endpoint suivant", file=sys.stderr)
            continue
        if "items" in payload:
            return url, {n["name"]: n for n in payload["items"]}
        return url, payload
    sys.exit("aucun endpoint de réseaux joignable : " + ", ".join(urls))


def network_inputs(network):
    return sorted({i for action in network.get("actions", []) for i in action["inputs"]})


def cmd_missing(args):
    url, networks = fetch_networks([args.api] if args.api else NETWORKS_APIS)
    have = existing_keys()
    assets = {os.path.splitext(f)[0] for f in os.listdir(ASSETS)}
    missing = sorted(k for k, n in networks.items() if not n.get("deprecated") and k not in have)
    print(f"{'clé API':28s} {'type':14s} {'état':10s} {'inputs':24s} note")
    for key in missing:
        alt = digits_form(key)
        note = ""
        if alt and (alt in have or alt in assets):
            note = f"= {alt} déjà présent ({'entrée' if alt in have else 'asset'}) : alias à ajouter"
        elif alt:
            note = f"chiffres : {alt}"
        state = "actif" if networks[key].get("is_active", True) else "désactivé"
        inputs = ",".join(network_inputs(networks[key]))
        print(f"{key:28s} {networks[key].get('type', ''):14s} {state:10s} {inputs:24s} {note}")
    print(f"\n{len(missing)} réseaux sans icône sur {len(networks)} ({url})", file=sys.stderr)


MAIN_INPUTS = ["username", "name", "email", "phone"]


def cmd_inputs(args):
    """Bloc markdown pour la PR : chaque clé sous chacun de ses inputs, avec le nom affiché."""
    url, networks = fetch_networks([args.api] if args.api else NETWORKS_APIS)
    ts = open(os.path.join(ROOT, "src", "utils", "socialNetwork.ts")).read()
    names = dict(re.findall(r'^  "?([\w-]+)"?: \{[^}]*?name: "([^"]+)"', ts, re.M))
    groups, unknown = {}, []
    for key in sorted(args.keys):
        if key not in networks:
            unknown.append(key)
            continue
        label = f"{names.get(key, key)} (`{key}`)"
        inputs = network_inputs(networks[key])
        for inp in inputs:
            if inp in MAIN_INPUTS:
                groups.setdefault(inp, []).append(label)
        others = [i for i in inputs if i not in MAIN_INPUTS]
        if others:
            groups.setdefault("other", []).append(f"{label} – {', '.join(others)}")
    for inp in MAIN_INPUTS + ["other"]:
        if inp in groups:
            print(f"**{inp}** ({len(groups[inp])})\n")
            print("\n".join(f"- {g}" for g in groups[inp]) + "\n")
    if unknown:
        print(f"**hors API** ({len(unknown)})\n\n" + "\n".join(f"- {names.get(k, k)} (`{k}`)" for k in unknown))
    print(f"source : {url}", file=sys.stderr)


def cmd_lookup(args):
    sites = osint_sites(args.workdir)
    if args.missing:
        have = existing_keys()
        rows, seen = [], set()
        for s in sorted(sites, key=lambda s: s[4].get("rank", 0)):
            name, domain, infos = norm(s[1]), s[2], s[4]
            if s[0] != "maigret" or infos["off"] or name in have or domain in seen:
                continue
            if args.tag and args.tag not in infos["tags"]:
                continue
            stem = VARIANT.sub("", name)
            if stem != name and (stem in have or stem == domain_label(domain)):
                continue  # VKByID, SteamGroup… : même icône que le réseau déjà couvert
            if covered_by(domain, have):
                continue  # Laracast → laracasts, CodebergOrg → codeberg
            seen.add(domain)
            if "{" in s[1]:
                name = domain_label(domain)  # {username}.tilda.ws → tilda
            rows.append((name, domain, infos))
        print(f"{'clé proposée':26s} {'rang':>8s}  {'domaine':32s} {'tags':28s} note")
        for name, domain, infos in rows[: args.n]:
            rank = "-" if infos["rank"] == 10**9 else str(infos["rank"])
            label = domain_label(domain)
            note = f"sous-service de {label} ?" if label in have else ""
            print(f"{name[:26]:26s} {rank:>8s}  {domain:32s} {','.join(infos['tags'])[:28]:28s} {note}")
        print(f"\n{len(rows)} sites maigret actifs sans icône (1 ligne par domaine)", file=sys.stderr)
        return
    if not args.keys:
        sys.exit("lookup : donner des clés, ou --missing")

    fetch_args = []
    for key in args.keys:
        k = norm(key)
        exact = [s for s in sites if norm(s[1]) == k] or [s for s in sites if domain_label(s[2]) == k]
        # préfixe (WikimapiaProfile, IBM Video…) puis ressemblance (Laracast ↔ laracasts)
        near = [s for s in sites if s not in exact and len(k) >= 4 and norm(s[1]).startswith(k)]
        close = set(difflib.get_close_matches(k, [norm(s[1]) for s in sites], 3, 0.85))
        near += [s for s in sites if s not in exact and s not in near and norm(s[1]) in close]
        hits = exact or near
        if not hits:
            print(f"{key:18s} INCONNU  (ni maigret, ni WhatsMyName, ni Sherlock)")
            continue
        order = {"maigret": 0, "wmn": 1, "sherlock": 2}
        hits.sort(key=lambda s: (order[s[0]], s[1]))
        mark = "" if exact else "  ≈ approché, vérifier"
        for i, (src, name, domain, url, infos) in enumerate(hits[:3]):
            off = "  (désactivé dans maigret)" if infos.get("off") else ""
            print(f"{key if i == 0 else '':18s} {src:8s} {name:24s} {domain:32s} {url}{off}{mark if i == 0 else ''}")
        fetch_args.append(f"{key}={hits[0][2]}")
    if fetch_args:
        print("\nicons.py fetch " + " ".join(fetch_args))


# --------------------------------------------------------------------------- check
def si_slug(title):
    import unicodedata

    t = title.lower().replace("+", "plus").replace(".", "dot").replace("&", "and")
    t = unicodedata.normalize("NFD", t)
    t = "".join(c for c in t if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]", "", t)


def cmd_check(args):
    iconify = cached_json(args.workdir, "iconify-simple-icons.json", ICONIFY_SET)
    served = set(iconify["icons"]) | set(iconify.get("aliases", {}))
    data = cached_json(args.workdir, "simple-icons-data.json", SI_DATA)
    brands = {}
    for entry in data:
        brands[entry.get("slug") or si_slug(entry["title"])] = (entry["title"], "#" + entry["hex"])

    print(f"{'clé':22s} {'slug iconify':22s} {'couleur':8s} titre / suggestions")
    for key in args.keys:
        if key in served:
            title, color = brands.get(key, ("?", "?"))
            print(f"{key:22s} {'simple-icons:' + key:22s} {color:8s} {title}")
            continue
        near = difflib.get_close_matches(key, sorted(served), 4, 0.6)
        sub = [s for s in sorted(served) if len(key) >= 5 and key[:5] in s][:4]
        hints = ", ".join(dict.fromkeys(near + sub)) or "-"
        print(f"{key:22s} {'ABSENT':22s} {'':8s} proches : {hints}")


# --------------------------------------------------------------------------- fetch
def candidates(domain, html=None):
    base = f"https://{domain}"
    if html is None:
        html = get(base).decode("utf-8", "ignore")
    urls = []
    for m in re.finditer(r"<link[^>]+>", html, re.I):
        tag = m.group(0)
        rel = re.search(r'rel=["\']?([^"\'>]+)', tag, re.I)
        href = re.search(r'href=["\']([^"\']+)', tag)
        if not rel or not href:
            continue
        rel = rel.group(1).lower()
        if "apple-touch-icon" in rel or rel.strip() == "icon" or "shortcut" in rel:
            urls.append(("link", urllib.parse.urljoin(base, href.group(1))))
        elif "manifest" in rel:
            man_url = urllib.parse.urljoin(base, href.group(1))
            if "/mobiquo/" in man_url or "tapatalk" in man_url:
                continue  # Tapatalk smart-banner manifest: Tapatalk's logo, not the forum's

            try:
                man = json.loads(get(man_url))
                for ic in man.get("icons", []):
                    urls.append(("manifest", urllib.parse.urljoin(man_url, ic["src"])))
            except Exception:
                pass
    og = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]*content=["\']([^"\']+)', html, re.I)
    if og:
        urls.append(("og", urllib.parse.urljoin(base, og.group(1))))
    urls.append(("favicon", f"{base}/favicon.ico"))
    urls.append(("apple", f"{base}/apple-touch-icon.png"))
    urls.append(
        (
            "google",
            "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON"
            f"&fallback_opts=TYPE,SIZE,URL&url={base}&size=256",
        )
    )
    return urls


def effective_size(im):
    """Real resolution of a logo: a 16 px favicon served as 256 px (Advanced Custom Fields)
    survives a round trip through 16 px almost unchanged."""
    im = im.convert("RGBA")
    flat = Image.new("RGBA", im.size, "white")
    flat.alpha_composite(im)
    flat = flat.convert("RGB")
    for s in (16, 24, 32, 48, 64, 96):
        if s >= min(flat.size):
            break
        back = flat.resize((s, s), Image.LANCZOS).resize(flat.size, Image.LANCZOS)
        if sum(ImageStat.Stat(ImageChops.difference(flat, back)).mean) / 3 < 2:
            return s
    return min(flat.size)


def save_png(im, path, max_size=512):
    im = im.convert("RGBA")
    im.thumbnail((max_size, max_size), Image.LANCZOS)
    im.save(path, "PNG", optimize=True)
    return im.size


def cmd_fetch(args):
    forced = dict(u.split("=", 1) for u in (args.url or []))
    targets = dict(t.split("=", 1) for t in args.targets)
    for key in forced:
        targets.setdefault(key, None)  # une clé forcée n'a pas besoin de domaine
    for key, domain in targets.items():
        out = os.path.join(args.workdir, key + ".png")
        if key in forced:
            im = as_image(get(forced[key]))
            if not im:
                print(f"{key:18s} ÉCHEC url forcée {forced[key]}")
                continue
            print(f"{key:18s} forcé   {save_png(im, out)}  {forced[key]}")
            continue
        found = []
        for kind, url in candidates(domain):
            im = as_image(get(url))
            if im and min(im.size) >= 16:
                found.append((effective_size(im), kind, url, im))
        if not found:
            print(f"{key:18s} ÉCHEC   aucun candidat sur {domain}")
            continue
        # Priorité : taille, mais un og:image (souvent une bannière) passe après un vrai icône ≥ 128px
        found.sort(key=lambda f: (f[1] != "og" and f[0] >= 128, f[0]), reverse=True)
        size, kind, url, im = found[0]
        w, h = im.size
        flag = "  ⚠ bannière ?" if max(w, h) > 1.5 * min(w, h) else ""
        flag += "  ⚠ agrandi" if size < min(w, h) else ""
        flag += "  ⚠ < 96px" if size < 96 else ""
        print(f"{key:18s} {kind:8s} {(w, h)}  {url}{flag}")
        save_png(im, out)


# --------------------------------------------------------------------------- sheet
def cmd_sheet(args):
    files = sorted(f for f in os.listdir(args.workdir) if f.endswith(".png") and f != "contact.png")
    if not files:
        sys.exit("aucun PNG dans " + args.workdir)
    cols, cell, pad = 6, 140, 22
    rows = (len(files) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cell, rows * (cell + pad)), "white")
    draw = ImageDraw.Draw(sheet)
    for i, f in enumerate(files):
        x, y = (i % cols) * cell, (i // cols) * (cell + pad)
        im = Image.open(os.path.join(args.workdir, f)).convert("RGBA")
        im.thumbnail((cell - 16, cell - 16))
        bg = Image.new("RGBA", (cell, cell), "white")
        bg.paste(im, ((cell - im.width) // 2, (cell - im.height) // 2), im)
        sheet.paste(bg.convert("RGB"), (x, y))
        draw.text((x + 4, y + cell + 4), f[:-4][:22], fill="black")
    out = os.path.join(args.workdir, "contact.png")
    sheet.save(out)
    print(f"{out}  ({len(files)} icônes)")


# --------------------------------------------------------------------------- install
# Icons are displayed at 28-48 px: 96 px covers 2x screens, and WebP q90 is ~5x lighter than
# the former 150 px PNGs (assets are inlined as base64 chunks in the published package).
ASSET_SIZE = 96
ASSET_EXT = ".webp"


def save_asset(im, path):
    im = im.convert("RGBA")
    im.thumbnail((ASSET_SIZE, ASSET_SIZE), Image.LANCZOS)
    im.save(path, "WEBP", quality=90, method=6)
    return im.size


def _hsv(c):
    return colorsys.rgb_to_hsv(*(x / 255 for x in c))


def _contrast_on_white(c):
    def channel(v):
        v /= 255
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4

    lum = 0.2126 * channel(c[0]) + 0.7152 * channel(c[1]) + 0.0722 * channel(c[2])
    return 1.05 / (lum + 0.05)


def _readable(c):
    """Darken until usable as an icon/text colour on white: greys need more contrast."""
    need = 3 if _hsv(c)[1] < 0.15 else 1.4
    while _contrast_on_white(c) < need:
        c = [int(x * 0.94) for x in c]
    return "#%02X%02X%02X" % tuple(c)


def _plate(px, size):
    """Opaque pixels reachable from the shape's outline through small colour steps: the
    background plate of a square or rounded logo, gradients included."""
    opaque = lambda x, y: 0 <= x < size and 0 <= y < size and px[x, y][3] >= 128
    steps = ((1, 0), (-1, 0), (0, 1), (0, -1))
    seen = {
        (x, y)
        for y in range(size)
        for x in range(size)
        if opaque(x, y) and not all(opaque(x + dx, y + dy) for dx, dy in steps)
    }
    queue = list(seen)
    while queue:
        x, y = queue.pop()
        for dx, dy in steps:
            n = (x + dx, y + dy)
            if n not in seen and opaque(*n) and sum(abs(a - b) for a, b in zip(px[x, y][:3], px[n][:3])) < 30:
                seen.add(n)
                queue.append(n)
    return seen


def dominant_color(im):
    """Brand colour of a logo, never its background: a light or pastel plate (white, grey,
    gradient) is ignored, a strong plate (Codédex yellow, black) wins."""
    size = 64
    px = im.convert("RGBA").resize((size, size)).load()
    opaque = [(x, y) for y in range(size) for x in range(size) if px[x, y][3] >= 128]
    if not opaque:
        return "#000000"
    mean = lambda pts: [sum(px[p][i] for p in pts) // len(pts) for i in range(3)]
    bucket = lambda p: (px[p][0] // 24, px[p][1] // 24, px[p][2] // 24)
    plate = _plate(px, size)
    pixels = opaque
    if len(plate) >= 0.35 * len(opaque):
        h, s, v = _hsv(mean(plate))
        if not (v > 0.75 and s < 0.6):
            return _readable(mean(plate))  # brand-coloured plate
        # Light plate: drop it, its colour islands (inside letters) and other pastel pixels
        plate_buckets = {bucket(p) for p in plate}
        pixels = [
            p
            for p in opaque
            if p not in plate
            and bucket(p) not in plate_buckets
            and not (_hsv(px[p][:3])[1] < 0.6 and _hsv(px[p][:3])[2] > 0.8)
        ]
    buckets = {}
    for p in pixels:
        r, g, b, _ = px[p]
        h, s, v = _hsv((r, g, b))
        if v > 0.62 and s < 0.12:
            continue  # white / light grey
        weight = 3 if s > 0.25 and 0.15 < v < 0.95 else 1  # favour saturated colours
        c, acc = buckets.get(bucket(p), (0, [0, 0, 0, 0]))
        buckets[bucket(p)] = (c + weight, [acc[0] + r, acc[1] + g, acc[2] + b, acc[3] + 1])
    if not buckets:
        return _readable(mean(plate) if plate else [0, 0, 0])
    avg = lambda k: [buckets[k][1][i] // buckets[k][1][3] for i in range(3)]
    total = sum(acc[3] for _, acc in buckets.values())
    # A concentrated vivid accent (orange box, red mark) beats a larger black outline,
    # but scattered anti-aliasing does not
    vivid = [k for k in buckets if _hsv(avg(k))[1] > 0.35 and _hsv(avg(k))[2] > 0.25]
    pool = vivid if vivid and max(buckets[k][1][3] for k in vivid) >= 0.08 * total else list(buckets)
    return _readable(avg(max(pool, key=lambda k: buckets[k][0])))


def gen_asset_loaders():
    # LocalIcon's `file` prop is typed from this generated map: keep it in sync with the assets
    subprocess.run(["node", "scripts/gen-asset-loaders.mjs"], cwd=ROOT, check=True)


def cmd_install(args):
    for key in args.keys:
        src = os.path.join(args.workdir, key + ".png")
        if not os.path.exists(src):
            print(f"{key:18s} ABSENT de {args.workdir}")
            continue
        im = Image.open(src)
        color = dominant_color(im)
        size = save_asset(im, os.path.join(ASSETS, key + ASSET_EXT))
        print(f"{key:18s} {color}  {size}  -> src/assets/social-icons/{key}{ASSET_EXT}")
    gen_asset_loaders()


# --------------------------------------------------------------------------- main
def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--workdir", default=os.path.join(ROOT, ".icons-work"))
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("missing")
    s.add_argument("--api", help="endpoint des réseaux (défaut : interne, sinon public)")
    s = sub.add_parser("inputs")
    s.add_argument("keys", nargs="+")
    s.add_argument("--api", help="endpoint des réseaux (défaut : interne, sinon public)")
    s = sub.add_parser("lookup")
    s.add_argument("keys", nargs="*")
    s.add_argument("--missing", action="store_true", help="sites maigret actifs sans icône")
    s.add_argument("--tag", help="avec --missing : filtrer sur un tag maigret (gaming, coding…)")
    s.add_argument("-n", type=int, default=50, help="avec --missing : nombre de lignes (défaut 50)")
    s = sub.add_parser("check")
    s.add_argument("keys", nargs="+")
    s = sub.add_parser("fetch")
    s.add_argument("targets", nargs="*", metavar="clé=domaine")
    s.add_argument("--url", action="append", metavar="clé=url", help="forcer une URL pour une clé")
    sub.add_parser("sheet")
    s = sub.add_parser("install")
    s.add_argument("keys", nargs="+")
    s = sub.add_parser("plan")
    s.add_argument("keys", nargs="*")
    s.add_argument("--api", action="store_true", help="réseaux de l'API sans icône")
    s.add_argument("--maigret", action="store_true", help="sites maigret sans icône, par popularité")
    s.add_argument("--tag", help="avec --maigret : filtrer sur un tag maigret")
    s.add_argument("--include-disabled", action="store_true", help="avec --maigret : sites désactivés aussi")
    s.add_argument("-n", type=int, help="limiter au N premiers")
    s.add_argument("--manifest", help="chemin du manifeste (défaut : WORKDIR/batch.tsv)")
    s = sub.add_parser("review")
    s.add_argument("--manifest", help="chemin du manifeste (défaut : WORKDIR/batch.tsv)")
    s = sub.add_parser("apply")
    s.add_argument("--manifest", help="chemin du manifeste (défaut : WORKDIR/batch.tsv)")
    s = sub.add_parser("keys")
    s.add_argument("-n", type=int, default=30, help="nombre d'écarts affichés")
    args = p.parse_args()
    os.makedirs(args.workdir, exist_ok=True)
    commands = {"missing": cmd_missing, "inputs": cmd_inputs, "lookup": cmd_lookup, "check": cmd_check, "fetch": cmd_fetch, "sheet": cmd_sheet, "install": cmd_install}
    if args.cmd in commands:
        return commands[args.cmd](args)
    import batch  # batch pipeline (plan / review / apply / keys)

    {"plan": batch.cmd_plan, "review": batch.cmd_sheet_batch, "apply": batch.cmd_apply, "keys": batch.cmd_keys}[args.cmd](args)


if __name__ == "__main__":
    main()
