# Exova Digital

Site vitrine premium pour **Exova Digital**, agence digitale accompagnant les PME françaises. Contenu éditable via **Sanity CMS**.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- [Sanity CMS](https://www.sanity.io)

## Démarrage

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Sanity CMS

### 1. Créer un projet Sanity

```bash
npx sanity@latest init --project-plan free
```

Lors de l'init, choisissez :
- **Create new project** (ou liez un projet existant)
- **Dataset** : `production`
- Notez le **Project ID** affiché

### 2. Configurer les variables d'environnement

Copiez `.env.local.example` vers `.env.local` et renseignez :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

### 3. Accéder au Studio

Avec le serveur Next.js lancé (`npm run dev`), ouvrez :

**[http://localhost:3000/studio](http://localhost:3000/studio)**

Connectez-vous avec votre compte Sanity pour créer et modifier le contenu.

### 4. Contenus éditables

| Type Sanity      | Utilisation                                      |
| ---------------- | ------------------------------------------------ |
| **Service**      | Cartes de la section Services                    |
| **Formule tarifaire** | Cartes de la section Tarifs               |
| **Question FAQ** | Accordéon FAQ                                    |
| **Témoignage**   | Section Témoignages (cocher « Afficher sur la page d'accueil ») |
| **Article de blog** | Page `/blog` et aperçu sur l'accueil        |

Chaque document dispose d'un champ **Ordre d'affichage** pour contrôler le tri.

### 5. Sans Sanity configuré

Le site utilise des **données de secours** intégrées (`src/sanity/lib/fallbacks.ts`). Le build et le développement fonctionnent sans `.env.local` — idéal pour la preview, mais le Studio nécessite un Project ID valide.

### 6. Déployer le Studio (optionnel)

Pour un Studio hébergé sur `*.sanity.studio` :

```bash
npm run sanity:deploy
```

## Structure

```
src/
├── app/
│   ├── page.tsx              # Accueil (données Sanity)
│   ├── blog/                 # Liste et articles
│   └── studio/               # Sanity Studio embarqué
├── components/
│   └── sections/             # Sections du site
└── sanity/
    ├── schemaTypes/          # Schémas CMS
    └── lib/                  # Client, requêtes, fallbacks
sanity.config.ts              # Configuration Studio
```

## Scripts

| Commande              | Description                    |
| --------------------- | ------------------------------ |
| `npm run dev`         | Serveur de développement       |
| `npm run build`       | Build production               |
| `npm run start`       | Serveur production           |
| `npm run sanity`      | Studio standalone (port 3333)  |
| `npm run sanity:deploy` | Déployer Studio sur Sanity   |

## Build production

```bash
npm run build
npm start
```

## Sections de l'accueil

- Hero
- Services *(Sanity)*
- Process
- Pourquoi nous
- Témoignages *(Sanity)*
- Tarifs *(Sanity)*
- FAQ *(Sanity)*
- Blog *(Sanity, si articles publiés)*
- Contact
