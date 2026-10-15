import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the root so a stray package-lock.json in the home folder isn't picked up
  turbopack: { root: __dirname },
};

export default nextConfig;
