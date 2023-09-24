# Astro Blog Demo

## Overview

I'm primarily a React developer but wanted to pick up Astro as an additional development tool and in the process have a quick look at Bun as a replacement for Node in dev environments. So far, I've been extremely impressed with Astro and seeing less and less use cases for NextJS in the process.

For initial learning, I followed this excellent [Youtube course](https://www.youtube.com/watch?v=F2pw1C9eKXw&list=PLoqZcxvpWzzeRwF8TEpXHtO7KYY6cNJeF) by Chris Pennington and I would highly recommend starting with this to learn the basics of Astro. The [official documentation](https://docs.astro.build/en/getting-started/) is also extremely good and worth a read.

The course was built using an earlier version of Astro, so as I followed along through the course I've updated some of the content to use newer Astro features e.g.: replacing the inline markdown files with an mdx content collection. I've also added stronger typing to the components and basic view transitions for the post images.

The only part of the tutorial I haven't implemented was the SEO section but I wanted to move on to another project integrating Astro with a CMS, which is now available [here](https://github.com/BarryJacobs/astro-blog-sanity).

A demo of the site can be found [here](https://thriving-unicorn-d49a30.netlify.app/).

## Bun

With it's initial 1.0 release, I decided to have a look to see how it works for development and so far I've encountered no issues with Astro integration. It has many uses and I expect it's adoption to be extensive. The offical documentation can be found [here](https://bun.sh/).

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                        |
| :------------------------ | :-------------------------------------------- |
| `bun install`             | Installs dependencies                         |
| `bun --bun astro dev`     | Starts local dev server at `localhost:4321`   |
| `bun --bun astro build`   | Build your production site to `./dist/`       |
| `bun --bun astro preview` | Preview your build locally, before deploying  |
| `bunx astro add react`    | Use Astro integrations with astro add command |
