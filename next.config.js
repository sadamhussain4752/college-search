/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd13loartjoc1yn.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      // Support pretty paths like /exams-mbbs → /exams/mbbs
      {
        source: '/exams-:slug',
        destination: '/exams/:slug',
      },
    ];
  },
};

module.exports = nextConfig;


