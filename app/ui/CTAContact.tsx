import Avatar from "@/components/Avatar";

import EmailIcon from "./icons/EmailIcon";
import NextLink from "./NextLink";

const CTAContact = () => {
  return (
    <div className="items-center flex justify-center flex-col text-center w-full border border-[#000000]/10 dark:border-[#FFFFFF]/10 bg-[#F5F5F5] dark:bg-[#262626] p-12 rounded-2xl">
      <Avatar />
      <h2 className="m-0">Let&apos;s be in touch!</h2>
      <h3 className="text-base text-50 break-words max-w-xl tracking-widest leading-none">
        Feel free to contact me if having any questions. I&apos;m available for
        new insights or just for chatting.
      </h3>

      <NextLink
        redirectHref="mailto:mikevpeeren@hotmail.com?subject=Hey%20Mike"
        linkText="Email"
        title="send an email to me"
        icon={<EmailIcon />}
      />
    </div>
  );
};

export default CTAContact;
