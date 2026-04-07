import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import emailjs from "@emailjs/browser";

// ─── Social icon paths ────────────────────────────────────────────────────────
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GithubSVG = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.849L1.255 2.25H8.08l4.261 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
);

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77c.42-1.56.42-4.81.42-4.81s0-3.25-.42-4.81zM9.99 15.5V8.5l6.1 3.5l-6.1 3.5z" />
    </svg>
);

const LeetCodeIcon = () => (
    <svg viewBox="0 0 50 50" fill="currentColor" className="w-6 h-6">
        <path d="M29.659 11.14 18.709 22.09a2.5 2.5 0 0 0 3.535 3.535l8.418-8.417 2.827 2.828-8.418 8.417a2.5 2.5 0 0 0 3.535 3.535l10.95-10.949c2.929-2.929 2.929-7.678 0-10.607-2.93-2.929-7.678-2.929-10.607 0l.11-.292z" />
        <path d="M34.5 34.5h-19a2.5 2.5 0 0 0 0 5h19a2.5 2.5 0 0 0 0-5z" />
        <path d="M20.341 22.09 9.39 11.14C6.461 8.211 6.461 3.462 9.39.533l.11.293C9.39.24 9.5 0 9.5 0s2.83-.17 4.596 1.597L25.048 12.55 20.341 22.09z" />
    </svg>
);

const contactInfo = [
    { icon: "📧", label: "Email", value: "dhvanitkanabar.cg@gmail.com", href: "mailto:dhvanitkanabar.cg@gmail.com" },
    { icon: "📍", label: "Location", value: "Kalol, Gujarat, India", href: "#" },
    { icon: "🕒", label: "Response", value: "Within 24 hours", href: "#" },
];

