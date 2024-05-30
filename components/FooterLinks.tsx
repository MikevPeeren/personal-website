"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { posts } from '@/.velite';

const FooterLinks = () => {
  const [randomPost, setRandomPost] = useState({ _raw: { flattenedPath: "" } });

  const pathname = usePathname();

  useEffect(() => {
    setRandomPost(posts[Math.floor(Math.random() * posts.length)]);
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
          href={`/blog/${randomPost.slug}`}
        >
          Blog Post
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
