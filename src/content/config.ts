import { defineCollection, z } from "astro:content";

const landingContent = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  landingContent,
};
