import type { NextConfig } from "next";

// The browser only ever talks to /api on our own origin; Next proxies it to FastAPI.
// Sponsor keys live only in the FastAPI env, never here.
const API_ORIGIN = process.env.API_ORIGIN ?? "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${API_ORIGIN}/api/:path*` }];
  },
};

export default nextConfig;
