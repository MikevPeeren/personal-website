import React from "react";
import { Inter } from "next/font/google";

import { AnalyticsWrapper } from "@/components/Analytics";
import GlobalNav from "@/components/GlobalNav";
import {
  AUTHOR,
  META_DESCRIPTION,
  META_TITLE,
} from "@/utils/constants/general";

import SocialMedia from "./components/SocialMediaRow";

import "@/styles/global.scss";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/meta/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/meta/safari-pinned-tab.svg"
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
        <meta name="robots" content="all" />
        <meta
          name="image"
          property="og:image"
          content="https://www.mikevpeeren.nl/mike.png"
        />
        <meta httpEquiv="content-language" content="en" />
      </head>
      <body className="mx-auto flex h-screen max-w-screen-lg flex-col justify-between px-6 py-12">
        <main className="mb-auto">
          <div>
            <div className="col-start-2">
              <GlobalNav />
            </div>
            <div>{children}</div>
          </div>
        </main>

        <footer className="flex flex-col items-center justify-between gap-2 pb-10 pt-20 text-center">
          <hr className="w-full rounded-lg" />
          <span className="sticky pt-4 text-xs font-bold tracking-widest">
            {`Copyright © ${new Date().getFullYear()}, All rights reserved.`}
          </span>
          <SocialMedia />
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
