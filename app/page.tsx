import Nav from "@/components/HomePage/Nav";
import Chat from "@/components/HomePage/Chat";
import Main from "@/components/HomePage/Main";
import About from "@/components/HomePage/About";
import Skills from "@/components/HomePage/Skills";
import Fotter from "@/components/HomePage/Fotter";
import { Suspense } from "react";
import Loading from "@/components/HomePage/Loading";

export default function Home() {
  return (
    <div className="min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none bg-white text-black dark:bg-stone-950 dark:text-white font-yekanBakh">
      <Nav Lang="Fa" />
      <Chat />
      <Main Lang="Fa" />
      <About Lang="Fa" />
      <Suspense fallback={<Loading />}>
        <Skills Lang="Fa" />
      </Suspense>
      <Fotter Lang="Fa" />
    </div>
  );
}
