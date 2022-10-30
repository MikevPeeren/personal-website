import React from "react";

import { Inter } from "@next/font/google";

import { AnalyticsWrapper } from "@/components/Analytics";
import GlobalNav from "@/components/GlobalNav";
import {
  AUTHOR,
  META_DESCRIPTION,
  META_TITLE,
} from "@/utils/constants/general";

import "@/styles/global.scss";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Mike van Peeren</title>
        <link rel="icon" href="meta/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="meta/favicon-16x16.png"
        />
        <link rel="manifest" href="meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="meta/safari-pinned-tab.svg"
          color="#5b21b6"
        />

        <meta name="author" content={AUTHOR} />
        <meta name="theme-color" content="#5b21b6" />

        <meta name="viewport" content="width=device-width"></meta>

        <meta name="msapplication-TileColor" content="#5b21b6" />
        <meta
          name="keywords"
          content="Frontend, front-end, engineer, developer, software, React, React.js, react query, javascript, JavaScript, typescript, TypeScript, next.js, git, vercel, html5, css3, html, css, tailwind, vercel, gitlab, github"
        />
        <meta name="title" property="og:title" content={META_TITLE} />
        <meta
          name="description"
          property="og:description"
          content={META_DESCRIPTION}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mikevpeeren.nl/" />
        <meta
          name="image"
          property="og:image"
          content="https://www.mikevpeeren.nl/me.jpg"
        />
        <meta httpEquiv="content-language" content="en" />
      </head>
      <body>
        <div className="mx-auto max-w-screen-lg px-6 py-12">
          <div className="col-start-2">
            <GlobalNav />
          </div>
          <div>{children}</div>
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
