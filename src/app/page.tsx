"use client";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Skills from "@/components/home/skills";
import Education from "@/components/home/education";
import Contact from "@/components/home/contact";
import { Suspense } from "react";
import Loading from "@/components/Loading/loading";

import { useLanguage } from "@/locales/locales";


export default function Home() {

  const { language } = useLanguage();

  return (
    <div className={`min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none !bg-white !text-black dark:bg-stone-950 dark:text-white relative ${language === "fa" ? "font-yekanBakh" : "font-inter"}`}>
      <div className="relative">
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
