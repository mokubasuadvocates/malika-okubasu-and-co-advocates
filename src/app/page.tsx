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
    "@type": ["LegalService", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: OG_IMAGE_URL,
    description: HOMEPAGE_DESCRIPTION,
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    serviceType: [
      "Corporate Law",
      "Commercial Law",
      "Dispute Resolution",
      "Real Estate and Conveyancing",
      "Employment Law",
      "Family Law",
      "Intellectual Property",
    ],
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-1.2954",
      longitude: "36.7903"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is your firm located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our main office is located in Nairobi, Kenya, at 5th Avenue Suites on Ngong Road (Suite No. 6, 4th Floor). We serve clients both locally in Kenya and internationally."
        }
      },
      {
        "@type": "Question",
        name: "What are your main practice areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on Corporate and Commercial Law, Dispute Resolution, Real Estate and Conveyancing, Employment Law, Family Law, and Technology/Intellectual Property Law."
        }
      },
      {
        "@type": "Question",
        name: "Do you handle cross-border disputes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We frequently advise clients on cross-border transactions and regional integration matters, particularly within the East African Community (EAC) and AfCFTA frameworks."
        }
      },
      {
        "@type": "Question",
        name: "How do I book a consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a consultation by visiting our Contact page, calling us directly at +254 141 397 048, or emailing legal@mokubasuadvocates.com. We aim to respond to all inquiries within 24 hours."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={legalServiceSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <Home />
    </>
  );
}