const socialLinks = [
    { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/dhvanit-kanabar/", color: "#0077B5" },
    { icon: <GithubSVG />, label: "GitHub", href: "https://github.com/Dhvanitkanabar", color: "#6e5494" },
    { icon: <TwitterIcon />, label: "Twitter", href: "https://x.com/Dhvanit_1207", color: "#1DA1F2" },
    { icon: <YouTubeIcon />, label: "YouTube", href: "https://www.youtube.com/@Dhvanit_1207", color: "#FF0000" },
    { icon: <LeetCodeIcon />, label: "LeetCode", href: "https://leetcode.com/u/zrbt3DJG94/", color: "#FFA116" },
];

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp3D = {
    hidden: { opacity: 0, rotateX: -20, y: 40, scale: 0.95 },
    visible: {
        opacity: 1, rotateX: 0, y: 0, scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const ContactSection = () => {
    const formRef = useRef();
    const [status, setStatus] = useState({ loading: false, success: false, error: false });
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("dhvanitkanabar.cg@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Use environment variables for security and easier configuration
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

        if (SERVICE_ID === "YOUR_SERVICE_ID" || !SERVICE_ID) {
            console.error("❌ EmailJS Error: Configuration Missing in Environment Variables!");
            setStatus({ loading: false, success: false, error: "config_missing" });
            return;
        }

        setStatus({ loading: true, success: false, error: false });

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus({ loading: false, success: true, error: false });
                formRef.current.reset();
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            }, (error) => {
                console.error("EmailJS Send Error:", error.text || error);
                setStatus({ loading: false, success: false, error: "send_failed" });
                setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 5000);
            });
    };

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, rotateX: -14, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            style={{ perspective: "1400px", transformOrigin: "top center" }}
            className="w-full py-24 sm:py-16 xs:py-12 relative overflow-hidden"
        >
            {/* Animated background gradient blobs */}
            <motion.div
                className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-20 pointer-events-none -z-10"
                style={{ background: "radial-gradient(circle, #B63E96 0%, transparent 70%)", filter: "blur(80px)" }}
                animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-10 dark:opacity-20 pointer-events-none -z-10"
                style={{ background: "radial-gradient(circle, #58E6D9 0%, transparent 70%)", filter: "blur(80px)" }}
                animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 30, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 dark:opacity-8 pointer-events-none -z-10"
                style={{ background: "radial-gradient(circle, #7B4FE9 0%, transparent 70%)", filter: "blur(100px)" }}
                animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <Layout>
                {/* Heading */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <AnimatedText
                        text="Let's Build Together"
                        className="!text-7xl xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl xs:!text-2xl"
                    />
                    <motion.p
                        className="mt-6 text-xl sm:text-lg xs:text-base font-medium text-dark/70 dark:text-light/70 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Have a project in mind? Let&apos;s turn your vision into reality.
                        I&apos;m always open to new opportunities and creative collaborations.
                    </motion.p>
                </motion.div>

                {/* Main grid */}
                <div className="grid grid-cols-2 gap-12 lg:grid-cols-1 sm:gap-8">
                    {/* Left — contact info cards */}
                    <motion.div
                        className="flex flex-col gap-6"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ perspective: "1000px" }}
                    >
                        <motion.h3
                            className="text-xl font-bold uppercase tracking-[0.2em] text-primary dark:text-primaryDark"
                            variants={fadeUp3D}
                        >
                            Get In Touch
                        </motion.h3>

                        {contactInfo.map(({ icon, label, value, href }) => (
                            <motion.a
                                key={label}
                                href={href}
                                className="flex items-center gap-5 p-5 rounded-2xl border border-dark/10 dark:border-light/10
                  bg-light/60 dark:bg-dark/60 backdrop-blur-sm group cursor-pointer
                  hover:border-primary/50 dark:hover:border-primaryDark/50 transition-all duration-300"
                                variants={fadeUp3D}
                                whileHover={{
                                    x: 8,
                                    boxShadow: "0 10px 30px -10px rgba(182,62,150,0.25)",
                                    transition: { duration: 0.25 },
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <motion.span
                                    className="text-3xl"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {icon}
                                </motion.span>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-dark/50 dark:text-light/50 group-hover:text-primary dark:group-hover:text-primaryDark transition-colors">
                                        {label}
                                    </p>
                                    <p className="font-bold text-dark dark:text-light mt-0.5 sm:text-sm">{value}</p>
                                </div>
                                <motion.span
                                    className="ml-auto text-dark/30 dark:text-light/30 group-hover:text-primary dark:group-hover:text-primaryDark transition-colors"
                                    whileHover={{ x: 4 }}
                                >
                                    →
                                </motion.span>
                            </motion.a>
                        ))}

                        {/* Social links */}
                        <motion.div className="flex items-center gap-4 mt-2" variants={fadeUp3D}>
                            {socialLinks.map(({ icon, label, href, color }) => (
                                <motion.div
                                    key={label}
                                    whileHover={{ scale: 1.15, y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={href}
                                        target="_blank"
                                        className="flex items-center justify-center w-12 h-12 rounded-xl border border-dark/10 dark:border-light/10
                      bg-light dark:bg-dark hover:border-[color] transition-all duration-300 text-dark dark:text-light"
                                        style={{ "--hover-color": color }}
                                        aria-label={label}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = color}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = ""}
                                    >
                                        {icon}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Contact Form Card */}
                    <motion.div
                        className="flex flex-col p-10 sm:p-8 xs:p-4 rounded-3xl
              border border-dark/10 dark:border-light/10 relative overflow-hidden
              bg-light/40 dark:bg-dark/40 backdrop-blur-lg"
                        initial={{ opacity: 0, rotateX: -15, y: 60, scale: 0.94 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ perspective: "1000px", transformOrigin: "top center" }}
                    >
                        {/* Animated border gradient */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none -z-10"
                            style={{
                                background: "linear-gradient(135deg, rgba(182,62,150,0.15) 0%, transparent 50%, rgba(88,230,217,0.15) 100%)",
                                backgroundSize: "200% 200%",
                            }}
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />

                        <h3 className="text-2xl font-bold dark:text-light mb-8 text-center">Send a Message</h3>

                        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-dark/60 dark:text-light/60 ml-2">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full p-4 rounded-xl bg-light/50 dark:bg-dark/50 border border-dark/10 dark:border-light/10
                    focus:border-primary dark:focus:border-primaryDark outline-none transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-dark/60 dark:text-light/60 ml-2">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full p-4 rounded-xl bg-light/50 dark:bg-dark/50 border border-dark/10 dark:border-light/10
                    focus:border-primary dark:focus:border-primaryDark outline-none transition-all duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-dark/60 dark:text-light/60 ml-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full p-4 rounded-xl bg-light/50 dark:bg-dark/50 border border-dark/10 dark:border-light/10
                    focus:border-primary dark:focus:border-primaryDark outline-none transition-all duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`mt-4 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
                  ${status.loading ? "bg-dark/50 dark:bg-light/50 cursor-not-allowed" : "bg-dark text-light dark:bg-light dark:text-dark hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-primary/20"}`}
                            >
                                {status.loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-light/30 border-t-light rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : status.success ? (
                                    "✨ Message Sent!"
                                ) : status.error === "config_missing" ? (
                                    "❌ Config Missing"
                                ) : status.error === "send_failed" ? (
                                    "❌ Send Failed"
                                ) : (
                                    "Send Message →"
                                )}
                            </button>

                            <div className="text-center mt-2">
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    className="text-xs font-medium text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-primaryDark transition-colors"
                                >
                                    {copied ? "✅ Email Copied!" : "or copy: dhvanitkanabar.cg@gmail.com"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom availability badge */}
                <motion.div
                    className="flex items-center justify-center mt-20 gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.div
                        className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-bold text-dark/70 dark:text-light/70 uppercase tracking-widest">
                        Available for new projects
                    </span>
                </motion.div>
            </Layout>
        </motion.section>
    );
};

export default ContactSection;
