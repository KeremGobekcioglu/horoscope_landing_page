import { useLanguage } from "../i18n/LanguageContext";
import "./Cta.css";

function Cta() {
  const { t } = useLanguage();

  return (
    <section className="yz-cta yz-section" id="indir">
      <div className="yz-container yz-cta__box">
        <p className="yz-eyebrow">{t.cta.eyebrow}</p>
        <h2 className="yz-cta__title">{t.cta.title}</h2>
        <p className="yz-cta__subtitle">{t.cta.subtitle}</p>
        <div className="yz-cta__buttons">
          <a
            className="yz-cta__button yz-cta__button--primary"
            href="https://play.google.com/store/apps/details?id=com.kg.yildizname"
          >
            {t.cta.googlePlay}
          </a>
          <span className="yz-cta__button yz-cta__button--disabled" aria-disabled="true">
            {t.cta.appStore}
            <span className="yz-cta__badge">{t.cta.appStoreBadge}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Cta;
