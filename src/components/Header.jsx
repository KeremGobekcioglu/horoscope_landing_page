import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import "./Header.css";

function Header() {
  const { t } = useLanguage();

  return (
    <header className="yz-header">
      <div className="yz-container yz-header__inner">
        <span className="yz-header__mark">{t.header.mark}</span>
        <div className="yz-header__actions">
          <LanguageToggle />
          <a className="yz-header__cta" href="#indir">
            {t.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
