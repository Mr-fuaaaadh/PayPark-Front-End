/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Change to https to avoid mixed content issues
        hostname: "13.60.216.198",
      },
    ],
  },
  output: 'standalone',  // Ensures compatibility with Netlify (Serverless)
  trailingSlash: true,   // Helps with route handling and avoids 404 errors
  reactStrictMode: true, // Helps with development (strict checks)
};

module.exports = nextConfig;
