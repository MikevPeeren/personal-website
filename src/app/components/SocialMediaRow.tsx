import Image from "next/image";
import Link from "next/link";

import GITHUB_ICON from "/public/icons/github.png";
import GITLAB_ICON from "/public/icons/gitlab.png";
import LINKEDIN_ICON from "/public/icons/linkedIn.png";
import MEDIUM_ICON from "/public/icons/medium.png";

const SocialMedia = () => {
  const socialMediaContent = [
    {
      image: GITLAB_ICON,
      alt: "Redirection to GitLab",
      url: "https://gitlab.com/MikevPeeren/",
    },
    {
      image: GITHUB_ICON,
      alt: "Redirection to GitHub",
      url: "https://github.com/MikevPeeren/",
    },
    {
      image: LINKEDIN_ICON,
      alt: "Redirection to LinkedIn",
      url: "https://www.linkedin.com/in/mikevpeeren/",
    },
    {
      image: MEDIUM_ICON,
      alt: "Redirection to Medium",
      url: "https://medium.com/@mikevpeeren/",
    },
  ];

  return (
    <div className="flex flex-row items-end gap-4">
      {socialMediaContent.map((socialMedia, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <Link href={socialMedia.url}>
              <Image
                className="h-auto w-auto"
                src={socialMedia.image}
                alt={socialMedia.alt}
                width={25}
                height={25}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
