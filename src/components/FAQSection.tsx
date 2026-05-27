"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Calendar,
  CreditCard,
  Briefcase,
  Scale,
  Home,
  Users,
  UserCheck,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/Button";

type Category =
  | "General"
  | "Consultations"
  | "Fees"
  | "Corporate Law"
  | "Dispute Resolution"
  | "Conveyancing"
  | "Family Law"
  | "Employment Law";

interface FAQItem {
  id: string;
  category: Category;
  question: string;
  answer: React.ReactNode;
}

const CATEGORIES: { label: Category; icon: React.ElementType }[] = [
  { label: "General", icon: HelpCircle },
  { label: "Consultations", icon: Calendar },
  { label: "Fees", icon: CreditCard },
  { label: "Corporate Law", icon: Briefcase },
  { label: "Dispute Resolution", icon: Scale },
  { label: "Conveyancing", icon: Home },
  { label: "Family Law", icon: Users },
  { label: "Employment Law", icon: UserCheck },
];

export const faqs: FAQItem[] = [
  // General
  {
    id: "gen-1",
    category: "General",
    question: "What legal services does the firm provide?",
    answer: (
      <>
        We focus on Corporate and Commercial Law, Dispute Resolution, Real
        Estate and Conveyancing, Employment Law, Family Law, and
        Technology/Intellectual Property Law. View all our{" "}
        <Link
          href="/practice-areas"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          Practice Areas
        </Link>
        .
      </>
    ),
  },
  {
    id: "gen-2",
    category: "General",
    question: "Where is the firm located?",
    answer:
      "Our main office is located in Nairobi, Kenya, at 5th Avenue Suites on Ngong Road (Suite No. 6, 4th Floor).",
  },
  {
    id: "gen-3",
    category: "General",
    question: "Does the firm work with international clients?",
    answer:
      "Yes. We frequently advise both local and international clients on matters concerning Kenyan jurisdiction, cross-border transactions, and regional integration frameworks like the EAC and AfCFTA.",
  },
  {
    id: "gen-4",
    category: "General",
    question: "How can I contact the firm?",
    answer: (
      <>
        You can reach us by phone at +254 141 397 048, via email at
        legal@mokubasuadvocates.com, or through the{" "}
        <Link
          href="/contact"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          contact form
        </Link>{" "}
        on our website.
      </>
    ),
  },

  // Consultations
  {
    id: "cons-1",
    category: "Consultations",
    question: "How do I book a consultation?",
    answer: (
      <>
        You can book a consultation directly through our website&apos;s{" "}
        <Link
          href="/contact"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          Contact page
        </Link>
        , or by contacting our office via phone or email. We aim to respond
        within 24 hours.
      </>
    ),
  },
  {
    id: "cons-2",
    category: "Consultations",
    question: "Are consultations available online?",
    answer:
      "Yes, we offer secure virtual consultations via Microsoft Teams, Zoom, or Google Meet for clients unable to visit our physical offices.",
  },
  {
    id: "cons-3",
    category: "Consultations",
    question: "What should I prepare before a consultation?",
    answer:
      "Please have a brief summary of your legal issue, any relevant contracts, correspondence, or legal documents ready for review to help us understand your situation efficiently.",
  },
  {
    id: "cons-4",
    category: "Consultations",
    question: "How long does a consultation take?",
    answer:
      "An initial consultation typically takes between 45 minutes to an hour, allowing us sufficient time to assess your needs and propose initial strategies.",
  },

  // Fees
  {
    id: "fee-1",
    category: "Fees",
    question: "How are legal fees determined?",
    answer:
      "Legal fees are determined in accordance with the Advocates Remuneration Order, factoring in the complexity, urgency, and specific demands of the matter.",
  },
  {
    id: "fee-2",
    category: "Fees",
    question: "Do you provide fee estimates before work begins?",
    answer:
      "Yes, after our initial consultation and assessment, we provide a clear fee structure and estimate before any substantive legal work commences.",
  },
  {
    id: "fee-3",
    category: "Fees",
    question: "Are consultation fees separate from legal service fees?",
    answer:
      "Yes, initial consultation fees are billed separately. However, if you retain our firm for the matter, we may adjust the overall billing structure depending on our engagement terms.",
  },
  {
    id: "fee-4",
    category: "Fees",
    question: "Can fees vary depending on complexity?",
    answer:
      "Absolutely. Highly complex, urgent, or protracted matters may require specialized resources and extended time, which is reflected in the final fee arrangement.",
  },

  // Corporate Law
  {
    id: "corp-1",
    category: "Corporate Law",
    question: "Do you advise businesses and companies?",
    answer: (
      <>
        Yes, we offer comprehensive{" "}
        <Link
          href="/practice-areas/corporate-commercial"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          corporate advisory services
        </Link>{" "}
        ranging from company formation and corporate governance to mergers,
        acquisitions, and compliance.
      </>
    ),
  },
  {
    id: "corp-2",
    category: "Corporate Law",
    question: "Can you help with contracts and compliance?",
    answer:
      "We draft, review, and negotiate a wide array of commercial contracts and ensure that your business operations comply with all local and national regulatory frameworks.",
  },
  {
    id: "corp-3",
    category: "Corporate Law",
    question: "Do you support startups and established companies?",
    answer:
      "We support businesses at every stage of their lifecycle, offering scalable legal solutions for early-stage startups as well as established corporate entities.",
  },

  // Dispute Resolution
  {
    id: "disp-1",
    category: "Dispute Resolution",
    question: "Do you handle litigation and arbitration?",
    answer: (
      <>
        Yes, our team represents clients across all levels of the Kenyan court
        system as well as in alternative dispute resolution forums like
        arbitration and mediation. See our{" "}
        <Link
          href="/practice-areas/dispute-resolution"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          Dispute Resolution
        </Link>{" "}
        practice.
      </>
    ),
  },
  {
    id: "disp-2",
    category: "Dispute Resolution",
    question: "Can you help resolve disputes before going to court?",
    answer:
      "We strongly advocate for resolving disputes amicably through negotiation, mediation, or arbitration to save time and preserve commercial relationships when possible.",
  },
  {
    id: "disp-3",
    category: "Dispute Resolution",
    question: "What documents should I bring for a dispute matter?",
    answer:
      "You should bring all contracts, email correspondence, notices, and any previous court documents related to the dispute so we can thoroughly evaluate the merits of your case.",
  },

  // Conveyancing
  {
    id: "conv-1",
    category: "Conveyancing",
    question: "Do you handle property transfers?",
    answer: (
      <>
        Yes, we handle the entire property transfer process for both commercial
        and residential real estate, ensuring smooth and legally sound
        transactions. Learn more about our{" "}
        <Link
          href="/practice-areas/real-estate-conveyancing"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          Conveyancing services
        </Link>
        .
      </>
    ),
  },
  {
    id: "conv-2",
    category: "Conveyancing",
    question: "Can you assist with land due diligence?",
    answer:
      "We conduct rigorous due diligence, including official land registry searches and verifying ownership history, to protect you from fraudulent transactions.",
  },
  {
    id: "conv-3",
    category: "Conveyancing",
    question: "What documents are needed for conveyancing?",
    answer:
      "Typically, we require the original title deed, official search certificates, spousal consent (if applicable), land rent/rates clearance certificates, and the parties' identification documents.",
  },

  // Family Law
  {
    id: "fam-1",
    category: "Family Law",
    question: "Do you handle succession and estate planning?",
    answer: (
      <>
        Yes, we assist clients with drafting wills, setting up family trusts,
        and navigating complex probate and administration proceedings under our{" "}
        <Link
          href="/practice-areas/family-law"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          Family Law
        </Link>{" "}
        practice.
      </>
    ),
  },
  {
    id: "fam-2",
    category: "Family Law",
    question: "Do you assist with family-related legal matters?",
    answer:
      "We provide sensitive and professional legal support for family disputes, including matrimonial causes, child custody, and maintenance matters.",
  },
  {
    id: "fam-3",
    category: "Family Law",
    question: "Can consultations be confidential?",
    answer:
      "Absolute confidentiality is the cornerstone of our practice. All information shared during our consultations is strictly protected by advocate-client privilege.",
  },

  // Employment Law
  {
    id: "emp-1",
    category: "Employment Law",
    question: "Do you advise employers and employees?",
    answer:
      "Yes, we provide balanced and practical employment law advisory services to both corporate employers and individual employees.",
  },
  {
    id: "emp-2",
    category: "Employment Law",
    question: "Can you review employment contracts?",
    answer:
      "We draft and review employment contracts, HR manuals, and non-disclosure agreements to ensure compliance with the Employment Act and best practices.",
  },
  {
    id: "emp-3",
    category: "Employment Law",
    question: "Do you handle workplace disputes?",
    answer: (
      <>
        We represent clients in disputes involving unfair termination,
        redundancies, workplace injuries, and claims before the Employment and
        Labour Relations Court. Explore our{" "}
        <Link
          href="/practice-areas/employment-law"
          className="text-navy font-bold hover:text-gold-hover hover:underline transition-colors"
        >
          Employment Law
        </Link>{" "}
        expertise.
      </>
    ),
  },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("General");
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  // Ref array for the category buttons to allow smooth scrolling into view
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = CATEGORIES.findIndex((c) => c.label === activeCategory);
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      // Scroll the active tab into the center of the viewport smoothly
      tabRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeCategory]);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setOpenItemId(null);
  };

  const toggleAccordion = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-24 xl:py-28 bg-[#f8f9fa] border-y border-gray-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left Column: Sticky Context Area */}
          <div className="lg:sticky lg:top-32">
            <div className="mb-5 h-1 w-20 bg-gold" />
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 tracking-tight leading-[1.1]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-body leading-relaxed mb-8">
              Find answers to common questions about our legal services,
              consultations, fees, timelines, and working with our firm.
            </p>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-brand-border">
              <h3 className="text-xl font-bold text-navy mb-3">
                Need advice specific to your matter?
              </h3>
              <p className="text-body mb-6">
                Our team is ready to evaluate your situation and provide clear,
                actionable legal guidance.
              </p>

              {process.env.NEXT_PUBLIC_BOOKINGS_URL ? (
                <Button
                  href={process.env.NEXT_PUBLIC_BOOKINGS_URL}
                  variant="primary"
                  className="w-full justify-center"
                >
                  Book a Consultation
                </Button>
              ) : (
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Contact Our Team
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Interactivity */}
          <div className="flex flex-col min-w-0 w-full">
            {/* Filter Pills */}
            <div className="relative mb-8 lg:mb-10 w-full">
              {/* Right-edge fade gradient for mobile to indicate scrollability */}
              <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none lg:hidden z-10" />

              {/* Mobile: scrollable, Desktop: wrapping */}
              <div
                className="flex overflow-x-auto snap-x pb-4 lg:pb-0 gap-3 px-1 lg:px-0 lg:flex-wrap lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                aria-label="FAQ Categories"
              >
                {CATEGORIES.map((cat, index) => {
                  const isActive = activeCategory === cat.label;
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.label}
                      type="button"
                      ref={(el) => {
                        tabRefs.current[index] = el;
                      }}
                      aria-pressed={isActive}
                      id={`faq-tab-${cat.label}`}
                      onClick={() => handleCategoryChange(cat.label)}
                      className={`
                        flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap snap-center shrink-0 transition-all min-h-[44px]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f9fa]
                        ${
                          isActive
                            ? "bg-navy text-white shadow-md border-transparent ring-1 ring-gold"
                            : "bg-white text-navy border border-gray-200 hover:border-gold hover:bg-gold/5"
                        }
                      `}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 ${isActive ? "text-gold" : "text-navy/70"}`}
                      />
                      {cat.label}
                    </button>
                  );
                })}
                {/* Spacer block so the last item on mobile clears the right fade gradient */}
                <div className="w-4 shrink-0 lg:hidden" aria-hidden="true" />
              </div>
            </div>

            {/* Accordion List */}
            <div
              className="flex flex-col gap-4 w-full"
              id={`faq-panel-${activeCategory}`}
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = openItemId === faq.id;

                  return (
                    <div
                      key={faq.id}
                      className={`transition-all duration-300 w-full rounded-md border ${
                        isOpen
                          ? "bg-white border-transparent border-l-4 border-l-gold shadow-md"
                          : "bg-white border-gray-200 hover:border-gray-300 border-l-4 border-l-transparent"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="flex w-full items-start lg:items-center text-left py-5 px-4 lg:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset rounded-r-md min-h-[44px]"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <span
                          className={`flex-grow font-bold text-lg leading-snug pr-4 transition-colors ${isOpen ? "text-navy" : "text-[#1a202c]"}`}
                        >
                          {faq.question}
                        </span>

                        <div className="flex-shrink-0 mt-0.5 lg:mt-0 ml-auto bg-gray-50 rounded-full p-1 border border-gray-100">
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isOpen
                                ? "rotate-180 text-gold"
                                : "rotate-0 text-navy/60"
                            }`}
                          />
                        </div>
                      </button>

                      <div
                        id={`faq-answer-${faq.id}`}
                        className={`grid transition-all duration-300 ease-in-out px-4 lg:px-6 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 pb-6"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 px-6 bg-white rounded-md border border-gray-200">
                  <p className="text-body text-lg">
                    No FAQs are available under this category yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
