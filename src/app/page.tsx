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
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-8 sm:py-12 md:gap-20 md:py-16 lg:gap-24 lg:py-20">
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
