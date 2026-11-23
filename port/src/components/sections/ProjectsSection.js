import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";

// Assets
import secureCommImg from "../../../public/images/projects/secure_ui.png";
import auraImg from "../../../public/images/projects/aura_ui.png";
import hackersPanelImg from "../../../public/images/projects/hackers_ui.png";
import emergencyImg from "../../../public/images/projects/cers_ui.png";
import farmerImg from "../../../public/images/projects/farmer_ui.png";
import warlensImg from "../../../public/images/projects/warlens_home.png";
import fashionStudioImg from "../../../public/images/projects/fashion-studio-website.jpg";

const projectsData = [
    {
        title: "FasalRakshak: AI-Powered Agricultural & Mobile Platform",
        img: farmerImg,
        summary: "FasalRakshak is an AI-powered agricultural platform designed to help farmers detect crop diseases, understand soil health, and make informed farming decisions. It combines a responsive web application built with React and Vite, backend REST services with Node.js and Express, MongoDB database integration, MobileNet & TensorFlow.js computer vision for leaf disease diagnosis, Gemini AI advisory, weather intelligence, and a dedicated React Native / Expo mobile application. The web frontend has been optimized and deployed using GitHub-integrated Cloudflare Pages with environment-based production API configuration.",
        link: "https://fasalrakshak1.pages.dev/",
        github: "https://github.com/Dhvanitkanabar/Repo-Reboot",
        type: "Full Stack | AI | Mobile Application | Cloud Deployment",
        category: "Full Stack",
        tech: ["React", "Vite", "JavaScript", "Node.js", "Express.js", "MongoDB", "React Native", "Expo", "FastAPI", "Gemini API", "TensorFlow.js", "Computer Vision", "Cloudflare Pages", "GitHub"],
        featured: true
    },
    {
        title: "Sakshi Clothing: Full-Stack E-Commerce Platform",
        img: fashionStudioImg,
        summary: "Designed and developed a production-grade full-stack e-commerce clothing platform featuring customer shopping experience and separate administration systems. Implements dynamic product categories, size/variant management, cart & wishlist workflows, customer authentication, inventory controls, order tracking, and deployment across Vercel and Render.",
        link: "https://fasalrakshak1.pages.dev/",
        github: "https://github.com/DhvanitKanabar",
        type: "Full Stack E-Commerce Platform",
        category: "Full Stack",
        tech: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Clerk", "Razorpay", "Cloudinary", "Vercel", "Render"],
        featured: true
    },
    {
        title: "CERS+: Centralized Emergency Response System",
        img: emergencyImg,
        summary: "An emergency response coordination platform designed to improve mission-critical service coordination through AI-assisted workflows, real-time GPS tracking, ambulance ETA calculation, and multi-department dispatch for hospitals, police, and fire rescue. Built with Next.js, Firebase services, and Gemini AI capabilities with mapping and location intelligence.",
        link: "https://cers-4.onrender.com/",
        github: "https://github.com/Dhvanitkanabar/CERS",
        type: "Full Stack | AI | Emergency Technology",
        category: "Full Stack",
        tech: ["Next.js", "Firebase", "Gemini API", "Real-Time GPS", "Google Maps API", "REST APIs"],
        featured: true
    },
    {
        title: "SecureComm: Real-Time Encrypted Safety Engine",
        img: secureCommImg,
        summary: "A security-focused real-time communication project exploring secure data exchange, cryptography, and network security concepts. Built with React, WebSockets, JavaScript, and cryptographic modules to simulate and demonstrate secure data transmission, visual trust validation, packet interception, and man-in-the-middle (MITM) attack mitigations.",
        link: "https://secure-comm-jade.vercel.app/",
        github: "https://github.com/Dhvanitkanabar/secure-comm",
        type: "Backend | Cybersecurity | Real-Time Communication",
        category: "Full Stack",
        tech: ["React", "WebSockets", "JavaScript", "Cryptography", "Network Security", "Tailwind CSS"],
        featured: true
    },
    {
        title: "WarLens: AI-Powered Conflict Economic Impact Dashboard",
        img: warlensImg,
        summary: "A production-ready MERN stack dashboard designed to analyze the economic effects of geopolitical conflicts using interactive data visualizations, real-time statistics, RESTful APIs, and full SEO optimization.",
        link: "/warlens",
        github: "https://github.com/Dhvanitkanabar/warlens",
        frontend: "https://github.com/Dhvanitkanabar/warlens-frontend",
        backend: "https://github.com/Dhvanitkanabar/warlens-backend",
        postman: "https://documenter.getpostman.com/view/warlens-api",
        type: "Full Stack | MERN Analytics",
        category: "Full Stack",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Recharts", "REST APIs"],
        featured: false
    },
    {
        title: "HackersPanel: Security Vulnerability Deck",
        img: hackersPanelImg,
        summary: "A comprehensive cybersecurity dashboard for monitoring web application vulnerabilities, inspecting threat vectors, and assessing system health indicators.",
        link: "https://hackerspanel.netlify.app",
        github: "https://github.com/Dhvanitkanabar/cybersecurity",
        type: "Cybersecurity & Monitoring",
        category: "Frontend",
        tech: ["React", "Tailwind CSS", "Security Metrics", "Vulnerability Scanner"],
        featured: false
    },
    {
        title: "Aura: Real-Time Messaging Platform",
        img: auraImg,
        summary: "Full-featured real-time messaging application with private and group chat capabilities, responsive state management, and modern UI design.",
        link: "https://aura-eight-phi.vercel.app/",
        github: "https://github.com/Dhvanitkanabar/aura",
        type: "Real-Time Communication",
        category: "Full Stack",
        tech: ["React", "WebSockets", "Node.js", "Express.js", "Tailwind CSS"],
        featured: false
    }
];

