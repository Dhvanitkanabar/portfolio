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
import canteenImg from "../../../public/images/projects/canteen_ui.png";
import emergencyImg from "../../../public/images/projects/cers_ui.png";
import farmerImg from "../../../public/images/projects/farmer_ui.png";

const projectsData = [
    {
        title: "CERS: Emergency Assistance",
        img: emergencyImg,
        summary: "Advanced emergency response platform for coordinating mission-critical services. Features real-time tracking, resource optimization, and rapid dispatch capabilities.",
        link: "https://cers-4.onrender.com/",
        github: "https://github.com/Dhvanitkanabar/CERS",
        doc: "https://docs.google.com/document/d/1ZMIPI1vuPb1laCNX_uYqanPsItKipX76VkuRj-9-q1g/edit?usp=sharing",
        type: "Safety Tech",
        category: "Full Stack",
        featured: true
    },
    {
        title: "Aura: Messaging App",
        img: auraImg,
        summary: "Full-featured real-time messaging application with private and group chat capabilities.",
        link: "https://aura-eight-phi.vercel.app/",
        github: "https://github.com/Dhvanitkanabar/aura",
        doc: "https://docs.google.com/document/d/1xm8IixdQh3K6T--7PZ8XxWUHxqnXDjlByQzAC5cndDE/edit?usp=sharing",
        type: "Communication Platform",
        category: "Full Stack",
        featured: false
    },
    {
        title: "HackersPanel: Security Deck",
        img: hackersPanelImg,
        summary: "A comprehensive security dashboard for monitoring vulnerabilities and system health.",
        link: "https://hackerspanel.netlify.app",
        github: "https://github.com/Dhvanitkanabar/cybersecurity",
        doc: "https://docs.google.com/document/d/1oft4l63s8F0pPbYAMn-CjJBqldIN1y5pZeZEOmN6HWs/edit?usp=sharing",
        type: "Cybersecurity",
        category: "Frontend",
        featured: false
    },
    {
        title: "Secure Comm: Safety Engine",
        img: secureCommImg,
        summary: "🏆 Runner-Up at ElectroSphere 2K26 Hackathon. High-performance safety engine for secure communications featuring real-time encryption, anomaly detection, and a robust cybersecurity infrastructure.",
        link: "https://secure-comm-jade.vercel.app/",
        github: "https://github.com/Dhvanitkanabar/secure-comm",
        doc: "https://docs.google.com/document/d/14w5J8z8yWtA1nhtLJcgO1WeD4-1gjuoi9U80Xi3weC8/edit?tab=t.0#heading=h.aogq9mc2ptoo",
        type: "Security Tech",
        category: "Full Stack",
        featured: true
    },
    {
        title: "Canteen Food Order",
        img: canteenImg,
        summary: "A streamlined e-commerce solution for university canteens. Features a specialized shopping cart overlay and status tracking bar for a seamless campus dining experience.",
        link: "#",
        github: "https://github.com/Dhvanitkanabar/canteen-prj",
        doc: "https://docs.google.com/document/d/1ChdA0fY8mtZZ_b0CPxkziRfA2OSUM0XFBMC-Zglod7c/edit?usp=sharing",
        type: "E-commerce",
        category: "Full Stack",
        featured: true
    },
    {
        title: "Farmer Marketplace",
        img: farmerImg,
        summary: "A marketplace platform enabling farmers to sell products directly to consumers without intermediaries, reducing waste and increasing profits.",
        link: "https://meek-daffodil-fcaf7d.netlify.app/",
        github: "https://github.com/Dhvanitkanabar/Repo-Reboot",
        doc: "https://docs.google.com/document/d/1v5nz990GmQ8VOdxc87K505CUlFhBHgfRigldoFc8zto/edit?usp=sharing",
        type: "AgriTech",
        category: "Full Stack",
        featured: true
    },
    {
        title: "Cyber Snake: Retro Fusion",
        img: secureCommImg,
        summary: "A modern reimagining of the classic snake game with cybersecurity-themed powerups and neon aesthetics.",
        link: "https://github.com/Dhvanitkanabar/snake-game",
        github: "https://github.com/Dhvanitkanabar/snake-game",
        type: "Game Dev",
        category: "Games",
        featured: false
    },
    {
        title: "Netflix Ecosystem Clone",
        img: auraImg,
        summary: "A pixel-perfect clone of the Netflix landing and browsing experience, featuring dynamic content fetching and high-performance UI components.",
        link: "https://github.com/Dhvanitkanabar/netflix-clone",
        github: "https://github.com/Dhvanitkanabar/netflix-clone",
        type: "UI/UX Replication",
        category: "Clones",
        featured: false
    }
];

const categories = ["All", "Full Stack", "Frontend", "Games", "Clones"];

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

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

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${activeCategory === cat
                                    ? "bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light scale-105"
                                    : "bg-transparent text-dark/60 border-dark/10 hover:border-dark/30 dark:text-light/60 dark:border-light/10 dark:hover:border-light/30"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="grid grid-cols-12 gap-16 gap-y-24 xl:gap-12 lg:gap-x-8 md:gap-y-12 sm:gap-y-10 xs:gap-y-8"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={project.featured ? "col-span-12" : "col-span-6 sm:col-span-12"}
                            >
                                {project.featured ? (
                                    <FeaturedProject {...project} />
                                ) : (
                                    <Project {...project} />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Layout>
        </motion.section>
    );
};

export default ProjectsSection;
