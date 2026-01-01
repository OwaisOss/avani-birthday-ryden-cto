import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // For static export compatibility
  },
  output: "export", // Enable static export for better deployment
};

export default nextConfig;
