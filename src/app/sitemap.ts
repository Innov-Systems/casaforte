import type { MetadataRoute } from "next";
import { company } from "@/data/company";
export default function sitemap(): MetadataRoute.Sitemap {
  return company.url
    ? [{ url: company.url, changeFrequency: "monthly", priority: 1 }]
    : [];
}
