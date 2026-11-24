import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const AchievementCard = ({ title, award, date, source, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-primary/5 dark:bg-primaryDark/5 border border-primary/20 dark:border-primaryDark/20 hover:shadow-lg transition-all"
        >
            <div className="flex justify-between items-start mb-4">
                <span className="text-primary dark:text-primaryDark text-xs font-black uppercase tracking-widest">{source}</span>
                <span className="text-dark/70 dark:text-light/70 text-[10px] font-black">{date}</span>
            </div>
            <h3 className="text-2xl font-black text-dark dark:text-light mb-2">{title}</h3>
            <p className="text-sm font-bold text-primary dark:text-primaryDark mb-4 italic">{award}</p>
            <p className="text-sm font-medium text-dark/70 dark:text-light/70 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

const AchievementsSection = () => {
    const achievements = [
        {
            title: "Dewang Mehta IT Awards 2026",
            award: "Recognized Recipient",
            date: "2026",
            source: "State IT Excellence",
            description: "Recognized at the prestigious Dewang Mehta IT Awards for innovation and excellence in technology."
        },
        {
            title: "ElectroSphere 2K26 Hackathon",
            award: "Second Place (Runner-Up)",
            date: "Jan 2026",
            source: "Hackathon Competition",
            description: "Secured 2nd place among 50+ competitive engineering teams for developing SecureComm, a real-time secure communication and network security demonstration."
        },
        {
            title: "Tech Expo 2026",
            award: "Runner-Up (1st Runner-Up)",
            date: "Feb 2026",
            source: "Project Exhibition",
            description: "Awarded for outstanding innovation in the 'Safety Tech' category with CERS+ (Centralized Emergency Response System) at Parul University."
        },
        {
            title: "AWS Student Builder Campus Leadership",
            award: "Campus Leader Recognition",
            date: "2026",
            source: "Developer Leadership",
            description: "Selected as Student Builder Campus Leader for driving student awareness, Builder ID onboarding, and cloud developer initiatives."
        },
        {
            title: "Academic Honors & SGPA Distinction",
            award: "Sem 1: 10.00/10.00 | Sem 2: 9.33/10.00",
            date: "2025–2026",
            source: "Swaminarayan University",
            description: "Demonstrated academic excellence in Computer Engineering coursework including Data Structures, Algorithms, and Software Engineering."
        }
    ];

    return (
        <section id="achievements" className="w-full py-24 bg-light/50 dark:bg-dark/50">
            <Layout>
                <div className="text-center mb-16">
                    <AnimatedText text="Elite Achievements" className="!text-6xl sm:!text-4xl" />
                    <p className="text-lg font-medium text-dark/60 dark:text-light/60 mt-4">
                        Recognitions and awards received for technical excellence, innovation, and academic performance.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
                    {achievements.map((ach, i) => (
                        <AchievementCard key={i} {...ach} />
                    ))}
                </div>
            </Layout>
        </section>
    );
};

export default AchievementsSection;
