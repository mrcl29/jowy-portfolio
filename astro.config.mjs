// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  // site: "https://tusitio.com", // cambia a tu dominio
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), compress()],
});
