import { Team } from "@/components/views/Team";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the advocates and legal professionals at Malika Okubasu & Company Advocates.",
  alternates: {
    canonical: "/our-team",
  },
  openGraph: {
    title: "Our Team | Malika Okubasu & Company Advocates",
    description:
      "Meet the advocates and legal professionals at Malika Okubasu & Company Advocates.",
    url: "https://mokubasuadvocates.com/our-team",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Malika Okubasu & Company Advocates",
    description:
      "Meet the advocates and legal professionals at Malika Okubasu & Company Advocates.",
  },
};

export default function Page() {
  return <Team />;
}
