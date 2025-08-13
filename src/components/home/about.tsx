"use client"
import { useLanguage } from "@/locales/locales";

export default function About() {
    const { translations } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{translations.about.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{translations.about.description}</p>
        </div>
      </div>
    </section>
  )
}
