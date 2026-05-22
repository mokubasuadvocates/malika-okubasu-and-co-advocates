import type { Metadata } from "next";
import { PracticeAreaDetail } from "../../pages/PracticeAreaDetail";
import { practiceAreas } from "../../../../practiceAreas";

interface PageProps {
  params: {
    slug: string;
  };
}

const practiceAreaSeo: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "dispute-resolution": {
    title:
      "Dispute Resolution Lawyers in Nairobi | Malika Okubasu & Company Advocates",
    description:
      "Malika Okubasu & Company Advocates represents clients in litigation, arbitration, mediation, negotiation, and commercial dispute resolution matters in Nairobi and across Kenya.",
  },
  "corporate-commercial-law": {
    title:
      "Corporate and Commercial Lawyers in Nairobi | Malika Okubasu & Company Advocates",
    description:
      "Corporate and commercial law services in Nairobi, including contracts, company secretarial work, mergers and acquisitions, corporate governance, regulatory compliance, and commercial advisory.",
  },
  "conveyancing-real-estate": {
    title:
      "Conveyancing and Real Estate Lawyers in Nairobi | Malika Okubasu & Company Advocates",
    description:
      "Conveyancing and real estate legal services in Nairobi, including property due diligence, sale agreements, transfers, leases, development advisory, and real estate finance support.",
  },
  "employment-law": {
    title:
      "Employment Lawyers in Nairobi | Malika Okubasu & Company Advocates",
    description:
      "Employment law services for employers and employees in Nairobi, including contracts, HR policies, disciplinary processes, termination, redundancy, and employment disputes.",
  },
  "family-law": {
    title: "Family Lawyers in Nairobi | Malika Okubasu & Company Advocates",
    description:
      "Family law services in Nairobi, including divorce, separation, child custody, maintenance, matrimonial property, adoption, wills, trusts, and succession matters.",
  },
  "legal-consultancy": {
    title: "Legal Consultancy in Nairobi | Malika Okubasu & Company Advocates",
    description:
      "Legal consultancy services in Nairobi, including legal opinions, contract review, regulatory compliance advice, governance support, legal risk assessment, and ongoing advisory retainers.",
  },
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const practiceArea = practiceAreas.find((area) => area.id === params.slug);
  const seo = practiceAreaSeo[params.slug];

  if (!practiceArea) {
    return {
      title: "Practice Area",
      alternates: {
        canonical: `/practice-areas/${params.slug}`,
      },
    };
  }

  const title =
    seo?.title ?? `${practiceArea.title} | Malika Okubasu & Company Advocates`;
  const description =
    seo?.description ??
    `${practiceArea.title} legal services from Malika Okubasu & Company Advocates in Nairobi, Kenya.`;
  const url = `https://mokubasuadvocates.com/practice-areas/${practiceArea.id}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `/practice-areas/${practiceArea.id}`,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Malika Okubasu & Company Advocates",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Page({ params }: PageProps) {
  return <PracticeAreaDetail slug={params.slug} />;
}
