#!/usr/bin/env python3
"""Outillage du skill add-icons.

Sous-commandes :
  check   <clé>...                 slug simple-icons + couleur de marque pour chaque clé
  fetch   <clé>=<domaine>... [--url <clé>=<url>]
                                   télécharge le meilleur logo candidat par clé dans WORKDIR
  sheet                            planche-contact de WORKDIR/*.png → WORKDIR/contact.png
  install <clé>...                 copie WORKDIR/<clé>.png en 150px optimisé dans les assets
                                   et affiche la couleur dominante

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
import urllib.parse
from io import BytesIO

from PIL import Image, ImageDraw

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
ASSETS = os.path.join(ROOT, "src", "assets", "social-icons")
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0 Safari/537.36"
)
ICONIFY_SET = "https://raw.githubusercontent.com/iconify/icon-sets/master/json/simple-icons.json"
SI_DATA = "https://raw.githubusercontent.com/simple-icons/simple-icons/master/data/simple-icons.json"


def get(url, timeout=25):
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


def cached_json(workdir, name, url):
    path = os.path.join(workdir, name)
    if not os.path.exists(path):
        data = get(url, timeout=60)
        if not data:
            sys.exit(f"impossible de télécharger {url}")
        open(path, "wb").write(data)
    return json.load(open(path))


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
def candidates(domain):
    base = f"https://{domain}"
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
                found.append((min(im.size), kind, url, im))
        if not found:
            print(f"{key:18s} ÉCHEC   aucun candidat sur {domain}")
            continue
        # Priorité : taille, mais un og:image (souvent une bannière) passe après un vrai icône ≥ 128px
        found.sort(key=lambda f: (f[1] != "og" and f[0] >= 128, f[0]), reverse=True)
        size, kind, url, im = found[0]
        w, h = im.size
        flag = "  ⚠ bannière ?" if max(w, h) > 1.5 * min(w, h) else ""
        flag += "  ⚠ < 96px" if min(w, h) < 96 else ""
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
def dominant_color(im):
    """Couleur dominante hors pixels transparents et quasi-blancs (fond)."""
    im = im.convert("RGBA").resize((64, 64))
    raw = im.tobytes()
    buckets = {}
    for r, g, b, a in (raw[i : i + 4] for i in range(0, len(raw), 4)):
        if a < 128 or (r > 235 and g > 235 and b > 235):
            continue
        h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
        weight = 3 if s > 0.25 and 0.15 < v < 0.95 else 1  # favorise les couleurs saturées
        k = (r // 24, g // 24, b // 24)
        c, acc = buckets.get(k, (0, [0, 0, 0, 0]))
        buckets[k] = (c + weight, [acc[0] + r, acc[1] + g, acc[2] + b, acc[3] + 1])
    if not buckets:
        return "#000000"
    _, acc = buckets[max(buckets, key=lambda k: buckets[k][0])]
    n = acc[3]
    return "#%02X%02X%02X" % (acc[0] // n, acc[1] // n, acc[2] // n)


def cmd_install(args):
    for key in args.keys:
        src = os.path.join(args.workdir, key + ".png")
        if not os.path.exists(src):
            print(f"{key:18s} ABSENT de {args.workdir}")
            continue
        im = Image.open(src)
        color = dominant_color(im)
        dest = os.path.join(ASSETS, key + ".png")
        size = save_png(im, dest, max_size=150)
        print(f"{key:18s} {color}  {size}  -> src/assets/social-icons/{key}.png")


# --------------------------------------------------------------------------- main
def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--workdir", default=os.path.join(ROOT, ".icons-work"))
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("check")
    s.add_argument("keys", nargs="+")
    s = sub.add_parser("fetch")
    s.add_argument("targets", nargs="*", metavar="clé=domaine")
    s.add_argument("--url", action="append", metavar="clé=url", help="forcer une URL pour une clé")
    sub.add_parser("sheet")
    s = sub.add_parser("install")
    s.add_argument("keys", nargs="+")
    args = p.parse_args()
    os.makedirs(args.workdir, exist_ok=True)
    {"check": cmd_check, "fetch": cmd_fetch, "sheet": cmd_sheet, "install": cmd_install}[args.cmd](args)


if __name__ == "__main__":
    main()
