"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";
import { motion } from "motion/react";

import { BlogPostSkeleton, isResolvedAsset } from "@/lib/contentful";
import {
  calculateReadingTime,
  getContentPreview,
  getStringFromField,
} from "@/lib/utils";

interface BlogPostCardProps {
  post: Entry<BlogPostSkeleton>;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const { title, featuredImage, publicationDate, content, slug } = post.fields;

  let imageUrl = "/placeholder.svg";
  let imageAlt = "Placeholder image";

  if (featuredImage && isResolvedAsset(featuredImage)) {
    imageUrl = `https:${featuredImage.fields.file?.url ?? ""}`;
    imageAlt =
      getStringFromField(featuredImage.fields.description) ||
      getStringFromField(title) ||
      "Blog post image";
  }

  const postTitle = typeof title === "string" ? title : "Untitled Post";
  const postDate =
    publicationDate instanceof Date
      ? publicationDate
      : new Date(publicationDate as string);
  const postContent = getContentPreview(content as Document);
  const readingTime = calculateReadingTime(content as Document);

  return (
    <Link href={`/blog/${slug}`}>
      <motion.div
        className="h-[23rem] flex flex-col border border-border-light dark:border-border-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card-light dark:bg-card-dark"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {featuredImage && (
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col flex-grow p-4">
          <motion.h2
            className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 line-clamp-2 mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {postTitle}
          </motion.h2>
          <motion.div
            className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>
              {postDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="mx-2">•</span>
            <span>{readingTime} min read</span>
          </motion.div>
          <motion.div
            className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {postContent}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
