import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    './content/**/*.{md,mdx}'
  ],
  prefix: "",
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
      },
    },
  },
} satisfies Config;

export default config;
