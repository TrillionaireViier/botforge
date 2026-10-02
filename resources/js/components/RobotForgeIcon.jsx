export default function RobotForgeIcon({ className = "w-8 h-8", isDark = false, animated = true }) {
  const strokeColor = isDark ? "#ffffff" : "#000000";
  const fillColor = isDark ? "#ffffff" : "#000000";

  return (
    <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes hammerStrike {
          0%, 100% { transform: rotate(0deg); }
          40% { transform: rotate(-35deg) translate(-4px, -6px); }
          60% { transform: rotate(18deg) translate(2px, 4px); }
        }
        @keyframes sparkPulse {
          0%, 45%, 85%, 100% { opacity: 0; transform: scale(0.6); }
          60% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes eyeGlow {
          0%, 100% { fill: #00d4aa; }
          50% { fill: #ff0055; }
        }
        .animate-hammer {
          transform-origin: 24px 24px;
          animation: ${animated ? 'hammerStrike 1.2s infinite ease-in-out' : 'none'};
        }
        .animate-sparks {
          transform-origin: 32px 30px;
          animation: ${animated ? 'sparkPulse 1.2s infinite ease-in-out' : 'none'};
        }
        .animate-eye {
          animation: ${animated ? 'eyeGlow 1.8s infinite ease-in-out' : 'none'};
        }
      `}</style>
      
      {/* Robot Head */}
      <rect x="6" y="8" width="16" height="14" rx="2" fill={fillColor} />
      {/* Glowing Robot Eye */}
      <circle cx="14" cy="15" r="2.5" className="animate-eye" fill="#00d4aa" />
      {/* Antenna */}
      <path d="M14 8 V3" stroke={strokeColor} strokeWidth="2.5" strokeLineCap="round" />
      <circle cx="14" cy="2" r="2" fill={fillColor} />
      
      {/* Robot Body */}
      <path d="M14 22 V30 M14 30 L26 24" stroke={strokeColor} strokeWidth="3.5" strokeLineCap="round" strokeLineJoin="round" />

      {/* Animated Robotic Arm & Blacksmith Hammer Group */}
      <g className="animate-hammer">
        <path d="M26 24 L38 14" stroke={strokeColor} strokeWidth="4" strokeLineCap="round" />
        <rect x="34" y="8" width="16" height="10" rx="1.5" fill={fillColor} transform="rotate(-30 42 13)" />
      </g>

      {/* Anvil Base */}
      <path d="M14 46 H50 L44 36 H52 V32 H22 L14 36 Z" fill={fillColor} />
      <path d="M24 46 V54 H40 V46" fill={fillColor} />
      <rect x="18" y="54" width="28" height="4" rx="1" fill={fillColor} />

      {/* Animated Sparks from Impact */}
      <g className="animate-sparks">
        <path d="M30 28 L22 18 M36 28 L38 14 M40 32 L52 22" stroke="#ffb703" strokeWidth="3" strokeLineCap="round" />
        <circle cx="22" cy="18" r="1.5" fill="#ff0055" />
        <circle cx="38" cy="14" r="1.5" fill="#ffe600" />
      </g>
    </svg>
  );
}
