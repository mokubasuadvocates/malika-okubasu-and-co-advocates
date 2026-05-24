"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Get scroll position from multiple fallbacks for cross-browser reliability
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate total scrollable height safely
      const documentHeight = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        document.body.offsetHeight, 
        document.documentElement.offsetHeight,
        document.body.clientHeight, 
        document.documentElement.clientHeight
      );
      
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      
      // Calculate percentage
      const currentProgress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    
    // Initial call
    updateProgress();
    
    // Fallback: update again after hydration/layout stabilizes
    const timeoutId = setTimeout(updateProgress, 500);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed top-0 left-0 w-full h-1.5 z-[100] pointer-events-none"
    >
      <div 
        className="h-full bg-gold transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

