import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [
      { source: "/certificados", headers: noindex },
      { source: "/certificados/:path*", headers: noindex },
    ];
  },
};

export default nextConfig;
