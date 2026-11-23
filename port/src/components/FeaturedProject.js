import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, YouTubeIcon, PostmanIcon, FigmaIcon } from "./Icons";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, youtube, postman, figma, frontend, backend, tech, reverse = false }) => {
    return (
        <article className="w-full relative rounded-[2.5rem] border border-dark/10 bg-light/60 backdrop-blur-md dark:bg-dark/60 dark:border-light/10 p-12 lg:p-8 sm:p-6 xs:p-4 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] group text-left">
            {/* Animated backgrounds */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-primary/10 transition-colors duration-700" />

            <div className={`flex items-center justify-between gap-12 lg:flex-col lg:gap-8 sm:gap-6 relative z-10 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
                {/* Image Section */}
                <Link
                    href={link || github}
                    target="_blank"
                    className="w-[52%] lg:w-full cursor-pointer overflow-hidden rounded-3xl border border-dark/5 dark:border-light/5 shadow-2xl group-hover:border-primary/30 transition-all duration-500 bg-dark/5 dark:bg-light/5 flex-shrink-0"
                >
                    <FramerImage
                        src={img}
                        alt={title}
                        className="w-full h-auto object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        priority
                        width={1000}
                        height={600}
                    />
                </Link>

                {/* Content Section */}
                <div className="w-[44%] lg:w-full flex flex-col items-start justify-center">
                    <span className="text-primary dark:text-primaryDark font-black text-xs uppercase tracking-[0.4em] mb-4">
                        {type}
                    </span>

                    <Link
                        href={link || github}
                        target="_blank"
                        className="hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                    >
                        <h2 className="text-4xl xl:text-3xl lg:text-2xl sm:text-xl font-black text-dark dark:text-light mb-4 leading-tight">
                            {title}
                        </h2>
                    </Link>

                    <p className="text-lg xl:text-base lg:text-sm font-medium text-dark/70 dark:text-light/70 mb-5 leading-relaxed">
                        {summary}
                    </p>

                    {/* Tech Badges */}
                    {tech && tech.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 rounded-lg text-xs font-bold bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-dark/70 dark:text-light/70"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-3 sm:gap-2 w-full flex-wrap">
                        {link && link !== "#" && (
                            <Link
                                href={link}
                                target="_blank"
                                className="rounded-xl bg-dark text-light py-2.5 px-6 sm:px-4 sm:py-2 text-base sm:text-xs font-black dark:bg-light dark:text-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-dark/10 dark:shadow-light/5 whitespace-nowrap"
                            >
                                Live Demo
                            </Link>
                        )}
                        {frontend && (
                            <Link
                                href={frontend}
                                target="_blank"
                                className="rounded-xl bg-primary/10 text-primary py-2.5 px-5 sm:px-3 sm:py-2 text-base sm:text-xs font-black border border-primary/20 dark:bg-primaryDark/10 dark:text-primaryDark dark:border-primaryDark/20 hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-all duration-300 whitespace-nowrap"
                            >
                                Frontend
                            </Link>
                        )}
                        {backend && (
                            <Link
                                href={backend}
                                target="_blank"
                                className="rounded-xl bg-primary/10 text-primary py-2.5 px-5 sm:px-3 sm:py-2 text-base sm:text-xs font-black border border-primary/20 dark:bg-primaryDark/10 dark:text-primaryDark dark:border-primaryDark/20 hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-all duration-300 whitespace-nowrap"
                            >
                                Backend
                            </Link>
                        )}
                        <Link
                            href={github}
                            target="_blank"
                            className="w-11 h-11 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-primary dark:hover:text-primaryDark transition-all duration-300 hover:scale-110"
                            title="GitHub Repo"
                        >
                            <GithubIcon className="w-5 h-5 sm:w-4 sm:h-4" />
                        </Link>
                        {youtube && (
                            <Link
                                href={youtube}
                                target="_blank"
                                className="w-11 h-11 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-red-500 transition-all duration-300 hover:scale-110"
                                title="YouTube Demo"
                            >
                                <YouTubeIcon className="w-5 h-5 sm:w-4 sm:h-4 text-red-500" />
                            </Link>
                        )}
                        {postman && (
                            <Link
                                href={postman}
                                target="_blank"
                                className="w-11 h-11 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                                title="API Documentation (Postman)"
                            >
                                <PostmanIcon className="w-5 h-5 sm:w-4 sm:h-4" />
                            </Link>
                        )}
                        {figma && (
                            <Link
                                href={figma}
                                target="_blank"
                                className="w-11 h-11 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-pink-500 transition-all duration-300 hover:scale-110"
                                title="Figma Design"
                            >
                                <FigmaIcon className="w-5 h-5 sm:w-4 sm:h-4" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProject;
