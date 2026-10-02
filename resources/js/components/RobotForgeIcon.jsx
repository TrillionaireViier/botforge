export default function RobotForgeIcon({ className = "w-8 h-8", isDark = false }) {
  const strokeColor = isDark ? "#ffffff" : "#000000";
  const fillColor = isDark ? "#ffffff" : "#000000";

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Robot Head */}
      <rect x="6" y="8" width="16" height="14" rx="2" fill={fillColor} />
      {/* Glowing Robot Eye */}
      <circle cx="14" cy="15" r="2.5" fill="#00d4aa" />
      {/* Antenna */}
      <path d="M14 8 V3" stroke={strokeColor} strokeWidth="2.5" strokeLineCap="round" />
      <circle cx="14" cy="2" r="2" fill={fillColor} />
      
      {/* Robot Body & Arm */}
      <path d="M14 22 V30 M14 30 L26 24" stroke={strokeColor} strokeWidth="3.5" strokeLineCap="round" strokeLineJoin="round" />
      {/* Robotic Arm Holding Hammer */}
      <path d="M26 24 L38 14" stroke={strokeColor} strokeWidth="4" strokeLineCap="round" />
      
      {/* Blacksmith Hammer */}
      <rect x="34" y="8" width="16" height="10" rx="1.5" fill={fillColor} transform="rotate(-30 42 13)" />

      {/* Anvil Base */}
      <path d="M14 46 H50 L44 36 H52 V32 H22 L14 36 Z" fill={fillColor} />
      <path d="M24 46 V54 H40 V46" fill={fillColor} />
      <rect x="18" y="54" width="28" height="4" rx="1" fill={fillColor} />

      {/* Sparks from Impact */}
      <path d="M30 28 L26 20 M36 28 L38 18 M40 32 L48 26" stroke="#ffb703" strokeWidth="3" strokeLineCap="round" />
    </svg>
  );
}
