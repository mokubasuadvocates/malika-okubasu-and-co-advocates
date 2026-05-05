import { Contact } from "../pages/Contact";

export const metadata = {
  title: "Contact Us | Malika Okubasu & Company Advocates",
  description:
    "Contact Malika Okubasu & Company Advocates in Nairobi for legal consultations and inquiries.",
  alternates: {
    canonical: "https://mokubasuadvocates.com/contact",
  },
  openGraph: {
    title: "Contact Us | Malika Okubasu & Company Advocates",
    description:
      "Contact Malika Okubasu & Company Advocates in Nairobi for legal consultations and inquiries.",
    url: "https://mokubasuadvocates.com/contact",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Malika Okubasu & Company Advocates",
    description:
      "Contact Malika Okubasu & Company Advocates in Nairobi for legal consultations and inquiries.",
  },
};

export default function Page() {
  return <Contact />;
}
