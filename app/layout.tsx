import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { cn } from "@/app/lib/utils";
import { fontSans } from "@/app/ui/fonts";
import Footer from "@/app/ui/Footer";
import { Navigation } from "@/app/ui/Navigation";
import PageWrapper from "@/app/ui/PageWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://mikevpeeren.nl"),
  title: "Mike van Peeren - Passionate About UX & High-Quality Code",
  description:
    "Explore the world of front-end development with Mike van Peeren. Check out his blog posts about Next.js, tech news and personal insights, and projects!",
  authors: {
    name: "Mike van Peeren",
    url: "https://mikevpeeren.nl",
  },
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Blog",
    "Portfolio",
    "Projects",
    "Mike van Peeren",
    "Mike",
    "van Peeren",
    "Mikevpeeren",
    "Mike van Peeren blog",
    "Mike van Peeren portfolio",
  ],
  publisher: "Mike van Peeren",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://mikevpeeren.nl/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mike van Peeren - Passionate About UX & High-Quality Code",
    siteName: `https://mikevpeeren.nl`,
    images: ["https://mikevpeeren.nl/macbook.webp"],
    description:
      "Explore the world of front-end development with Mike van Peeren. Check out his blog, and projects!",
    url: `https://mikevpeeren.nl/`,
  },
  twitter: {
    title: "Mike van Peeren - Passionate About UX & High-Quality Code",
    images: ["https://mikevpeeren.nl/macbook.webp"],
    card: "summary",
    description:
      "Explore the world of front-end development with Mike van Peeren. Check out his blog, and projects!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-black",
          fontSans.className,
        )}
      >
        <ThemeProvider enableSystem={false} attribute="class">
          <main
            className="flex min-h-screen flex-col items-center justify-between m-2.5"
            role="main"
          >
            <PageWrapper>
              <Navigation />
              <div className="h-full w-full pb-20">{children}</div>
              <Analytics />
              <SpeedInsights />
            </PageWrapper>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
