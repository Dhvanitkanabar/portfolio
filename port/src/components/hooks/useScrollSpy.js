import { useState, useEffect } from "react";

/**
 * useScrollSpy
 * Tracks which section is currently active in the viewport based on scroll position.
 * @param {Array} sectionIds - Array of IDs to track (e.g., ['home', 'about', 'skills', ...])
 * @param {Object} options - IntersectionObserver options
 * @returns {string} activeId - The ID of the currently active section
 */
export const useScrollSpy = (sectionIds, options = { threshold: 0.2, rootMargin: "-80px 0px -20px 0px" }) => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observers = [];

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
                observers.push(element);
            }
        });

        return () => {
            observers.forEach((element) => observer.unobserve(element));
        };
    }, [sectionIds, options]);

    return activeId;
};
