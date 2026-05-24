import { Publications } from "@/components/views/Publications";
import { SITE_NAME, absoluteUrl } from "@/constants/seo";

const description =
  "Read legal updates, insights, and publications from Malika Okubasu & Company Advocates.";
const url = absoluteUrl("/publications");

export const metadata = {
  title: "Publications",
  description,
  alternates: {
    canonical: "/publications",
  },
  openGraph: {
    title: `Publications | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Publications | ${SITE_NAME}`,
    description,
  },
};

export default function Page() {
  return <Publications />;
}
