"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { languageCookie, translate, type Locale } from "@/lib/language";

const LanguageContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({ locale: "th", setLocale: () => {} });

export function LanguageProvider({ initialLocale, children }: { initialLocale: Locale; children: ReactNode }) {
  const [locale, updateLocale] = useState(initialLocale);
  const router = useRouter();
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  function setLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    document.cookie = `${languageCookie}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    updateLocale(nextLocale);
    router.refresh();
  }
  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return { ...context, t: (text: string) => translate(context.locale, text) };
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return <div className="language-switcher" role="group" aria-label={locale === "th" ? "เลือกภาษา" : "Choose language"}>
    <button type="button" lang="th" aria-label="ภาษาไทย" aria-pressed={locale === "th"} onClick={() => setLocale("th")}>TH</button>
    <span aria-hidden="true"/>
    <button type="button" lang="en" aria-label="English" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
  </div>;
}
