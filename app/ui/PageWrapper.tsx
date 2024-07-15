import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white dark:bg-[#1C1C1C] m-2.5 rounded-3xl w-full h-full z-10">
      {children}
    </div>
  );
};

export default PageWrapper;
