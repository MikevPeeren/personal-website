import Image from "next/image";

import PageLayout from "../ui/PageLayout";

import EmailIcon from "@/app/ui/icons/EmailIcon";
import LinkedInIcon from "@/app/ui/icons/LinkedInIcon";
import NextLink from "@/app/ui/NextLink";
import Testimonials from "@/app/ui/Testimonials";
import Video from "@/app/ui/Video";
import WorkExperience from "@/app/ui/WorkExperience";
import BBQ from "@/public/bbq.webp";
import Leader from "@/public/leader.webp";
import MacBook from "@/public/macbook.webp";
import Mountain from "@/public/mountain.webp";
import NiceView from "@/public/niceview.webp";
import PostIts from "@/public/postits.webp";

export default function About() {
  return (
    <PageLayout gap="large">
      <div className="flex gap-8 flex-col">
        <h1>
          I&apos;m a Frontend Development Lead Passionate About Exceptional User
          Experiences & High-Quality Code
        </h1>
        <h2 className=" text-50 text-xl">
          I help techies to grow and learn. Let&apos;s connect!
        </h2>
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
          <p>Experience</p>
          <h3>7 years</h3>
        </div>

        <div>
          <p>Location</p>
          <h3>Tilburg, The Netherlands</h3>
        </div>

        <div className="grid grid-cols-2 grid-rows-5 md:grid-rows-2 gap-4 md:grid-cols-5">
          <div className="col-span-4">
            <Video
              src="/castleDrone.mp4"
              additionalClassNames="max-w-full object-cover"
            />
          </div>

          <div className="grid gap-4">
            <Image
              src={MacBook}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full max-w-full rounded-2xl object-cover object-center"
              title={"View of MacBook"}
              alt={"View of MacBook"}
            />
            <Video
              src="/turnTableTwo.mp4"
              additionalClassNames="max-w-full h-full object-cover"
            />
          </div>

          <Image
            src={BBQ}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full max-w-full rounded-2xl object-cover object-center"
            title={"Nice bbq meat"}
            alt={"Nice bbq meat"}
          />

          <div className="grid gap-4">
            <Image
              src={PostIts}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full max-w-full rounded-2xl object-cover object-center"
              title={"Post its on a board"}
              alt={"Post its on a board"}
            />
            <Video
              src="/turnTable.mp4"
              additionalClassNames="max-w-full h-full object-cover"
            />
          </div>

          <div className="grid col-span-3 grid-cols-2 w-full gap-4">
            <Image
              src={NiceView}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full max-w-full rounded-2xl object-cover object-center"
              title={"View of mountain and water"}
              alt={"View of mountain and water"}
            />
            <div className="grid gap-4">
              <Image
                src={Leader}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full max-w-full rounded-2xl object-cover object-center"
                title={"Leader with followers"}
                alt={"Leader with followers"}
              />
              <Image
                src={Mountain}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full max-w-full rounded-2xl object-cover object-center"
                title={"Mountain view"}
                alt={"Mountain view"}
              />
            </div>
          </div>
        </div>

        <WorkExperience />

        <Testimonials />
      </div>
    </PageLayout>
  );
}
