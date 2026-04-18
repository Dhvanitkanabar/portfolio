import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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

const TypewriterEffect = ({ words }) => {
    const [index, setIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const currentWord = words[index];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
                if (displayText.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentWord.slice(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index, words]);

    return (
        <span className="text-primary dark:text-primaryDark font-bold border-r-4 border-primary dark:border-primaryDark pr-1 animate-pulse">
            {displayText}
        </span>
    );
};

const SkillBadge = ({ text }) => (
    <motion.span
        className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-dark/70 dark:text-light/70"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(182, 62, 150, 0.1)", borderColor: "rgba(182, 62, 150, 0.4)" }}
    >
        {text}
    </motion.span>
);

const HomeSection = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, -60]);
    const y2 = useTransform(scrollY, [0, 500], [0, 60]);

    return (
        <motion.section
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center w-full min-h-screen sm:min-h-[100svh] relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
        >
            {/* Background Big Text Watermark - made more compact */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-20 overflow-hidden select-none">
                <motion.h2 
                    style={{ y: y1 }}
                    className="text-[18vw] font-black text-dark/[0.03] dark:text-light/[0.03] leading-none whitespace-nowrap"
                >
                    DEVELOPER
                </motion.h2>
                <motion.h2 
                    style={{ y: y2 }}
                    className="text-[20vw] font-black text-dark/[0.02] dark:text-light/[0.02] leading-none whitespace-nowrap mt-[-2vw]"
                >
                    DESIGNER
                </motion.h2>
            </div>

            {/* Subtle dot grid */}
            <div className="absolute inset-0 -z-30 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                 style={{ backgroundImage: `radial-gradient(circle, #B63E96 1px, transparent 1px)`, backgroundSize: "45px 45px" }} />

            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none -z-10 bg-[#B63E96] blur-[100px]" />

            <Layout className="flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl flex flex-col items-center">
                    
                    {/* Compact Status Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 mb-4 sm:mb-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-primaryDark">Available for Projects</span>
                    </motion.div>

                    <motion.h1 
                        className="text-7xl xl:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-black leading-tight text-dark dark:text-light mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Building Digital <br />
                        <span className="text-primary dark:text-primaryDark">Experiences</span> <br />
                        That Stand Out.
                    </motion.h1>

                    <motion.div 
                        className="text-3xl xl:text-2xl md:text-xl sm:text-lg xs:text-base font-bold mb-6 h-auto min-h-[1.6em]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <TypewriterEffect words={["Problem Solver", "Frontend Developer", "UI/UX Designer"]} />
                    </motion.div>

                    <motion.p 
                        className="text-lg md:text-base sm:text-sm font-medium text-dark/70 dark:text-light/70 mb-6 max-w-xl px-2 sm:px-0"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        I build fast, modern, and user-focused web applications.
                    </motion.p>

                    {/* Compact Skill Tags */}
                    <motion.div 
                        className="flex flex-wrap items-center justify-center gap-2 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {["React", "TailwindCSS", "JavaScript", "UI/UX"].map((tag) => (
                            <SkillBadge key={tag} text={tag} />
                        ))}
                    </motion.div>

                    {/* Standardized Buttons */}
                    <motion.div 
                        className="flex items-center gap-6 sm:flex-col sm:items-stretch sm:w-full sm:max-w-xs sm:mx-auto sm:gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <MagneticLink
                            href="/Dhvanit_Kanabar_Resume.pdf"
                            target="_blank"
                            className="flex flex-row items-center justify-center bg-dark text-light py-4 px-10 sm:py-3.5 sm:px-6 rounded-2xl text-lg sm:text-base font-bold hover:shadow-[0_15px_30px_-5px_rgba(182,62,150,0.3)] transition-all duration-300 dark:bg-light dark:text-dark min-w-[180px] sm:min-w-0 sm:w-full active:scale-95 group"
                        >
                            <span className="whitespace-nowrap">View Resume</span> <LinkArrow className="w-5 h-5 ml-2 sm:ml-1.5 flex-shrink-0" />
                        </MagneticLink>
                        
                        <MagneticLink
                            href="#contact"
                            className="text-lg sm:text-base font-bold text-dark dark:text-light transition-all duration-300 relative group sm:text-center sm:py-3 sm:border sm:border-dark/20 sm:dark:border-light/20 sm:rounded-2xl sm:bg-dark/5 sm:dark:bg-light/5"
                        >
                            Contact Me
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-dark dark:bg-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 sm:hidden" />
                        </MagneticLink>
                    </motion.div>
                </div>
            </Layout>

            {/* Subtle Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
                <div className="w-5 h-8 rounded-full border-2 border-dark/20 dark:border-light/20 flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-2 rounded-full bg-primary"
                    />
                </div>
            </motion.div>
        </motion.section>
    );
};

export default HomeSection;
