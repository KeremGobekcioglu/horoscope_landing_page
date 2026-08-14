import { useLanguage } from "../i18n/LanguageContext";
import CalendarPreview from "./CalendarPreview";
import "./CalendarSection.css";

function CalendarSection() {
  const { t } = useLanguage();

  return (
    <section className="yz-calsection yz-section">
      <div className="yz-container yz-calsection__layout">
        <CalendarPreview />
        <div className="yz-calsection__copy">
          <p className="yz-eyebrow">{t.calendar.eyebrow}</p>
          <h2 className="yz-calsection__title">{t.calendar.sectionTitle}</h2>
          <p className="yz-calsection__desc">{t.calendar.sectionDesc}</p>
        </div>
      </div>
    </section>
  );
}

export default CalendarSection;
