import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https:www.myblog-astro.co.uk",
  integrations: [mdx(), sitemap()],
});
