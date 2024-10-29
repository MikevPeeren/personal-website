import { MetadataRoute } from "next";

import { createClient } from "contentful";

const URL = "https://mikevpeeren.nl";

// Contentful client setup
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Function to fetch all blog posts from Contentful
async function getAllBlogPosts() {
  const response = await client.getEntries({
    content_type: "blogPost",
    limit: 1000,
  });

  return response.items;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all blog posts
  const allPosts = await getAllBlogPosts();

  // Generate sitemap entries for blog posts
  const blogPosts = allPosts.map((post) => ({
    url: `${URL}/blog/${post.fields.slug}`,
    lastModified: post.sys.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Static routes
  const staticRoutes = ["", "/blog", "/projects", "/about", "/contact"].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,
    }),
  );

  // Combine static routes and blog posts
  return [...staticRoutes, ...blogPosts];
}
