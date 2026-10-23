import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // The repo root has its own package.json/lockfile (it only forwards scripts here), so pin the app root
  // to this folder instead of letting Next.js guess.
  outputFileTracingRoot: path.join(__dirname),
  turbopack: { root: path.join(__dirname) },

  experimental: {
    serverActions: {
      // Contact form attachments are capped at 4 MB total (see src/lib/attachments.ts);
      // leave headroom for multipart overhead and text fields. Stays under Vercel's 4.5 MB limit.
      bodySizeLimit: "4.4mb",
    },
  },

  // Keep old PHP URLs working for search engines and bookmarks.
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index-old.html", destination: "/", permanent: true },
      { source: "/career.php", destination: "/careers", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
