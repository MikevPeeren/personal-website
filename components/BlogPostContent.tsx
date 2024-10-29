import { Entry } from "contentful";

import { BlogPostCard } from "./BlogPostCard";
import BlogPostRenderer from "./BlogPostRenderer";
import { CenteredLayout } from "./CenteredLayout";

import { BlogPostSkeleton } from "@/lib/contentful";

interface BlogPostContentProps {
  post: Entry<BlogPostSkeleton>;
  otherPosts: Entry<BlogPostSkeleton>[];
}

export default function BlogPostContent({
  post,
  otherPosts,
}: BlogPostContentProps) {
  return (
    <CenteredLayout>
      <BlogPostRenderer post={post} />

      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Read more posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2">
          {otherPosts.map((otherPost) => (
            <BlogPostCard key={otherPost.sys.id} post={otherPost} />
          ))}
        </div>
      </div>
    </CenteredLayout>
  );
}
