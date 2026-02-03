'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { Footer } from './Footer';
import { ScrollToTopButton } from './ScrollToTopButton';
import { ScrollRestoration } from './ScrollRestoration';

export function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      {!isHomePage && (
        <>
          <DesktopHeader />
          <MobileHeader />
        </>
      )}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
