<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Exova Digital Agent Guide

## Project Mission

Exova Digital is a premium French digital agency website for SMEs. The site presents conversion-focused websites, AI automations, and digital advertising services with a polished dark visual identity. The experience should feel high-end, direct, business-oriented, and French-first.

Do not casually redesign the website. Preserve the existing premium dark aesthetic unless the user explicitly requests a design change.

## Current Stack

- Next.js 16.2.9 with the App Router in `src/app`
- React 19.2.4
- TypeScript with `strict` enabled
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Sanity CMS through `next-sanity`
- Deployment target: Vercel
- Package manager: npm, with `package-lock.json` committed

## Required First Step For Code Changes

Before changing Next.js code, read the relevant local documentation in `node_modules/next/dist/docs/`. This project uses Next.js 16, and several APIs differ from older Next.js knowledge.

Useful local docs for this repo:

- App Router overview: `node_modules/next/dist/docs/01-app/index.md`
- Project structure: `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
- Server and Client Components: `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- Fetching data: `node_modules/next/dist/docs/01-app/01-getting-started/06-fetching-data.md`
- Caching and revalidation: `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` and `09-revalidating.md`
- CSS and Tailwind: `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`
- Images: `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`
- Metadata: `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`
- Deploying: `node_modules/next/dist/docs/01-app/01-getting-started/17-deploying.md`

Important Next.js 16 observations already reflected in the code:

- App Router pages and layouts are Server Components by default.
- Add `"use client"` only to interactive leaf components that need state, effects, event handlers, or browser APIs.
- Dynamic route `params` are typed as a `Promise`, as seen in `src/app/blog/[slug]/page.tsx`.
- `fetch` is not cached by default. Sanity fetches explicitly use `next: { revalidate: 60 }`.
- If client-side navigations become slow, the local docs mention `unstable_instant`; read `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md` before changing routing behavior.

## Architecture Overview

The app is intentionally compact and content-driven.

```txt
src/
  app/
    layout.tsx                 Root HTML, fonts, global metadata
    page.tsx                   Home route, fetches Sanity data in parallel
    blog/page.tsx              Blog listing route
    blog/[slug]/page.tsx       Blog article route, static params, metadata
    studio/[[...tool]]/        Embedded Sanity Studio at /studio
  components/
    layout/                    Header and Footer
    sections/                  Homepage sections
    ui/                        Shared primitives
    icons/                     Local service icons
  sanity/
    env.ts                     Sanity env defaults and configuration guard
    lib/client.ts              Sanity client
    lib/fetch.ts               CMS data access with fallbacks
    lib/queries.ts             GROQ queries
    lib/fallbacks.ts           Build-safe fallback content
    lib/image.ts               Sanity image URL builder
    schemaTypes/               Studio document schemas
```

Top-level config:

- `next.config.ts` allows remote images from `cdn.sanity.io`.
- `eslint.config.mjs` uses Next core web vitals and TypeScript rules.
- `postcss.config.mjs` loads Tailwind v4.
- `sanity.config.ts` configures the embedded Studio with `basePath: "/studio"`.
- `sanity.cli.ts` configures Sanity CLI commands.

## Routes And Rendering

- `/` renders the homepage in `src/app/page.tsx`.
- `/blog` renders all blog previews.
- `/blog/[slug]` renders individual articles and calls `notFound()` when missing.
- `/studio` renders Sanity Studio as a client component.

Data is fetched in Server Components or server-side helper functions, then passed to presentational components as typed props. Keep this model unless there is a concrete reason to move data loading elsewhere.

`Header`, `Accordion`, `ContactCTA`, and Sanity Studio are Client Components because they use state, effects, event handlers, or browser-only behavior. Most other components should stay server-compatible.

## Content And CMS Model

Sanity is optional for local build/dev. If `NEXT_PUBLIC_SANITY_PROJECT_ID` is missing, the site uses fallback content from `src/sanity/lib/fallbacks.ts`.

Environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

Editable Sanity types:

- `service`: homepage Services cards
- `pricingPlan`: homepage Pricing cards
- `faqItem`: FAQ accordion entries
- `testimonial`: homepage Testimonials when `featured == true`
- `post`: blog listing and detail pages

When adding or changing CMS fields, update all of these together:

1. Schema in `src/sanity/schemaTypes/`
2. GROQ query in `src/sanity/lib/queries.ts`
3. TypeScript type in `src/sanity/types.ts`
4. Fallback data in `src/sanity/lib/fallbacks.ts`
5. Components consuming the data

Keep fallback data useful and build-safe. The site should still compile and render without a configured Sanity project.

## Design System

The brand is premium, dark, minimal, and conversion-focused.

Core visual language:

- Background: near-black `#050505`
- Surfaces: subtle translucent whites, usually `bg-white/[0.02]` to `bg-white/[0.06]`
- Borders: low-contrast white overlays, often `border-white/[0.06]`
- Accent: indigo, especially `#6366f1`, `text-indigo-400`, `bg-indigo-500`
- Text: white headings, zinc body copy, muted zinc metadata
- Fonts: Geist Sans and Geist Mono through `next/font/google`
- Layout width: `mx-auto max-w-6xl px-6`
- Section rhythm: commonly `py-24 lg:py-32`
- Cards: `rounded-2xl` is common in the current design; keep radius choices consistent with existing components

