import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    link: string;
    image: StaticImageData;
    alt: string;
    tags: string[];
  };
}) => {
  return (
    <Link key={project.title} href={project.link} target="_blank">
      <div className="relative rounded-2xl">
        <Image
          src={project.image}
          className="rounded-2xl w-[600px] h-[400px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
          alt={project.alt}
          placeholder="blur"
        />
        <div className="absolute inset-0 flex j ustify-start items-end z-10 w-full p-4">
          <div className="opacity-90 bg-white dark:bg-[#1C1C1C] p-4 rounded-2xl w-full border dark:border-white border-black">
            <h3>{project.title}</h3>
            <p className="font-medium">{project.description}</p>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-end items-start z-10 gap-2 p-4">
          {project.tags.map((tag) => {
            return (
              <span
                className="bg-black border dark:border-black border-white text-white font-medium dark:bg-white rounded-2xl px-4 py-1 dark:text-black"
                key={tag}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
