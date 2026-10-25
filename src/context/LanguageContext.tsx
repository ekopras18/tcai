import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, TRANSLATIONS, TranslationDictionary } from "../data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "tcai_language_pref";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "th") {
        return saved;
      }
      // Check browser language
      if (typeof navigator !== "undefined" && navigator.language) {
        if (navigator.language.startsWith("th")) {
          return "th";
        }
      }
    } catch {
      // In case localStorage is blocked in sandbox iframe
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors in restricted contexts
    }
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "th" : "en"));
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
