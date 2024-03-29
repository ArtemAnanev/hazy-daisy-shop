import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:  'Hazy Daisy Application',
    short_name:  'Hazy Daisy App',
    description: 'Hazy Daisy магазин футболок для ваших тодлеров',
    start_url: '/',
    icons: [
      {
        src: '/img/icon.svg',
        sizes: '196x196',
        type: 'image/svg',
        purpose: 'maskable',
      }
    ]
  }
}
