// React
import React from "react";

// NextJS
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

import { GA_ANALYTICS_MEASUREMENT_ID } from "../utils/analytics/gtag";

// Constants
import {
  AUTHOR,
  META_TITLE,
  META_DESCRIPTION,
} from "../utils/constants/general";

const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* enable analytics script only for production */}
          {isProd && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ANALYTICS_MEASUREMENT_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ANALYTICS_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}

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
            color="#5bbad5"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap"
            rel="stylesheet"
          />

          <meta name="author" content={AUTHOR} />
          <meta name="title" content={META_TITLE} />
          <meta name="description" content={META_DESCRIPTION} />
          <meta name="theme-color" content="#ffffff" />

          <meta name="msapplication-TileColor" content="#da532c" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
