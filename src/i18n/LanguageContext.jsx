import { createContext, useContext, useMemo, useState } from "react";
import { content } from "./content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  const value = useMemo(
    () => ({
      lang,
      t: content[lang],
      toggleLang: () => setLang((prev) => (prev === "tr" ? "en" : "tr")),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
