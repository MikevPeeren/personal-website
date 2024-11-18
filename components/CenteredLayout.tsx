"use client";

import React from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface CenteredLayoutProps {
  marginTop?: boolean;
  children: React.ReactNode;
}

export function CenteredLayout({
  marginTop = true,
  children,
}: CenteredLayoutProps) {
  return (
    <motion.div
      className={cn(
        "container mx-auto px-2 md:px-0 py-0 lg:py-8 mt-28",
        !marginTop && "!mt-0",
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
