"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export type GsapRevealProps = {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: boolean;
  once?: boolean;
  mobileMode?: "none" | "fade" | "fade-up";
  desktopMode?: "fade" | "fade-up";
  disabledOnLowBandwidth?: boolean;
  as?: React.ElementType;
};

export function GsapReveal({
  children,
  className = "",
  staggerChildren = false,
  once = true,
  mobileMode = "fade-up",
  desktopMode = "fade-up",
  disabledOnLowBandwidth = true,
  as: Component = "div",
}: GsapRevealProps) {
  const container = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Progressive enhancement: Check network conditions
    if (disabledOnLowBandwidth && typeof navigator !== "undefined" && "connection" in navigator) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const conn = (navigator as any).connection;
      if (
        conn.saveData === true ||
        conn.effectiveType === "slow-2g" ||
        conn.effectiveType === "2g"
      ) {
        setShouldAnimate(false);
      }
    }
    
    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setShouldAnimate(false);
    }
  }, [disabledOnLowBandwidth]);

  useGSAP(() => {
    if (!shouldAnimate || !container.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(max-width: 767px)"
      },
      (context) => {
        const { isDesktop, isTablet, isMobile } = context.conditions as {
          isDesktop: boolean;
          isTablet: boolean;
          isMobile: boolean;
        };

        let yOffset = 0;
        let duration = 0.5;
        let stagger = 0;

        if (isDesktop) {
          yOffset = desktopMode === "fade-up" ? 14 : 0;
          duration = 0.5;
          stagger = staggerChildren ? 0.08 : 0;
        } else if (isTablet) {
          yOffset = desktopMode === "fade-up" ? 10 : 0;
          duration = 0.4;
          stagger = staggerChildren ? 0.06 : 0;
        } else if (isMobile) {
          if (mobileMode === "none") return;
          yOffset = mobileMode === "fade-up" ? 8 : 0;
          duration = 0.35;
          stagger = staggerChildren ? 0.04 : 0;
        }

        const targets = staggerChildren 
          ? gsap.utils.toArray(container.current!.children) 
          : container.current;

        gsap.from(targets, {
          opacity: 0,
          y: yOffset,
          duration: duration,
          stagger: stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            once: once,
          },
        });
      }
    );

    return () => mm.revert();
  }, { scope: container, dependencies: [shouldAnimate, staggerChildren, once, mobileMode, desktopMode] });

  return (
    <Component ref={container} className={className}>
      {children}
    </Component>
  );
}
