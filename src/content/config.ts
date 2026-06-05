import { defineCollection, z } from 'astro:content';

const artworks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string(),
    dimensions: z.string(),
    image: z.string(),
    order: z.number(),
    forSale: z.boolean().default(false),
    sold: z.boolean().default(false),
    price: z.number().optional(),
    currency: z.enum(['EUR', 'USD']).default('EUR'),
    stripePaymentLink: z.string().url().optional(),
  }),
});

export const collections = { artworks };
