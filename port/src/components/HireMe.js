import React from "react";
import Link from "next/link";
import { CircularText } from "./Icons";
import { motion } from "framer-motion";

const HireMe = () => {
    return (
        <div
            className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-50
            lg:left-auto lg:right-4 lg:bottom-10 md:right-3 md:bottom-8 sm:right-2 sm:bottom-6"
        >
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="w-32 h-auto flex items-center justify-center relative xl:w-28 lg:w-24 md:w-22 sm:w-20"
            >
                <CircularText
                    className={"fill-dark animate-spin-slow dark:fill-light opacity-80"}
                />

                <Link
                    href="#contact"
                    className="flex items-center justify-center
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
                    text-light shadow-xl border-2 border-solid border-transparent w-14 h-14 rounded-full
                    font-bold hover:bg-light hover:text-dark transition-all duration-300 text-[10px]
                    
                    dark:bg-zinc-900 dark:text-light hover:dark:bg-light hover:dark:text-dark
                    hover:dark:border-dark xl:w-12 xl:h-12 xl:text-[8px] lg:w-10 lg:h-10 md:w-9 md:h-9"
                >
                    Hire Me
                </Link>
            </motion.div>
        </div>
    );
};

export default HireMe;
