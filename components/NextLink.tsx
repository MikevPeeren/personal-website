import { cn } from "@/lib/utils";
import Link from "next/link";

const NextLink = ({
  redirectHref,
  linkText,
  children,
  icon,
  iconLeft,
  variant = "primary",
  redirectTarget = "_self",
  additionalClassNames,
}: {
  redirectHref: string;
  linkText?: string;
  children?: JSX.Element;
  icon?: JSX.Element;
  iconLeft?: JSX.Element;
  variant?: "primary" | "secondary" | "tertiary";
  redirectTarget?: "_blank" | "_self";
  additionalClassNames?: string;
}) => {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 dark:hover:border-[#FFFFFF]/50 hover:border-black border rounded-2xl px-6 py-6 text-base font-medium shadow-sm transition-colors duration-700 ease-in-out group gap-2",
        variant === "primary" && "bg-transparant",
        variant === "secondary" &&
          "bg-[#1C1C1C] text-white dark:bg-white dark:text-black border-[#1C1C1C] dark:border-white",
        variant === "tertiary" && "border-none border-0 shadow-none",
        additionalClassNames,
      )}
      href={redirectHref}
      target={redirectTarget}
    >
      {iconLeft && iconLeft}
      {linkText ?? children}
      {icon && icon}
    </Link>
  );
};
export default NextLink;
