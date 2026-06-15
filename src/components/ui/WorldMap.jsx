// Stylized dotted world map with pulsing brass markers on export markets.
// Pure inline SVG — no external map library. Coordinates are hand-placed on a
// simplified equirectangular layout (viewBox 0 0 1000 500).
const MARKERS = [
  { name: 'India (HQ)', x: 690, y: 270, hq: true },
  { name: 'United Kingdom', x: 480, y: 168 },
  { name: 'Germany', x: 515, y: 175 },
  { name: 'Italy', x: 520, y: 200 },
  { name: 'UAE', x: 620, y: 250 },
  { name: 'Singapore', x: 775, y: 320 },
  { name: 'Australia', x: 850, y: 390 },
  { name: 'USA', x: 235, y: 205 },
];

export default function WorldMap() {
  return (
    <svg className="world-map" viewBox="0 0 1000 500" role="img" aria-label="Deepak Products export markets worldwide" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-primary-light)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
        <pattern id="wm-dots" width="11" height="11" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="rgba(245,240,232,0.16)" />
        </pattern>
        {/* Rough landmass silhouette as a clip so dots only show on "land" */}
        <clipPath id="wm-land">
          <path d="M150,150 Q230,120 300,170 Q330,250 270,300 Q220,330 180,270 Q140,210 150,150 Z" />
          <path d="M440,130 Q520,110 600,150 Q640,210 590,260 Q520,290 470,250 Q430,190 440,130 Z" />
          <path d="M560,210 Q700,180 760,250 Q800,320 720,360 Q650,380 600,320 Q560,270 560,210 Z" />
          <path d="M790,350 Q880,330 910,390 Q900,440 840,440 Q790,420 790,350 Z" />
          <path d="M300,300 Q360,290 380,360 Q360,430 310,430 Q280,370 300,300 Z" />
        </clipPath>
      </defs>

      {/* Dotted continents */}
      <rect x="0" y="0" width="1000" height="500" fill="url(#wm-dots)" clipPath="url(#wm-land)" />

      {/* Connection arcs from India HQ to each market */}
      {MARKERS.filter((m) => !m.hq).map((m) => {
        const hq = MARKERS[0];
        const mx = (hq.x + m.x) / 2;
        const my = Math.min(hq.y, m.y) - 60;
        return (
          <path
            key={`arc-${m.name}`}
            d={`M${hq.x},${hq.y} Q${mx},${my} ${m.x},${m.y}`}
            fill="none"
            stroke="rgba(184,134,11,0.32)"
            strokeWidth="1"
            className="world-map__arc"
          />
        );
      })}

      {/* Markers */}
      {MARKERS.map((m, i) => (
        <g key={m.name} className="world-map__marker" style={{ animationDelay: `${i * 0.25}s` }}>
          <circle cx={m.x} cy={m.y} r={m.hq ? 26 : 18} fill="url(#wm-glow)" />
          <circle cx={m.x} cy={m.y} r={m.hq ? 6 : 4} fill={m.hq ? 'var(--color-primary-light)' : 'var(--color-primary)'} />
          {m.hq && <circle cx={m.x} cy={m.y} r="6" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" className="world-map__ping" />}
        </g>
      ))}
    </svg>
  );
}
