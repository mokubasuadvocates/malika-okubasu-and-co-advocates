import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import {
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/constants/seo";

interface TeamProfileProps {
  id: string;
}

export function TeamProfile({ id }: TeamProfileProps) {
  const profiles = {
    "brenton-okubasu": {
      name: "Brenton Okubasu",
      role: "Founding Partner (On leave of absence), Malika Okubasu and Company Advocates",
      location: "Nairobi, Kenya",
      email: "legal@mokubasuadvocates.com",
      phone: "+254 721 789 389 / +254 141 397 048",
      linkedin: "https://www.linkedin.com/in/brenton-o-a044b154/",
      image: "/images/team-members/brenton-okubasu.jpeg",
      bio: [
        "Brenton Okubasu is an Advocate of the High Court of Kenya with a strong background in law, corporate governance, privacy, fraud examination, and intellectual property.",
        "He holds a Bachelor of Laws degree from the University of Nairobi, where he graduated with Second Class Upper Division honours. He is also a Certified Fraud Professional, a Certified Information Privacy Professional/Europe (CIPP/E), a Fellow of Corporate Governance of the UK (FCG), and a registered Patent Agent.",
        "Brenton is currently pursuing a Master’s degree at the University of London, further strengthening his expertise in legal practice, governance, compliance, and emerging areas of law.",
      ],
      expertise: [
        "Corporate Governance",
        "Privacy and Data Protection",
        "Fraud Examination",
        "Intellectual Property",
        "Compliance",
        "Legal Advisory Services",
      ],
      experience: [
        {
          title: "Founder and Consulting Partner",
          organization: "Malika Okubasu & Company Advocates",
          period: "2024 - Present",
        },
        {
          title: "Legal Consultant",
          organization: "Private Practice",
          period: "2020 - 2024",
        },
      ],
      education: [
        "LL.B, University of Nairobi",
        "Certified Fraud Professional",
        "Certified Information Privacy Professional/Europe (CIPP/E)",
        "Fellow of Corporate Governance of the UK (FCG)",
        "Registered Patent Agent",
        "LL.M (in progress), University of London",
      ],
    },
    "oduor-khamati": {
      name: "Oduor Khamati",
      role: "Managing Partner, Malika Okubasu and Company Advocates",
      location: "Nairobi, Kenya",
      email: "oduor.khamati@mokubasuadvocates.com",
      phone: "+254 717 259 196 / +254 141 397 048",
      linkedin: "https://www.linkedin.com/in/oduorkhamati/",
      image: "/images/team-members/oduor-khamati.jpeg",
      bio: [
        "Oduor Khamati is an Advocate of the High Court of Kenya. He holds a Bachelor of Laws degree from the University of Nairobi, where he graduated with Second Class Upper Division honours. His legal training provides him with a strong foundation in legal research, advisory work, drafting, and professional legal practice.",
      ],
      expertise: [
        "Commercial Litigation",
        "Corporate Advisory",
        "Contract Drafting and Negotiation",
        "Regulatory Compliance",
        "Corporate Governance",
      ],
      experience: [
        {
          title: "Managing Partner",
          organization: "Malika Okubasu & Company Advocates",
          period: "2023 - Present",
        },
        {
          title: "Advocate",
          organization: "Private Practice",
          period: "2018 - 2023",
        },
      ],
      education: [
        "LL.B, University of Nairobi",
        "Advocate of the High Court of Kenya",
      ],
    },
    "susan-anyango": {
      name: "Susan Anyango",
      role: "Associate, Malika Okubasu and Company Advocates",
      location: "Nairobi, Kenya",
      email: "susan.anyango@mokubasuadvocates.com",
      phone: "+254 141 397 048",
      linkedin: "https://www.linkedin.com/in/susan-anyango-aciarb-0b861a249/",
      image: "/images/team-members/susan-anyango.jpeg",
      bio: [
        "Susan Anyango Odhiambo is an Advocate of the High Court of Kenya with experience in civil and commercial litigation, real estate, banking and finance law, and commercial and corporate law.",
        "She holds a Bachelor of Laws Degree, Second Class Upper Division, from Jomo Kenyatta University of Agriculture and Technology, awarded in 2023, and was admitted to the Bar in November 2025.",
        "Susan has previously worked as a Legal Intern at Mohammed Muigai LLP and as a Trainee Advocate and Holding Over Associate at Muma and Kanjama Advocates, where she gained practical experience in legal research, drafting, advisory work, and dispute resolution.",
      ],
      expertise: [
        "Civil and Commercial Litigation",
        "Real Estate, Banking and Finance",
        "Corporate Law",
        "Legal Research and Drafting",
        "Dispute Resolution",
      ],
      experience: [
        {
          title: "Advocate",
          organization: "Malika Okubasu & Company Advocates",
          period: "2025 - Present",
        },
        {
          title: "Trainee Advocate / Holding Over Associate",
          organization: "Muma and Kanjama Advocates",
          period: "2024 - 2025",
        },
        {
          title: "Legal Intern",
          organization: "Mohammed Muigai LLP",
          period: "2023 - 2024",
        },
      ],
      education: [
        "LL.B, Jomo Kenyatta University of Agriculture and Technology",
        "Admitted to the Bar, November 2025",
      ],
    },
  };

  const profile = profiles[id as keyof typeof profiles];

  if (!profile) {
    notFound();
  }

  const hasContactButtons = Boolean(
    profile.phone || profile.email || profile.linkedin
  );
  const hasDirectContact = Boolean(profile.phone || profile.email);
  const pageUrl = absoluteUrl(`/our-team/${id}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${pageUrl}#person`,
      name: profile.name,
      jobTitle: profile.role,
      worksFor: {
        "@id": ORGANIZATION_ID,
        "@type": "LegalService",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      url: pageUrl,
      image: absoluteUrl(profile.image),
      description: profile.bio.join(" "),
      ...(profile.expertise?.length ? { knowsAbout: profile.expertise } : {}),
      ...(profile.email ? { email: profile.email } : {}),
      ...(profile.phone ? { telephone: profile.phone } : {}),
      ...(profile.linkedin ? { sameAs: [profile.linkedin] } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Team",
          item: absoluteUrl("/our-team"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: profile.name,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div>
      <JsonLd data={jsonLd} />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-body mb-8">
            <Link href="/our-team" className="hover:text-link">
              Our Team
            </Link>
            <span>/</span>
            <span className="text-heading">{profile.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16">
            {/* Image */}
            <div>
              <Image
                src={profile.image}
                alt=""
                width={400}
                height={533}
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="w-full aspect-[3/4] object-cover lg:hover:grayscale transition-all duration-500"
              />
            </div>

            {/* Identity & Contact */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-4 leading-tight">
                {profile.name}
              </h1>
              <div className="text-xl text-body mb-2">{profile.role}</div>
              <div className="text-lg text-body mb-8">{profile.location}</div>

              {/* Contact Buttons */}
              {hasContactButtons && (
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  {profile.phone && (
                    <Button
                      variant="outline"
                      href={`tel:${profile.phone.split(" / ")[0]}`}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  )}
                  {profile.email && (
                    <Button variant="outline" href={`mailto:${profile.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  )}
                  {profile.linkedin && (
                    <Button variant="outline" href={profile.linkedin}>
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  )}
                </div>
              )}

              {/* Direct contact info */}
              {hasDirectContact && (
                <div className="bg-soft-blue p-6 flex flex-col gap-3">
                  {profile.phone && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-body mb-1">
                        Phone
                      </div>
                      <a
                        href={`tel:${profile.phone.split(" / ")[0]}`}
                        className="text-heading hover:underline"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  )}
                  {profile.email && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-body mb-1">
                        Email
                      </div>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-heading hover:underline break-all"
                      >
                        {profile.email}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 lg:py-24 bg-soft-blue">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-6">
              Biography
            </h2>
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-body leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {profile.expertise?.length ? (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-6">
                Areas of Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.expertise.map((area, index) => (
                  <div
                    key={index}
                    className="font-serif-editorial text-lg text-heading"
                  >
                    • {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Experience */}
      {profile.experience?.length ? (
        <section className="py-16 lg:py-24 bg-soft-blue">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-8">
                Experience
              </h2>
              <div className="flex flex-col gap-6">
                {profile.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-brand-blue pl-6"
                  >
                    <div className="text-lg font-bold text-heading mb-1">
                      {exp.title}
                    </div>
                    <div className="text-base text-body mb-1">
                      {exp.organization}
                    </div>
                    <div className="text-sm text-body">{exp.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Education */}
      {profile.education?.length ? (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-6">
                Education
              </h2>
              <div className="flex flex-col gap-3">
                {profile.education.map((edu, index) => (
                  <div key={index} className="text-lg text-body">
                    • {edu}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
