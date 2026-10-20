---
name: add-icons
description: Ajoute des icônes de réseaux/sources à @predictalab/social-icons à partir d'une liste de clés (ex. "anaconda, bilibili, tetrio") ; avec un nombre seul ("/add-icons 150"), traite directement un lot de N réseaux de l'API sans icône ; lancé sans argument, liste d'abord les réseaux de l'API Predicta (/networks) qui n'ont pas d'icône. Sourcing des logos (simple-icons d'abord, sinon asset local, sinon fallback mdi), édition des 2 fichiers, vérification et PR (sans bump : la version est bumpée à la publication). Utiliser dès qu'on demande d'ajouter, créer ou compléter des icônes, de vérifier que des sources ont bien leur icône, ou de trouver dans maigret quels réseaux n'ont pas encore d'icône.
---

# Ajouter des icônes à social-icons

Entrée : une liste de **clés de sources** (minuscules, sans espace, identiques aux clés
utilisées par les applications qui consomment la lib : `hexpm`, `pr0gramm`, `thepiratebay`…).
Si on te donne des noms de marques, demande ou déduis la clé avant de commencer.

Arguments de `/add-icons` :
- aucun : réseaux de l'API sans icône (étape 0), demander combien en traiter ;
- **un nombre seul** (`/add-icons 150`) : même chose, mais lot de N réseaux sans poser la
  question (`plan --api -n N`, étape 0 bis). Une clé ne commence jamais par un chiffre, donc
  pas d'ambiguïté ;
- des clés (`hexpm, tetrio`, ou `clé=domaine`) : seulement celles-ci.

**Branche** : chaque lot part d'un `origin/master` à jour (`git fetch` puis
`git switch -c feat/add-icons-<première clé>-<dernière clé> origin/master`),
et donne une PR mergée avant le lot suivant. Les lots ajoutent tous leurs blocs aux mêmes
endroits des 2 fichiers (fin de l'union, fin de l'objet) : deux branches
ouvertes en parallèle se conflictent à coup sûr. Si la PR du lot précédent n'est pas encore
mergée, le signaler à l'utilisateur et proposer de la merger d'abord ; à défaut, partir de sa
branche (PR empilée, base = branche précédente).

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
les réseaux `deprecated` et les compare aux clés de `socialNetwork.ts`. La colonne état
marque les réseaux `désactivé` : leur icône reste utile (ils reviendront après fix). Les clés de l'API sont celles des applications : pas besoin de les
confirmer. La colonne note signale les chiffres écrits en toutes lettres par l'API
(`sevencups` pour notre `7cups`) : si la forme à chiffres existe déjà, il suffit d'ajouter
un alias : une entrée `sevencups` qui reprend l'`icon` ou le `logo` de `7cups` (et la clé dans
`sourceTypes.ts`), sans chercher de nouveau logo.

Présenter à l'utilisateur le nombre de réseaux manquants et demander combien en traiter
(une PR de 100 à 200 clés est raisonnable avec le mode lot), sauf si `/add-icons N` a déjà
donné le nombre. Un lot = une branche et une PR ;
le build complet et la PR (étape 6) se font une fois à la fin du lot.

## 0 bis. Mode lot (dès ~20 clés) : plan → revue → apply

Les étapes 1 à 5 sont automatisées ; le travail manuel se limite à relire les planches et
corriger le manifeste.

```bash
python3 .claude/skills/add-icons/scripts/icons.py plan --api -n 100     # réseaux API sans icône
python3 .claude/skills/add-icons/scripts/icons.py plan appclan=app.clan.su hexpm   # clés données
python3 .claude/skills/add-icons/scripts/icons.py plan --maigret -n 200 [--tag t] [--include-disabled]
```

`plan` résout chaque clé (maigret, WhatsMyName, Sherlock, avec la règle de clé de l'API ;
`clé=domaine` pour les inconnues), télécharge les logos en parallèle et choisit une source :
`alias:` (chiffres en lettres), `si:<slug>` (simple-icons, note `homonyme ? vérifier` si le
slug ne correspond pas au domaine), `local` (logo ≥ 48 px, hors bannière), sinon `mdi:<icône>`
d'après les tags maigret, avec la couleur du favicon. Les favicons par défaut d'hébergeurs
(le « U » uCoz…) sont reconnus et basculent en mdi : un favicon identique sur ≥ 3 domaines est
appris dans `generic-favicons.json` (à commiter). Sortie : `.icons-work/batch.tsv` (une ligne
par clé : `key source color category name domain note`) et les planches
`.icons-work/batch-N.png` (36 icônes chacune, rendu final + pastille de couleur + nom).

