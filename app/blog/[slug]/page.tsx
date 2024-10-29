import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogPostContent from "@/components/BlogPostContent";
import { PageWrapper } from "@/components/PageWrapper";

import { getEntries, getEntry, isResolvedAsset } from "@/lib/contentful";

export const revalidate = 60; // revalidate this page every 60 seconds

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getEntry(slug);

  if (!post || !post.fields) {
    return {
      title: "Post Not Found",
    };
  }

  let keywords: string[] = [];
  if (typeof post.fields.keywords === "string") {
    keywords = post.fields.keywords.split(",").map((k) => k.trim());
  } else if (Array.isArray(post.fields.keywords)) {
    keywords = post.fields.keywords;
  }

  let ogImageUrl: string | undefined;
  if (post.fields.featuredImage && isResolvedAsset(post.fields.featuredImage)) {
    ogImageUrl = `https:${post.fields.featuredImage.fields.file?.url}`;
  }

  const title =
    typeof post.fields.title === "string" ? post.fields.title : "Untitled Post";
  const description =
    typeof post.fields.description === "string" ? post.fields.description : "";
  const publishedTime =
    typeof post.fields.publicationDate === "string"
      ? post.fields.publicationDate
      : undefined;

  const ogImage = ogImageUrl
    ? {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: typeof title === "string" ? title : "Blog post image",
      }
    : undefined;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;

  const post = await getEntry(slug);
  const allPosts = await getEntries();

  if (!post) {
    notFound();
  }

  const otherPosts = allPosts
    .filter((p) => p.sys.id !== post.sys.id)
    .slice(0, 4);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.fields.title,
    datePublished: post.fields.publicationDate,
    dateModified: post.fields.publicationDate,
    description: post.fields.description,
    author: {
      "@type": "Person",
      name: "Mike van Peeren",
      url: "https://mikevpeeren.nl",
    },
    image:
      post.fields.featuredImage && isResolvedAsset(post.fields.featuredImage)
        ? `https:${post.fields.featuredImage.fields.file?.url}`
        : undefined,
    publisher: {
      "@type": "Person",
      name: "Mike van Peeren",
      url: "https://mikevpeeren.nl",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mikevpeeren.nl/blog/${slug}`,
    },
  };

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <BlogPostContent post={post} otherPosts={otherPosts} />
    </PageWrapper>
  );
}
