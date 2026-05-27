import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogAuthor, blogPosts } from "@/data/blogs";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} - Embed`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function EmbedPublicationPage({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const author = getBlogAuthor(post);
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.mokubasuadvocates.com"}/publications/${post.slug}`;

  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center p-0">
      <div className="w-full h-full bg-white sm:rounded-xl sm:border sm:border-gray-200 overflow-hidden shadow-sm flex flex-col">
        {post.image && (
          <div className="relative h-48 w-full bg-soft-blue flex-shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 680px"
              priority
            />
          </div>
        )}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Malika Okubasu & Company Advocates
            </span>
            {post.date && (
              <span className="text-xs font-medium text-gray-500">
                {post.date}
              </span>
            )}
          </div>

          <h1 className="mb-3 text-xl font-bold leading-tight text-navy sm:text-2xl line-clamp-2 hover:text-gold-text transition-colors">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </h1>

          {post.excerpt && (
            <p className="mb-5 text-sm text-body line-clamp-3">
              {post.excerpt}
            </p>
          )}

          <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
            <div className="flex flex-col">
              {author && (
                <div className="text-sm font-bold text-navy">{author.name}</div>
              )}
              {author?.role && (
                <div className="text-xs text-gray-500">{author.role}</div>
              )}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-gold-text hover:shadow-md active:scale-95"
            >
              Read article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
