import { useLanguage } from "../i18n/LanguageContext";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="yz-footer">
      <div className="yz-container yz-footer__inner">
        <div className="yz-footer__brand">
          <span className="yz-footer__mark">{t.header.mark}</span>
          <span className="yz-footer__tagline">{t.footer.tagline}</span>
        </div>
        <div className="yz-footer__meta">
          <a href="https://keremgobekcioglu.github.io/yildizname-privacy/" target="_blank" rel="noopener noreferrer">
            {t.footer.privacy}
          </a>
          <span>© {new Date().getFullYear()} — {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
