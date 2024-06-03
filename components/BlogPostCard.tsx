import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const BlogPostCard = ({ blogPost }: { blogPost: any }) => {
  return (
    <Link key={blogPost.title} href={`/blog/${blogPost.slug}`}>
      <div className="relative rounded-2xl w-full">
        <Image
          src={blogPost.imageSrc}
          className={
            "rounded-2xl w-full hover:scale-110 transition duration-300 ease-in-out object-cover h-64 md:h-auto md:max-h-[600px]"
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={500}
          height={300}
          alt={blogPost.imageAlt ?? ""}
        />

        <div className="absolute inset-0 flex justify-start items-end z-10 w-full p-4">
          <div className="opacity-90 bg-white dark:bg-[#1C1C1C] p-4 rounded-2xl w-full border dark:border-white border-black">
            <h3 className="text-xs md:text-lg pb-2">{blogPost.title}</h3>
            <p className="font-medium text-xs md:text-lg">
              {blogPost.description}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-end items-start z-10 gap-2 p-4">
          <span className="bg-black border dark:border-black border-white text-white font-medium dark:bg-white rounded-2xl px-4 py-1 dark:text-black text-xs">
            Recent Post
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
