"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

import NextLink from "./NextLink";

import Logo from "@/public/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(pathname);
  return (
    <div className="z-20 h-auto top-0 left-0 right-0 fixed flex-none opacity-90 bg-white dark:bg-[#1C1C1C]">
      <nav className="px-6 xl:px-96 lg:px-40 md:px-32 py-10 mx-4">
        <div className="w-full mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                key={"logo"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="flex items-center gap-2 rounded-full border-2"
                  href="/"
                  aria-label="return to the homepage"
                >
                  <Image
                    src={Logo}
                    className="rounded-full"
                    sizes="100vw"
                    style={{
                      width: "auto",
                      height: "50px",
                    }}
                    priority
                    title={""}
                    alt={""}
                  />
                </Link>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                          isActive
                            ? "bg-black dark:bg-white dark:text-black text-white"
                            : "text-gray-600 dark:text-gray-300 hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center">
              <motion.button
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 focus:outline-none"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mounted &&
                  (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
              </motion.button>
              <div className="ml-4 md:hidden">
                <motion.button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className={`md:hidden  ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -60 }}
          transition={{ duration: 0.75 }}
        >
          <div className="pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NextLink
                key={item.name}
                variant="tertiary"
                redirectHref={item.href}
                additionalClassNames="block px-3 py-2 rounded-md text-base font-bold pl-0"
                onClick={toggleMenu}
                linkText={item.name}
              />
            ))}
          </div>
        </motion.div>
      </nav>
    </div>
  );
}
