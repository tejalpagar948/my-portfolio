import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
<<<<<<< HEAD
    domains: ['images.unsplash.com'],
=======
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
>>>>>>> 8c5257b627f2e18cf7d28436007025e415a44ec9
  },
};

export default nextConfig;
