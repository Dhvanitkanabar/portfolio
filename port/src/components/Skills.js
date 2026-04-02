import React from "react";
import { motion } from "framer-motion";

// ─── Real SVG Icons ────────────────────────────────────────────────────────────
const Icons = {
    HTML: () => (
        <svg viewBox="0 0 24 24" fill="#E34F26" className="w-full h-full">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
    ),
    CSS: () => (
        <svg viewBox="0 0 24 24" fill="#1572B6" className="w-full h-full">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
    ),
    JS: () => (
        <svg viewBox="0 0 24 24" fill="#F7DF1E" className="w-full h-full">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
    ),
    React: () => (
        <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-full h-full">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.783-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.432.62 2.353 1.355 2.353 1.82 0 .73-1.51 1.773-3.688 2.33-.464-1.132-1.016-2.295-1.65-3.463.527-1.168 1.04-2.33 1.61-3.185zm-16.41 0c.57.855 1.08 2.016 1.61 3.184-1.174 2.168-1.726 3.33-1.65 4.463-2.18-.558-3.69-1.6-3.69-2.33 0-.465.922-1.2 2.353-1.82.43-.18.89-.347 1.376-.497zm4.786.61c-.18.63-.405 1.285-.66 1.94-.19-.39-.39-.787-.6-1.178-.225-.39-.46-.78-.706-1.145.666.126 1.315.283 1.966.382zm-1.966 4.005a13.69 13.69 0 0 0 .7 1.148c.23.385.462.768.71 1.14-.66-.1-1.31-.258-1.97-.385.18-.637.406-1.29.56-1.903zm8.596 0c.154.612.38 1.265.56 1.903-.663.127-1.31.285-1.972.385.248-.372.48-.754.71-1.14.237-.375.474-.764.7-1.148zm-4.33 0c.474.444.943.932 1.4 1.46-.458-.012-.91-.02-1.4-.02-.49 0-.94.008-1.4.02.456-.528.925-1.016 1.4-1.46zm-4.97 1.28c.36.928.802 1.836 1.335 2.7-.51-.09-1.005-.197-1.47-.315-1.43-.362-2.43-.9-2.435-1.55a.24.24 0 0 1 .015-.1c.16-.47 1.01-1.036 2.555-1.237zm9.94 0c1.545.2 2.395.766 2.555 1.237a.24.24 0 0 1 .015.1c-.01.645-1.01 1.183-2.43 1.545-.47.12-.97.226-1.48.314.533-.864.975-1.772 1.34-2.7v.004zm-4.97.756c.62.704 1.26 1.464 1.96 2.28-1.31.045-2.63.045-3.924 0 .693-.816 1.33-1.576 1.964-2.28zm0 3.42c-1.197 0-2.347-.064-3.44-.187-.397-.55-.786-1.12-1.15-1.71-.36-.57-.686-1.147-.994-1.724 1.152 1.26 2.404 2.04 3.584 2.04 1.18 0 2.43-.78 3.58-2.04-.308.577-.632 1.154-.993 1.724-.364.59-.75 1.16-1.15 1.71-1.09.123-2.24.187-3.437.187z" />
        </svg>
    ),
    CPP: () => (
        <svg viewBox="0 0 24 24" fill="#00599C" className="w-full h-full">
            <path d="M24 13.616v-3.232c-1.651 0-1.651-2.424 0-2.424V4.728h-3.232c0 1.651-2.424 1.651-2.424 0H13.616v3.232c1.651 0 1.651 2.424 0 2.424v3.232c1.651 0 1.651 2.424 0 2.424v3.232h3.232c0-1.651 2.424-1.651 2.424 0H24v-3.232c-1.651 0-1.651-2.424 0-2.424zM22.384 10.384h-1.616v-1.616h-1.616v1.616h-1.616v1.616h1.616v1.616h1.616v-1.616h1.616zM22.384 16.848h-1.616v-1.616h-1.616v1.616h-1.616v1.616h1.616v1.616h1.616v-1.616h1.616zM6.551 16.711a4.704 4.704 0 0 1-3.323-1.34c-1.637-1.621-1.637-4.137 0-5.758a4.704 4.704 0 0 1 3.323-1.34c.945 0 1.777.266 2.485.744l1.455-2.016a7.484 7.484 0 0 0-3.94-.972c-2.093 0-4.045.81-5.503 2.279-3.045 3.018-3.045 7.915 0 10.933 1.458 1.469 3.41 2.279 5.503 2.279 1.488 0 2.87-.417 4.041-1.155l-1.556-1.895a4.67 4.67 0 0 1-2.485.541z" />
        </svg>
    ),
    Tailwind: () => (
        <svg viewBox="0 0 24 24" fill="#38B2AC" className="w-full h-full">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
    ),
    GitHub: () => (
        <svg viewBox="0 0 24 24" className="w-full h-full dark:fill-white fill-dark">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    ),
    C: () => (
        <svg viewBox="0 0 24 24" fill="#A8B9CC" className="w-full h-full">
            <path d="M16.5 9.4l-1.9-2a6.9 6.9 0 0 0-4.9-2A6.85 6.85 0 0 0 2.8 12a6.85 6.85 0 0 0 6.9 6.6 6.75 6.75 0 0 0 4.9-2l1.9-2.1 1.9 1.6-1.9 2.1a9.2 9.2 0 0 1-6.8 2.9A9.4 9.4 0 0 1 .3 12 9.4 9.4 0 0 1 9.7 2.9a9.3 9.3 0 0 1 6.8 2.9l1.9 2.1z" />
        </svg>
    ),
    Design: () => (
        <svg viewBox="0 0 24 24" fill="#B63E96" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
    ),
    Node: () => (
        <svg viewBox="0 0 24 24" fill="#339933" className="w-full h-full">
            <path d="M12 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383-.144-.051-.358-.138-.08-.383C.951 18.04 0 11.23 0 12c0-.77.951 6.04 7.98 9.25.278.245.064.332-.08.383.144.051.358.138.08.383L11.076 23.753c.563.327 1.282.327 1.845 0l2.937-1.737c.278-.245.064-.332-.08-.383.144-.051.358-.138.08-.383 7.029-3.21 7.98-10.02 7.98-10.77 0 .75-.951 7.56-7.98 10.77.278.245.064.332-.08.383-.144.051-.358.138-.08.383l-3.037 1.737c-.281.163-.601.247-.922.247z" />
        </svg>
    ),
    Express: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full dark:text-white text-dark">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3z" />
        </svg>
    ),
    MongoDB: () => (
        <svg viewBox="0 0 24 24" fill="#47A248" className="w-full h-full">
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115C12.34.486 12 0 12 0s-.34.486-.62.956c-.321.701-3.309 2.535-4.573 8.115-.951 4.205.132 8.411 2.535 11.53.25.324.498.647.747.971.047.06.094.12.14.18H10.1c.36.012.72.012 1.08 0h.82h-.82c.16.2.321.401.482.601h.67l.154-.192C14.868 21.077 18.144 16.85 17.193 9.555z" />
        </svg>
    ),

    Firebase: () => (
        <svg viewBox="0 0 24 24" fill="#FFCA28" className="w-full h-full">
            <path d="M12.404.032l-3.321 6.84-2.842-5.45C6.01.996 5.48.91 5.093 1.258a.5.5 0 0 0-.131.67L10.05 11.23h3.9l-1.546-11.2a.5.5 0 0 0-.496-.4h-1.05z" />
        </svg>
    ),


    Postman: () => (
        <svg viewBox="0 0 24 24" fill="#FF6C37" className="w-full h-full">
            <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.427 6.572.843 12.584-3.8 13.427-10.373.843-6.573-3.8-12.585-10.372-13.428zm6.543 14.398c-1.258.127-2.315-.818-2.443-2.076-.127-1.258.818-2.315 2.076-2.443 1.258-.127 2.315.818 2.443 2.076.127 1.258-.818 2.315-2.076 2.443z" />
        </svg>
    ),
};


