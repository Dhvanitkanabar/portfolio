import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import { LinkArrow, GithubIcon, LinkedInIcon } from "@/components/Icons";
import { useNavTransition } from "@/components/hooks/useNavTransition";
import MagneticButton from "@/components/MagneticButton";

/**
 * =========================================================================
 * HERO SECTION CONFIGURATION & CONTENT DATA
 * =========================================================================
 * Edit any text, links, stats, or roles directly in this data object.
 */
export const HERO_DATA = {
    badge: {
        status: "Open to remote internships",
        location: "Available Summer 2026 • Kalol, Gujarat (Remote)",
    },
    
    // PRIMARY HEADLINE
    // Alternative 1: "Computer engineering student engineering full-stack web and mobile systems."
    // Alternative 2: "MERN & React Native developer with accepted AI research, ready to ship."
    headline: "Full-stack developer building AI-powered products that solve real problems.",

    // ROTATING ROLES (Verified capabilities only)
    subtitleRoles: [
        "Full-Stack Developer (MERN)",
        "React Native Developer",
        "AI Research Enthusiast"
    ],

    // TWO-LINE INTRO (< 30 words: B.Tech CSE student status, stack, and published research)
    intro: "First-year B.Tech CSE student (10.0 SGPA) building full-stack web and mobile apps with Node, Express, MongoDB, and React Native. Research paper accepted at ICETAI 2026.",

    // CALL TO ACTIONS
    ctas: {
        primary: { label: "View Projects", href: "#projects" },
        secondary: { label: "Download Resume", href: "/Dhvanit_Kanabar_Resume.pdf" },
    },

    // SOCIAL & CONTACT LINKS
    socialLinks: {
        github: "https://github.com/DhvanitKanabar",
        linkedin: "https://www.linkedin.com/in/dhvanit-kanabar",
        email: "mailto:dhvanitkanabar@gmail.com",
    },

    // STATS & PROOF POINTS
    HACKATHON_COUNT: 2, // Editable constant for hackathons/expos
    stats: [
        { label: "B.Tech CSE Standing", value: "10.0 SGPA", detail: "Swaminarayan Univ." },
        { label: "Peer-Reviewed AI", value: "ICETAI 2026", detail: "Paper Accepted" },
        { label: "Hackathons & Expos", value: "2x Runner-Up", detail: "ElectroSphere & Tech Expo" },
        { label: "Production Platforms", value: "2 Live Apps", detail: "FasalRakshak & Sakshi" },
    ],

    // RIGHT SIDE DESKTOP SHOWCASE (FasalRakshak Research & Cloudflare Deployment)
    featuredProject: {
        title: "FasalRakshak",
        badge: "ICETAI 2026 Accepted",
        category: "Explainable-AI Agricultural Platform",
        summary: "Offline-first multilingual leaf disease diagnosis platform with MobileNet vision models and Gemini advisory. Live on Cloudflare Pages.",
        stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "React Native", "Expo", "TensorFlow.js", "Cloudflare Pages"],
        metrics: [
            { label: "Architecture", val: "Offline-First" },
            { label: "Vision AI", val: "MobileNetV2" },
            { label: "Deployment", val: "Cloudflare" },
        ],
        liveUrl: "https://fasalrakshak1.pages.dev/",
        githubUrl: "https://github.com/Dhvanitkanabar/Repo-Reboot",
    },

    // TECH STACK CHIPS
    techStack: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#828282" },
        { name: "MongoDB", color: "#47A248" },
        { name: "React", color: "#61DAFB" },
        { name: "React Native", color: "#61DAFB" },
        { name: "Python", color: "#00599C" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "Tailwind CSS", color: "#38B2AC" },
        { name: "Cloudflare Pages", color: "#F38020" },
        { name: "Git", color: "#F05032" },
    ]
};

// Inline SVG Icons for self-contained reliability
const EmailIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const ExternalLinkIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const CheckIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

// Typewriter / Role Rotator
const RotatingRoles = ({ roles }) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            setDisplayText(roles[0]);
            return;
        }

        const currentRole = roles[index];
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
                if (displayText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(currentRole.slice(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 30 : 60);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, roles, prefersReducedMotion]);

    return (
        <span className="inline-block text-primary dark:text-primaryDark font-bold tracking-tight border-r-2 border-primary dark:border-primaryDark pr-1 animate-pulse">
            {displayText || "\u00A0"}
        </span>
    );
};