**Relire chaque planche** (mêmes critères qu'à l'étape 3 : mauvais site, bannière, logo
flou) et corriger `batch.tsv` à la main : changer `source` (`mdi:…`, `si:…`), le nom (latin,
casse officielle), la catégorie. `?` = clé inconnue : relancer `plan clé=domaine` ou laisser,
`apply` l'ignore. Puis `icons.py review` pour régénérer les planches.

```bash
python3 .claude/skills/add-icons/scripts/icons.py apply
```

Valide tout le manifeste avant d'écrire (slug Iconify, icône mdi, couleur, catégorie, asset),
installe les assets en WebP 96 px, ajoute les blocs triés aux 2 fichiers et régénère
`assetLoaders.ts`, puis imprime la commande `inputs` pour la PR. Enchaîner sur l'étape 6.

`icons.py keys` mesure la règle de clé (nom maigret normalisé, chiffres de tête en lettres,
ou premier label quand le nom est un hôte : `abc-accounting.ucoz.net` → `abcaccounting`,
en sautant les préfixes de forum : `forum.cockroachlabs.com` → `cockroachlabs`, et les
sous-domaines de langue ou de section devant une marque : `zh.wikifur.com` → `wikifur`,
`wiki.openstreetmap.org` → `openstreetmap`, sauf chez les hébergeurs mutualisés où le
sous-domaine est la marque : `av.3dn.ru` → `av`) contre l'API :
la première clé candidate est exacte pour ~85 % des sites en 2026-10, les écarts étant surtout
des variantes rattachées au réseau parent. Des candidats de repli couvrent les autres
graphies vues dans l'API (`avto.dzerghinsk.org` → `avtodzerghinsk`). Certaines clés restent
choisies à la main par l'équipe API (`audacity` pour audacityteam.org, `bitcoinwiki` pour
bitcoin.it) : elles sortent en `?` et se résolvent via sources-api (étape 1 bis). `plan --maigret` ignore aussi ce que l'API replie sur un réseau existant : les sites de
`*.fandom.com` et `*.discourse.group` (→ `fandom`, `discourse`), les instances Mastodon,
Lemmy, GitLab et Gitea/Forgejo/Gogs (→ `mastodon`, `lemmy`, `gitlab`, `gitea` : sources-api
interroge une liste `INSTANCES` par moteur au lieu d'une clé par instance), et les sous-domaines d'une marque déjà
couverte (`forum.openwrt.org` → `openwrt`, `community.spotify.com` → `spotify`), sauf sur les
hébergeurs mutualisés. Un nom maigret en hôte + chemin perd son chemin
(`destroyrepeat.com/community` → `destroyrepeat`). Pour `plan --maigret`, les clés sont donc prédites : à confirmer avec l'équipe
API avant un import massif.

## 1. Ne traiter que ce qui manque

```bash
for k in <clés>; do grep -qE "^  \"?$k\"?: \{" src/utils/socialNetwork.ts && echo "OK $k" || echo "MANQUE $k"; done
```

Une clé peut aussi exister sous forme d'alias (`gist` reprend l'`icon` de `github`).
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

`INCONNU` : clé absente des trois bases. Le domaine est en général dans le service de la clé
du dépôt sources-api (`app/services/<clé>.py`, URLs appelées), consultable sans clone :

```bash
glab api "projects/113/repository/files/app%2Fservices%2F<clé>.py/raw?ref=master" --hostname gitlab.predictalab.com | grep -oE 'https?://[a-zA-Z0-9./_-]+' | sort -u
```

