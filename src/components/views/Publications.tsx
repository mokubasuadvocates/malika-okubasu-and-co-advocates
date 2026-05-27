"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { BlogPreviewCard } from "@/components/BlogPreviewCard";
import { Divider } from "@/components/Divider";
import { getPublishedBlogPosts, getBlogAuthor } from "@/data/blogs";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GsapReveal } from "@/components/animations/GsapReveal";

const POSTS_PER_PAGE = 9;

export function Publications({ initialPage = 1 }: { initialPage?: number }) {
  const router = useRouter();
  const allInsights = getPublishedBlogPosts();
  const categories = [
    "All",
    ...Array.from(new Set(allInsights.map((p) => p.practiceArea)))
      .filter(Boolean)
      .sort(),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest");

  // Filter and Sort Logic
  const filteredAndSortedInsights = useMemo(() => {
    let results = allInsights;

    // 1. Practice Area Filter
    if (activeCategory !== "All") {
      results = results.filter((p) => p.practiceArea === activeCategory);
    }

    // 2. Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      results = results.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(q);
        const excerptMatch = p.excerpt.toLowerCase().includes(q);
        const practiceAreaMatch = p.practiceArea.toLowerCase().includes(q);
        const author = getBlogAuthor(p);
        const authorMatch = author.name.toLowerCase().includes(q);
        // Note: visible tags not strictly separated in type but we check excerpt/title/practice area
        return titleMatch || excerptMatch || practiceAreaMatch || authorMatch;
      });
    }

    // 3. Sort
    results = [...results].sort((a, b) => {
      const dateA = new Date(a.datePublished).getTime();
      const dateB = new Date(b.datePublished).getTime();
      return sortBy === "latest" ? dateB - dateA : dateA - dateB;
    });

    return results;
  }, [allInsights, activeCategory, searchQuery, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAndSortedInsights.length / POSTS_PER_PAGE)
  );
  const currentPage = Math.min(initialPage, totalPages);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentInsights = filteredAndSortedInsights.slice(startIndex, endIndex);

  const filtersActive =
    activeCategory !== "All" ||
    searchQuery.trim() !== "" ||
    sortBy !== "latest";

  const getResultsCountText = () => {
    const count = filteredAndSortedInsights.length;
    const isSearchActive = searchQuery.trim() !== "";
    const isPracticeAreaActive = activeCategory !== "All";

    const text = `Showing ${count} publication${count === 1 ? "" : "s"}`;

    if (isSearchActive && isPracticeAreaActive) {
      return `${text} matching "${searchQuery.trim()}" in ${activeCategory}`;
    }
    if (isSearchActive) {
      return `${text} matching "${searchQuery.trim()}"`;
    }
    if (isPracticeAreaActive) {
      return `${text} in ${activeCategory}`;
    }
    return text;
  };

  const handleFilterChange = () => {
    if (initialPage !== 1) {
      router.push("/publications");
    }
  };

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setSortBy("latest");
    handleFilterChange();
  };

  const getPageLink = (pageNum: number) => {
    if (pageNum === 1) return "/publications";
    return `/publications/page/${pageNum}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80"
            alt="Legal research and publications"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-6 leading-tight tracking-tight">
              Publications
            </h1>
            <p className="text-lg lg:text-xl text-body leading-relaxed">
              Stay informed with expert analysis, legal updates, and thought
              leadership from our team of experienced lawyers.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Control Bar */}
      <section className="bg-white pt-8 sm:pt-12 lg:pt-16">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
          <div className="rounded-sm border border-brand-border bg-white shadow-sm p-4 sm:p-5 lg:p-6 mb-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-body">
                  <Search className="h-4 w-4" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleFilterChange();
                  }}
                  className="w-full min-h-[48px] rounded-sm border border-brand-border bg-gray-50 py-3 pl-11 pr-4 text-sm font-medium text-navy focus:border-navy focus:bg-white focus:outline-none focus:ring-1 focus:ring-navy transition-colors placeholder:text-gray-500"
                  aria-label="Search publications"
                />
              </div>

              {/* Practice Area Dropdown */}
              <div className="relative lg:w-72">
                <select
                  value={activeCategory}
                  onChange={(e) => {
                    setActiveCategory(e.target.value);
                    handleFilterChange();
                  }}
                  className="w-full min-h-[48px] appearance-none rounded-sm border border-brand-border bg-gray-50 py-3 pl-4 pr-10 text-sm font-medium text-navy focus:border-navy focus:bg-white focus:outline-none focus:ring-1 focus:ring-navy transition-colors"
                  aria-label="Practice Area"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "All" ? "All Practice Areas" : category}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy">
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as "latest" | "oldest");
                    handleFilterChange();
                  }}
                  className="w-full min-h-[48px] appearance-none rounded-sm border border-brand-border bg-gray-50 py-3 pl-4 pr-10 text-sm font-medium text-navy focus:border-navy focus:bg-white focus:outline-none focus:ring-1 focus:ring-navy transition-colors"
                  aria-label="Sort publications"
                >
                  <option value="latest">Latest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy">
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Results Count & Clear Filters Row */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-100">
              <div
                className="text-sm text-body font-medium leading-snug break-words max-w-full"
                aria-live="polite"
              >
                {filteredAndSortedInsights.length === 0 ? (
                  "Showing 0 publications"
                ) : (
                  <span>{getResultsCountText()}</span>
                )}
              </div>

              {filtersActive && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-1 py-0.5"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Feed */}
      <section className="bg-white pb-12 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
          {currentInsights.length > 0 ? (
            <GsapReveal
              staggerChildren
              mobileMode="fade"
              className="flex flex-col gap-10 sm:gap-12 lg:gap-16"
            >
              {currentInsights.map((insight, index) => (
                <div key={insight.slug}>
                  {index > 0 && <Divider className="mb-10 sm:mb-12 lg:mb-16" />}
                  <BlogPreviewCard
                    post={insight}
                    priority={
                      index === 0 && !filtersActive && currentPage === 1
                    }
                  />
                </div>
              ))}
            </GsapReveal>
          ) : (
            <div className="rounded-sm border border-brand-border bg-gray-50 py-16 px-6 text-center shadow-sm">
              <h3 className="text-[1.125rem] font-bold text-navy mb-3">
                The publication you are looking for is not available under the
                selected filters.
              </h3>
              <p className="text-body mb-8">
                Try adjusting your search term, selecting another practice area,
                or clearing your filters.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-navy px-8 py-3 font-semibold text-white transition-all hover:bg-gold-text hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination UI */}
          {totalPages > 1 && (
            <nav
              className="mt-16 flex items-center justify-between border-t border-brand-border px-4 py-6 sm:px-0"
              aria-label="Publications pagination"
            >
              <div className="flex w-0 flex-1">
                {currentPage > 1 ? (
                  <Link
                    href={getPageLink(currentPage - 1)}
                    className="inline-flex items-center gap-2 rounded-sm pr-1 pt-4 text-sm font-medium text-body hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    Previous
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 pr-1 pt-4 text-sm font-medium text-body opacity-50 cursor-not-allowed">
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    Previous
                  </span>
                )}
              </div>

              {/* Mobile Pagination Info */}
              <div className="md:hidden">
                <span className="pt-4 text-sm font-medium text-body">
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              {/* Desktop Page Numbers */}
              <div className="hidden md:flex">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <Link
                      key={pageNum}
                      href={getPageLink(pageNum)}
                      aria-current={
                        pageNum === currentPage ? "page" : undefined
                      }
                      className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                        pageNum === currentPage
                          ? "border-navy text-navy"
                          : "border-transparent text-body hover:border-brand-border hover:text-navy"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  )
                )}
              </div>

              <div className="flex w-0 flex-1 justify-end">
                {currentPage < totalPages ? (
                  <Link
                    href={getPageLink(currentPage + 1)}
                    className="inline-flex items-center gap-2 rounded-sm pl-1 pt-4 text-sm font-medium text-body hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    Next
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 pl-1 pt-4 text-sm font-medium text-body opacity-50 cursor-not-allowed">
                    Next
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </div>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}
