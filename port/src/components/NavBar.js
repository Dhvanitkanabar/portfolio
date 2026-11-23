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
        <a 
            href={href} 
            onClick={handleNavClick} 
            className={`${className} relative group text-xs font-semibold tracking-wide transition-colors duration-300 py-1 ${
                isActive 
                    ? "text-primary dark:text-primaryDark font-bold" 
                    : "text-dark/75 dark:text-light/75 hover:text-dark dark:hover:text-light"
            }`}
        >
            {title}
            <span
                className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-primaryDark ${
                    isActive ? "w-full" : "w-0"
                }`}
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
            className={`${className} relative group my-1.5 text-sm font-semibold transition-all duration-300 ${
                isActive 
                    ? "text-primary dark:text-primaryDark translate-x-2 font-bold" 
                    : "text-dark/75 dark:text-light/75 hover:text-dark dark:hover:text-light"
            }`}
            onClick={handleClick}
        >
            {title}
        </a>
    );
};

const socialLinks = [
    { href: "https://github.com/DhvanitKanabar", Icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/dhvanit-kanabar", Icon: LinkedInIcon, label: "LinkedIn" },
    { href: "https://x.com/Dhvanit_1207", Icon: TwitterIcon, label: "Twitter" },
    { href: "https://www.youtube.com/@Dhvanit_1207", Icon: YouTubeIcon, label: "YouTube" },
    { href: "https://leetcode.com/u/zrbt3DJG94/", Icon: LeetCodeIcon, label: "LeetCode" },
];

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sectionIds = ["home", "about", "skills", "projects", "figma-designs", "certificates", "achievements", "education", "contact"];
    const activeId = useScrollSpy(sectionIds);

    useEffect(() => {
        if (activeId) {
            let title = "Dhvanit Kanabar";
            if (activeId !== "home") {
                const formattedId = activeId
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                title = `${formattedId} | ${title}`;
            } else {
                title = `${title} | Professional Portfolio`;
            }
            document.title = title;
        }
    }, [activeId]);

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
            className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 px-32 xl:px-20 lg:px-12 md:px-8 sm:px-6 xs:px-4 py-4 flex items-center justify-between
            ${scrolled ? "bg-light/70 dark:bg-dark/70 backdrop-blur-xl py-2.5 border-b border-dark/5 dark:border-light/5 shadow-sm" : "bg-transparent"}`}
        >
            {/* Logo */}
            <div className="z-[110]">
                <Logo />
            </div>

            {/* Desktop Navigation with smaller text and compact padding */}
            <nav className="flex items-center gap-5 xl:gap-4 bg-dark/5 dark:bg-light/5 px-6 py-2 rounded-full backdrop-blur-md border border-dark/10 dark:border-light/10 lg:hidden shadow-sm">
                <CustomLink href="#home" title="Home" isActive={activeId === "home"} />
                <CustomLink href="#about" title="About" isActive={activeId === "about"} />
                <CustomLink href="#skills" title="Skills" isActive={activeId === "skills"} />
                <CustomLink href="#projects" title="Projects" isActive={activeId === "projects"} />
                <CustomLink href="#figma-designs" title="Design" isActive={activeId === "figma-designs"} />
                <CustomLink href="#certificates" title="Certificates" isActive={activeId === "certificates"} />
                <CustomLink href="#achievements" title="Awards" isActive={activeId === "achievements"} />
                <CustomLink href="#education" title="Education" isActive={activeId === "education"} />
                <CustomLink href="#contact" title="Contact" isActive={activeId === "contact"} />
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center gap-4 z-[110] lg:hidden">
                <div className="flex items-center gap-3.5 border-r border-dark/20 dark:border-light/20 pr-4">
                    {socialLinks.map(({ href, Icon, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{ y: -2, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-5 text-dark/70 dark:text-light/70 transition-colors hover:text-primary dark:hover:text-primaryDark"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    aria-label="Toggle Theme"
                    className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-105 shadow-md
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {mode === "dark" ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
                </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
                className="hidden lg:flex flex-col justify-center items-center z-[110] relative w-10 h-10 rounded-xl bg-dark/5 dark:bg-light/5 backdrop-blur-sm border border-dark/10 dark:border-light/10"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}></span>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[105] hidden lg:block">
                        <div className="absolute inset-0 bg-dark/20 dark:bg-dark/40 backdrop-blur-[2px]" onClick={toggleMenu} />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, x: "20%", y: "-20%" }}
                            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, x: "20%", y: "-20%" }}
                            transition={{ type: "spring", damping: 20, stiffness: 150 }}
                            className="absolute top-20 right-6 w-[75vw] max-w-[260px] rounded-3xl bg-light/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-dark/10 dark:border-light/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col p-6"
                        >
                            <nav className="flex flex-col mb-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-dark/40 dark:text-light/40 mb-3 font-bold">Navigation</span>
                                <CustomMobileLink href="#home" title="Home" toggle={toggleMenu} isActive={activeId === "home"} />
                                <CustomMobileLink href="#about" title="About" toggle={toggleMenu} isActive={activeId === "about"} />
                                <CustomMobileLink href="#skills" title="Skills" toggle={toggleMenu} isActive={activeId === "skills"} />
                                <CustomMobileLink href="#projects" title="Projects" toggle={toggleMenu} isActive={activeId === "projects"} />
                                <CustomMobileLink href="#figma-designs" title="Design" toggle={toggleMenu} isActive={activeId === "figma-designs"} />
                                <CustomMobileLink href="#certificates" title="Certificates" toggle={toggleMenu} isActive={activeId === "certificates"} />
                                <CustomMobileLink href="#achievements" title="Awards" toggle={toggleMenu} isActive={activeId === "achievements"} />
                                <CustomMobileLink href="#education" title="Education" toggle={toggleMenu} isActive={activeId === "education"} />
                                <CustomMobileLink href="#contact" title="Contact" toggle={toggleMenu} isActive={activeId === "contact"} />
                            </nav>

                            <div className="mt-auto pt-4 border-t border-dark/10 dark:border-light/10">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-dark/40 dark:text-light/40 mb-3 block font-bold">Social</span>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {socialLinks.map(({ href, Icon, label }) => (
                                            <motion.a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={label}
                                                whileHover={{ y: -2, scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-5 text-dark/70 dark:text-light/70 transition-colors hover:text-primary dark:hover:text-primaryDark"
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
                                        {mode === "dark" ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
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
