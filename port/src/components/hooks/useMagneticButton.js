import { useRef, useCallback } from "react";

/**
 * Magnetic button hook — pulls element toward the cursor.
 * Usage: const { ref, onMouseMove, onMouseLeave } = useMagneticButton({ strength: 0.4 });
 * Apply these event handlers to your button/link element.
 */
const useMagneticButton = ({ strength = 0.35 } = {}) => {
    const ref = useRef(null);

    const onMouseMove = useCallback((e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        ref.current.style.transition = "transform 0.15s ease-out";
    }, [strength]);

    const onMouseLeave = useCallback(() => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0px, 0px)";
        ref.current.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }, []);

    return { ref, onMouseMove, onMouseLeave };
};

export default useMagneticButton;
