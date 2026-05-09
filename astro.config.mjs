import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

/** Statischer Build — ideal für Cloudflare Pages (Ordner `dist` als Root). */
export default defineConfig({
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false })],
});
