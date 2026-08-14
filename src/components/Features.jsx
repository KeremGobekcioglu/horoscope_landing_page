import { useLanguage } from "../i18n/LanguageContext";
import { Icon } from "./icons";
import "./Features.css";

function Features() {
  const { t } = useLanguage();

  return (
    <section className="yz-features yz-section" id="ozellikler">
      <div className="yz-container">
        <div className="yz-features__head">
          <p className="yz-eyebrow">{t.features.eyebrow}</p>
          <h2 className="yz-features__title">{t.features.title}</h2>
        </div>

        <div className="yz-features__list">
          {t.features.items.map((feature) => (
            <article
              className={`yz-feature-row ${feature.accent === "violet" ? "yz-feature-row--violet" : ""}`}
              key={feature.title}
            >
              <span className="yz-feature-row__icon">
                <Icon
                  name={feature.icon}
                  stroke={feature.accent === "violet" ? "var(--yz-violet)" : "var(--yz-gold)"}
                />
              </span>
              <h3 className="yz-feature-row__title">{feature.title}</h3>
              <p className="yz-feature-row__desc">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
