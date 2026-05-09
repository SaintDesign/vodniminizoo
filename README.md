# vodní miniZOO Baška — Next.js 16

Statický Next.js web pro [vodní miniZOO Baška](https://www.vodniminizoo.cz). Plně server-rendered (Static Site Generation), 100% indexovatelný Google.

## Stack

- **Next.js 16** (App Router, React 19, Server Components)
- **TypeScript strict**
- **next/font** (Fraunces + Inter, self-hosted)
- **next/image** (AVIF/WebP, automatický srcset)
- **Vanilla CSS** s design tokens (žádný Tailwind)
- Hostováno na **Vercelu** (edge cache, image optimization)

## Struktura

```
app/                              ← App Router (každá složka = URL)
  layout.tsx                      ← root, fonty, metadata, JSON-LD
  page.tsx                        ← homepage
  globals.css                     ← design system
  o-nas/page.tsx
  vzdelavaci-programy/page.tsx
  program-svet-vody/page.tsx
  vyukovy-program-voda-v-pohybu/page.tsx
  fotogalerie/page.tsx
  navstivilinas/page.tsx
  souteze/page.tsx
  podpora/  dary/  sponzoring/
  kontakt/
  projekty-a-vyzvy/
  navstevni-rad/
  pravidla-ochrany-soukromi/
  licence-a-povinne-informace/
  sitemap.ts                      ← dynamický sitemap.xml
  robots.ts                       ← dynamický robots.txt

components/                       ← sdílené komponenty
  SiteHeader.tsx                  ← nav s mobile menu (client)
  SiteFooter.tsx                  ← server
  Hero.tsx                        ← homepage hero
  PageHero.tsx                    ← sub-page hero + breadcrumbs
  CTABanner.tsx
  RevealEffects.tsx               ← IntersectionObserver pro reveal
  icons.tsx                       ← inline SVG ikony

lib/
  site.ts                         ← brand & contact constants
  navigation.ts                   ← nav, footer links, all routes

public/assets/images/              ← logo a fotky
```

## Lokální vývoj

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # TypeScript check
```

## SEO

- Static prerendering — Google dostane plný HTML hned (žádná hydration)
- Metadata API — unique `<title>` + description + OG na každé stránce
- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`
- JSON-LD `Zoo` schema v root layoutu
- Canonical URLs na každé stránce

## Deploy na Vercel

1. Vercel detekuje Next.js automaticky (Application Preset = Next.js)
2. Build command: `next build` (default)
3. Output directory: `.next` (default)
4. Doménu připojit v Vercel Dashboardu

## URL struktura (zachována z původního webu)

`/`, `/o-nas`, `/vzdelavaci-programy`, `/program-svet-vody`, `/vyukovy-program-voda-v-pohybu`, `/fotogalerie`, `/navstivilinas`, `/souteze`, `/podpora`, `/dary`, `/sponzoring`, `/kontakt`, `/projekty-a-vyzvy`, `/navstevni-rad`, `/pravidla-ochrany-soukromi`, `/licence-a-povinne-informace`

Bývalé URL končily lomítkem (`/o-nas/`). Next.js trailing slash handling — pokud chceš zachovat staré tvary, lze nastavit `trailingSlash: true` v `next.config.mjs`.
