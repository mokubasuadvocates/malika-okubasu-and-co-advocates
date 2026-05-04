import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "../components/Button";
import { practiceAreas } from "../../../practiceAreas";

interface PracticeAreaDetailProps {
  slug?: string;
}

export function PracticeAreaDetail({ slug }: PracticeAreaDetailProps) {
  // If no slug provided, this is an error
  if (!slug) {
    return null;
  }

  // Find the practice area based on the slug
  const practiceArea = practiceAreas.find((area) => area.id === slug);

  // If practice area not found, return null (will trigger 404)
  if (!practiceArea) {
    return null;
  }

  const teamContacts = [
    {
      name: "Brenton Okubasu",
      role: "Founder and Consulting Partner",
      location: "Nairobi, Kenya",
      email: "legal@mokubasuadvocates.com",
      phone: "+254 721 789 389 / +254 141 397 048",
      image: "/images/team-members/brenton-okubasu.jpeg",
    },
    {
      name: "Oduor Khamati",
      role: "Managing Partner",
      location: "Nairobi, Kenya",
      email: "oduor.khamati@mokubasuadvocates.com",
      phone: "+254 717 259 196 / +254 141 397 048",
      image: "/images/team-members/oduor-khamati.jpeg",
    },
    {
      name: "Susan Anyango",
      role: "Advocate of the High Court of Kenya",
      location: "Nairobi, Kenya",
      email: "susan.anyango@mokubasuadvocates.com",
      phone: "+254 141 397 048",
      image: "/images/team-members/susan-anyango.jpeg",
    },
  ];

  const relatedInsightsByArea: Record<
    string,
    Array<{
      title: string;
      tag: string;
      author: string;
      date: string;
      image: string;
      href: string;
    }>
  > = {
    "corporate-commercial": [
      {
        title: "Structuring Cross-Border M&A in East Africa",
        tag: "Corporate",
        author: "Brenton Okubasu",
        date: "March 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
        href: "/publications",
      },
      {
        title: "Best Practices for Joint Ventures and Corporate Finance",
        tag: "Finance",
        author: "Oduor Khamati",
        date: "February 25, 2026",
        image:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&q=80",
        href: "/publications",
      },
    ],
    "dispute-resolution": [
      {
        title: "Managing Complex Commercial Disputes Through Arbitration",
        tag: "Dispute",
        author: "Susan Anyango",
        date: "April 12, 2026",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
        href: "/publications",
      },
      {
        title: "Court Strategies for High-Value Litigation",
        tag: "Litigation",
        author: "Brenton Okubasu",
        date: "January 30, 2026",
        image:
          "https://images.unsplash.com/photo-1524777310-7b68b97d5f3e?w=600&q=80",
        href: "/publications",
      },
    ],
    "media-tech-ip": [
      {
        title: "Protecting Digital Assets in the Media Sector",
        tag: "IP",
        author: "Oduor Khamati",
        date: "March 1, 2026",
        image:
          "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=600&q=80",
        href: "/publications",
      },
      {
        title: "Technology Agreements and Rights Management",
        tag: "Tech",
        author: "Brenton Okubasu",
        date: "February 8, 2026",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
        href: "/publications",
      },
    ],
    "energy-climate": [
      {
        title: "Legal Frameworks for Renewable Energy Projects",
        tag: "Energy",
        author: "Susan Anyango",
        date: "April 4, 2026",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
        href: "/publications",
      },
      {
        title: "Climate Change Compliance for Natural Resource Investors",
        tag: "Climate",
        author: "Oduor Khamati",
        date: "March 18, 2026",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
        href: "/publications",
      },
    ],
    "real-estate-finance": [
      {
        title: "Financing Strategies for Property Development",
        tag: "Real Estate",
        author: "Brenton Okubasu",
        date: "February 18, 2026",
        image:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80",
        href: "/publications",
      },
    ],
    "family-law": [
      {
        title: "Navigating Matrimonial Property and Succession Matters",
        tag: "Family",
        author: "Susan Anyango",
        date: "January 20, 2026",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
        href: "/publications",
      },
    ],
    "policy-legislative-drafting": [
      {
        title: "Drafting Effective Legislation for Regulatory Reform",
        tag: "Policy",
        author: "Oduor Khamati",
        date: "April 22, 2026",
        image:
          "https://images.unsplash.com/photo-1517430816045-df4b7de1d1d1?w=600&q=80",
        href: "/publications",
      },
    ],
    "regional-integration": [
      {
        title: "Regional Trade Law and Cross-Border Compliance",
        tag: "Regional",
        author: "Brenton Okubasu",
        date: "March 29, 2026",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        href: "/publications",
      },
    ],
    "employment-labour": [
      {
        title: "Employment Law Best Practices for Kenyan Employers",
        tag: "Labour",
        author: "Susan Anyango",
        date: "May 1, 2026",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
        href: "/publications",
      },
    ],
  };

  const relatedInsights = relatedInsightsByArea[practiceArea.id] ?? [
    {
      title: "Legal Insights for Modern Business",
      tag: practiceArea.title.split(" ")[0],
      author: "Malika Okubasu",
      date: "January 2026",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      href: "/publications",
    },
  ];

  // Create a strapline from the description
  const strapline = "Practical advice. Strong representation. Clear outcomes.";

  // Split details into overview paragraphs
  const overview = practiceArea.details.split(". ").filter((p) => p.trim());

  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero */}
      <section className="relative bg-soft-blue border-b border-brand-border py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt={practiceArea.title}
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-secondary-text mb-4">
                <Link href="/practice-areas" className="hover:text-link">
                  Practice Areas
                </Link>
                <span>/</span>
                <span className="text-body">{practiceArea.title}</span>
              </div>

              <div className="text-xs uppercase tracking-wider text-secondary-text mb-3">
                Practice Area
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-heading mb-4 leading-tight">
                {practiceArea.title}
              </h1>

              <p className="text-lg lg:text-xl text-body leading-relaxed mb-6">
                {strapline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button>Request a Consultation</Button>
                <Button
                  variant="outline"
                  className="border-brand-blue text-link hover:bg-light-blue"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email the Firm
                </Button>
              </div>
            </div>

            <div className="lg:w-80">
              <div className="bg-white p-6 border border-brand-border">
                <h3 className="text-lg font-bold text-heading mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-link" />
                    <span className="text-sm text-body">+254 141 397 048</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-link" />
                    <span className="text-sm text-body">
                      legal@mokubasuadvocates.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-8">
              Overview
            </h2>

            <div className="space-y-6 text-body leading-relaxed">
              {overview.map((paragraph, index) => (
                <p key={index}>{paragraph}.</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-soft-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-8">
            We provide legal advice and services on
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {practiceArea.services && practiceArea.services.length > 0 ? (
              practiceArea.services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-heading flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-body">{service}</span>
                </div>
              ))
            ) : (
              <p className="text-body">Services information coming soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* Key Contacts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-8">
            Key Contacts
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamContacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-heading mb-1">
                  {contact.name}
                </h3>
                <p className="text-sm text-secondary-text mb-1">
                  {contact.role}
                </p>
                <p className="text-sm text-body mb-1">{contact.location}</p>
                <p className="text-sm text-body">{contact.phone}</p>
                <p className="text-sm text-body">{contact.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="py-16 lg:py-24 bg-soft-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-8">
            Related Insights
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedInsights.map((insight, index) => (
              <Link key={index} href={insight.href} className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-white p-6">
                  <div className="text-xs uppercase tracking-wider text-secondary-text mb-2">
                    {insight.tag}
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-2 group-hover:text-link transition-colors">
                    {insight.title}
                  </h3>
                  <div className="text-sm text-body">
                    By {insight.author} • {insight.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-light-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-heading mb-8">
            Need guidance in {practiceArea.title}?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-brand-blue text-link hover:bg-light-blue"
            >
              Request a Consultation
            </Button>
            <Button variant="text" className="text-white hover:text-body">
              Email the Firm
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
