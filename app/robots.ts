import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mrofresh.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/gallery", "/services"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
