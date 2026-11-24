"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgressBar â€” Top viewport progress indicator with glowing cyan/teal gradient.
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[9990] pointer-events-none origin-left"
      aria-hidden="true"
    >
      <motion.div
        className="w-full h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgressBar;
