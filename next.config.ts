import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
  {
    source: '/sitemap.xml',
    headers: [{ key: 'Content-Type', value: 'application/xml' }],
  },
]
  /* config options here */
};

export default nextConfig;
