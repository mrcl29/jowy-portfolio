// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { defaultLang, locales } from "./i18n.config";
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  site: "https://jowy-portfolio.vercel.app/", // cambia a tu dominio
  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ],
  },
  server: {
    host: true, // Establece el host en '0.0.0.0'
    port: 4321,
  },

  integrations: [sitemap(), compress()],

  i18n: {
    defaultLocale: defaultLang,
    locales: locales,
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
