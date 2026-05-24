"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { OFFICIAL_LINKEDIN_URL } from "@/constants/social";
import { practiceAreas } from "@/constants/practiceAreas";

const mainLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Our Team", path: "/our-team" },
  { label: "Publications", path: "/publications" },
];

const practiceLinks = practiceAreas.map((area) => ({
  label: area.title,
  path: `/practice-areas/${area.id}`,
}));

const mobileContactItems = [
  {
    label: "+254 141 397 048",
    href: "tel:+254141397048",
    icon: Phone,
  },
  {
    label: "legal@mokubasuadvocates.com",
    href: "mailto:legal@mokubasuadvocates.com",
    icon: Mail,
  },
  {
    label: "5th Avenue Suites Ngong Road, Suite No. 6 4th Floor",
    href: "https://maps.app.goo.gl/enkR4yrDCPXHHYpSA",
    icon: MapPin,
    isExternal: true,
    ariaLabel: "View location on Google Maps",
  },
  {
    label: "Malika Okubasu & Co Advocates",
    href: OFFICIAL_LINKEDIN_URL,
    icon: Linkedin,
    isExternal: true,
    ariaLabel: "Malika Okubasu & Company Advocates on LinkedIn",
  },
];

const MOBILE_CONTACT_ROTATION_MS = 5000;

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);
  const [activeContactIndex, setActiveContactIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveContactIndex((index) => (index + 1) % mobileContactItems.length);
    }, MOBILE_CONTACT_ROTATION_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, [activeContactIndex, prefersReducedMotion]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsPracticeOpen(false);
  };

  const showPreviousContactItem = () => {
    setActiveContactIndex(
      (index) =>
        (index - 1 + mobileContactItems.length) % mobileContactItems.length,
    );
  };

  const showNextContactItem = () => {
    setActiveContactIndex((index) => (index + 1) % mobileContactItems.length);
  };

  const activeContactItem = mobileContactItems[activeContactIndex];
  const ActiveContactIcon = activeContactItem.icon;
  const mobileContactContent = (
    <span className="flex min-w-0 items-center justify-center gap-1.5">
      <ActiveContactIcon className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
      <span className="line-clamp-2 text-center text-[11.5px] leading-tight sm:text-[13px]">{activeContactItem.label}</span>
    </span>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[rgba(0,62,99,0.12)] bg-white shadow-[0_10px_30px_rgba(0,62,99,0.08)] lg:hidden">
        <div
          className="relative h-11 bg-[linear-gradient(90deg,#002f4d_0%,#003e63_55%,#0b5f8f_100%)] text-white md:hidden"
        >
          <button
            type="button"
            onClick={showPreviousContactItem}
            className="absolute left-1 top-0 flex h-full w-11 items-center justify-center text-gold/70 transition-colors hover:text-gold-text focus-visible:text-gold"
            aria-label="Show previous contact item"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <div className="flex h-full items-center justify-center px-10 py-2 text-[13px]">
            {activeContactItem.href ? (
              <a
                key={activeContactItem.label}
                href={activeContactItem.href}
                target={activeContactItem.isExternal ? "_blank" : undefined}
                rel={activeContactItem.isExternal ? "noopener noreferrer" : undefined}
                aria-label={activeContactItem.ariaLabel}
                className="mobile-contact-rotator flex max-w-[calc(100vw-5rem)] items-center justify-center transition-colors hover:text-gold-text-hover"
              >
                {mobileContactContent}
              </a>
            ) : (
              <span
                key={activeContactItem.label}
                className="mobile-contact-rotator flex max-w-[calc(100vw-5rem)] items-center justify-center"
              >
                {mobileContactContent}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={showNextContactItem}
            className="absolute right-1 top-0 flex h-full w-11 items-center justify-center text-gold/70 transition-colors hover:text-gold-text focus-visible:text-gold"
            aria-label="Show next contact item"
          >
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden h-11 overflow-x-auto bg-[linear-gradient(90deg,#002f4d_0%,#003e63_55%,#0b5f8f_100%)] text-white md:block">
          <div className="flex min-w-max items-center gap-5 px-4 py-2 text-[14px]">
            <a
              href="tel:+254141397048"
              className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-gold-text-hover"
            >
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span>+254 141 397 048</span>
            </a>
            <a
              href="mailto:legal@mokubasuadvocates.com"
              className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-gold-text-hover"
            >
              <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span>legal@mokubasuadvocates.com</span>
            </a>
            <a
              href="https://maps.app.goo.gl/enkR4yrDCPXHHYpSA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View location on Google Maps"
              className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-gold-text-hover"
            >
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span>Ngong Road, Nairobi</span>
            </a>
            <a
              href={OFFICIAL_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Malika Okubasu & Company Advocates on LinkedIn"
              className="flex items-center gap-1.5 whitespace-nowrap text-white transition-colors hover:text-gold-text-hover"
            >
              <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Malika Okubasu & Co Advocates</span>
            </a>
          </div>
        </div>

        <div className="flex h-[72px] items-center justify-between bg-white px-4">
          <Link
            href="/"
            aria-label="Malika Okubasu & Company Advocates home"
            className="flex min-w-0 items-center gap-3 text-navy"
            onClick={closeMenu}
          >
            <Image
              src="/logo-mark.png"
              alt="Malika Okubasu & Company Advocates logo"
              width={44}
              height={44}
              priority
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-base font-bold">
                Malika Okubasu
              </span>
              <span className="block truncate text-sm font-bold">
                & Company Advocates
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white transition-colors hover:bg-gold"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-primary-navigation"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      <div
        id="mobile-primary-navigation"
        className={`fixed inset-x-0 bottom-0 top-[116px] z-40 overflow-y-auto bg-white px-5 py-6 shadow-[0_20px_45px_rgba(0,47,77,0.18)] transition-all duration-200 lg:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "pointer-events-none -translate-y-3 opacity-0 invisible"
        }`}
      >
        <nav aria-label="Mobile primary navigation" className="flex flex-col gap-2">
          {mainLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              aria-current={isActive(link.path) ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-xl font-bold transition-colors hover:bg-soft-bg hover:text-gold-text ${
                isActive(link.path) ? "text-gold bg-soft-bg" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="rounded-lg border border-[rgba(0,62,99,0.12)]">
            <div className="flex items-center">
              <Link
                href="/practice-areas"
                onClick={closeMenu}
                className="flex-1 px-3 py-3 text-xl font-bold text-navy transition-colors hover:text-gold-text"
              >
                Practice Areas
              </Link>
              <button
                type="button"
                onClick={() => setIsPracticeOpen((value) => !value)}
                className="mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-navy transition-colors hover:bg-soft-bg hover:text-gold-text"
                aria-label="Toggle practice areas links"
                aria-expanded={isPracticeOpen}
                aria-controls="mobile-practice-areas"
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isPracticeOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              id="mobile-practice-areas"
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isPracticeOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-1 border-t border-[rgba(0,62,99,0.12)] bg-soft-bg p-2">
                  <Link
                    href="/practice-areas"
                    onClick={closeMenu}
                    className="rounded-md px-3 py-2 text-base font-semibold text-navy transition-colors hover:bg-white hover:text-gold-text focus-visible:outline-none focus-visible:bg-white focus-visible:text-gold"
                  >
                    View All Practice Areas
                  </Link>
                  {practiceLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={closeMenu}
                      className="rounded-md px-3 py-2 text-base font-semibold text-navy transition-colors hover:bg-white hover:text-gold-text focus-visible:outline-none focus-visible:bg-white focus-visible:text-gold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {mainLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              aria-current={isActive(link.path) ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-xl font-bold transition-colors hover:bg-soft-bg hover:text-gold-text ${
                isActive(link.path) ? "text-gold bg-soft-bg" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-navy px-5 py-3 text-base font-bold text-white shadow-[0_10px_24px_rgba(0,62,99,0.18)] transition-all motion-safe:hover:-translate-y-0.5 hover:bg-gold"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </>
  );
}
