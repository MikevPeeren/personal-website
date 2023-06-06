const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["www.mikevpeeren.nl", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
