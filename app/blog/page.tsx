import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogPostGrid } from "@/components/BlogPostGrid";
import { CenteredLayout } from "@/components/CenteredLayout";
import { PageWrapper } from "@/components/PageWrapper";
import SocialCard from "@/components/SocialCard";

import { getEntries } from "@/lib/contentful";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function BlogIndex() {
  const posts = await getEntries();

  const firstPost = posts[0];

  posts.shift();

  return (
    <PageWrapper>
      <CenteredLayout>
        <div className="flex gap-8 flex-col">
          <div>
            <h1 className="font-bold m-0">Blog</h1>
            <h2 className="text-50 text-xl">
              Posts about Next.js, tech news and personal insights
            </h2>
          </div>

          <BlogPostCard post={firstPost} />
          <SocialCard />
          <BlogPostGrid posts={posts} />
        </div>
      </CenteredLayout>
    </PageWrapper>
  );
}
