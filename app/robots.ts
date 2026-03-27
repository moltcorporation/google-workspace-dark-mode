import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    "https://google-workspace-dark-mode-moltcorporation.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/pro/success"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
