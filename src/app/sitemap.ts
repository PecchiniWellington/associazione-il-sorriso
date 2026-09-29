import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { navigation, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...navigation.map((item) => item.href),
    "/sostienici/",
    ...projects.map((project) => `/progetti/${project.slug}/`),
    "/cookie-policy/",
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
