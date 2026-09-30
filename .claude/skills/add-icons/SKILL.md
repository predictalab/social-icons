---
name: add-icons
description: Ajoute des icônes de réseaux/sources à @predictalab/social-icons à partir d'une liste de clés (ex. "anaconda, bilibili, tetrio") ; lancé sans clé, liste d'abord les réseaux de l'API Predicta (/networks) qui n'ont pas d'icône. Sourcing des logos (simple-icons d'abord, sinon asset local, sinon fallback mdi), édition des 3 fichiers, vérification et bump de version. Utiliser dès qu'on demande d'ajouter, créer ou compléter des icônes, de vérifier que des sources ont bien leur icône, ou de trouver dans maigret quels réseaux n'ont pas encore d'icône.
---

# Ajouter des icônes à social-icons

Entrée : une liste de **clés de sources** (minuscules, sans espace, identiques aux clés
utilisées par les applications qui consomment la lib : `hexpm`, `pr0gramm`, `thepiratebay`…).
Si on te donne des noms de marques, demande ou déduis la clé avant de commencer.

Outillage : `python3 .claude/skills/add-icons/scripts/icons.py <sous-commande>`
(dépend de python3 + Pillow + curl ; dossier de travail `.icons-work/`, ignoré par git).

## 0. Lancé sans clé : partir de l'API

Si `/add-icons` est lancé sans liste de clés, les réseaux à traiter sont ceux que l'API
Predicta expose mais qui n'ont pas d'icône :

```bash
python3 .claude/skills/add-icons/scripts/icons.py missing
```

Lit l'endpoint interne `http://192.168.13.67:2936/staging/graph-search/networks` (tous les
réseaux, y compris ceux désactivés en attente de fix ; réseau local ou VPN seulement), et
bascule sur le public `https://dev-b2c-api.predictalab.com/networks` (réseaux actifs exposés
uniquement) s'il ne répond pas : la dernière ligne indique l'endpoint utilisé, le signaler à
l'utilisateur en cas de repli. Jamais mis en cache ; autre endpoint via `--api <url>`. Ignore
les réseaux `deprecated` et les compare aux `case` de `SocialIcons.tsx`. La colonne état
marque les réseaux `désactivé` : leur icône reste utile (ils reviendront après fix). Les clés de l'API sont celles des applications : pas besoin de les
confirmer. La colonne note signale les chiffres écrits en toutes lettres par l'API
(`sevencups` pour notre `7cups`) : si la forme à chiffres existe déjà, il suffit d'ajouter
un alias `case "sevencups":` au-dessus de `case "7cups":` (et la clé dans `sourceTypes.ts` /
`socialNetwork.ts`), sans chercher de nouveau logo.

Présenter à l'utilisateur le nombre de réseaux manquants et la liste, puis traiter **toutes**
les clés dans une seule branche et une seule PR (d'habitude 30 à 40 au maximum). En interne,
dérouler les étapes 1 bis à 5 par lots de 15 à 20 clés (alias faciles d'abord) : une planche
de contrôle visuel par lot, un commit par lot. Le bump de version, le build complet et la PR
(étape 6) se font une seule fois à la fin.

## 1. Ne traiter que ce qui manque

```bash
for k in <clés>; do grep -q "case \"$k\"" src/components/SocialIcons.tsx && echo "OK $k" || echo "MANQUE $k"; done
```

Une clé peut aussi exister sous forme d'alias (`case "gist":` juste au-dessus de `case "github":`).
Ne rien recréer qui existe déjà ; signaler à l'utilisateur ce qui était déjà couvert.

## 1 bis. Identifier chaque source (maigret)

Les clés viennent en grande partie des bases OSINT (maigret surtout). Avant de chercher un
logo, savoir **quel site** est derrière la clé :

```bash
python3 .claude/skills/add-icons/scripts/icons.py lookup <clés manquantes>
```

Cherche la clé dans maigret, puis WhatsMyName, puis Sherlock (nom normalisé, puis nom de
domaine, puis nom approché marqué `≈`), et affiche le domaine officiel + l'URL de profil, puis
une ligne `fetch clé=domaine` prête pour l'étape 3. Ce que ça tranche :
- les homonymes : `polygon` = polygon.com (média gaming), pas la blockchain de simple-icons ;
- les sous-services : `yandexznatoki` = yandex.ru/q, `yandexbugbounty` = yandex.ru/bugbounty ;
- `(désactivé dans maigret)` : le check est cassé chez maigret, le site existe quand même.

`INCONNU` : clé absente des trois bases ; demander le domaine à l'utilisateur plutôt que deviner.

**Trouver de nouveaux réseaux à ajouter** (quand on demande quoi ajouter ensuite, ou qu'on
fouille maigret) :

```bash
python3 .claude/skills/add-icons/scripts/icons.py lookup --missing [--tag gaming] [-n 50]
```

Liste les sites maigret actifs sans icône, un par domaine, triés par rang de popularité
(alexaRank). Les variantes d'un réseau déjà couvert (`VKByID`, `SteamGroup`, `Laracast` pour
laracasts.com…) sont écartées ; `sous-service de X ?` signale un sous-domaine ou chemin d'une
marque existante (maps.google.com) : icône propre ou alias, à décider. La « clé proposée » est
le nom maigret normalisé : la vraie clé est celle des applications consommatrices, à confirmer.

Les bases sont mises en cache dans `.icons-work/` (`maigret-data.json`, `wmn-data.json`,
`sherlock-data.json`) : les supprimer pour rafraîchir.

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

Partir du domaine donné par `lookup` (étape 1 bis). Il n'est pas toujours évident, vérifier
avant de fetcher : fanlink = toneden.io, manylink = manylink.co, eintracht = community.eintracht.de.

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
non évidents et la provenance des assets), PR vers `master`.

La description de la PR liste **toutes** les icônes ajoutées, groupées par input (sert à les
retrouver dans l'interface des produits) ; ce bloc se génère avec :

```bash
python3 .claude/skills/add-icons/scripts/icons.py inputs <toutes les clés ajoutées>
```

Un réseau à plusieurs inputs apparaît dans chacun de ses groupes (username, name, email,
phone) ; les inputs rares (`network-domain`, `group-company`…) vont dans **other**, et les clés
absentes de l'API dans **hors API**. La publication npm et le bump
des produits consommateurs ne font pas partie de ce skill.
