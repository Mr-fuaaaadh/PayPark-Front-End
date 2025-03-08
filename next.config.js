/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.60.216.198",
      },
    ],
  },
  output: 'standalone',  // Ensures compatibility with Netlify
  trailingSlash: true,   // Helps with route handling
  reactStrictMode: true,
};

module.exports = nextConfig;
