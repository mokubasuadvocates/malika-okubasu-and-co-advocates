import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Divider } from '../components/Divider';

export function PracticeAreas() {
  const practiceAreas = [
    {
      slug: 'corporate-commercial',
      title: 'Corporate And Commercial',
      description: 'Strategic legal counsel for business transactions, mergers, acquisitions, and corporate governance.',
    },
    {
      slug: 'dispute-resolution',
      title: 'Dispute Resolution',
      description: 'Expert representation in litigation, arbitration, and alternative dispute resolution mechanisms.',
    },
    {
      slug: 'media-technology-ip',
      title: 'Media, Technology & Intellectual Property',
      description: 'Protection and enforcement of intellectual property rights, technology transactions, and media law.',
    },
    {
      slug: 'energy-natural-resources',
      title: 'Energy, Natural Resources Climate Change',
      description: 'Regulatory compliance, project development, and sustainability in the energy and resources sectors.',
    },
    {
      slug: 'real-estate-banking-finance',
      title: 'Real Estate, Banking & Finance',
      description: 'Comprehensive legal services for property transactions, banking operations, and financial regulations.',
    },
    {
      slug: 'family-law',
      title: 'Family Law',
      description: 'Sensitive and practical guidance on matrimonial matters, succession, and family disputes.',
    },
    {
      slug: 'policy-legislative-drafting',
      title: 'Policy & Legislative Drafting',
      description: 'Expert drafting of legislation, policy frameworks, and regulatory instruments.',
    },
    {
      slug: 'regional-integration',
      title: 'Regional Integration',
      description: 'Cross-border transactions, regional trade law, and East African Community regulations.',
    },
    {
      slug: 'employment-labour',
      title: 'Employment & Labour Relations',
      description: 'Employment contracts, workplace disputes, and compliance with labour legislation.',
    },
  ];
  
  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
            alt="Professional workspace"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Practice Areas
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              We provide comprehensive legal services across nine specialized practice areas, combining deep expertise with practical insight to deliver effective solutions for our clients.
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
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group block py-8 lg:py-10 px-0 lg:px-8 hover:bg-[#F2F4F7] transition-colors border-b border-[#D7DEE7] last:border-b-0 lg:border-r lg:last:border-r-0 lg:odd:border-r lg:even:border-r-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl lg:text-2xl font-bold text-[#0B1E3A] mb-3 group-hover:underline underline-offset-4">
                      {area.title}
                    </h2>
                    <p className="text-[#5B6676] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#0B1E3A] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
