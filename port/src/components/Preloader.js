"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOTION_CONFIG } from "@/config/motion.config";

/**
 * Preloader â€” Award-winning initial load reveal with initials "DK".
 * Safely checks sessionStorage in useEffect to avoid hydration mismatches or flash of content.
 * Total duration: ~1.4s max.
 */
const Preloader = ({ onComplete }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Check if user already saw preloader in this session
    const hasSeen = sessionStorage.getItem("dk_preloader_seen");
    const prefersReducedMotion = window.matchMedia(
      MOTION_CONFIG.performance.reducedMotionQuery
    ).matches;

    if (hasSeen === "true" || prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    // First time in session: activate preloader
    setShouldShow(true);

    // Prevent body scroll during preloader
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100 in ~1100ms
    const startTime = performance.now();
    const duration = 1100;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          sessionStorage.setItem("dk_preloader_seen", "true");
          document.body.style.overflow = "";
          setTimeout(() => {
            setShouldShow(false);
            if (onComplete) onComplete();
          }, 600); // Wait for exit slide
        }, 180);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0b0f17] text-white selection:bg-cyan-500 selection:text-black"
        >
          {/* Subtle background radial ambient glow */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Central Monogram */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-24 h-24 mb-6 flex items-center justify-center rounded-2xl border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_35px_rgba(6,182,212,0.25)]"
            >
              {/* Animated SVG Monogram Frame */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full p-2 text-cyan-400"
                fill="none"
              >
                <motion.rect
                  x="6"
                  y="6"
                  width="88"
                  height="88"
                  rx="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="360"
                  initial={{ strokeDashoffset: 360 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </svg>

              <span className="absolute font-black tracking-tighter text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-cyan-400">
                DK
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-8"
            >
              Dhvanit Kanabar
            </motion.p>

            {/* Progress Bar & Numeric Counter */}
            <div className="w-56 flex flex-col gap-2">
              <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 tracking-wider">
                <span>INITIALIZING</span>
                <span className="text-cyan-400 font-semibold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
