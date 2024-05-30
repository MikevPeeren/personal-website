import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mike van Peeren - Passionate About UX & High-Quality Code",
    short_name: 'Mike van Peeren',
    description:
    "Explore the world of front-end development with Mike van Peeren. Check out his blog, and projects!",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}