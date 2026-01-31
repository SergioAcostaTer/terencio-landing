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
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://terencio.es/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (
          item.url.includes('/profesionales') || 
          item.url.includes('/ofertas') ||
          item.url.includes('/carniceria-tenerife')
        ) {
          item.changefreq = 'daily';
          item.priority = 0.9;
        } else if (
          item.url.includes('/asaderos-tenerife') || 
          item.url.includes('/comparativa-precios') ||
          item.url.includes('/quesos-el-hierro') ||
          item.url.includes('/productos-el-hierro') ||
          item.url.includes('/cash-and-carry')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else {
             item.priority = 0.5;
        }
        return item;
      }
    }), 
    react(),
    icon()
  ],
  site: 'https://terencio.es',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});