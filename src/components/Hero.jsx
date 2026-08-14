import { useLanguage } from "../i18n/LanguageContext";
import Constellation from "./Constellation";
import "./Hero.css";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="yz-hero">
      <div className="yz-hero__backdrop">
        <div className="yz-hero__glow" />
        <Constellation className="yz-hero__constellation" />
      </div>
      <div className="yz-container yz-hero__content">
        <p className="yz-eyebrow yz-hero__eyebrow">{t.hero.eyebrow}</p>
        <h1 className="yz-hero__title">
          {t.hero.titleMain} <em>{t.hero.titleAccent}</em>
        </h1>
        <p className="yz-hero__subtitle">{t.hero.subtitle}</p>
        <div className="yz-hero__actions">
          <a className="yz-hero__button" href="#indir">
            {t.hero.primaryCta}
          </a>
          <a className="yz-hero__button yz-hero__button--ghost" href="#nasil-calisir">
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
