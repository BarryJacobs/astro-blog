import { filteredPosts } from "../scripts/utils";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await filteredPosts();
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "My Astro Blog",
    description: "A humble developers guide to the future",
    site: context.site,
    items: posts.map((post) => ({
      link: `/blogs/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `<author>${post.data.author}</author>`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
