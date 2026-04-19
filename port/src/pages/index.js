import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import HireMe from "@/components/HireMe";

import dynamic from "next/dynamic";

// Modular Sections (Lazy Loaded)
const HomeSection = dynamic(() => import("@/components/sections/HomeSection"), { ssr: true });
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const Skills = dynamic(() => import("@/components/Skills"));
const HackathonsSection = dynamic(() => import("@/components/sections/HackathonsSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const FigmaDesignsSection = dynamic(() => import("@/components/sections/FigmaDesignsSection"));
const CertificatesSection = dynamic(() => import("@/components/sections/CertificatesSection"));
const AchievementsSection = dynamic(() => import("@/components/sections/AchievementsSection"));
const Education = dynamic(() => import("@/components/Education"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhvanit Kanabar | Full Stack Developer & Cybersecurity Enthusiast</title>
        <meta name="description" content="Official portfolio of Dhvanit Kanabar, a Full Stack Developer and Cybersecurity enthusiast. Showcasing projects in React.js, Next.js, and secure communication systems." />
        <meta name="keywords" content="Dhvanit Kanabar, Portfolio, Full Stack Developer, React Developer, Next.js Developer, Cybersecurity, Web Development, India" />
        <meta name="author" content="Dhvanit Kanabar" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE" />
        <link rel="canonical" href="https://dhvanitkanabar.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dhvanitkanabar.vercel.app/" />
        <meta property="og:title" content="Dhvanit Kanabar | Professional Portfolio" />
        <meta property="og:description" content="Explore the technical projects and achievements of Dhvanit Kanabar." />
        <meta property="og:image" content="https://dhvanitkanabar.vercel.app/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dhvanitkanabar.vercel.app/" />
        <meta property="twitter:title" content="Dhvanit Kanabar | Professional Portfolio" />
        <meta property="twitter:description" content="Explore the technical projects and achievements of Dhvanit Kanabar." />
        <meta property="twitter:image" content="https://dhvanitkanabar.vercel.app/og-image.png" />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen text-dark dark:text-light">
        <div data-content="true">
          <HomeSection />
          <AboutSection />
          <Skills />
          <section id="projects" className="w-full">
            <HackathonsSection />
            <ProjectsSection />
          </section>
          <FigmaDesignsSection />
          <CertificatesSection />
          <AchievementsSection />
          <Education />
          <ContactSection />
        </div>
      </main>
      <HireMe />
    </>
  );
}
