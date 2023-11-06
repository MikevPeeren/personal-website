import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProjectBlock {
  imageSrc: StaticImageData;
  redirect: string;
  title: string;
  description: string;
  badges: { title: string; color: string }[];
}

const ProjectBlock = ({
  imageSrc,
  redirect,
  title,
  description,
  badges,
}: IProjectBlock) => {
  return (
    <div className="mt-4 rounded-xl border-2 bg-black p-6 shadow-md">
      <Link href={redirect}>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="max-w-[100px]">
            <Image
              alt="Redirection to GitHub Project"
              src={imageSrc}
              width={100}
              height={50}
            />
          </div>

          <h3 className="text-3xl font-extrabold capitalize tracking-wider lg:hidden">
            {title}
          </h3>
          <h3 className="hidden lg:block my-0 text-3xl font-extrabold capitalize text-gray-300">
            {title}
          </h3>
          <div className="flex flex-row flex-wrap items-center gap-1 gap-y-2 font-extrabold tracking-wider text-white">
            {[
              {
                title: "Next.js",
                color: "bg-violet-700",
              },
              ...badges,
            ].map((badge, index: number) => {
              return (
                <div
                  key={index}
                  className={`rounded-full p-0.5 px-4  ${badge.color}`}
                >
                  <span className="">{badge.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mb-0 mt-4 text-lg font-bold text-gray-300 lg:flex">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default ProjectBlock;
