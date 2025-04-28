import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import NextTopLoader from "nextjs-toploader";
import PlausibleProvider from "next-plausible";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Navigation from "@/components/Navigation";

import "./globals.css";

import { fontSans } from "@/app/ui/fonts";
import Footer from "@/app/ui/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://mikevpeeren.nl"),
  title: "Mike van Peeren - Driven by providing exceptional User Experiences",
  description:
    "Explore the world of development with Mike van Peeren. Check out his blog posts about Next.js, tech news and personal insights!",
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
    title: "Mike van Peeren - Driven by providing exceptional User Experiences",
    siteName: `https://mikevpeeren.nl`,
    images: ["https://mikevpeeren.nl/macbook.webp"],
    description:
      "Explore the world of development with Mike van Peeren. Check out his blog, and projects!",
    url: `https://mikevpeeren.nl/`,
  },
  twitter: {
    title: "Mike van Peeren - Driven by providing exceptional User Experiences",
    images: ["https://mikevpeeren.nl/macbook.webp"],
    card: "summary",
    description:
      "Explore the world of development with Mike van Peeren. Check out his blog, and projects!",
  },
  manifest: "/manifest.json", // Note: .json, not .webmanifest
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head></head>
        <body
          className={cn(
            "min-h-screen font-sans antialiased bg-black",
            fontSans.className,
          )}
        >
          <NextTopLoader color="#f92aad" showSpinner={false} />
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="system"
          >
            <main
              className="flex min-h-screen flex-col items-center justify-between m-2.5"
              role="main"
            >
              <PlausibleProvider domain="mikevpeeren.nl">
                <Navigation />
                <div className="bg-white dark:bg-[#1C1C1C] m-2.5 rounded-3xl w-full h-full z-10">
                  {children}
                </div>
                <SpeedInsights />
                <Footer />
              </PlausibleProvider>
            </main>
          </ThemeProvider>
        </body>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </html>
    </ViewTransitions>
  );
}
