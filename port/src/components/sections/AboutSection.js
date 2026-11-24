"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MOTION_CONFIG } from "@/config/motion.config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

// Line items for the progressive illumination
const BIOGRAPHY_LINES = [
  "Hi, I'm Dhvanit Kanabar,",
  "a Computer Engineering student and developer focused on building practical software applications across web, backend, and mobile platforms.",
  "I enjoy working with APIs, databases, authentication systems, application architecture, and AI-powered integrations.",
  "Through hands-on projects, I have explored building complete applications from frontend interfaces to backend services and mobile experiences.",
  "I am continuously improving my engineering skills and looking for opportunities to contribute to real-world software development teams.",
  "Whether developing responsive React web interfaces, architecting RESTful services in Node.js & Express, modeling schemas in MongoDB and Firebase, or building cross-platform mobile apps with React Native & Expo, I prioritize clean code, robust application security, and tangible user value."
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop pinned line illumination
      mm.add("(min-width: 1024px)", () => {
        const prefersReducedMotion = window.matchMedia(
          MOTION_CONFIG.performance.reducedMotionQuery
        ).matches;

        if (prefersReducedMotion) return;

        const lines = gsap.utils.toArray(".about-illuminated-line");
        if (!lines.length) return;

        // Set initial dimmed state in JS (ensures visible if JS fails, passes WCAG AA contrast)
        gsap.set(lines, { opacity: 0.48 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top 12%",
            end: "+=950",
            pin: true,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        lines.forEach((line) => {
          tl.to(line, {
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          });
        });
      });

      // Refresh ScrollTrigger once DOM/images stabilize
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full flex flex-col items-center justify-center pt-24 sm:pt-16 relative"
    >
      <Layout className="pt-16">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-12 xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-6"
        />

        <div
          ref={pinContainerRef}
          className="grid w-full grid-cols-8 gap-16 xl:gap-10 md:gap-8 sm:gap-6 md:flex md:flex-col items-start"
        >
          {/* Biography: Screen-Reader Accessible + Pinned Line Illumination */}
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:w-full">
            <h2 className="mb-4 text-2xl sm:text-xl font-bold uppercase text-dark/75 dark:text-light/75 tracking-widest">
              Biography
            </h2>

            {/* Screen reader complete continuous text */}
            <p className="sr-only">
              Hi, I&apos;m Dhvanit Kanabar, a Computer Engineering student and developer focused on building practical software applications across web, backend, and mobile platforms. I enjoy working with APIs, databases, authentication systems, application architecture, and AI-powered integrations. Through hands-on projects, I have explored building complete applications from frontend interfaces to backend services and mobile experiences. I am continuously improving my engineering skills and looking for opportunities to contribute to real-world software development teams. Whether developing responsive React web interfaces, architecting RESTful services in Node.js &amp; Express, modeling schemas in MongoDB and Firebase, or building cross-platform mobile apps with React Native &amp; Expo, I prioritize clean code, robust application security, and tangible user value.
            </p>

            {/* Visual progressive illuminated lines */}
            <div aria-hidden="true" className="space-y-4 font-medium text-lg lg:text-base leading-relaxed text-left">
              {BIOGRAPHY_LINES.map((line, idx) => (
                <p
                  key={idx}
                  className="about-illuminated-line text-dark dark:text-light transition-colors duration-200"
                >
                  {idx === 0 ? (
                    <>
                      Hi, I&apos;m{" "}
                      <span className="text-cyan-950 dark:text-cyan-200 font-bold">
                        Dhvanit Kanabar
                      </span>
                      ,
                    </>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Portrait with subtle glass depth */}
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 sm:p-5 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:w-full md:order-1 shadow-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src="/images/profile/aboutus.jpeg"
              alt="Dhvanit Kanabar"
              className="w-full max-w-[300px] h-auto rounded-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-500"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={500}
              height={500}
            />
          </div>

          {/* Key Metrics */}
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:col-span-8 md:w-full md:flex-row md:order-3 sm:gap-4 h-full py-2">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryDark dark:from-primaryDark dark:to-primary">
                <AnimatedNumbers value={10} />+
              </span>
              <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                projects completed
              </h3>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center mt-8 xl:mt-0">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryDark dark:from-primaryDark dark:to-primary">
                B.Tech
              </span>
              <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Computer Engineering (2025-2029)
              </h3>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default AboutSection;
