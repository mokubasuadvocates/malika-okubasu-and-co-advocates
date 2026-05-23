import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Divider } from "../components/Divider";
import { practiceAreas } from "../../../practiceAreas";

export function PracticeAreas() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative border-b border-brand-border bg-soft-blue py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
            alt="Professional workspace"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="gold-accent-line text-4xl lg:text-6xl font-bold text-heading mb-8 leading-tight tracking-tight">
              Practice Areas
            </h1>
            <p className="text-lg lg:text-xl text-body leading-relaxed">
              We provide comprehensive legal services across specialized
              practice areas, combining deep expertise with practical insight to
              deliver effective solutions for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {practiceAreas.map((area, index) => (
              <Link
                key={area.id}
                href={`/practice-areas/${area.id}`}
                className="premium-card group relative block overflow-hidden rounded-lg bg-white p-6 lg:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gold" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl lg:text-2xl font-bold text-heading mb-3 transition-colors group-hover:text-gold">
                      {area.title}
                    </h2>
                    <p className="text-body leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gold flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
