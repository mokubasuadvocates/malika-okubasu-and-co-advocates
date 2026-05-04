"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Practice Areas", path: "/practice-areas" },
    { label: "Our Team", path: "/team" },
    { label: "Publications", path: "/publications" },
    { label: "Get In Touch", path: "/contact" },
  ];

  return (
    <footer className="border-t border-brand-border bg-navy-950 py-16 text-white lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">About Us</h3>
            <p className="text-sm leading-relaxed text-soft-blue">
              Malika Okubasu & Company Advocates is a leading law firm providing
              comprehensive legal solutions to complex challenges. We
              combine deep expertise with practical insight to deliver
              exceptional results for our clients.
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
                  className="text-sm text-soft-blue underline-offset-4 transition-all hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="flex flex-col gap-2.5 text-sm text-soft-blue">
              <p>5th Avenue Suites, 5th Avenue Ngong Road.</p>
              <p>Suite No. 6, 4th Floor</p>
              <p>P.O. Box 25926 - 00603.</p>
              <a
                href="tel:+254141397048"
                className="transition-all hover:text-white hover:underline"
              >
                +254 141 397 048
              </a>
              <a
                href="mailto:legal@mokubasuadvocates.com"
                className="transition-all hover:text-link hover:underline"
              >
                legal@mokubasuadvocates.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 transition-all hover:text-link"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hover:underline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-brand-border pt-8 text-center text-sm text-soft-blue">
          <p>
            &copy; {new Date().getFullYear()} Malika Okubasu & Company
            Advocates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
