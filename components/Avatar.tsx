import Image, { StaticImageData } from "next/image";

const Avatar = ({
  src = "/personalPhoto.webp",
  alt = "Mike van Peeren",
}: {
  src?: string | StaticImageData;
  alt?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={76}
      height={76}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="rounded-full border-2"
    />
  );
};

export default Avatar;
