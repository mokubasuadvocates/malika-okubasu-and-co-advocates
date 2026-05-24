"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ReadingProgress() {
  // useScroll automatically detects the correct scroll container (whether it's the window or a layout wrapper)
  const { scrollYProgress } = useScroll();
  
  // useSpring adds a smooth physics-based interpolation so the bar doesn't stutter on fast scrolls
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[5px] z-[9999] origin-left pointer-events-none"
      style={{ 
        scaleX, 
        backgroundColor: "#bc9b62" 
      }}
    />
  );
}

