import { PracticeAreas } from "@/components/views/PracticeAreas";

export const metadata = {
  title: "Practice Areas",
  description:
    "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate and commercial law, dispute resolution, technology and intellectual property, real estate, employment, policy, cross-border advisory, and succession planning.",
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: "Practice Areas | Malika Okubasu & Company Advocates",
    description:
      "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate and commercial law, dispute resolution, technology and intellectual property, real estate, employment, policy, cross-border advisory, and succession planning.",
    url: "https://mokubasuadvocates.com/practice-areas",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas | Malika Okubasu & Company Advocates",
    description:
      "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate and commercial law, dispute resolution, technology and intellectual property, real estate, employment, policy, cross-border advisory, and succession planning.",
  },
};

export default function Page() {
  return <PracticeAreas />;
}
