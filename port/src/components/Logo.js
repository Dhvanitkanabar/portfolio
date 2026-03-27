import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-0">
            <MotionLink
                href="/"
                className="w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-transparent border-solid
        dark:border-light md:w-12 md:h-12 md:text-xl relative group overflow-hidden"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
                whileHover={{
                    backgroundColor: [
                        "#121212",
                        "rgba(131,58,180,1)",
                        "rgba(253,29,29,1)",
                        "rgba(252,176,69,1)",
                        "rgba(131,58,180,1)",
                        "#121212",
                    ],
                    transition: { duration: 1, repeat: Infinity },
                }}
            >
                <motion.span
                    className="z-10"
                    whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                >
                    DK
                </motion.span>
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </MotionLink>
        </div>
    );
};

export default Logo;
