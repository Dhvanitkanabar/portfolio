import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";

// Assets
import secureCommImg from "../../../public/images/projects/secure_comm_thumbnail_1772742637073.png";
import auraImg from "../../../public/images/projects/aura_messaging_thumbnail_1772742672059.png";
import hackersPanelImg from "../../../public/images/projects/hackers_panel_thumbnail_1772742713267.png";
import mindEaseImg from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import canteenImg from "../../../public/images/projects/portfolio-cover-image.jpg";
import emergencyImg from "../../../public/images/projects/agency-website-cover-image.jpg";
import farmerImg from "../../../public/images/projects/devdreaming.jpg";

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
            id="projects"
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
                    className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl"
                />

                <motion.div
                    className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
                    variants={gridContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {/* Featured: Secure Comm */}
                    <motion.div className="col-span-12" variants={featuredItem}>
                        <FeaturedProject
                            title="Secure Comm: Safety Engine"
                            img={secureCommImg}
                            summary="A high-performance safety engine designed for secure communications, featuring real-time encryption, anomaly detection, and a robust cybersecurity infrastructure."
                            link="https://secure-comm-jade.vercel.app/"
                            github="https://github.com/Dhvanitkanabar"
                            type="Security Technology"
                        />
                    </motion.div>

                    {/* Aura & HackersPanel */}
                    <motion.div className="col-span-6 sm:col-span-12" variants={gridItem}>
                        <Project
                            title="Aura: Messaging App"
                            img={auraImg}
                            link="https://aura-eight-phi.vercel.app/"
                            github="https://github.com/Dhvanitkanabar"
                            type="Communication Platform"
                        />
                    </motion.div>
                    <motion.div className="col-span-6 sm:col-span-12" variants={gridItem}>
                        <Project
                            title="HackersPanel: Security Deck"
                            img={hackersPanelImg}
                            link="https://hackerspanel.netlify.app"
                            github="https://github.com/Dhvanitkanabar"
                            type="Cybersecurity"
                        />
                    </motion.div>

                    {/* Featured: MindEase AI */}
                    <motion.div
                        className="col-span-12"
                        variants={{ ...featuredItem, hidden: { ...featuredItem.hidden, x: 60 } }}
                    >
                        <FeaturedProject
                            title="MindEase AI"
                            img={mindEaseImg}
                            summary="Mental wellness–focused application helping users manage stress and emotions through a simple and intuitive interface."
                            link="https://github.com/dhvanitkanabar"
                            github="https://github.com/Dhvanitkanabar"
                            type="AI & Wellness"
                        />
                    </motion.div>

                    {/* Canteen & Emergency */}
                    <motion.div className="col-span-6 sm:col-span-12" variants={gridItem}>
                        <Project
                            title="Canteen Food Order"
                            img={canteenImg}
                            link="https://github.com/dhvanitkanabar"
                            github="https://github.com/Dhvanitkanabar"
                            type="E-commerce"
                        />
                    </motion.div>
                    <motion.div className="col-span-6 sm:col-span-12" variants={gridItem}>
                        <Project
                            title="Emergency Assistance (CERS+)"
                            img={emergencyImg}
                            link="https://cers-plus.web.app"
                            github="https://github.com/Dhvanitkanabar"
                            type="Safety Tech"
                        />
                    </motion.div>

                    {/* Featured: Farmer Marketplace */}
                    <motion.div className="col-span-12" variants={featuredItem}>
                        <FeaturedProject
                            title="Farmer Marketplace"
                            img={farmerImg}
                            summary="A marketplace platform enabling farmers to sell products directly to consumers without intermediaries, reducing waste and increasing profits."
                            link="https://meek-daffodil-fcaf7d.netlify.app/"
                            github="https://github.com/Dhvanitkanabar"
                            type="AgriTech"
                        />
                    </motion.div>
                </motion.div>
            </Layout>
        </motion.section>
    );
};

export default ProjectsSection;
