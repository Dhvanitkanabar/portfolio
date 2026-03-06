import React from "react";
import { motion } from "framer-motion";

const LiIcon = ({ reference }) => {
    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light">
            <svg
                className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
                width="75"
                height="75"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
                />
                <motion.circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-light dark:fill-dark"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
                <circle
                    cx="75"
                    cy="50"
                    r="10"
                    className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
                />
            </svg>
        </figure>
    );
};

export default LiIcon;
