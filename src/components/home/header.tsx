"use client";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "../../locales/locales";

export default function Header() {
  const { translations } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-row rtl:flex-row-reverse">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          {translations.nav.name}
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {translations.nav.about}
          </Link>
          <Link
            href="#experience"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {translations.nav.experience}
          </Link>
          <Link
            href="#skills"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {translations.nav.skills}
          </Link>
          <Link
            href="#education"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {translations.nav.education}
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {translations.nav.contact}
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {translations.nav.blog}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
