import { useLanguage } from "../i18n/LanguageContext";
import "./HowItWorks.css";

function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="yz-how yz-section" id="nasil-calisir">
      <div className="yz-container">
        <p className="yz-eyebrow yz-how__eyebrow">{t.howItWorks.eyebrow}</p>
        <h2 className="yz-how__title">{t.howItWorks.title}</h2>

        <div className="yz-how__steps" style={{ "--how-steps": t.howItWorks.steps.length }}>
          {t.howItWorks.steps.map((step) => (
            <div className="yz-how__step" key={step.title}>
              <span className="yz-how__dot" />
              <h3 className="yz-how__step-title">{step.title}</h3>
              <p className="yz-how__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
