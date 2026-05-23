import type { Metadata } from "next";
import { PracticeAreaDetail } from "@/components/views/PracticeAreaDetail";
import { practiceAreas } from "@/constants/practiceAreas";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const practiceArea = practiceAreas.find((area) => area.id === params.slug);

  if (!practiceArea) {
    return {
      title: "Practice Area",
      alternates: {
        canonical: `/practice-areas/${params.slug}`,
      },
    };
  }

  const title =
    practiceArea.metaTitle ??
    `${practiceArea.title} | Malika Okubasu & Company Advocates`;
  const description =
    practiceArea.metaDescription ??
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
