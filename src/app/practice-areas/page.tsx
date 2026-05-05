import { PracticeAreas } from "../pages/PracticeAreas";

export const metadata = {
  title: "Practice Areas | Malika Okubasu & Company Advocates",
  description:
    "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate law, dispute resolution, conveyancing, employment law, family law, and legal advisory.",
  alternates: {
    canonical: "https://mokubasuadvocates.com/practice-areas",
  },
  openGraph: {
    title: "Practice Areas | Malika Okubasu & Company Advocates",
    description:
      "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate law, dispute resolution, conveyancing, employment law, family law, and legal advisory.",
    url: "https://mokubasuadvocates.com/practice-areas",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas | Malika Okubasu & Company Advocates",
    description:
      "Explore the legal services offered by Malika Okubasu & Company Advocates, including corporate law, dispute resolution, conveyancing, employment law, family law, and legal advisory.",
  },
};

export default function Page() {
  return <PracticeAreas />;
}
