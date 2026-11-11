import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old routes, kept so existing links and search results still land.
  async redirects() {
    return [
      { source: "/licensing", destination: "/legal", permanent: true },
      { source: "/how-it-works", destination: "/why-nexply", permanent: true },
      { source: "/approach", destination: "/why-nexply", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/book-a-call", destination: "/free-consultation", permanent: true },
      { source: "/contact", destination: "/free-consultation", permanent: true },
      { source: "/events", destination: "/", permanent: true },
      { source: "/events/:id", destination: "/", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
