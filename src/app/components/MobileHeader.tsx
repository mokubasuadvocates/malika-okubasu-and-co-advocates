"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Practice Areas", path: "/practice-areas" },
    { label: "Our Team", path: "/team" },
    { label: "Publications", path: "/publications" },
    { label: "Get In Touch", path: "/contact" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex border-b border-brand-border bg-white shadow-sm lg:hidden">
        <div className="flex-1 px-5 py-4">
          <Link href="/" className="flex items-center gap-3 text-heading">
            <img
              src="/images/Malika-Okubasu-Logo.jpg"
              alt="Malika Okubasu & Company Advocates"
              className="h-8 w-auto"
            />
            <div className="leading-tight">
              <div className="text-base font-bold tracking-tight">
                Malika Okubasu,
              </div>
              <div className="text-xs font-bold tracking-tight">
                & Company Advocates
              </div>
            </div>
          </Link>
        </div>

        {/* Menu button segment */}
        <div className="flex w-[72px] items-center justify-center bg-soft-blue">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-link"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-white pt-[72px] lg:hidden"
          onClick={(e) => {
            // Close if clicking the background
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <nav className="flex flex-1 flex-col gap-6 px-8 py-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-sans-primary font-bold tracking-tight text-heading transition-colors hover:text-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
