/** @type {import('next').NextConfig} */

const path = require("path");
const { withContentlayer } = require("next-contentlayer");

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

module.exports = withContentlayer(nextConfig);
