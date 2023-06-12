import Image from "next/image";
import Link from "next/link";

import { format, parseISO } from "date-fns";

interface IBlogPreview {
  publishDate: string;
  title: string;
  description: string;
  link: string;
  imageAlt: string;
  imageSrc: string;
}

const BlogPreview = ({
  title,
  description,
  publishDate,
  link,
  imageAlt,
  imageSrc,
}: IBlogPreview) => {
  return (
    <article className="overflow-hidden rounded-lg border-2 shadow transition hover:shadow-lg">
      <Link href={link}>
        <Image
          className="h-[200px] w-full object-cover"
          alt={imageAlt}
          src={imageSrc}
          width={1000}
          height={200}
          priority
        />
        <div>
          <div className="bg-black p-4 sm:p-6">
            <time dateTime={publishDate} className="block text-xs text-white">
              {format(parseISO(publishDate), "LLLL d, yyyy")}
            </time>

            <h3 className="mt-0.5  bg-clip-text text-lg text-[#f9a66c]">
              {title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPreview;
