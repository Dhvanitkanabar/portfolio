"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, index = 0 }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-10 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between xl:w-[70%] lg:w-[80%] md:w-[90%] sm:w-full relative"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ opacity: 0, rotateX: -15, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                }}
                style={{ perspective: "800px", transformStyle: "preserve-3d" }}
                className="p-8 sm:p-6 rounded-3xl border border-dark/10 dark:border-light/10 bg-light/70 dark:bg-dark/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-primary/40 dark:hover:border-primaryDark/40 hover:-translate-y-1 transition-all duration-300 mt-4 w-full"
            >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h3 className="capitalize font-black text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
                        {type}
                    </h3>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark border border-primary/20">
                        {time}
                    </span>
                </div>
                <span className="capitalize font-bold text-dark/60 dark:text-light/60 text-sm block mb-3">
                    {place}
                </span>
                <p className="font-medium w-full md:text-sm text-dark/75 dark:text-light/75 leading-relaxed">
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 75%", "end 75%"],
    });

    const smoothScaleY = useSpring(scrollYProgress, {
        stiffness: 250,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section
            id="education"
            className="my-40 md:my-28 sm:my-20 relative overflow-hidden"
        >
            <motion.h2
                className="font-black text-7xl mb-24 w-full text-center lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl tracking-tight text-dark dark:text-light"
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Education &amp; Experience
            </motion.h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                {/* SVG Vertical Guide Line */}
                <div
                    className="absolute left-9 top-0 bottom-0 w-[4px] bg-dark/10 dark:bg-light/10 rounded-full
                    md:w-[2px] md:left-[30px] xs:left-[20px]"
                />

                {/* Animated Drawing Line */}
                <motion.div
                    style={{ scaleY: smoothScaleY }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-gradient-to-b from-primary via-primaryDark to-cyan-400 origin-top shadow-[0_0_12px_rgba(6,182,212,0.8)] rounded-full
                    md:w-[2px] md:left-[30px] xs:left-[20px]"
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        index={0}
                        type="B.Tech in Computer Engineering"
                        time="2025–2029"
                        place="Swaminarayan University"
                        info="Academic Excellence: Semester 1 SGPA: 10.00/10.00 | Semester 2 SGPA: 9.33/10.00. Focus areas include Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Artificial Intelligence."
                    />
                    <Details
                        index={1}
                        type="Student Builder Campus Leader"
                        time="July–August 2026"
                        place="AWS Student Builder Community"
                        info="Contributed to student developer engagement and awareness of the AWS Builder ecosystem. Supported student onboarding, AWS Builder ID registrations, and participation in developer-focused initiatives."
                    />
                    <Details
                        index={2}
                        type="Higher Secondary Education"
                        time="2016 – 2025"
                        place="PP Savani CVS"
                        info="Completed higher secondary education with a rigorous foundation in Mathematics, Physics, and Computer Science fundamentals."
                    />
                </ul>
            </div>
        </section>
    );
};

export default Education;
