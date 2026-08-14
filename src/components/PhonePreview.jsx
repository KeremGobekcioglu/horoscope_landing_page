import { useLanguage } from "../i18n/LanguageContext";
import { HeartIcon, BriefcaseIcon, ActivityIcon, StarIcon } from "./icons";
import "./PhonePreview.css";

const SCORE_ICONS = [HeartIcon, BriefcaseIcon, ActivityIcon, StarIcon];

function PhonePreview() {
  const { t } = useLanguage();
  const { showcase } = t;

  return (
    <div className="yz-phone">
      <div className="yz-phone__notch" />
      <div className="yz-phone__screen">
        <div className="yz-phone__hero">
          <div className="yz-phone__hero-glow" />
          <span className="yz-phone__hero-glyph">♈</span>
        </div>

        <div className="yz-phone__signhead">
          <span className="yz-phone__sign-name">{showcase.signName}</span>
          <span className="yz-phone__sign-dates">{showcase.signDates}</span>
        </div>

        <div className="yz-phone__card">
          <div className="yz-phone__label-row">
            <span className="yz-phone__dot" />
            <span className="yz-phone__label">{showcase.dailyLabel}</span>
          </div>
          <p className="yz-phone__body">{showcase.body}</p>
          <div className="yz-phone__readmore">
            <span>{showcase.readMore}</span>
            <span className="yz-phone__arrow">→</span>
          </div>
        </div>

        <div className="yz-phone__label-row yz-phone__label-row--energy">
          <span className="yz-phone__dot" />
          <span className="yz-phone__label">{showcase.energyLabel}</span>
        </div>

        <div className="yz-phone__scores">
          {showcase.scores.map((score, index) => {
            const ScoreIcon = SCORE_ICONS[index];
            return (
              <div className="yz-phone__score" key={score.label}>
                <div className="yz-phone__score-top">
                  <ScoreIcon />
                  <span className="yz-phone__score-value">{score.value}/10</span>
                </div>
                <span className="yz-phone__score-label">{score.label}</span>
                <div className="yz-phone__score-track">
                  <div className="yz-phone__score-fill" style={{ width: `${score.value * 10}%` }} />
                </div>
              </div>
            );
          })}
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
