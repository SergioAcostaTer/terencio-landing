import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }), 
    react(),
    icon()
  ],
  site: 'https://terenciomarket.es',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  }
});