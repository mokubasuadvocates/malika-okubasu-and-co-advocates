import { Publications } from "@/components/views/Publications";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/constants/seo";
import JsonLd from "@/components/JsonLd";

const description =
  "Read legal updates, insights, and publications from Malika Okubasu & Company Advocates.";
const url = absoluteUrl("/publications");

export const revalidate = 86400; // 24 hours

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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Publications",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Publications />
    </>
  );
}
