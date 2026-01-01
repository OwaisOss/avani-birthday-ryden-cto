import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for deployment compatibility
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
