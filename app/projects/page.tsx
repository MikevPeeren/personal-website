import Image from "next/image";
import Link from "next/link";

import MailBox from "@/components/icons/MailBox";
import NextLink from "@/components/NextLink";
import ProjectCard from "@/components/ProjectCard";

import NextJS from "@/public/projects/nextjs.jpg";
import Svelte from "@/public/projects/svelte.png";

export default function Projects() {
  const projects = [
    {
      title: "Next.js StarterKit",
      description: "Next.js TypeScript TailwindCSS & Sass Starter",
      tags: ["Next.js", "StarterKit"],
      link: "https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter",
      image: NextJS,
      alt: "Next.js logo",
    },
    {
      title: "Svelte StarterKit",
      description: "Svelte TypeScript TailwindCSS & Sass Starter",
      tags: ["Svelte", "StarterKit"],
      link: "https://github.com/MikevPeeren/sveltekit-typescript-tailwindcss-sass-starter",
      image: Svelte,
      alt: "Svelte logo",
    },
  ];
  return (
    <div className="flex flex-col px-6 md:px-32 pt-48 gap-10 md:gap-28">
      <div className="flex gap-8 flex-col">
        <h1>Projects</h1>
        <h2 className=" text-50 text-xl">
          Personal project I&apos;ve made for the community.
        </h2>
        <div className="w-full md:w-auto">
          <NextLink
            redirectHref="/contact"
            linkText="Contact me!"
            icon={<MailBox />}
          />
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
    </div>
  );
}
