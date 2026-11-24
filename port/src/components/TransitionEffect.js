import React from "react";
import { motion } from "framer-motion";

/**
 * TransitionEffect — Elegant GPU-accelerated curtain unmask.
 * Uses transform: scaleX to ensure 0 Cumulative Layout Shift (CLS).
 */
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 w-full h-full z-30 bg-cyan-600 pointer-events-none origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ willChange: "transform" }}
      />
      <motion.div
        className="fixed inset-0 w-full h-full z-20 bg-dark dark:bg-light pointer-events-none origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ delay: 0.08, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ willChange: "transform" }}
      />
    </>
  );
};

export default TransitionEffect;
