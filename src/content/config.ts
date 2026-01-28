import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Terencio Cash Market'),
    image: image().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: image(),
    tags: z.array(z.string()),
    category: z.string(),
    isBreaking: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'noticias': newsCollection,
};
