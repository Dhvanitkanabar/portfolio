import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) motionValue.set(value);
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

// Stagger container for children
const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const AboutSection = () => {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, rotateX: -10, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            style={{ perspective: "1400px", transformOrigin: "top center" }}
            className="w-full flex flex-col items-center justify-center pt-32"
        >
            <Layout className="pt-16">
                <AnimatedText
                    text="Passion Fuels Purpose!"
                    className="mb-12 xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-6"
                />
                <motion.div
                    className="grid w-full grid-cols-8 gap-16 sm:gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* Biography — slides from left */}
                    <motion.div
                        className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8"
                        variants={slideInFromLeft}
                    >
                        <h2 className="mb-6 text-2xl font-bold uppercase text-dark/75 dark:text-light/75 tracking-widest">
                            Biography
                        </h2>
                        <motion.p
                            className="font-medium text-lg leading-relaxed text-left"
                            variants={fadeUp}
                        >
                            Hi, I&apos;m <span className="text-primary dark:text-primaryDark font-bold">Dhvanit Kanabar</span>,
                            a dedicated frontend developer with a passion for creating beautiful, functional, and user-centered digital
                            experiences. I am always looking for new and innovative ways to bring my visions to life.
                        </motion.p>
                        <motion.p className="my-6 font-medium text-lg leading-relaxed text-left" variants={fadeUp}>
                            I believe that design is about more than just making things look
                            pretty – it&apos;s about solving problems and creating intuitive,
                            enjoyable experiences for users.
                        </motion.p>
                        <motion.p className="font-medium text-lg leading-relaxed text-left" variants={fadeUp}>
                            Whether I&apos;m working on a website, mobile app, or other digital
                            product, I bring my commitment to design excellence and
                            user-centered thinking to every project I work on. I specialize in building
                            responsive, high-performance interfaces that make a lasting impression.
                        </motion.p>
                    </motion.div>

                    {/* Portrait — scales in from center */}
                    <motion.div
                        className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
                        variants={{
                            hidden: { opacity: 0, scale: 0.85 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                        }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    >
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                        <Image
                            src="/images/profile/aboutus.jpeg"
                            alt="Dhvanit Kanabar"
                            className="w-full max-w-[300px] h-auto rounded-2xl mx-auto"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            width={500}
                            height={500}
                        />
                    </motion.div>

                    {/* Stats — slides from right */}
                    <motion.div
                        className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3"
                        variants={slideInFromRight}
                    >
                        <motion.div
                            className="flex flex-col items-end justify-center xl:items-center"
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl animate-gradient-text">
                                <AnimatedNumbers value={10} />+
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                projects completed
                            </h2>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-end justify-center xl:items-center"
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl animate-gradient-text">
                                B.Tech
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                Student (2025-2029)
                            </h2>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Layout>
        </motion.section>
    );
};

export default AboutSection;
