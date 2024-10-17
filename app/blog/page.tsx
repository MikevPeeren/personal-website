import { compareDesc } from "date-fns";

import PageLayout from "../ui/PageLayout";

import { posts } from "@/.velite";
import BlogPostCard from "@/app/ui/BlogPostCard";
import BlogPostCTABlog from "@/app/ui/BlogPostCTABlog";
import SocialCard from "@/app/ui/SocialCard";

export default function Blog() {
  const sortedPosts = posts.sort(
    (
      a: { publishDate: string | number | Date },
      b: { publishDate: string | number | Date },
    ) => compareDesc(new Date(a.publishDate), new Date(b.publishDate)),
  );

  return (
    <PageLayout gap="large">
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
    </PageLayout>
  );
}
