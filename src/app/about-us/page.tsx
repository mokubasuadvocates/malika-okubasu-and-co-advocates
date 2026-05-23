import { About } from "@/components/views/About";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Malika Okubasu & Company Advocates, a Nairobi-based law firm providing practical legal advice and representation to individuals, businesses, and institutions.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Malika Okubasu & Company Advocates",
    description:
      "Learn about Malika Okubasu & Company Advocates, a Nairobi-based law firm providing practical legal advice and representation to individuals, businesses, and institutions.",
    url: "https://mokubasuadvocates.com/about-us",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Malika Okubasu & Company Advocates",
    description:
      "Learn about Malika Okubasu & Company Advocates, a Nairobi-based law firm providing practical legal advice and representation to individuals, businesses, and institutions.",
  },
};

export default function Page() {
  return <About />;
}
