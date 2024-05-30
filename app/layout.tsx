import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { ThemeProvider } from "next-themes";
import PageWrapper from "@/components/PageWrapper";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

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
          <main className="flex min-h-screen flex-col items-center justify-between m-2.5">
            <PageWrapper>
              <Navigation />
              <div className="h-full w-full pb-20">{children}</div>
            </PageWrapper>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
