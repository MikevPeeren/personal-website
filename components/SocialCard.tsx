"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Github, Home, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";
import PersonalPhoto from "@/public/personalPhoto.webp";

export default function SocialCard({
  variant = "primary",
}: {
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "p-6 x-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full",
        variant === "primary" &&
          "border border-border-light dark:border-border-dark ",
        variant === "secondary" &&
          "border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626]",
      )}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-center mb-6 justify-start">
        <Image
          src={PersonalPhoto}
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full mb-4 sm:mb-0 sm:mr-6"
        />
        <div className="text-center sm:text-left">
          <h2 className="mt-0">Socials</h2>
          <p className="mb-0 mt-0 pt-0">
            Feel free to reach out to me at any of the socials listed below
          </p>
        </div>
      </div>
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-4 grid-cols-2 space-8">
        <SocialLink href="/" aria-label="Home">
          <Home className="w-6 h-6" />
          <span className="mt-1">Home</span>
        </SocialLink>
        <SocialLink href="https://github.com/MikevPeeren" aria-label="GitHub">
          <Github className="w-6 h-6" />
          <span className="mt-1">GitHub</span>
        </SocialLink>
        <SocialLink href="https://medium.com/@mikevpeeren/" aria-label="Medium">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
          <span className="mt-1">Medium</span>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/mikevpeeren/"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
          <span className="mt-1">LinkedIn</span>
        </SocialLink>
      </div>
    </motion.div>
  );
}

function SocialLink({
  href,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
}
