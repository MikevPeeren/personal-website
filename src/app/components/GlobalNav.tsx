import Image from "next/image";
import Link from "next/link";

import Developer from "/public/developer.png";

const GlobalNav = () => {
  return (
    <nav className="NavBar sticky -top-px z-10 flex w-full flex-wrap items-baseline justify-between pb-10 lg:flex-row">
      <Link href="/" title="home">
        <Image className="z-0" src={Developer} alt="" width={50} height={50} />
      </Link>
      <div className="">
        <div className="flex flex-row flex-wrap items-baseline justify-between gap-4 lg:gap-10">
          <Link href="/blog" title="blog" className="font-bold text-white">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
