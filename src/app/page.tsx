import { Background } from "@/components/Background";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-5 py-12 sm:px-8 sm:py-16 md:gap-24 md:py-20">
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
