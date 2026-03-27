import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";


const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github, summary, doc }) => {
    return (
        <article className="w-full h-full flex flex-col items-start justify-center rounded-[2rem] border border-dark/10 bg-light/40 backdrop-blur-sm p-8 relative dark:bg-dark/40 dark:border-light/10 overflow-hidden transition-all duration-500 hover:shadow-2xl group text-left">
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/5 dark:border-light/5 shadow-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    width={500}
                    height={300}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-6 flex-grow">
                <span className="text-primary dark:text-primaryDark font-black text-[10px] uppercase tracking-[0.3em] mb-2">
                    {type}
                </span>

                <Link
                    href={link}
                    target="_blank"
                    className="hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                >
                    <h2 className="w-full text-left text-2xl font-black dark:text-light mb-4 leading-tight">
                        {title}
                    </h2>
                </Link>

                {summary && (
                    <p className="font-medium text-dark/70 dark:text-light/70 text-sm leading-relaxed mb-6">
                        {summary}
                    </p>
                )}

                <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-dark/5 dark:border-light/5">
                    <div className="flex items-center gap-4">
                        {link && link !== "#" && (
                            <Link
                                href={link}
                                target="_blank"
                                className="text-sm font-black underline underline-offset-8 decoration-2 decoration-primary/30 hover:decoration-primary transition-all duration-300 uppercase tracking-widest text-dark/80 dark:text-light/80 hover:text-dark dark:hover:text-light"
                            >
                                Live Demo →
                            </Link>
                        )}
                        {doc && (
                            <Link
                                href={doc}
                                target="_blank"
                                className="text-[10px] font-black underline underline-offset-4 decoration-1 decoration-dark/10 hover:decoration-primary transition-all duration-300 uppercase tracking-widest text-dark/40 hover:text-primary dark:text-light/40 dark:hover:text-primaryDark"
                            >
                                Docs
                            </Link>
                        )}
                    </div>
                    <Link
                        href={github}
                        target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-primary dark:hover:text-primaryDark transition-all duration-300"
                    >
                        <GithubIcon className="w-5 h-5 text-dark/60 dark:text-light/60 group-hover:text-dark dark:group-hover:text-light" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Project;
