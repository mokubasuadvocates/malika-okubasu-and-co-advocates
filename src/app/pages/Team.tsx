import Link from 'next/link';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Divider } from '../components/Divider';

export function Team() {
  const team = [
    {
      id: 'malika-okubasu',
      name: 'Malika Okubasu',
      role: 'Managing Partner',
      location: 'Kampala',
      phone: '+256 123 456 789',
      email: 'malika@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      id: 'johnson-gichuhi-bosire',
      name: 'Johnson Gichuhi Bosire',
      role: 'Advocate',
      location: 'Nairobi',
      image: '/images/team-members/johnson-gichuhi-bosire.jpeg',
    },
    {
      id: 'david-mukasa',
      name: 'David Mukasa',
      role: 'Senior Associate, Corporate Law',
      location: 'Kampala',
      phone: '+256 123 456 790',
      email: 'david@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
      id: 'sarah-nambi',
      name: 'Sarah Nambi',
      role: 'Associate, Dispute Resolution',
      location: 'Kampala',
      phone: '+256 123 456 791',
      email: 'sarah@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    },
    {
      id: 'james-opio',
      name: 'James Opio',
      role: 'Associate, IP & Technology',
      location: 'Kampala',
      phone: '+256 123 456 792',
      email: 'james@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
    {
      id: 'grace-nakato',
      name: 'Grace Nakato',
      role: 'Associate, Real Estate & Finance',
      location: 'Kampala',
      phone: '+256 123 456 793',
      email: 'grace@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    },
    {
      id: 'peter-ssemakula',
      name: 'Peter Ssemakula',
      role: 'Associate, Employment Law',
      location: 'Kampala',
      phone: '+256 123 456 794',
      email: 'peter@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
  ];
  
  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80"
            alt="Legal team collaboration"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Our Team
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Meet our experienced team of legal professionals committed to delivering exceptional client service and practical solutions.
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
                <div className="bg-[#F2F4F7] p-6 lg:p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-2">
                    {member.name}
                  </h2>
                  <div className="text-base text-[#5B6676] mb-1">{member.role}</div>
                  <div className="text-base text-[#5B6676] mb-6">{member.location}</div>
                  
                  <div className="flex flex-col gap-3">
                    {member.phone && (
                      <a 
                        href={`tel:${member.phone}`} 
                        className="flex items-center gap-2 text-[#0B1E3A] hover:underline underline-offset-4"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="flex items-center gap-2 text-[#0B1E3A] hover:underline underline-offset-4"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{member.email}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#0B1E3A] hover:underline underline-offset-4"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href={`/team/${member.id}`}
                      className="text-[#0B1E3A] font-bold hover:underline underline-offset-4 inline-flex items-center gap-2"
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
