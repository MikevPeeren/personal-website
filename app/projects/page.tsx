import { CenteredLayout } from "@/components/CenteredLayout";
import { PageWrapper } from "@/components/PageWrapper";
import { ProjectCard } from "@/components/ProjectCard";

import MailBox from "../ui/icons/MailBox";
import NextLink from "../ui/NextLink";

import NextJS from "@/public/projects/nextjs.jpg";
import Svelte from "@/public/projects/svelte.png";

const projects = [
  {
    title: "Next.js StarterKit",
    description: "Next.js TypeScript TailwindCSS & SASS Starter",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "SASS",
      "StarterKit",
    ],
    githubLink:
      "https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter",
    imageSrc: NextJS,
    alt: "Next.js logo",
  },
  {
    title: "Svelte StarterKit",
    description: "Svelte TypeScript TailwindCSS & SASS Starter",
    technologies: ["Svelte", "TypeScript", "TailwindCSS", "SASS", "StarterKit"],
    githubLink:
      "https://github.com/MikevPeeren/sveltekit-typescript-tailwindcss-sass-starter",
    imageSrc: Svelte,
    alt: "Svelte logo",
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <CenteredLayout>
        <div className="flex gap-8 flex-col">
          <div>
            <h1>Projects</h1>
            <h2 className="text-50 text-xl">
              Personal project I&apos;ve made for the community.
            </h2>
            <div className="w-full md:w-auto">
              <NextLink
                redirectHref="/contact"
                linkText="Contact me!"
                title={"contact me"}
                icon={<MailBox />}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </CenteredLayout>
    </PageWrapper>
  );
}
