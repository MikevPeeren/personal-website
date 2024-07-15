import { cn } from "@/app/lib/utils";

const MediumIcon = ({
  size = "24",
  additionalClassNames = "",
}: {
  size?: string;
  additionalClassNames?: string;
}) => {
  return (
    <svg
      fill="#000000"
      width={size}
      height={size}
      version="1.1"
      className={cn(
        "transition-transform group-hover:translate-x-1",
        additionalClassNames,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 483 483"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M483.86,112.345h-26.699c-6.952,0-25.143,7.552-25.143,13.981v233.467c0,6.445,18.191,11.729,25.143,11.729h26.699v51.835 H311.052v-51.835h34.57V129.615h-6.016L256.42,423.356h-64.406l-82.11-293.741h-6.219v241.906h34.555v51.835H0v-51.835h19.173 c7.527,0,15.383-5.283,15.383-11.729V126.326c0-6.43-7.855-13.981-15.383-13.981H0V60.504h179.155l58.496,207.342h1.574 l59.073-207.342H483.86V112.345z"></path>{" "}
        </g>
      </g>
    </svg>
  );
};

export default MediumIcon;
