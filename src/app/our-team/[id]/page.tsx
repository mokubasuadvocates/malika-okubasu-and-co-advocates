import type { Metadata } from "next";
import { TeamProfile } from "@/components/views/TeamProfile";
import { SITE_NAME, absoluteUrl } from "@/constants/seo";

const teamProfiles = [
  {
    id: "brenton-okubasu",
    name: "Brenton Okubasu",
    role: "Founding Partner",
  },
  {
    id: "oduor-khamati",
    name: "Oduor Khamati",
    role: "Managing Partner",
  },
  {
    id: "susan-anyango",
    name: "Susan Anyango",
    role: "Advocate of the High Court of Kenya",
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return teamProfiles.map((profile) => ({ id: profile.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const profile = teamProfiles.find((member) => member.id === params.id);

  if (!profile) {
    return {
      title: "Our Team",
      alternates: {
        canonical: `/our-team/${params.id}`,
      },
    };
  }

  return {
    title: `${profile.name} | Our Team`,
    description: `${profile.name}, ${profile.role} at ${SITE_NAME} in Nairobi, Kenya.`,
    alternates: {
      canonical: `/our-team/${profile.id}`,
    },
    openGraph: {
      title: `${profile.name} | ${SITE_NAME}`,
      description: `${profile.name}, ${profile.role} at ${SITE_NAME} in Nairobi, Kenya.`,
      url: absoluteUrl(`/our-team/${profile.id}`),
      siteName: SITE_NAME,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} | ${SITE_NAME}`,
      description: `${profile.name}, ${profile.role} at ${SITE_NAME} in Nairobi, Kenya.`,
    },
  };
}

export default function Page({ params }: PageProps) {
  return <TeamProfile id={params.id} />;
}
