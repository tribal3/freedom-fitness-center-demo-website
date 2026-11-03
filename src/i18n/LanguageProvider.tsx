import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ar } from "./ar";
import { en, type Content } from "./en";

export type Language = "en" | "ar";

type LanguageContextValue = {
  lang: Language;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  t: Content;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ffc-language";

const readStoredLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "ar" || stored === "en" ? stored : "en";
};

const dictionaries: Record<Language, Content> = { en, ar };

const COPY = {
  en: {
    title: "Freedom Fitness Center | Find Your Strength in Amman",
    description:
      "Discover Freedom Fitness Center in Amman, Jordan. Explore its fitness environment, facilities, location, and contact information.",
  },
  ar: {
    title: "فريدوم فيتنس سنتر | اكتشف قوتك في عمّان",
    description:
      "تعرّف على فريدوم فيتنس سنتر في عمّان، الأردن. استكشف البيئة الرياضية والمرافق والموقع ومعلومات التواصل.",
  },
} as const;

const setMeta = (selector: string, attribute: "content", value: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, value);
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readStoredLanguage);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;

    const copy = COPY[lang];
    document.title = copy.title;
    setMeta('meta[name="description"]', "content", copy.description);
    setMeta('meta[property="og:title"]', "content", copy.title);
    setMeta('meta[property="og:description"]', "content", copy.description);
    setMeta('meta[property="og:locale"]', "content", lang === "ar" ? "ar_JO" : "en_JO");

    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === "en" ? "ar" : "en"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      isRtl: dir === "rtl",
      t: dictionaries[lang],
      toggleLanguage,
    }),
    [lang, dir, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
}
