import React from "react";
import { CircularText } from "./Icons";
import { motion } from "framer-motion";
import { useNavTransition } from "./hooks/useNavTransition";

const HireMe = () => {
    const { handleNavClick } = useNavTransition();

    return (
        <div
            className="fixed right-6 bottom-6 flex items-center justify-center z-40
            sm:right-3 sm:bottom-3"
        >
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="w-24 h-24 sm:w-16 sm:h-16 flex items-center justify-center relative group"
            >
                <CircularText
                    className="fill-dark animate-spin-slow dark:fill-light opacity-75 sm:hidden"
                />

                <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="flex items-center justify-center
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
                    text-light shadow-xl border border-transparent w-11 h-11 sm:w-10 sm:h-10 rounded-full
                    font-black hover:bg-light hover:text-dark transition-all duration-300 text-[9px] sm:text-[8px]
                    dark:bg-zinc-900 dark:text-light hover:dark:bg-light hover:dark:text-dark
                    hover:scale-105 active:scale-95"
                    aria-label="Contact for hire"
                >
                    Hire Me
                </a>
            </motion.div>
        </div>
    );
};

export default HireMe;
