// Node
const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["www.mikevpeeren.nl"],
    formats: ["image/avif", "image/webp"],
  },
};
