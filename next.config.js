/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.ctfassets.net",
        port: "",
        pathname: "/**",
      },
      // Add more patterns if needed
    ],
  },
};

module.exports = nextConfig;
