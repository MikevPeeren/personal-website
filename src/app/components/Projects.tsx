import NEXTJS from "/public/icons/next_logo.png";
import SVELTE from "/public/icons/svelte.png";

import ProjectBlock from "./ProjectBlock";

const Projects = () => {
  const projects = [
    {
      redirect:
        "https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter",
      imageSrc: NEXTJS,
      title: "Next.js Starter Template",
      description:
        "Use TypeScript, TailwindCSS & Sass to quick start your new Next.js app!",
    },
    {
      redirect:
        "https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter",
      imageSrc: SVELTE,
      title: "SvelteKit Starter Template",
      description:
        "Use TypeScript, TailwindCSS & Sass to quick start your new SvelteKit app!",
    },
  ];

  const badges = [
    {
      title: "Tailwind.css",
      color: "bg-cyan-700",
    },
    {
      title: "TypeScript",
      color: "bg-blue-600",
    },
    {
      title: "Sass",
      color: "bg-red-800",
    },
    {
      title: "Vercel",
      color: "bg-green-800",
    },
  ];

  return (
    <div className="flex flex-col gap-2 md:flex-col">
      <h2 className="bg-gradient-to-r from-[#FFC94B] via-[#f9a66c] to-[#F17A7E] bg-clip-text py-8 text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index: number) => {
          return (
            <ProjectBlock
              key={index}
              badges={badges}
              redirect={project.redirect}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
