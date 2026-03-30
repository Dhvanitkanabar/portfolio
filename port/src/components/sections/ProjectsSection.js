import React from "react";
import { motion } from "framer-motion";
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

// Stagger grid container
const gridContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const gridItem = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const featuredItem = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const ProjectsSection = () => {
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

                <motion.div
                    className="grid grid-cols-12 gap-16 gap-y-24 xl:gap-12 lg:gap-x-8 md:gap-y-12 sm:gap-y-10 xs:gap-y-8"
                    variants={gridContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div className="col-span-12" variants={featuredItem}>
                        <FeaturedProject
                            title="CERS: Emergency Assistance"
                            img={emergencyImg}
                            summary="Advanced emergency response platform for coordinating mission-critical services. Features real-time tracking, resource optimization, and rapid dispatch capabilities."
                            link="https://cers-4.onrender.com/"
                            github="https://github.com/Dhvanitkanabar/CERS"
                            doc="https://docs.google.com/document/d/1ZMIPI1vuPb1laCNX_uYqanPsItKipX76VkuRj-9-q1g/edit?usp=sharing"
                            type="Safety Tech"
                        />
                    </motion.div>

                    {/* Aura & HackersPanel */}
                    <motion.div className="col-span-6 sm:col-span-12" variants={gridItem}>
                        <Project
                            title="Aura: Messaging App"
                            img={auraImg}
                            summary="Full-featured real-time messaging application with private and group chat capabilities."
                            link="https://aura-eight-phi.vercel.app/"
                            github="https://github.com/Dhvanitkanabar/aura"
                            doc="https://docs.google.com/document/d/1xm8IixdQh3K6T--7PZ8XxWUHxqnXDjlByQzAC5cndDE/edit?usp=sharing"
                            type="Communication Platform"
                        />
                    </motion.div>
                    <motion.div className="col-span-6 sm:col-span-12" variants={gridItem}>
                        <Project
                            title="HackersPanel: Security Deck"
                            img={hackersPanelImg}
                            summary="A comprehensive security dashboard for monitoring vulnerabilities and system health."
                            link="https://hackerspanel.netlify.app"
                            github="https://github.com/Dhvanitkanabar/cybersecurity"
                            doc="https://docs.google.com/document/d/1oft4l63s8F0pPbYAMn-CjJBqldIN1y5pZeZEOmN6HWs/edit?usp=sharing"
                            type="Cybersecurity"
                        />
                    </motion.div>

                    {/* Featured: Secure Comm */}
                    <motion.div
                        className="col-span-12"
                        variants={{ ...featuredItem, hidden: { ...featuredItem.hidden, x: 60 } }}
                    >
                        <FeaturedProject
                            title="Secure Comm: Safety Engine"
                            img={secureCommImg}
                            summary="🏆 Runner-Up at ElectroSphere 2K26 Hackathon. High-performance safety engine for secure communications featuring real-time encryption, anomaly detection, and a robust cybersecurity infrastructure."
                            link="https://secure-comm-jade.vercel.app/"
                            github="https://github.com/Dhvanitkanabar/secure-comm"
                            doc="https://docs.google.com/document/d/14w5J8z8yWtA1nhtLJcgO1WeD4-1gjuoi9U80Xi3weC8/edit?tab=t.0#heading=h.aogq9mc2ptoo"
                            type="Security Tech"
                        />
                    </motion.div>

                    {/* Featured: Canteen Food Order */}
                    <motion.div className="col-span-12" variants={featuredItem}>
                        <FeaturedProject
                            title="Canteen Food Order"
                            img={canteenImg}
                            summary="A streamlined e-commerce solution for university canteens, allowing students to browse menus, customize orders, and track status in real-time. Features a specialized shopping cart overlay and status tracking bar for a seamless campus dining experience."
                            link="#"
                            github="https://github.com/Dhvanitkanabar/canteen-prj"
                            doc="https://docs.google.com/document/d/1ChdA0fY8mtZZ_b0CPxkziRfA2OSUM0XFBMC-Zglod7c/edit?usp=sharing"
                            type="E-commerce"
                        />
                    </motion.div>



                    {/* Featured: Farmer Marketplace */}
                    <motion.div className="col-span-12" variants={featuredItem}>
                        <FeaturedProject
                            title="Farmer Marketplace"
                            img={farmerImg}
                            summary="A marketplace platform enabling farmers to sell products directly to consumers without intermediaries, reducing waste and increasing profits."
                            link="https://meek-daffodil-fcaf7d.netlify.app/"
                            github="https://github.com/Dhvanitkanabar/Repo-Reboot"
                            doc="https://docs.google.com/document/d/1v5nz990GmQ8VOdxc87K505CUlFhBHgfRigldoFc8zto/edit?usp=sharing"
                            type="AgriTech"
                        />
                    </motion.div>
                </motion.div>
            </Layout>
        </motion.section>
    );
};

export default ProjectsSection;
