
import { compareDesc } from "date-fns";
import { posts } from '@/.velite';

const URL = "https://mikevpeeren.nl";

export default async function sitemap() {
  const sortedAllPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate))
  );

  const allPosts = posts.map(({ slug, publishDate }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: publishDate,
    changeFrequency: "daily",
  }));

  const routes = ["", "/blog","/projects","/about","/contact"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
  }));

  return [...routes, ...allPosts];
}
