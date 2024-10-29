"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";

import hljs from "highlight.js";

interface CodeBlockProps {
  language?: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const detectedLanguage = React.useMemo(() => {
    if (language && language !== "plaintext") return language;
    const result = hljs.highlightAuto(code);
    return result ? result.language : "plaintext";
  }, [language, code]);

  return (
    <div className="relative my-6 rounded-t-lg overflow-hidden">
      <div className="bg-gray-800 py-2 px-4 text-sm font-mono">
        <span className="text-pink-300">
          {detectedLanguage === "css" ? "SCSS" : "TypeScript"}
        </span>
      </div>
      <SyntaxHighlighter
        language={detectedLanguage === "scss" ? detectedLanguage : "typescript"}
        style={synthwave84}
        showLineNumbers={true}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
