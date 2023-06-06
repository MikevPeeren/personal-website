import Image from "next/image";

import Projects from "@/components/Projects";

import ME from "/public/mike.png";

import BlogPreview from "./components/BlogPreview";

import { getAllPostsMeta } from "@/lib/mdx";

const Home = async () => {
  const posts = await getAllPostsMeta();

  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between md:gap-x-24">
        <div>
          <h1>
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#FFC94B] via-[#f9a66c] to-[#F17A7E] bg-clip-text font-extrabold text-transparent">
              Mike van Peeren
            </span>
          </h1>

          <div className="[>div]">
            <p className="mb-0 mt-4 py-4 text-lg">
              I love creating applications that have a social impact on the
              world. This provides a sense of meaningfulness for me in my work
              and pushes me to deliver results as close to perfection as
              possible. My drive for perfection also pushes me to keep myself up
              to date about new innovations and developments in my line of work
              and to always learn from colleagues and experts in the field.
            </p>
          </div>
        </div>
        <div className="mt-10 shrink-0 md:mt-0">
          <Image
            className="z-0 h-auto w-auto rounded-xl"
            priority
            src={ME}
            alt="Personal picture of Mike van Peeren"
            width={250}
            height={300}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 md:flex-col">
        <h2 className="bg-gradient-to-r from-[#FFC94B] via-[#f9a66c] to-[#F17A7E] bg-clip-text py-8 text-transparent">
          Latest Posts
        </h2>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts?.map((post) => (
            <BlogPreview
              key={post.title}
              publishDate={post.publishDate}
              title={post.title}
              description={post.description}
              link={`blog/${post.slug}`}
            />
          ))}
        </section>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
