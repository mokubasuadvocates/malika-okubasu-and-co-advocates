'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { Footer } from './Footer';
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton';
import { ScrollToTopButton } from './ScrollToTopButton';
import { ScrollRestoration } from './ScrollRestoration';

export function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isEmbed = pathname?.startsWith('/embed');

  if (isEmbed) {
    return (
      <main className="min-h-screen bg-white">
        {children}
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:font-bold focus:rounded-sm"
      >
        Skip to main content
      </a>
      <ScrollRestoration />
      <DesktopHeader />
      <MobileHeader />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
