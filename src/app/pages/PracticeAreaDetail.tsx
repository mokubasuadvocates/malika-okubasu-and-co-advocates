import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Button } from '../components/Button';

export function PracticeAreaDetail() {
  // Mock data - in a real app, this would come from a CMS or API
  const practiceArea = {
    title: 'Corporate And Commercial',
    description: 'Strategic legal counsel for business transactions, mergers, acquisitions, and corporate governance.',
    strapline: 'Practical advice. Strong representation. Clear outcomes.',
    overview: [
      'Our Corporate and Commercial practice provides comprehensive legal support to businesses across all stages of their lifecycle. From formation and fundraising to mergers, acquisitions, and restructuring, we deliver strategic counsel that aligns with your business objectives.',
      'We work closely with directors, shareholders, and management teams to navigate complex regulatory environments, negotiate favorable terms, and structure transactions that create value. Our approach combines legal precision with commercial pragmatism, ensuring that our advice translates into actionable business strategies.',
    ],
    services: [
      'Company formation and corporate structuring',
      'Mergers and acquisitions',
      'Private equity and venture capital transactions',
      'Joint ventures and strategic partnerships',
      'Corporate governance and compliance',
      'Shareholder agreements and disputes',
      'Commercial contracts and negotiations',
      'Regulatory advice and licensing',
    ],
    contacts: [
      {
        name: 'Malika Okubasu',
        role: 'Managing Partner',
        location: 'Nairobi, Kenya',
        phone: '+254 000 111 222',
        email: 'malika@malikaokubasu.com',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'Johnson Gichuhi Bosire',
        role: 'Advocate',
        location: 'Nairobi, Kenya',
        phone: '+254 000 111 222',
        email: 'info@malikaokubasu.com',
        image: '/images/team-members/johnson-gichuhi-bosire.jpeg',
      },
    ],
    insights: [
      {
        title: 'Navigating Cross-Border M&A in East Africa',
        tag: 'Corporate',
        author: 'Malika Okubasu',
        date: 'January 15, 2026',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      },
      {
        title: 'Corporate Governance Best Practices for Startups',
        tag: 'Governance',
        author: 'Johnson Gichuhi Bosire',
        date: 'January 8, 2026',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
      },
    ],
  };
  
  return (
    <div className="lg:pt-0 pt-[72px]">
      {/* Hero */}
      <section className="relative bg-gray-900 py-16 lg:py-20">
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
              <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                <Link href="/practice-areas" className="hover:text-white">Practice Areas</Link>
                <span>/</span>
                <span className="text-white/90">{practiceArea.title}</span>
              </div>
              
              <div className="text-xs uppercase tracking-wider text-white/60 mb-3">
                Practice Area
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {practiceArea.title}
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button variant="solid">Request a Consultation</Button>
              <Button variant="text" className="text-white hover:text-white/80">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strapline */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#D7DEE7]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#0B1E3A] text-center">
            {practiceArea.strapline}
          </h2>
        </div>
      </section>
      
      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {practiceArea.overview.map((paragraph, index) => (
              <p key={index} className="text-lg text-[#5B6676] leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 lg:py-24 bg-[#F2F4F7]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-8">
            We provide legal advice and services on
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {practiceArea.services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#0B1E3A] flex-shrink-0 mt-0.5" />
                <span className="text-lg text-[#5B6676]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Contacts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-8">
            Key Contacts
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceArea.contacts.map((contact) => (
              <div key={contact.email} className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#F2F4F7] p-6">
                  <h3 className="text-xl font-bold text-[#0B1E3A] mb-2">
                    {contact.name}
                  </h3>
                  <div className="text-sm text-[#5B6676] mb-1">{contact.role}</div>
                  <div className="text-sm text-[#5B6676] mb-4">{contact.location}</div>
                  
                  <div className="flex flex-col gap-2 text-sm">
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-[#0B1E3A] hover:underline">
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-[#0B1E3A] hover:underline">
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
      <section className="py-16 lg:py-24 bg-[#F2F4F7]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0B1E3A] mb-8">
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
                  <span className="text-xs uppercase tracking-wider text-[#5B6676]">
                    {insight.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1E3A] mb-2 group-hover:underline underline-offset-4">
                  {insight.title}
                </h3>
                <div className="text-sm text-[#5B6676]">
                  {insight.author} • {insight.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-[#0B1E3A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
            Need guidance in {practiceArea.title}?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Request a Consultation
            </Button>
            <Button variant="text" className="text-white hover:text-white/80">
              Email the Firm
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
