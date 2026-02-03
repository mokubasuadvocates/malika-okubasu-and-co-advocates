'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DesktopHeader() {
  const pathname = usePathname();
  
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Practice Areas', path: '/practice-areas' },
    { label: 'Our Team', path: '/team' },
    { label: 'Publications', path: '/publications' },
    { label: 'Get In Touch', path: '/contact' },
  ];
  
  return (
    <header className="sticky top-0 z-50 hidden lg:flex">
      {/* Left brand pillar */}
      <div className="w-[260px] bg-[#0B1E3A] flex items-start px-6 py-6">
        <Link href="/" className="text-white">
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight">Malika Okubasu,</div>
            <div className="text-sm font-bold tracking-tight">& Company Advocates</div>
          </div>
        </Link>
      </div>
      
      {/* Right nav area */}
      <div className="flex-1 bg-white/95 backdrop-blur-sm flex items-center justify-between px-8 border-b border-[#D7DEE7]">
        <nav className="flex items-center gap-12 flex-1">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-serif-editorial text-[17px] tracking-wider hover:underline underline-offset-4 decoration-[#0B1E3A] transition-all ${
                pathname === link.path ? 'underline' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Get In Touch button */}
        <Link href="/contact">
          <button className="border-2 border-[#0B1E3A] bg-white px-6 py-2.5 flex items-center gap-2 hover:bg-[#F2F4F7] transition-colors">
            <span className="text-sm font-sans-primary font-medium">Get In Touch</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
