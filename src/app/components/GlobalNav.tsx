import Image from "next/image";

import Developer from "public/developer.png";

const GlobalNav = () => {
  return (
    <nav className="NavBar sticky -top-px w-full items-center flex justify-between py-10 lg:justify-start lg:flex-row flex-wrap z-10">
      <a href="#" title="home">
        <div className="flex items-center">
          <Image
            className="z-0"
            src={Developer}
            alt=""
            width={50}
            height={50}
          />
          <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-tr text-primary font-extrabold">
            Mike&apos;s Blog
          </span>
        </div>
      </a>
    </nav>
  );
};

export default GlobalNav;
