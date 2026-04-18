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
                <span className="text-dark/40 dark:text-light/40 text-[10px] font-black">{date}</span>
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
            title: "ElectroSphere 2K26 Hackathon",
            award: "Runner-Up (2nd Place)",
            date: "Jan 2026",
            source: "Technical Competition",
            description: "Secured 2nd place among 50+ teams for developing a secure communication simulator using React and Firebase."
        },
        {
            title: "Tech Expo 2026",
            award: "1st Runner-Up",
            date: "Feb 2026",
            source: "Project Exhibition",
            description: "Awarded for outstanding innovation in the 'Safety Tech' category with CERS+ (Emergency Response System)."
        },
        {
            title: "Quasar Tech Fest",
            award: "Winner (1st Place)",
            date: "2026",
            source: "Coding Competition",
            description: "First place in the flagship competitive programming event of the university."
        },
        {
            title: "Chaitanya CTF",
            award: "Runner-up",
            date: "2026",
            source: "Cybersecurity",
            description: "Ranked among the top participants in an intensive Capture The Flag cybersecurity competition."
        }
    ];

    return (
        <section id="achievements" className="w-full py-24 bg-light/50 dark:bg-dark/50">
            <Layout>
                <div className="text-center mb-16">
                    <AnimatedText text="Elite Achievements" className="!text-6xl sm:!text-4xl" />
                    <p className="text-lg font-medium text-dark/60 dark:text-light/60 mt-4">
                        Recognitions and awards received for technical excellence and innovation.
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
