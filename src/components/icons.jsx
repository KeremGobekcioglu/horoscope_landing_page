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

export function HeartIcon({ stroke = "var(--yz-muted)", size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke={stroke}
        {...common}
      />
    </svg>
  );
}

export function BriefcaseIcon({ stroke = "var(--yz-muted)", size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke={stroke} {...common} />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke={stroke} {...common} />
    </svg>
  );
}

export function ActivityIcon({ stroke = "var(--yz-muted)", size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke={stroke} {...common} />
    </svg>
  );
}

export function StarIcon({ stroke = "var(--yz-muted)", size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        stroke={stroke}
        {...common}
      />
    </svg>
  );
}

export function CameraIcon({ stroke = "#FFFFFF", size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={stroke} {...common} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke={stroke} {...common} />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ stroke = "#FFFFFF", size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke={stroke}
        {...common}
      />
    </svg>
  );
}

export function FacebookIcon({ stroke = "#FFFFFF", size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        stroke={stroke}
        {...common}
      />
    </svg>
  );
}

export function ShareArrowIcon({ stroke = "var(--yz-gold)", size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <circle cx="18" cy="5" r="3" stroke={stroke} {...common} />
      <circle cx="6" cy="12" r="3" stroke={stroke} {...common} />
      <circle cx="18" cy="19" r="3" stroke={stroke} {...common} />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke={stroke} {...common} />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke={stroke} {...common} />
    </svg>
  );
}

const ICONS = { sun: SunIcon, venn: VennIcon, calendar: CalendarIcon, bars: BarsIcon };

export function Icon({ name, stroke }) {
  const Component = ICONS[name];
  if (!Component) return null;
  return <Component stroke={stroke} />;
}
