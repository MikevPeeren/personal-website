import { CenteredLayout } from "@/components/CenteredLayout";
import { PageWrapper } from "@/components/PageWrapper";
import SocialCard from "@/components/SocialCard";

import ContactForm from "@/app/ui/ContactForm";
import GithubIcon from "@/app/ui/icons/GithubIcon";
import GitLabIcon from "@/app/ui/icons/GitLabIcon";
import LinkedInIcon from "@/app/ui/icons/LinkedInIcon";
import NextLink from "@/app/ui/NextLink";
import MediumIcon from "../ui/icons/MediumIcon";

export default function Contact() {
  return (
    <PageWrapper>
      <CenteredLayout>
        <div className="flex gap-12 flex-col">
          <div className="flex gap-8 flex-col">
            <div>
              <h1>Let&apos;s Connect</h1>
              <h2 className="text-50 text-xl">
                I&apos;m always open to new opportunities. Feel free to drop me
                a line if having any questions or projects.
              </h2>
            </div>
            <div className="w-full md:w-auto gap-4 flex flex-col md:flex-row">
              <NextLink
                redirectHref="https://github.com/MikevPeeren"
                linkText="Github"
                redirectTarget="_blank"
                icon={<GithubIcon />}
                variant="secondary"
              />
              <NextLink
                redirectHref="https://medium.com/@mikevpeeren/"
                linkText="Medium"
                redirectTarget="_blank"
                icon={<MediumIcon />}
                variant="secondary"
              />
              <NextLink
                redirectHref="https://www.linkedin.com/in/mikevpeeren/"
                linkText="LinkedIn"
                redirectTarget="_blank"
                icon={<LinkedInIcon />}
                variant="secondary"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-8">
            <ContactForm />
            <SocialCard variant="secondary" />
          </div>
        </div>
      </CenteredLayout>
    </PageWrapper>
  );
}
