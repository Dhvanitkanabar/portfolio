import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon, PostmanIcon } from "@/components/Icons";

// Import screenshots
import warlensHome from "../../public/images/projects/warlens_home.png";
import warlensDashboard from "../../public/images/projects/warlens_dashboard.png";
import warlensAnalytics from "../../public/images/projects/warlens_analytics.png";
import warlensConflicts from "../../public/images/projects/warlens_conflicts.png";
import warlensProfile from "../../public/images/projects/warlens_profile.png";
import warlensDark from "../../public/images/projects/warlens_dark.png";
import warlensMobile from "../../public/images/projects/warlens_mobile.png";

const screenshots = [
  { img: warlensHome, title: "Home Page" },
  { img: warlensDashboard, title: "Dashboard" },
  { img: warlensAnalytics, title: "Analytics" },
  { img: warlensConflicts, title: "Conflicts Page" },
  { img: warlensProfile, title: "Profile Page" },
  { img: warlensDark, title: "Dark Mode Showcase" },
  { img: warlensMobile, title: "Mobile Responsive View" }
];

export default function WarLensProject() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <>
      <Head>
        <title>WarLens | AI-Powered War Economic Impact Analysis Dashboard</title>
        <meta
          name="description"
          content="Production-ready MERN stack dashboard featuring analytics, authentication, CRUD operations, search, filtering, pagination, and SEO optimization."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen pt-24 pb-16 bg-light dark:bg-dark text-dark dark:text-light">
        <Layout className="!pt-8">
          <div className="flex flex-col items-start justify-start w-full">
            {/* Back to Home */}
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-base font-bold text-dark/60 hover:text-primary dark:text-light/60 dark:hover:text-primaryDark transition-colors duration-300 mb-8"
            >
              ← Back to Projects
            </Link>

            {/* Header section */}
            <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-dark/10 dark:border-light/10 pb-8 mb-12">
              <div className="max-w-4xl text-left">
                <span className="text-primary dark:text-primaryDark font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                  Featured Project &bull; Full Stack
                </span>
                <h1 className="text-6xl md:text-5xl sm:text-4xl font-black mb-4 leading-tight">
                  WarLens
                </h1>
                <p className="text-2xl md:text-xl font-medium text-dark/70 dark:text-light/70">
                  AI-Powered War Economic Impact Analysis Dashboard
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 items-center">
                <Link
                  href="https://warlens-rosy.vercel.app"
                  target="_blank"
                  className="rounded-xl bg-dark text-light py-3 px-8 text-base font-black dark:bg-light dark:text-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl whitespace-nowrap"
                >
                  Live Demo
                </Link>
                <Link
                  href="https://github.com/Dhvanitkanabar/warlens"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-primary dark:hover:text-primaryDark transition-all duration-300 hover:scale-110"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="https://github.com/Dhvanitkanabar/warlens-frontend"
                  target="_blank"
                  className="rounded-xl bg-primary/10 text-primary py-3 px-5 text-base font-black border border-primary/20 dark:bg-primaryDark/10 dark:text-primaryDark dark:border-primaryDark/20 hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-all duration-300 whitespace-nowrap"
                >
                  Frontend Repo
                </Link>
                <Link
                  href="https://github.com/Dhvanitkanabar/warlens-backend"
                  target="_blank"
                  className="rounded-xl bg-primary/10 text-primary py-3 px-5 text-base font-black border border-primary/20 dark:bg-primaryDark/10 dark:text-primaryDark dark:border-primaryDark/20 hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-all duration-300 whitespace-nowrap"
                >
                  Backend Repo
                </Link>
                <Link
                  href="https://documenter.getpostman.com/view/warlens-api"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                  title="Postman API Documentation"
                >
                  <PostmanIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Showcase & Carousel */}
            <div className="w-full grid grid-cols-12 gap-12 mb-16">
              <div className="col-span-12 xl:col-span-8 flex flex-col items-center">
                {/* Main Carousel Display */}
                <div className="w-full relative aspect-[16/10] rounded-3xl overflow-hidden border border-dark/10 dark:border-light/10 bg-dark/5 dark:bg-light/5 shadow-2xl group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={screenshots[activeSlide].img}
                        alt={screenshots[activeSlide].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark/40 backdrop-blur-md text-light hover:bg-dark/70 flex items-center justify-center transition-all duration-300 z-10"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dark/40 backdrop-blur-md text-light hover:bg-dark/70 flex items-center justify-center transition-all duration-300 z-10"
                  >
                    →
                  </button>

                  {/* Caption Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-dark/70 backdrop-blur-sm py-4 px-6 text-light flex justify-between items-center">
                    <p className="font-bold text-lg">{screenshots[activeSlide].title}</p>
                    <p className="text-sm text-light/70">
                      {activeSlide + 1} / {screenshots.length}
                    </p>
                  </div>
                </div>

                {/* Thumbnails Navigation */}
                <div className="flex flex-wrap gap-3 mt-6 justify-center w-full">
                  {screenshots.map((screen, idx) => (
                    <button
                      key={screen.title}
                      onClick={() => setActiveSlide(idx)}
                      className={`relative w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activeSlide === idx
                          ? "border-primary dark:border-primaryDark scale-105"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={screen.img} alt={screen.title} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Side Specs Box */}
              <div className="col-span-12 xl:col-span-4 flex flex-col justify-between text-left">
                <div className="rounded-3xl border border-dark/10 bg-light/50 dark:border-light/10 dark:bg-dark/50 p-8">
                  <h3 className="text-2xl font-black mb-6">Project Overview</h3>
                  <p className="font-medium text-dark/80 dark:text-light/80 leading-relaxed mb-8">
                    WarLens is a production-ready MERN stack dashboard designed to analyze the economic effects of wars and conflicts using interactive visualizations and real-time statistics. The platform includes authentication, protected routes, CRUD operations, filtering, search, pagination, analytics, and complete SEO optimization.
                  </p>

                  <h4 className="text-lg font-black uppercase tracking-wider mb-4 text-primary dark:text-primaryDark">
                    Core Categories
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Full Stack", "Analytics Dashboard", "MERN Stack", "Data Visualization"].map((cat) => (
                      <span
                        key={cat}
                        className="py-1 px-3 bg-dark/5 dark:bg-light/5 rounded-full text-xs font-bold border border-dark/10 dark:border-light/10"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-black uppercase tracking-wider mb-4 text-primary dark:text-primaryDark">
                    Deployment
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-dark/40 dark:text-light/40 font-bold uppercase">Frontend</p>
                      <p className="font-black text-sm">Vercel</p>
                    </div>
                    <div>
                      <p className="text-xs text-dark/40 dark:text-light/40 font-bold uppercase">Backend</p>
                      <p className="font-black text-sm">Render</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Feature Highlights & Tech Stack grid */}
            <div className="w-full grid grid-cols-12 gap-12 text-left mb-16">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="text-3xl font-black mb-6 border-b border-dark/10 dark:border-light/10 pb-3">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-medium text-dark/80 dark:text-light/80">
                  {[
                    "Secure JWT Authentication & Authorization",
                    "Protected Routes & Role-Based Access Control",
                    "Complete CRUD Operations for Conflict Data",
                    "Conflict Search, Filter, and Pagination Features",
                    "Interactive Analytics Dashboard with Recharts",
                    "Stunning Pie, Bar, and Line Data Visualizations",
                    "Centralized Redux Toolkit State Management",
                    "Robust Validation with Formik & Yup",
                    "Real-time Toast Notifications & Error Handling",
                    "Immersive Dark & Light Themes",
                    "Full Mobile-Responsive Modern UI Layout",
                    "SEO Architecture with Google Search Console Integration"
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-base">
                      <span className="text-primary dark:text-primaryDark font-black mr-2">&bull;</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <h2 className="text-3xl font-black mb-6 border-b border-dark/10 dark:border-light/10 pb-3">
                  Technology Stack
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-black text-dark/40 dark:text-light/40 uppercase tracking-widest mb-2">
                      Frontend Frameworks & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Vite", "Tailwind CSS", "Redux Toolkit", "Material UI", "Axios", "Formik", "Yup", "React Router", "Recharts"].map((tech) => (
                        <span key={tech} className="py-1.5 px-3.5 bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark rounded-xl text-sm font-black">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-dark/40 dark:text-light/40 uppercase tracking-widest mb-2">
                      Backend & Database
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication"].map((tech) => (
                        <span key={tech} className="py-1.5 px-3.5 bg-dark/5 dark:bg-light/5 border border-dark/15 dark:border-light/15 rounded-xl text-sm font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-dark/40 dark:text-light/40 uppercase tracking-widest mb-2">
                      SEO & Integrations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React Helmet", "Open Graph", "Structured Data", "Sitemap & robots.txt"].map((tech) => (
                        <span key={tech} className="py-1 px-3 bg-dark/5 dark:bg-light/5 rounded-xl text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
}
