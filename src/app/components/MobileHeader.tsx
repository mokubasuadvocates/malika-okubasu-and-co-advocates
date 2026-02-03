'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Practice Areas', path: '/practice-areas' },
    { label: 'Our Team', path: '/team' },
    { label: 'Publications', path: '/publications' },
    { label: 'Get In Touch', path: '/contact' },
  ];
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  return (
    <>
      {/* Mobile Header Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex bg-[#0B1E3A]">
        <div className="flex-1 px-5 py-4">
          <Link href="/" className="text-white">
            <div className="leading-tight">
              <div className="text-base font-bold tracking-tight">Malika Okubasu,</div>
              <div className="text-xs font-bold tracking-tight">& Company Advocates</div>
            </div>
          </Link>
        </div>
        
        {/* Menu button segment */}
        <div className="w-[72px] bg-[#132B4C] flex items-center justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-[#132B4C] pt-[72px] flex flex-col"
          onClick={(e) => {
            // Close if clicking the background
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <nav className="flex-1 flex flex-col px-8 py-12 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl font-sans-primary font-bold tracking-tight hover:opacity-80 transition-opacity"
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
