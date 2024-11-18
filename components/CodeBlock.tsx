"use client";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  language?: string;
  code: React.ReactElement | string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  console.log(code);
  const [codeString, setCodeString] = React.useState<string>("");

  React.useEffect(() => {
    if (React.isValidElement(code)) {
      setCodeString(ReactDOMServer.renderToStaticMarkup(code));
    } else if (typeof code === "string") {
      setCodeString(code);
    } else {
      console.warn(
        "Code is not a string or React element, attempting to convert:",
        code,
      );
      try {
        setCodeString(JSON.stringify(code, null, 2));
      } catch (error) {
        console.error("Failed to stringify code:", error);
        setCodeString(String(code));
      }
    }
  }, [code]);

  const detectedLanguage = React.useMemo(() => {
    if (language && language !== "plaintext") return language;

    // Improved heuristic for language detection
    if (
      codeString.includes("import React") ||
      codeString.includes("export default function") ||
      codeString.includes("jsx")
    ) {
      return "jsx";
    } else if (
      codeString.includes("{") &&
      codeString.includes("}") &&
      !codeString.includes("export")
    ) {
      return "scss";
    }
    return "plaintext";
  }, [language, codeString]);

  const displayLanguage = detectedLanguage === "scss" ? "SCSS" : "JSX";
  const highlightLanguage =
    detectedLanguage === "scss" ? detectedLanguage : "jsx";

  return (
    <div className="relative my-6 rounded-lg overflow-hidden">
      <div className="bg-gray-800 py-2 px-4 text-sm font-mono">
        <span className="text-pink-300">{displayLanguage}</span>
      </div>
      <SyntaxHighlighter
        language={highlightLanguage}
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
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
