import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
    GithubIcon,
    LinkedInIcon,
    TwitterIcon,
    YouTubeIcon,
    LeetCodeIcon,
    SunIcon,
    MoonIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useNavTransition } from "./hooks/useNavTransition";
import { useScrollSpy } from "./hooks/useScrollSpy";

const CustomLink = ({ href, title, className = "", isActive }) => {
    const { handleNavClick } = useNavTransition();
    return (
        <a href={href} onClick={handleNavClick} className={`${className} relative group font-semibold ${isActive ? "text-primary dark:text-primaryDark" : "text-dark dark:text-light"}`}>
            {title}
            <span
                className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-primaryDark ${isActive ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </a>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle, isActive }) => {
    const { handleNavClick } = useNavTransition();
    const handleClick = (e) => {
        toggle();
        handleNavClick(e);
    };

    return (
        <a
            href={href}
            className={`${className} relative group my-1 text-lg font-semibold transition-all duration-300 ${isActive ? "text-primary dark:text-primaryDark translate-x-2" : "text-dark/80 dark:text-light/80"}`}
            onClick={handleClick}
        >
            {title}
        </a>
    );
};

const socialLinks = [
    { href: "https://github.com/Dhvanitkanabar", Icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/dhvanit-kanabar/", Icon: LinkedInIcon, label: "LinkedIn" },
    { href: "https://x.com/Dhvanit_1207", Icon: TwitterIcon, label: "Twitter" },
    { href: "https://www.youtube.com/@Dhvanit_1207", Icon: YouTubeIcon, label: "YouTube" },
    { href: "https://leetcode.com/u/zrbt3DJG94/", Icon: LeetCodeIcon, label: "LeetCode" },
];

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sectionIds = ["home", "about", "skills", "projects", "certificates", "education", "contact"];
    const activeId = useScrollSpy(sectionIds);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 px-24 xl:px-12 lg:px-8 md:px-6 py-4 flex items-center justify-between
            ${scrolled ? "bg-light/60 dark:bg-dark/60 backdrop-blur-xl py-3 md:py-2 border-b border-dark/5 dark:border-light/5" : "bg-transparent"}`}
        >
            {/* Logo */}
            <div className="z-[110]">
                <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-8 bg-dark/5 dark:bg-light/5 px-8 py-3 rounded-full backdrop-blur-md border border-dark/10 dark:border-light/10 lg:hidden">
                <CustomLink href="#home" title="Home" isActive={activeId === "home"} />
                <CustomLink href="#about" title="About" isActive={activeId === "about"} />
                <CustomLink href="#skills" title="Skills" isActive={activeId === "skills"} />
                <CustomLink href="#projects" title="Projects" isActive={activeId === "projects"} />
                <CustomLink href="#certificates" title="Certificates" isActive={activeId === "certificates"} />
                <CustomLink href="#education" title="Education" isActive={activeId === "education"} />
                <CustomLink href="#contact" title="Contact" isActive={activeId === "contact"} />
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center gap-5 z-[110] lg:hidden">
                <div className="flex items-center gap-4 border-r border-dark/20 dark:border-light/20 pr-5">
                    {socialLinks.map(({ href, Icon, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{ y: -3, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7 text-dark dark:text-light transition-colors hover:text-primary dark:hover:text-primaryDark"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`flex items-center justify-center rounded-full p-2.5 transition-all duration-300 hover:scale-110 shadow-lg
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {mode === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
                className="hidden lg:flex flex-col justify-center items-center z-[110] relative w-12 h-12 md:w-10 md:h-10 rounded-2xl md:rounded-xl bg-dark/5 dark:bg-light/5 backdrop-blur-sm border border-dark/10 dark:border-light/10"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}></span>
            </button>

            {/* Unique Floating Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[105] hidden lg:block">
                        {/* Transparent Backdrop to close */}
                        <div className="absolute inset-0 bg-dark/20 dark:bg-dark/40 backdrop-blur-[2px]" onClick={toggleMenu} />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: "20%", y: "-20%" }}
                            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, x: "20%", y: "-20%" }}
                            transition={{ type: "spring", damping: 20, stiffness: 150 }}
                            className="absolute top-20 right-6 w-[75vw] max-w-[280px] rounded-3xl bg-light/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-dark/10 dark:border-light/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col p-6"
                        >
                            <nav className="flex flex-col mb-5">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-dark/40 dark:text-light/40 mb-3 font-bold">Navigation</span>
                                <CustomMobileLink href="#home" title="Home" toggle={toggleMenu} isActive={activeId === "home"} />
                                <CustomMobileLink href="#about" title="About" toggle={toggleMenu} isActive={activeId === "about"} />
                                <CustomMobileLink href="#skills" title="Skills" toggle={toggleMenu} isActive={activeId === "skills"} />
                                <CustomMobileLink href="#projects" title="Projects" toggle={toggleMenu} isActive={activeId === "projects"} />
                                <CustomMobileLink href="#certificates" title="Certificates" toggle={toggleMenu} isActive={activeId === "certificates"} />
                                <CustomMobileLink href="#education" title="Education" toggle={toggleMenu} isActive={activeId === "education"} />
                                <CustomMobileLink href="#contact" title="Contact" toggle={toggleMenu} isActive={activeId === "contact"} />
                            </nav>

                            <div className="mt-auto pt-4 border-t border-dark/10 dark:border-light/10">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-dark/40 dark:text-light/40 mb-4 block font-bold">Social Presence</span>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-4">
                                        {socialLinks.map(({ href, Icon, label }) => (
                                            <motion.a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={label}
                                                whileHover={{ y: -3, scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-7 text-dark dark:text-light transition-colors hover:text-primary dark:hover:text-primaryDark"
                                            >
                                                <Icon />
                                            </motion.a>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                        className={`flex items-center justify-center rounded-full p-2 transition-all duration-300
                                            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                                    >
                                        {mode === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;
