# Mella’s Café & Loungebar — Landingpage (Astro)

Statische Marketing-Seite mit Astro & Tailwind — optimiert für **[Cloudflare Pages](https://developers.cloudflare.com/pages/)**.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Cloudflare Pages

| Einstellung | Wert |
|------------|------|
| Framework preset | Astro (optional) oder „None“ |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (Repo-Root) |
| Node version | 20 oder 22 |

Umgebungsvariablen unter **Pages → Settings → Environment variables**:

- `PUBLIC_BOOKING_URL` — URL zum Buchungstool
- `PUBLIC_CRM_FORM_ACTION` — optional: POST-Endpunkt fürs Kontaktformular (CRM/Webhook); sonst Fallback per `mailto:`

Siehe `.env.example`.

## Inhalte & Konfiguration

Zentrale Texte, Kontakt und Öffnungszeiten: `src/config/site.ts`

## Lizenz

Private Nutzung für das Projekt vorbehalten — Inhalte/Rechtetexte eigenverantwortlich prüfen.
