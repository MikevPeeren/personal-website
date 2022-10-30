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
      title: "SASS",
      color: "bg-red-800",
    },
    {
      title: "VERCEL",
      color: "bg-green-800",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl text-white font-extrabold tracking-wider">
        Recent{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-violet-500">
          Projects
        </span>
      </h2>
      <div className="rounded-xl bg-slate-800 p-10 mt-4 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a
              target="_blank"
              href={
                "https://github.com/MikevPeeren/next-typescript-tailwindcss-sass-starter"
              }
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
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
              className="cursor-pointer transition ease-in-out delay-150 from-white to-white bg-clip-text text-transparent bg-gradient-to-br hover:from-red-500 hover:to-violet-500"
              rel="noreferrer"
            >
              <h3 className="capitalize text-2xl font-extrabold tracking-wider">
                next typeScript tailwindCSS sass starter
              </h3>
            </a>
          </div>
          <div className="flex flex-row gap-1 items-center text-white font-extrabold tracking-wider flex-wrap">
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
        <p className="text-gray-300 mt-4 font-bold text-lg">
          Use TypeScript, TailwindCSS & Sass to quick start your new Next.js
          app!!
        </p>
      </div>
    </div>
  );
};

export default Projects;
