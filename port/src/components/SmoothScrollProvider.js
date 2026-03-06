"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";

let globalLenis = null;

/**
 * SmoothScrollProvider — initializes Lenis and syncs with Framer Motion.
 * Wrap your entire app with this component.
 */
const SmoothScrollProvider = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
            smoothWheel: true,
        });

        globalLenis = lenis;

        // Also support native requestAnimationFrame for non-FM contexts
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            globalLenis = null;
        };
    }, []);

    return <>{children}</>;
};

export { globalLenis };
export default SmoothScrollProvider;
