"use client";

import { Entry } from "contentful";
import { motion } from "motion/react";

import { BlogPostCard } from "./BlogPostCard";

import { BlogPostSkeleton } from "@/lib/contentful";

interface BlogPostGridProps {
  posts: Entry<BlogPostSkeleton>[];
}

export function BlogPostGrid({ posts }: BlogPostGridProps) {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <motion.div
          key={post.sys.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <BlogPostCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
}
