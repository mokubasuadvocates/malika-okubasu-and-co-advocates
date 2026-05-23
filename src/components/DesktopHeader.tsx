"use client";

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

export function DesktopHeader() {
  const pathname = usePathname();
  const isPracticeActive = pathname === "/practice-areas" || pathname.startsWith("/practice-areas/");

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));

  return (
    <header className="sticky top-0 z-50 hidden bg-white shadow-[0_10px_30px_rgba(0,62,99,0.08)] lg:block">
      <div className="bg-[linear-gradient(90deg,#002f4d_0%,#003e63_55%,#0b5f8f_100%)] text-white">
        <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-between gap-6 px-6 text-[13px] lg:px-12">
          <div className="flex min-w-0 items-center gap-6">
            {utilityItems.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-gold-hover"
              >
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
            <span className="flex min-w-0 items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="truncate">
                5th Avenue Suites Ngong Road, Suite No. 6 4th Floor
              </span>
            </span>
          </div>

          <a
            href={OFFICIAL_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Malika Okubasu & Company Advocates on LinkedIn"
            className="rounded-full p-1 text-white transition-colors hover:text-gold-hover"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-b border-[rgba(0,62,99,0.12)] bg-white">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center gap-8 px-6 lg:px-12">
          <Link
            href="/"
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
              data-active={pathname === "/"}
              className="nav-underline text-[15px] font-bold text-navy transition-colors hover:text-gold"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              data-active={isActive("/about-us")}
              className="nav-underline text-[15px] font-bold text-navy transition-colors hover:text-gold"
            >
              About Us
            </Link>

            <div className="group relative">
              <Link
                href="/practice-areas"
                aria-haspopup="true"
                data-active={isPracticeActive}
                className="nav-underline flex items-center gap-1 text-[15px] font-bold text-navy transition-colors hover:text-gold"
              >
                Practice Areas
                <ChevronDown
                  className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  aria-hidden="true"
                />
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full w-[420px] max-w-[calc(100vw-2rem)] -translate-x-1/2 translate-y-3 rounded-lg border border-[rgba(0,62,99,0.12)] bg-white p-3 opacity-0 shadow-[0_18px_45px_rgba(0,47,77,0.16)] transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-2 group-focus-within:opacity-100">
                <div className="border-b border-[rgba(0,62,99,0.1)] px-3 pb-2 text-xs font-bold uppercase text-gold">
                  Legal Services
                </div>
                <div className="grid gap-1 pt-2">
                  {practiceLinks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="rounded-md px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-soft-bg hover:text-gold focus-visible:bg-soft-bg focus-visible:text-gold"
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
                data-active={isActive(link.path)}
                className="nav-underline text-[15px] font-bold text-navy transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,62,99,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
