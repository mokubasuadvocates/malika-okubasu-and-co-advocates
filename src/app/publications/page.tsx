import { Publications } from "../pages/Publications";

export const metadata = {
  title: "Publications",
  description:
    "Read legal updates, insights, and publications from Malika Okubasu & Company Advocates.",
  alternates: {
    canonical: "/publications",
  },
  openGraph: {
    title: "Publications | Malika Okubasu & Company Advocates",
    description:
      "Read legal updates, insights, and publications from Malika Okubasu & Company Advocates.",
    url: "https://mokubasuadvocates.com/publications",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications | Malika Okubasu & Company Advocates",
    description:
      "Read legal updates, insights, and publications from Malika Okubasu & Company Advocates.",
  },
};

export default function Page() {
  return <Publications />;
}
