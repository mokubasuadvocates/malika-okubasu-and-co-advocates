import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { practiceAreas } from "@/constants/practiceAreas";

export function About() {
  const objectives = [
    "To deliver an exceptional client experience through consistent quality, responsiveness, and professionalism.",
    "To provide timely, innovative, and practical legal solutions aligned to client priorities.",
    "To build a strong internal culture that attracts and retains excellent talent.",
    "To uphold the highest standards of integrity, ethics, and accountability in every engagement.",
  ];

  const expectations = [
    "Clear guidance and practical advice you can act on",
    "Responsive communication and regular updates",
    "Strong representation and well-prepared advocacy",
    "Professionalism, confidentiality, and attention to detail",
  ];

  const coreValues = [
    "Integrity and ethical practice",
    "Excellence and professionalism",
    "Timeliness and reliability",
    "Innovation and flexibility",
    "Respect, fairness, and teamwork",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
            alt="Law office"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-6 leading-tight tracking-tight">
              About Malika Okubasu & Company Advocates
            </h1>
            <p className="text-lg lg:text-xl text-body mb-8 leading-relaxed">
              Malika Okubasu & Company Advocates is a full-service law firm
              based in Nairobi, Kenya, providing practical legal support to
              individuals, institutions, and businesses. We are committed to
              delivering clear, results-focused advice and representation—built
              on integrity, professionalism, and a deep understanding of our
              clients&apos; goals.
            </p>

            {process.env.NEXT_PUBLIC_BOOKINGS_URL ? (
              <a
                href={process.env.NEXT_PUBLIC_BOOKINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Book a Consultation</Button>
              </a>
            ) : (
              <Link href="/contact">
                <Button variant="primary">Book a Consultation</Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 2) Core Narrative Section */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Divider className="mb-12 lg:mb-16" />
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
            {/* Left: H2 */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading leading-tight">
                How We Work
              </h2>
            </div>

            {/* Right: Body paragraphs */}
            <div className="space-y-6 lg:space-y-7">
              <p className="text-base lg:text-lg text-body leading-relaxed">
                We approach every instruction with a commercial mindset and a
                human touch. Whether we are advising on transactions, resolving
                disputes, or providing ongoing legal support, our focus is
                simple: protect our clients&apos; interests, reduce risk, and help
                them move forward with confidence.
              </p>

              <p className="text-base lg:text-lg text-body leading-relaxed">
                The firm has developed a strong reputation for effective
                advocacy before courts, tribunals, and administrative bodies, as
                well as success in negotiation, mediation, and arbitration. We
                are deliberate about quality—every matter is handled with
                attention to detail, timely communication, and solutions that
                are practical and actionable.
              </p>

              <p className="text-base lg:text-lg text-body leading-relaxed">
                Through collaborative partnerships and regional linkages, we are
                able to support assignments that involve cross-border elements
                within Africa, depending on the nature of the matter and
                jurisdictional requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Divider />
      </div>

      {/* 3) Objectives */}
      <section className="py-16 lg:py-24 xl:py-28 bg-soft-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-10 lg:mb-14 xl:mb-16">
            Our Objectives
          </h2>

          <ol className="space-y-6 lg:space-y-8 max-w-4xl">
            {objectives.map((objective, index) => (
              <li key={index} className="flex gap-4 lg:gap-6">
                <span className="text-lg lg:text-xl font-bold text-heading flex-shrink-0">
                  {index + 1}.
                </span>
                <span className="text-base lg:text-lg text-heading leading-relaxed">
                  {objective}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Divider />
      </div>

      {/* 4) Our Services */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-6 lg:mb-8">
            Our Services
          </h2>

          <div className="max-w-4xl">
            <p className="text-base lg:text-lg text-body leading-relaxed mb-6 lg:mb-8">
              We provide tailored legal services with clear timelines,
              transparent communication, and a strong focus on outcomes. Our
              team supports clients across a wide range of matters, including
              advisory work, transactional support, compliance, dispute
              resolution, and strategic representation.
            </p>

            <p className="text-base lg:text-lg text-body mb-4 lg:mb-5">
              Our services are delivered through the following practice areas:
            </p>

            <a
              href="#practice-areas"
              className="inline-flex items-center gap-2 text-base lg:text-lg font-bold text-heading hover:underline underline-offset-4 transition-all"
            >
              View Practice Areas
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Divider />
      </div>

      {/* 5) What Clients Can Expect */}
      <section className="py-16 lg:py-24 xl:py-28 bg-soft-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-10 lg:mb-14 xl:mb-16">
            What Clients Can Expect
          </h2>

          <ul className="grid lg:grid-cols-2 gap-6 lg:gap-x-16 lg:gap-y-8 max-w-5xl">
            {expectations.map((expectation, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-heading flex-shrink-0 mt-1">•</span>
                <span className="text-base lg:text-lg text-heading leading-relaxed">
                  {expectation}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Divider />
      </div>

      {/* 6) Vision + Mission */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            {/* Vision */}
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-heading mb-4 lg:mb-6">
                Vision
              </h2>
              <p className="text-base lg:text-lg text-body leading-relaxed">
                To be the trusted firm of choice for individuals and businesses,
                known for quality work, integrity, and dependable results.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-heading mb-4 lg:mb-6">
                Mission
              </h2>
              <p className="text-base lg:text-lg text-body leading-relaxed">
                To deliver legal services diligently and efficiently by offering
                practical solutions, sound judgment, and strong
                representation—supported by a committed and high-performing
                team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Divider />
      </div>

      {/* 7) Core Values */}
      <section className="py-16 lg:py-24 xl:py-28 bg-soft-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-10 lg:mb-14 xl:mb-16">
            Core Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-base lg:text-lg text-heading leading-relaxed"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Divider />
      </div>

      {/* 8) Practice Areas - LAST SECTION */}
      <section id="practice-areas" className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-xs lg:text-sm uppercase tracking-wider text-body mb-4 lg:mb-6">
            Practice Areas
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading mb-4 lg:mb-6">
            Explore Our Practice Areas
          </h2>

          <p className="text-base lg:text-lg text-body mb-10 lg:mb-14 xl:mb-16 leading-relaxed">
            Our services are delivered through the following practice areas:
          </p>

          {/* Interactive list */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-x-12 lg:gap-y-8 mb-10 lg:mb-14">
            {practiceAreas.map((area) => (
              <Link
                key={area.id}
                href={`/practice-areas/${area.id}`}
                className="font-serif-editorial text-lg lg:text-xl text-heading leading-relaxed hover:underline underline-offset-4 transition-all"
              >
                {area.title}
              </Link>
            ))}
          </div>

          {/* Bottom CTA Bar */}
          <Link href="/practice-areas">
            <div className="bg-soft-blue h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12 hover:bg-soft-blue transition-colors group cursor-pointer">
              <span className="font-bold text-heading text-base lg:text-lg flex items-center gap-3">
                View All Practice Areas
                <ArrowRight className="w-5 h-5 motion-safe:group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
