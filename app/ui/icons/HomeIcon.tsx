import { cn } from "@/app/lib/utils";

const HomeIcon = ({
  size = "24",
  additionalClassNames = "",
}: {
  size?: string;
  additionalClassNames?: string;
}) => {
  return (
    <svg
      className={cn(
        "transition-transform group-hover:translate-x-1",
        additionalClassNames,
      )}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 ${size} ${size}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
      />
    </svg>
  );
};

export default HomeIcon;
