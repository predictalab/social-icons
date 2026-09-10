---
name: add-icons
description: Ajoute des icônes de réseaux/sources à @predictalab/social-icons à partir d'une liste de clés (ex. "anaconda, bilibili, tetrio"). Sourcing des logos (simple-icons d'abord, sinon asset local, sinon fallback mdi), édition des 3 fichiers, vérification et bump de version. Utiliser dès qu'on demande d'ajouter, créer ou compléter des icônes, ou de vérifier que des sources ont bien leur icône.
---

# Ajouter des icônes à social-icons

Entrée : une liste de **clés de sources** (minuscules, sans espace, identiques aux clés
utilisées par les applications qui consomment la lib : `hexpm`, `pr0gramm`, `thepiratebay`…).
Si on te donne des noms de marques, demande ou déduis la clé avant de commencer.

Outillage : `python3 .claude/skills/add-icons/scripts/icons.py <sous-commande>`
(dépend de python3 + Pillow + curl ; dossier de travail `.icons-work/`, ignoré par git).

## 1. Ne traiter que ce qui manque

```bash
for k in <clés>; do grep -q "case \"$k\"" src/components/SocialIcons.tsx && echo "OK $k" || echo "MANQUE $k"; done
```

Une clé peut aussi exister sous forme d'alias (`case "gist":` juste au-dessus de `case "github":`).
Ne rien recréer qui existe déjà ; signaler à l'utilisateur ce qui était déjà couvert.

## 2. simple-icons d'abord (Iconify)

```bash
python3 .claude/skills/add-icons/scripts/icons.py check <clés manquantes>
```

Pour chaque clé : slug servi par Iconify + couleur de marque officielle, ou `ABSENT` avec
des suggestions. Le script valide contre la collection **Iconify** (pas simple-icons develop) :
Iconify sert encore des icônes retirées de simple-icons (scribd, picartodottv…), c'est ce
qui compte pour `<Icon icon="simple-icons:…" />`.

Règles de jugement sur les suggestions :
- Le slug doit être **la marque de la source**, pas une marque voisine. Pièges connus :
  `backstage` = portail dev Spotify (utiliser `backstage-casting`), `lens` = IDE Kubernetes
  (pas Lens Protocol), `hive` = Hive smart-home (`hive-blockchain` pour hive.blog).
- Une marque parente est acceptable seulement si la source **est** ce produit :
  `discordgg` → `discord`, `codestudio` → `codingninjas`, `sublimetextforum` → `sublimetext`,
  `warpcast` → `farcaster`. Pas `pychess` → `python` ni `hexbear` → `lemmy` (instance ≠ logiciel).
- En cas de doute, préférer l'asset local (étape 3).

Confirmer l'existence des slugs retenus en une requête :
`curl -s "https://api.iconify.design/simple-icons.json?icons=a,b,c"` → `not_found` doit être absent.

## 3. Sinon, asset local

Trouver le domaine officiel de chaque source. Il n'est pas toujours évident, vérifier avant
de fetcher : fanlink = toneden.io, manylink = manylink.co, eintracht = community.eintracht.de.

```bash
python3 .claude/skills/add-icons/scripts/icons.py fetch tetrio=tetr.io hexpm=hex.pm ...
```

Le script essaie dans l'ordre d'efficacité : apple-touch-icon → icônes du web app manifest
(souvent 192/512 px, gros gain) → og:image (souvent une bannière 1200×630, à recadrer ou
rejeter) → /favicon.ico → Google faviconV2. Il garde le meilleur candidat et signale
`⚠ bannière ?` et `⚠ < 96px`.

Quand le résultat est mauvais, forcer une URL avec `--url clé=url`. Sources alternatives
éprouvées :
- avatar GitHub org : `https://github.com/<org>.png`
- avatar X : `https://unavatar.io/x/<handle>` (rate-limit sévère ~50/h/IP, vérifier que
  c'est bien le compte officiel)
- instances Lemmy : `https://<domaine>/api/v3/site` → `site_view.site.icon`
- icône Play Store : chercher `play-lh.googleusercontent.com/...=w` dans la page de l'app,
  remplacer le suffixe par `=w512`
- Wikimedia bloque curl : ne pas insister, passer à une autre source

**Contrôle visuel obligatoire** avant d'installer :

```bash
python3 .claude/skills/add-icons/scripts/icons.py sheet
```

puis lire `.icons-work/contact.png`. Rejeter : lettre générique (fallback d'unavatar),
bannière, favicon 16 px flou, mauvais compte. Un candidat sur dix est faux en pratique.

Installation (150 px max, PNG optimisé, affiche la couleur dominante à reporter dans
`socialNetwork.ts`) :

```bash
python3 .claude/skills/add-icons/scripts/icons.py install <clés>
```

## 4. Dernier recours : fallback mdi

Aucun artwork ≥ 48 px : icône mdi thématique + couleur dominante du favicon, comme
`mslearn` ou `thebigboss` (`<Icon icon="mdi:earth" color={socialNetworks.thebigboss.color} />`).

## 5. Les 3 fichiers à éditer (ordre alphabétique des clés dans chaque bloc ajouté)

1. `src/types/sourceTypes.ts` — ajouter `| "<clé>"` à l'union (avant le `;` final).
2. `src/utils/socialNetwork.ts` — avant le `};` final :
   ```ts
   <clé>: {
     color: "#RRGGBB",      // simple-icons : couleur de marque ; local : couleur dominante
     category: "gaming",    // social | messaging_app | video_platform | adult | streaming | gaming | sport | ecommerce | finance | dating | other | programming | hacking | bot | search_engine | images-search-engine | paste
     name: "Nom affiché",   // casse officielle : "pr0gramm", "TETR.IO", "freeCodeCamp"
   },
   ```
3. `src/components/SocialIcons.tsx` — juste avant `default:` :
   ```tsx
   case "<clé>":
     icon = <Icon icon="simple-icons:<slug>" color={socialNetworks.<clé>.color} />;
     break;
   ```
   ou, pour un asset local, un import en haut du fichier
   (`import <clé>png from "../assets/social-icons/<clé>.png";` — pas de chiffre en tête
   ni de `0` dans l'identifiant : `pr0gramm` → `prgrammpng`) et
   ```tsx
   case "<clé>":
     icon = <img src={<clé>png} alt="Nom affiché" />;
     break;
   ```

## 6. Vérifier, versionner, livrer

```bash
npx tsc --noEmit && npm run build
```

Smoke test dans l'aperçu (`npm run dev`, port 5174) : le filtre **Nouveautés** liste les clés
ajoutées à `sourceTypes.ts` depuis la dernière release. Vérifier qu'aucune `<img>` n'est
cassée et qu'aucun SVG Iconify n'est vide :

```js
[...document.querySelectorAll('img')].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.alt)
```

Puis : bump **patch** de `version` dans `package.json`, commit
`feat: add N icons for <contexte> and bump version to X.Y.Z` (corps : les mappings de slugs
non évidents et la provenance des assets), PR vers `master`. La publication npm et le bump
des produits consommateurs ne font pas partie de ce skill.
