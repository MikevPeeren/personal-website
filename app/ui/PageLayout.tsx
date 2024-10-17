import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  gap?: "small" | "medium" | "large";
}

export default function PageLayout({
  children,
  className,
  gap = "medium",
}: PageLayoutProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40",
        "flex flex-col",
        {
          "space-y-6 sm:space-y-8 md:space-y-12": gap === "small",
          "space-y-10 sm:space-y-16 md:space-y-24": gap === "medium",
          "space-y-16 sm:space-y-24 md:space-y-32": gap === "large",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
