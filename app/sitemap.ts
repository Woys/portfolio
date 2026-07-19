import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com";
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/analytics-engineer/`,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/data-engineer/`,
      lastModified: new Date("2026-07-18"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
