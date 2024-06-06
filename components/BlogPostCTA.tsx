import Image from "next/image";
import Link from "next/link";

import { compareDesc, format, parseISO } from "date-fns";

import { posts } from "@/.velite";
import { cn, getReadingTime } from "@/lib/utils";

const BlogPostCTA = ({
  amount,
  currentBlogSlug,
  random = false,
  removeLatestBlog = false,
  searchedPosts,
}: {
  amount?: number;
  currentBlogSlug?: string;
  random?: boolean;
  removeLatestBlog?: boolean;
  searchedPosts?: [
    {
      slug: string;
      title: string;
      description: string;
      body: string;
      imageSrc: string;
      imageAlt: string;
      publishDate: string | number | Date;
      category: string;
    },
  ];
}) => {
  const postArray =
    searchedPosts && searchedPosts.length > 0 ? searchedPosts : posts;

  const filteredPosts = postArray
    .filter((post) => (currentBlogSlug ? post.slug !== currentBlogSlug : post))
    .sort(
      (
        a: { publishDate: string | number | Date },
        b: { publishDate: string | number | Date },
      ) =>
        random
          ? 0.5 - Math.random()
          : compareDesc(new Date(a.publishDate), new Date(b.publishDate)),
    );

  !searchedPosts?.length && removeLatestBlog && filteredPosts.shift();

  return filteredPosts.slice(0, amount ?? posts.length)?.map((post) => {
    const readingTime = getReadingTime(post.body);

    return (
      <Link
        href={`/blog/${post.slug}`}
        key={post.title}
        className="hover:cursor-pointer"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={post.imageSrc}
              className="w-full h-48 object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={500}
              height={300}
              title={post.imageAlt ?? ""}
              alt={post.imageAlt ?? ""}
            />
            <h3
              className={cn(
                "text-2xl w-full pt-6 text-wrap truncate",
                amount ? amount : 0 > 3 && "text-lg",
              )}
            >
              {post.title}
            </h3>
          </div>
          <div key={post.title}>
            <div className="flex flex-col gap-6 justify-between h-full">
              <div className="flex flex-col overflow-hidden w-full rounded-2xl justify-center items-start"></div>
              <div className="items-start justify-end flex flex-col gap-2">
                <span>{readingTime}</span>
                <div className="flex flex-row items-center gap-6 text-50 text-sm">
                  <time dateTime={post.publishDate as string}>
                    {format(
                      parseISO(post.publishDate as string),
                      "LLLL d, yyyy",
                    )}
                  </time>
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
};

export default BlogPostCTA;
