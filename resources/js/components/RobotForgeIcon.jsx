export default function RobotForgeIcon({ 
  className = "w-8 h-8", 
  isDark = false, 
  animated = true,
  variant = "A", // "A" | "B" | "C" | "D" | "E"
  anvilVariant = null // If provided, overrides anvil model: "A" | "B" | "C" | "D" | "E"
}) {
  const activeAnvil = anvilVariant || variant;

  if (variant === "B") {
    // VARIANT B: Quantum Sphere Drone & Orbital Plasma Forge
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes orbPulse {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.15) rotate(180deg); }
          }
          @keyframes rayBeam {
            0%, 100% { opacity: 0.3; stroke-dashoffset: 20; }
            50% { opacity: 1; stroke-dashoffset: 0; }
          }
          .animate-orb { transform-origin: 32px 20px; animation: ${animated ? 'orbPulse 2s infinite linear' : 'none'}; }
          .animate-beam { animation: ${animated ? 'rayBeam 1.2s infinite ease-in-out' : 'none'}; }
        `}</style>
        {/* Floating Concentric Rings */}
        <circle cx="32" cy="20" r="16" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="4 2" className="animate-orb" />
        <circle cx="32" cy="20" r="11" fill="#090d16" stroke="#a855f7" strokeWidth="2" />
        {/* Quantum Core Eye */}
        <circle cx="32" cy="20" r="4" fill="#00f0ff" className="animate-pulse" />

        {/* 3 Plasma Laser Emitters */}
        <path d="M18 30 L28 42 M46 30 L36 42 M32 28 V42" stroke="#00f0ff" strokeWidth="2.5" strokeDasharray="6 3" className="animate-beam" />

        {/* ANVIL MODEL B: Quantum Levitating Monolith */}
        <polygon points="16,42 48,42 42,52 22,52" fill="#090d16" stroke="#00f0ff" strokeWidth="1.5" />
        <ellipse cx="32" cy="42" rx="16" ry="5" fill="#00f0ff" opacity="0.8" />
        <ellipse cx="32" cy="42" rx="9" ry="2.5" fill="#a855f7" />
        {/* Magnetic Field Pillars */}
        <rect x="24" y="52" width="16" height="6" rx="2" fill="#00f0ff" stroke="#a855f7" strokeWidth="1" />
        <circle cx="18" cy="38" r="2.5" fill="#a855f7" className="animate-ping" />
        <circle cx="46" cy="38" r="2.5" fill="#00f0ff" className="animate-ping" />
      </svg>
    );
  }

  if (variant === "C") {
    // VARIANT C: Inferno Dragon Beast & Magma Crusher Jaw
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes dragonChomp {
            0%, 100% { transform: rotate(0deg); }
            40% { transform: rotate(-25deg); }
            60% { transform: rotate(10deg); }
          }
          @keyframes lavaFaint {
            0%, 100% { fill: #ef4444; }
            50% { fill: #f97316; }
          }
          .animate-jaw { transform-origin: 20px 24px; animation: ${animated ? 'dragonChomp 1s infinite cubic-bezier(0.6, -0.2, 0.2, 1.2)' : 'none'}; }
          .animate-lava { animation: ${animated ? 'lavaFaint 1.5s infinite ease-in-out' : 'none'}; }
        `}</style>
        {/* Dragon Horns & Head */}
        <polygon points="12,6 18,16 6,14" fill="#dc2626" />
        <polygon points="28,6 22,16 34,14" fill="#dc2626" />
        <rect x="10" y="14" width="20" height="14" rx="4" fill="#7f1d1d" stroke="#f97316" strokeWidth="2" />
        <circle cx="17" cy="20" r="3" fill="#facc15" />

        {/* Animated Spiked Jaw Crusher Arm */}
        <g className="animate-jaw">
          <path d="M26 24 L46 16" stroke="#f97316" strokeWidth="4" strokeLineCap="round" />
          <polygon points="44,8 58,16 48,24" fill="#dc2626" stroke="#facc15" strokeWidth="1.5" />
          <polygon points="46,14 52,14 49,20" fill="#facc15" />
        </g>

        {/* ANVIL MODEL C: Volcanic Lava Altar Anvil */}
        <polygon points="8,48 56,48 50,34 14,34" fill="#450a0a" stroke="#f97316" strokeWidth="2" />
        <polygon points="14,34 20,28 26,34 32,28 38,34 44,28 50,34" fill="#f97316" className="animate-lava" />
        <rect x="18" y="48" width="28" height="10" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
        {/* Spikes */}
        <polygon points="10,48 6,40 14,44" fill="#dc2626" />
        <polygon points="54,48 58,40 50,44" fill="#dc2626" />

        {/* Fire Sparks */}
        <circle cx="28" cy="26" r="2" fill="#facc15" className="animate-bounce" />
        <circle cx="40" cy="22" r="2.5" fill="#f97316" className="animate-ping" />
      </svg>
    );
  }

  if (variant === "D") {
    // VARIANT D: Cyberpunk Hex-Spider & Multi-Torch Welder
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes spiderLaser {
            0%, 100% { stroke-dashoffset: 0; opacity: 0.4; }
            50% { stroke-dashoffset: 15; opacity: 1; }
          }
          @keyframes hexPulse {
            0%, 100% { fill: #15803d; }
            50% { fill: #22c55e; }
          }
          .animate-laser { animation: ${animated ? 'spiderLaser 0.8s infinite linear' : 'none'}; }
          .animate-hex { animation: ${animated ? 'hexPulse 1.2s infinite ease-in-out' : 'none'}; }
        `}</style>
        {/* Hexagonal Cyber Head */}
        <polygon points="20,6 32,2 44,6 44,18 32,22 20,18" fill="#052e16" stroke="#22c55e" strokeWidth="2" className="animate-hex" />
        {/* 4 Cyber Spider Optics */}
        <circle cx="26" cy="10" r="2" fill="#4ade80" />
        <circle cx="38" cy="10" r="2" fill="#4ade80" />
        <circle cx="28" cy="16" r="1.5" fill="#f43f5e" />
        <circle cx="36" cy="16" r="1.5" fill="#f43f5e" />

        {/* Multi-Joint Spider Arms holding Welder */}
        <path d="M20 18 L10 28 L22 36" stroke="#22c55e" strokeWidth="2.5" strokeLineCap="round" />
        <path d="M44 18 L54 28 L42 36" stroke="#22c55e" strokeWidth="2.5" strokeLineCap="round" />

        {/* Triple Welding Laser Beams */}
        <path d="M22 36 L32 44 M42 36 L32 44 M32 22 V44" stroke="#4ade80" strokeWidth="2" strokeDasharray="3 3" className="animate-laser" />

        {/* ANVIL MODEL D: Cyber Matrix Holographic Lattice Platform */}
        <rect x="12" y="44" width="40" height="14" rx="3" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <path d="M12 48 H52 M12 52 H52 M24 44 V58 M40 44 V58" stroke="#15803d" strokeWidth="1.5" />
        <circle cx="24" cy="48" r="1.5" fill="#4ade80" />
        <circle cx="40" cy="48" r="1.5" fill="#4ade80" />
        <rect x="28" y="42" width="8" height="3" fill="#4ade80" className="animate-ping" />
      </svg>
    );
  }

  if (variant === "E") {
    // VARIANT E: Imperial Sovereign Monarch & Crown Scepter
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          @keyframes scepterStrike {
            0%, 100% { transform: rotate(0deg); }
            45% { transform: rotate(-35deg) translate(-4px, -8px); }
            65% { transform: rotate(15deg) translate(3px, 5px); }
          }
          @keyframes diamondSparkle {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.4); opacity: 1; }
          }
          .animate-scepter { transform-origin: 24px 22px; animation: ${animated ? 'scepterStrike 1.2s infinite ease-in-out' : 'none'}; }
          .animate-diamond { transform-origin: 32px 42px; animation: ${animated ? 'diamondSparkle 1.5s infinite ease-in-out' : 'none'}; }
        `}</style>
        {/* Crown & Imperial Royal Helmet */}
        <polygon points="16,8 20,2 26,8 32,1 38,8 44,2 48,8" fill="#eab308" stroke="#78350f" strokeWidth="1" />
        <rect x="18" y="8" width="28" height="14" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <rect x="22" y="13" width="20" height="4" rx="2" fill="#0284c7" />

        {/* Animated Royal Scepter Hammer */}
        <g className="animate-scepter">
          <path d="M28 22 L44 10" stroke="#eab308" strokeWidth="4.5" strokeLineCap="round" />
          <circle cx="46" cy="8" r="6" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
          <polygon points="46,3 48,7 52,8 48,9 46,13 44,9 40,8 44,7" fill="#ffffff" />
        </g>

        {/* ANVIL MODEL E: Sovereign Gold & Diamond Pedestal */}
        <polygon points="14,46 50,46 42,32 22,32" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,32 39,39 32,46 25,39" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" className="animate-diamond" />
        <rect x="18" y="46" width="28" height="10" rx="3" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="32" cy="51" r="2.5" fill="#ffffff" />

        {/* Gold Coins & Star Particles */}
        <polygon points="20,28 22,30 25,30 23,32 24,35 20,33 17,35 18,32 16,30 19,30" fill="#facc15" className="animate-ping" />
        <polygon points="46,26 48,28 51,28 49,30 50,33 46,31 43,33 44,30 42,28 45,28" fill="#facc15" className="animate-ping" />
      </svg>
    );
  }

  // DEFAULT VARIANT A: CyberForge Titan with Industrial Double-Horn Anvil
  const strokeColor = isDark ? "#ffffff" : "#000000";
  const fillColor = isDark ? "#ffffff" : "#000000";

  return (
    <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes titanStrike {
          0%, 100% { transform: rotate(0deg); }
          40% { transform: rotate(-38deg) translate(-4px, -6px); }
          60% { transform: rotate(20deg) translate(2px, 4px); }
        }
        @keyframes titanSpark {
          0%, 45%, 85%, 100% { opacity: 0; transform: scale(0.6); }
          60% { opacity: 1; transform: scale(1.4); }
        }
        .animate-titan-hammer { transform-origin: 24px 24px; animation: ${animated ? 'titanStrike 1.1s infinite ease-in-out' : 'none'}; }
        .animate-titan-spark { transform-origin: 32px 30px; animation: ${animated ? 'titanSpark 1.1s infinite ease-in-out' : 'none'}; }
      `}</style>
      
      {/* Heavy Rectangular Block Head */}
      <rect x="6" y="8" width="18" height="15" rx="3" fill="#ffe600" stroke={strokeColor} strokeWidth="2" />
      <rect x="10" y="13" width="10" height="4" fill="#000000" />
      <circle cx="15" cy="15" r="1.5" fill="#00f0ff" />
      
      {/* Heavy Hydraulic Neck & Arm */}
      <path d="M15 23 V30 M15 30 L26 24" stroke={strokeColor} strokeWidth="4" strokeLineCap="round" />

      {/* Hydraulic Piston Hammer */}
      <g className="animate-titan-hammer">
        <path d="M26 24 L38 14" stroke={strokeColor} strokeWidth="4.5" strokeLineCap="round" />
        <rect x="34" y="6" width="18" height="12" rx="2" fill="#ffe600" stroke={strokeColor} strokeWidth="2" transform="rotate(-30 43 12)" />
      </g>

      {/* ANVIL MODEL A: Reinforced Heavy Industrial Double-Horn Anvil */}
      <path d="M10 46 H54 L48 34 H58 V30 H20 L10 34 Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
      <path d="M22 46 V56 H42 V46" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
      <rect x="16" y="56" width="32" height="4" rx="1.5" fill="#ffe600" stroke={strokeColor} strokeWidth="1.5" />
      <line x1="22" y1="34" x2="48" y2="34" stroke="#ffe600" strokeWidth="2" />

      {/* Flying Heavy Sparks */}
      <g className="animate-titan-spark">
        <path d="M30 28 L20 16 M36 28 L38 12 M42 32 L54 20" stroke="#ff0055" strokeWidth="3.5" strokeLineCap="round" />
        <circle cx="20" cy="16" r="2" fill="#ffe600" />
        <circle cx="38" cy="12" r="2" fill="#ffe600" />
      </g>
    </svg>
  );
}
