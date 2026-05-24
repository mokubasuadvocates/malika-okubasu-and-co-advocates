import { PracticeAreas } from "@/components/views/PracticeAreas";
import { SITE_NAME, absoluteUrl } from "@/constants/seo";

const description =
  "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate and commercial law, dispute resolution, technology and intellectual property, real estate, employment, policy, cross-border advisory, and succession planning.";
const url = absoluteUrl("/practice-areas");

export const metadata = {
  title: "Practice Areas",
  description,
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: `Practice Areas | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Practice Areas | ${SITE_NAME}`,
    description,
  },
};

export default function Page() {
  return <PracticeAreas />;
}
