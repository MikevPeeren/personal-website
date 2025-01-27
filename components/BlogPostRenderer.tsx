"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";

import { BlogPostSkeleton, isResolvedAsset } from "@/lib/contentful";
import { calculateReadingTime, getStringFromField } from "@/lib/utils";

const CodeBlock = dynamic(() => import("./CodeBlock"), { ssr: false });

interface BlogPostRendererProps {
  post: Entry<BlogPostSkeleton>;
}

export default function BlogPostRenderer({ post }: BlogPostRendererProps) {
  const { title, featuredImage, publicationDate, content } = post.fields;

  let imageUrl = "/placeholder.svg";
  let imageAlt = "Placeholder image";

  if (featuredImage && isResolvedAsset(featuredImage)) {
    imageUrl = `https:${featuredImage.fields.file?.url ?? ""}`;
    imageAlt =
      getStringFromField(featuredImage.fields.description) ||
      getStringFromField(title) ||
      "Blog post image";
  }

  const postTitle = typeof title === "string" ? title : "Untitled Post";
  const postDate =
    publicationDate instanceof Date
      ? publicationDate
      : new Date(publicationDate as string);
  const readingTime = calculateReadingTime(content as Document);

  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image
          src={`https:${node.data["target"].fields.file.url}`}
          width={node.data["target"].fields.file.details.image.width}
          height={node.data["target"].fields.file.details.image.height}
          alt={node.data["target"].fields.title}
          className="rounded-lg my-8"
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children: React.ReactNode) => {
        // Check if the paragraph contains a code block or any block-level element
        const containsBlockElement = node.content.some(
          (item) =>
            item.nodeType === "text" &&
            item.marks &&
            item.marks.some((mark) => mark.type === "code"),
        );

        if (containsBlockElement) {
          return (
            <div className="text-base md:text-lg leading-relaxed text-50">
              {children}
            </div>
          );
        }

        return <p>{children}</p>;
      },
      [BLOCKS.LIST_ITEM]: (_node, children: React.ReactNode) => {
        // Remove wrapping <p> tags from list items
        if (Array.isArray(children) && children[0]?.type === "p") {
          return (
            <li className="text-base md:text-lg leading-relaxed text-50">
              {children[0].props.children}
            </li>
          );
        }
        return (
          <li className="text-base md:text-lg leading-relaxed text-50">
            {children}
          </li>
        );
      },
    },
    renderMark: {
      [MARKS.CODE]: (text) => {
        // For short inline code, render it inline
        if (text && typeof text === "string" && text.length < 100) {
          return (
            <>
              <code className="bg-gray-800 text-pink-300 rounded-sm px-1 py-0.5">
                {text}
              </code>
            </>
          );
        }

        // For longer code snippets, use CodeBlock
        return <CodeBlock code={text as string} />;
      },
    },
  };

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {postTitle}
      </h1>
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
        <span>
          {postDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="mx-2">•</span>
        <span>{readingTime} min read</span>
      </div>
      {post.fields.featuredImage && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="prose lg:prose-xl dark:prose-invert">
        {documentToReactComponents(content as Document, options)}
      </div>
    </article>
  );
}
