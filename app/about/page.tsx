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
              I&apos;m Mike van Peeren, Passionate About Exceptional User
              Experiences & High-Quality Code
            </h1>

            <p>
              I care about building digital experiences that make a real difference. My goal is to create products that work well and add value to people&apos;s lives.
              <br/>
              <br/>
              I enjoy bringing direction to teams. I think in terms of strategy and long-term vision while staying close to the user. 
              Leading with purpose means to me helping others grow, making things clear and turning ideas into results.
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
