import Image from "next/image";

import Projects from "@/components/Projects";
import SocialMedia from "@/components/SocialMediaRow";
import { getSortedPostsData } from "@/utils/blog/posts";

import ME from "/public/me.png";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between md:gap-x-24">
        <div className="text-white">
          <h1 className="text-3xl font-extrabold tracking-wider">
            Hi there, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text font-extrabold text-transparent">
              Mike van Peeren
            </span>
          </h1>

          <p className="mt-6 py-4 text-xl leading-9">
            I love creating applications that have a social impact on the world.
            This provides a sense of meaningfulness for me in my work and pushes
            me to deliver results as close to perfection as possible. My drive
            for perfection also pushes me to keep myself up to date about new
            innovations and developments in my line of work and to always learn
            from colleagues and experts in the field.
          </p>

          <SocialMedia />
        </div>
        <div className="mt-10 shrink-0 md:mt-0">
          <Image
            className="z-0 h-auto w-auto rounded-md"
            priority
            src={ME}
            alt="Personal picture of Mike van Peeren"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* @ts-expect-error */}
      <Projects />
    </div>
  );
};

export default Home;
