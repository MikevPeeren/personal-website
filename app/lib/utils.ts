import { type ClassValue, clsx } from "clsx";
import readingDuration from "reading-duration";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getReadingTime = (rawMDXContent: string) => {
  return readingDuration(rawMDXContent, {
    wordsPerMinute: 100,
    emoji: false,
  });
};
