import Head from "next/head";
import { Inter } from "@next/font/google";
import HeroSection from "@/components/HeroSection";
import IgoaDiscapacitatSection from "@/components/IogaDiscapacitatSection";
import MindfulnessSection from "@/components/MindfulnessSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        {/* <IgoaDiscapacitatSection />
        <MindfulnessSection /> */}
        <Footer />
      </main>
    </>
  );
}
