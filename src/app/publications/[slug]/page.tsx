import { BlogDetail } from "@/components/views/BlogDetail";
import { blogPosts, getBlogAuthor, getBlogPost } from "@/data/blogs";
import type { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Publication Not Found",
    };
  }

  const author = getBlogAuthor(post);
  const url = `/publications/${post.slug}`;

  return {
    title: {
      absolute: post.seoTitle,
    },
    description: post.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url,
      siteName: "Malika Okubasu & Company Advocates",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [author.name],
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
  };
}

export default function Page({ params }: PageProps) {
  return <BlogDetail slug={params.slug} />;
}
