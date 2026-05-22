import type { Metadata } from "next";
import { TeamProfile } from "../../pages/TeamProfile";

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
    description: `${profile.name}, ${profile.role} at Malika Okubasu & Company Advocates in Nairobi, Kenya.`,
    alternates: {
      canonical: `/our-team/${profile.id}`,
    },
    openGraph: {
      title: `${profile.name} | Malika Okubasu & Company Advocates`,
      description: `${profile.name}, ${profile.role} at Malika Okubasu & Company Advocates in Nairobi, Kenya.`,
      url: `https://mokubasuadvocates.com/our-team/${profile.id}`,
      siteName: "Malika Okubasu & Company Advocates",
      type: "profile",
    },
  };
}

export default function Page({ params }: PageProps) {
  return <TeamProfile id={params.id} />;
}
