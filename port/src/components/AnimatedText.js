import React from "react";
import { motion } from "framer-motion";

/**
 * Premium AnimatedText — word-by-word reveal with blur clear stagger.
 * Each word slides up + clears from blur in sequence.
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

const AnimatedText = ({ text, className = "" }) => {
    const words = text.split(" ");

    return (
        <h1 className={`font-bold capitalize text-8xl xs:text-5xl text-dark dark:text-light ${className}`}>
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
        </h1>
    );
};

export default AnimatedText;
