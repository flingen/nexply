import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/compliance",
    "/risk",
    "/legal",
    "/who-we-act-for",
    "/markets",
    "/why-nexply",
    "/free-consultation",
    "/privacy-policy",
    "/terms",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 }));
}
