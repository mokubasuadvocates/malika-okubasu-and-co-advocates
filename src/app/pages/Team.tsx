import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Divider } from "../components/Divider";

export function Team() {
  const team = [
    {
      id: "brenton-okubasu",
      name: "Brenton Okubasu",
      role: "Founding Partner (On Leave of Absence)",
      location: "Nairobi, Kenya",
      email: "legal@mokubasuadvocates.com",
      phone: "+254 721 789 389 / +254 141 397 048",
      linkedin: "https://www.linkedin.com/in/brenton-o-a044b154/",
      image: "/images/team-members/brenton-okubasu.jpeg",
    },
    {
      id: "oduor-khamati",
      name: "Oduor Khamati",
      role: "Managing Partner",
      location: "Nairobi, Kenya",
      email: "oduor.khamati@mokubasuadvocates.com",
      phone: "+254 717 259 196 / +254 141 397 048",
      linkedin: "https://www.linkedin.com/in/oduorkhamati/",
      image: "/images/team-members/oduor-khamati.jpeg",
    },
    {
      id: "susan-anyango",
      name: "Susan Anyango",
      role: "Advocate of the High Court of Kenya",
      location: "Nairobi, Kenya",
      email: "susan.anyango@mokubasuadvocates.com",
      phone: "+254 141 397 048",
      linkedin: "https://www.linkedin.com/in/susan-anyango-aciarb-0b861a249/",
      image: "/images/team-members/susan-anyango.jpeg",
    },
  ];

  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80"
            alt="Legal team collaboration"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-6 leading-tight tracking-tight">
              Our Team
            </h1>
            <p className="text-lg lg:text-xl text-body leading-relaxed">
              Meet our experienced team of legal professionals committed to
              delivering exceptional client service and practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member) => (
              <div key={member.id} className="group">
                {/* Portrait */}
                <div className="overflow-hidden mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Panel */}
                <div className="bg-soft-blue p-6 lg:p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-2">
                    {member.name}
                  </h2>
                  <div className="text-base text-body mb-1">{member.role}</div>
                  <div className="text-base text-body mb-6">
                    {member.location}
                  </div>

                  <div className="flex flex-col gap-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-heading hover:underline underline-offset-4"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-heading hover:underline underline-offset-4"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-heading hover:underline underline-offset-4"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/team/${member.id}`}
                      className="text-heading font-bold hover:underline underline-offset-4 inline-flex items-center gap-2"
                    >
                      View Profile
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
