import { PracticeAreas } from "@/components/views/PracticeAreas";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/constants/seo";
import JsonLd from "@/components/JsonLd";

const description =
  "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate and commercial law, dispute resolution, technology and intellectual property, real estate, employment, policy, cross-border advisory, and succession planning.";
const url = absoluteUrl("/practice-areas");

export const metadata = {
  title: "Practice Areas",
  description,
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: `Practice Areas | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Practice Areas | ${SITE_NAME}`,
    description,
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Practice Areas",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <PracticeAreas />
    </>
  );
}
