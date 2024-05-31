import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import PageWrapper from "@/components/PageWrapper";

import { cn } from "../lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mike van Peeren - Passionate About UX & High-Quality Code",
  description:
    "Explore the world of front-end development with Mike van Peeren. Check out his blog, and projects!",
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
  authors: [
    {
      name: "Mike van Peeren",
      url: "https://mikevpeeren.nl",
    },
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mike van Peeren - Passionate About UX & High-Quality Code",
    siteName: `https://mikevpeeren.nl`,
    images: ["https://mikevpeeren.nl/public/blog.avif"],
    description:
      "Explore the world of front-end development with Mike van Peeren. Check out his blog, and projects!",
    url: `https://mikevpeeren.nl/`,
  },
  twitter: {
    title: "Mike van Peeren - Passionate About UX & High-Quality Code",
    images: ["https://mikevpeeren.nl/public/blog.avif"],
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
          fontSans.variable,
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
              <SpeedInsights />
            </PageWrapper>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
