import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const CertificateCard = ({ title, description, date, file, category, variant = "default" }) => {
    const isWinner = variant === "winner";

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full p-6 rounded-2xl border-2 border-solid ${isWinner ? "border-primary dark:border-primaryDark shadow-primary/20" : "border-dark dark:border-light"} bg-light dark:bg-dark 
      flex flex-col items-start justify-center relative shadow-lg transition-all duration-500 group overflow-hidden ${isWinner ? "scale-105 z-10" : ""}`}
        >
            {isWinner && (
                <div className="absolute top-4 right-4 bg-primary dark:bg-primaryDark text-light dark:text-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                    🏆 Winner
                </div>
            )}

            <div className="w-full flex flex-col items-start justify-center relative z-10">
                <span className={`font-bold text-xs uppercase tracking-[0.2em] mb-1 ${isWinner ? "text-primary dark:text-primaryDark" : "text-dark/60 dark:text-light/60"}`}>
                    {category}
                </span>
                <h3 className={`${isWinner ? "text-2xl" : "text-xl"} font-bold my-1 dark:text-light sm:text-lg`}>
                    {title}
                </h3>
                <p className="text-sm font-semibold text-dark/75 dark:text-light/75 mb-2 flex items-center gap-2">
                    <span className={`w-1 h-1 rounded-full ${isWinner ? "bg-primary dark:bg-primaryDark" : "bg-dark/25 dark:bg-light/25"}`} />
                    Issued: <span className="text-dark dark:text-light font-bold">{date}</span>
                </p>
                <p className={`${isWinner ? "text-base" : "text-sm"} font-medium text-dark/80 dark:text-light/80 leading-relaxed mb-6`}>
                    {description}
                </p>

                <div className="flex items-center justify-start gap-4 flex-wrap w-full">
                    <motion.a
                        href={`/certificates/${file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold underline underline-offset-4 dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
                        whileHover={{ x: 4 }}
                    >
                        View →
                    </motion.a>
                    <motion.a
                        href={`/certificates/${file}`}
                        download
                        className={`ml-auto ${isWinner ? "bg-primary text-light dark:bg-primaryDark dark:text-dark" : "bg-dark text-light dark:bg-light dark:text-dark"} px-4 py-1.5 rounded-lg text-xs font-bold ripple-btn
            border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark
            dark:hover:border-light dark:hover:bg-dark dark:hover:text-light shadow-md transition-all duration-300`}
                        whileHover={{ y: -2, scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Download
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const CertificatesSection = () => {
    return (
        <motion.section
            id="certificates"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            style={{ perspective: "1400px", transformOrigin: "top center" }}
            className="w-full flex flex-col items-center justify-center py-24 bg-light dark:bg-dark relative overflow-hidden"
        >
            {/* Background elements for structural feel */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primaryDark/5 rounded-full -ml-48 -mb-48 blur-3xl" />

            <Layout className="pt-0">
                <div className="text-center mb-24">
                    <AnimatedText
                        text="Achievements & Honors"
                        className="!text-7xl xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl"
                    />
                    <p className="text-lg font-medium text-dark/75 dark:text-light/75 mt-4 max-w-2xl mx-auto">
                        A showcase of technical excellence, competitive victories, and continuous learning milestones.
                    </p>
                </div>

                {/* Staggered Masonry-style layout for Winners */}
                <div className="w-full mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-dark dark:text-light">Victory Highlights</h2>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                    </div>

                    <div className="grid grid-cols-12 gap-8 md:flex md:flex-col">
                        <div className="col-span-7 flex flex-col gap-8">
                            <CertificateCard
                                title="Quasar Winner"
                                date="2026"
                                file="Quasar.pdf"
                                category="Technical Festival"
                                variant="winner"
                                description="Secured 1st place in the prestigious Quasar tech festival, competing against top-tier developers in complex problem-solving and coding challenges."
                            />
                            <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-col">
                                <CertificateCard
                                    title="Inquizzitive Winner"
                                    date="2025"
                                    file="inquizzitive.pdf"
                                    category="Quiz Competition"
                                    variant="winner"
                                    description="Demonstrated exceptional technical knowledge and rapid response capabilities."
                                />
                                <CertificateCard
                                    title="Reverse Coding Winner"
                                    date="2026"
                                    file="reverse coding.pdf"
                                    category="Logic Competition"
                                    variant="winner"
                                    description="Mastered the art of deconstructing logic to solve intricate reverse engineering tasks."
                                />
                            </div>
                        </div>
                        <div className="col-span-5 flex flex-col gap-8">
                            <CertificateCard
                                title="Axis Hacksprint"
                                date="2026"
                                file="axis hacksprint.pdf"
                                category="Hackathon"
                                variant="winner"
                                description="Developed a market-ready solution under 24-hour pressure, winning the grand prize for innovation and execution."
                            />
                            <CertificateCard
                                title="Chaitanya CTF Runner-up"
                                date="2026"
                                file="Razzify-Chaitanya-CTF-DHVANIT KANABAR.pdf"
                                category="Cybersecurity"
                                variant="winner"
                                description="Ranked top in an intensive Capture The Flag event, solving complex security vulnerabilities."
                            />
                        </div>
                    </div>
                </div>

                {/* Compact Grid for Participation */}
                <div className="w-full">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-dark dark:text-light">Learning Roadmap</h2>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-dark/20 to-transparent dark:from-light/20" />
                    </div>

                    <div className="grid grid-cols-4 gap-6 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
                        <CertificateCard
                            title="Intro to Programming"
                            date="2025"
                            file="Dhvanit Kanabar - Intro to Programming.png"
                            category="Core"
                            description="Algorithmic thinking at its base."
                        />
                        <CertificateCard
                            title="Python Mastery"
                            date="2026"
                            file="Dhvanit Kanabar - Python.png"
                            category="Language"
                            description="Deep dive into Python ecosystem."
                        />
                        <CertificateCard
                            title="IIT Madras Shastra"
                            date="2026"
                            file="iit madras shastra.pdf"
                            category="Technical Fest"
                            description="National level competition participation."
                        />
                        <CertificateCard
                            title="IIIT Delhi Event"
                            date="2026"
                            file="iiit delhi.pdf"
                            category="Technical Event"
                            description="Collaborated on high-scale projects."
                        />
                        <CertificateCard
                            title="MOSIP Decode"
                            date="2026"
                            file="mosip decode.pdf"
                            category="Open Source"
                            description="Contributing to global infra."
                        />
                        <CertificateCard
                            title="Google Cloud Mastery"
                            date="2026"
                            file="aicreq google.pdf"
                            category="Cloud"
                            description="Infrastructure and AI scalability."
                        />
                        <CertificateCard
                            title="Rethink Summit"
                            date="2026"
                            file="rethink.pdf"
                            category="Conference"
                            description="Future of software engineering."
                        />
                        <CertificateCard
                            title="Repo Reboot"
                            date="2025"
                            file="repo-reboot.pdf"
                            category="DevOps"
                            description="Mastery over version control systems."
                        />
                    </div>
                </div>
            </Layout>
        </motion.section>
    );
};

export default CertificatesSection;
