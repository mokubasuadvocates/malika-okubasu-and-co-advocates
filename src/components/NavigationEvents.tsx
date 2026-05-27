"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationEventsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstMount = useRef(true);
  const isPopState = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    // Skip scroll on initial load since browser handles it,
    // EXCEPT on the homepage where we force scroll to top to fix refresh bug.
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if (pathname === "/") {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
        if (!window.location.hash) {
          window.scrollTo(0, 0);
          setTimeout(() => window.scrollTo(0, 0), 50);
        }
      }
      return;
    }

    if (isPopState.current) {
      // Browser handles scroll restoration for back/forward
      isPopState.current = false;
      return;
    }

    // Don't scroll if navigating to a hash link on the same page
    if (window.location.hash) {
      return;
    }

    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const behavior = mediaQuery.matches ? "instant" : "smooth";

    // Use a short timeout to allow DOM to update during page transition
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: behavior as ScrollBehavior,
      });
    }, 50);

    return () => clearTimeout(timeout);
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
