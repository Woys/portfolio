import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mikheevs.com";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["OAI-SearchBot", "ChatGPT-User", "GPTBot"], allow: "/" },
      { userAgent: ["ClaudeBot", "Claude-SearchBot", "PerplexityBot"], allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
