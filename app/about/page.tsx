import NextLink from "@/components/NextLink";
import Video from "@/components/Video";
import EmailIcon from "@/components/icons/EmailIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import Image from "next/image";

import BBQ from "@/public/bbq.webp";
import Leader from "@/public/leader.webp";
import MacBook from "@/public/macbook.webp";
import Mountain from "@/public/mountain.webp";
import NiceView from "@/public/niceview.webp";
import PostIts from "@/public/postits.webp";
import WorkExperience from "@/components/WorkExperience";
import Testimonials from "@/components/Testimonials";

export default function About() {
  return (
    <div className="flex flex-col px-6 md:px-32 pt-48 gap-10 md:gap-28">
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
            icon={<LinkedInIcon />}
          />
          <NextLink
            redirectHref="mailto:mikevpeeren@hotmail.com?subject=Hey%20Mike"
            linkText="Email"
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
              className="h-full max-w-full rounded-2xl object-cover object-center"
              alt={"Dachshund looking into the distance"}
            />
            <Video
              src="/turnTableTwo.mp4"
              additionalClassNames="max-w-full h-full object-cover"
            />
          </div>

          <Image
            src={BBQ}
            className="h-full max-w-full rounded-2xl object-cover object-center"
            alt={"Dachshund looking into the distance"}
          />

          <div className="grid gap-4">
            <Image
              src={PostIts}
              className="h-full max-w-full rounded-2xl object-cover object-center"
              alt={"Dachshund looking into the distance"}
            />
            <Video
              src="/turnTable.mp4"
              additionalClassNames="max-w-full h-full object-cover"
            />
          </div>

          <div className="grid col-span-3 grid-cols-2 w-full gap-4">
            <Image
              src={NiceView}
              className="h-full w-full max-w-full rounded-2xl object-cover object-center"
              alt={"Dachshund looking into the distance"}
            />
            <div className="grid gap-4">
              <Image
                src={Leader}
                className="h-full w-full max-w-full rounded-2xl object-cover object-center"
                alt={"Dachshund looking into the distance"}
              />
              <Image
                src={Mountain}
                className="h-full w-full max-w-full rounded-2xl object-cover object-center"
                alt={"Dachshund looking into the distance"}
              />
            </div>
          </div>
        </div>

        <WorkExperience />

        <Testimonials />
      </div>
    </div>
  );
}