Global helpers in `src/app/globals.css`:

- `.gradient-text`
- `.gradient-border`
- `.hero-glow`
- `.grid-pattern`
- `.animate-fade-up` and animation delay classes

Shared UI primitives:

- `Button` supports `primary`, `secondary`, and `ghost` variants.
- `SectionLabel` is the small pill label used across sections.
- `Accordion` handles FAQ disclosure behavior.
- `PortableTextContent` maps Sanity rich text to article typography.

Design rules for future tasks:

- Do not change the site design unless explicitly requested.
- Reuse existing spacing, surfaces, typography, and section structure before inventing new styles.
- Keep French copy polished, concise, and business-oriented.
- Preserve responsive behavior across mobile and desktop.
- Avoid adding heavy client-side libraries for simple static sections.
- Use `next/image` for Sanity images and keep `cdn.sanity.io` remote image support in sync with `next.config.ts`.

## Coding Conventions

- Use TypeScript and keep `strict` clean.
- Use the `@/` alias for imports from `src`.
- Prefer named exports for components, matching the existing codebase.
- Keep components small and prop-driven.
- Prefer Server Components. Add `"use client"` only when necessary.
- Keep client component boundaries narrow to reduce browser JavaScript.
- Keep data fetching in `src/sanity/lib/fetch.ts` or route-level Server Components.
- Do not expose secrets to client components. Only `NEXT_PUBLIC_` Sanity values are currently used.
- Use semantic HTML where practical: `section`, `header`, `main`, `article`, `footer`, `time`, `blockquote`.
- Maintain accessible labels for interactive controls.
- Keep comments rare and useful.

Formatting style:

- Two-space indentation.
- Double quotes in TS/TSX imports and strings, matching the existing files.
- Semicolons are used.
- Tailwind classes are written inline; there is no separate component style system.

## Local Development

Install and run:

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Common scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run sanity
npm run sanity:deploy
```

Local URLs:

- Website: `http://localhost:3000`
- Embedded Studio: `http://localhost:3000/studio`
- Standalone Sanity Studio: usually `http://localhost:3333` via `npm run sanity`

## Verification Workflow

For documentation-only changes:

- No build is required unless the docs describe commands or behavior that should be checked.

For code changes:

1. Read the relevant Next.js local docs first.
2. Run `npm run lint`.
3. Run `npm run build` for changes touching routes, data fetching, Sanity, images, metadata, or config.
4. Manually inspect the affected page in a browser for visual changes.
5. Check mobile and desktop layouts when changing UI.

If a command cannot run because of missing credentials or environment, document the limitation clearly.

## Deployment Workflow

Primary deployment target is Vercel.

Expected Vercel settings:

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output: managed by Next/Vercel
- Required environment variables mirror `.env.local.example`

Production content comes from Sanity when configured. Without a Sanity project ID, the site will still build using fallback content, but `/studio` is not useful for real editing.

Sanity Studio options:

- Embedded Studio at `/studio` inside the Next app.
- Optional hosted Sanity Studio deployment via `npm run sanity:deploy`.

## Current Functional Notes

- The contact form is currently client-only and simulates success state; it does not submit to an API, CRM, or email service.
- Blog preview on the homepage is hidden when there are no posts.
- Testimonials are hidden when there are no featured testimonials.
- Blog fallback posts are currently empty.
- Footer legal/privacy links are placeholders (`href="#"`).
- Service icons are a fixed union: `website`, `automation`, `ads`.

## Roadmap And Future Priorities

Near-term:

- Wire the contact form to a real endpoint, CRM, or email provider.
- Add legal pages: mentions legales, politique de confidentialite, cookie policy.
- Add real favicon/app icons and Open Graph imagery.
- Add sitemap and robots metadata routes.
- Improve blog SEO with article metadata, OG images, and structured data.

Content/CMS:

- Add draft/preview mode for Sanity editorial review.
- Consider Sanity webhook-driven revalidation when content changes.
- Add richer image alt guidance and validation in Studio.
- Expand service icons only when schema, types, fallbacks, and UI are updated together.

Quality/performance:

- Add Playwright smoke tests for homepage, blog, article page, and studio availability.
- Add accessibility checks for navigation, mobile menu, accordion, and form states.
- Review Core Web Vitals after real media/content is added.
- Consider loading states or streaming boundaries if Sanity latency affects navigation.

Business/product:

- Add case studies or portfolio pages.
- Add conversion tracking and analytics.
- Add testimonials/case study schema markup.
- Add a clearer lead qualification flow once the form backend exists.

## Guardrails For Future Agents

- Preserve this `AGENTS.md` and improve it when new architecture or workflow decisions are made.
- Do not remove the Next.js warning block.
- Do not overwrite user changes. Inspect the working tree before editing.
- Do not redesign the website unless the user asks.
- Keep changes narrow and consistent with existing patterns.
- When in doubt, prefer a small, typed, server-first change that keeps the site buildable without Sanity credentials.
