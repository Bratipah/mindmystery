/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    port: 5000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "localhost",
      // },
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
    ],
  },
};

module.exports = nextConfig;
