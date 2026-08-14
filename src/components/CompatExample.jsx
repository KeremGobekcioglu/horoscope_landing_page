import { useLanguage } from "../i18n/LanguageContext";
import "./CompatExample.css";

function CompatExample() {
  const { t } = useLanguage();
  const { compat } = t;

  return (
    <section className="yz-compat yz-section yz-panel">
      <div className="yz-container yz-compat__layout">
        <div className="yz-compat__copy">
          <p className="yz-eyebrow yz-compat__eyebrow">{compat.eyebrow}</p>
          <h2 className="yz-compat__title">{compat.title}</h2>
          <p className="yz-compat__desc">{compat.desc}</p>
        </div>

        <div className="yz-compat__card">
          <div className="yz-compat__signs">
            <div className="yz-compat__sign">
              <span className="yz-compat__glyph">{compat.glyphA}</span>
              <span className="yz-compat__sign-name">{compat.signA}</span>
            </div>
            <span className="yz-compat__link" aria-hidden="true" />
            <div className="yz-compat__sign">
              <span className="yz-compat__glyph">{compat.glyphB}</span>
              <span className="yz-compat__sign-name">{compat.signB}</span>
            </div>
          </div>

          <span className="yz-compat__band">{compat.band}</span>

          <div className="yz-compat__scores">
            {compat.scores.map((score) => (
              <div className="yz-compat__score" key={score.label}>
                <div className="yz-compat__score-row">
                  <span>{score.label}</span>
                  <span className="yz-compat__score-value">{score.value}</span>
                </div>
                <div className="yz-compat__score-track">
                  <div className="yz-compat__score-fill" style={{ width: `${score.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompatExample;
