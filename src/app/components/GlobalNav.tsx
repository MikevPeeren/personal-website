import Image from "next/image";

import Developer from "/public/developer.png";

const GlobalNav = () => {
  return (
    <nav className="NavBar sticky -top-px z-10 flex w-full flex-wrap items-center justify-between py-10 lg:flex-row lg:justify-start">
      <a href="#" title="home">
        <div className="flex items-center">
          <Image
            className="z-0"
            src={Developer}
            alt=""
            width={50}
            height={50}
          />
          <span className="text-primary ml-2 bg-gradient-to-tr bg-clip-text font-extrabold text-transparent">
            Mike&apos;s Blog
          </span>
        </div>
      </a>
    </nav>
  );
};

export default GlobalNav;
