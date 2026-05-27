import { Team } from "@/components/views/Team";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/constants/seo";
import JsonLd from "@/components/JsonLd";

const description =
  "Meet the advocates and legal professionals at Malika Okubasu & Company Advocates.";
const url = absoluteUrl("/our-team");

export const metadata = {
  title: "Our Team",
  description,
  alternates: {
    canonical: "/our-team",
  },
  openGraph: {
    title: `Our Team | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Team | ${SITE_NAME}`,
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
          name: "Our Team",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Team />
    </>
  );
}
