import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { AnalyticsWrapper } from "@/components/Analytics";
import GlobalNav from "@/components/GlobalNav";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SocialMedia from "@/components/SocialMediaRow";
import {
  AUTHOR,
  META_DESCRIPTION,
  META_TITLE,
} from "@/utils/constants/general";

import "@/styles/prism.scss";
import "@/styles/global.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  authors: { name: AUTHOR },
  metadataBase: new URL("https://mikevpeeren.nl"),
  themeColor: "#f9a66c",
  keywords:
    "Frontend, front-end, engineer, developer, software, React, React.js, react query, javascript, JavaScript, typescript, TypeScript, next.js, git, vercel, html5, css3, html, css, tailwind, vercel, gitlab, github",
  robots: "all",
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

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
          color="#f9a66c"
        />

        <meta name="msapplication-TileColor" content="#f9a66c" />

        <meta
          name="image"
          property="og:image"
          content="https://www.mikevpeeren.nl/mike.png"
        />
        <meta httpEquiv="content-language" content="en" />
      </head>
      <body className="mx-auto flex h-screen max-w-screen-lg flex-col justify-between px-6 py-12">
        <main className="mb-auto">
          {GOOGLE_TAG_ID ? <GoogleAnalytics gaID={GOOGLE_TAG_ID} /> : null}

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
