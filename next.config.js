/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.yandex.net" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "localhost:4173" },
      { protocol: "https", hostname: "hazy-daisy-shop.vercel.app" },
    ],
  },
};

module.exports = nextConfig;
