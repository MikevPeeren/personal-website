import Image, { StaticImageData } from "next/image";

import PersonalPhoto from "@/public/personalPhoto.webp";

const Avatar = ({
  src = PersonalPhoto,
  alt = "Mike van Peeren",
}: {
  src?: string | StaticImageData;
  alt?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      title={alt}
      placeholder="blur"
      sizes="100vw"
      width={100}
      height={60}
      className="rounded-full border-2"
    />
  );
};

export default Avatar;
