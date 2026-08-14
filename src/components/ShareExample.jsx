import { useLanguage } from "../i18n/LanguageContext";
import { CameraIcon, ChatIcon, FacebookIcon, ShareArrowIcon } from "./icons";
import "./ShareExample.css";

const OPTION_ICONS = {
  instagram: CameraIcon,
  whatsapp: ChatIcon,
  facebook: FacebookIcon,
  general: ShareArrowIcon,
};

function ShareExample() {
  const { t } = useLanguage();
  const { share } = t;

  return (
    <section className="yz-share yz-section">
      <div className="yz-container yz-share__layout">
        <div className="yz-share__copy">
          <p className="yz-eyebrow">{share.eyebrow}</p>
          <h2 className="yz-share__title">{share.sectionTitle}</h2>
          <p className="yz-share__desc">{share.sectionDesc}</p>
        </div>

        <div className="yz-share__sheet">
          <span className="yz-share__handle" />
          <span className="yz-share__sheet-title">{share.sheetTitle}</span>

          <div className="yz-share__options">
            {share.options.map((option) => {
              const OptionIcon = OPTION_ICONS[option.variant];
              return (
                <div className="yz-share__option" key={option.variant}>
                  <span className={`yz-share__tile yz-share__tile--${option.variant}`}>
                    <OptionIcon stroke={option.variant === "general" ? "var(--yz-gold)" : "#FFFFFF"} />
                  </span>
                  <span className="yz-share__option-label">
                    {option.label.split("\n").map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="yz-share__divider" />

          <span className="yz-share__row">{share.textOption}</span>
          <span className="yz-share__row">{share.saveOption}</span>

          <div className="yz-share__divider" />
          <span className="yz-share__close">{share.close}</span>
        </div>
      </div>
    </section>
  );
}

export default ShareExample;
