'use client';

import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Practice Areas', path: '/practice-areas' },
    { label: 'Our Team', path: '/team' },
    { label: 'Publications', path: '/publications' },
    { label: 'Get In Touch', path: '/contact' },
  ];
  
  return (
    <footer className="bg-[#0B1E3A] text-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed text-white/80">
              Malika Okubasu & Company Advocates is a leading law firm providing comprehensive legal solutions to complex business challenges. We combine deep expertise with practical insight to deliver exceptional results for our clients.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-white/80 hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2.5 text-sm text-white/80">
              <p>Kampala, Uganda</p>
              <a href="tel:+256123456789" className="hover:text-white hover:underline transition-all">
                +256 123 456 789
              </a>
              <p>P.O. Box 12345, Kampala</p>
              <a href="mailto:info@malikaokubasu.com" className="hover:text-white hover:underline transition-all">
                info@malikaokubasu.com
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-all mt-2"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hover:underline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Malika Okubasu & Company Advocates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
