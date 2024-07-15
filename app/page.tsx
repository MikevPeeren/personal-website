import Image from "next/image";

import Avatar from "@/app/ui/Avatar";
import BlogPostCTA from "@/app/ui/BlogPostCTA";
import CTAContact from "@/app/ui/CTAContact";
import ArrowRightIcon from "@/app/ui/icons/ArrowRightIcon";
import NextLink from "@/app/ui/NextLink";
import Belle from "@/public/belle.webp";

export default function Home() {
  return (
    <div className="flex flex-col px-6 md:px-32 pt-48 gap-10 md:gap-28">
      <div className="flex flex-col gap-10">
        <Avatar />
        <div className="flex gap-8 flex-col">
          <h1>
            I&apos;m a Frontend Development Lead Passionate About Exceptional
            User Experiences & High-Quality Code
          </h1>
          <p>
            My name is Mike van Peeren and I am driven by a passion for creating
            impactful applications with a social footprint, I aim to deliver
            results through meaningful work. My journey is fueled by a sense of
            purpose, and I&apos;m eager to take on greater responsibilities,
            lead teams, and inspire others. I stay current with industry
            innovations, constantly learning from peers, and I believe in
            fostering growth and success for the teams I lead.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <NextLink redirectHref="/contact" linkText="Contact me!" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
        <div className="flex gap-4 flex-col justify-between">
          <div className="flex gap-8 flex-col">
            <h2>I believe in fostering growth and success.</h2>
            <p>
              Driven by a passion for creating impactful applications with a
              social footprint, I aim to deliver results through meaningful
              work. My journey is fueled by a sense of purpose, and I&apos;m
              eager to take on greater responsibilities, lead teams, and inspire
              others.
            </p>
          </div>
          <NextLink
            redirectHref="/about"
            linkText="More about me!"
            icon={<ArrowRightIcon />}
          />
        </div>
        <div>
          <Image
            src={Belle}
            className="rounded-2xl"
            sizes="100vw"
            placeholder="blur"
            width={500}
            height={300}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
              objectFit: "cover",
            }}
            title={""}
            alt={"Dachshund looking into the distance"}
          />
        </div>
      </div>

      <div className="flex gap-8 flex-col">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <h2>Latest posts</h2>
          <div>
            <NextLink
              redirectHref="/blog"
              linkText="Visit Blog"
              icon={<ArrowRightIcon />}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 rounded-2xl">
          <BlogPostCTA amount={3} />
        </div>
      </div>

      <div className="flex justify-between">
        <CTAContact />
      </div>
    </div>
  );
}
