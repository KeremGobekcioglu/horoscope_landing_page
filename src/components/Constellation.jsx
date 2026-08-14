import "./Constellation.css";

const LINE = [
  [60, 120],
  [180, 60],
  [310, 95],
  [420, 40],
  [540, 110],
  [640, 55],
  [760, 130],
];

const SCATTER = [
  [20, 40], [110, 190], [250, 170], [370, 200], [470, 160],
  [600, 190], [700, 50], [780, 175], [150, 30], [340, 30],
  [520, 25], [660, 150], [30, 155], [730, 100], [220, 110],
];

function Constellation({ className = "" }) {
  const path = LINE.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <svg
      className={`yz-constellation ${className}`}
      viewBox="0 0 800 220"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {SCATTER.map(([x, y], i) => (
        <circle key={`s-${x}-${y}`} cx={x} cy={y} r={i % 3 === 0 ? 1.4 : 0.9} fill="var(--yz-ink)" opacity="0.18" />
      ))}
      <polyline points={path} stroke="var(--yz-gold)" strokeWidth="0.75" opacity="0.4" />
      {LINE.map(([x, y]) => (
        <circle key={`n-${x}-${y}`} cx={x} cy={y} r="2.2" fill="var(--yz-gold)" opacity="0.75" />
      ))}
    </svg>
  );
}

export default Constellation;
