import { useLanguage } from "../i18n/LanguageContext";
import PhonePreview from "./PhonePreview";
import "./Showcase.css";

function Showcase() {
  const { t } = useLanguage();

  return (
    <section className="yz-showcase yz-section yz-panel">
      <div className="yz-container yz-showcase__layout">
        <div className="yz-showcase__copy">
          <p className="yz-eyebrow">{t.showcase.eyebrow}</p>
          <h2 className="yz-showcase__title">{t.showcase.sectionTitle}</h2>
          <p className="yz-showcase__desc">{t.showcase.sectionDesc}</p>
        </div>
        <PhonePreview />
      </div>
    </section>
  );
}

export default Showcase;
