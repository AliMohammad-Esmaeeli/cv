import { create } from "zustand";
import Farsi from "./fa.json";
import English from "./en.json";
import French from "./fr.json";
import German from "./de.json";
import Spanish from "./es.json";

interface langType {
  language: string;
  setLanguage: (language: string) => void;
  reset: () => void;
  translations: typeof Farsi;
}

export const useLanguage = create<langType>((set: any) => ({
  language: "fa",
  translations: Farsi,
  setLanguage: (language: string) => {
    const translations = getTranslations(language);
    set({ language, translations });
  },
  reset: () => set({ language: "fa", translations: Farsi }),
}));

function getTranslations(language: string) {
  switch (language) {
    case "fa":
      return Farsi;
    case "en":
      return English;
    case "fr":
      return French;
    case "de":
      return German;
    case "es":
      return Spanish;
    default:
      return Farsi;
  }
}
