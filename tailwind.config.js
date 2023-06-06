module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./mdx-components.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
