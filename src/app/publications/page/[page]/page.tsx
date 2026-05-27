import { Publications } from "@/components/views/Publications";
import { SITE_NAME, absoluteUrl } from "@/constants/seo";
import { getPublishedBlogPosts } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const POSTS_PER_PAGE = 9;

type Props = {
  params: { page: string };
};

export function generateStaticParams() {
  const posts = getPublishedBlogPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // We don't generate page 1 because that is handled by /publications
  const paths = [];
  for (let i = 2; i <= totalPages; i++) {
    paths.push({ page: i.toString() });
  }

  return paths;
}

export function generateMetadata({ params }: Props): Metadata {
  const page = parseInt(params.page, 10);

  if (isNaN(page) || page < 2) {
    return {};
  }

  const description =
    "Explore more legal insights and updates from Malika Okubasu & Company Advocates across our practice areas.";
  const url = absoluteUrl(`/publications/page/${page}`);
  const title = `Publications - Page ${page}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/publications/page/${page}`,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export default function PaginatedPublications({ params }: Props) {
  const pageNum = parseInt(params.page, 10);
  const posts = getPublishedBlogPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) {
    notFound();
  }

  return <Publications initialPage={pageNum} />;
}
