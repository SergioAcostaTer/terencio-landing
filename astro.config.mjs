import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => 
        !page.includes('/legal/') && 
        !page.includes('/gracias') && 
        !page.includes('/atencion-al-cliente'),
      serialize(item) {
        if (item.url === 'https://terencio.es/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (
          item.url.includes('/blog/') || 
          item.url.includes('/noticias/') ||
          item.url.includes('/ofertas') ||
          item.url.includes('/carniceria')
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
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
  }
});