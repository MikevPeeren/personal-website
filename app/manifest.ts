import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mike van Peeren - Driven by providing exceptional User Experiences",
    short_name: "Mike van Peeren",
    description:
      "Explore the world of front-end development with Mike van Peeren. Check out his blog posts about Next.js, tech news and personal insights, and projects!",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