const categories = [
    {
        title: "Frontend",
        emoji: "🖥️",
        gradient: "rgba(251,146,60,0.1), rgba(234,179,8,0.1)",
        borderColor: "rgba(251,146,60,0.3)",
        skills: [
            { name: "HTML5", Icon: Icons.HTML, color: "#E34F26", level: 95, desc: "Semantic markup" },
            { name: "CSS3", Icon: Icons.CSS, color: "#1572B6", level: 90, desc: "Modern layouts" },
            { name: "JavaScript", Icon: Icons.JS, color: "#F7DF1E", level: 88, desc: "ES6+ & async" },
            { name: "ReactJS", Icon: Icons.React, color: "#61DAFB", level: 85, desc: "Hooks & state" },
            { name: "Tailwind", Icon: Icons.Tailwind, color: "#38B2AC", level: 88, desc: "Utility-first" },
        ],
    },
    {
        title: "Backend",
        emoji: "🚀",
        gradient: "rgba(34,197,94,0.1), rgba(16,185,129,0.1)",
        borderColor: "rgba(16,185,129,0.3)",
        skills: [
            { name: "Node.js", Icon: Icons.Node, color: "#339933", level: 82, desc: "Server-side JS" },
            { name: "Express.js", Icon: Icons.Express, color: "#828282", level: 85, desc: "Web framework" },
            { name: "MongoDB", Icon: Icons.MongoDB, color: "#47A248", level: 78, desc: "NoSQL Database" },
            { name: "Firebase", Icon: Icons.Firebase, color: "#FFCA28", level: 80, desc: "Cloud platform" },
            { name: "REST APIs", Icon: Icons.React, color: "#61DAFB", level: 88, desc: "Interconnect" },
        ],
    },
    {
        title: "Languages & Tools",
        emoji: "⚙️",
        gradient: "rgba(168,85,247,0.1), rgba(236,72,153,0.1)",
        borderColor: "rgba(168,85,247,0.3)",
        skills: [
            { name: "C++", Icon: Icons.CPP, color: "#00599C", level: 85, desc: "Competitive programming" },
            { name: "C Language", Icon: Icons.C, color: "#A8B9CC", level: 78, desc: "Sys programming" },
            { name: "GitHub", Icon: Icons.GitHub, color: "#6e5494", level: 85, desc: "Version control" },
            { name: "UI/UX Design", Icon: Icons.Design, color: "#B63E96", level: 75, desc: "User experience" },
            { name: "Postman", Icon: Icons.Postman, color: "#FF6C37", level: 82, desc: "API Testing" },
        ],
    },
];



