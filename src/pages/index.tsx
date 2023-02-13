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
      <Head>
        <title>Marianna Roige Yoga</title>
        <meta name="description" content="Formación de Yoga" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <HeroSection />
        <IgoaDiscapacitatSection />
        <MindfulnessSection />
        <Footer />
      </main>
    </>
  );
}
