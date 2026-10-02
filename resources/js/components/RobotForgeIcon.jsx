export default function RobotForgeIcon({ 
  className = "w-8 h-8", 
  isDark = false, 
  animated = true,
  variant = "A1"
}) {
  const strokeColor = isDark ? "#ffffff" : "#000000";
  const v = variant.toUpperCase();

  // --- CATEGORY A: TITANS (A1 - A6) ---
  if (v === 'A2') { // Titanium Dreadnought
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <rect x="10" y="6" width="22" height="16" rx="4" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
        <rect x="14" y="12" width="14" height="4" fill="#00f0ff" />
        <path d="M22 22 L10 32 M22 22 L34 32" stroke="#94a3b8" strokeWidth="3" />
        <path d="M26 24 L42 12 L48 18" stroke="#facc15" strokeWidth="3.5" />
        <rect x="10" y="44" width="44" height="14" rx="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
        <path d="M10 44 L20 36 H44 L54 44" fill="#334155" />
      </svg>
    );
  }
  if (v === 'A3') { // Centurion 100-Grid
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M20 4 L26 10 H14 Z" fill="#ef4444" />
        <rect x="14" y="10" width="14" height="14" rx="3" fill="#d97706" stroke="#fef08a" strokeWidth="1.5" />
        <circle cx="21" cy="17" r="2.5" fill="#ffffff" />
        <path d="M24 22 L40 10 L44 14" stroke="#d97706" strokeWidth="3.5" />
        <rect x="14" y="44" width="36" height="12" fill="#b45309" stroke="#fef08a" strokeWidth="2" />
        <path d="M14 48 H50 M20 44 V56 M32 44 V56 M44 44 V56" stroke="#fef08a" strokeWidth="1" />
      </svg>
    );
  }
  if (v === 'A4') { // Valkyrie Shield Guard
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M8 8 L14 16 L6 18 Z M34 8 L28 16 L36 18 Z" fill="#93c5fd" />
        <rect x="12" y="12" width="18" height="12" rx="3" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
        <circle cx="21" cy="18" r="2.5" fill="#60a5fa" />
        <path d="M26 22 L42 8 L46 22 Z" fill="#93c5fd" stroke="#1e3a8a" />
        <polygon points="12,46 52,46 44,34 20,34" fill="#1e40af" stroke="#60a5fa" strokeWidth="2" />
      </svg>
    );
  }
  if (v === 'A5') { // Ironclad Bear Accumulator
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <circle cx="10" cy="8" r="4" fill="#b45309" />
        <circle cx="30" cy="8" r="4" fill="#b45309" />
        <rect x="8" y="10" width="24" height="14" rx="4" fill="#78350f" stroke="#fde047" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="3" fill="#fde047" />
        <path d="M24 22 L40 12" stroke="#fde047" strokeWidth="4" />
        <circle cx="44" cy="10" r="6" fill="#78350f" stroke="#fde047" strokeWidth="2" />
        <rect x="12" y="44" width="40" height="14" rx="4" fill="#451a03" stroke="#fde047" strokeWidth="2" />
        <circle cx="32" cy="51" r="3" fill="#fde047" />
      </svg>
    );
  }
  if (v === 'A6') { // Obsidian Heavy Crusher
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="10,6 30,6 26,20 14,20" fill="#0f172a" stroke="#f43f5e" strokeWidth="2" />
        <line x1="14" y1="13" x2="26" y2="13" stroke="#f43f5e" strokeWidth="3" />
        <path d="M24 20 L40 8 M38 20 L48 12" stroke="#f43f5e" strokeWidth="3.5" />
        <polygon points="10,46 54,46 46,34 18,34" fill="#020617" stroke="#f43f5e" strokeWidth="2" />
        <path d="M18 34 L32 46 L46 34" stroke="#f43f5e" strokeWidth="1.5" />
      </svg>
    );
  }
  if (v === 'A1' || v === 'A' || v === 'TITAN') { // CyberForge Titan 3000
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <rect x="6" y="8" width="18" height="15" rx="3" fill="#ffe600" stroke={strokeColor} strokeWidth="2" />
        <rect x="10" y="13" width="10" height="4" fill="#000000" />
        <circle cx="15" cy="15" r="1.5" fill="#00f0ff" />
        <path d="M15 23 V30 M15 30 L26 24" stroke={strokeColor} strokeWidth="4" />
        <path d="M26 24 L38 14" stroke={strokeColor} strokeWidth="4.5" />
        <rect x="34" y="6" width="18" height="12" rx="2" fill="#ffe600" stroke={strokeColor} strokeWidth="2" transform="rotate(-30 43 12)" />
        <path d="M10 46 H54 L48 34 H58 V30 H20 L10 34 Z" fill="#ffffff" stroke={strokeColor} strokeWidth="2" />
        <rect x="16" y="56" width="32" height="4" rx="1.5" fill="#ffe600" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }

  // --- CATEGORY B: QUANTUMS (B1 - B6) ---
  if (v === 'B2') { // Nebula Cosmic Voyager
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="18" r="12" fill="#030712" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="32" cy="18" rx="18" ry="5" stroke="#c084fc" strokeWidth="1.5" transform="rotate(-15 32 18)" />
        <circle cx="32" cy="18" r="4" fill="#38bdf8" />
        <path d="M22 30 L32 42 M42 30 L32 42" stroke="#c084fc" strokeWidth="2.5" />
        <polygon points="18,44 46,44 38,56 26,56" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" />
        <ellipse cx="32" cy="44" rx="14" ry="4" fill="#38bdf8" />
      </svg>
    );
  }
  if (v === 'B3') { // Aether Flux Oscillator
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M16 16 Q 24 8, 32 16 T 48 16" stroke="#2dd4bf" strokeWidth="2.5" fill="none" />
        <rect x="22" y="10" width="20" height="12" rx="3" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
        <circle cx="32" cy="16" r="3" fill="#ccfbf1" />
        <path d="M28 22 L38 12 L44 18" stroke="#2dd4bf" strokeWidth="3" />
        <rect x="14" y="44" width="36" height="12" rx="3" fill="#134e4a" stroke="#2dd4bf" strokeWidth="2" />
        <path d="M14 50 H50" stroke="#ccfbf1" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    );
  }
  if (v === 'B4') { // Glitch Overlord AI
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <rect x="18" y="6" width="28" height="16" rx="2" fill="#3b0764" stroke="#a855f7" strokeWidth="2" />
        <rect x="22" y="10" width="8" height="8" fill="#f43f5e" />
        <rect x="34" y="10" width="8" height="8" fill="#00f0ff" />
        <path d="M28 22 L40 12 L48 20" stroke="#a855f7" strokeWidth="3.5" />
        <rect x="12" y="44" width="40" height="14" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
        <rect x="20" y="48" width="8" height="6" fill="#f43f5e" />
        <rect x="36" y="48" width="8" height="6" fill="#00f0ff" />
      </svg>
    );
  }
  if (v === 'B5') { // Spectre Zero-Slippage HFT
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M18 20 C18 10, 46 10, 46 20 C46 28, 18 28, 18 20 Z" fill="#0284c7" opacity="0.8" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="26" cy="18" r="2.5" fill="#ffffff" />
        <circle cx="38" cy="18" r="2.5" fill="#ffffff" />
        <path d="M28 24 L42 12" stroke="#38bdf8" strokeWidth="3" />
        <ellipse cx="32" cy="46" rx="18" ry="6" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="32" cy="46" rx="10" ry="3" fill="#7dd3fc" />
      </svg>
    );
  }
  if (v === 'B6') { // Eclipse Dark Matter
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="18" r="13" fill="#000000" stroke="#6366f1" strokeWidth="3" />
        <circle cx="32" cy="18" r="6" fill="#818cf8" />
        <path d="M26 24 L44 8 L48 16" stroke="#6366f1" strokeWidth="3.5" />
        <ellipse cx="32" cy="46" rx="18" ry="7" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
        <circle cx="32" cy="46" r="4" fill="#6366f1" />
      </svg>
    );
  }
  if (v === 'B1' || v === 'B' || v === 'QUANTUM') { // Quantum Plasma Scalper
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="20" r="14" stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="32" cy="20" r="9" fill="#090d16" stroke="#a855f7" strokeWidth="2" />
        <circle cx="32" cy="20" r="4" fill="#00f0ff" />
        <path d="M18 30 L28 42 M46 30 L36 42" stroke="#00f0ff" strokeWidth="2.5" />
        <polygon points="16,42 48,42 42,54 22,54" fill="#090d16" stroke="#00f0ff" strokeWidth="1.5" />
        <ellipse cx="32" cy="42" rx="16" ry="5" fill="#00f0ff" />
      </svg>
    );
  }

  // --- CATEGORY C: INFERNOS (C1 - C6) ---
  if (v === 'C2') { // Solar Flare Sun-Grid
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="18" r="10" fill="#f97316" stroke="#facc15" strokeWidth="2" />
        <path d="M32 4 V8 M32 28 V32 M18 18 H14 M50 18 H46" stroke="#facc15" strokeWidth="2" />
        <path d="M26 24 L42 12 L46 20" stroke="#f97316" strokeWidth="3.5" />
        <polygon points="12,46 52,46 44,34 20,34" fill="#c2410c" stroke="#facc15" strokeWidth="2" />
        <circle cx="32" cy="40" r="4" fill="#facc15" />
      </svg>
    );
  }
  if (v === 'C3') { // Supernova Spark Tracker
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 36,14 46,14 38,20 42,30 32,24 22,30 26,20 18,14 28,14" fill="#ef4444" stroke="#facc15" strokeWidth="1.5" />
        <circle cx="32" cy="17" r="4" fill="#ffffff" />
        <path d="M26 24 L40 10" stroke="#facc15" strokeWidth="3" />
        <polygon points="14,46 50,46 42,34 22,34" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
        <polygon points="22,34 27,40 32,34 37,40 42,34" fill="#facc15" />
      </svg>
    );
  }
  if (v === 'C4') { // Zeus Lightning Flash Buyer
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="28,2 36,2 30,12 38,12 24,24 28,14 20,14" fill="#facc15" stroke="#b45309" strokeWidth="1.5" />
        <circle cx="28" cy="13" r="3" fill="#ffffff" />
        <path d="M28 22 L44 10 L48 18" stroke="#facc15" strokeWidth="3.5" />
        <polygon points="10,48 54,48 44,36 20,36" fill="#78350f" stroke="#facc15" strokeWidth="2" />
        <line x1="14" y1="42" x2="50" y2="42" stroke="#facc15" strokeWidth="3" />
      </svg>
    );
  }
  if (v === 'C5') { // Firestorm Martingale Grid
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <rect x="14" y="8" width="36" height="14" rx="4" fill="#991b1b" stroke="#f97316" strokeWidth="2" />
        <circle cx="22" cy="15" r="3" fill="#facc15" />
        <circle cx="32" cy="15" r="3" fill="#f97316" />
        <circle cx="42" cy="15" r="3" fill="#ef4444" />
        <path d="M26 22 L42 12" stroke="#f97316" strokeWidth="4" />
        <polygon points="10,48 54,48 46,36 18,36" fill="#7f1d1d" stroke="#f97316" strokeWidth="2" />
        <rect x="22" y="48" width="20" height="8" fill="#450a0a" stroke="#f97316" />
      </svg>
    );
  }
  if (v === 'C6') { // Volcano Core Eruptor
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="20,22 32,6 44,22" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
        <circle cx="32" cy="15" r="4" fill="#facc15" />
        <path d="M26 22 L42 10 L46 18" stroke="#ef4444" strokeWidth="3.5" />
        <polygon points="8,48 56,48 46,34 18,34" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
        <ellipse cx="32" cy="34" rx="14" ry="4" fill="#f97316" />
      </svg>
    );
  }
  if (v === 'C1' || v === 'C' || v === 'INFERNO') { // Inferno Magma Dragon
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="12,6 18,16 6,14" fill="#dc2626" />
        <polygon points="28,6 22,16 34,14" fill="#dc2626" />
        <rect x="10" y="14" width="20" height="14" rx="4" fill="#7f1d1d" stroke="#f97316" strokeWidth="2" />
        <circle cx="17" cy="20" r="3" fill="#facc15" />
        <path d="M26 24 L46 16" stroke="#f97316" strokeWidth="4" />
        <polygon points="44,8 58,16 48,24" fill="#dc2626" stroke="#facc15" strokeWidth="1.5" />
        <polygon points="10,48 54,48 48,36 16,36" fill="#991b1b" stroke="#f97316" strokeWidth="1.5" />
      </svg>
    );
  }

  // --- CATEGORY D: MATRIX (D1 - D6) ---
  if (v === 'D2') { // Hyperion Laser Sniper
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="16" r="12" fill="#052e16" stroke="#22c55e" strokeWidth="2" />
        <circle cx="32" cy="16" r="7" stroke="#4ade80" strokeWidth="1.5" />
        <circle cx="32" cy="16" r="3" fill="#f43f5e" />
        <line x1="32" y1="28" x2="32" y2="44" stroke="#4ade80" strokeWidth="3" strokeDasharray="4 2" />
        <rect x="12" y="44" width="40" height="12" rx="3" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <circle cx="32" cy="50" r="4" fill="#f43f5e" />
      </svg>
    );
  }
  if (v === 'D3') { // Cyberpunk Neon Samurai
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M16 10 L32 2 L48 10 L44 20 L20 20 Z" fill="#052e16" stroke="#4ade80" strokeWidth="2" />
        <rect x="22" y="13" width="20" height="4" fill="#22c55e" />
        <path d="M26 20 L46 6 L52 12" stroke="#4ade80" strokeWidth="3" />
        <polygon points="14,46 50,46 44,34 20,34" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <line x1="20" y1="34" x2="44" y2="46" stroke="#4ade80" strokeWidth="2" />
      </svg>
    );
  }
  if (v === 'D4') { // Phantom Shadow Stealth
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 16,14 20,24 44,24 48,14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <rect x="22" y="14" width="20" height="3" fill="#38bdf8" />
        <path d="M26 24 L42 12 M38 24 L48 16" stroke="#38bdf8" strokeWidth="2.5" />
        <rect x="14" y="44" width="36" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <line x1="14" y1="50" x2="50" y2="50" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
      </svg>
    );
  }
  if (v === 'D5') { // Apex Orderbook Sweeper
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <rect x="18" y="8" width="28" height="14" rx="3" fill="#042f2e" stroke="#14b8a6" strokeWidth="2" />
        <rect x="22" y="12" width="6" height="6" fill="#14b8a6" />
        <rect x="30" y="12" width="6" height="6" fill="#14b8a6" />
        <rect x="38" y="12" width="6" height="6" fill="#14b8a6" />
        <path d="M26 22 L40 10 M38 22 L46 16" stroke="#14b8a6" strokeWidth="3" />
        <rect x="12" y="44" width="40" height="14" rx="2" fill="#134e4a" stroke="#14b8a6" strokeWidth="2" />
        <rect x="16" y="47" width="8" height="8" fill="#14b8a6" />
        <rect x="28" y="47" width="8" height="8" fill="#2dd4bf" />
        <rect x="40" y="47" width="8" height="8" fill="#5eead4" />
      </svg>
    );
  }
  if (v === 'D6') { // Pulse Engine MACD 9000
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <rect x="16" y="6" width="32" height="18" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
        <path d="M20 15 Q 26 8, 32 15 T 44 15" stroke="#34d399" strokeWidth="2" fill="none" />
        <path d="M28 24 L42 12" stroke="#34d399" strokeWidth="3.5" />
        <rect x="12" y="44" width="40" height="12" rx="2" fill="#022c22" stroke="#34d399" strokeWidth="2" />
        <rect x="16" y="48" width="6" height="5" fill="#34d399" />
        <rect x="24" y="46" width="6" height="7" fill="#34d399" />
        <rect x="32" y="47" width="6" height="6" fill="#10b981" />
        <rect x="40" y="49" width="6" height="4" fill="#047857" />
      </svg>
    );
  }
  if (v === 'D1' || v === 'D' || v === 'MATRIX') { // Matrix Cyber-Sentinel
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="20,6 32,2 44,6 44,18 32,22 20,18" fill="#052e16" stroke="#22c55e" strokeWidth="2" />
        <circle cx="26" cy="10" r="2" fill="#4ade80" />
        <circle cx="38" cy="10" r="2" fill="#4ade80" />
        <path d="M20 18 L10 28 L22 36" stroke="#22c55e" strokeWidth="2.5" />
        <path d="M44 18 L54 28 L42 36" stroke="#22c55e" strokeWidth="2.5" />
        <rect x="12" y="44" width="40" height="14" rx="2" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
      </svg>
    );
  }

  // --- CATEGORY E: IMPERIALS (E1 - E6) ---
  if (v === 'E2') { // Chronos Time Weaver
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="20,4 44,4 32,14 44,24 20,24 32,14" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="32" cy="14" r="3" fill="#ffffff" />
        <path d="M28 24 L42 12 L48 18" stroke="#eab308" strokeWidth="3.5" />
        <polygon points="14,46 50,46 42,32 22,32" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="32" cy="39" r="5" fill="#ca8a04" />
      </svg>
    );
  }
  if (v === 'E3') { // Omega Protocol X
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M20 22 C20 10, 44 10, 44 22 H38 C38 14, 26 14, 26 22 Z" fill="#eab308" stroke="#78350f" strokeWidth="2" />
        <rect x="18" y="20" width="8" height="4" fill="#eab308" />
        <rect x="38" y="20" width="8" height="4" fill="#eab308" />
        <path d="M28 22 L44 10 M36 22 L48 14 M40 22 L52 18" stroke="#eab308" strokeWidth="2.5" />
        <rect x="14" y="44" width="36" height="12" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,44 38,50 32,56 26,50" fill="#38bdf8" />
      </svg>
    );
  }
  if (v === 'E4') { // Cyber Kraken Arbitrage
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="14" r="10" fill="#ca8a04" stroke="#eab308" strokeWidth="2" />
        <circle cx="28" cy="12" r="2" fill="#ffffff" />
        <circle cx="36" cy="12" r="2" fill="#ffffff" />
        <path d="M18 20 Q 22 28, 26 22 T 34 22 T 42 22 T 48 20" stroke="#eab308" strokeWidth="3" fill="none" />
        <polygon points="14,46 50,46 42,34 22,34" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
      </svg>
    );
  }
  if (v === 'E5') { // Astral Beacon Whale Tracker
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M16 18 C16 10, 48 10, 48 18 C48 24, 32 26, 16 18 Z" fill="#0284c7" stroke="#eab308" strokeWidth="2" />
        <path d="M48 18 L56 12 L54 22 Z" fill="#0284c7" />
        <circle cx="26" cy="16" r="2" fill="#ffffff" />
        <path d="M28 22 L44 10" stroke="#eab308" strokeWidth="3.5" />
        <ellipse cx="32" cy="46" rx="18" ry="6" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="32" cy="46" r="4" fill="#0284c7" />
      </svg>
    );
  }
  if (v === 'E6') { // Omni Mind AI Overlord
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <path d="M18 20 C18 10, 46 10, 46 20 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="26" cy="15" r="2.5" fill="#38bdf8" />
        <circle cx="38" cy="15" r="2.5" fill="#38bdf8" />
        <circle cx="32" cy="10" r="2.5" fill="#10b981" />
        <line x1="26" y1="15" x2="38" y2="15" stroke="#ca8a04" strokeWidth="1.5" />
        <line x1="26" y1="15" x2="32" y2="10" stroke="#ca8a04" strokeWidth="1.5" />
        <line x1="38" y1="15" x2="32" y2="10" stroke="#ca8a04" strokeWidth="1.5" />
        <path d="M28 22 L44 10 L48 16" stroke="#eab308" strokeWidth="3.5" />
        <polygon points="14,46 50,46 42,32 22,32" fill="#eab308" stroke="#78350f" strokeWidth="2" />
        <polygon points="32,32 38,39 32,46 26,39" fill="#ffffff" />
      </svg>
    );
  }
  if (v === 'E1' || v === 'E' || v === 'IMPERIAL') { // Golden Sovereign Monarch
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        <polygon points="16,8 20,2 26,8 32,1 38,8 44,2 48,8" fill="#eab308" stroke="#78350f" strokeWidth="1" />
        <rect x="18" y="8" width="28" height="14" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <path d="M28 22 L44 10" stroke="#eab308" strokeWidth="4.5" />
        <polygon points="14,46 50,46 42,32 22,32" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,32 39,39 32,46 25,39" fill="#38bdf8" />
      </svg>
    );
  }

  // Fallback A1
  return (
    <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
      <rect x="6" y="8" width="18" height="15" rx="3" fill="#ffe600" stroke={strokeColor} strokeWidth="2" />
      <rect x="10" y="13" width="10" height="4" fill="#000000" />
      <circle cx="15" cy="15" r="1.5" fill="#00f0ff" />
      <path d="M15 23 V30 M15 30 L26 24" stroke={strokeColor} strokeWidth="4" />
      <path d="M26 24 L38 14" stroke={strokeColor} strokeWidth="4.5" />
      <rect x="34" y="6" width="18" height="12" rx="2" fill="#ffe600" stroke={strokeColor} strokeWidth="2" transform="rotate(-30 43 12)" />
      <path d="M10 46 H54 L48 34 H58 V30 H20 L10 34 Z" fill="#ffffff" stroke={strokeColor} strokeWidth="2" />
      <rect x="16" y="56" width="32" height="4" rx="1.5" fill="#ffe600" stroke={strokeColor} strokeWidth="1.5" />
    </svg>
  );
}
