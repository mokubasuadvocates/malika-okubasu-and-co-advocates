"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function TopLoadingBarInner() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const progressInterval = useRef<NodeJS.Timeout>();
  const fallbackTimeout = useRef<NodeJS.Timeout>();

  const finishProgress = () => {
    setProgress(100);
    clearInterval(progressInterval.current);

    // Hide and reset after a tiny delay so the user sees it hit 100%
    setTimeout(() => {
      setIsNavigating(false);
      setTimeout(() => {
        setProgress(0);
      }, 300); // Wait for opacity fade out
    }, 200);
  };

  useEffect(() => {
    if (isNavigating) {
      finishProgress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Find closest anchor
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.href;
      if (!href) return;

      // Allow modifier keys (opens in new tab)
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

      const isInternal =
        href.startsWith(window.location.origin) || href.startsWith("/");
      const isTargetBlank = target.target === "_blank";
      const isMailto = href.startsWith("mailto:");
      const isTel = href.startsWith("tel:");
      const isWhatsApp = href.includes("wa.me");
      const isDownload = target.hasAttribute("download");

      // Check if it's a hash link on the same page
      const currentUrlWithoutHash = window.location.href.split("#")[0];
      const hrefWithoutHash = href.split("#")[0];
      const isHash =
        target.hash !== "" && currentUrlWithoutHash === hrefWithoutHash;

      if (
        !isInternal ||
        isTargetBlank ||
        isMailto ||
        isTel ||
        isWhatsApp ||
        isHash ||
        isDownload
      ) {
        return;
      }

      if (hrefWithoutHash === currentUrlWithoutHash) {
        // Just jumping around the same page without a hash
        return;
      }

      // Valid internal navigation starts
      setIsNavigating(true);
      setProgress(15);

      // Simulate progress
      clearInterval(progressInterval.current);
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval.current);
            return 90; // Pause at 90% until route actually changes
          }
          return prev + Math.random() * 10;
        });
      }, 300);

      // Fallback: If route change never fires (e.g., error), reset after 5s
      clearTimeout(fallbackTimeout.current);
      fallbackTimeout.current = setTimeout(() => {
        finishProgress();
      }, 5000);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearInterval(progressInterval.current);
      clearTimeout(fallbackTimeout.current);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] h-[3px] w-full pointer-events-none transition-opacity duration-300 ${
        isNavigating ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className="h-full w-full bg-gold origin-left transition-transform ease-out"
        style={{
          transform: `scaleX(${progress / 100})`,
          transitionDuration:
            isNavigating && progress !== 100 ? "300ms" : "200ms",
        }}
      />
    </div>
  );
}

export function TopLoadingBar() {
  return (
    <Suspense fallback={null}>
      <TopLoadingBarInner />
    </Suspense>
  );
}
