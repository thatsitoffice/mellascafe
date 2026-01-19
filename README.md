# Mella's Café & Lounge Bar

Modern Astro implementation of the Mella's Café homepage, optimized for Cloudflare Pages.

## Tech Stack

- **Framework:** Astro 4.x
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** React (Islands Architecture)
- **Animations:** Framer Motion
- **Sliders:** Swiper.js
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:4321](http://localhost:4321) with your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Deployment auf Cloudflare Pages

Das Projekt ist für Cloudflare Pages optimiert mit dem `@astrojs/cloudflare` Adapter.

1. Repository zu Cloudflare Pages verbinden
2. Build-Einstellungen (automatisch via `cloudflare-pages.yaml`):
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22.x

Die `cloudflare-pages.yaml` Datei wird automatisch erkannt. Alternativ können die Einstellungen auch manuell im Dashboard konfiguriert werden.

### Lokaler Build

```bash
npm run build
```

Der Build-Output wird im `dist/` Verzeichnis erstellt und ist bereit für Cloudflare Pages.

## Projektstruktur

```
/
├── public/              # Statische Assets (Bilder, etc.)
├── src/
│   ├── components/
│   │   ├── astro/      # Astro-Komponenten (statisch)
│   │   └── react/      # React Islands (interaktiv)
│   ├── data/           # Daten und Konfiguration
│   ├── layouts/        # Astro Layouts
│   ├── pages/          # Seiten (Routing)
│   └── styles/         # Globales CSS
├── astro.config.mjs    # Astro Konfiguration
└── package.json
```

## Customization

- **Colors:** Edit CSS variables in `src/styles/global.css` (specifically `--accent`).
- **Content:** Update text and image URLs in `src/data/site.ts` and `src/data/home.ts`.
- **Images:** Currently using Unsplash placeholders. Replace with local assets in `public/images/` and update paths in `src/data/home.ts`.

## React Islands

Interaktive Komponenten (Header, Slider, Modal, etc.) sind als React Islands implementiert und werden nur client-side geladen, wenn nötig. Dies sorgt für optimale Performance.

## Features

- ✅ Responsive Design
- ✅ Dark Theme mit warmem Akzent-Rot
- ✅ Hero Slider mit Parallax-Effekten
- ✅ Reservation Modal
- ✅ Mobile Menu
- ✅ Testimonials Slider
- ✅ Blog Slider
- ✅ Stats Counter mit Animationen
- ✅ Newsletter Subscription
- ✅ Optimiert für Cloudflare Pages Edge Runtime
