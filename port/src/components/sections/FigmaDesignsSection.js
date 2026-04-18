import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { FigmaIcon } from "../Icons";
import Image from "next/image";

const FigmaDesignCard = ({ title, img, figmaLink, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 grid grid-cols-12 gap-8 p-8 rounded-3xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
        >
            <div className="col-span-6 lg:col-span-12 overflow-hidden rounded-2xl border border-dark/5 dark:border-light/5">
                <Image 
                    src={img} 
                    alt={title} 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500" 
                    width={800} 
                    height={500}
                />
            </div>
            <div className="col-span-6 lg:col-span-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                    <FigmaIcon className="w-6 h-6 text-pink-500" />
                    <h3 className="text-2xl font-black text-dark dark:text-light">{title}</h3>
                </div>
                <p className="text-base font-medium text-dark/70 dark:text-light/70 mb-6 italic">
                    {description}
                </p>
                <a
                    href={figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max px-6 py-2 bg-dark text-light dark:bg-light dark:text-dark rounded-xl font-bold hover:scale-105 active:scale-95 transition-all"
                >
                    View Project on Figma
                </a>
            </div>
        </motion.div>
    );
};

const FigmaDesignsSection = () => {
    const designs = [
        {
            title: "CERS+ Dashboard Design",
            description: "A comprehensive UI/UX design for a Centralized Emergency Response System, focusing on low-latency interactions and clear data visualization under high-stress environments.",
            img: "/images/projects/cers_ui.png", // Reusing project image as placeholder/preview
            figmaLink: "https://www.figma.com/design/IlyZ9nI6z7mY5pZ1z8z3z3/CERS-Plus?node-id=0-1&t=abcdef-0"
        },
        {
            title: "Aura Messaging Interface",
            description: "Modern, minimalist chat interface design featuring glassmorphism, dynamic theming, and intuitive navigation patterns.",
            img: "/images/projects/aura_ui.png",
            figmaLink: "https://www.figma.com/design/IlyZ9nI6z7mY5pZ1z8z3z3/Aura?node-id=0-1&t=abcdef-0"
        }
    ];

    return (
        <section id="figma-designs" className="w-full py-24 bg-light dark:bg-dark">
            <Layout>
                <div className="text-center mb-16">
                    <AnimatedText text="UI/UX Case Studies" className="!text-6xl sm:!text-4xl" />
                    <p className="text-lg font-medium text-dark/60 dark:text-light/60 mt-4 max-w-2xl mx-auto">
                        A collection of high-fidelity prototypes and interface designs crafted using Figma.
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-y-12">
                    {designs.map((design, i) => (
                        <FigmaDesignCard key={i} {...design} />
                    ))}
                </div>
            </Layout>
        </section>
    );
};

export default FigmaDesignsSection;
