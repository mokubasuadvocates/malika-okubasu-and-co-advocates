import { Contact } from "@/components/views/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Contact Malika Okubasu & Company Advocates in Nairobi for legal consultations and inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Malika Okubasu & Company Advocates",
    description:
      "Contact Malika Okubasu & Company Advocates in Nairobi for legal consultations and inquiries.",
    url: "https://mokubasuadvocates.com/contact",
    siteName: "Malika Okubasu & Company Advocates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Malika Okubasu & Company Advocates",
    description:
      "Contact Malika Okubasu & Company Advocates in Nairobi for legal consultations and inquiries.",
  },
};

export default function Page() {
  return <Contact />;
}
