import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { BlogPreviewCard } from "@/components/BlogPreviewCard";
import { Button } from "@/components/Button";
import { practiceAreas } from "@/constants/practiceAreas";
import { getRelatedBlogPosts } from "@/data/blogs";

interface PracticeAreaDetailProps {
  slug?: string;
}

export function PracticeAreaDetail({ slug }: PracticeAreaDetailProps) {
  if (!slug) {
    notFound();
  }

  const practiceArea = practiceAreas.find((area) => area.id === slug);

  if (!practiceArea) {
    notFound();
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

  const relatedInsights = getRelatedBlogPosts(practiceArea.title, 3);

  // Create a strapline from the description
  const strapline = "Practical advice. Strong representation. Clear outcomes.";

  const overview = [practiceArea.details];

  return (
    <div>
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
                <Button href="/contact">Request a Consultation</Button>
                <Button
                  href="mailto:legal@mokubasuadvocates.com"
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
                <p key={index}>{paragraph}</p>
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

          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
            {relatedInsights.map((insight) => (
              <div
                key={insight.slug}
                className="rounded-sm border border-brand-border bg-white p-5 shadow-sm sm:p-6 lg:p-8"
              >
                <BlogPreviewCard post={insight} />
              </div>
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
              href="/contact"
              variant="outline"
              className="border-brand-blue text-link hover:bg-light-blue"
            >
              Request a Consultation
            </Button>
            <Button
              href="mailto:legal@mokubasuadvocates.com"
              variant="text"
              className="text-white hover:text-body"
            >
              Email the Firm
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
