import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

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
    author: {
      type: "string",
      description: "The author of the post",
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
      required: true,
    },
    imageSrc: {
      type: "string",
      description: "The src of the image",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

const options = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",
  // Or your own JSON theme

  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node: { children: string | any[] }) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: { properties: { className: string[] } }) {
    // Each line node by default has `class="line"`.
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    // Each word node has no className by default.
    node.properties.className = ["word"];
  },
};

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
