import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, index = 0 }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ opacity: 0, rotateX: -20, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{ perspective: "800px", transformStyle: "preserve-3d" }}
                className="p-6 rounded-2xl border border-dark/10 dark:border-light/10 bg-light/50 dark:bg-dark/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-4"
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
                    {type}
                </h3>
                <span className="capitalize font-medium text-primary dark:text-primaryDark text-sm mt-1 block">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm mt-3 text-dark/75 dark:text-light/75 leading-relaxed">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <motion.div
            className="my-64"
            initial={{ opacity: 0, rotateX: -12, y: 80 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: "1400px", transformOrigin: "top center" }}
        >
            <motion.h2
                className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Education
            </motion.h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-primary via-primaryDark to-transparent origin-top dark:from-primaryDark dark:via-primary
          md:w-[2px] md:left-[30px] xs:left-[20px]"
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        index={0}
                        type="Bachelor Of Technology In Computer Science"
                        time="2025–2029"
                        place="Swaminarayan University"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                    <Details
                        index={1}
                        type="Higher Secondary Education"
                        time="2016 – 2025"
                        place="PP Savani CVS"
                        info="Completed higher secondary education with a focus on science and mathematics."
                    />
                </ul>
            </div>
        </motion.div>
    );
};

export default Education;
