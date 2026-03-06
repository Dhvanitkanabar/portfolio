import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";

/**
 * Initializes Lenis smooth scrolling and syncs it with Framer Motion's animation loop.
 * Returns the lenis instance ref for external usage (e.g. scrollTo).
 */
const useSmoothScroll = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    // Sync Lenis with Framer Motion's animation frame
    useAnimationFrame((time) => {
        lenisRef.current?.raf(time);
    });

    return lenisRef;
};

export default useSmoothScroll;
