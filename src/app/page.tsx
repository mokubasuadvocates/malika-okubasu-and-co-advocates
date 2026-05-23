import JsonLd from "@/components/JsonLd";
import { OFFICIAL_LINKEDIN_URL } from "@/constants/social";
import { Home } from "@/components/views/Home";

export const metadata = {
  title: {
    absolute: "Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya",
  },
  description:
    "Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya",
    description:
      "Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.",
    url: "https://mokubasuadvocates.com",
    siteName: "Malika Okubasu & Company Advocates",
    images: [
      {
        url: "/og-image.png",
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
    title: "Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya",
    description:
      "Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://mokubasuadvocates.com/#legalservice",
    name: "Malika Okubasu & Company Advocates",
    url: "https://mokubasuadvocates.com",
    logo: "https://mokubasuadvocates.com/icon-192x192.png",
    image: "https://mokubasuadvocates.com/og-image.png",
    description:
      "Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.",
    areaServed: "Kenya",
    serviceType: "Legal Services",
    telephone: "+254141397048",
    email: "legal@mokubasuadvocates.com",
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
    "@id": "https://mokubasuadvocates.com/#website",
    name: "Malika Okubasu & Company Advocates",
    url: "https://mokubasuadvocates.com",
    publisher: {
      "@id": "https://mokubasuadvocates.com/#legalservice",
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
