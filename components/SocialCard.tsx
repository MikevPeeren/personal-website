import GithubIcon from "@/components/icons/GithubIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

import Avatar from "./Avatar";
import NextLink from "./NextLink";

const SocialCard = () => {
  return (
    <div className="flex flex-col rounded-2xl border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] gap-4 p-6 h-fit">
      <Avatar />
      <h3 className="text-xl font-bold">Also in Social</h3>
      <p>Feel free to reach me at any of social networks listed below:</p>
      <div className="flex items-center gap-0 md:gap-12 text-white">
        <NextLink
          redirectHref="/"
          redirectTarget="_self"
          variant="tertiary"
          aria-label="redirect to the home page"
          icon={<HomeIcon />}
        />
        <NextLink
          redirectHref="https://github.com/MikevPeeren"
          redirectTarget="_blank"
          variant="tertiary"
          aria-label="redirect to my personal Github"
          icon={<GithubIcon />}
        />
        <NextLink
          redirectHref="https://www.linkedin.com/in/mikevpeeren/"
          redirectTarget="_blank"
          variant="tertiary"
          aria-label="redirect to my personal LinkedIn"
          icon={<LinkedInIcon />}
        />
      </div>
    </div>
  );
};

export default SocialCard;
