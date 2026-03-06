/**
 * useNavTransition
 * Intercepts anchor-hash nav clicks and plays a 3D perspective tilt-out → scroll → tilt-in animation.
 * Usage: attach onClick={handleNavClick} to any <a> that navigates to a #section.
 */
import { useCallback } from "react";

// Duration of the tilt-out phase (ms) before we start scrolling
const TILT_OUT_MS = 400;

// Offset in px to account for the fixed navbar height + a little breathing room
const NAVBAR_OFFSET = 80;

/**
 * Returns the true top position of an element relative to the document,
 * compensating for any CSS transform applied to an ancestor (e.g. the tilt).
 */
function getElementTop(el) {
    let top = 0;
    let node = el;
    while (node) {
        top += node.offsetTop || 0;
        node = node.offsetParent;
    }
    return top;
}

export function useNavTransition() {
    const handleNavClick = useCallback((e) => {
        const href = e.currentTarget?.getAttribute("href") || "";
        if (!href.startsWith("#")) return; // non-hash links navigate normally

        e.preventDefault();

        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;

        // ─── Phase 1: Tilt-out the whole main content ─────────────────────
        const main = document.querySelector("[data-content]");
        if (!main) {
            // Fallback: plain scroll with offset
            const top = getElementTop(target) - NAVBAR_OFFSET;
            window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
            return;
        }

        main.style.transition = `transform ${TILT_OUT_MS}ms cubic-bezier(0.22,1,0.36,1), opacity ${TILT_OUT_MS}ms ease`;
        main.style.transformOrigin = "center top";
        main.style.transform = "perspective(1200px) rotateX(8deg) scale(0.96)";
        main.style.opacity = "0.3";

        // ─── Phase 2: Scroll & tilt back in ───────────────────────────────
        setTimeout(() => {
            // First, temporarily remove the transform so getBoundingClientRect is accurate
            main.style.transition = "none";
            main.style.transform = "none";
            main.style.opacity = "1";

            // Calculate scroll position with navbar offset
            const targetTop = getElementTop(target) - NAVBAR_OFFSET;
            window.scrollTo({ top: Math.max(0, targetTop), behavior: "instant" });

            // Update URL hash without jumping
            window.history.pushState(null, null, `#${targetId}`);

            // Small paint delay so the new position is rendered first
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    main.style.transition = `transform 500ms cubic-bezier(0.22,1,0.36,1), opacity 400ms ease`;
                    main.style.transform = "perspective(1200px) rotateX(-6deg) scale(0.97)";
                    main.style.opacity = "0.6";

                    // Settle into final state
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            main.style.transform = "perspective(1200px) rotateX(0deg) scale(1)";
                            main.style.opacity = "1";
                        });
                    });
                });
            });
        }, TILT_OUT_MS);
    }, []);

    return { handleNavClick };
}
