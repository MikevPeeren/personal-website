import { CenteredLayout } from "@/components/CenteredLayout";
import { PageWrapper } from "@/components/PageWrapper";
import Testimonials from "@/components/Testimonials";

import EmailIcon from "@/app/ui/icons/EmailIcon";
import LinkedInIcon from "@/app/ui/icons/LinkedInIcon";
import NextLink from "@/app/ui/NextLink";
import WorkExperience from "@/app/ui/WorkExperience";

export default function About() {
  return (
    <PageWrapper>
      <CenteredLayout>
        <div className="flex flex-col">
          <div>
            <h1>
              I&aposm Mike van Peeren, Passionate About Exceptional User
              Experiences & High-Quality Code
            </h1>

            <p>
              I am driven by a passion for creating impactful applications with
              a social footprint, I aim to deliver results through meaningful
              work. My journey is fueled by a sense of purpose, and I&apos;m
              eager to take on greater responsibilities, lead teams, and inspire
              others. I stay current with industry innovations, constantly
              learning from peers, and I believe in fostering growth and success
              for the teams I lead.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <NextLink
                redirectHref="https://www.linkedin.com/in/mikevpeeren/"
                redirectTarget="_blank"
                linkText="LinkedIn"
                variant="secondary"
                title={"visit my LinkedIn profile"}
                icon={<LinkedInIcon />}
              />
              <NextLink
                redirectHref="mailto:mikevpeeren@hotmail.com?subject=Hey%20Mike"
                linkText="Email"
                title={"send an email to me"}
                icon={<EmailIcon />}
              />
            </div>
            <div>
              <h3>Experience</h3>
              <p>7 years</p>
            </div>

            <div>
              <h3>Location</h3>
              <p>Tilburg, The Netherlands</p>
            </div>
          </div>

          <WorkExperience />

          <Testimonials />
        </div>
      </CenteredLayout>
    </PageWrapper>
  );
}
