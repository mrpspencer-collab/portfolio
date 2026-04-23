import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    status: z.string().optional(),
    thumb: z.string().optional(),
    thumbBg: z.string().default('#1A1713'),
    thumbText: z.string().optional(),
    thumbTextColor: z.string().default('#5A5550'),
    metrics: z.array(z.string()).default([]),
    role: z.string().optional(),
    cta: z.string().default('Read Case Study'),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
