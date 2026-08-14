const common = {
  fill: "none",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function SunIcon({ stroke = "var(--yz-gold)" }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="5" stroke={stroke} {...common} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="2.5"
          x2="12"
          y2="4.5"
          stroke={stroke}
          {...common}
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}

export function VennIcon({ stroke = "var(--yz-violet)" }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="9.5" cy="12" r="6" stroke={stroke} {...common} />
      <circle cx="14.5" cy="12" r="6" stroke={stroke} {...common} />
    </svg>
  );
}

export function CalendarIcon({ stroke = "var(--yz-gold)" }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke={stroke} {...common} />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" stroke={stroke} {...common} />
      <line x1="8" y1="3" x2="8" y2="6.5" stroke={stroke} {...common} />
      <line x1="16" y1="3" x2="16" y2="6.5" stroke={stroke} {...common} />
      <circle cx="8.2" cy="13.5" r="0.9" fill={stroke} />
      <circle cx="12" cy="13.5" r="0.9" fill={stroke} />
      <circle cx="15.8" cy="13.5" r="0.9" fill={stroke} />
    </svg>
  );
}

export function BarsIcon({ stroke = "var(--yz-gold)" }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <line x1="5" y1="19" x2="5" y2="12" stroke={stroke} {...common} />
      <line x1="10.5" y1="19" x2="10.5" y2="7" stroke={stroke} {...common} />
      <line x1="16" y1="19" x2="16" y2="15" stroke={stroke} {...common} />
      <line x1="21" y1="19" x2="21" y2="10" stroke={stroke} {...common} />
    </svg>
  );
}

export function HeartIcon({ stroke = "var(--yz-muted)" }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M12 20 C7 16 3 13 3 8.8 C3 6.1 5.1 4 7.7 4 C9.4 4 10.9 4.9 12 6.3 C13.1 4.9 14.6 4 16.3 4 C18.9 4 21 6.1 21 8.8 C21 13 17 16 12 20 Z"
        stroke={stroke}
        {...common}
      />
    </svg>
  );
}

export function BriefcaseIcon({ stroke = "var(--yz-muted)" }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke={stroke} {...common} />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" stroke={stroke} {...common} />
      <line x1="3" y1="12.5" x2="21" y2="12.5" stroke={stroke} {...common} />
    </svg>
  );
}

export function ActivityIcon({ stroke = "var(--yz-muted)" }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <polyline points="3,13 8,13 10,7 14,19 16,13 21,13" stroke={stroke} {...common} />
    </svg>
  );
}

export function StarIcon({ stroke = "var(--yz-muted)" }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M12 3.5 L14.5 9.3 L20.8 9.9 L16 14 L17.5 20.2 L12 16.9 L6.5 20.2 L8 14 L3.2 9.9 L9.5 9.3 Z"
        stroke={stroke}
        {...common}
      />
    </svg>
  );
}

const ICONS = { sun: SunIcon, venn: VennIcon, calendar: CalendarIcon, bars: BarsIcon };

export function Icon({ name, stroke }) {
  const Component = ICONS[name];
  if (!Component) return null;
  return <Component stroke={stroke} />;
}
