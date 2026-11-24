import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full border-t border-solid border-dark/15 dark:border-light/15 bg-light/70 dark:bg-dark/70 backdrop-blur-md font-medium text-base dark:text-light sm:text-sm relative z-20"
        >
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:text-center">
                <span className="text-dark/70 dark:text-light/70">
                    {new Date().getFullYear()} &copy; Dhvanit Kanabar. All Rights Reserved.
                </span>
                <div className="flex items-center lg:py-2 text-dark/80 dark:text-light/80">
                    Crafted with{" "}
                    <span className="text-primary dark:text-primaryDark text-xl px-1.5 animate-pulse">
                        &#9825;
                    </span>
                    &nbsp;using Next.js &amp; Three.js
                </div>
                <Link
                    href="mailto:dhvanitkanabar@gmail.com"
                    className="text-primary dark:text-primaryDark font-bold hover:underline underline-offset-4 transition-all"
                >
                    Say Hello &rarr;
                </Link>
            </Layout>
        </motion.footer>
    );
};

export default Footer;
