import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Divider } from "../components/Divider";
import { practiceAreas } from "../../../practiceAreas";

export function PracticeAreas() {
  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
            alt="Professional workspace"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-6 leading-tight tracking-tight">
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
          <div className="grid lg:grid-cols-2 gap-0">
            {practiceAreas.map((area, index) => (
              <Link
                key={area.id}
                href={`/practice-areas/${area.id}`}
                className="group block py-8 lg:py-10 px-0 lg:px-8 hover:bg-soft-blue transition-colors border-b border-brand-border last:border-b-0 lg:border-r lg:last:border-r-0 lg:odd:border-r lg:even:border-r-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl lg:text-2xl font-bold text-heading mb-3 group-hover:underline underline-offset-4">
                      {area.title}
                    </h2>
                    <p className="text-body leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-heading flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
