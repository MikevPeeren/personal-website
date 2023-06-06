import Image from "next/image";
import Link from "next/link";

interface IBlogPreview {
  publishDate: string;
  title: string;
  description: string;
  link: string;
}

const BlogPreview = ({
  title,
  description,
  publishDate,
  link,
}: IBlogPreview) => {
  return (
    <article className="overflow-hidden rounded-lg border-2 shadow transition hover:shadow-lg">
      <Link href={link}>
        <Image
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          width={1000}
          height={50}
        />
        <div>
          <div className="bg-black p-4 sm:p-6">
            <time
              dateTime={publishDate}
              className="block text-xs text-gray-500"
            >
              {publishDate}
            </time>

            <h3 className="mt-0.5  bg-clip-text text-lg text-[#f9a66c]">
              {title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPreview;
