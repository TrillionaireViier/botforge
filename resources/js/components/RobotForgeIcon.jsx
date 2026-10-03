export default function RobotForgeIcon({ 
  className = "w-8 h-8", 
  isDark = false, 
  animated = true,
  variant = "A1"
}) {
  const strokeColor = isDark ? "#ffffff" : "#000000";
  const v = variant.toUpperCase();

  // Helper for Robot Face Glow
  const eyeGlow = animated ? "animate-pulse" : "";

  // --- CATEGORY A: TITANS (A1 - A6) --- Full Mech Body, Torso, Arms & Head
  if (v === 'A1' || v === 'A' || v === 'TITAN') { // CyberForge Titan 3000
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Antennas */}
        <line x1="26" y1="4" x2="26" y2="10" stroke={strokeColor} strokeWidth="2" />
        <circle cx="26" cy="3" r="2" fill="#ffe600" />
        <line x1="38" y1="4" x2="38" y2="10" stroke={strokeColor} strokeWidth="2" />
        <circle cx="38" cy="3" r="2" fill="#ffe600" />
        {/* Robot Head */}
        <rect x="20" y="10" width="24" height="16" rx="4" fill="#ffe600" stroke={strokeColor} strokeWidth="2" />
        <rect x="24" y="14" width="16" height="5" fill="#000000" />
        <circle cx="28" cy="16.5" r="2" fill="#00f0ff" className={eyeGlow} />
        <circle cx="36" cy="16.5" r="2" fill="#00f0ff" className={eyeGlow} />
        <line x1="28" y1="22" x2="36" y2="22" stroke={strokeColor} strokeWidth="1.5" />
        {/* Torso & Core */}
        <rect x="18" y="28" width="28" height="20" rx="3" fill="#1e293b" stroke={strokeColor} strokeWidth="2" />
        <circle cx="32" cy="38" r="5" fill="#00f0ff" stroke={strokeColor} strokeWidth="1.5" className={eyeGlow} />
        {/* Arms */}
        <rect x="10" y="28" width="6" height="16" rx="2" fill="#ffe600" stroke={strokeColor} strokeWidth="1.5" />
        <rect x="48" y="28" width="6" height="16" rx="2" fill="#ffe600" stroke={strokeColor} strokeWidth="1.5" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" rx="1.5" fill="#334155" stroke={strokeColor} strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" rx="1.5" fill="#334155" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'A2') { // Titanium Dreadnought - Dual Horns & Heavy Shoulder Armor
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Horns */}
        <polygon points="16,2 22,10 14,10" fill="#94a3b8" stroke={strokeColor} strokeWidth="1.5" />
        <polygon points="48,2 42,10 50,10" fill="#94a3b8" stroke={strokeColor} strokeWidth="1.5" />
        {/* Head */}
        <rect x="20" y="8" width="24" height="16" rx="3" fill="#334155" stroke={strokeColor} strokeWidth="2" />
        <rect x="24" y="13" width="16" height="5" fill="#00f0ff" />
        {/* Massive Shoulders */}
        <path d="M10 26 L22 26 L18 38 L8 38 Z" fill="#94a3b8" stroke={strokeColor} strokeWidth="1.5" />
        <path d="M54 26 L42 26 L46 38 L56 38 Z" fill="#94a3b8" stroke={strokeColor} strokeWidth="1.5" />
        {/* Heavy Torso */}
        <rect x="20" y="26" width="24" height="22" rx="2" fill="#1e293b" stroke={strokeColor} strokeWidth="2" />
        <rect x="26" y="32" width="12" height="10" fill="#475569" stroke="#00f0ff" strokeWidth="1" />
        {/* Legs */}
        <rect x="22" y="50" width="8" height="12" fill="#0f172a" stroke={strokeColor} strokeWidth="1.5" />
        <rect x="34" y="50" width="8" height="12" fill="#0f172a" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'A3') { // Centurion 100-Grid - Roman Helmet Crest & Grid Armor
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Gladiator Crest */}
        <path d="M18 2 C26 -1, 38 -1, 46 2 L42 8 H22 Z" fill="#ef4444" stroke={strokeColor} strokeWidth="1.5" />
        {/* Centurion Helmet */}
        <rect x="20" y="8" width="24" height="16" rx="3" fill="#d97706" stroke={strokeColor} strokeWidth="2" />
        <line x1="32" y1="12" x2="32" y2="20" stroke="#ffffff" strokeWidth="2" />
        <line x1="25" y1="16" x2="39" y2="16" stroke="#ffffff" strokeWidth="2" />
        {/* Grid Chestplate */}
        <rect x="18" y="26" width="28" height="22" fill="#b45309" stroke={strokeColor} strokeWidth="2" />
        <line x1="18" y1="33" x2="46" y2="33" stroke="#fef08a" strokeWidth="1" />
        <line x1="18" y1="40" x2="46" y2="40" stroke="#fef08a" strokeWidth="1" />
        <line x1="27" y1="26" x2="27" y2="48" stroke="#fef08a" strokeWidth="1" />
        <line x1="37" y1="26" x2="37" y2="48" stroke="#fef08a" strokeWidth="1" />
        {/* Legs */}
        <rect x="21" y="50" width="8" height="12" fill="#78350f" stroke={strokeColor} strokeWidth="1.5" />
        <rect x="35" y="50" width="8" height="12" fill="#78350f" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'A4') { // Valkyrie Shield Guard - Winged Helmet & V-Chest Shield
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Wings */}
        <path d="M10 6 L20 14 L12 18 Z M54 6 L44 14 L52 18 Z" fill="#60a5fa" stroke={strokeColor} strokeWidth="1.5" />
        {/* Valkyrie Head */}
        <rect x="20" y="10" width="24" height="14" rx="4" fill="#1e3a8a" stroke={strokeColor} strokeWidth="2" />
        <circle cx="27" cy="16" r="2.5" fill="#60a5fa" />
        <circle cx="37" cy="16" r="2.5" fill="#60a5fa" />
        {/* Shield Body */}
        <polygon points="18,26 46,26 39,48 25,48" fill="#1e40af" stroke={strokeColor} strokeWidth="2" />
        <path d="M32 26 V48 M22 34 L32 42 L42 34" stroke="#60a5fa" strokeWidth="1.5" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#1d4ed8" stroke={strokeColor} strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#1d4ed8" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'A5') { // Ironclad Bear Accumulator - Bear Ears & Heavy Claw Body
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Ears */}
        <circle cx="18" cy="8" r="5" fill="#b45309" stroke={strokeColor} strokeWidth="1.5" />
        <circle cx="46" cy="8" r="5" fill="#b45309" stroke={strokeColor} strokeWidth="1.5" />
        {/* Bear Head */}
        <rect x="18" y="10" width="28" height="16" rx="5" fill="#78350f" stroke={strokeColor} strokeWidth="2" />
        <circle cx="26" cy="17" r="3" fill="#fde047" />
        <circle cx="38" cy="17" r="3" fill="#fde047" />
        {/* Heavy Torso */}
        <rect x="16" y="28" width="32" height="20" rx="4" fill="#451a03" stroke={strokeColor} strokeWidth="2" />
        <circle cx="32" cy="38" r="6" fill="#fde047" stroke={strokeColor} strokeWidth="1.5" />
        {/* Paws */}
        <rect x="8" y="30" width="6" height="14" rx="2" fill="#78350f" stroke={strokeColor} strokeWidth="1.5" />
        <rect x="50" y="30" width="6" height="14" rx="2" fill="#78350f" stroke={strokeColor} strokeWidth="1.5" />
        {/* Legs */}
        <rect x="20" y="50" width="9" height="12" fill="#78350f" stroke={strokeColor} strokeWidth="1.5" />
        <rect x="35" y="50" width="9" height="12" fill="#78350f" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'A6') { // Obsidian Heavy Crusher - Spike Shoulders & Jagged Torso
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Spike Horns */}
        <polygon points="14,2 22,12 12,14" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
        <polygon points="50,2 42,12 52,14" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
        {/* Head */}
        <polygon points="20,10 44,10 38,22 26,22" fill="#020617" stroke="#f43f5e" strokeWidth="2" />
        <line x1="25" y1="16" x2="39" y2="16" stroke="#f43f5e" strokeWidth="3" />
        {/* Jagged Body */}
        <polygon points="16,26 48,26 42,48 22,48" fill="#0f172a" stroke="#f43f5e" strokeWidth="2" />
        <polyline points="22,32 32,40 42,32" stroke="#f43f5e" strokeWidth="2" fill="none" />
        {/* Legs */}
        <rect x="22" y="50" width="8" height="12" fill="#020617" stroke="#f43f5e" strokeWidth="1.5" />
        <rect x="34" y="50" width="8" height="12" fill="#020617" stroke="#f43f5e" strokeWidth="1.5" />
      </svg>
    );
  }

  // --- CATEGORY B: QUANTUMS (B1 - B6) --- Plasma Orbs & Floating Androids
  if (v === 'B1' || v === 'B' || v === 'QUANTUM') { // Quantum Plasma Scalper
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Floating Halo */}
        <ellipse cx="32" cy="6" rx="14" ry="4" stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 2" />
        {/* Sphere Head */}
        <circle cx="32" cy="18" r="10" fill="#090d16" stroke="#a855f7" strokeWidth="2" />
        <circle cx="32" cy="18" r="4" fill="#00f0ff" className={eyeGlow} />
        {/* Plasma Core Body */}
        <rect x="22" y="30" width="20" height="18" rx="5" fill="#090d16" stroke="#00f0ff" strokeWidth="2" />
        <circle cx="32" cy="39" r="5" fill="#a855f7" />
        {/* Floating Hover Thrusters */}
        <polygon points="20,50 28,50 24,60" fill="#00f0ff" />
        <polygon points="36,50 44,50 40,60" fill="#00f0ff" />
      </svg>
    );
  }

  if (v === 'B2') { // Nebula Cosmic Voyager - Saturn Ring Robot
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Saturn Ring Head */}
        <circle cx="32" cy="16" r="9" fill="#030712" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="32" cy="16" rx="16" ry="4" stroke="#c084fc" strokeWidth="2" transform="rotate(-15 32 16)" />
        <circle cx="32" cy="16" r="3" fill="#38bdf8" />
        {/* Cosmic Core Body */}
        <path d="M20 28 H44 L38 48 H26 Z" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="32" cy="38" rx="6" ry="3" fill="#c084fc" />
        {/* Hover Jet */}
        <polygon points="26,50 38,50 32,62" fill="#38bdf8" />
      </svg>
    );
  }

  if (v === 'B3') { // Aether Flux Oscillator - Frequency Wave Bot
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Wave Antennas */}
        <path d="M16 8 Q 24 2, 32 8 T 48 8" stroke="#2dd4bf" strokeWidth="2" fill="none" />
        {/* Head */}
        <rect x="22" y="10" width="20" height="14" rx="4" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
        <circle cx="32" cy="17" r="3" fill="#ccfbf1" />
        {/* Oscillator Chest */}
        <rect x="18" y="26" width="28" height="20" rx="3" fill="#134e4a" stroke="#2dd4bf" strokeWidth="2" />
        <path d="M22 36 Q 27 30, 32 36 T 42 36" stroke="#ccfbf1" strokeWidth="2" fill="none" />
        {/* Legs */}
        <rect x="22" y="48" width="7" height="13" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="35" y="48" width="7" height="13" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'B4') { // Glitch Overlord AI - 8-Bit Pixel Robot
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Pixel Head */}
        <rect x="18" y="8" width="28" height="16" fill="#3b0764" stroke="#a855f7" strokeWidth="2" />
        <rect x="22" y="12" width="6" height="6" fill="#f43f5e" />
        <rect x="36" y="12" width="6" height="6" fill="#00f0ff" />
        {/* Pixel Body */}
        <rect x="16" y="26" width="32" height="20" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
        <rect x="22" y="32" width="6" height="6" fill="#f43f5e" />
        <rect x="36" y="32" width="6" height="6" fill="#00f0ff" />
        {/* Pixel Arms */}
        <rect x="8" y="28" width="6" height="14" fill="#a855f7" />
        <rect x="50" y="28" width="6" height="14" fill="#a855f7" />
        {/* Pixel Legs */}
        <rect x="22" y="48" width="8" height="12" fill="#3b0764" />
        <rect x="34" y="48" width="8" height="12" fill="#3b0764" />
      </svg>
    );
  }

  if (v === 'B5') { // Spectre Zero-Slippage HFT - Ghost Android
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Ghost Hood Head */}
        <path d="M18 20 C18 6, 46 6, 46 20 C46 26, 18 26, 18 20 Z" fill="#0284c7" opacity="0.9" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="27" cy="17" r="2.5" fill="#ffffff" />
        <circle cx="37" cy="17" r="2.5" fill="#ffffff" />
        {/* Tapered Floating Body */}
        <path d="M20 28 H44 L36 54 L32 48 L28 54 Z" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="32" cy="36" r="4" fill="#7dd3fc" />
      </svg>
    );
  }

  if (v === 'B6') { // Eclipse Dark Matter - Black Hole Android
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Eclipse Head */}
        <circle cx="32" cy="16" r="10" fill="#000000" stroke="#6366f1" strokeWidth="3" />
        <circle cx="32" cy="16" r="4" fill="#818cf8" />
        {/* Dark Matter Torso */}
        <rect x="20" y="28" width="24" height="20" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
        <circle cx="32" cy="38" r="6" fill="#000000" stroke="#6366f1" strokeWidth="2" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
      </svg>
    );
  }

  // --- CATEGORY C: INFERNOS (C1 - C6) --- Flame & Dragon Mechs
  if (v === 'C1' || v === 'C' || v === 'INFERNO') { // Inferno Magma Dragon Mech
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Dragon Horns */}
        <polygon points="14,2 22,12 10,10" fill="#dc2626" />
        <polygon points="50,2 42,12 54,10" fill="#dc2626" />
        {/* Head */}
        <rect x="18" y="10" width="28" height="16" rx="4" fill="#7f1d1d" stroke="#f97316" strokeWidth="2" />
        <circle cx="26" cy="17" r="3" fill="#facc15" />
        <circle cx="38" cy="17" r="3" fill="#facc15" />
        {/* Magma Torso */}
        <path d="M18 28 H46 L40 48 H24 Z" fill="#991b1b" stroke="#f97316" strokeWidth="2" />
        <polygon points="32,30 38,42 26,42" fill="#facc15" />
        {/* Wings */}
        <path d="M18 30 L6 20 L14 40 Z" fill="#dc2626" />
        <path d="M46 30 L58 20 L50 40 Z" fill="#dc2626" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#450a0a" stroke="#f97316" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#450a0a" stroke="#f97316" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'C2') { // Solar Flare Sun-Grid Mech
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Sun Crown */}
        <circle cx="32" cy="16" r="9" fill="#f97316" stroke="#facc15" strokeWidth="2" />
        <path d="M32 2 V6 M32 26 V30 M18 16 H14 M50 16 H46" stroke="#facc15" strokeWidth="2" />
        {/* Torso */}
        <rect x="20" y="28" width="24" height="20" rx="3" fill="#c2410c" stroke="#facc15" strokeWidth="2" />
        <circle cx="32" cy="38" r="5" fill="#facc15" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#78350f" stroke="#facc15" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#78350f" stroke="#facc15" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'C3') { // Supernova Spark Tracker
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Star Head */}
        <polygon points="32,2 36,10 46,10 38,16 42,26 32,20 22,26 26,16 18,10 28,10" fill="#ef4444" stroke="#facc15" strokeWidth="1.5" />
        <circle cx="32" cy="14" r="3" fill="#ffffff" />
        {/* Torso */}
        <polygon points="18,28 46,28 40,48 24,48" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'C4') { // Zeus Lightning Flash Buyer
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Lightning Crest */}
        <polygon points="30,2 38,2 32,10 40,10 24,24 28,14 20,14" fill="#facc15" stroke="#b45309" strokeWidth="1.5" />
        {/* Head */}
        <rect x="20" y="10" width="24" height="14" rx="3" fill="#78350f" stroke="#facc15" strokeWidth="2" />
        <circle cx="32" cy="17" r="2.5" fill="#ffffff" />
        {/* Lightning Torso */}
        <rect x="18" y="26" width="28" height="22" fill="#b45309" stroke="#facc15" strokeWidth="2" />
        <polyline points="22,30 34,38 28,42 42,46" stroke="#facc15" strokeWidth="2.5" fill="none" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#78350f" stroke="#facc15" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#78350f" stroke="#facc15" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'C5') { // Firestorm Martingale Grid
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Head */}
        <rect x="18" y="8" width="28" height="16" rx="4" fill="#991b1b" stroke="#f97316" strokeWidth="2" />
        <circle cx="24" cy="15" r="2.5" fill="#facc15" />
        <circle cx="32" cy="15" r="2.5" fill="#f97316" />
        <circle cx="40" cy="15" r="2.5" fill="#ef4444" />
        {/* Crucible Torso */}
        <polygon points="16,26 48,26 42,48 22,48" fill="#7f1d1d" stroke="#f97316" strokeWidth="2" />
        <rect x="24" y="32" width="16" height="10" fill="#450a0a" stroke="#facc15" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#450a0a" stroke="#f97316" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#450a0a" stroke="#f97316" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'C6') { // Volcano Core Eruptor
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Cone Head */}
        <polygon points="20,22 32,6 44,22" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
        <circle cx="32" cy="15" r="3" fill="#facc15" />
        {/* Volcanic Torso */}
        <polygon points="14,26 50,26 42,48 22,48" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
        <ellipse cx="32" cy="34" rx="10" ry="3.5" fill="#f97316" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
      </svg>
    );
  }

  // --- CATEGORY D: MATRIX (D1 - D6) --- Cyberpunk & Laser Androids
  if (v === 'D1' || v === 'D' || v === 'MATRIX') { // Matrix Cyber-Sentinel
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Hex Head */}
        <polygon points="20,6 32,2 44,6 44,18 32,22 20,18" fill="#052e16" stroke="#22c55e" strokeWidth="2" />
        <circle cx="26" cy="11" r="2" fill="#4ade80" />
        <circle cx="38" cy="11" r="2" fill="#4ade80" />
        {/* Matrix Chest */}
        <rect x="18" y="26" width="28" height="22" rx="3" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <line x1="18" y1="36" x2="46" y2="36" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#052e16" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#052e16" stroke="#22c55e" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'D2') { // Hyperion Laser Sniper
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Reticle Head */}
        <circle cx="32" cy="16" r="10" fill="#052e16" stroke="#22c55e" strokeWidth="2" />
        <circle cx="32" cy="16" r="5" stroke="#4ade80" strokeWidth="1.5" />
        <circle cx="32" cy="16" r="2" fill="#f43f5e" />
        {/* Sniper Body */}
        <rect x="20" y="28" width="24" height="20" rx="3" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <line x1="32" y1="28" x2="32" y2="48" stroke="#f43f5e" strokeWidth="2" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#052e16" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#052e16" stroke="#22c55e" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'D3') { // Cyberpunk Neon Samurai
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Kabuto Mask */}
        <path d="M16 10 L32 2 L48 10 L44 20 L20 20 Z" fill="#052e16" stroke="#4ade80" strokeWidth="2" />
        <rect x="22" y="13" width="20" height="4" fill="#22c55e" />
        {/* Samurai Armor */}
        <polygon points="18,26 46,26 40,48 24,48" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <line x1="20" y1="32" x2="44" y2="44" stroke="#4ade80" strokeWidth="2" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#052e16" stroke="#4ade80" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#052e16" stroke="#4ade80" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'D4') { // Phantom Shadow Stealth
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Stealth Hood */}
        <polygon points="32,4 18,14 22,24 42,24 46,14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <rect x="24" y="14" width="16" height="3" fill="#38bdf8" />
        {/* Stealth Body */}
        <rect x="20" y="26" width="24" height="22" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <line x1="20" y1="37" x2="44" y2="37" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'D5') { // Apex Orderbook Sweeper
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Scanner Head */}
        <rect x="18" y="8" width="28" height="14" rx="3" fill="#042f2e" stroke="#14b8a6" strokeWidth="2" />
        <rect x="22" y="12" width="6" height="6" fill="#14b8a6" />
        <rect x="29" y="12" width="6" height="6" fill="#14b8a6" />
        <rect x="36" y="12" width="6" height="6" fill="#14b8a6" />
        {/* Orderbook Body */}
        <rect x="18" y="26" width="28" height="22" rx="2" fill="#134e4a" stroke="#14b8a6" strokeWidth="2" />
        <rect x="22" y="30" width="6" height="14" fill="#14b8a6" />
        <rect x="30" y="30" width="6" height="14" fill="#2dd4bf" />
        <rect x="38" y="30" width="6" height="14" fill="#5eead4" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#042f2e" stroke="#14b8a6" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#042f2e" stroke="#14b8a6" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'D6') { // Pulse Engine MACD 9000
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Head */}
        <rect x="18" y="6" width="28" height="18" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
        <path d="M22 15 Q 27 8, 32 15 T 42 15" stroke="#34d399" strokeWidth="2" fill="none" />
        {/* MACD Histogram Body */}
        <rect x="18" y="26" width="28" height="22" rx="2" fill="#022c22" stroke="#34d399" strokeWidth="2" />
        <rect x="22" y="36" width="4" height="6" fill="#34d399" />
        <rect x="28" y="33" width="4" height="9" fill="#34d399" />
        <rect x="34" y="30" width="4" height="12" fill="#10b981" />
        <rect x="40" y="38" width="4" height="4" fill="#047857" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
      </svg>
    );
  }

  // --- CATEGORY E: IMPERIALS (E1 - E6) --- Imperial Sovereign Monarchs
  if (v === 'E1' || v === 'E' || v === 'IMPERIAL') { // Golden Sovereign Monarch
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Crown */}
        <polygon points="18,8 22,2 27,8 32,1 37,8 42,2 46,8" fill="#eab308" stroke="#78350f" strokeWidth="1" />
        <rect x="20" y="8" width="24" height="14" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="27" cy="15" r="2.5" fill="#38bdf8" />
        <circle cx="37" cy="15" r="2.5" fill="#38bdf8" />
        {/* Imperial Body */}
        <polygon points="18,26 46,26 40,48 24,48" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,32 38,39 32,46 26,39" fill="#38bdf8" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'E2') { // Chronos Time Weaver
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Hourglass Head */}
        <polygon points="20,4 44,4 32,14 44,24 20,24 32,14" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="32" cy="14" r="3" fill="#ffffff" />
        {/* Chronos Body */}
        <rect x="20" y="28" width="24" height="20" rx="3" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="32" cy="38" r="5" fill="#ca8a04" />
        <line x1="32" y1="38" x2="32" y2="35" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="32" y1="38" x2="35" y2="38" stroke="#ffffff" strokeWidth="1.5" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'E3') { // Omega Protocol X
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Omega Head */}
        <path d="M20 22 C20 10, 44 10, 44 22 H38 C38 14, 26 14, 26 22 Z" fill="#eab308" stroke="#78350f" strokeWidth="2" />
        {/* Body */}
        <rect x="18" y="26" width="28" height="22" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,30 38,38 32,44 26,38" fill="#38bdf8" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'E4') { // Cyber Kraken Arbitrage
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Kraken Head */}
        <circle cx="32" cy="14" r="9" fill="#ca8a04" stroke="#eab308" strokeWidth="2" />
        <circle cx="28" cy="12" r="2" fill="#ffffff" />
        <circle cx="36" cy="12" r="2" fill="#ffffff" />
        {/* Tentacle Body */}
        <polygon points="18,26 46,26 40,48 24,48" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,30 24,40 40,40" fill="#0284c7" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'E5') { // Astral Beacon Whale Tracker
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Whale Head */}
        <path d="M16 18 C16 10, 48 10, 48 18 C48 24, 32 26, 16 18 Z" fill="#0284c7" stroke="#eab308" strokeWidth="2" />
        <circle cx="26" cy="16" r="2" fill="#ffffff" />
        {/* Beacon Body */}
        <rect x="20" y="28" width="24" height="20" rx="3" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="32" cy="38" r="4.5" fill="#0284c7" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#0284c7" stroke="#eab308" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#0284c7" stroke="#eab308" strokeWidth="1.5" />
      </svg>
    );
  }

  if (v === 'E6') { // Omni Mind AI Overlord
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Brain Head */}
        <path d="M18 20 C18 10, 46 10, 46 20 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="26" cy="15" r="2.5" fill="#38bdf8" />
        <circle cx="38" cy="15" r="2.5" fill="#38bdf8" />
        <circle cx="32" cy="10" r="2.5" fill="#10b981" />
        {/* Overlord Body */}
        <polygon points="18,26 46,26 40,48 24,48" fill="#eab308" stroke="#78350f" strokeWidth="2" />
        <polygon points="32,30 38,38 32,44 26,38" fill="#ffffff" />
        {/* Legs */}
        <rect x="22" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <rect x="35" y="50" width="7" height="12" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
      </svg>
    );
  }

  // Default Fallback A1 Full Robot
  return (
    <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
      <rect x="20" y="10" width="24" height="16" rx="4" fill="#ffe600" stroke={strokeColor} strokeWidth="2" />
      <rect x="24" y="14" width="16" height="5" fill="#000000" />
      <circle cx="28" cy="16.5" r="2" fill="#00f0ff" className={eyeGlow} />
      <circle cx="36" cy="16.5" r="2" fill="#00f0ff" className={eyeGlow} />
      <rect x="18" y="28" width="28" height="20" rx="3" fill="#1e293b" stroke={strokeColor} strokeWidth="2" />
      <circle cx="32" cy="38" r="5" fill="#00f0ff" stroke={strokeColor} strokeWidth="1.5" className={eyeGlow} />
      <rect x="22" y="50" width="7" height="12" rx="1.5" fill="#334155" stroke={strokeColor} strokeWidth="1.5" />
      <rect x="35" y="50" width="7" height="12" rx="1.5" fill="#334155" stroke={strokeColor} strokeWidth="1.5" />
    </svg>
  );
}
