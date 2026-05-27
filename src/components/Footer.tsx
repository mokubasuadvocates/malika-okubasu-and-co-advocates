"use client";

import Link from "next/link";
import { Linkedin, MapPin, Mailbox, Phone, Mail } from "lucide-react";
import { OFFICIAL_LINKEDIN_URL } from "@/constants/social";

export function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Practice Areas", path: "/practice-areas" },
    { label: "Our Team", path: "/our-team" },
    { label: "Publications", path: "/publications" },
    { label: "Get In Touch", path: "/contact" },
  ];

  return (
    <footer className="border-t border-gold/30 bg-deep-navy py-16 text-white lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* About Column */}
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">About Us</h3>
            <p className="text-sm leading-relaxed text-white/75">
              Malika Okubasu & Company Advocates is a leading law firm based in Nairobi, Kenya providing
              comprehensive legal solutions to complex business challenges. We
              combine deep expertise with practical insight to deliver exceptional
              results for our clients.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="inline-block text-sm text-white/75 underline-offset-4 transition-all motion-safe:hover:translate-x-1 hover:text-gold-hover hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-white/75">
              <a 
                href="https://maps.app.goo.gl/enkR4yrDCPXHHYpSA"
                target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 transition-all motion-safe:hover:translate-x-1 hover:text-gold-hover hover:underline"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>5th Avenue Suites Ngong Road, Suite No. 6 4th Floor</span>
              </a>
              <div className="flex items-start gap-3">
                <Mailbox className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>P.O. Box 25926 - 00603</span>
              </div>
              <a
                href="tel:+254141397048"
                className="flex items-center gap-3 transition-all motion-safe:hover:translate-x-1 hover:text-gold-hover hover:underline"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 141 397 048</span>
              </a>
              <a
                href="mailto:legal@mokubasuadvocates.com"
                className="flex items-center gap-3 transition-all motion-safe:hover:translate-x-1 hover:text-gold-hover hover:underline"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>legal@mokubasuadvocates.com</span>
              </a>
              <a
                href={OFFICIAL_LINKEDIN_URL}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 transition-all motion-safe:hover:translate-x-1 hover:text-gold-hover hover:underline"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <span>Malika Okubasu & Co Advocates</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/70">
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/privacy-policy" 
              className="transition-colors hover:text-gold-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/30">|</span>
            <Link 
              href="/cookie-policy" 
              className="transition-colors hover:text-gold-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              Cookie Policy
            </Link>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-right">
            <p className="text-xs text-white/50 max-w-md">
              Disclaimer: The information on this website is for general informational purposes only and does not constitute legal advice. Accessing this website does not create an advocate-client relationship.
            </p>
            <p className="copy-protected mt-2">
              &copy; {new Date().getFullYear()} Malika Okubasu & Company Advocates. All rights Reserved.
            </p>
            <p className="text-xs text-white/40">
              Built by{" "}
              <a 
                href="https://www.linkedin.com/in/obiero-michael/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-sm"
              >
                Michael Obiero
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
