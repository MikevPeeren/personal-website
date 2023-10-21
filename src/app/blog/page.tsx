import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import BlogPreview from "../components/BlogPreview";

const Blog = async () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate))
  );

  return (
    <>
      <title>Mike van Peeren&apos;s Blog</title>
      <div className="flex flex-col gap-2 md:flex-col">
        <h2 className="bg-gradient-to-r from-[#FFC94B] via-[#f9a66c] to-[#F17A7E] bg-clip-text py-8 text-transparent">
          All Posts
        </h2>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {posts?.map((post) => (
            <BlogPreview
              key={post.title}
              publishDate={post.publishDate}
              title={post.title}
              description={post.description}
              imageAlt={post.imageAlt}
              imageSrc={post.imageSrc}
              link={`/blog/${post._raw.flattenedPath}`}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Blog;
