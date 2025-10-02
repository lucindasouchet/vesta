// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  },

  // // Astro’s built-in i18n
  // i18n: {
  //   defaultLocale: "en",           // fallback language
  //   locales: ["en", "fr", "es"],         // supported languages
  //   routing: "prefix",             // /en/, /fr/ URLs
  // },
});