const categories = ["All", "Full Stack", "Frontend"];

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [viewMode, setViewMode] = useState("featured"); // "featured" | "grid"

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projectsData;
        return projectsData.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <motion.section
            initial={{ opacity: 0, rotateX: -12, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            style={{ perspective: "1400px", transformOrigin: "top center" }}
            className="w-full flex flex-col items-center justify-center py-24 relative overflow-hidden"
        >
            {/* Ambient background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-5 dark:opacity-10"
                    style={{
                        background: "radial-gradient(circle, #58E6D9 0%, transparent 70%)",
                        filter: "blur(50px)",
                    }}
                    animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <Layout className="pt-16">
                <AnimatedText
                    text="Crafting Digital Innovation"
                    className="mb-16 xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
                />

                {/* Filter and View Mode Controls */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-16 sm:mb-10 px-2">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                                    activeCategory === cat
                                        ? "bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light scale-105"
                                        : "bg-transparent text-dark/60 border-dark/10 hover:border-dark/30 dark:text-light/60 dark:border-light/10 dark:hover:border-light/30"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Layout View Mode Toggle */}
                    <div className="inline-flex items-center p-1 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10">
                        <button
                            onClick={() => setViewMode("featured")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                                viewMode === "featured"
                                    ? "bg-light dark:bg-dark text-primary dark:text-primaryDark shadow-md"
                                    : "text-dark/50 dark:text-light/50 hover:text-dark dark:hover:text-light"
                            }`}
                        >
                            <span>⚡</span>
                            <span>Editorial</span>
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                                viewMode === "grid"
                                    ? "bg-light dark:bg-dark text-primary dark:text-primaryDark shadow-md"
                                    : "text-dark/50 dark:text-light/50 hover:text-dark dark:hover:text-light"
                            }`}
                        >
                            <span>▦</span>
                            <span>Grid Cards</span>
                        </button>
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-12 gap-16 gap-y-24 xl:gap-12 lg:gap-x-8 md:gap-y-12 sm:gap-y-10 xs:gap-y-8"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const isFeaturedLayout = viewMode === "featured" && project.featured;
                            return (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className={isFeaturedLayout ? "col-span-12" : "col-span-6 md:col-span-12"}
                                >
                                    {isFeaturedLayout ? (
                                        <FeaturedProject
                                            {...project}
                                            reverse={index % 2 !== 0}
                                        />
                                    ) : (
                                        <Project {...project} />
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </Layout>
        </motion.section>
    );
};

export default ProjectsSection;
