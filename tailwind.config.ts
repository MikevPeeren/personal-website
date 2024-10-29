import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        synthwave: {
          background: "#2b213a",
          text: "#ff7edb",
          highlight: "#ff2aef",
        },
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              backgroundColor: theme("colors.synthwave.background"),
              color: theme("colors.synthwave.text"),
              fontWeight: "400",
              "border-radius": "0.25rem",
            },
            pre: {
              backgroundColor: theme("colors.synthwave.background"),
              color: theme("colors.synthwave.text"),
              fontSize: "0.875rem",
              lineHeight: "1.7142857",
              "border-radius": "0.5rem",
              padding: "1rem",
            },
            "pre code": {
              backgroundColor: "transparent",
              borderWidth: "0",
              borderRadius: "0",
              padding: "0",
              fontWeight: "400",
              color: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              lineHeight: "inherit",
            },
          },
        },
        dark: {
          css: {
            code: {
              backgroundColor: theme("colors.synthwave.background"),
              color: theme("colors.synthwave.text"),
            },
          },
        },
      }),
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
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
