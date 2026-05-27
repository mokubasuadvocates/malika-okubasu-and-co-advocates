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
        name: "What legal services does the firm provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on Corporate and Commercial Law, Dispute Resolution, Real Estate and Conveyancing, Employment Law, Family Law, and Technology/Intellectual Property Law."
        }
      },
      {
        "@type": "Question",
        name: "Where is the firm located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our main office is located in Nairobi, Kenya, at 5th Avenue Suites on Ngong Road (Suite No. 6, 4th Floor)."
        }
      },
      {
        "@type": "Question",
        name: "Does the firm work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We frequently advise both local and international clients on matters concerning Kenyan jurisdiction, cross-border transactions, and regional integration frameworks like the EAC and AfCFTA."
        }
      },
      {
        "@type": "Question",
        name: "How can I contact the firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach us by phone at +254 141 397 048, via email at legal@mokubasuadvocates.com, or through the contact form on our website."
        }
      },
      {
        "@type": "Question",
        name: "How do I book a consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book a consultation directly through our website's booking portal, or by contacting our office via phone or email. We aim to respond within 24 hours."
        }
      },
      {
        "@type": "Question",
        name: "Are consultations available online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer secure virtual consultations via Microsoft Teams, Zoom, or Google Meet for clients unable to visit our physical offices."
        }
      },
      {
        "@type": "Question",
        name: "What should I prepare before a consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Please have a brief summary of your legal issue, any relevant contracts, correspondence, or legal documents ready for review to help us understand your situation efficiently."
        }
      },
      {
        "@type": "Question",
        name: "How long does a consultation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An initial consultation typically takes between 45 minutes to an hour, allowing us sufficient time to assess your needs and propose initial strategies."
        }
      },
      {
        "@type": "Question",
        name: "How are legal fees determined?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Legal fees are determined in accordance with the Advocates Remuneration Order, factoring in the complexity, urgency, and specific demands of the matter."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide fee estimates before work begins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, after our initial consultation and assessment, we provide a clear fee structure and estimate before any substantive legal work commences."
        }
      },
      {
        "@type": "Question",
        name: "Are consultation fees separate from legal service fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, initial consultation fees are billed separately. However, if you retain our firm for the matter, we may adjust the overall billing structure depending on our engagement terms."
        }
      },
      {
        "@type": "Question",
        name: "Can fees vary depending on complexity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Highly complex, urgent, or protracted matters may require specialized resources and extended time, which is reflected in the final fee arrangement."
        }
      },
      {
        "@type": "Question",
        name: "Do you advise businesses and companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive corporate advisory services ranging from company formation and corporate governance to mergers, acquisitions, and compliance."
        }
      },
      {
        "@type": "Question",
        name: "Can you help with contracts and compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We draft, review, and negotiate a wide array of commercial contracts and ensure that your business operations comply with all local and national regulatory frameworks."
        }
      },
      {
        "@type": "Question",
        name: "Do you support startups and established companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support businesses at every stage of their lifecycle, offering scalable legal solutions for early-stage startups as well as established corporate entities."
        }
      },
      {
        "@type": "Question",
        name: "Do you handle litigation and arbitration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our team represents clients across all levels of the Kenyan court system as well as in alternative dispute resolution forums like arbitration and mediation."
        }
      },
      {
        "@type": "Question",
        name: "Can you help resolve disputes before going to court?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We strongly advocate for resolving disputes amicably through negotiation, mediation, or arbitration to save time and preserve commercial relationships when possible."
        }
      },
      {
        "@type": "Question",
        name: "What documents should I bring for a dispute matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should bring all contracts, email correspondence, notices, and any previous court documents related to the dispute so we can thoroughly evaluate the merits of your case."
        }
      },
      {
        "@type": "Question",
        name: "Do you handle property transfers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we handle the entire property transfer process for both commercial and residential real estate, ensuring smooth and legally sound transactions."
        }
      },
      {
        "@type": "Question",
        name: "Can you assist with land due diligence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We conduct rigorous due diligence, including official land registry searches and verifying ownership history, to protect you from fraudulent transactions."
        }
      },
      {
        "@type": "Question",
        name: "What documents are needed for conveyancing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically, we require the original title deed, official search certificates, spousal consent (if applicable), land rent/rates clearance certificates, and the parties' identification documents."
        }
      },
      {
        "@type": "Question",
        name: "Do you handle succession and estate planning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we assist clients with drafting wills, setting up family trusts, and navigating complex probate and administration proceedings."
        }
      },
      {
        "@type": "Question",
        name: "Do you assist with family-related legal matters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide sensitive and professional legal support for family disputes, including matrimonial causes, child custody, and maintenance matters."
        }
      },
      {
        "@type": "Question",
        name: "Can consultations be confidential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolute confidentiality is the cornerstone of our practice. All information shared during our consultations is strictly protected by advocate-client privilege."
        }
      },
      {
        "@type": "Question",
        name: "Do you advise employers and employees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide balanced and practical employment law advisory services to both corporate employers and individual employees."
        }
      },
      {
        "@type": "Question",
        name: "Can you review employment contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We draft and review employment contracts, HR manuals, and non-disclosure agreements to ensure compliance with the Employment Act and best practices."
        }
      },
      {
        "@type": "Question",
        name: "Do you handle workplace disputes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We represent clients in disputes involving unfair termination, redundancies, workplace injuries, and claims before the Employment and Labour Relations Court."
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
