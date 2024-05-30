import Image from "next/image";
import Link from "next/link";

import GithubIcon from "@/components/icons/GithubIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

import FooterLinks from "./FooterLinks";
import NextLink from "./NextLink";

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-col px-6 md:px-32 py-8 gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            className="rounded-full"
            width={48}
            height={48}
            alt={""}
          />
        </div>
        <div className="flex items-center gap-0 md:gap-12 text-white">
          <NextLink
            redirectHref="/"
            redirectTarget="_self"
            variant="tertiary"
            icon={<HomeIcon />}
          />
          <NextLink
            redirectHref="https://github.com/MikevPeeren"
            redirectTarget="_blank"
            variant="tertiary"
            icon={<GithubIcon />}
          />
          <NextLink
            redirectHref="https://www.linkedin.com/in/mikevpeeren/"
            redirectTarget="_blank"
            variant="tertiary"
            icon={<LinkedInIcon />}
          />
        </div>
      </div>
      <hr className="border-[#FFFFFF]/50" />
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 text-center md:text-left justify-between">
        <span className="text-[#FFFFFF]/60 text-5xl md:text-7xl max-w-sm leading tracking-wider">
          Mike van Peeren
        </span>
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
