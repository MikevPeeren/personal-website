import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const URL = "https://mikevpeeren.nl";

export default async function sitemap() {
  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate))
  );

  const posts = sortedAllPosts.map(({ _raw, publishDate }) => ({
    url: `${URL}/blog/${_raw.flattenedPath}`,
    lastModified: publishDate,
    changeFrequency: "daily",
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
  }));

  return [...routes, ...posts];
}
