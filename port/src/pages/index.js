import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import HireMe from "@/components/HireMe";

// Modular Sections
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import Skills from "@/components/Skills";
import HackathonsSection from "@/components/sections/HackathonsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import Education from "@/components/Education";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhvanit Kanabar | Professional Portfolio</title>
        <meta name="description" content="Portfolio of Dhvanit Kanabar, Frontend Developer" />
        <link rel="icon" href="/favicon-circle.png" type="image/png" />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen text-dark dark:text-light">
        <div data-content="true">
          <HomeSection />
          <AboutSection />
          <Skills />
          <HackathonsSection />
          <ProjectsSection />
          <CertificatesSection />
          <Education />
          <ContactSection />
          <HireMe />
        </div>
      </main>
    </>
  );
}
