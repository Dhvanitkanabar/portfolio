"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MOTION_CONFIG } from "@/config/motion.config";

let globalLenis = null;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * SmoothScrollProvider â€” unified RAF loop with Lenis and GSAP ScrollTrigger.
 * Eliminates redundant RAF loops and locks smooth frame synchronization.
 */
const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      MOTION_CONFIG.performance.reducedMotionQuery
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: MOTION_CONFIG.scroll.duration,
      easing: MOTION_CONFIG.scroll.easing,
      touchMultiplier: MOTION_CONFIG.scroll.touchMultiplier,
      infinite: false,
      smoothWheel: MOTION_CONFIG.scroll.smoothWheel,
    });

    globalLenis = lenis;

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Single unified GSAP RAF ticker loop driving Lenis
    const tickerUpdate = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    // lagSmoothing(0) ensures no jumpy catches after background tab or lag spikes
    gsap.ticker.lagSmoothing(0);

    // Initial ScrollTrigger refresh once DOM is settled
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      globalLenis = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
};

export { globalLenis };
export default SmoothScrollProvider;
