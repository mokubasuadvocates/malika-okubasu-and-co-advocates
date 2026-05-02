import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "../components/Button";

export function PracticeAreaDetail() {
  // Mock data - in a real app, this would come from a CMS or API
  const practiceArea = {
    title: "Corporate And Commercial",
    description:
      "Strategic legal counsel for business transactions, mergers, acquisitions, and corporate governance.",
    strapline: "Practical advice. Strong representation. Clear outcomes.",
    overview: [
      "Our Corporate and Commercial practice provides comprehensive legal support to businesses across all stages of their lifecycle. From formation and fundraising to mergers, acquisitions, and restructuring, we deliver strategic counsel that aligns with your business objectives.",
      "We work closely with directors, shareholders, and management teams to navigate complex regulatory environments, negotiate favorable terms, and structure transactions that create value. Our approach combines legal precision with commercial pragmatism, ensuring that our advice translates into actionable business strategies.",
    ],
    services: [
      "Company formation and corporate structuring",
      "Mergers and acquisitions",
      "Private equity and venture capital transactions",
      "Joint ventures and strategic partnerships",
      "Corporate governance and compliance",
      "Shareholder agreements and disputes",
      "Commercial contracts and negotiations",
      "Regulatory advice and licensing",
    ],
    contacts: [
      {
        name: "Brenton Okubasu",
        role: "Founder and Consulting Partner",
        location: "Nairobi, Kenya",
        phone: "+254 721 789 389 / +254 141 397 048",
        email: "info@malikaokubasu.com",
        image: "/images/team-members/brenton-okubasu.jpeg",
      },
      {
        name: "Oduor Khamati",
        role: "Managing Partner",
        location: "Nairobi, Kenya",
        phone: "+254 717 259 196 / +254 141 397 048",
        email: "info@malikaokubasu.com",
        image: "/images/team-members/oduor-khamati.jpeg",
      },
      {
        name: "Susan Anyango",
        role: "Associate",
        location: "Nairobi, Kenya",
        phone: "+254 141 397 048",
        email: "info@malikaokubasu.com",
        image: "/images/team-members/susan-anyango.jpeg",
      },
    ],
    insights: [
      {
        title: "Navigating Cross-Border M&A in East Africa",
        tag: "Corporate",
        author: "Malika Okubasu",
        date: "January 15, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      },
    ],
  };

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
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button variant="solid">Request a Consultation</Button>
              <Button variant="text" className="text-white hover:text-body">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strapline */}
      <section className="py-12 lg:py-16 bg-white border-b border-brand-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-heading text-center">
            {practiceArea.strapline}
          </h2>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {practiceArea.overview.map((paragraph, index) => (
              <p key={index} className="text-lg text-body leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
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
            {practiceArea.services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-heading flex-shrink-0 mt-0.5" />
                <span className="text-lg text-body">{service}</span>
              </div>
            ))}
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
            {practiceArea.contacts.map((contact) => (
              <div key={contact.name} className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-soft-blue p-6">
                  <h3 className="text-xl font-bold text-heading mb-2">
                    {contact.name}
                  </h3>
                  <div className="text-sm text-body mb-1">{contact.role}</div>
                  <div className="text-sm text-body mb-4">
                    {contact.location}
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-2 text-heading hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 text-heading hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      {contact.email}
                    </a>
                  </div>
                </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceArea.insights.map((insight, index) => (
              <Link key={index} href="/publications" className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full aspect-[16/10] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-wider text-body">
                    {insight.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-heading mb-2 group-hover:underline underline-offset-4">
                  {insight.title}
                </h3>
                <div className="text-sm text-body">
                  {insight.author} • {insight.date}
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
