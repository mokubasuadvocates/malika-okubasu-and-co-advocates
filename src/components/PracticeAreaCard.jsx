import React from "react";

export default function PracticeAreaCard({ area }) {
  return (
    <article
      id={area.id}
      className="flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
          {area.title}
        </h3>

        {area.description && (
          <p className="text-gray-700 leading-relaxed mb-3">
            {area.description}
          </p>
        )}

        {area.details && (
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {area.details}
          </p>
        )}
      </div>

      <div className="mt-auto">
        {area.services && area.services.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
              Key Services
            </h4>
            <ul className="space-y-2">
              {area.services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm text-gray-700"
                >
                  <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {area.sectorExpertise && area.sectorExpertise.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
              Sector Expertise
            </h4>
            <p className="text-sm text-gray-700">{area.sectorExpertise}</p>
          </div>
        )}
      </div>
    </article>
  );
}
