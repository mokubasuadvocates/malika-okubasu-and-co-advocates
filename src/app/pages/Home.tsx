"use client";

import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { useState, useEffect } from "react";

export function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const practiceAreas = [
    "Corporate And Commercial",
    "Dispute Resolution",
    "Media, Technology & Intellectual Property",
    "Energy, Natural Resources Climate Change",
    "Real Estate, Banking & Finance",
    "Family Law",
    "Policy & Legislative Drafting",
    "Regional Integration",
    "Employment & Labour Relations",
  ];

  const expectations = [
    {
      title: "Clear guidance and practical advice you can act on",
      description:
        "We translate complex legal issues into actionable strategies",
    },
    {
      title: "Responsive communication and regular updates",
      description: "Stay informed at every stage of your legal matter",
    },
    {
      title: "Strong representation and well-prepared advocacy",
      description: "Thorough preparation and strategic thinking in every case",
    },
    {
      title: "Professionalism, confidentiality, and attention to detail",
      description: "Your trust is our highest priority",
    },
  ];

  const featuredInsights = [
    {
      id: 1,
      category: "Corporate",
      title: "Navigating Cross-Border M&A in East Africa",
      excerpt:
        "An in-depth analysis of the regulatory landscape and practical considerations for cross-border mergers and acquisitions.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    },
    {
      id: 2,
      category: "Governance",
      title: "Corporate Governance Best Practices for Startups",
      excerpt:
        "Essential governance frameworks and compliance requirements for early-stage technology companies.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
    },
    {
      id: 3,
      category: "IP & Technology",
      title: "Protecting Intellectual Property in the Digital Age",
      excerpt:
        "Strategic approaches to safeguarding intellectual property rights in an increasingly digital environment.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    },
  ];

  const teamPreview = [
    {
      id: "brenton-okubasu",
      name: "Brenton Okubasu",
      role: "Founder and Consulting Partner",
      linkedin: "https://www.linkedin.com/in/brenton-o-a044b154/",
      image: "/images/team-members/brenton-okubasu.jpeg",
    },
    {
      id: "oduor-khamati",
      name: "Oduor Khamati",
      role: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/oduorkhamati/",
      image: "/images/team-members/oduor-khamati.jpeg",
    },
    {
      id: "susan-anyango",
      name: "Susan Anyango",
      role: "Advocate of the High Court of Kenya",
      linkedin: "https://www.linkedin.com/in/susan-anyango-aciarb-0b861a249/",
      image: "/images/team-members/susan-anyango.jpeg",
    },
  ];

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Malika Okubasu & Company Advocates",
            url: "https://mokubasuadvocates.com",
            email: "legal@mokubasuadvocates.com",
            telephone: "+254141397048",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "5th Avenue Suites, 5th Avenue Ngong Road, Suite No. 6, 4th Floor",
              addressLocality: "Nairobi",
              postalCode: "00603",
              addressCountry: "KE",
            },
            areaServed: {
              "@type": "Country",
              name: "Kenya",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Malika Okubasu & Company Advocates",
            url: "https://mokubasuadvocates.com",
          }),
        }}
      />
      {/* Team Member Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brenton Okubasu",
              worksFor: {
                "@type": "LegalService",
                name: "Malika Okubasu & Company Advocates",
              },
              url: "https://mokubasuadvocates.com/team",
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Oduor Khamati",
              worksFor: {
                "@type": "LegalService",
                name: "Malika Okubasu & Company Advocates",
              },
              url: "https://mokubasuadvocates.com/team",
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Susan Anyango",
              worksFor: {
                "@type": "LegalService",
                name: "Malika Okubasu & Company Advocates",
              },
              url: "https://mokubasuadvocates.com/team",
            },
          ]),
        }}
      />

      {/* 1) Bright Premium Hero Section with Integrated Navigation */}
      <section className="relative overflow-hidden bg-soft-blue">
        {/* Desktop: Header + Navigation */}
        <div className="hidden h-[88px] border-b border-brand-border bg-white/95 px-6 shadow-sm backdrop-blur-sm lg:flex">
          <div className="flex h-full w-[280px] items-center gap-4 py-4">
            <Link href="/" className="flex items-center gap-3 text-heading">
              <img
                src="/images/Malika-Okubasu-Logo.jpg"
                alt="Malika Okubasu & Company Advocates"
                className="h-10 w-auto"
              />
              <div className="leading-none">
                <div className="text-2xl font-bold tracking-tight leading-[26px]">
                  Malika Okubasu
                </div>
                <div className="mt-1 text-[13px] font-semibold tracking-tight leading-[16px]">
                  & Company Advocates
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <nav className="flex items-center gap-12">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Practice Areas", "/practice-areas"],
                ["Our Team", "/our-team"],
                ["Publications", "/publications"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="font-serif-editorial text-[17px] font-semibold tracking-normal text-heading underline-offset-4 decoration-2 decoration-brand-blue transition-all hover:text-link hover:underline"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <Link href="/contact">
              <Button variant="primary" className="h-[44px] px-[22px]">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile: Top Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 flex border-b border-brand-border bg-white/95 shadow-sm backdrop-blur-sm lg:hidden">
          <div className="flex-1 px-5 py-5">
            <Link href="/" className="flex items-center gap-3 text-heading">
              <img
                src="/images/Malika-Okubasu-Logo.jpg"
                alt="Malika Okubasu & Company Advocates"
                className="h-8 w-auto"
              />
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight">
                  Malika Okubasu
                </div>
                <div className="text-sm font-bold tracking-tight">
                  & Company Advocates
                </div>
              </div>
            </Link>
          </div>

          <div className="flex w-[72px] items-center justify-center bg-light-blue">
            <button
              className="p-2 text-link"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mx-auto grid min-h-screen max-w-[1280px] items-center gap-10 px-6 pt-28 pb-16 lg:min-h-[720px] lg:grid-cols-[52%_48%] lg:px-12 lg:pt-12 xl:gap-16">
          <div>
            <h1 className="max-w-[760px] text-4xl font-bold leading-[1.06] tracking-tight text-heading sm:text-5xl lg:text-6xl xl:text-7xl">
              Malika Okubasu & Company Advocates
            </h1>
            <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-body lg:text-xl">
              Practical, responsive legal support for individuals, institutions,
              and businesses navigating high-stakes decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {process.env.NEXT_PUBLIC_BOOKINGS_URL ? (
                <Link
                  href={process.env.NEXT_PUBLIC_BOOKINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Book a Consultation</Button>
                </Link>
              ) : (
                <Link href="/contact">
                  <Button variant="primary">Book a Consultation</Button>
                </Link>
              )}
              <Link href="/practice-areas">
                <Button variant="outline">Explore Practice Areas</Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-brand-border bg-white p-3 shadow-xl shadow-brand-blue/10">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90"
                alt="Modern corporate architecture"
                className="h-[360px] w-full rounded-md object-cover lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) Practice Areas Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Divider className="mb-12 lg:mb-16 xl:mb-20" />

          <div className="grid lg:grid-cols-[32%_68%] gap-12 lg:gap-16 xl:gap-20">
            {/* Left: Stacked Headline */}
            <div>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-heading leading-[1.05]">
                Practice
                <br />
                Areas
              </h2>
            </div>

            {/* Right: 3-column list */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10 lg:gap-y-8">
              {practiceAreas.map((area) => (
                <div
                  key={area}
                  className="font-serif-editorial text-lg lg:text-xl text-heading leading-relaxed"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Bar */}
          <div className="mt-12 lg:mt-16 xl:mt-20 bg-soft-blue h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12">
            <Link
              href="/practice-areas"
              className="font-bold text-heading text-base lg:text-lg hover:underline underline-offset-4 transition-all"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* 3) Firm Snapshot Module */}
      <section className="py-16 lg:py-24 xl:py-28 bg-light-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <div className="text-xs lg:text-sm uppercase tracking-wider text-link mb-4 lg:mb-6">
                About the Firm
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-6 lg:mb-8 leading-tight">
                Practical legal support. Clear outcomes.
              </h2>

              <p className="text-lg lg:text-xl text-body leading-relaxed mb-8 lg:mb-10">
                We provide practical legal support to individuals, institutions,
                and businesses—built on integrity, professionalism, and a deep
                understanding of client goals.
              </p>

              <div>
                <Link href="/about-us">
                  <Button
                    variant="outline"
                    className="border-brand-blue bg-white text-link hover:bg-white"
                  >
                    Learn About the Firm
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-first lg:order-last">
              <div className="relative overflow-hidden rounded-lg border border-brand-border bg-white p-3 shadow-lg shadow-brand-blue/10">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                  alt="Firm office"
                  className="w-full aspect-[4/3] rounded-md object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) What Clients Can Expect */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Divider className="mb-12 lg:mb-16" />

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-12 lg:mb-16 xl:mb-20">
            What Clients Can Expect
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-12 xl:gap-x-20 xl:gap-y-16">
            {expectations.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl lg:text-2xl font-bold text-heading mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compact CTA Strip */}
          <div className="mt-12 lg:mt-16 xl:mt-20 bg-soft-blue h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12">
            {process.env.NEXT_PUBLIC_BOOKINGS_URL ? (
              <a
                href={process.env.NEXT_PUBLIC_BOOKINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-heading text-base lg:text-lg hover:underline underline-offset-4 transition-all"
              >
                Book a Consultation
              </a>
            ) : (
              <Link
                href="/contact"
                className="font-bold text-heading text-base lg:text-lg hover:underline underline-offset-4 transition-all"
              >
                Book a Consultation
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 5) Featured Insights */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-xs lg:text-sm uppercase tracking-wider text-link mb-4 lg:mb-6">
            Publications
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-8 lg:mb-12 xl:mb-16">
            Featured Insights
          </h2>

          <div className="grid gap-8 lg:gap-12">
            {featuredInsights.map((insight) => (
              <Link
                key={insight.id}
                href="/publications"
                className="group block"
              >
                <div className="bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                    {/* Thumbnail */}
                    <div className="overflow-hidden">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-48 lg:h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <div className="text-xs lg:text-sm uppercase tracking-wider text-link mb-3 font-medium">
                        {insight.category}
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-heading mb-4 group-hover:text-link-hover transition-colors leading-snug">
                        {insight.title}
                      </h3>

                      <p className="text-base lg:text-lg text-body leading-relaxed">
                        {insight.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 lg:mt-16 text-center">
            <Link href="/publications">
              <Button variant="outline" className="px-8 py-4 text-lg">
                View All Publications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6) Our Team Preview */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Divider className="mb-12 lg:mb-16" />

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-4 lg:mb-6">
            Our Team
          </h2>

          <p className="text-lg lg:text-xl text-body mb-10 lg:mb-14 xl:mb-16 leading-relaxed">
            Meet the people behind Malika Okubasu & Company Advocates.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {teamPreview.map((member) => (
              <div key={member.id} className="group">
                {/* Portrait */}
                <div className="overflow-hidden mb-4 rounded-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Panel */}
                <div className="bg-soft-blue p-5 lg:p-6 rounded-sm">
                  <h3 className="text-lg lg:text-xl font-bold text-heading mb-1 leading-snug">
                    {member.name}
                  </h3>
                  <div className="text-sm lg:text-base text-body mb-4 leading-relaxed">
                    {member.role}
                  </div>

                  <div className="flex flex-col gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm lg:text-base text-heading hover:text-link-hover hover:underline underline-offset-4 transition-all"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-14">
            <Link href="/our-team">
              <Button variant="outline">View Our Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7) Get In Touch Preview */}
      <section className="py-16 lg:py-24 xl:py-28 bg-soft-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 xl:gap-20">
            {/* Left */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-4 lg:mb-6 leading-tight">
                Get In Touch
              </h2>
              <p className="text-lg lg:text-xl text-body leading-relaxed mb-10 lg:mb-12">
                We maintain strict confidentiality and respond to all inquiries
                within 24 hours.
              </p>

              {/* Map Placeholder */}
              <div className="w-full h-[280px] lg:h-[320px] rounded-sm border border-brand-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Location map"
                  className="w-full h-full object-cover grayscale opacity-70"
                />
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6 lg:space-y-7 mb-8 lg:mb-10">
                <div>
                  <div className="text-sm font-bold text-body mb-2 uppercase tracking-wider">
                    Phone
                  </div>
                  <a
                    href="tel:+254141397048"
                    className="text-lg lg:text-xl text-heading hover:text-link hover:underline underline-offset-4 transition-all"
                  >
                    +254 141 397 048
                  </a>
                </div>

                <div>
                  <div className="text-sm font-bold text-body mb-2 uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:legal@mokubasuadvocates.com"
                    className="text-lg lg:text-xl text-heading hover:text-link hover:underline underline-offset-4 transition-all"
                  >
                    legal@mokubasuadvocates.com
                  </a>
                </div>

                <div>
                  <div className="text-sm font-bold text-body mb-2 uppercase tracking-wider">
                    Address
                  </div>
                  <p className="text-lg lg:text-xl text-body leading-relaxed">
                    5th Avenue Suites, 5th Avenue Ngong Road.
                    <br />
                    Suite No. 6, 4th Floor
                    <br />
                    P.O. Box 25926 - 00603.
                  </p>
                </div>
              </div>

              <Link href="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex border-b border-brand-border bg-white">
          <div className="flex-1 px-5 py-5">
            <Link
              href="/"
              className="text-heading"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight">
                  Malika Okubasu
                </div>
                <div className="text-sm font-bold tracking-tight">
                  & Company Advocates
                </div>
              </div>
            </Link>
          </div>

          <div className="w-[72px] bg-light-blue flex items-center justify-center">
            <button
              className="text-link p-2"
              aria-label="Close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="px-8 py-12 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading text-3xl font-bold tracking-tight hover:text-link transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading text-3xl font-bold tracking-tight hover:text-link transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/practice-areas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading text-3xl font-bold tracking-tight hover:text-link transition-colors"
          >
            Practice Areas
          </Link>
          <Link
            href="/our-team"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading text-3xl font-bold tracking-tight hover:text-link transition-colors"
          >
            Our Team
          </Link>
          <Link
            href="/publications"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading text-3xl font-bold tracking-tight hover:text-link transition-colors"
          >
            Publications
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-heading text-3xl font-bold tracking-tight hover:text-link transition-colors"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </div>
  );
}
