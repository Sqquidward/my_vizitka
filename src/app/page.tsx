import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Hero } from "@/components/Hero";

const Services = dynamic(() =>
  import("@/components/Services").then((m) => ({ default: m.Services })),
);

const Projects = dynamic(() =>
  import("@/components/Projects").then((m) => ({ default: m.Projects })),
);

const WorkPrinciples = dynamic(() =>
  import("@/components/WorkPrinciples").then((m) => ({ default: m.WorkPrinciples })),
);

const Footer = dynamic(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer })),
);

export default function Home() {
  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-5 py-12 sm:px-8 sm:py-16 md:gap-24 md:py-20">
      <Hero />
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <WorkPrinciples />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
