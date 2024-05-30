import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    publishDate: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    imageAlt: {
      type: "string",
      description: "The alt of the image",
      required: false,
    },
    imageSrc: {
      type: "string",
      description: "The src of the image",
      required: true,
    },
    category: {
      type: "string",
      description: "What keyword does this blog post belong to the most?",
      required: true,
    },
    keyWords: {
      type: "string",
      description: "The keywords for the blog post",
      required: true,
    },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkToc, { tight: true, ordered: true }]],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
    ],
  },
});
