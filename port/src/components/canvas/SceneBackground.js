"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MeshGradientFallback from "./MeshGradientFallback";
import { MOTION_CONFIG } from "@/config/motion.config";

// Lazy-load R3F canvas strictly on client side without blocking initial render
const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <MeshGradientFallback />,
});

/**
 * SceneBackground â€” Intelligent 3D Background Orchestrator.
 * Detects device hardware, coarse pointer, battery/power constraints,
 * and prefers-reduced-motion to smoothly render WebGL on capable desktops
 * and fallback to lightweight CSS mesh gradient on mobile/low-power.
 */
const SceneBackground = () => {
  const [useFallback, setUseFallback] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Check coarse pointer (touch device) or screen width < 768px
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < MOTION_CONFIG.performance.mobileBreakpoint ||
      navigator.maxTouchPoints > 0;

    // 2. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      MOTION_CONFIG.performance.reducedMotionQuery
    ).matches;

    // 3. Check hardware concurrency (low CPU/GPU tier)
    const isLowPower =
      typeof navigator !== "undefined" &&
      navigator.hardwareConcurrency &&
      navigator.hardwareConcurrency <= 4;

    // 4. Check WebGL support
    let hasWebGL = true;
    try {
      const canvas = document.createElement("canvas");
      hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      hasWebGL = false;
    }

    if (isTouch || prefersReducedMotion || isLowPower || !hasWebGL) {
      setUseFallback(true);
    } else {
      setUseFallback(false);
    }
  }, []);

  if (!mounted) {
    // Return CSS gradient immediately during SSR/initial hydration for zero flash
    return <MeshGradientFallback />;
  }

  if (useFallback) {
    return <MeshGradientFallback />;
  }

  return (
    <Hero3DScene
      onContextLost={() => {
        console.warn("Switching to CSS mesh gradient fallback due to context loss.");
        setUseFallback(true);
      }}
    />
  );
};

export default SceneBackground;
