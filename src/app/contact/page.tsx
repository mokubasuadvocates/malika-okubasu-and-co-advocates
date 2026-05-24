import JsonLd from "@/components/JsonLd";
import { Contact } from "@/components/views/Contact";
import {
  ORGANIZATION_ID,
  SITE_EMAIL,
  SITE_NAME,
  SITE_TELEPHONE,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
} from "@/constants/seo";

const description =
  "Contact Malika Okubasu & Company Advocates in Nairobi for legal consultations and inquiries.";
const url = absoluteUrl("/contact");

export const metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${SITE_NAME}`,
    description,
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${url}#webpage`,
      name: `Contact | ${SITE_NAME}`,
      description,
      url,
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
      mainEntity: {
        "@id": ORGANIZATION_ID,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE_TELEPHONE,
          email: SITE_EMAIL,
          contactType: "Legal enquiries",
          areaServed: "KE",
          availableLanguage: ["English"],
        },
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
          name: "Contact",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Contact />
    </>
  );
}
