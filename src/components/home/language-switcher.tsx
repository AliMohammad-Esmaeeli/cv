
"use client";

import { Button } from "@heroui/react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

import { useLanguage } from "../../locales/locales";
import { Globe } from "lucide-react";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const languages = [
    {
      code: "fa",
      name: "فارسی",
      flag: "https://hatscripts.github.io/circle-flags/flags/ir.svg",
      dir: "rtl",
    },
    {
      code: "en",
      name: "English",
      flag: "https://hatscripts.github.io/circle-flags/flags/us.svg",
      dir: "ltr",
    },
    {
      code: "fr",
      name: "Français",
      flag: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
      dir: "ltr",
    },
    {
      code: "de",
      name: "Deutsch",
      flag: "https://hatscripts.github.io/circle-flags/flags/de.svg",
      dir: "ltr",
    },
    {
      code: "es",
      name: "Español",
      flag: "https://hatscripts.github.io/circle-flags/flags/es.svg",
      dir: "ltr",
    },
    { 
      code: "auto", 
      name: "System language", 
      flag: "https://em-content.zobj.net/source/apple/419/strawberry_1f353.png",
      dir: "ltr" // Added default direction for auto
    },
  ];

  const { language, setLanguage, translations } = useLanguage();

  // Handle language change and document attributes
  useEffect(() => {
    const html = document.documentElement;
    const currentLanguage = languages.find((l) => l.code === language);
    
    if (currentLanguage) {
      html.lang = language;
      html.dir = currentLanguage.dir;
    }
  }, [language]);

  const autoDetectLanguage = () => {
    if (!navigator) {
      setLanguage("fa");
      return;
    }

    const browserLang = navigator.language.split('-')[0]; // Get base language code
    const supportedCodes = languages.map(l => l.code);
    
    if (supportedCodes.includes(browserLang)) {
      setLanguage(browserLang);
    } else {
      setLanguage("fa"); // Default to Farsi
    }
  };

  const handleLanguageChange = (key: string) => {
    if (key === "auto") {
      autoDetectLanguage();
    } else {
      setLanguage(key);
    }
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button className="bg-transparent hover:bg-transparent border-none p-0">
            <Globe className="!size-6 stroke-black " />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language Selection"
          onAction={(key) => handleLanguageChange(key as string)}
          selectedKeys={[language]}
          selectionMode="single"
        >
          {languages.map((language) => (
            <DropdownItem
              key={language.code}
              startContent={
                <Avatar
                  src={language.flag}
                  className="size-8"
                  radius="full"
                  alt={language.name}
                />
              }
            >
              <p className="text-base text-black font-inter text-center">
                {language.name}
              </p>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
