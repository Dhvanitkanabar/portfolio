"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MOTION_CONFIG } from "@/config/motion.config";

/**
 * MagneticButton â€” Wraps any child button/link with fluid magnetic cursor attraction.
 * Gracefully disables on touch devices or reduced motion.
 */
const MagneticButton = ({ children, className = "", strength = 0.35 }) => {
  const ref = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 220, mass: 0.4 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      MOTION_CONFIG.performance.reducedMotionQuery
    ).matches;

    if (isTouch || prefersReducedMotion) {
      setIsDisabled(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isDisabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    if (isDisabled) return;
    x.set(0);
    y.set(0);
  };

  if (isDisabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
