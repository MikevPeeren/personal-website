import { MetadataRoute } from "next";

import { compareDesc } from "date-fns";

import { posts } from "@/.velite";

const URL = "https://mikevpeeren.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const sortedAllPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate)),
  );

  const allPosts = sortedAllPosts.map(({ slug, publishDate }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: publishDate,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const dailyRoutes = ["/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.5,
  }));

  const otherRoutes = ["", "/projects", "/about", "/contact"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  // @ts-expect-error changeFrequency is correct
  return [...otherRoutes, ...dailyRoutes, ...allPosts];
}
