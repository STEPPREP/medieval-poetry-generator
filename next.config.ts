import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/medieval-poetry-generator',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/medieval-poetry-generator',
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
