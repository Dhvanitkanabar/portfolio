import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedText â€” word-by-word reveal with blur clear stagger.
 * Configurable heading tag (`as="h2"` default) to maintain strict single-h1 accessible outline.
 */
const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const AnimatedText = ({ text, className = "", as = "h2" }) => {
    const Component = as;
    const words = text.split(" ");

    return (
        <Component className={`font-bold capitalize text-8xl xs:text-5xl text-dark dark:text-light ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    className="inline-block mr-[0.25em]"
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {word}
                </motion.span>
            ))}
        </Component>
    );
};

export default AnimatedText;
