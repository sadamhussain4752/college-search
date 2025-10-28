import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    unoptimized: true, // ✅ allows all remote images without domain restriction
  },
};

export default nextConfig;
