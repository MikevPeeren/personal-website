"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Link } from "next-view-transitions";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const AnimatedLogo = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 60"
    className="w-auto h-8"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      d="M10 40 L30 10 L50 40 M70 10 L90 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.text
      x="50"
      y="55"
      fontSize="16"
      fontWeight="bold"
      textAnchor="middle"
      fill="currentColor"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      MVP
    </motion.text>
  </motion.svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      className="fixed left-0 top-0 z-50 w-full border-b-px  border-gray-200 bg-white dark:bg-[#1C1C1C] opacity-90"
      initial={{ y: -140 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <AnimatedLogo />
            <span className="sr-only">Mike van Peeren</span>
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white"
              >
                {pathname === item.path && (
                  <span className="mr-2 h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
                )}
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {mounted && (
              <AnimatePresence mode="wait" initial={false}>
                <motion.button
                  key={theme}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </motion.button>
              </AnimatePresence>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center rounded-md px-3 py-2 text-base transition-colors
                  ${
                    pathname === item.path
                      ? "font-bold text-slate-900 dark:text-white"
                      : "font-medium text-gray-700 hover:bg-gray-50 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {pathname === item.path && (
                    <span className="mr-2 h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
                  )}
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
