import Image from "next/image";
import Link from "next/link";

import { format, parseISO } from "date-fns";

interface IBlogPreview {
  publishDate: string;
  title: string;
  description: string;
  link: string;
  imageAlt: string | undefined;
  imageSrc: string;
  lazyLoading?: boolean;
}

const BlogPreview = ({
  title,
  description,
  publishDate,
  link,
  imageAlt,
  imageSrc,
  lazyLoading = false,
}: IBlogPreview) => {
  return (
    <article className="overflow-hidden rounded-lg border-2 shadow transition hover:shadow-lg">
      <Link href={link}>
        <div className="relative h-[200px] w-full">
          <Image
            className="object-cover"
            alt={imageAlt ?? ""}
            src={imageSrc}
            loading={lazyLoading ? "lazy" : "eager"}
            fill
            priority={lazyLoading ? false : true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
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
