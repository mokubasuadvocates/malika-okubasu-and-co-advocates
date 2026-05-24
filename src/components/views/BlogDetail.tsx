import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Fragment } from "react";
import { ArticleShareAction } from "@/components/ArticleShareAction";
import { Divider } from "@/components/Divider";
import JsonLd from "@/components/JsonLd";
import { ReadingProgress } from "@/components/ReadingProgress";
import { LOGO_URL, SITE_NAME, SITE_URL, absoluteUrl } from "@/constants/seo";
import {
  getBlogAuthor,
  getBlogPost,
  getDisplayPracticeArea,
} from "@/data/blogs";

export function BlogDetail({ slug }: { slug?: string }) {
  const post = slug ? getBlogPost(slug) : null;

  if (!post) {
    notFound();
  }

  const author = getBlogAuthor(post);
  const displayPracticeArea = getDisplayPracticeArea(post);
  const articleUrl = absoluteUrl(`/publications/${post.slug}`);
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
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
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
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Publications",
          item: absoluteUrl("/publications"),
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
      <ReadingProgress />
      <JsonLd data={jsonLd} />

      {/* Back Button */}
      <section className="border-b border-brand-border bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-[760px] px-5 sm:px-6 lg:px-0">
          <Link
            href="/publications"
            className="group inline-flex min-h-10 items-center gap-2 rounded-sm text-sm text-body transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <ArrowLeft className="w-4 h-4 motion-safe:group-hover:-translate-x-1 transition-transform" />
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
              className="object-cover"
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
            {author.profileUrl ? (
              <Link
                href={author.profileUrl}
                aria-label={`View ${author.name} profile`}
                className="group flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Image
                  src={author.image}
                  alt=""
                  width={48}
                  height={48}
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover transition-all duration-500 group-hover:grayscale sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-heading transition-colors group-hover:text-link">
                    {author.name}
                  </div>
                  <div className="text-sm text-body">{author.role}</div>
                </div>
              </Link>
            ) : (
              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src={author.image}
                  alt=""
                  width={48}
                  height={48}
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-heading">{author.name}</div>
                  <div className="text-sm text-body">{author.role}</div>
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-body sm:justify-end">
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-7">
            {(() => {
              const contentBlocks: import("@/data/blogs").BlogContentBlock[] = [];
              const extractedReferences: { id: number; title: string; url?: string }[] = [];
              let inReferencesSection = false;

              post.content.forEach((block) => {
                if (
                  block.type === "heading" &&
                  (block.text.toLowerCase() === "references" ||
                    block.text.toLowerCase() === "reference" ||
                    block.text.toLowerCase() === "authorities")
                ) {
                  inReferencesSection = true;
                  return;
                }

                if (inReferencesSection) {
                  if (block.type === "paragraph") {
                    const match = block.text.match(/^\[(\d+)\]\s(.*)/);
                    if (match) {
                      extractedReferences.push({ id: parseInt(match[1]), title: match[2] });
                    } else {
                      extractedReferences.push({ id: extractedReferences.length + 1, title: block.text });
                    }
                  } else if (block.type === "list") {
                    block.items.forEach((item) => {
                      const match = item.match(/^\[(\d+)\]\s(.*)/);
                      if (match) {
                        extractedReferences.push({ id: parseInt(match[1]), title: match[2] });
                      } else {
                        extractedReferences.push({ id: extractedReferences.length + 1, title: item });
                      }
                    });
                  }
                  return;
                }

                if (block.type === "paragraph") {
                  const match = block.text.match(/^\[(\d+)\]\s(.*)/);
                  if (match) {
                    inReferencesSection = true;
                    extractedReferences.push({ id: parseInt(match[1]), title: match[2] });
                    return;
                  }
                }

                contentBlocks.push(block);
              });

              const finalReferences = [...(post.references || []), ...extractedReferences];
              const uniqueReferences = finalReferences.filter(
                (ref, index, self) => index === self.findIndex((t) => t.id === ref.id)
              );

              return (
                <>
                  {contentBlocks.map((block, index) => {
              const renderTextWithCitationsAndLinks = (text: string) => {
                const parts = text.split(/(\[\d+\])/g);
                return parts.map((part, i) => {
                  const match = part.match(/\[(\d+)\]/);
                  if (match) {
                    const num = match[1];
                    return (
                      <sup key={`cite-${i}`} className="article-citation">
                        <a href={`#ref-${num}`} id={`cite-${num}`} aria-label={`Reference ${num}`}>
                          <em>({num})</em>
                        </a>
                      </sup>
                    );
                  }
                  
                  const urlParts = part.split(/(https?:\/\/[^\s]+)/g);
                  return urlParts.map((uPart, j) => {
                    if (uPart.match(/^https?:\/\/[^\s]+$/)) {
                      // Remove trailing punctuation like commas or periods from the URL if any
                      const cleanUrl = uPart.replace(/[.,;:]$/, '');
                      const punctuation = uPart.slice(cleanUrl.length);
                      
                      return (
                        <Fragment key={`url-frag-${i}-${j}`}>
                          <a
                            href={cleanUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link underline underline-offset-4 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold break-words"
                          >
                            {cleanUrl}
                          </a>
                          {punctuation}
                        </Fragment>
                      );
                    }
                    return <Fragment key={`text-${i}-${j}`}>{uPart}</Fragment>;
                  });
                });
              };

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
                          ? "break-words text-xl font-bold leading-tight text-navy sm:text-2xl font-serif-editorial"
                          : "break-words text-2xl font-bold leading-tight text-navy sm:text-3xl font-serif-editorial"
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
                      <li key={item}>{renderTextWithCitationsAndLinks(item)}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={index}
                  className="break-words text-base leading-[1.8] text-body sm:text-[1.0625rem] lg:text-lg"
                >
                  {renderTextWithCitationsAndLinks(block.text)}
                </p>
                  );
                })}

                {/* References */}
                {uniqueReferences.length > 0 && (
                  <section className="mt-10 sm:mt-12 article-references" aria-labelledby="references-heading">
                    <Divider className="mb-7 sm:mb-9" />
                    <h2 id="references-heading" className="mb-6 text-2xl font-bold leading-tight text-navy sm:text-3xl font-serif-editorial">
                      {uniqueReferences.length === 1 ? "Reference" : "References"}
                    </h2>
                    <ol className="article-references-list list-decimal space-y-3 pl-5 text-sm leading-[1.6] text-body sm:text-[0.9375rem] marker:text-body marker:font-normal">
                      {uniqueReferences.map((ref) => (
                        <li key={ref.id} id={`ref-${ref.id}`} className="pl-2">
                          {ref.url ? (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-colors hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                            >
                              {ref.title}
                            </a>
                          ) : (
                            <span>{ref.title}</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
              </>
              );
            })()}
          </div>

          {/* Disclaimer */}
          <div className="mt-14 sm:mt-16 rounded-sm bg-gray-50 p-5 text-sm leading-relaxed text-body sm:p-6 border-l-4 border-gold">
            <p>
              <strong>Disclaimer:</strong> This publication is for general information only and does not constitute legal advice. Specific advice should be sought for individual circumstances.
            </p>
          </div>

          <ArticleShareAction 
            title={post.title} 
            excerpt={post.excerpt} 
            url={articleUrl} 
            image={post.image}
            practiceArea={post.practiceArea || post.practiceAreas?.[0]}
            authorName={author.name}
            authorRole={author.role}
            slug={post.slug}
            date={post.date}
          />

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
