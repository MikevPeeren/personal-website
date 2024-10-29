"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

const FooterLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-14 md:gap-24 text-center items-center">
      <div className="flex flex-col gap-4">
        <Link
          className={`link ${pathname === "/" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          title="visit the homepage"
          href="/"
        >
          Home
        </Link>
        <Link
          className={`link ${pathname === "/about" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          title="visit the about page"
          href="/about"
        >
          About
        </Link>
        <Link
          className={`link ${pathname === "/contact" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          title="visit the contact page"
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          className={`link ${pathname === "/projects" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          title="visit the projects page"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={`link ${pathname === "/blog" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          title="visit the blog page"
          href="/blog"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
