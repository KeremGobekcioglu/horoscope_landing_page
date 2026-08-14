import { useLanguage } from "../i18n/LanguageContext";
import "./CalendarPreview.css";

const YEAR = 2026;
const MONTH = 7; // August, 0-indexed — earliest month with real reading data

function buildWeeks() {
  const firstOfMonth = new Date(YEAR, MONTH, 1);
  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
  const daysInPrevMonth = new Date(YEAR, MONTH, 0).getDate();
  // Monday-first weekday index: 0=Mon .. 6=Sun
  const leadingBlanks = (firstOfMonth.getDay() + 6) % 7;

  const cells = [];
  for (let i = leadingBlanks; i > 0; i--) {
    cells.push({ day: daysInPrevMonth - i + 1, current: false });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({ day, current: true });
  }
  let nextDay = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ day: nextDay, current: false });
    nextDay++;
  }

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

const WEEKS = buildWeeks();

function CalendarPreview() {
  const { t } = useLanguage();
  const { calendar } = t;
  const sentences = calendar.monthlyText.split(". ").filter(Boolean);

  return (
    <div className="yz-cal">
      <div className="yz-cal__header">
        <span className="yz-cal__chevron" aria-hidden="true">
          ‹
        </span>
        <span className="yz-cal__month">{calendar.monthLabel}</span>
        <span className="yz-cal__chevron" aria-hidden="true">
          ›
        </span>
      </div>

      <div className="yz-cal__weekdays">
        {calendar.weekdays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="yz-cal__grid">
        {WEEKS.map((week, wi) => (
          <div className="yz-cal__row" key={wi}>
            {week.map((cell, di) => {
              const isLucky = cell.current && calendar.luckyDays.includes(cell.day);
              const isToday = cell.current && cell.day === calendar.today;
              const shine = isLucky || isToday;
              return (
                <div
                  key={di}
                  className={`yz-cal__cell ${cell.current ? "" : "yz-cal__cell--faded"} ${
                    shine ? "yz-cal__cell--shine" : ""
                  }`}
                >
                  <span className="yz-cal__day-num">{cell.day}</span>
                  <span className={`yz-cal__day-dot ${shine ? "is-lit" : ""}`} />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="yz-cal__monthly">
        <span className="yz-cal__monthly-label">{calendar.monthlyLabel}</span>
        {sentences.map((sentence, i) => (
          <p key={i} className="yz-cal__monthly-text">
            {sentence.endsWith(".") ? sentence : `${sentence}.`}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CalendarPreview;
