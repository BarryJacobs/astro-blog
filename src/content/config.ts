import { z, defineCollection } from "astro:content";

const blogSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date().transform((str) => new Date(str)),
    author: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .strict(),
    description: z.string(),
    draft: z.boolean(),
    category: z.string(),
  }),
});

export const collections = {
  blogs: blogSchema,
};
