import {
  Block,
  Document,
  Inline,
  Text,
  TopLevelBlock,
} from "@contentful/rich-text-types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const calculateReadingTime = (
  content: Document | TopLevelBlock[] | undefined,
): number => {
  if (!content) {
    return 0;
  }

  let totalWords = 0;

  const countWordsInNode = (node: Block | Inline | Text): void => {
    if (node.nodeType === "text") {
      totalWords += (node as Text).value.trim().split(/\s+/).length;
    } else if ("content" in node && Array.isArray(node.content)) {
      node.content.forEach(countWordsInNode);
    }
  };

  const blocks = Array.isArray(content) ? content : content.content;
  blocks.forEach(countWordsInNode);

  // Assuming average reading speed of 200 words per minute
  const readingTimeMinutes = Math.ceil(totalWords / 200);
  return readingTimeMinutes;
};

export const getStringFromField = (
  field: string | { [x: string]: string | undefined } | undefined,
): string | undefined => {
  if (typeof field === "string") {
    return field;
  }
  if (typeof field === "object" && field !== null) {
    // Assuming the object has a default property or using the first available string
    const stringValue = Object.values(field).find(
      (value) => typeof value === "string",
    );
    return stringValue;
  }
  return undefined;
};

export const getContentPreview = (
  content: Document | TopLevelBlock[] | undefined,
): string => {
  if (!content) {
    return "";
  }

  const blocks = Array.isArray(content) ? content : content.content;

  for (const block of blocks) {
    if (block.nodeType === "paragraph" && block.content) {
      for (const inline of block.content) {
        if (inline.nodeType === "text" && "value" in inline) {
          return inline.value;
        }
      }
    }
  }

  return "";
};
