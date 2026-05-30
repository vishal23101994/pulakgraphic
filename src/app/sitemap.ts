import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pulakgraphics.com",
      lastModified: new Date(),
    },
    {
      url: "https://pulakgraphics.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://pulakgraphics.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://pulakgraphics.com/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://pulakgraphics.com/contact",
      lastModified: new Date(),
    },
  ];
}