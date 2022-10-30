import Image from "next/image";

import ME from "/public/avataaars.png";

import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMediaRow";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col md:flex-row items-center md:items-end md:justify-between md:gap-x-24">
        <div className="text-white">
          <h1 className="text-3xl font-extrabold tracking-wider">
            Hi there, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-violet-500">
              Mike van Peeren
            </span>
          </h1>

          <p className="mt-6 text-xl leading-9 py-4">
            I love creating applications that have a social impact on the world.
            This provides a sense of meaningfulness for me in my work and pushes
            me to deliver results as close to perfection as possible. My drive
            for perfection also pushes me to keep myself up to date about new
            innovations and developments in my line of work and to always learn
            from colleagues and experts in the field.
          </p>

          <SocialMedia />
        </div>
        <div className="shrink-0 mt-10 md:mt-0">
          <Image
            className="z-0 rounded-md"
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
