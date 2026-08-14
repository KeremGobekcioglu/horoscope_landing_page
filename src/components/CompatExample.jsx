import { useLanguage } from "../i18n/LanguageContext";
import "./CompatExample.css";

function CompatExample() {
  const { t } = useLanguage();
  const { compat } = t;

  return (
    <section className="yz-compat yz-section">
      <div className="yz-container yz-compat__layout">
        <div className="yz-compat__copy">
          <p className="yz-eyebrow yz-compat__eyebrow">{compat.eyebrow}</p>
          <h2 className="yz-compat__heading">
            {compat.title}
            <span className="yz-compat__subtitle">{compat.subtitle}</span>
          </h2>
        </div>

        <div className="yz-compat__card">
          <div className="yz-compat__signs">
            <div className="yz-compat__sign">
              <div className="yz-compat__sign-icon">
                <span className="yz-compat__sign-glow" />
                <span className="yz-compat__glyph">{compat.glyphA}</span>
              </div>
              <span className="yz-compat__sign-name">{compat.signA}</span>
              <span className="yz-compat__sign-element">{compat.elementA}</span>
            </div>

            <div className="yz-compat__result">
              <span className="yz-compat__match">{compat.match}%</span>
              <span className="yz-compat__band">{compat.band}</span>
              <span className="yz-compat__pairing">{compat.elementPairing}</span>
            </div>

            <div className="yz-compat__sign">
              <div className="yz-compat__sign-icon">
                <span className="yz-compat__sign-glow" />
                <span className="yz-compat__glyph">{compat.glyphB}</span>
              </div>
              <span className="yz-compat__sign-name">{compat.signB}</span>
              <span className="yz-compat__sign-element">{compat.elementB}</span>
            </div>
          </div>

          <p className="yz-compat__summary">{compat.summary}</p>

          <div className="yz-compat__scores">
            {compat.scores.map((score) => (
              <div className="yz-compat__score" key={score.label}>
                <div className="yz-compat__score-row">
                  <span>{score.label}</span>
                  <span className="yz-compat__score-value">{score.value}%</span>
                </div>
                <div className="yz-compat__score-track">
                  <div className="yz-compat__score-fill" style={{ width: `${score.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="yz-compat__buttons">
            <span className="yz-compat__button yz-compat__button--outline">{compat.detailButton}</span>
            <span className="yz-compat__button yz-compat__button--filled">{compat.shareButton}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompatExample;
