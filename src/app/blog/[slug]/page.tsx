import { getMDXComponent } from "next-contentlayer/hooks";

import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

import styles from "./blog.module.scss";

import BlogPreview from "@/app/components/BlogPreview";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return { title: post?.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const otherPosts = allPosts
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  // TODO: Add a 404 page
  if (!post) return <>Post not found</>;

  const Content = getMDXComponent(post.body.code);

  return (
    <article className={styles.post}>
      <div className="mb-8 text-center">
        <time
          dateTime={post.publishDate}
          className="mb-1 text-xs text-gray-300"
        >
          {format(parseISO(post.publishDate), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content />
      <h2 className="py-8">Other Posts</h2>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
        {otherPosts?.map((post) => (
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
    </article>
  );
};

export default PostLayout;
