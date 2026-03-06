import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";
import useTilt from "@/components/hooks/useTilt";

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
    const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 12, perspective: 800, scale: 1.04 });

    return (
        <motion.article
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="w-full flex flex-col items-center justify-center rounded-3xl tilt-card
    border-2 border-solid border-dark/10 bg-light p-6 relative dark:bg-dark dark:border-light/10 xs:p-4
    hover:border-primary/50 dark:hover:border-primaryDark/50 transition-all duration-500 group"
            whileHover={{
                boxShadow: "0 20px 40px -10px rgba(182,62,150,0.25), 0 0 0 1px rgba(182,62,150,0.12)",
                y: -4,
            }}
            transition={{ default: { duration: 0.3 } }}
        >
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-xl bg-dark/5 dark:bg-light/5"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    width={500}
                    height={300}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-6">
                <span className="text-primary dark:text-primaryDark font-bold text-xs uppercase tracking-[0.2em]">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-300"
                >
                    <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-xl group-hover:translate-x-1 transition-transform duration-300">
                        {title}
                    </h2>
                </Link>

                <div className="w-full mt-4 flex items-center justify-between">
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                        <Link
                            href={link}
                            target="_blank"
                            className="text-base font-bold underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all duration-300"
                        >
                            Explore Project →
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                        <Link href={github} target="_blank" className="w-8 md:w-6 block">
                            <GithubIcon />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
};

export default Project;
