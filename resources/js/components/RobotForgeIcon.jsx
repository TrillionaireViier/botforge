export default function RobotForgeIcon({ 
  className = "w-8 h-8", 
  isDark = false, 
  animated = true,
  variant = "A" // "A" | "B" | "C" | "D" | "E"
}) {
  // Variant styling configs
  const variantConfigs = {
    A: {
      name: "CyberForge Titan",
      stroke: isDark ? "#ffffff" : "#000000",
      fill: isDark ? "#ffffff" : "#000000",
      eyePrimary: "#00f0ff",
      eyeGlow: "#ff0055",
      sparkColor: "#ffb703",
      accent: "#facc15", // yellow
      hammerFill: "#facc15"
    },
    B: {
      name: "Quantum Plasma Lord",
      stroke: "#00f0ff",
      fill: "#00f0ff",
      eyePrimary: "#c084fc",
      eyeGlow: "#00f0ff",
      sparkColor: "#38bdf8",
      accent: "#a855f7", // purple
      hammerFill: "#a855f7"
    },
    C: {
      name: "Inferno Magma Dragon",
      stroke: "#f97316",
      fill: "#ef4444",
      eyePrimary: "#facc15",
      eyeGlow: "#dc2626",
      sparkColor: "#f97316",
      accent: "#dc2626", // red
      hammerFill: "#f97316"
    },
    D: {
      name: "CyberPunk Matrix Sentinel",
      stroke: "#22c55e",
      fill: "#15803d",
      eyePrimary: "#4ade80",
      eyeGlow: "#f43f5e",
      sparkColor: "#22c55e",
      accent: "#4ade80", // neon green
      hammerFill: "#4ade80"
    },
    E: {
      name: "Golden Sovereign Empire",
      stroke: "#eab308",
      fill: "#fef08a",
      eyePrimary: "#38bdf8",
      eyeGlow: "#10b981",
      sparkColor: "#facc15",
      accent: "#eab308", // gold
      hammerFill: "#ffffff"
    }
  };

  const cfg = variantConfigs[variant] || variantConfigs.A;

  return (
    <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes hammerStrike_${variant} {
          0%, 100% { transform: rotate(0deg); }
          35% { transform: rotate(-40deg) translate(-5px, -7px); }
          55% { transform: rotate(22deg) translate(3px, 5px); }
        }
        @keyframes sparkPulse_${variant} {
          0%, 40%, 85%, 100% { opacity: 0; transform: scale(0.5); }
          55% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes eyeGlow_${variant} {
          0%, 100% { fill: ${cfg.eyePrimary}; }
          50% { fill: ${cfg.eyeGlow}; }
        }
        .animate-hammer-${variant} {
          transform-origin: 24px 24px;
          animation: ${animated ? `hammerStrike_${variant} 1.1s infinite cubic-bezier(0.4, 0, 0.2, 1)` : 'none'};
        }
        .animate-sparks-${variant} {
          transform-origin: 32px 30px;
          animation: ${animated ? `sparkPulse_${variant} 1.1s infinite cubic-bezier(0.4, 0, 0.2, 1)` : 'none'};
        }
        .animate-eye-${variant} {
          animation: ${animated ? `eyeGlow_${variant} 1.6s infinite ease-in-out` : 'none'};
        }
      `}</style>
      
      {/* Robot Head */}
      <rect x="6" y="8" width="18" height="14" rx="3" fill={cfg.fill} stroke={cfg.stroke} strokeWidth="1.5" />
      {/* Glowing Robot Eye */}
      <circle cx="15" cy="15" r="3" className={`animate-eye-${variant}`} fill={cfg.eyePrimary} />
      {/* Crown / Antenna */}
      {variant === 'E' ? (
        <path d="M11 8 L15 2 L19 8 Z" fill="#eab308" stroke={cfg.stroke} />
      ) : (
        <>
          <path d="M15 8 V3" stroke={cfg.stroke} strokeWidth="2.5" strokeLineCap="round" />
          <circle cx="15" cy="2" r="2.5" fill={cfg.accent} />
        </>
      )}
      
      {/* Robot Body */}
      <path d="M15 22 V30 M15 30 L26 24" stroke={cfg.stroke} strokeWidth="3.5" strokeLineCap="round" strokeLineJoin="round" />

      {/* Animated Arm & Warhammer */}
      <g className={`animate-hammer-${variant}`}>
        <path d="M26 24 L38 14" stroke={cfg.stroke} strokeWidth="4" strokeLineCap="round" />
        <rect x="34" y="7" width="18" height="11" rx="2" fill={cfg.hammerFill} stroke={cfg.stroke} strokeWidth="1.5" transform="rotate(-30 43 12)" />
        {/* Flame detail on hammer head for C & D */}
        {(variant === 'C' || variant === 'D') && (
          <path d="M40 10 L44 5 L48 10 Z" fill={cfg.sparkColor} transform="rotate(-30 43 12)" />
        )}
      </g>

      {/* Heavy Anvil Base */}
      <path d="M12 46 H52 L46 36 H54 V32 H22 L12 36 Z" fill={cfg.fill} stroke={cfg.stroke} strokeWidth="1.5" />
      <path d="M24 46 V54 H40 V46" fill={cfg.fill} />
      <rect x="18" y="54" width="28" height="4" rx="1" fill={cfg.accent} stroke={cfg.stroke} />

      {/* Animated Spark Particles */}
      <g className={`animate-sparks-${variant}`}>
        <path d="M30 28 L20 16 M36 28 L38 12 M42 32 L54 20 M28 32 L16 26" stroke={cfg.sparkColor} strokeWidth="3.5" strokeLineCap="round" />
        <circle cx="20" cy="16" r="2" fill={cfg.accent} />
        <circle cx="38" cy="12" r="2" fill={cfg.eyePrimary} />
        <circle cx="54" cy="20" r="2" fill={cfg.sparkColor} />
      </g>
    </svg>
  );
}
