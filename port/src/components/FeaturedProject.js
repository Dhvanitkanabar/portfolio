import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, doc }) => {
    return (
        <article className="w-full relative rounded-[2.5rem] border border-dark/10 bg-light/60 backdrop-blur-md dark:bg-dark/60 dark:border-light/10 p-12 lg:p-8 sm:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] group text-left">
            {/* Animated backgrounds */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-primary/10 transition-colors duration-700" />

            <div className="flex items-center justify-between gap-12 lg:flex-col lg:gap-8 relative z-10">
                {/* Image Section */}
                <Link
                    href={link}
                    target="_blank"
                    className="w-[55%] lg:w-full cursor-pointer overflow-hidden rounded-3xl border border-dark/5 dark:border-light/5 shadow-2xl group-hover:border-primary/30 transition-all duration-500 bg-dark/5 dark:bg-light/5"
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
                <div className="w-[45%] lg:w-full flex flex-col items-start justify-center">
                    <span className="text-primary dark:text-primaryDark font-black text-xs uppercase tracking-[0.4em] mb-4">
                        {type}
                    </span>

                    <Link
                        href={link}
                        target="_blank"
                        className="hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                    >
                        <h2 className="text-5xl xl:text-4xl lg:text-3xl font-black text-dark dark:text-light mb-6 leading-tight">
                            {title}
                        </h2>
                    </Link>

                    <p className="text-xl xl:text-lg lg:text-base font-medium text-dark/70 dark:text-light/70 mb-8 leading-relaxed">
                        {summary}
                    </p>

                    <div className="flex items-center gap-4 sm:gap-2 w-full flex-wrap">
                        {link && link !== "#" && (
                            <Link
                                href={link}
                                target="_blank"
                                className="rounded-2xl bg-dark text-light py-4 px-10 sm:px-6 text-lg sm:text-base font-black dark:bg-light dark:text-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-dark/10 dark:shadow-light/5"
                            >
                                Live Demo
                            </Link>
                        )}
                        {doc && (
                            <Link
                                href={doc}
                                target="_blank"
                                className="rounded-2xl bg-primary/10 text-primary py-4 px-8 sm:px-6 text-lg sm:text-base font-black border border-primary/20 dark:bg-primaryDark/10 dark:text-primaryDark dark:border-primaryDark/20 hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-all duration-300"
                            >
                                Documentation
                            </Link>
                        )}
                        <Link
                            href={github}
                            target="_blank"
                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-primary dark:hover:text-primaryDark transition-all duration-300 hover:scale-110"
                        >
                            <GithubIcon className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProject;
