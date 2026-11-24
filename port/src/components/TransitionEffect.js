import React from "react";
import { motion } from "framer-motion";

/**
 * TransitionEffect â€” Elegant first-load curtain unmask.
 * Excludes disruptive route-change curtains per user requirement.
 */
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-cyan-600 pointer-events-none"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark dark:bg-light pointer-events-none"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.12, duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      />
    </>
  );
};

export default TransitionEffect;
