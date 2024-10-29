import Image from "next/image";

import Avatar from "@/components/Avatar";
import { BlogPostGrid } from "@/components/BlogPostGrid";
import { CenteredLayout } from "@/components/CenteredLayout";
import { PageWrapper } from "@/components/PageWrapper";

import TypewriterText from "./ui/TypeWriterText";

import CTAContact from "@/app/ui/CTAContact";
import ArrowRightIcon from "@/app/ui/icons/ArrowRightIcon";
import NextLink from "@/app/ui/NextLink";
import { getLatestBlogPosts } from "@/lib/contentful";
import Belle from "@/public/belle.webp";

export default async function Home() {
  const latestPosts = await getLatestBlogPosts(2);

  return (
    <PageWrapper>
      <CenteredLayout>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Avatar />
            <div className="flex flex-col">
              <TypewriterText />

              <p>
                I am driven by a passion for creating impactful applications
                with a social footprint, I aim to deliver results through
                meaningful work. My journey is fueled by a sense of purpose, and
                I&apos;m eager to take on greater responsibilities, lead teams,
                and inspire others. I stay current with industry innovations,
                constantly learning from peers, and I believe in fostering
                growth and success for the teams I lead.
              </p>
            </div>
            <NextLink redirectHref="/blog" linkText="View my blog!" />
          </div>

          <div className="grid grid-cols-1 gap-4 justify-between">
            <div className="mt-8">
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
                loading="lazy"
                title={""}
                alt={"Dachshund looking into the distance"}
              />
            </div>
            <div className="flex gap-0 flex-col justify-between">
              <div className="flex flex-col">
                <h2 className="mt-0">
                  I believe in fostering growth and success.
                </h2>
                <p>
                  Driven by a passion for creating impactful applications with a
                  social footprint, I aim to deliver results through meaningful
                  work. My journey is fueled by a sense of purpose, and I&apos;m
                  eager to take on greater responsibilities, lead teams, and
                  inspire others.
                </p>
              </div>
              <NextLink
                redirectHref="/about"
                linkText="More about me!"
                icon={<ArrowRightIcon />}
              />
            </div>
          </div>

          <div className="flex gap-8 flex-col">
            <div className="flex flex-col">
              <h2 className="mt-0">Latest posts</h2>
              <div className="hidden md:block">
                <NextLink
                  redirectHref="/blog"
                  linkText="Visit Blog"
                  icon={<ArrowRightIcon />}
                />
              </div>
            </div>
            <BlogPostGrid posts={latestPosts} />
            <div className="block md:hidden w-full">
              <NextLink
                redirectHref="/blog"
                linkText="Visit Blog"
                additionalClassNames="w-full"
                icon={<ArrowRightIcon />}
              />
            </div>
          </div>

          <CTAContact />
        </div>
      </CenteredLayout>
    </PageWrapper>
  );
}
