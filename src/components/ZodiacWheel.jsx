import { useLanguage } from "../i18n/LanguageContext";
import "./ZodiacWheel.css";

const SIZE = 420;
const CENTER = SIZE / 2;
const RING_R = 150;
const LABEL_R = 190;
const TICK_INNER = 158;

function pointOn(radius, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [CENTER + radius * Math.cos(rad), CENTER + radius * Math.sin(rad)];
}

function labelAnchor(angleDeg) {
  const norm = ((angleDeg % 360) + 360) % 360;
  if (norm > 350 || norm < 10) return "middle";
  if (norm > 170 && norm < 190) return "middle";
  return norm > 180 ? "end" : "start";
}

function ZodiacWheel() {
  const { t } = useLanguage();
  const signs = t.zodiac.signs;
  const step = 360 / signs.length;

  return (
    <div className="yz-wheel">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="yz-wheel__svg" role="img" aria-label={t.zodiac.title}>
        <circle cx={CENTER} cy={CENTER} r={RING_R} className="yz-wheel__ring" />
        <circle cx={CENTER} cy={CENTER} r={RING_R - 34} className="yz-wheel__ring yz-wheel__ring--inner" />

        {signs.map((sign, i) => {
          const angle = i * step;
          const [tx1, ty1] = pointOn(TICK_INNER, angle);
          const [tx2, ty2] = pointOn(RING_R, angle);
          const [nx, ny] = pointOn(RING_R, angle);
          const [lx, ly] = pointOn(LABEL_R, angle);
          return (
            <g key={sign} className="yz-wheel__point">
              <line x1={tx1} y1={ty1} x2={tx2} y2={ty2} className="yz-wheel__tick" />
              <circle cx={nx} cy={ny} r="2.6" className="yz-wheel__node" />
              <text x={lx} y={ly} textAnchor={labelAnchor(angle)} className="yz-wheel__label" dominantBaseline="middle">
                {sign}
              </text>
            </g>
          );
        })}

        <text x={CENTER} y={CENTER - 6} textAnchor="middle" className="yz-wheel__center-mark">
          ✶
        </text>
        <text x={CENTER} y={CENTER + 16} textAnchor="middle" className="yz-wheel__center-label">
          {t.zodiac.eyebrow}
        </text>
      </svg>
    </div>
  );
}

export default ZodiacWheel;
