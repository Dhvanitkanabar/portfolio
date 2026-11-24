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
      <SmoothScrollProvider>
        <main
          className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen relative`}
        >
          <NavBar />
          <Component key={router.asPath} {...pageProps} />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
