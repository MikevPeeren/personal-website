import { getMDXComponent } from "next-contentlayer/hooks";

import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

import styles from "./blog.module.scss";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return { title: post?.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

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
    </article>
  );
};

export default PostLayout;
