import JsonLd from "@/components/JsonLd";
import { About } from "@/components/views/About";
import {
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
} from "@/constants/seo";

const description =
  "Learn about Malika Okubasu & Company Advocates, a Nairobi-based law firm providing practical legal advice and representation to individuals, businesses, and institutions.";
const url = absoluteUrl("/about-us");

export const metadata = {
  title: "About Us",
  description,
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${SITE_NAME}`,
    description,
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${url}#webpage`,
      name: `About Us | ${SITE_NAME}`,
      description,
      url,
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
    },
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
          name: "About Us",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <About />
    </>
  );
}
