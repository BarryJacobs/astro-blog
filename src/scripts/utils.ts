import { getCollection, type CollectionEntry } from "astro:content";

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

export const filteredPosts = async (): Promise<CollectionEntry<"blogs">[]> => {
  const posts = await getCollection("blogs");
  return [...posts]
    .filter((x) => x.data.draft === false)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};
