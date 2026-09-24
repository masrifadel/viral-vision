import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://viralvision.example/sitemap.xml",
    host: "https://viralvision.example",
  };
}
