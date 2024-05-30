import { JSX, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";

import NavBarMenu from "./NavBarMenu";
import ThemeSwitcher from "./ThemeSwitcher";

export function Navigation() {
  return (
    <div className="z-20 h-auto top-0 left-0 right-0 fixed flex-none opacity-90 bg-white dark:bg-[#1C1C1C]">
      <header className="flex h-auto w-full items-start justify-between px-6 md:px-32 py-10">
        <Link
          className="flex items-center gap-2 rounded-full border-2"
          href="/"
        >
          <Image
            src="/logo.png"
            className="rounded-full"
            priority
            width={48}
            height={48}
            alt={""}
          />
        </Link>
        <nav className="flex items-start gap-4 py-2">
          <ThemeSwitcher />

          <NavBarMenu />
        </nav>
      </header>
    </div>
  );
}

const MenuIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
};
