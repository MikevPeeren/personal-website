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
      placeholder="blur"
      sizes="100vw"
      style={{
        width: "100%",
        height: "50px",
      }}
      width={100}
      height={60}
      className="rounded-full border-2"
    />
  );
};

export default Avatar;
