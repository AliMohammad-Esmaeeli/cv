"use client";
import Header from "../components/home/header";
import Image from "next/image";
import { useLanguage } from "../locales/locales";

export default function Notfound() {
  const { translations } = useLanguage();
  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden select-none appearance-none font-yekanBakh">
      <Header />
      <div className="flex-center flex-col gap-3">
        <Image alt="" src={"/Not-found.svg"} height={100} width={100} />
        <p className="text-9xl mt-3">404</p>
        <p className="text-xl">{translations.NotFound.NotFound}</p>
      </div>
    </div>
  );
}
