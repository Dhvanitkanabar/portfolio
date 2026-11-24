/**
 * Centralized Motion & Creative Animation Configuration
 * Dhvanit Kanabar â€” Portfolio Upgrade
 */

export const MOTION_CONFIG = {
  // Timing & Durations (seconds)
  durations: {
    fast: 0.25,
    normal: 0.5,
    medium: 0.75,
    slow: 1.1,
    preloader: 1.4, // Max 1.4s for preloader reveal
  },

  // Easing Curves
  easings: {
    smooth: [0.25, 0.1, 0.25, 1.0],
    expoOut: [0.16, 1, 0.3, 1],
    circOut: [0, 0.55, 0.45, 1],
    spring: { stiffness: 320, damping: 28 },
    softSpring: { stiffness: 180, damping: 22 },
  },

  // Color Palette Tokens
  colors: {
    tealPrimary: "#06b6d4", // Cyan-500
    tealSecondary: "#14b8a6", // Teal-500
    tealDark: "#0891b2", // Cyan-600
    tealGlow: "rgba(6, 182, 212, 0.45)",
    darkBg: "#121212",
    lightBg: "#f8fafc",
  },

  // Lenis & Scroll Settings
  scroll: {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.8,
  },

  // Hardware & Accessibility Thresholds
  performance: {
    maxDpr: 1.5,
    mobileBreakpoint: 768,
    cursorLag: 0.15, // Smooth lerp coefficient for custom cursor
    reducedMotionQuery: "(prefers-reduced-motion: reduce)",
  },
};

export default MOTION_CONFIG;
