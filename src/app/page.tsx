import Header from "@/src/components/home/header";
import Hero from "@/src/components/home/hero";
import About from "@/src/components/home/about";
import Experience from "@/src/components/home/experience";
import Skills from "@/src/components/home/skills";
import Education from "@/src/components/home/education";
import Contact from "@/src/components/home/contact";
import { Suspense } from "react";
import Loading from "@/src/components/Loading/loading";

export default function Home() {
  return (
    <div className="min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none bg-white text-black dark:bg-stone-950 dark:text-white font-yekanBakh relative">
      {/* Enhanced Checkered background pattern */}
      <div className="fixed inset-0 opacity-15 pointer-events-none z-0">
        <div className="w-full h-full bg-checkered"></div>
      </div>

      {/* Alternative subtle overlay for sections */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="w-full h-full bg-checkered-alt"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          {/* <Education /> */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
