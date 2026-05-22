import { PracticeAreas } from "../pages/PracticeAreas";

export const metadata = {
  title: "Practice Areas",
  description:
    "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate law, dispute resolution, conveyancing, employment law, family law, and legal consultancy.",
  alternates: {
    canonical: "/practice-areas",
  },
  openGraph: {
    title: "Practice Areas | Malika Okubasu & Company Advocates",
    description:
      "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate law, dispute resolution, conveyancing, employment law, family law, and legal consultancy.",
    url: "https://mokubasuadvocates.com/practice-areas",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas | Malika Okubasu & Company Advocates",
    description:
      "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate law, dispute resolution, conveyancing, employment law, family law, and legal consultancy.",
  },
};

export default function Page() {
  return <PracticeAreas />;
}