const floatingTech = ["C++", "TypeScript", "Figma", "REST APIs", "Git", "Node.js", "Vercel", "MongoDB", "Framer Motion"];

const SkillCard = ({ name, Icon, color, desc, index }) => (
    <motion.div
        className="relative flex flex-col items-center justify-center p-6 rounded-3xl cursor-default group
      border border-dark/10 dark:border-light/10 bg-light/30 dark:bg-dark/30 backdrop-blur-md
      overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-light/20 dark:hover:shadow-dark/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -8, scale: 1.02 }}
    >
        {/* Background Glow */}
        <div
            className="absolute -inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)` }}
        />

        {/* Icon Container */}
        <motion.div
            className="w-16 h-16 mb-4 p-3.5 rounded-2xl flex items-center justify-center transition-all duration-500"
            style={{ background: `${color}15` }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
        >
            <div className="w-full h-full relative z-10">
                <Icon />
            </div>
            {/* Inner Glow */}
            <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity"
                style={{ backgroundColor: color }}
            />
        </motion.div>

        {/* Text Content */}
        <div className="text-center relative z-10">
            <h4 className="font-bold text-lg dark:text-light mb-1">{name}</h4>
            <p className="text-xs text-dark/60 dark:text-light/60 font-medium px-2 leading-relaxed">{desc}</p>
        </div>

        {/* Bottom accent line */}
        <motion.div 
            className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
            style={{ backgroundColor: color }}
        />
    </motion.div>
);

const Skills = () => (
    <motion.div
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full mt-32 sm:mt-16 xs:mt-12 px-4"
    >
        {/* Heading Section */}
        <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 dark:bg-primaryDark/10 border border-primary/20 dark:border-primaryDark/20"
            >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary dark:text-primaryDark">Expertise</span>
            </motion.div>
            
            <motion.h2
                className="font-bold text-7xl dark:text-light md:text-6xl sm:text-5xl xs:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-dark to-dark/50 dark:from-light dark:to-light/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Technical Stack
            </motion.h2>
            
            <motion.p
                className="mt-6 text-lg text-dark/60 dark:text-light/60 max-w-2xl mx-auto font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                A comprehensive collection of technologies and tools I leverage to build state-of-the-art web experiences.
            </motion.p>
        </div>

        {/* Categories */}
        <div className="max-w-[1200px] mx-auto space-y-24">
            {categories.map((cat, ci) => (
                <div key={cat.title} className="relative">
                    {/* Category Title with Vertical Accent */}
                    <div className="flex items-center gap-6 mb-12 ml-2">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl filter drop-shadow-lg">{cat.emoji}</span>
                                <h3 className="text-2xl font-black dark:text-light uppercase tracking-tighter sm:text-xl">
                                    {cat.title}
                                </h3>
                            </div>
                            <div className="h-1.5 w-12 rounded-full mt-2" style={{ background: `linear-gradient(90deg, ${cat.borderColor}, transparent)` }} />
                        </div>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-dark/10 via-dark/5 to-transparent dark:from-light/10 dark:via-light/5" />
                    </div>

                    {/* Skill Grid */}
                    <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
                        {cat.skills.map((skill, si) => (
                            <SkillCard key={skill.name} {...skill} index={si} />
                        ))}
                    </div>

                    {/* Decorative blurred background element */}
                    <div 
                        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none blur-[100px]"
                        style={{ backgroundColor: cat.skills[0].color }}
                    />
                </div>
            ))}
        </div>

        {/* Bottom Marquee (Refined) */}
        <div className="mt-32 relative py-10 overflow-hidden border-t border-b border-dark/5 dark:border-light/5">
            <motion.div
                className="flex gap-12 w-max whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                {[...floatingTech, ...floatingTech].map((tag, i) => (
                    <span
                        key={i}
                        className="text-4xl font-black uppercase tracking-[0.2em] text-dark/5 dark:text-light/5 transition-colors hover:text-primary dark:hover:text-primaryDark cursor-default"
                    >
                        {tag}
                    </span>
                ))}
            </motion.div>
        </div>
    </motion.div>
);

export default Skills;
