import { notFound } from "next/navigation";

import { format, parseISO } from "date-fns";

import { posts } from "@/.velite";
import { getReadingTime } from "@/app/lib/utils";
import BlogPostCTA from "@/app/ui/BlogPostCTA";
import ArrowLeftIcon from "@/app/ui/icons/ArrowLeftIcon";
import { MDXContent } from "@/app/ui/MDXContent";
import NextLink from "@/app/ui/NextLink";
import SocialCard from "@/app/ui/SocialCard";

export const generateStaticParams = async () =>
  posts.map((post) => ({ slug: post.slug }));

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((post) => post.slug === params.slug);

  return {
    metadataBase: new URL("https://mikevpeeren.nl"),
    title: post?.title,
    description: post?.description,
    keywords: post?.keywords,
    openGraph: {
      title: post?.title,
      siteName: `https://mikevpeeren.nl/blog/${post?.slug}`,
      images: [new URL("https://mikevpeeren.nl" + "/public" + post?.imageSrc)],
      description: post?.description,
      url: `https://mikevpeeren.nl/blog/${post?.slug}`,
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) return notFound();

  const readingTime = getReadingTime(post.body);

  return (
    <div className="flex flex-col px-6 xl:px-96 lg:px-40 md:px-32 pt-48 gap-28">
      <div>
        <NextLink
          additionalClassNames="text-black/50 dark:text-white/50 pl-0"
          redirectHref="/blog"
          linkText="Back to blog"
          variant="tertiary"
          iconLeft={<ArrowLeftIcon />}
        />

        <div className="flex gap-32 flex-col">
          <div className="flex gap-4 flex-col">
            <h1>{post.title}</h1>
            <div className="flex flex-row items-center gap-6 text-50 text-xl font-bold">
              <span>{post.category}</span>
              <span>{readingTime}</span>
              <time dateTime={post.publishDate}>
                {format(parseISO(post.publishDate ?? ""), "LLLL d, yyyy")}
              </time>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row md:flex-col-reverse w-full gap-12">
            <div className="flex gap-8 flex-col">
              <MDXContent body={post.body} />
            </div>
            <SocialCard />
          </div>

          <div className="flex flex-col gap-8">
            <h2>See Also</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-2xl">
              <BlogPostCTA amount={3} random currentBlogSlug={params.slug} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
