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
