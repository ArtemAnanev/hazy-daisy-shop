import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:  'Hazy Daisy Application',
    short_name:  'Hazy Daisy App',
    description: 'Hazy Daisy магазин футболок для ваших тодлеров',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    icons: [
      {
        src: '/img/logo.png',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/svg',
        purpose: 'maskable',
      },
      {
        src: '/img/logo.png',
        sizes: '144x144 512x512 192x192 196x196 128x128 120x120 180x180',
        type: 'image/png',
        purpose: 'any',
      }
    ]
  }
}
