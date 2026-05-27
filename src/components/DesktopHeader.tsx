"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { OFFICIAL_LINKEDIN_URL } from "@/constants/social";
import { practiceAreas } from "@/constants/practiceAreas";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Our Team", path: "/our-team" },
  { label: "Publications", path: "/publications" },
];

const practiceLinks = practiceAreas.map((area) => ({
  label: area.title,
  path: `/practice-areas/${area.id}`,
}));

const utilityItems = [
  { label: "+254 141 397 048", href: "tel:+254141397048", icon: Phone },
  {
    label: "legal@mokubasuadvocates.com",
    href: "mailto:legal@mokubasuadvocates.com",
    icon: Mail,
  },
];

const compactUtilityItems = [
  { label: "+254 141 397 048", href: "tel:+254141397048", icon: Phone },
  {
    label: "legal@mokubasuadvocates.com",
    href: "mailto:legal@mokubasuadvocates.com",
    icon: Mail,
  },
  {
    label: "Ngong Road, Nairobi",
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
    iconClassName: "text-white",
  },
];

export function DesktopHeader() {
  const pathname = usePathname();
  const isPracticeActive =
    pathname === "/practice-areas" || pathname.startsWith("/practice-areas/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  return (
    <header className="sticky top-0 z-50 hidden bg-white shadow-[0_10px_30px_rgba(0,62,99,0.08)] lg:block">
      <div className="bg-[linear-gradient(90deg,#002f4d_0%,#003e63_55%,#0b5f8f_100%)] text-white">
        <div className="mx-auto flex h-11 max-w-[1280px] items-center overflow-x-auto px-6 py-2 text-[14px] lg:px-12 xl:hidden">
          <div className="flex min-w-max items-center gap-5">
            {compactUtilityItems.map(
              ({
                label,
                href,
                icon: Icon,
                isExternal,
                ariaLabel,
                iconClassName,
              }) => (
                <a
                  key={href}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={ariaLabel}
                  className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-gold-text-hover"
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${iconClassName ?? "text-gold"}`}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </a>
              )
            )}
          </div>
        </div>

        <div className="mx-auto hidden h-10 max-w-[1280px] items-center justify-between gap-6 px-6 text-[14px] lg:px-12 xl:flex">
          <div className="flex min-w-0 items-center gap-6">
            {utilityItems.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold-text-hover"
              >
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
            <a
              href="https://maps.app.goo.gl/enkR4yrDCPXHHYpSA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 items-center gap-2 transition-colors hover:text-gold-text-hover"
            >
              <MapPin
                className="h-4 w-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              <span className="truncate">
                5th Avenue Suites Ngong Road, Suite No. 6 4th Floor
              </span>
            </a>
          </div>

          <a
            href={OFFICIAL_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Malika Okubasu & Company Advocates on LinkedIn"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-sm px-2 py-1 text-white transition-colors hover:text-gold-text-hover"
          >
            <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Malika Okubasu & Co Advocates</span>
          </a>
        </div>
      </div>

      <div className="border-b border-[rgba(0,62,99,0.12)] bg-white">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center gap-8 px-6 lg:px-12">
          <Link
            href="/"
            scroll={true}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                const mediaQuery = window.matchMedia(
                  "(prefers-reduced-motion: reduce)"
                );
                window.scrollTo({
                  top: 0,
                  behavior: mediaQuery.matches ? "instant" : "smooth",
                });
              }
            }}
            aria-label="Malika Okubasu & Company Advocates home"
            className="flex min-w-[245px] items-center gap-3 text-navy"
          >
            <Image
              src="/logo-mark.png"
              alt="Malika Okubasu & Company Advocates logo"
              width={56}
              height={56}
              priority
              className="h-14 w-14 object-contain"
            />
            <span className="leading-tight">
              <span className="block text-lg font-bold">Malika Okubasu</span>
              <span className="block text-sm font-bold">
                & Company Advocates
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="flex flex-1 items-center justify-end gap-7"
          >
            <Link
              href="/"
              scroll={true}
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  const mediaQuery = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  );
                  window.scrollTo({
                    top: 0,
                    behavior: mediaQuery.matches ? "instant" : "smooth",
                  });
                }
              }}
              aria-current={pathname === "/" ? "page" : undefined}
              className="nav-underline text-[16px] font-bold text-navy transition-colors hover:text-gold-text"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              aria-current={isActive("/about-us") ? "page" : undefined}
              className="nav-underline text-[16px] font-bold text-navy transition-colors hover:text-gold-text"
            >
              About Us
            </Link>

            <div
              className="group relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
                aria-haspopup="menu"
                aria-expanded={isDropdownOpen}
                aria-controls="desktop-practice-dropdown"
                aria-current={isPracticeActive ? "page" : undefined}
                className="nav-underline flex items-center gap-1 text-[16px] font-bold text-navy transition-colors hover:text-gold-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 rounded-sm"
              >
                Practice Areas
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="desktop-practice-dropdown"
                className={`absolute left-1/2 top-full w-[420px] max-w-[calc(100vw-2rem)] -translate-x-1/2 translate-y-3 rounded-lg border border-[rgba(0,62,99,0.12)] bg-white p-3 shadow-[0_18px_45px_rgba(0,47,77,0.16)] transition-all duration-200 ${
                  isDropdownOpen
                    ? "pointer-events-auto translate-y-2 opacity-100 visible"
                    : "pointer-events-none opacity-0 invisible"
                }`}
              >
                <div className="border-b border-[rgba(0,62,99,0.1)] px-3 pb-2 text-sm font-bold uppercase text-gold">
                  Legal Services
                </div>
                <div className="grid gap-1 pt-2">
                  <Link
                    href="/practice-areas"
                    onClick={() => setIsDropdownOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-soft-bg hover:text-gold-text focus-visible:outline-none focus-visible:bg-soft-bg focus-visible:text-gold"
                  >
                    View All Practice Areas
                  </Link>
                  {practiceLinks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className="rounded-md px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-soft-bg hover:text-gold-text focus-visible:outline-none focus-visible:bg-soft-bg focus-visible:text-gold"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className="nav-underline text-[16px] font-bold text-navy transition-colors hover:text-gold-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,62,99,0.18)] transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-gold-text hover:text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
