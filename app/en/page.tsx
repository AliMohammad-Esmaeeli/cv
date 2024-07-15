import Nav from "@/components/HomePage/Nav";
import Chat from "@/components/HomePage/Chat";
import Main from "@/components/HomePage/Main";
import About from "@/components/HomePage/About";
import Skills from "@/components/HomePage/Skills";
import Fotter from "@/components/HomePage/Fotter";
import { Suspense } from "react";
import Loading from "@/components/HomePage/Loading";

export default function page() {
  return (
    <div className="min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none bg-white text-black dark:bg-stone-950 dark:text-white">
      <Nav Lang="En" />
      <Chat />
      <Main Lang="En" />
      <About Lang="En" />
      <Suspense fallback={<Loading />}>
        <Skills Lang="En" />
      </Suspense>
      <Fotter Lang="En" />
    </div>
  );
}
