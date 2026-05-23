import { BlogPreviewCard } from "@/components/BlogPreviewCard";
import { Divider } from "@/components/Divider";
import { getPublishedBlogPosts } from "@/data/blogs";

export function Publications() {
  const insights = getPublishedBlogPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80"
            alt="Legal research and publications"
            className="w-full h-full object-cover opacity-30 grayscale"
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

      {/* Insights Feed */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
            {insights.map((insight, index) => (
              <div key={insight.slug}>
                {index > 0 && <Divider className="mb-10 sm:mb-12 lg:mb-16" />}
                <BlogPreviewCard post={insight} priority={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
