import { compareDesc } from "date-fns";

import SocialCard from "@/components/SocialCard";

import BlogPostCard from "./BlogPostCard";
import BlogPostCTABlog from "./BlogPostCTABlog";

import { posts } from "@/.velite";

export default function Blog() {
  const sortedPosts = posts.sort(
    (
      a: { publishDate: string | number | Date },
      b: { publishDate: string | number | Date },
    ) => compareDesc(new Date(a.publishDate), new Date(b.publishDate)),
  );

  return (
    <div className="flex flex-col px-6 md:px-32 pt-48 gap-10 md:gap-28">
      <div className="flex gap-8 flex-col">
        <h1>Blog</h1>
        <h2 className="text-2xl text-50">
          Posts about Next.js, tech news and personal insights
        </h2>
      </div>
      <div className="flex gap-4 flex-col xl:flex-row justify-between">
        <div className="w-full">
          <BlogPostCard blogPost={sortedPosts[0]} />
        </div>
        <SocialCard />
      </div>

      <BlogPostCTABlog />
    </div>
  );
}
