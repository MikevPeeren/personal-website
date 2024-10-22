import PageLayout from "../ui/PageLayout";

import ContactForm from "@/app/ui/ContactForm";
import GithubIcon from "@/app/ui/icons/GithubIcon";
import GitLabIcon from "@/app/ui/icons/GitLabIcon";
import LinkedInIcon from "@/app/ui/icons/LinkedInIcon";
import NextLink from "@/app/ui/NextLink";
import SocialCard from "@/app/ui/SocialCard";

export default function Contact() {
  return (
    <PageLayout gap="large">
      <div className="flex gap-8 flex-col">
        <h1>Let&apos;s Connect</h1>
        <h2 className="text-50 text-xl">
          I&apos;m always open to new opportunities. Feel free to drop me a line
          if having any questions or projects.
        </h2>
        <div className="w-full md:w-auto gap-4 flex flex-col md:flex-row">
          <NextLink
            redirectHref="/contact"
            linkText="Github"
            icon={<GithubIcon />}
            variant="secondary"
          />
          <NextLink
            redirectHref="/contact"
            linkText="GitLab"
            icon={<GitLabIcon />}
            variant="secondary"
          />
          <NextLink
            redirectHref="/contact"
            linkText="LinkedIn"
            icon={<LinkedInIcon />}
            variant="secondary"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-col-reverse w-full gap-12">
        <ContactForm />
        <SocialCard />
      </div>
    </PageLayout>
  );
}
