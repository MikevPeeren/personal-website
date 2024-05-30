import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  swcMinify: true,
  images: {
    domains: ["www.mikevpeeren.nl", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default withContentlayer(nextConfig);
