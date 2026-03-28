import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const HackathonCard = ({ title, award, date, location, description, tech, certificateImg, results, github, live, photos = [], leadPhoto }) => {
    const [showProjectOptions, setShowProjectOptions] = useState(false);
    const [showPhotos, setShowPhotos] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 grid grid-cols-12 gap-12 p-10 lg:p-6 sm:p-5 xs:p-4 rounded-[2.5rem] bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden mb-8"
        >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors" />

            {/* Main Info Side - Now Span 12 */}
            <div className="col-span-12 flex flex-col justify-center">
                <div className="flex items-start gap-8 sm:flex-col sm:gap-4 mb-8">
                    {/* Lead Winner Photo Thumbnail */}
                    {leadPhoto && (
                        <div className="flex-shrink-0">
                            <div className="p-1.5 rounded-3xl bg-gradient-to-br from-primary to-primaryDark shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500 overflow-hidden">
                                <img 
                                    src={leadPhoto} 
                                    alt="Lead Winning Moment" 
                                    className="w-44 h-44 sm:w-full sm:h-48 xs:h-36 object-cover rounded-[calc(1.5rem-6px)] border-4 border-white/10"
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6 flex-wrap">
                            <span className="px-4 py-2 rounded-full bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark text-xs font-black uppercase tracking-widest border border-primary/20 shadow-sm animate-pulse">
                                🏆 {award}
                            </span>
                            <span className="text-dark/40 dark:text-light/40 text-[10px] font-black uppercase tracking-widest">{date} • {location}</span>
                        </div>

                        <h3 className="text-5xl xl:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-black text-dark dark:text-light mb-4 group-hover:text-primary dark:group-hover:text-primaryDark transition-colors leading-[1.1]">
                            {title}
                        </h3>
                    </div>
                </div>


                <p className="text-xl md:text-base font-medium text-dark/70 dark:text-light/70 mb-8 leading-relaxed max-w-4xl">
                    {description}
                </p>

                <div className="grid grid-cols-2 gap-12 lg:grid-cols-1">
                    <div className="mb-0">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-dark/40 dark:text-light/40 mb-4">Innovation Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {tech.map((t) => (
                                <span key={t} className="px-3 py-1 rounded-md bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-[10px] font-bold text-dark/60 dark:text-light/60">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-dark/40 dark:text-light/40 mb-2">Impact & Results</h4>
                        <ul className="list-disc list-inside text-sm font-semibold text-dark/80 dark:text-light/80 space-y-1">
                            {results.map((r, i) => <li key={i}>{r}</li>)}
                        </ul>
                    </div>
                </div>

                {/* Footer Actions - Standard Project Style */}
                <div className="w-full h-[1px] bg-dark/5 dark:bg-light/5 my-8" />

                <div className="flex items-center justify-between w-full flex-wrap gap-6">
                    <div className="flex items-center gap-8 flex-wrap">
                        {showProjectOptions ? (
                            <div className="flex items-center gap-6 animate-fadeIn">
                                <a href={github} target="_blank" className="font-black text-xs uppercase tracking-widest underline underline-offset-8 decoration-2 decoration-primary/30 hover:decoration-primary transition-all">
                                    GitHub Repo
                                </a>
                                <a href={live} target="_blank" className="font-black text-xs uppercase tracking-widest underline underline-offset-8 decoration-2 decoration-primary/30 hover:decoration-primary transition-all">
                                    Live Demo
                                </a>
                                <button onClick={() => setShowProjectOptions(false)} className="text-[10px] font-bold uppercase text-dark/40 hover:text-dark dark:text-light/40 dark:hover:text-light">
                                    ← Back
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-8">
                                <button
                                    onClick={() => setShowProjectOptions(true)}
                                    className="text-sm font-black underline underline-offset-8 decoration-2 decoration-primary/30 hover:decoration-primary transition-all uppercase tracking-widest text-dark dark:text-light"
                                >
                                    View Repository & Demo →
                                </button>
                                <button
                                    onClick={() => setShowPhotos(true)}
                                    className="text-sm font-black underline underline-offset-8 decoration-2 decoration-primary/30 hover:decoration-primary transition-all uppercase tracking-widest text-dark/60 dark:text-light/60"
                                >
                                    Winning Photos
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox Portal - renders outside overflow-hidden card */}
            {showPhotos && typeof document !== "undefined" && createPortal(
                <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8" style={{ zIndex: 9999 }}>
                    <button
                        onClick={() => setShowPhotos(false)}
                        className="absolute top-10 right-10 text-white text-5xl font-black hover:text-pink-400 transition-colors"
                        style={{ zIndex: 10000 }}
                    >
                        &times;
                    </button>
                    <div className="grid gap-6 w-full max-w-6xl" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                        {photos.map((photo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.12 }}
                                style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
                            >
                                <img
                                    src={photo}
                                    alt={`Winning photo ${i + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '4/3', display: 'block' }}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '2rem', fontWeight: 900, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                        Winning Moments &bull; {title}
                    </p>
                </div>,
                document.body
            )}

            {/* Floating elements */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl -z-10"
            />
        </motion.div>
    );
};

const HackathonsSection = () => {
    const hackathons = [
        {
            title: "ElectroSphere 2K26: Software Edition",
            award: "Runner-Up (2nd Place)",
            date: "Jan 7, 2026",
            location: "Swaminarayan University",
            description: "Developed SecureComm, an interactive Man-in-the-Middle (MITM) simulator. Architected a real-time network security lab to visualize and demonstrate packet interception, injection, and trust validation for educational security research.",
            tech: ["React.js", "Firebase", "CryptoJS", "Tailwind CSS"],
            results: [
                "Secured 2nd Place out of 50+ competitive engineering teams",
                "Built 'Hacker Sandbox' for real-time packet sniffing simulations",
                "Implemented Visual Trust Validation for SSL/TLS handshakes",
                "Demonstrated E2EE vulnerabilities through cryptanalysis modules"
            ],
            certificateImg: "/images/achievements/electrosphere_2k26_certificate.jpg",
            github: "https://github.com/Dhvanitkanabar/secure-comm",
            live: "https://secure-comm-jade.vercel.app/",
            leadPhoto: "/images/achievements/electrosphere_2k26_team.jpg",
            photos: [
                "/images/achievements/electrosphere_2k26_certificate.jpg",
                "/images/achievements/electrosphere_2k26_team.jpg",
                "/images/achievements/electrosphere_2k26_desk.jpg"
            ]
        },
        {
            title: "Tech Expo 2026: Project Exhibition",
            award: "1st Runner-Up (2nd Place)",
            date: "Feb 3–4, 2026",
            location: "Parul University",
            description: "Built CERS+ (Centralized Emergency Response System) — a unified, real-time command center bridging citizens with hospitals, police, and fire departments. Competed against hundreds of teams across multiple engineering domains in one of Parul University's most prestigious innovation events.",
            tech: ["React.js", "Firebase Firestore", "Mapping APIs", "Real-Time GPS", "Multi-Role Architecture"],
            results: [
                "Won 1st Runner-Up (External University) against hundreds of competing teams",
                "Engineered a Zero-Friction SOS interface for high-stress emergency scenarios",
                "Implemented real-time GPS tracking eliminating manual location reporting",
                "Designed scalable backend handling high-traffic spikes for disaster scenarios",
                "Solo project by Dhvanit Kanabar, mentored by Neel Sir"
            ],
            github: "https://github.com/Dhvanitkanabar/CERS",
            live: "https://cers-4.onrender.com/",
            leadPhoto: "/images/achievements/techexpo_stage.jpg",
            photos: [
                "/images/achievements/techexpo_stage.jpg",
                "/images/achievements/techexpo_trophy.jpg",
                "/images/achievements/techexpo_standup.jpg",
                "/images/achievements/techexpo_poster.jpg",
                "/images/achievements/techexpo_booth.jpg"
            ]
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
            className="w-full py-24 sm:py-16 xs:py-10 bg-light/50 dark:bg-dark/50 relative overflow-hidden"
        >
            <Layout>
                <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-10">
                    <AnimatedText
                        text="Hackathon Victories"
                        className="!text-8xl xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl mb-6"
                    />
                    <p className="text-xl md:text-lg sm:text-base xs:text-sm font-medium text-dark/60 dark:text-light/60 max-w-3xl leading-relaxed">
                        Pushing the limits of rapid innovation. A collection of winning certificates and solutions built in high-pressure competitive environments.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-y-12">
                    {hackathons.map((h, i) => (
                        <HackathonCard key={i} {...h} />
                    ))}
                </div>
            </Layout>
        </motion.section>
    );
};

export default HackathonsSection;
