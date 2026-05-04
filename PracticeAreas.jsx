import React from "react";
import { practiceAreas } from "../data/practiceAreas";
import PracticeAreaCard from "./PracticeAreaCard";

export default function PracticeAreas() {
  return (
    <section
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="practice-areas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="practice-areas-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Practice Areas
          </h2>
          <p className="text-lg text-gray-600">
            Delivering excellence across a comprehensive range of legal and
            advisory services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
