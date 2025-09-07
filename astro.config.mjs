// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import { defaultLang, i18n } from "./i18n.config";

// https://astro.build/config
export default defineConfig({
  // site: "https://tusitio.com", // cambia a tu dominio
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), compress()],

  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(i18n),
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
});