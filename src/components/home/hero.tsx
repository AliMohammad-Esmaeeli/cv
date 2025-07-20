"use client";
import { Button } from "@/src/components/home/ui//button";
import { Download, Mail } from "lucide-react";
import { useLanguage } from "../../locales/locales";
import Link from "next/link";

export default function Hero() {
  const { translations } = useLanguage();

  return (
    <section className="py-20 px-4">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              {translations.hero.downloadCV}
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
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
