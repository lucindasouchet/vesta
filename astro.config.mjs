import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false
  },
  output: 'static', // enable SSG
  site: 'https://zigzag.com', // replace with our site URL -optional,
  middleware: ['./src/middleware/middleware.ts'],
});