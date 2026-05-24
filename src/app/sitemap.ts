import { MetadataRoute } from "next";
import { practiceAreas } from "@/constants/practiceAreas";
import { SITE_URL } from "@/constants/seo";
import { blogPosts } from "@/data/blogs";

const teamProfiles = [
  "brenton-okubasu",
  "oduor-khamati",
  "susan-anyango",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/practice-areas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/our-team`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/publications`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const practiceAreaPages: MetadataRoute.Sitemap = practiceAreas.map(
    (area) => ({
      url: `${SITE_URL}/practice-areas/${area.id}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const teamProfilePages: MetadataRoute.Sitemap = teamProfiles.map((id) => ({
    url: `${SITE_URL}/our-team/${id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const publicationPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/publications/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...mainPages,
    ...practiceAreaPages,
    ...teamProfilePages,
    ...publicationPages,
  ];
}
