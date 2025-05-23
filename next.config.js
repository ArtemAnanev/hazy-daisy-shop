/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.yandex.net" },
      { protocol: "https", hostname: "hazy-daisy-shop.vercel.app" },
    ],
  },
};

module.exports = nextConfig;
