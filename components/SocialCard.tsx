import GithubIcon from "@/components/icons/GithubIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

import MediumIcon from "./icons/MediumIcon";
import Avatar from "./Avatar";
import NextLink from "./NextLink";

const SocialCard = () => {
  return (
    <div className="flex flex-col rounded-2xl border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] gap-4 p-6 h-fit">
      <Avatar />
      <h3 className="text-xl font-bold">Also in Social</h3>
      <p>Feel free to reach me at any of social networks listed below:</p>
      <div className="flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-0 md:gap-12 text-white">
        <NextLink
          redirectHref="/"
          redirectTarget="_self"
          variant="tertiary"
          ariaLabel="redirect to the home page"
          icon={<HomeIcon additionalClassNames="text-black dark:text-white" />}
        />
        <NextLink
          redirectHref="https://www.linkedin.com/in/mikevpeeren/"
          redirectTarget="_blank"
          variant="tertiary"
          ariaLabel="redirect to my personal LinkedIn"
          icon={
            <LinkedInIcon additionalClassNames="fill-black dark:fill-white" />
          }
        />
        <NextLink
          redirectHref="https://medium.com/@mikevpeeren/"
          redirectTarget="_blank"
          variant="tertiary"
          ariaLabel="redirect to my personal Medium"
          icon={
            <MediumIcon additionalClassNames="fill-black dark:fill-white" />
          }
        />
        <NextLink
          redirectHref="https://github.com/MikevPeeren"
          redirectTarget="_blank"
          variant="tertiary"
          ariaLabel="redirect to my personal Github"
          icon={
            <GithubIcon additionalClassNames="fill-black dark:fill-white" />
          }
        />
      </div>
    </div>
  );
};

export default SocialCard;
