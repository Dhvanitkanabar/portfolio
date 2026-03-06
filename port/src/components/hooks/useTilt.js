import { useRef, useCallback } from "react";

/**
 * Reusable 3D tilt hook.
 * Usage: const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 15, perspective: 1000 });
 * Apply these to the element wrapper.
 */
const useTilt = ({ max = 15, perspective = 1000, scale = 1.03 } = {}) => {
    const ref = useRef(null);

    const onMouseMove = useCallback((e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -max;
        const rotateY = ((x - centerX) / centerX) * max;

        ref.current.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        ref.current.style.transition = "transform 0.05s ease-out";
    }, [max, perspective, scale]);

    const onMouseLeave = useCallback(() => {
        if (!ref.current) return;
        ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        ref.current.style.transition = "transform 0.5s ease-out";
    }, [perspective]);

    return { ref, onMouseMove, onMouseLeave };
};

export default useTilt;
