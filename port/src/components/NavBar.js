import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
    GithubIcon,
    LinkedInIcon,
    TwitterIcon,
    SunIcon,
    MoonIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useNavTransition } from "./hooks/useNavTransition";
import { useScrollSpy } from "./hooks/useScrollSpy";

const CustomLink = ({ href, title, className = "", isActive }) => {
    const { handleNavClick } = useNavTransition();
    return (
        <a href={href} onClick={handleNavClick} className={`${className} relative group ${isActive ? "text-primary dark:text-primaryDark" : ""}`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${isActive ? "w-full bg-primary dark:bg-primaryDark" : "w-0"}`}
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
            className={`${className} relative group my-2 ${isActive ? "text-primary dark:text-primaryDark" : "text-light dark:text-dark"}`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${isActive ? "w-full bg-primary dark:bg-primaryDark" : "w-0"}`}
            >
                &nbsp;
            </span>
        </a>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sectionIds = ["home", "about", "skills", "projects", "certificates", "contact"];
    const activeId = useScrollSpy(sectionIds);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className="w-[90%] sm:w-[95%] max-w-6xl mx-auto px-12 py-3 font-medium flex items-center justify-between
    dark:text-light fixed top-6 left-0 right-0 z-50 rounded-2xl transition-all duration-300
    bg-light/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border border-dark/10 dark:border-light/10"
        >
            <button
                className="flex-col justify-center items-center hidden lg:flex"
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                        }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
                        }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                        }`}
                ></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav className="flex items-center">
                    <CustomLink href="#home" title="Home" className="mr-6 text-sm lg:text-base" isActive={activeId === "home"} />
                    <CustomLink href="#about" title="About" className="mx-6 text-sm lg:text-base" isActive={activeId === "about"} />
                    <CustomLink href="#skills" title="Skills" className="mx-6 text-sm lg:text-base" isActive={activeId === "skills"} />
                    <CustomLink href="#projects" title="Projects" className="mx-6 text-sm lg:text-base" isActive={activeId === "projects"} />
                    <CustomLink href="#certificates" title="Certificates" className="mx-6 text-sm lg:text-base" isActive={activeId === "certificates"} />
                    <CustomLink href="#contact" title="Contact" className="ml-6 text-sm lg:text-base" isActive={activeId === "contact"} />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href="https://github.com/Dhvanitkanabar"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 mr-4"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/dhvanit-kanabar/"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 mx-4"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://x.com/Dhvanit_1207"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-5 ml-4"
                    >
                        <TwitterIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-6 flex items-center justify-center rounded-full p-1.5 transition-colors
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {mode === "dark" ? (
                            <SunIcon className={"fill-dark w-4 h-4"} />
                        ) : (
                            <MoonIcon className={"fill-dark w-4 h-4"} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-2xl backdrop-blur-md py-24"
                >
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink href="#home" title="Home" className="text-lg" toggle={handleClick} isActive={activeId === "home"} />
                        <CustomMobileLink href="#about" title="About" className="text-lg" toggle={handleClick} isActive={activeId === "about"} />
                        <CustomMobileLink href="#skills" title="Skills" className="text-lg" toggle={handleClick} isActive={activeId === "skills"} />
                        <CustomMobileLink href="#projects" title="Projects" className="text-lg" toggle={handleClick} isActive={activeId === "projects"} />
                        <CustomMobileLink href="#certificates" title="Certificates" className="text-lg" toggle={handleClick} isActive={activeId === "certificates"} />
                        <CustomMobileLink href="#contact" title="Contact" className="text-lg" toggle={handleClick} isActive={activeId === "contact"} />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap mt-4">
                        <motion.a
                            href="https://github.com/Dhvanitkanabar"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-5 mr-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/dhvanit-kanabar/"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-5 mx-3 sm:mx-1"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://x.com/Dhvanit_1207"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-5 ml-3 sm:mx-1"
                        >
                            <TwitterIcon />
                        </motion.a>

                        <button
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            className={`ml-4 flex items-center justify-center rounded-full p-1.5
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                        >
                            {mode === "dark" ? (
                                <SunIcon className={"fill-dark w-4 h-4"} />
                            ) : (
                                <MoonIcon className={"fill-dark w-4 h-4"} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-1/2 -translate-y-1/2 translate-x-[-50%] lg:static lg:translate-x-0 lg:translate-y-0">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
