import Link from 'next/link';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '../components/Button';

interface TeamProfileProps {
  id: string;
}

export function TeamProfile({ id }: TeamProfileProps) {
  const profiles = {
    'malika-okubasu': {
      name: 'Malika Okubasu',
      role: 'Managing Partner',
      location: 'Kampala',
      phone: '+256 123 456 789',
      email: 'malika@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      bio: [
        'Malika Okubasu is the Managing Partner at Malika Okubasu & Company Advocates, bringing over 15 years of experience in corporate and commercial law. She advises leading businesses across East Africa on complex transactions, regulatory compliance, and corporate governance.',
        'Before founding the firm, Malika practiced at international law firms in London and Nairobi, where she developed expertise in cross-border mergers and acquisitions, private equity, and commercial litigation. Her clients value her strategic approach and ability to deliver practical solutions to complex legal challenges.',
      ],
      expertise: [
        'Corporate and Commercial Law',
        'Mergers and Acquisitions',
        'Private Equity and Venture Capital',
        'Corporate Governance',
        'Regulatory Compliance',
        'Cross-Border Transactions',
      ],
      experience: [
        {
          title: 'Managing Partner',
          organization: 'Malika Okubasu & Company Advocates',
          period: '2020 - Present',
        },
        {
          title: 'Senior Associate',
          organization: 'International Law Firm, Nairobi',
          period: '2016 - 2020',
        },
        {
          title: 'Associate',
          organization: 'Leading Law Firm, London',
          period: '2012 - 2016',
        },
      ],
      education: [
        'LL.M in Corporate Law, University of London',
        'LL.B (Hons), Makerere University',
        'Postgraduate Diploma in Legal Practice',
      ],
    },
    'johnson-gichuhi-bosire': {
      name: 'Johnson Gichuhi Bosire',
      role: 'Advocate',
      location: 'Nairobi, Kenya',
      image: '/images/team-members/johnson-gichuhi-bosire.jpeg',
      bio: [
        'Johnson Gichuhi Bosire is an Advocate with experience in litigation, tax law, employment and labour relations, public interest litigation, and regulatory compliance.',
        'He has worked with NGOs, community organizations, and corporate clients, contributing to legal research, policy interpretation, and governance-related initiatives.',
        'His practice combines legal expertise with a strong interest in human rights, sustainability, and the rule of law in Kenya.',
      ],
      expertise: [
        'Litigation',
        'Tax Law',
        'Employment and Labour Relations',
        'Public Interest Litigation',
        'Regulatory Compliance',
      ],
    },
  };

  const profile = profiles[id as keyof typeof profiles] ?? profiles['malika-okubasu'];
  const hasContactButtons = Boolean(profile.phone || profile.email || profile.linkedin);
  const hasDirectContact = Boolean(profile.phone || profile.email);
  
  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#5B6676] mb-8">
            <Link href="/team" className="hover:text-[#0B1E3A]">Our Team</Link>
            <span>/</span>
            <span className="text-[#0B1E3A]">{profile.name}</span>
          </div>
          
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16">
            {/* Image */}
            <div>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full aspect-[3/4] object-cover grayscale"
              />
            </div>
            
            {/* Identity & Contact */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0B1E3A] mb-4 leading-tight">
                {profile.name}
              </h1>
              <div className="text-xl text-[#5B6676] mb-2">{profile.role}</div>
              <div className="text-lg text-[#5B6676] mb-8">{profile.location}</div>
              
              {/* Contact Buttons */}
              {hasContactButtons && (
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  {profile.phone && (
                    <Button variant="outline" href={`tel:${profile.phone}`}>
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
                <div className="bg-[#F2F4F7] p-6 flex flex-col gap-3">
                  {profile.phone && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#5B6676] mb-1">
                        Phone
                      </div>
                      <a href={`tel:${profile.phone}`} className="text-[#0B1E3A] hover:underline">
                        {profile.phone}
                      </a>
                    </div>
                  )}
                  {profile.email && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#5B6676] mb-1">
                        Email
                      </div>
                      <a href={`mailto:${profile.email}`} className="text-[#0B1E3A] hover:underline break-all">
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
      <section className="py-16 lg:py-24 bg-[#F2F4F7]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-6">
              Biography
            </h2>
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-[#5B6676] leading-relaxed mb-6">
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
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-6">
                Areas of Expertise
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {profile.expertise.map((area, index) => (
                  <div key={index} className="font-serif-editorial text-lg text-[#0B1E3A]">
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
        <section className="py-16 lg:py-24 bg-[#F2F4F7]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-8">
                Experience
              </h2>
              <div className="flex flex-col gap-6">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[#0B1E3A] pl-6">
                    <div className="text-lg font-bold text-[#0B1E3A] mb-1">
                      {exp.title}
                    </div>
                    <div className="text-base text-[#5B6676] mb-1">
                      {exp.organization}
                    </div>
                    <div className="text-sm text-[#5B6676]">
                      {exp.period}
                    </div>
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
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-6">
                Education
              </h2>
              <div className="flex flex-col gap-3">
                {profile.education.map((edu, index) => (
                  <div key={index} className="text-lg text-[#5B6676]">
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
