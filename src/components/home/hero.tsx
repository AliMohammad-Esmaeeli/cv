"use client";
import { Button } from "@heroui/react";
import { Download, Mail } from "lucide-react";
import { useLanguage } from "../../locales/locales";
import Link from "next/link";

export default function Hero() {
  const { translations } = useLanguage();

  return (
    <section className="py-20 px-4 relative">
      <div className="size-16 bg-purple-400 blur-xl ring-purple-400/50 shadow-2xl shadow-purple-400/5 rounded-full absolute left-1/5 top-1/3"></div>
      <div className="size-16 bg-red-400 blur-xl ring-purple-400/50 shadow-2xl shadow-purple-400/5 rounded-full absolute right-1/5 bottom-1/3"></div>
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-4">
            {translations.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {translations.hero.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            {translations.hero.title}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {translations.hero.description}
          </p>
          <div className="flex flex-col rtl:flex-col-reverse sm:flex-row sm:rtl:flex-row-reverse gap-4 justify-center">
            <Link href={"/AliMohammadEsmaeeli.pdf"} download={true}>
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                {translations.hero.downloadCV}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 bg-white text-gray-900"
              >
                <Mail className="w-5 h-5" />
                {translations.hero.contactMe}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
