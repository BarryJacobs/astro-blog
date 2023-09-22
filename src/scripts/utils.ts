import type { Post } from "../types";
import { getCollection } from "astro:content";

export const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

export const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-GB", {
    timeZone: "UTC",
  });

export const filteredPosts = async (): Promise<Post[]> => {
  const posts = await getCollection("blogs");
  return [...posts]
    .filter((x) => x.data.draft === false)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};
