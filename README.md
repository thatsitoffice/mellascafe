# Mella's Café & Lounge Bar

Modern React/Next.js implementation of the Mella's Café homepage.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Sliders:** Swiper.js
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment auf Cloudflare Pages

Das Projekt ist für Cloudflare Pages optimiert.

1. Repository zu Cloudflare Pages verbinden
2. Build-Einstellungen (automatisch via `cloudflare-pages.yaml`):
   - **Build command:** `npm run build:cloudflare`
   - **Build output directory:** `dist`
   - **Node version:** 22.x

Die `cloudflare-pages.yaml` Datei wird automatisch erkannt. Alternativ können die Einstellungen auch manuell im Dashboard konfiguriert werden.

### Lokaler Build für Cloudflare Pages

```bash
npm run build:cloudflare
```

Dies führt aus:
1. Next.js Build
2. `@cloudflare/next-on-pages` Konvertierung
3. Kopierung nach `dist/` für Cloudflare Pages

## Customization

- **Colors:** Edit CSS variables in `app/globals.css` (specifically `--accent`).
- **Content:** Update text and image URLs in `data/site.ts` and `data/home.ts`.
- **Images:** Currently using Unsplash placeholders. Replace with local assets in `public/images/` and update paths in `data/home.ts`.
