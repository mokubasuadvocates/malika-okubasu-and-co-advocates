import { Home } from "./pages/Home";

export const metadata = {
  title: "Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya",
  description:
    "Malika Okubasu & Company Advocates is a Nairobi-based law firm offering legal services in corporate law, dispute resolution, conveyancing, employment law, family law, and legal advisory.",
  alternates: {
    canonical: "https://mokubasuadvocates.com/",
  },
  openGraph: {
    title: "Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya",
    description:
      "Malika Okubasu & Company Advocates is a Nairobi-based law firm offering legal services in corporate law, dispute resolution, conveyancing, employment law, family law, and legal advisory.",
    url: "https://mokubasuadvocates.com",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malika Okubasu & Company Advocates | Law Firm in Nairobi, Kenya",
    description:
      "Malika Okubasu & Company Advocates is a Nairobi-based law firm offering legal services in corporate law, dispute resolution, conveyancing, employment law, family law, and legal advisory.",
  },
};

export default function Page() {
  return <Home />;
}
