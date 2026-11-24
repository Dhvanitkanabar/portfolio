import "@/styles/globals.css";
import React, { useEffect } from "react";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SceneBackground from "@/components/canvas/SceneBackground";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Refresh ScrollTrigger when fonts and images are completely settled
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleWindowLoad);
    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Accessible Skip-to-Content Link for Screen Readers & Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:px-5 focus:py-2.5 focus:bg-cyan-500 focus:text-neutral-950 focus:font-extrabold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300"
      >
        Skip to main content
      </a>

      <Preloader />
      <CustomCursor />
      <ScrollProgressBar />

      {/* Base theme background */}
      <div className="fixed inset-0 -z-20 bg-light dark:bg-dark transition-colors duration-300" />

      {/* Fixed interactive 3D WebGL / CSS Mesh background */}
      <SceneBackground />

      <SmoothScrollProvider>
        <div
          className={`${montserrat.variable} font-mont text-dark dark:text-light w-full min-h-screen relative z-10 selection:bg-cyan-500/20 selection:text-cyan-500`}
        >
          {/* Header Landmark */}
          <NavBar />

          {/* Main Content Landmark */}
          <main id="main-content" className="w-full">
            <Component key={router.asPath} {...pageProps} />
          </main>

          {/* Footer Landmark */}
          <Footer />
        </div>
      </SmoothScrollProvider>
    </>
  );
}
