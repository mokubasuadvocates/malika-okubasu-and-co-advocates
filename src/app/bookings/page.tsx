import JsonLd from "@/components/JsonLd";
import { Bookings } from "@/components/views/Bookings";
import {
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
} from "@/constants/seo";

const description =
  "Book a legal consultation online with Malika Okubasu & Company Advocates in Nairobi, Kenya.";
const url = absoluteUrl("/bookings");

export const metadata = {
  title: "Book a Consultation",
  description,
  alternates: {
    canonical: "/bookings",
  },
  openGraph: {
    title: `Book a Consultation | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Book a Consultation | ${SITE_NAME}`,
    description,
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: `Book a Consultation | ${SITE_NAME}`,
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
          name: "Book a Consultation",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Bookings />
    </>
  );
}
