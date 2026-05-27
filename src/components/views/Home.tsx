import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowRight, Mail, Phone } from "lucide-react";
import { BlogPreviewCard } from "@/components/BlogPreviewCard";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { practiceAreas } from "@/constants/practiceAreas";
import { getPublishedBlogPosts } from "@/data/blogs";
import { GsapReveal } from "@/components/animations/GsapReveal";
import { FAQSection } from "@/components/FAQSection";

export function Home() {
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

  const featuredInsights = getPublishedBlogPosts().slice(0, 3);

  const teamPreview = [
    {
      id: "brenton-okubasu",
      name: "Brenton Okubasu",
      role: "Founding Partner (On leave of absence), Malika Okubasu and Company Advocates",
      email: "legal@mokubasuadvocates.com",
      phone: "+254 721 789 389 / +254 141 397 048",
      linkedin: "https://www.linkedin.com/in/brenton-o-a044b154/",
      image: "/images/team-members/brenton-okubasu.jpeg",
    },
    {
      id: "oduor-khamati",
      name: "Oduor Khamati",
      role: "Managing Partner, Malika Okubasu and Company Advocates",
      email: "oduor.khamati@mokubasuadvocates.com",
      phone: "+254 717 259 196 / +254 141 397 048",
      linkedin: "https://www.linkedin.com/in/oduorkhamati/",
      image: "/images/team-members/oduor-khamati.jpeg",
    },
    {
      id: "susan-anyango",
      name: "Susan Anyango",
      role: "Associate, Malika Okubasu and Company Advocates",
      email: "susan.anyango@mokubasuadvocates.com",
      phone: "+254 141 397 048",
      linkedin: "https://www.linkedin.com/in/susan-anyango-aciarb-0b861a249/",
      image: "/images/team-members/susan-anyango.jpeg",
    },
  ];

  return (
    <div>
      {/* 1) Premium Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#002f4d_0%,#003e63_58%,#0b5f8f_100%)] text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gold/70" />
        <GsapReveal className="mx-auto grid grid-cols-1 min-h-[680px] max-w-[1280px] items-center gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-12 xl:gap-16">
          <GsapReveal staggerChildren mobileMode="fade">
            <div className="mb-5 h-1 w-20 rounded-full bg-gold" />
            <h1 className="max-w-[760px] text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Malika Okubasu & Company Advocates
            </h1>
            <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-white/85 lg:text-xl">
              Malika Okubasu & Company Advocates is a leading law firm providing
              comprehensive legal solutions to complex business challenges.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {process.env.NEXT_PUBLIC_BOOKINGS_URL ? (
                <Link
                  href={process.env.NEXT_PUBLIC_BOOKINGS_URL}
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button variant="gold">Book a Consultation</Button>
                </Link>
              ) : (
                <Link href="/contact">
                  <Button variant="gold">Book a Consultation</Button>
                </Link>
              )}
              <Link href="/practice-areas">
                <Button variant="inverseOutline">Explore Practice Areas</Button>
              </Link>
            </div>
          </GsapReveal>

          <GsapReveal mobileMode="fade">
            <div className="premium-card overflow-hidden rounded-lg border border-white/20 bg-white/10 p-3 shadow-xl shadow-black/20 backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90"
                alt="Modern corporate architecture"
                width={1200}
                height={800}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[360px] w-full rounded-md object-cover lg:h-[520px]"
              />
            </div>
          </GsapReveal>
        </GsapReveal>
      </section>

      {/* 2) Practice Areas Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Divider className="mb-12 lg:mb-16 xl:mb-20" />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
            {/* Left: Stacked Headline */}
            <GsapReveal mobileMode="fade">
              <h2 className="gold-accent-line text-5xl lg:text-6xl xl:text-7xl font-bold text-heading leading-[1.05]">
                Practice
                <br />
                Areas
              </h2>
            </GsapReveal>

            {/* Right: 3-column list */}
            <GsapReveal staggerChildren mobileMode="fade" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
              {practiceAreas.map((area) => (
                <Link
                  key={area.id}
                  href={`/practice-areas/${area.id}`}
                  className="group block underline-offset-4 transition-colors"
                >
                  <span className="font-serif-editorial block text-lg leading-snug text-heading transition-colors group-hover:text-gold-text group-hover:underline lg:text-xl">
                    {area.title}
                  </span>
                </Link>
              ))}
            </GsapReveal>
          </div>

          {/* CTA Bar */}
          <div className="mt-12 lg:mt-16 xl:mt-20 bg-navy h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12">
            <Link
              href="/practice-areas"
              className="font-bold text-white text-base lg:text-lg hover:text-gold-hover hover:underline underline-offset-4 transition-all"
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

              <h2 className="gold-accent-line text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-10 lg:mb-12 leading-tight">
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
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                  alt="Firm office"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full aspect-[4/3] rounded-md object-cover motion-safe:hover:scale-[1.02] motion-safe:transition-transform duration-700"
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

          <h2 className="gold-accent-line text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-12 lg:mb-16 xl:mb-20">
            What Clients Can Expect
          </h2>

          <GsapReveal staggerChildren mobileMode="fade" className="grid lg:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-12 xl:gap-x-20 xl:gap-y-16">
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
          </GsapReveal>

          {/* Compact CTA Strip */}
          <div className="mt-12 lg:mt-16 xl:mt-20 bg-navy h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12">
            {process.env.NEXT_PUBLIC_BOOKINGS_URL ? (
              <a
                href={process.env.NEXT_PUBLIC_BOOKINGS_URL}
                target="_blank" rel="noopener noreferrer"
                className="font-bold text-white text-base lg:text-lg hover:text-gold-hover hover:underline underline-offset-4 transition-all"
              >
                Book a Consultation
              </a>
            ) : (
              <Link
                href="/contact"
                className="font-bold text-white text-base lg:text-lg hover:text-gold-hover hover:underline underline-offset-4 transition-all"
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

          <h2 className="gold-accent-line text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-12 lg:mb-16 xl:mb-20">
            Featured Insights
          </h2>

          <GsapReveal staggerChildren mobileMode="fade" className="flex flex-col gap-10 lg:gap-12">
            {featuredInsights.map((insight, index) => (
              <BlogPreviewCard
                key={insight.slug}
                post={insight}
                priority={index === 0}
              />
            ))}
          </GsapReveal>

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

      {/* 5.5) Frequently Asked Questions */}
      <FAQSection />

      {/* 6) Our Team Preview */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Divider className="mb-12 lg:mb-16" />

          <h2 className="gold-accent-line text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-8 lg:mb-10">
            Our Team
          </h2>

          <p className="text-lg lg:text-xl text-body mb-10 lg:mb-14 xl:mb-16 leading-relaxed">
            Meet the people behind Malika Okubasu & Company Advocates.
          </p>

          <GsapReveal staggerChildren mobileMode="fade" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamPreview.map((member) => (
              <div key={member.id} className="group">
                {/* Portrait */}
                <div className="overflow-hidden mb-4 rounded-sm">
                  <Image
                    src={member.image}
                    alt=""
                    width={400}
                    height={533}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full aspect-[3/4] object-cover lg:group-hover:grayscale motion-safe:group-hover:scale-105 motion-safe:transition-all duration-500"
                  />
                </div>

                {/* Info Panel */}
                <div className="premium-card bg-soft-blue p-5 lg:p-6 rounded-sm">
                  <h3 className="text-lg lg:text-xl font-bold text-heading mb-1 leading-snug">
                    {member.name}
                  </h3>
                  <div className="text-sm lg:text-base text-body mb-4 leading-relaxed">
                    {member.role}
                  </div>

                  <div className="flex flex-col gap-2">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm lg:text-base text-heading hover:text-gold-text hover:underline underline-offset-4 transition-all"
                      >
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span className="break-all">{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.split(" / ")[0].replace(/\s+/g, "")}`}
                        className="flex items-center gap-2 text-sm lg:text-base text-heading hover:text-gold-text hover:underline underline-offset-4 transition-all"
                      >
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span className="break-words">{member.phone}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm lg:text-base text-heading hover:text-gold-text hover:underline underline-offset-4 transition-all"
                      >
                        <Linkedin className="w-4 h-4 flex-shrink-0" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </GsapReveal>

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
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16 xl:gap-20">
            {/* Left */}
            <div>
              <h2 className="gold-accent-line text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-8 lg:mb-10 leading-tight">
                Get In Touch
              </h2>
              <p className="text-lg lg:text-xl text-body leading-relaxed mb-10 lg:mb-12">
                We maintain strict confidentiality and respond to all inquiries
                within 24 hours.
              </p>

              {/* Map Iframe */}
              <div className="w-full h-[280px] lg:h-[320px] rounded-sm border border-[rgba(0,62,99,0.12)] overflow-hidden shadow-sm">
                <iframe
                  title="Map showing Malika Okubasu & Company Advocates at 5th Avenue Suites, Ngong Road, Nairobi"
                  src="https://www.google.com/maps?q=5th%20Avenue%20Suites%20Ngong%20Road%20Nairobi&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
                <div className="sr-only">
                  Malika Okubasu & Company Advocates, 5th Avenue Suites, Ngong Road, Nairobi
                </div>
              </div>

              <div className="mt-6">
                <a 
                  href="https://maps.app.goo.gl/enkR4yrDCPXHHYpSA"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-sans-primary font-semibold shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 bg-navy text-white hover:bg-gold-text hover:text-white"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
                    className="text-lg lg:text-xl text-heading hover:text-gold-text hover:underline underline-offset-4 transition-all"
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
                    className="text-lg lg:text-xl text-heading hover:text-gold-text hover:underline underline-offset-4 transition-all"
                  >
                    legal@mokubasuadvocates.com
                  </a>
                </div>

                <div>
                  <div className="text-sm font-bold text-body mb-2 uppercase tracking-wider">
                    Address
                  </div>
                  <p className="text-lg lg:text-xl text-body leading-relaxed">
                    5th Avenue Suites Ngong Road, Suite No. 6 4th Floor
                    <br />
                    P.O. Box 25926 - 00603
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
    </div>
  );
}
