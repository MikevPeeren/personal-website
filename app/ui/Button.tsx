import { cn } from "@/lib/utils";

const Button = ({
  buttonText,
  handleClick,
  icon,
  variant = "primary",
  type = "button",
  size = "md",
}: {
  buttonText: string;
  handleClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
  size?: "md" | "lg";
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-transparent dark:hover:border-[#FFFFFF]/50 hover:border-black border rounded-2xl px-6 py-6 text-sm font-medium shadow-sm transition-colors duration-700 ease-in-out group",
        variant === "primary" && "bg-transparant",
        variant === "secondary" &&
          "bg-[#1C1C1C] text-white dark:bg-white dark:text-black border-[#1C1C1C] dark:border-white",
        variant === "tertiary" && "border-none border-0",
        size === "lg" && "text-lg min-h-20",
      )}
      onClick={handleClick}
      type={type}
    >
      {buttonText}
      {icon && icon}
    </button>
  );
};

export default Button;
