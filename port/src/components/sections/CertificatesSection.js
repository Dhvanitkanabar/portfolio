import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const CertificateCard = ({ title, description, date, file, category, variant = "default", thumbnail }) => {
    const isWinner = variant === "winner";

    const getCategoryGradient = (cat) => {
        const c = (cat || "").toLowerCase();
        if (c.includes("cloud") || c.includes("google")) return { bg: "from-blue-500 to-cyan-400", icon: "☁️" };
        if (c.includes("cyber") || c.includes("security") || c.includes("ctf")) return { bg: "from-red-500 to-purple-600", icon: "🔐" };
        if (c.includes("devops") || c.includes("infra")) return { bg: "from-emerald-500 to-teal-400", icon: "⚙️" };
        if (c.includes("language") || c.includes("python")) return { bg: "from-yellow-400 to-orange-500", icon: "🐍" };
        if (c.includes("core") || c.includes("programming")) return { bg: "from-indigo-500 to-blue-600", icon: "💻" };
        if (c.includes("fest") || c.includes("festival")) return { bg: "from-pink-500 to-rose-600", icon: "🏅" };
        if (c.includes("hackathon")) return { bg: "from-green-500 to-emerald-600", icon: "⚡" };
        if (c.includes("quiz") || c.includes("competition")) return { bg: "from-amber-400 to-yellow-500", icon: "🧠" };
        if (c.includes("logic")) return { bg: "from-violet-500 to-purple-600", icon: "🔁" };
        if (c.includes("open source")) return { bg: "from-lime-500 to-green-500", icon: "🌐" };
        if (c.includes("conference")) return { bg: "from-sky-400 to-blue-500", icon: "🎤" };
        return { bg: "from-slate-500 to-slate-700", icon: "📜" };
    };

    const { bg, icon } = getCategoryGradient(category);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full p-8 lg:p-6 sm:p-5 xs:p-4 rounded-3xl border-2 ${isWinner
                ? "border-primary/60 dark:border-primaryDark/60 shadow-xl shadow-primary/10"
                : "border-dark/10 dark:border-light/10 hover:border-dark/20 dark:hover:border-light/20"
                } bg-light dark:bg-dark relative transition-all duration-500 group`}
        >
            {isWinner && (
                <div className="absolute top-5 right-5 bg-primary dark:bg-primaryDark text-light dark:text-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg z-10">
                    🏆 Winner
                </div>
            )}

            <div className="flex gap-8 items-start w-full">
                {/* Thumbnail */}
                <div className={`flex-shrink-0 w-28 h-28 lg:w-24 lg:h-24 sm:w-20 sm:h-20 xs:w-16 xs:h-16 rounded-2xl bg-gradient-to-br ${isWinner ? "from-primary to-primaryDark" : bg} p-1 shadow-lg group-hover:scale-105 transition-transform duration-500 overflow-hidden`}>
                    {thumbnail ? (
                        <img
                            src={thumbnail}
                            alt={title}
                            className="w-full h-full object-cover rounded-[calc(1rem-4px)]"
                        />
                    ) : file.endsWith(".png") ? (
                        <img
                            src={`/certificates/${file}`}
                            alt={title}
                            className="w-full h-full object-cover rounded-[calc(1rem-4px)]"
                        />
                    ) : (
                        <div className="w-full h-full rounded-[calc(1rem-4px)] overflow-hidden bg-white relative">
                            <iframe
                                src={`/certificates/${encodeURIComponent(file)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                title={title}
                                style={{
                                    width: "560px",
                                    height: "560px",
                                    transform: "scale(0.19)",
                                    transformOrigin: "top left",
                                    border: "none",
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                    )}
                </div>


                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col">
                    <span className={`text-[10px] font-black uppercase tracking-[0.25em] mb-2 ${isWinner ? "text-primary dark:text-primaryDark" : "text-dark/40 dark:text-light/40"}`}>
                        {category}
                    </span>
                    <h3 className={`${isWinner ? "text-2xl lg:text-xl sm:text-lg" : "text-xl lg:text-lg sm:text-base"} font-black text-dark dark:text-light mb-2 leading-snug pr-14 sm:pr-0`}>
                        {title}
                    </h3>
                    <p className="text-[11px] font-bold text-dark/50 dark:text-light/50 uppercase tracking-widest mb-3">
                        Issued: <span className="text-dark dark:text-light">{date}</span>
                    </p>
                    <p className="text-sm sm:text-xs font-medium text-dark/70 dark:text-light/70 leading-relaxed mb-6">
                        {description}
                    </p>
                    <div className="flex items-center gap-6 mt-auto">
                        <a
                            href={`/certificates/${file}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-black uppercase tracking-widest underline underline-offset-4 decoration-primary/30 hover:decoration-primary text-dark dark:text-light transition-all"
                        >
                            View →
                        </a>
                        <a
                            href={`/certificates/${file}`}
                            download
                            className={`ml-auto text-xs font-black uppercase tracking-tight px-5 py-2 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 ${isWinner
                                ? "bg-primary text-light dark:bg-primaryDark dark:text-dark"
                                : "bg-dark/10 dark:bg-light/10 text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                                }`}
                        >
                            Download
                        </a>
                    </div>
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
                    <div className="grid grid-cols-2 xl:grid-cols-1 gap-10 sm:grid-cols-1 sm:gap-8">
                        <CertificateCard
                            title="Quasar Winner"
                            date="2026"
                            file="Quasar.pdf"
                            category="Technical Festival"
                            variant="winner"
                            description="Secured 1st place in the prestigious Quasar tech festival, competing against top-tier developers in complex problem-solving and coding challenges."
                        />
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
                        <CertificateCard
                            title="Reverse Coding Winner"
                            date="2026"
                            file="reverse coding.pdf"
                            category="Logic Competition"
                            variant="winner"
                            description="Mastered the art of deconstructing logic to solve intricate reverse engineering tasks."
                        />
                        <CertificateCard
                            title="Inquizzitive Winner"
                            date="2025"
                            file="inquizzitive.pdf"
                            category="Quiz Competition"
                            variant="winner"
                            description="Demonstrated exceptional technical knowledge and rapid response capabilities."
                        />
                    </div>
                </div>





                {/* Compact Grid for Participation */}
                <div className="w-full">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-dark dark:text-light">Learning Roadmap</h2>
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-dark/20 to-transparent dark:from-light/20" />
                    </div>

                    <div className="grid grid-cols-2 gap-10 lg:grid-cols-1 sm:gap-8">

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
