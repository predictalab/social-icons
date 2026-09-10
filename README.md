# Predicta Lab - Social icons

Bibliothèque React d'icônes de réseaux sociaux et de sources (700+), utilisée par les produits
Predicta Lab pour illustrer les résultats de recherche.

## Installation

```bash
npm i @predictalab/social-icons
```

https://www.npmjs.com/package/@predictalab/social-icons

## Usage

```tsx
import { SocialIcons, socialNetworks, type SourceTypes } from "@predictalab/social-icons";

<SocialIcons source="github" />

socialNetworks.github; // { color: "#161414", category: "programming", name?: string }
```

`source` est la clé de la source (minuscule, sans espace, identique à celle de sources-api :
`github`, `pr0gramm`, `thepiratebay`…). Une clé inconnue affiche une icône de partage générique.

`socialNetworks` expose pour chaque clé la couleur de marque, une catégorie (`social`,
`messaging_app`, `gaming`, `programming`…) et éventuellement un nom d'affichage.

## Développement

```bash
npm run dev     # aperçu de toutes les icônes sur http://localhost:5174/social-icons/
npm run build   # build rollup vers dist/
```

L'aperçu propose une recherche, un filtre par catégorie et un filtre **Nouveautés** (les clés
ajoutées à `sourceTypes.ts` depuis la dernière release).

## Ajouter des icônes

Une icône = une clé dans 3 fichiers, plus éventuellement un asset :

| Fichier | Rôle |
|---|---|
| `src/types/sourceTypes.ts` | l'union `SourceTypes` |
| `src/utils/socialNetwork.ts` | couleur, catégorie, nom d'affichage |
| `src/components/SocialIcons.tsx` | le `case` qui rend l'icône (Iconify ou `<img>` local) |
| `src/assets/social-icons/<clé>.png` | asset local (150 px max), seulement si la marque n'est pas dans simple-icons |

### Avec Claude Code (recommandé)

Le repo embarque un skill dans `.claude/skills/add-icons/`. Il est découvert automatiquement
dès que le repo est ouvert dans Claude Code, rien à installer. Deux façons de s'en servir :

```
/add-icons anaconda, bilibili, tetrio
```

ou en langage naturel (« ajoute une icône pour Bilibili ») : la description du skill le déclenche.

Le skill déroule la procédure complète :

1. ne traite que les clés qui n'ont pas encore de `case` ;
2. cherche la marque dans **simple-icons** (via Iconify) et récupère sa couleur officielle, en
   évitant les faux amis connus (`backstage` est le portail dev Spotify, `lens` l'IDE Kubernetes…) ;
3. sinon télécharge le logo depuis le site officiel (apple-touch-icon, manifest, og:image, avatars
   GitHub/X…) et produit une **planche-contact à relire** avant d'installer quoi que ce soit ;
4. en dernier recours, une icône `mdi` thématique ;
5. édite les 3 fichiers, lance `tsc` + `build`, vérifie l'aperçu, bumpe la version patch.

Prérequis machine : `python3` avec Pillow (`pip install pillow`) et `curl`. Le script
`.claude/skills/add-icons/scripts/icons.py` est aussi utilisable seul :

```bash
python3 .claude/skills/add-icons/scripts/icons.py check anaconda hexbear      # slug + couleur simple-icons
python3 .claude/skills/add-icons/scripts/icons.py fetch tetrio=tetr.io         # meilleur logo candidat
python3 .claude/skills/add-icons/scripts/icons.py sheet                        # planche-contact
python3 .claude/skills/add-icons/scripts/icons.py install tetrio               # PNG 150 px + couleur dominante
```

Le dossier de travail `.icons-work/` est ignoré par git.

### À la main

Suivre `.claude/skills/add-icons/SKILL.md` : c'est la procédure de référence, lisible sans Claude.

## Release

1. PR vers `master`, avec le bump de version patch dans `package.json`.
2. Après merge : `npm run deploy` (build + `npm publish`).
3. Bumper la dépendance dans les produits consommateurs (b2c-app, monitoring-app,
   predictalab-graph, stealersAI).
