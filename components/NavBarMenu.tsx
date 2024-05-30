"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavBarMenu = () => {
  const pathname = usePathname();

  return (
    <div className="rounded-xl bg-black dark:bg-white p-4 duration-700 transform h-9 transition-[width] hover:h-auto w-10 hover:w-36 md:hover:w-60 hover:cursor-pointer flex items-center justify-end group overflow-hidden ease-in-out">
      <div className="flex flex-row-reverse items-start justify-between w-full">
        <div className="rounded-full bg-white dark:bg-black p-1 group-hover:p-2"></div>
        <div className="hidden group-hover:block pt-8 w-full">
          <div
            className={cn(
              "flex flex-col gap-1 dark:text-[#000000]/50 text-[#FFFFFF]/50 font-bold text-lg",
              pathname === "blog" && "font-bold",
            )}
          >
            <Link
              href="/"
              className={cn(
                "hover:dark:text-[#000000] hover:text-[#FFFFFF]/50",
                pathname === "/" &&
                  "dark:text-[#000000] text-[#FFFFFF]/50 font-bold",
              )}
            >
              Homepage
            </Link>
            <Link
              href="/blog"
              className={cn(
                "hover:dark:text-[#000000] hover:text-[#FFFFFF]/50",
                pathname.includes("/blog") &&
                  "dark:text-[#000000] text-[#FFFFFF]/50 font-bold",
              )}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className={cn(
                "hover:dark:text-[#000000] hover:text-[#FFFFFF]/50",
                pathname === "/projects" &&
                  "dark:text-[#000000] text-[#FFFFFF]/50 font-bold",
              )}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={cn(
                "hover:dark:text-[#000000] hover:text-[#FFFFFF]/50",
                pathname === "/about" &&
                  "dark:text-[#000000] text-[#FFFFFF]/50 font-bold",
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "hover:dark:text-[#000000] hover:text-[#FFFFFF]/50",
                pathname === "/contact" &&
                  "dark:text-[#000000] text-[#FFFFFF]/50 font-bold",
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarMenu;
