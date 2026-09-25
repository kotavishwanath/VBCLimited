import type { MetadataRoute } from "next";
import { jobs } from "@/lib/jobs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/careers`, changeFrequency: "weekly", priority: 0.8 },
    ...jobs.map((job) => ({ url: `${site.url}/careers/${job.slug}`, priority: 0.6 })),
  ];
}
