/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.yandex.net" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
};

module.exports = nextConfig;
