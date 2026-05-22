"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DesktopHeader() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Practice Areas", path: "/practice-areas" },
    { label: "Our Team", path: "/our-team" },
    { label: "Publications", path: "/publications" },
    { label: "Get In Touch", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 hidden border-b border-brand-border bg-white/95 shadow-sm backdrop-blur-sm lg:flex">
      {/* Left brand pillar */}
      <div className="flex w-[260px] items-center gap-4 bg-white px-6 py-5">
        <Link
          href="/"
          aria-label="Malika Okubasu & Company Advocates home"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo-mark.png"
            alt="Malika Okubasu & Company Advocates logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight text-heading">
            <div className="text-lg font-bold tracking-tight">
              Malika Okubasu,
            </div>
            <div className="text-sm font-bold tracking-tight">
              & Company Advocates
            </div>
          </div>
        </Link>
      </div>

      {/* Right nav area */}
      <div className="flex flex-1 items-center justify-between px-8">
        <nav className="flex items-center gap-12 flex-1">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-serif-editorial text-[17px] font-semibold tracking-normal text-heading underline-offset-4 decoration-2 decoration-brand-blue transition-all hover:text-link hover:underline ${
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(`${link.path}/`))
                  ? "text-link underline"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Get In Touch button */}
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-sm border-2 border-brand-blue bg-white px-6 py-2.5 text-link transition-colors hover:bg-light-blue hover:text-link-hover"
        >
          <span className="text-sm font-sans-primary font-medium">
            Get In Touch
          </span>
        </Link>
      </div>
    </header>
  );
}
