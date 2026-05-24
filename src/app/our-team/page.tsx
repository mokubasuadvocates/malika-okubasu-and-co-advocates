import { Team } from "@/components/views/Team";
import { SITE_NAME, absoluteUrl } from "@/constants/seo";

const description =
  "Meet the advocates and legal professionals at Malika Okubasu & Company Advocates.";
const url = absoluteUrl("/our-team");

export const metadata = {
  title: "Our Team",
  description,
  alternates: {
    canonical: "/our-team",
  },
  openGraph: {
    title: `Our Team | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Team | ${SITE_NAME}`,
    description,
  },
};

export default function Page() {
  return <Team />;
}
