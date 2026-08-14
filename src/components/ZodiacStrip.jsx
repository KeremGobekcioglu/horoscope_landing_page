import { useLanguage } from "../i18n/LanguageContext";
import ZodiacWheel from "./ZodiacWheel";
import "./ZodiacStrip.css";

function ZodiacStrip() {
  const { t } = useLanguage();

  return (
    <section className="yz-zodiac yz-section">
      <div className="yz-container yz-zodiac__layout">
        <div className="yz-zodiac__copy">
          <p className="yz-eyebrow">{t.zodiac.eyebrow}</p>
          <h2 className="yz-zodiac__title">{t.zodiac.title}</h2>
        </div>
        <ZodiacWheel />
      </div>
    </section>
  );
}

export default ZodiacStrip;
