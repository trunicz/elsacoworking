import { defineCollection, z } from "astro:content";

const landingContent = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  landingContent,
};
