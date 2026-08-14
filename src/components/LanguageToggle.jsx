import { useLanguage } from "../i18n/LanguageContext";
import "./LanguageToggle.css";

function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      className="yz-lang-toggle"
      onClick={toggleLang}
      aria-label="Change language"
    >
      <span className={lang === "tr" ? "is-active" : ""}>TR</span>
      <span className="yz-lang-toggle__divider">/</span>
      <span className={lang === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}

export default LanguageToggle;
