/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nps.gov',
        port: '',
        pathname: '/common/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
