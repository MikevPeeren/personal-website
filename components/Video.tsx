import { cn } from "@/lib/utils";

const Video = ({
  additionalClassNames,
  src,
}: {
  additionalClassNames?: string;
  src: string;
}) => {
  return (
    <video
      className={cn("rounded-3xl", additionalClassNames)}
      loop
      autoPlay
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
