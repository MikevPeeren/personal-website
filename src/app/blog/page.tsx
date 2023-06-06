import BlogPreview from "../components/BlogPreview";

import { getAllPostsMeta } from "@/lib/mdx";

const Blog = async () => {
  const posts = await getAllPostsMeta();

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
            link={`blog/${post.slug}`}
          />
        ))}
      </section>
    </div>
  );
};
// href={`blog/${post.slug}`}

export default Blog;
