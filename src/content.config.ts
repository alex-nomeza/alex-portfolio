import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      subtitle: z.string().min(1).optional(),
      summary: z.string().min(1),
      year: z.number().int(),
      order: z.number().int().nonnegative(),
      status: z.enum(['published', 'draft']),
      featured: z.boolean(),
      disciplines: z.array(z.string().min(1)).min(1),
      role: z.array(z.string().min(1)).min(1),
      client: z.string().min(1).optional(),
      cover: image(),
      coverAlt: z.string().min(1),
      technologies: z.array(z.string().min(1)).optional(),
      externalUrl: z.url().optional(),
      repositoryUrl: z.url().optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(1),
            caption: z.string().min(1).optional(),
            layout: z.enum(['full', 'wide', 'half', 'portrait']).default('wide'),
          }),
        )
        .optional(),
      seo: z
        .object({
          title: z.string().min(1).optional(),
          description: z.string().min(1).optional(),
          image: image().optional(),
        })
        .optional(),
    }),
});

const lab = defineCollection({
  loader: glob({ base: './src/content/lab', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    year: z.number().int(),
    status: z.enum(['active', 'prototype', 'archived']),
    draft: z.boolean().default(false),
    tags: z.array(z.string().min(1)).min(1),
    url: z.url().optional(),
    repositoryUrl: z.url().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { projects, lab };
