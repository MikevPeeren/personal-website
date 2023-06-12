import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import BlogPreview from "../components/BlogPreview";

const Blog = async () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishDate), new Date(b.publishDate))
  );

  return (
    <div className="flex flex-col gap-2 md:flex-col">
      <h2 className="py-8">All Posts</h2>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts?.map((post) => (
          <BlogPreview
            key={post.title}
            publishDate={post.publishDate}
            title={post.title}
            description={post.description}
            imageAlt={post.imageAlt}
            imageSrc={post.imageSrc}
            link={`blog/${post._raw.flattenedPath}`}
          />
        ))}
      </section>
    </div>
  );
};

export default Blog;
