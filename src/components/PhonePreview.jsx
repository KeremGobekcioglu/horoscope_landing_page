import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./PhonePreview.css";

function PhonePreview() {
  const { t } = useLanguage();
  const { showcase } = t;
  const [activeTab, setActiveTab] = useState(0);
  const period = showcase.periods[activeTab] ?? showcase.periods[0];

  return (
    <div className="yz-phone">
      <div className="yz-phone__notch" />
      <div className="yz-phone__screen">
        <div className="yz-phone__topline">
          <span className="yz-phone__glyph">♈</span>
          <div className="yz-phone__tabs" role="tablist">
            {showcase.periods.map((p, index) => (
              <button
                key={p.tab}
                type="button"
                role="tab"
                aria-selected={index === activeTab}
                className={`yz-phone__tab ${index === activeTab ? "is-active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {p.tab}
              </button>
            ))}
          </div>
        </div>

        <h3 className="yz-phone__heading">{period.heading}</h3>
        <p className="yz-phone__body">{period.body}</p>

        <div className="yz-phone__scores">
          {period.scores.map((score) => (
            <div className="yz-phone__score" key={score.label}>
              <div className="yz-phone__score-row">
                <span className="yz-phone__score-label">{score.label}</span>
                <span className="yz-phone__score-value">{score.value}</span>
              </div>
              <div className="yz-phone__score-track">
                <div className="yz-phone__score-fill" style={{ width: `${score.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="yz-phone__nav">
          {showcase.nav.map((label, index) => (
            <span key={label} className={`yz-phone__nav-item ${index === 0 ? "is-active" : ""}`}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhonePreview;
