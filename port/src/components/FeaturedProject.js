import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";
import useTilt from "@/components/hooks/useTilt";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 8, perspective: 1200, scale: 1.02 });

    return (
        <motion.article
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="w-full flex items-center justify-between relative rounded-3xl tilt-card
        border-2 border-solid border-dark/10 bg-light/80 backdrop-blur-sm shadow-xl p-12 dark:bg-dark/80
        dark:border-light/10 lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4
        hover:border-primary/50 dark:hover:border-primaryDark/50 transition-all duration-500 group"
            style={{
                background: "linear-gradient(135deg, rgba(182,62,150,0.03) 0%, transparent 50%, rgba(88,230,217,0.03) 100%)",
            }}
            whileHover={{
                boxShadow: "0 30px 60px -15px rgba(182,62,150,0.2), 0 0 0 1px rgba(182,62,150,0.15)",
            }}
            transition={{ boxShadow: { duration: 0.3 } }}
        >
            {/* Gradient overlay on hover */}
            <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none -z-0 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(135deg, rgba(182,62,150,0.05) 0%, transparent 50%, rgba(88,230,217,0.05) 100%)",
                }}
            />

            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full bg-dark/5 dark:bg-light/5 relative z-10"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    priority
                    width={800}
                    height={500}
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-10 lg:w-full lg:pl-0 lg:pt-8 relative z-10">
                <motion.span
                    className="text-primary dark:text-primaryDark font-bold text-sm uppercase tracking-[0.3em]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {type}
                </motion.span>
                <Link
                    href={link}
                    target="_blank"
                    className="group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300"
                >
                    <h2 className="my-3 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">
                        {title}
                    </h2>
                </Link>
                <p className="my-3 font-medium text-dark/70 dark:text-light/70 leading-relaxed text-lg sm:text-base">
                    {summary}
                </p>
                <div className="mt-4 flex items-center w-full gap-6">
                    <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href={link}
                            target="_blank"
                            className="rounded-xl bg-dark text-light p-3 px-10 text-lg font-bold ripple-btn
                dark:bg-light dark:text-dark hover:bg-primary dark:hover:bg-primaryDark hover:text-light dark:hover:text-dark
                shadow-lg transition-all duration-300 sm:px-6 sm:text-base inline-block"
                        >
                            View Case Study
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                        <Link href={github} target="_blank" className="w-10 block">
                            <GithubIcon />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
};

export default FeaturedProject;
