import JsonLd from "@/components/JsonLd";
import { OFFICIAL_LINKEDIN_URL } from "@/constants/social";
import { Home } from "@/components/views/Home";
import {
  HOMEPAGE_DESCRIPTION,
  HOMEPAGE_TITLE,
  LOGO_URL,
  OG_IMAGE_URL,
  ORGANIZATION_ID,
  SITE_EMAIL,
  SITE_NAME,
  SITE_TELEPHONE,
  SITE_URL,
  WEBSITE_ID,
} from "@/constants/seo";

export const metadata = {
  title: {
    absolute: HOMEPAGE_TITLE,
  },
  description: HOMEPAGE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Malika Okubasu & Company Advocates",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
};

export default function Page() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: OG_IMAGE_URL,
    description: HOMEPAGE_DESCRIPTION,
    areaServed: "Kenya",
    serviceType: "Legal Services",
    telephone: SITE_TELEPHONE,
    email: SITE_EMAIL,
    sameAs: [OFFICIAL_LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "5th Avenue Suites, 5th Avenue Ngong Road, Suite No. 6, 4th Floor",
      addressLocality: "Nairobi",
      postalCode: "00603",
      addressCountry: "KE",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };

  return (
    <>
      <JsonLd data={legalServiceSchema} />
      <JsonLd data={websiteSchema} />
      <Home />
    </>
  );
}
