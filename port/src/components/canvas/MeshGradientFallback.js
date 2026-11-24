"use client";
import React from "react";

/**
 * MeshGradientFallback â€” High-performance CSS ambient gradient.
 * Renders instantly for mobile devices, low-power hardware, reduced-motion,
 * or as a graceful fallback during WebGL context loss.
 */
const MeshGradientFallback = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Top right ambient teal orb */}
      <div className="absolute -top-[15%] right-0 w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent blur-[130px] opacity-70 dark:opacity-50 transform-gpu" />

      {/* Center left ambient cyan orb */}
      <div className="absolute top-[35%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-teal-400/10 via-cyan-600/5 to-transparent blur-[140px] opacity-60 dark:opacity-40 transform-gpu" />

      {/* Bottom right subtle glow */}
      <div className="absolute -bottom-[10%] right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tl from-emerald-500/5 via-cyan-500/5 to-transparent blur-[120px] opacity-50 dark:opacity-30 transform-gpu" />

      {/* Gentle noise or vignette */}
      <div className="absolute inset-0 bg-light/30 dark:bg-dark/30 backdrop-blur-[0.5px]" />
    </div>
  );
};

export default MeshGradientFallback;
