import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/oluk-portal',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
