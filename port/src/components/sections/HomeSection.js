import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { LinkArrow } from "@/components/Icons";
import useMagneticButton from "@/components/hooks/useMagneticButton";

const MagneticLink = ({ href, target, download, className, children }) => {
    const { ref, onMouseMove, onMouseLeave } = useMagneticButton({ strength: 0.3 });
    return (
        <Link
            ref={ref}
            href={href}
            target={target}
            download={download}
            className={`inline-block ${className}`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </Link>
    );
};

const HomeSection = () => {
    const { scrollY } = useScroll();
    // Subtle parallax: portrait moves up slightly as user scrolls
    const portraitY = useTransform(scrollY, [0, 400], [0, -40]);
    const textY = useTransform(scrollY, [0, 400], [0, -20]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

    return (
        <motion.section
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full min-h-screen relative overflow-hidden"
        >
            {/* Subtle ambient background glow */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 dark:opacity-20 pointer-events-none -z-10"
                style={{
                    background: "radial-gradient(circle, #B63E96 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 dark:opacity-15 pointer-events-none -z-10"
                style={{
                    background: "radial-gradient(circle, #58E6D9 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    x: [0, -25, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <Layout className="pt-0 md:pt-16 sm:pt-8">
                <div className="flex items-center justify-center gap-16 w-full lg:flex-col lg:gap-10">
                    {/* Circular Photo with parallax */}
                    <motion.div
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ y: portraitY, opacity }}
                        initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Outer spinning ring */}
                        <div className="relative">
                            <motion.div
                                className="absolute -inset-3 rounded-full opacity-50"
                                style={{
                                    background: "conic-gradient(from 0deg, #B63E96, #58E6D9, #7B4FE9, #B63E96)",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                            <div className="relative w-80 h-80 xl:w-72 xl:h-72 md:w-60 md:h-60 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-primary/40 dark:ring-primaryDark/40 shadow-[0_0_60px_10px] shadow-primary/20 dark:shadow-primaryDark/20 z-10">
                                <Image
                                    src="/images/profile/landing.png"
                                    alt="Dhvanit Kanabar"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, (max-width: 1200px) 288px, 320px"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Info with parallax */}
                    <motion.div
                        className="flex flex-col items-start justify-center lg:items-center lg:text-center max-w-xl"
                        style={{ y: textY }}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <AnimatedText
                            text="Turning Vision Into Reality With Code And Design."
                            className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl"
                        />
                        <motion.p
                            className="my-5 text-base font-medium text-dark/80 dark:text-light/80 leading-relaxed md:text-sm sm:text-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            As a skilled frontend developer, I am dedicated to turning ideas
                            into innovative web applications. Explore my latest projects and
                            achievements, showcasing my expertise in JavaScript and UI/UX.
                        </motion.p>
                        <motion.div
                            className="flex items-center gap-4 mt-1 lg:self-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <MagneticLink
                                href="/Dhvanit_Kanabar_Elite_Resume_Spaced.pdf"
                                target="_blank"
                                download={true}
                                className="flex items-center bg-dark text-light py-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark transition-all duration-300
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:py-2 md:px-4 md:text-base ripple-btn"
                            >
                                Resume <LinkArrow className={"w-6 ml-1"} />
                            </MagneticLink>
                            <MagneticLink
                                href="#contact"
                                className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                            >
                                Contact
                            </MagneticLink>
                        </motion.div>
                    </motion.div>
                </div>
            </Layout>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center lg:hidden"
            >
                <span className="text-xs font-light uppercase tracking-[0.3em] text-dark/60 dark:text-light/60">Scroll Down</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent mt-3" />
            </motion.div>
        </motion.section>
    );
};

export default HomeSection;
