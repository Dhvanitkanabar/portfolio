import "@/styles/globals.css";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Preloader />
      <CustomCursor />
      <ScrollProgressBar />

      {/* Base theme background */}
      <div className="fixed inset-0 -z-20 bg-light dark:bg-dark transition-colors duration-300" />

      {/* Fixed interactive 3D WebGL / CSS Mesh background */}
      <SceneBackground />

      <SmoothScrollProvider>
        <main
          className={`${montserrat.variable} font-mont text-dark dark:text-light w-full min-h-screen relative z-10 selection:bg-cyan-500/20 selection:text-cyan-500`}
        >
          <NavBar />
          <Component key={router.asPath} {...pageProps} />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
