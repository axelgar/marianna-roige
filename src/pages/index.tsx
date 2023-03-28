import Head from "next/head";
import { Inter } from "@next/font/google";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Footer />
      </main>
    </>
  );
}
