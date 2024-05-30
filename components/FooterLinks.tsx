"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { useEffect, useState } from "react";

const FooterLinks = () => {
  const [randomPost, setRandomPost] = useState({ _raw: { flattenedPath: "" } });

  const pathname = usePathname();

  useEffect(() => {
    setRandomPost(allPosts[Math.floor(Math.random() * allPosts.length)]);
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row gap-14 md:gap-24 text-center items-center">
      <div className="flex flex-col gap-4">
        <Link
          className={`link ${pathname === "/" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`link ${pathname === "/about" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`link ${pathname === "/contact" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          className={`link ${pathname === "/projects" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={`link ${pathname === "/blog" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className={`link ${pathname === "/blog/" ? "font-bold text-[#FFFFFF]" : "font-medium text-[#FFFFFF]/60"}`}
          href={`/blog/${randomPost._raw.flattenedPath}`}
        >
          Blog Post
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
