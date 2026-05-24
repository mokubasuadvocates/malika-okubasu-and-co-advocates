"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationEventsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Skip scroll on initial load since browser handles it
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Don't scroll if navigating to a hash link on the same page
    if (window.location.hash) {
      return;
    }

    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const behavior = mediaQuery.matches ? "instant" : "smooth";

    window.scrollTo({
      top: 0,
      behavior: behavior as ScrollBehavior,
    });
  }, [pathname, searchParams]);

  return null;
}

export function NavigationEvents() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsInner />
    </Suspense>
  );
}
