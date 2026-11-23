import { useCallback } from "react";
import { globalLenis } from "@/components/SmoothScrollProvider";

const NAVBAR_OFFSET = 85;

export function useNavTransition() {
    const handleNavClick = useCallback((e) => {
        const href = e.currentTarget?.getAttribute("href") || "";
        if (!href.startsWith("#")) return;

        e.preventDefault();

        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (!target) {
            console.warn(`Target section #${targetId} not found`);
            return;
        }

        if (globalLenis) {
            globalLenis.scrollTo(target, {
                offset: -NAVBAR_OFFSET,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
            window.scrollTo({
                top: Math.max(0, targetTop),
                behavior: "smooth"
            });
        }

        // Update URL hash without instant jump
        window.history.pushState(null, null, `#${targetId}`);
    }, []);

    return { handleNavClick };
}