const HomeSection = () => {
    const { handleNavClick } = useNavTransition();
    const prefersReducedMotion = useReducedMotion();

    const transitionConfig = prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

    return (
        <section
            id="home"
            className="w-full min-h-screen xl:min-h-[100svh] relative flex items-center justify-center pt-24 pb-12 xl:pt-20 xl:pb-8 overflow-hidden"
        >
            {/* Ambient Background Grid & Subtle Glow */}
            <div
                className="absolute inset-0 -z-30 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #58E6D9 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] rounded-full opacity-10 pointer-events-none -z-10 bg-primary dark:bg-primaryDark blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[250px] rounded-full opacity-5 pointer-events-none -z-10 bg-[#B63E96] blur-[100px]" />

            <Layout className="w-full">
                <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center w-full">
                    
                    {/* LEFT COLUMN: Recruiter-Focused Primary Profile Content */}
                    <div className="col-span-7 xl:col-span-7 lg:col-span-12 flex flex-col items-start text-left">
                        
                        {/* 1. Badge: Remote Internship Status + Location */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-4 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs sm:text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                                {HERO_DATA.badge.status}
                            </span>
                            <span className="text-dark/20 dark:text-light/20 text-xs hidden sm:inline">•</span>
                            <span className="text-xs sm:text-[11px] font-medium text-dark/60 dark:text-light/60 hidden sm:inline">
                                {HERO_DATA.badge.location}
                            </span>
                        </div>

                        {/* 2. Specific, Confident Headline with Split-Text Word Mask Reveal */}
                        <h1 className="text-[clamp(2.1rem,4.2vw,3.5rem)] font-extrabold tracking-tight text-dark dark:text-light leading-[1.12] mb-3 max-w-2xl">
                            {/* Screen-reader full text */}
                            <span className="sr-only">
                                {HERO_DATA.headline}
                            </span>
                            {/* Visual masked word reveal */}
                            <span aria-hidden="true" className="inline-block">
                                {[
                                    { text: "Full-stack", highlight: false },
                                    { text: "developer", highlight: false },
                                    { text: "building", highlight: false },
                                    { text: "AI-powered", highlight: true },
                                    { text: "products", highlight: true },
                                    { text: "that", highlight: false },
                                    { text: "solve", highlight: false },
                                    { text: "real", highlight: false },
                                    { text: "problems.", highlight: false },
                                ].map((item, idx) => (
                                    <span key={idx} className="inline-block overflow-hidden mr-[0.24em] align-top">
                                        <motion.span
                                            className={`inline-block ${
                                                item.highlight
                                                    ? "text-primary dark:text-primaryDark"
                                                    : "text-dark dark:text-light"
                                            }`}
                                            initial={false}
                                            animate={{ y: "0%", opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: prefersReducedMotion ? 0 : 0.04 + idx * 0.03,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                        >
                                            {item.text}
                                        </motion.span>
                                    </span>
                                ))}
                            </span>
                        </h1>

                        {/* 3. Rotating Subtitle: Truthful Roles */}
                        <div className="text-xl xl:text-lg sm:text-base font-bold text-dark/80 dark:text-light/80 mb-3 h-7 flex items-center">
                            <RotatingRoles roles={HERO_DATA.subtitleRoles} />
                        </div>

                        {/* 4. Two-line concise intro (< 30 words) */}
                        <p className="text-base sm:text-sm font-medium text-dark/70 dark:text-light/70 leading-relaxed mb-6 max-w-xl">
                            {HERO_DATA.intro}
                        </p>

                        {/* 5. Dual CTAs + Social Presence Row with Magnetic Attraction */}
                        <div className="flex flex-wrap items-center gap-3.5 mb-6 w-full">
                            {/* Primary CTA: View Projects */}
                            <MagneticButton strength={0.3}>
                                <a
                                    href={HERO_DATA.ctas.primary.href}
                                    onClick={handleNavClick}
                                    className="px-6 py-3 rounded-xl bg-dark text-light dark:bg-light dark:text-dark text-sm font-bold shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group"
                                >
                                    <span>{HERO_DATA.ctas.primary.label}</span>
                                    <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
                                </a>
                            </MagneticButton>

                            {/* Secondary CTA: Download Resume */}
                            <MagneticButton strength={0.3}>
                                <a
                                    href={HERO_DATA.ctas.secondary.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download="Dhvanit_Kanabar_Resume.pdf"
                                    className="px-5 py-3 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/15 dark:border-light/15 hover:border-primary dark:hover:border-primaryDark text-dark dark:text-light text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
                                >
                                    <span>{HERO_DATA.ctas.secondary.label}</span>
                                    <LinkArrow className="w-4 h-4" />
                                </a>
                            </MagneticButton>

                            {/* Social / Email Quick Links */}
                            <div className="flex items-center gap-2 ml-1 sm:ml-0">
                                <MagneticButton strength={0.4}>
                                    <a
                                        href={HERO_DATA.socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                        className="w-10 h-10 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 flex items-center justify-center text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light hover:border-dark/30 dark:hover:border-light/30 transition-all duration-200"
                                    >
                                        <GithubIcon className="w-4 h-4" />
                                    </a>
                                </MagneticButton>
                                <MagneticButton strength={0.4}>
                                    <a
                                        href={HERO_DATA.socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                        className="w-10 h-10 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 flex items-center justify-center text-dark/70 dark:text-light/70 hover:text-[#0077B5] hover:border-[#0077B5]/40 transition-all duration-200"
                                    >
                                        <LinkedInIcon className="w-4 h-4" />
                                    </a>
                                </MagneticButton>
                                <MagneticButton strength={0.4}>
                                    <a
                                        href={HERO_DATA.socialLinks.email}
                                        aria-label="Send Email"
                                        className="w-10 h-10 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 flex items-center justify-center text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primaryDark hover:border-primary/40 transition-all duration-200"
                                    >
                                        <EmailIcon className="w-4 h-4" />
                                    </a>
                                </MagneticButton>
                            </div>
                        </div>

                        {/* 6. Proof Strip (4 Metric Stat Cards) */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...transitionConfig, delay: 0.35 }}
                            className="grid grid-cols-4 sm:grid-cols-2 gap-3 w-full max-w-2xl mb-6"
                        >
                            {HERO_DATA.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-3 rounded-xl bg-light/50 dark:bg-dark/40 border border-dark/10 dark:border-light/10 backdrop-blur-sm flex flex-col justify-between"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-dark/70 dark:text-light/70 line-clamp-1">
                                        {stat.label}
                                    </span>
                                    <span className="text-lg xl:text-base font-extrabold text-dark dark:text-light tracking-tight mt-0.5">
                                        {stat.value}
                                    </span>
                                    <span className="text-[11px] font-medium text-primary dark:text-primaryDark line-clamp-1">
                                        {stat.detail}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* 7. Tech Stack Chips Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ...transitionConfig, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-1.5 w-full"
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest text-dark/70 dark:text-light/70 mr-1.5">
                                Core Stack:
                            </span>
                            {HERO_DATA.techStack.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="px-2.5 py-1 rounded-lg text-xs sm:text-[11px] font-semibold bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-dark/80 dark:text-light/80 hover:border-primary/30 dark:hover:border-primaryDark/30 transition-colors"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN (Desktop Only): High-Impact Code-Terminal & Featured Project Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ ...transitionConfig, delay: 0.2 }}
                        className="col-span-5 xl:col-span-5 lg:hidden flex flex-col justify-center"
                    >
                        <div className="w-full rounded-2xl border border-dark/15 dark:border-light/15 bg-light/70 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl p-5 overflow-hidden">
                            {/* Window Top Bar */}
                            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-dark/10 dark:border-light/10">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-dark/60 dark:text-light/60">
                                    <span>fasalrakshak.config.ts</span>
                                </div>
                                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary dark:text-primaryDark border border-primary/20">
                                    Featured
                                </span>
                            </div>

                            {/* Project Header & Acceptance Badge */}
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h2 className="text-xl font-extrabold text-dark dark:text-light tracking-tight">
                                        {HERO_DATA.featuredProject.title}
                                    </h2>
                                    <p className="text-xs font-semibold text-primary dark:text-primaryDark">
                                        {HERO_DATA.featuredProject.category}
                                    </p>
                                </div>
                                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                                    ✓ {HERO_DATA.featuredProject.badge}
                                </span>
                            </div>

                            <p className="text-xs font-medium text-dark/70 dark:text-light/70 leading-relaxed mb-4">
                                {HERO_DATA.featuredProject.summary}
                            </p>

                            {/* Architectural Highlights */}
                            <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/5 dark:border-light/5 mb-4 font-mono text-[11px]">
                                {HERO_DATA.featuredProject.metrics.map((m) => (
                                    <div key={m.label} className="flex flex-col">
                                        <span className="text-[9px] uppercase tracking-wider text-dark/70 dark:text-light/70">{m.label}</span>
                                        <span className="font-bold text-dark dark:text-light truncate">{m.val}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {HERO_DATA.featuredProject.stack.slice(0, 6).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-dark/5 dark:bg-light/5 text-dark/60 dark:text-light/60"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Card Footer Links */}
                            <div className="flex items-center justify-between pt-3 border-t border-dark/10 dark:border-light/10 text-xs font-bold">
                                <a
                                    href={HERO_DATA.featuredProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-primary dark:text-primaryDark hover:underline underline-offset-4"
                                >
                                    <span>Live Website</span>
                                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                                </a>

                                <a
                                    href={HERO_DATA.featuredProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light transition-colors"
                                >
                                    <GithubIcon className="w-3.5 h-3.5" />
                                    <span>Repository</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Layout>
        </section>
    );
};

export default HomeSection;
