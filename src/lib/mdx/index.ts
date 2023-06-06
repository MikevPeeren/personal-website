import { JSXElementConstructor, ReactElement } from "react";
import { compileMDX } from "next-mdx-remote/rsc";

import fs from "fs";
import path from "path";

const rootDirectory = path.join(process.cwd(), "src", "app", "blog-posts");

export const getPostBySlug = async (
  slug: string
): Promise<{
  meta: {
    slug: string;
    title: string;
    description: string;
    publishDate: string;
  };
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}> => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  // @ts-expect-error
  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
