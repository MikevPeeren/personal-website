import { posts } from '@/.velite';
import { cn } from "@/lib/utils";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const BlogPostCTA = ({
  amount,
  currentBlogSlug,
  random = false,
  removeLatestBlog = false,
}: {
  amount?: number;
  currentBlogSlug?: string;
  random?: boolean;
  removeLatestBlog?: boolean;
}) => {
  const filteredPosts = posts
    .filter((post) =>
      currentBlogSlug ? post.slug !== currentBlogSlug : post,
    )
    .sort(
      (
        a: { publishDate: string | number | Date },
        b: { publishDate: string | number | Date },
      ) =>
        random
          ? 0.5 - Math.random()
          : compareDesc(new Date(a.publishDate), new Date(b.publishDate)),
    );

  removeLatestBlog && filteredPosts.shift();

  return filteredPosts.slice(0, amount ?? posts.length)?.map((post) => (
    <Link
      href={`/blog/${post.slug}`}
      key={post.title}
      className="hover:cursor-pointer"
    >
      <div key={post.title} className="max-w-1/3 text-start h-full">
        <div className="flex flex-col gap-6 justify-between h-full">
          <div className="flex flex-col overflow-hidden w-full rounded-2xl justify-center items-start">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={post.imageSrc}
                className={cn(
                  "rounded-2xl hover:scale-110 transition duration-300 ease-in-out object-cover h-auto lg:max-h-64",
                  amount ? amount : 0 > 3 && "max-h-40",
                )}
                width={800}
                height={800}
                alt={post.imageAlt ?? ""}
              />
            </div>

            <h3
              className={cn(
                "text-2xl w-full lg:w-3/4 pt-6",
                amount ? amount : 0 > 3 && "text-lg",
              )}
            >
              {post.title}
            </h3>
          </div>
          <div className="items-start justify-end flex flex-col gap-2">
            <span>{post.readingTime?.text}</span>
            <div className="flex flex-row items-center gap-6 text-50 text-sm">
              <time dateTime={post.publishDate}>
                {format(parseISO(post.publishDate), "LLLL d, yyyy")}
              </time>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default BlogPostCTA;