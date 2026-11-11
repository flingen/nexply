import type { Metadata } from "next";
import { seo, site } from "@/content/site";

type Key = keyof typeof seo;
export function pageMeta(key: Key, path: string): Metadata {
  const m = seo[key];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: { canonical: path },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${site.url}${path}`,
      siteName: site.name,
      type: "website",
      locale: "en_NG",
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}
