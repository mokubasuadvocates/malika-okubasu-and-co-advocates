"use client";

import Image from "next/image";
import { useState } from "react";
import { BlogPreviewCard } from "@/components/BlogPreviewCard";
import { Divider } from "@/components/Divider";
import { getPublishedBlogPosts } from "@/data/blogs";

export function Publications() {
  const allInsights = getPublishedBlogPosts();
  const categories = [
    "All",
    ...Array.from(new Set(allInsights.map((p) => p.practiceArea))).filter(Boolean).sort(),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights =
    activeCategory === "All"
      ? allInsights
      : allInsights.filter((p) => p.practiceArea === activeCategory);

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

      {/* Filter Toolbar */}
      <section className="bg-white pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                  activeCategory === category
                    ? "bg-navy text-white shadow-md"
                    : "bg-soft-blue text-heading hover:bg-gold hover:text-white"
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Feed */}
      <section className="bg-white pb-12 pt-8 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
          {filteredInsights.length > 0 ? (
            <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
              {filteredInsights.map((insight, index) => (
                <div key={insight.slug}>
                  {index > 0 && <Divider className="mb-10 sm:mb-12 lg:mb-16" />}
                  <BlogPreviewCard post={insight} priority={index === 0 && activeCategory === "All"} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-body text-lg">
              No publications found for this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
