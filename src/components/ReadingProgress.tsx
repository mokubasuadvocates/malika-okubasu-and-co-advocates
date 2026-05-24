"use client";

import { useEffect, useRef } from "react";

export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!barRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const maxScroll = documentHeight - windowHeight;
      const currentProgress = maxScroll > 0 ? (scrollY / maxScroll) : 0;
      
      // Hardware-accelerated transform for maximum performance
      // Math.min/max ensures it stays between 0 and 1
      const clampedProgress = Math.min(1, Math.max(0, currentProgress));
      barRef.current.style.transform = `scaleX(${clampedProgress})`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none"
    >
      <div 
        ref={barRef}
        className="h-full bg-gold origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