Sinon, demander le domaine à l'utilisateur plutôt que deviner.

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
`sherlock-data.json`) et rafraîchies automatiquement après 7 jours : maigret gagne des
centaines de sites par mois (6 206 fin septembre, 8 144 mi-octobre), et un cache périmé fait
passer de nouveaux réseaux de l'API pour inconnus. Les supprimer pour forcer le
rafraîchissement.

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
- icône App Store (site qui redirige vers l'App Store, ex. airbuds.fm) :
  `curl -s "https://itunes.apple.com/search?term=<nom>&entity=software&limit=3"` →
  `artworkUrl512` (vérifier `sellerName`)
- icône Play Store : chercher `play-lh.googleusercontent.com/...=w` dans la page de l'app,
  remplacer le suffixe par `=w512`
- Wikimedia bloque curl : ne pas insister, passer à une autre source

**Contrôle visuel obligatoire** avant d'installer :

```bash
python3 .claude/skills/add-icons/scripts/icons.py sheet
```

puis lire `.icons-work/contact.png`. Rejeter : lettre générique (fallback d'unavatar),
bannière, favicon 16 px flou, mauvais compte. Un candidat sur dix est faux en pratique.

Installation (WebP 96 px, affiche la couleur de marque, fond ignoré, à reporter dans
`socialNetwork.ts`, puis régénère `src/utils/assetLoaders.ts`) :

```bash
python3 .claude/skills/add-icons/scripts/icons.py install <clés>
```

## 4. Dernier recours : fallback mdi

Aucun artwork ≥ 48 px : icône mdi thématique + couleur dominante du favicon, comme
`mslearn` ou `thebigboss` (`icon: "mdi:earth"` dans son entrée).

## 5. Les 2 fichiers à éditer (ordre alphabétique des clés dans chaque bloc ajouté)

1. `src/types/sourceTypes.ts` — ajouter `| "<clé>"` à l'union (avant le `;` final).
2. `src/utils/socialNetwork.ts` — avant le `};` final :
   ```ts
   <clé>: {
     color: "#RRGGBB",      // simple-icons : couleur de marque ; local : couleur dominante
     category: "gaming",    // social | messaging_app | video_platform | adult | streaming | gaming | sport | ecommerce | finance | dating | other | programming | hacking | bot | search_engine | images-search-engine | paste
     name: "Nom affiché",   // casse officielle : "pr0gramm", "TETR.IO", "freeCodeCamp"
     icon: "simple-icons:<slug>", // nom Iconify (simple-icons:, mdi:…), dessiné en `color`
   },
   ```
   ou, pour un asset local (chargé à la demande, `name` sert de texte alternatif) :
   ```ts
     logo: "<clé>.webp",    // à la place de `icon`, jamais les deux
   ```
   `SocialIcons.tsx` n'a plus à être touché : il lit l'entrée de la clé.
   `logo` est typé par `src/utils/assetLoaders.ts`, généré à partir du dossier d'assets
   (une faute de frappe ou une mauvaise extension casse `tsc`). `icons.py install` le
   régénère ; pour un asset ajouté à la main (SVG officiel, etc.), lancer
   `npm run gen-assets`. Ne pas l'éditer, et le commiter avec le reste du lot.

## 6. Vérifier, livrer

```bash
npm run gen-assets && npx tsc --noEmit && npm run build
```

`git status` doit montrer `src/utils/assetLoaders.ts` modifié dès qu'un asset local a été
ajouté : sinon il manque au commit.

Smoke test dans l'aperçu (`npm run dev`, port 5174) : le filtre **Nouveautés** liste les clés
ajoutées à `sourceTypes.ts` depuis le dernier commit qui a touché `package.json` (le dernier
bump) : sans bump dans les PR de lots, il cumule tout ce que contiendra la prochaine
publication. Vérifier qu'aucune `<img>` n'est
cassée et qu'aucun SVG Iconify n'est vide :

```js
[...document.querySelectorAll('img')].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.alt)
```

Puis commit `feat: add N icons for <contexte>` (corps : les mappings de slugs non évidents et
la provenance des assets), PR vers `master`. **Ne pas toucher à `version`** dans
`package.json` : plusieurs PR de lots s'enchaînent avant une publication, et le bump se fait
une seule fois, au moment de publier (hors de ce skill).

La description de la PR liste **toutes** les icônes ajoutées, groupées par input (sert à les
retrouver dans l'interface des produits) ; ce bloc se génère avec :

```bash
python3 .claude/skills/add-icons/scripts/icons.py inputs <toutes les clés ajoutées>
```

Un réseau à plusieurs inputs apparaît dans chacun de ses groupes (username, name, email,
phone) ; les inputs rares (`network-domain`, `group-company`…) vont dans **other**, et les clés
absentes de l'API dans **hors API**. Le bump de version, la publication
npm et le bump des produits consommateurs ne font pas partie de ce skill.
