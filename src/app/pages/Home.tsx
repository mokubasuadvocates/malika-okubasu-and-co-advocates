'use client';

import Link from 'next/link';
import { ArrowRight, Mail, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { useState, useEffect } from 'react';

export function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  const practiceAreas = [
    'Corporate And Commercial',
    'Dispute Resolution',
    'Media, Technology & Intellectual Property',
    'Energy, Natural Resources Climate Change',
    'Real Estate, Banking & Finance',
    'Family Law',
    'Policy & Legislative Drafting',
    'Regional Integration',
    'Employment & Labour Relations',
  ];
  
  const expectations = [
    {
      title: 'Clear guidance and practical advice you can act on',
      description: 'We translate complex legal issues into actionable strategies'
    },
    {
      title: 'Responsive communication and regular updates',
      description: 'Stay informed at every stage of your legal matter'
    },
    {
      title: 'Strong representation and well-prepared advocacy',
      description: 'Thorough preparation and strategic thinking in every case'
    },
    {
      title: 'Professionalism, confidentiality, and attention to detail',
      description: 'Your trust is our highest priority'
    }
  ];
  
  const featuredInsights = [
    {
      id: 1,
      category: 'Corporate',
      title: 'Navigating Cross-Border M&A in East Africa',
      excerpt: 'An in-depth analysis of the regulatory landscape and practical considerations for cross-border mergers and acquisitions.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
    },
    {
      id: 2,
      category: 'Governance',
      title: 'Corporate Governance Best Practices for Startups',
      excerpt: 'Essential governance frameworks and compliance requirements for early-stage technology companies.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
    },
    {
      id: 3,
      category: 'IP & Technology',
      title: 'Protecting Intellectual Property in the Digital Age',
      excerpt: 'Strategic approaches to safeguarding intellectual property rights in an increasingly digital environment.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    },
  ];
  
  const teamPreview = [
    {
      id: 'malika-okubasu',
      name: 'Malika Okubasu',
      role: 'Managing Partner',
      email: 'malika@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      id: 'johnson-gichuhi-bosire',
      name: 'Johnson Gichuhi Bosire',
      role: 'Advocate',
      image: '/images/team-members/johnson-gichuhi-bosire.jpeg',
    },
    {
      id: 'sarah-nambi',
      name: 'Oduor Kevin Khamati',
      role: 'Advocate of the High Court of Kenya',
      linkedin: 'https://www.linkedin.com/in/oduorkhamati/',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    },
    {
      id: 'james-opio',
      name: 'James Opio',
      role: 'Associate, IP & Technology',
      email: 'james@malikaokubasu.com',
      linkedin: 'https://linkedin.com',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
  ];
  
  return (
    <div>
      {/* 1) Premium Hero Section with Overlaid Navigation */}
      <section className="relative h-screen lg:min-h-[700px] bg-[#0B1E3A]">
        {/* Full-bleed Hero Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90"
            alt="Modern corporate architecture"
            className="w-full h-full object-cover grayscale"
          />
          {/* Dark gradient overlay on right side for headline contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1E3A]/40" />
        </div>
        
        {/* Desktop: Overlaid Header + Navigation */}
        <div className="hidden lg:flex absolute top-0 left-0 right-0 z-30 h-[88px] pr-6">
          {/* Left Brand Pillar Block */}
          <div className="w-[280px] bg-[#0B1E3A] h-full flex items-start px-5 py-4">
            <Link href="/" className="text-white">
              <div className="leading-none">
                <div className="text-2xl font-bold tracking-tight leading-[26px]">Malika Okubasu</div>
                <div className="text-[13px] font-semibold tracking-tight leading-[16px] mt-1">& Company Advocates</div>
              </div>
            </Link>
          </div>
          
          {/* Nav Wrap (fill remaining space and center the nav) */}
          <div className="flex-1 bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <nav className="flex items-center gap-12">
              <Link
                href="/"
                className="font-serif-editorial text-[17px] tracking-[0.03em] text-[#0B1E3A] hover:underline underline-offset-4 decoration-2 transition-all"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-serif-editorial text-[17px] tracking-[0.03em] text-[#0B1E3A] hover:underline underline-offset-4 decoration-2 transition-all"
              >
                About Us
              </Link>
              <Link
                href="/practice-areas"
                className="font-serif-editorial text-[17px] tracking-[0.03em] text-[#0B1E3A] hover:underline underline-offset-4 decoration-2 transition-all"
              >
                Practice Areas
              </Link>
              <Link
                href="/team"
                className="font-serif-editorial text-[17px] tracking-[0.03em] text-[#0B1E3A] hover:underline underline-offset-4 decoration-2 transition-all"
              >
                Our Team
              </Link>
              <Link
                href="/publications"
                className="font-serif-editorial text-[17px] tracking-[0.03em] text-[#0B1E3A] hover:underline underline-offset-4 decoration-2 transition-all"
              >
                Publications
              </Link>
            </nav>
          </div>
          
          {/* CTA Wrap (hug content) */}
          <div className="bg-white/90 backdrop-blur-sm flex items-center pr-0">
            <Link href="/contact">
              <Button variant="primary" className="bg-[#0B1E3A] text-white hover:bg-[#132B4C] h-[44px] px-[22px]">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile: Top Header Bar */}
        <div className="lg:hidden absolute top-0 left-0 right-0 z-30 flex bg-[#0B1E3A]">
          <div className="flex-1 px-5 py-5">
            <Link href="/" className="text-white">
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight">Malika Okubasu</div>
                <div className="text-sm font-bold tracking-tight">& Company Advocates</div>
              </div>
            </Link>
          </div>
          
          {/* Hamburger Menu Segment */}
          <div className="w-[72px] bg-[#132B4C] flex items-center justify-center">
            <button className="text-white p-2" aria-label="Menu" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Desktop: Headline Overlay Panel (Right Side) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] bg-[#0B1E3A]/90 backdrop-blur-sm">
          <div className="flex items-end h-full px-16 xl:px-20 pb-20 xl:pb-24">
            <h1 className="text-white text-5xl xl:text-7xl font-bold leading-[1.05] tracking-tight max-w-[680px]">
              Effective solutions to the most complex legal and business challenges
            </h1>
          </div>
        </div>
        
        {/* Mobile: Hero Image fills space, headline below */}
        <div className="lg:hidden absolute top-[72px] bottom-0 left-0 right-0">
          <div className="relative h-[60%]">
            {/* Image already set at parent level */}
          </div>
          
          {/* Mobile Headline Panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#0B1E3A]/95 backdrop-blur-sm px-6 py-8">
            <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
              Effective solutions to the most complex legal and business challenges
            </h1>
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
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0B1E3A] leading-[1.05]">
                Practice<br />Areas
              </h2>
            </div>
            
            {/* Right: 3-column list */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10 lg:gap-y-8">
              {practiceAreas.map((area) => (
                <div key={area} className="font-serif-editorial text-lg lg:text-xl text-[#0B1E3A] leading-relaxed">
                  {area}
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Bar */}
          <div className="mt-12 lg:mt-16 xl:mt-20 bg-[#F2F4F7] h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12">
            <Link
              href="/practice-areas"
              className="font-bold text-[#0B1E3A] text-base lg:text-lg hover:underline underline-offset-4 transition-all"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>
      
      {/* 3) Firm Snapshot Module */}
      <section className="py-16 lg:py-24 xl:py-28 bg-[#0B1E3A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <div className="text-xs lg:text-sm uppercase tracking-wider text-gray-400 mb-4 lg:mb-6">
                About the Firm
              </div>
              
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                Practical legal support. Clear outcomes.
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 lg:mb-10">
                We provide practical legal support to individuals, institutions, and businesses—built on integrity, professionalism, and a deep understanding of client goals.
              </p>
              
              <div>
                <Link href="/about">
                  <Button variant="outline" className="border-transparent bg-white text-[#0B1E3A] hover:bg-gray-100">Learn About the Firm</Button>
                </Link>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="order-first lg:order-last">
              <div className="relative overflow-hidden rounded-sm border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                  alt="Firm office"
                  className="w-full aspect-[4/3] object-cover grayscale hover:scale-[1.02] transition-transform duration-700"
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
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B1E3A] mb-12 lg:mb-16 xl:mb-20">
            What Clients Can Expect
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-12 xl:gap-x-20 xl:gap-y-16">
            {expectations.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl lg:text-2xl font-bold text-[#0B1E3A] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-base lg:text-lg text-[#5B6676] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Compact CTA Strip */}
          <div className="mt-12 lg:mt-16 xl:mt-20 bg-[#F2F4F7] h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12">
            <Link
              href="/contact"
              className="font-bold text-[#0B1E3A] text-base lg:text-lg hover:underline underline-offset-4 transition-all flex items-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* 5) Featured Insights */}
      <section className="py-16 lg:py-24 xl:py-28 bg-[#0B1E3A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-xs lg:text-sm uppercase tracking-wider text-gray-400 mb-4 lg:mb-6">
            Publications
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 lg:mb-12 xl:mb-16">
            Featured Insights
          </h2>
          
          <div className="flex flex-col gap-0">
            {featuredInsights.map((insight, index) => (
              <div key={insight.id}>
                {index > 0 && <div className="my-6 lg:my-8 border-t border-white/20" />}
                
                <Link
                  href="/publications"
                  className="group block hover:bg-white/5 -mx-4 lg:-mx-6 px-4 lg:px-6 py-4 lg:py-6 transition-all rounded-sm"
                >
                  <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-10">
                    {/* Thumbnail */}
                    <div className="overflow-hidden rounded-sm border border-white/20">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full aspect-[16/10] lg:aspect-square object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="text-xs lg:text-sm uppercase tracking-wider text-gray-400 mb-3">
                        {insight.category}
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:underline underline-offset-4 transition-all leading-snug">
                        {insight.title}
                      </h3>
                      
                      <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                        {insight.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* CTA Bar */}
          <div className="mt-8 lg:mt-12 bg-white/5 h-[72px] lg:h-[80px] flex items-center px-6 lg:px-12 border-t border-white/20">
            <Link
              href="/publications"
              className="font-bold text-white text-base lg:text-lg hover:underline underline-offset-4 transition-all"
            >
              View All Publications
            </Link>
          </div>
        </div>
      </section>
      
      {/* 6) Our Team Preview */}
      <section className="py-16 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <Divider className="mb-12 lg:mb-16" />
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B1E3A] mb-4 lg:mb-6">
            Our Team
          </h2>
          
          <p className="text-lg lg:text-xl text-[#5B6676] mb-10 lg:mb-14 xl:mb-16 leading-relaxed">
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
                <div className="bg-[#F2F4F7] p-5 lg:p-6 rounded-sm">
                  <h3 className="text-lg lg:text-xl font-bold text-[#0B1E3A] mb-1 leading-snug">
                    {member.name}
                  </h3>
                  <div className="text-sm lg:text-base text-[#5B6676] mb-4 leading-relaxed">
                    {member.role}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`} 
                        className="flex items-center gap-2 text-sm lg:text-base text-[#0B1E3A] hover:underline underline-offset-4 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm lg:text-base text-[#0B1E3A] hover:underline underline-offset-4 transition-all"
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
            <Link href="/team">
              <Button variant="outline">View Our Team</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 7) Get In Touch Preview */}
      <section className="py-16 lg:py-24 xl:py-28 bg-[#E8F1F8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 xl:gap-20">
            {/* Left */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B1E3A] mb-4 lg:mb-6 leading-tight">
                Get In Touch
              </h2>
              <p className="text-lg lg:text-xl text-[#5B6676] leading-relaxed mb-10 lg:mb-12">
                We maintain strict confidentiality and respond to all inquiries within 24 hours.
              </p>
              
              {/* Map Placeholder */}
              <div className="w-full h-[280px] lg:h-[320px] rounded-sm border border-[#D7DEE7] overflow-hidden">
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
                  <div className="text-sm font-bold text-[#5B6676] mb-2 uppercase tracking-wider">
                    Phone
                  </div>
                  <a 
                    href="tel:+254000111222" 
                    className="text-lg lg:text-xl text-[#0B1E3A] hover:text-[#132B4C] hover:underline underline-offset-4 transition-all"
                  >
                    +254 000 111 222
                  </a>
                </div>
                
                <div>
                  <div className="text-sm font-bold text-[#5B6676] mb-2 uppercase tracking-wider">
                    Email
                  </div>
                  <a 
                    href="mailto:info@malikaokubasu.com" 
                    className="text-lg lg:text-xl text-[#0B1E3A] hover:text-[#132B4C] hover:underline underline-offset-4 transition-all"
                  >
                    info@malikaokubasu.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm font-bold text-[#5B6676] mb-2 uppercase tracking-wider">
                    Address
                  </div>
                  <p className="text-lg lg:text-xl text-[#5B6676] leading-relaxed">
                    5th Avenue Suites, 5th Avenue Ngong Road.<br />
                    Suite No. 6, 4th Floor<br />
                    P.O. Box 25926 - 00603.
                  </p>
                </div>
              </div>
              
              <Link href="/contact">
                <Button variant="primary" className="bg-[#0B1E3A] text-white hover:bg-[#132B4C]">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#132B4C] z-50 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex bg-[#0B1E3A]">
          <div className="flex-1 px-5 py-5">
            <Link href="/" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight">Malika Okubasu</div>
                <div className="text-sm font-bold tracking-tight">& Company Advocates</div>
              </div>
            </Link>
          </div>
          
          <div className="w-[72px] bg-[#132B4C] flex items-center justify-center">
            <button className="text-white p-2" aria-label="Close" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <nav className="px-8 py-12 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            About Us
          </Link>
          <Link
            href="/practice-areas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Practice Areas
          </Link>
          <Link
            href="/team"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Our Team
          </Link>
          <Link
            href="/publications"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Publications
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </div>
  );
}
