import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Divider } from "@/components/Divider";
import JsonLd from "@/components/JsonLd";
import {
  getBlogAuthor,
  getBlogPost,
  getDisplayPracticeArea,
} from "@/data/blogs";

const siteUrl = "https://mokubasuadvocates.com";

const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteUrl}${path}`;

export function BlogDetail({ slug }: { slug?: string }) {
  const post = slug ? getBlogPost(slug) : null;

  if (!post) {
    notFound();
  }

  const author = getBlogAuthor(post);
  const displayPracticeArea = getDisplayPracticeArea(post);
  const articleUrl = `${siteUrl}/publications/${post.slug}`;
  const articleImage = absoluteUrl(post.image);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription,
      image: articleImage,
      author: {
        "@type": "Person",
        name: author.name,
        url: absoluteUrl(author.profileUrl),
      },
      publisher: {
        "@type": "Organization",
        name: "Malika Okubasu & Company Advocates",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/icon-192x192.png`,
        },
      },
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      mainEntityOfPage: articleUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Publications",
          item: `${siteUrl}/publications`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: articleUrl,
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <JsonLd data={jsonLd} />

      {/* Back Button */}
      <section className="border-b border-brand-border bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-[760px] px-5 sm:px-6 lg:px-0">
          <Link
            href="/publications"
            className="group inline-flex min-h-10 items-center gap-2 rounded-sm text-sm text-body transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Publications</span>
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-soft-blue sm:aspect-[16/10] lg:aspect-[16/7]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 1120px) 1120px, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[760px] px-5 sm:px-6 lg:px-0">
          {/* Practice Area Label */}
          <div className="mb-4 sm:mb-5">
            <span className="inline-block max-w-full text-[0.72rem] font-bold uppercase leading-relaxed tracking-[0.14em] text-heading">
              {displayPracticeArea}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 max-w-full break-words text-[2rem] font-bold leading-[1.08] text-heading sm:text-[2.5rem] lg:text-[3.25rem] font-serif-editorial">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="mb-10 flex flex-col gap-4 border-y border-brand-border py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src={author.image}
                alt={author.name}
                width={48}
                height={48}
                className="h-11 w-11 flex-shrink-0 rounded-full object-cover grayscale sm:h-12 sm:w-12"
              />
              <div className="min-w-0">
                <Link
                  href={author.profileUrl}
                  className="text-sm font-bold text-heading transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {author.name}
                </Link>
                <div className="text-sm text-body">{author.role}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-body sm:justify-end">
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-7">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                const HeadingTag = block.level === 3 ? "h3" : "h2";

                return (
                  <div key={index}>
                    {block.level === 2 && index > 0 && (
                      <Divider className="mb-7 sm:mb-9" />
                    )}
                    <HeadingTag
                      className={
                        block.level === 3
                          ? "break-words text-xl font-bold leading-tight text-heading sm:text-2xl font-serif-editorial"
                          : "break-words text-2xl font-bold leading-tight text-heading sm:text-3xl font-serif-editorial"
                      }
                    >
                      {block.text}
                    </HeadingTag>
                  </div>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={index}
                    className="list-disc space-y-3 break-words pl-6 text-base leading-[1.8] text-body sm:text-[1.0625rem] lg:text-lg"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={index}
                  className="break-words text-base leading-[1.8] text-body sm:text-[1.0625rem] lg:text-lg"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-14 rounded-sm border border-brand-border border-l-4 border-l-brand-blue bg-soft-blue p-5 sm:mt-16 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src={author.image}
                alt={author.name}
                width={64}
                height={64}
                className="h-14 w-14 flex-shrink-0 rounded-full object-cover grayscale sm:h-16 sm:w-16"
              />
              <div className="min-w-0">
                <Link
                  href={author.profileUrl}
                  className="mb-1 inline-block text-lg font-bold text-heading transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {author.name}
                </Link>
                <div className="text-sm text-body mb-3">{author.role}</div>
                <p className="text-sm leading-[1.75] text-body">{author.bio}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-sm bg-soft-blue px-5 py-8 text-center sm:mt-16 sm:px-8 sm:py-10">
            <p className="mb-6 text-lg font-semibold text-heading">
              Need expert legal guidance on this topic?
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-navy px-8 py-4 font-semibold text-white transition-all motion-safe:hover:-translate-y-0.5 hover:bg-gold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:w-auto"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
