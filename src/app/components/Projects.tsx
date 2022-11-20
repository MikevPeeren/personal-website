import Image from "next/image";

import NEXTJS from "/public/icons/next_logo.png";

const Projects = async () => {
  const badges = [
    {
      title: "Next.js",
      color: "bg-violet-700",
    },
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
    <div>
      <h2 className="text-3xl font-extrabold tracking-wider text-white">
        Recent{" "}
        <span className="bg-gradient-to-br from-red-500 to-violet-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <div className="mt-4 rounded-xl bg-slate-800 p-10 shadow-md">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <a
              target="_blank"
              href={
                "https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter"
              }
              className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              rel="noreferrer"
            >
              <Image
                src={NEXTJS}
                alt="Redirection to GitHub Project"
                width={100}
              />
            </a>
            <a
              target="_blank"
              href={
                "https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter"
              }
              className="cursor-pointer bg-gradient-to-br from-white to-white bg-clip-text text-transparent transition delay-150 ease-in-out hover:from-red-500 hover:to-violet-500"
              rel="noreferrer"
            >
              <h3 className="text-2xl font-extrabold capitalize tracking-wider">
                next typeScript tailwindCSS sass starter
              </h3>
            </a>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-1 gap-y-2 font-extrabold tracking-wider text-white">
            {badges.map((badge, index: number) => {
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
        <p className="mt-4 text-lg font-bold text-gray-300">
          Use TypeScript, TailwindCSS & Sass to quick start your new Next.js
          app!!
        </p>
      </div>
    </div>
  );
};

export default Projects;
