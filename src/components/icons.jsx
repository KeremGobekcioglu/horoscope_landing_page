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

export function WhatsAppIcon({ stroke = "#FFFFFF", size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill={stroke}
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.463 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"
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
