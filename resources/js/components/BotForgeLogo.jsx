export default function BotForgeLogo({ size = 36, color = "currentColor", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="BotForge logo">
      <g transform="rotate(35 24 24)">
        <rect x="21" y="5" width="6" height="19" rx="3" fill={color} />
        <line x1="22.2" y1="10" x2="25.8" y2="10" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <line x1="22.2" y1="14" x2="25.8" y2="14" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <line x1="22.2" y1="18" x2="25.8" y2="18" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <rect x="11" y="24" width="26" height="12" rx="3.5" fill={color} />
        <circle cx="18.5" cy="30" r="3.2" fill="white" opacity="0.95" />
        <circle cx="29.5" cy="30" r="3.2" fill="white" opacity="0.95" />
        <circle cx="18.5" cy="30" r="1.6" fill={color} />
        <circle cx="29.5" cy="30" r="1.6" fill={color} />
        <circle cx="19.3" cy="29.2" r="0.55" fill="white" opacity="0.75" />
        <circle cx="30.3" cy="29.2" r="0.55" fill="white" opacity="0.75" />
        <rect x="11" y="34" width="26" height="2" rx="1" fill={color} opacity="0.55" />
      </g>
      <path d="M29 41 Q25.5 41 25.5 44.5 L29 44.5 Z" fill={color} />
      <rect x="29" y="38" width="16" height="7" rx="2" fill={color} />
      <rect x="30" y="44.5" width="14" height="3" rx="1.5" fill={color} />
      <line x1="29" y1="35" x2="25" y2="29" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="31" y1="34" x2="30" y2="28" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
      <line x1="33" y1="35" x2="38" y2="30" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="28" y1="37" x2="22" y2="36" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
      <line x1="34" y1="37" x2="39" y2="40" stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
