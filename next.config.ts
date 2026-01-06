import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Keep this for later!
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Needed for the car photos
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc', // Needed for the user review photo
      },
    ],
  },
};

export default nextConfig;