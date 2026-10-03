export default function RobotForgeIcon({ 
  className = "w-8 h-8", 
  isDark = false, 
  animated = true,
  variant = "A1"
}) {
  const v = variant.toUpperCase();
  const eyeGlow = animated ? "animate-pulse" : "";

  // Color theme per category
  let mainColor = "#38bdf8"; // cyan default
  let headColor = "#e0f2fe";
  let bodyColor = "#0284c7";
  let eyeColor = "#00f0ff";
  let accentColor = "#bae6fd";

  if (v.startsWith('A')) { // Titan Gold/Yellow Mech
    mainColor = "#eab308";
    headColor = "#fef08a";
    bodyColor = "#ca8a04";
    eyeColor = "#00f0ff";
    accentColor = "#fde047";
  } else if (v.startsWith('B')) { // Quantum Cyan/Purple
    mainColor = "#06b6d4";
    headColor = "#cffafe";
    bodyColor = "#0891b2";
    eyeColor = "#a855f7";
    accentColor = "#67e8f9";
  } else if (v.startsWith('C')) { // Inferno Red/Orange
    mainColor = "#ef4444";
    headColor = "#fee2e2";
    bodyColor = "#b91c1c";
    eyeColor = "#facc15";
    accentColor = "#fca5a5";
  } else if (v.startsWith('D')) { // Matrix Green
    mainColor = "#22c55e";
    headColor = "#dcfce7";
    bodyColor = "#15803d";
    eyeColor = "#4ade80";
    accentColor = "#86efac";
  } else if (v.startsWith('E')) { // Imperial Gold
    mainColor = "#f59e0b";
    headColor = "#fef3c7";
    bodyColor = "#d97706";
    eyeColor = "#38bdf8";
    accentColor = "#fde68a";
  }

  // Variant Head/Ear Modifications for 30 Unique Models
  const isHorns = v === 'A2' || v === 'C1' || v === 'A6';
  const isCrest = v === 'A3' || v === 'C4' || v === 'E1';
  const isWings = v === 'A4' || v === 'B2' || v === 'E5';
  const isEars = v === 'A5' || v === 'B3' || v === 'E4';
  const isPixel = v === 'B4' || v === 'D5';

  return (
    <svg className={`${className} overflow-visible transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`} viewBox="0 0 100 100" fill="none">
      
      {/* Dynamic Animated Pulse Aura on Logo */}
      {animated && (
        <circle cx="50" cy="40" r="38" className="animate-ping opacity-25" fill={eyeColor} />
      )}

      {/* 1. Antennas / Ears / Horns */}
      {isHorns && (
        <g className={animated ? "animate-bounce" : ""}>
          <polygon points="25,5 33,25 20,25" fill={mainColor} stroke="#000" strokeWidth="3" />
          <polygon points="75,5 67,25 80,25" fill={mainColor} stroke="#000" strokeWidth="3" />
        </g>
      )}

      {isCrest && (
        <path d="M30 4 C40 0, 60 0, 70 4 L65 18 H35 Z" fill="#ef4444" stroke="#000" strokeWidth="3" />
      )}

      {isWings && (
        <g>
          <path d="M12 12 L30 22 L16 30 Z" fill={accentColor} stroke="#000" strokeWidth="3" />
          <path d="M88 12 L70 22 L84 30 Z" fill={accentColor} stroke="#000" strokeWidth="3" />
        </g>
      )}

      {isEars ? (
        <g>
          <circle cx="24" cy="18" r="9" fill={bodyColor} stroke="#000" strokeWidth="3" />
          <circle cx="76" cy="18" r="9" fill={bodyColor} stroke="#000" strokeWidth="3" />
        </g>
      ) : (
        <g>
          {/* Dual Antennas */}
          <line x1="32" y1="8" x2="32" y2="20" stroke="#000" strokeWidth="4" />
          <circle cx="32" cy="7" r="5" fill={eyeColor} stroke="#000" strokeWidth="2" />
          <line x1="68" y1="8" x2="68" y2="20" stroke="#000" strokeWidth="4" />
          <circle cx="68" cy="7" r="5" fill={eyeColor} stroke="#000" strokeWidth="2" />
        </g>
      )}

      {/* 2. Round Cute Robot Head (White/Ceramic with Outline) */}
      <rect x="22" y="16" width="56" height="38" rx="14" fill={headColor} stroke="#000" strokeWidth="4.5" />

      {/* Side Ear Bolts */}
      <rect x="15" y="27" width="8" height="16" rx="3" fill={bodyColor} stroke="#000" strokeWidth="3" />
      <rect x="77" y="27" width="8" height="16" rx="3" fill={bodyColor} stroke="#000" strokeWidth="3" />

      {/* Face Screen Visor */}
      <rect x="30" y="22" width="40" height="24" rx="8" fill="#0f172a" stroke="#000" strokeWidth="3" />

      {/* Glowing Screen Visor Eyes */}
      {isPixel ? (
        <g className={eyeGlow}>
          <rect x="35" y="28" width="9" height="9" fill={eyeColor} />
          <rect x="56" y="28" width="9" height="9" fill={eyeColor} />
        </g>
      ) : (
        <g className={eyeGlow}>
          <rect x="36" y="27" width="10" height="10" rx="3" fill={eyeColor} />
          <rect x="54" y="27" width="10" height="10" rx="3" fill={eyeColor} />
          {/* Eye Shine pupil */}
          <circle cx="39" cy="30" r="1.5" fill="#ffffff" />
          <circle cx="57" cy="30" r="1.5" fill="#ffffff" />
        </g>
      )}

      {/* Cute Robot Mouth / Smile */}
      <path d="M44 38 Q 50 43, 56 38" stroke={eyeColor} strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Neck Joint */}
      <rect x="44" y="54" width="12" height="6" fill="#475569" stroke="#000" strokeWidth="2" />

      {/* 3. Round Robot Body/Torso */}
      <rect x="26" y="58" width="48" height="32" rx="12" fill={headColor} stroke="#000" strokeWidth="4.5" />

      {/* Chest Reactor Gauge Screen */}
      <rect x="34" y="64" width="32" height="18" rx="5" fill="#0f172a" stroke="#000" strokeWidth="2.5" />
      
      {/* Internal Rotating Gears / Core */}
      <circle cx="43" cy="73" r="5" fill={mainColor} stroke={eyeColor} strokeWidth="1.5" className={eyeGlow} />
      <circle cx="57" cy="73" r="3" fill={accentColor} />

      {/* 4. Segmented Metallic Robot Arms */}
      {/* Left Arm */}
      <g>
        <circle cx="22" cy="64" r="5" fill={bodyColor} stroke="#000" strokeWidth="2.5" />
        <path d="M18 67 L10 76 M10 76 L14 86" stroke="#000" strokeWidth="5" strokeLinecap="round" />
        <path d="M18 67 L10 76 M10 76 L14 86" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
        {/* Left Claw Hand */}
        <path d="M10 86 C 5 84, 5 92, 10 92 M14 86 C 19 84, 19 92, 14 92" stroke="#000" strokeWidth="2.5" fill="none" />
      </g>

      {/* Right Arm */}
      <g>
        <circle cx="78" cy="64" r="5" fill={bodyColor} stroke="#000" strokeWidth="2.5" />
        <path d="M82 67 L90 76 M90 76 L86 86" stroke="#000" strokeWidth="5" strokeLinecap="round" />
        <path d="M82 67 L90 76 M90 76 L86 86" stroke={mainColor} strokeWidth="2" strokeLinecap="round" />
        {/* Right Claw Hand */}
        <path d="M86 86 C 91 84, 91 92, 86 92 M82 86 C 77 84, 77 92, 82 92" stroke="#000" strokeWidth="2.5" fill="none" />
      </g>

      {/* 5. Jointed Robot Legs & Feet */}
      {/* Left Leg */}
      <g>
        <rect x="36" y="88" width="8" height="8" rx="2" fill={bodyColor} stroke="#000" strokeWidth="2" />
        <ellipse cx="40" cy="97" rx="7" ry="3" fill="#334155" stroke="#000" strokeWidth="2" />
      </g>

      {/* Right Leg */}
      <g>
        <rect x="56" y="88" width="8" height="8" rx="2" fill={bodyColor} stroke="#000" strokeWidth="2" />
        <ellipse cx="60" cy="97" rx="7" ry="3" fill="#334155" stroke="#000" strokeWidth="2" />
      </g>

    </svg>
  );
}
