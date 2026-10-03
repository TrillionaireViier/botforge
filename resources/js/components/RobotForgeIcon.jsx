export default function RobotForgeIcon({ 
  className = "w-8 h-8", 
  isDark = false, 
  animated = true,
  variant = "A1"
}) {
  const strokeColor = isDark ? "#ffffff" : "#000000";
  const v = variant.toUpperCase();

  // --- CATEGORY A: TITANS (A1 - A6) ---
  if (v === 'A1' || v === 'A' || v === 'TITAN') { // CyberForge Titan 3000 - Heavy Mech Helmet & Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Robot Head */}
        <rect x="8" y="6" width="18" height="15" rx="3" fill="#ffe600" stroke={strokeColor} strokeWidth="2" />
        <rect x="12" y="11" width="10" height="4" fill="#000000" />
        <circle cx="17" cy="13" r="1.5" fill="#00f0ff" />
        {/* Robotic Arm & Hammer */}
        <path d="M17 21 V28 M17 28 L28 22" stroke={strokeColor} strokeWidth="3.5" />
        <path d="M28 22 L38 12" stroke={strokeColor} strokeWidth="4" />
        <rect x="34" y="5" width="18" height="12" rx="2" fill="#ffe600" stroke={strokeColor} strokeWidth="2" transform="rotate(-30 43 11)" />
        {/* Massive Steel Anvil */}
        <path d="M10 46 H54 L48 34 H58 V30 H20 L10 34 Z" fill="#ffffff" stroke={strokeColor} strokeWidth="2" />
        <rect x="16" y="56" width="32" height="4" rx="1.5" fill="#ffe600" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }
  if (v === 'A2') { // Titanium Dreadnought - Dual-Horn Heavy Armor & Reinforced Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Dual Armor Horns */}
        <path d="M6 4 L12 12 H6 Z M30 4 L24 12 H30 Z" fill="#94a3b8" stroke={strokeColor} strokeWidth="1.5" />
        {/* Head */}
        <rect x="8" y="10" width="20" height="14" rx="3" fill="#334155" stroke={strokeColor} strokeWidth="2" />
        <rect x="12" y="15" width="12" height="4" fill="#00f0ff" />
        {/* Hydraulic Hammer */}
        <path d="M26 22 L40 10 L44 14" stroke="#facc15" strokeWidth="3.5" />
        <rect x="38" y="4" width="16" height="12" rx="2" fill="#475569" stroke={strokeColor} strokeWidth="2" />
        {/* Dreadnought Anvil with Side Spikes */}
        <path d="M8 44 H56 L48 32 H16 Z" fill="#1e293b" stroke={strokeColor} strokeWidth="2" />
        <path d="M8 44 L2 40 L6 50 Z M56 44 L62 40 L58 50 Z" fill="#94a3b8" />
        <rect x="14" y="56" width="36" height="4" fill="#facc15" stroke={strokeColor} strokeWidth="1.5" />
      </svg>
    );
  }
  if (v === 'A3') { // Centurion 100-Grid - Crested Roman Gladiator Helmet & Multi-Tier Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Roman Red Crest */}
        <path d="M12 4 C18 1, 26 1, 32 4 L28 10 H16 Z" fill="#ef4444" stroke={strokeColor} strokeWidth="1.5" />
        {/* Centurion Faceplate */}
        <rect x="14" y="10" width="16" height="14" rx="2" fill="#d97706" stroke={strokeColor} strokeWidth="2" />
        <line x1="22" y1="13" x2="22" y2="21" stroke="#ffffff" strokeWidth="2" />
        <line x1="17" y1="17" x2="27" y2="17" stroke="#ffffff" strokeWidth="2" />
        {/* Gladius Hammer */}
        <path d="M24 22 L42 10 L46 14" stroke="#d97706" strokeWidth="3.5" />
        <polygon points="40,4 52,10 44,20 32,14" fill="#ef4444" stroke={strokeColor} strokeWidth="1.5" />
        {/* 100-Grid Layered Anvil */}
        <rect x="12" y="42" width="40" height="14" fill="#b45309" stroke={strokeColor} strokeWidth="2" />
        <path d="M12 46 H52 M12 50 H52 M22 42 V56 M32 42 V56 M42 42 V56" stroke="#fef08a" strokeWidth="1" />
      </svg>
    );
  }
  if (v === 'A4') { // Valkyrie Shield Guard - Winged Valkyrie Head & Crested Shield Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Winged Side Helmet */}
        <path d="M4 6 L12 14 L4 18 Z M32 6 L24 14 L32 18 Z" fill="#60a5fa" stroke={strokeColor} strokeWidth="1.5" />
        {/* Valkyrie Visor */}
        <rect x="10" y="12" width="16" height="12" rx="3" fill="#1e3a8a" stroke={strokeColor} strokeWidth="2" />
        <circle cx="18" cy="18" r="2.5" fill="#60a5fa" />
        {/* Spear Hammer */}
        <path d="M24 22 L44 8" stroke="#60a5fa" strokeWidth="3" />
        <polygon points="42,2 54,8 46,18" fill="#93c5fd" stroke={strokeColor} strokeWidth="1.5" />
        {/* Crested V-Shield Anvil */}
        <polygon points="10,42 54,42 44,58 20,58" fill="#1e40af" stroke={strokeColor} strokeWidth="2" />
        <path d="M32 42 V58 M20 46 L32 54 L44 46" stroke="#60a5fa" strokeWidth="1.5" />
      </svg>
    );
  }
  if (v === 'A5') { // Ironclad Bear Accumulator - Bear Ears & Heavy Claw Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Bear Ears */}
        <circle cx="8" cy="8" r="4.5" fill="#b45309" stroke={strokeColor} strokeWidth="1.5" />
        <circle cx="28" cy="8" r="4.5" fill="#b45309" stroke={strokeColor} strokeWidth="1.5" />
        {/* Bear Head */}
        <rect x="8" y="10" width="20" height="14" rx="4" fill="#78350f" stroke={strokeColor} strokeWidth="2" />
        <circle cx="18" cy="16" r="3" fill="#fde047" />
        {/* Bear Claw Hammer */}
        <path d="M22 22 L40 10" stroke="#fde047" strokeWidth="3.5" />
        <path d="M38 4 L48 2 M42 6 L52 6 M44 10 L54 12" stroke="#b45309" strokeWidth="2.5" />
        {/* Heavy Paw Anvil */}
        <rect x="10" y="44" width="44" height="14" rx="5" fill="#451a03" stroke={strokeColor} strokeWidth="2" />
        <circle cx="20" cy="51" r="3" fill="#fde047" />
        <circle cx="32" cy="51" r="3" fill="#fde047" />
        <circle cx="44" cy="51" r="3" fill="#fde047" />
      </svg>
    );
  }
  if (v === 'A6') { // Obsidian Heavy Crusher - Jagged Crystal Horns & Spike Crusher Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Jagged Obsidian Horns */}
        <polygon points="6,2 14,14 4,16" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
        <polygon points="30,2 22,14 32,16" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
        {/* Core Head */}
        <polygon points="10,12 26,12 22,22 14,22" fill="#020617" stroke={strokeColor} strokeWidth="2" />
        <line x1="13" y1="17" x2="23" y2="17" stroke="#f43f5e" strokeWidth="3" />
        {/* Crusher Hammer */}
        <path d="M22 22 L42 8" stroke="#f43f5e" strokeWidth="4" />
        <polygon points="38,2 54,8 46,20 30,14" fill="#0f172a" stroke="#f43f5e" strokeWidth="2" />
        {/* Jagged Anvil */}
        <polygon points="8,46 56,46 48,34 16,34" fill="#020617" stroke="#f43f5e" strokeWidth="2" />
        <path d="M16 34 L24 46 L32 34 L40 46 L48 34" stroke="#f43f5e" strokeWidth="1.5" />
      </svg>
    );
  }

  // --- CATEGORY B: QUANTUMS (B1 - B6) ---
  if (v === 'B1' || v === 'B' || v === 'QUANTUM') { // Quantum Plasma Scalper - Concentric Plasma Orb & Energy Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Outer Plasma Ring */}
        <circle cx="20" cy="18" r="14" stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="20" cy="18" r="9" fill="#090d16" stroke="#a855f7" strokeWidth="2" />
        <circle cx="20" cy="18" r="4" fill="#00f0ff" />
        {/* Plasma Beam */}
        <path d="M20 30 L32 42" stroke="#00f0ff" strokeWidth="3" />
        <path d="M28 20 L44 8" stroke="#a855f7" strokeWidth="3" />
        {/* Levitating Curved Anvil */}
        <polygon points="12,44 52,44 44,56 20,56" fill="#090d16" stroke="#00f0ff" strokeWidth="2" />
        <ellipse cx="32" cy="44" rx="18" ry="5" fill="#00f0ff" />
      </svg>
    );
  }
  if (v === 'B2') { // Nebula Cosmic Voyager - Saturn Ring Sphere & Cosmic Vortex Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Cosmic Sphere */}
        <circle cx="20" cy="16" r="10" fill="#030712" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="20" cy="16" rx="16" ry="4" stroke="#c084fc" strokeWidth="2" transform="rotate(-20 20 16)" />
        <circle cx="20" cy="16" r="3.5" fill="#38bdf8" />
        {/* Energy Rod */}
        <path d="M20 26 L34 42" stroke="#c084fc" strokeWidth="3" />
        {/* Vortex Anvil */}
        <polygon points="14,44 50,44 40,58 24,58" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="32" cy="44" rx="16" ry="5" fill="#38bdf8" />
        <ellipse cx="32" cy="44" rx="8" ry="2.5" fill="#c084fc" />
      </svg>
    );
  }
  if (v === 'B3') { // Aether Flux Oscillator - Wave Generator & Frequency Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Sine Wave Header */}
        <path d="M6 14 Q 14 6, 22 14 T 38 14" stroke="#2dd4bf" strokeWidth="2.5" fill="none" />
        <rect x="12" y="10" width="20" height="12" rx="3" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
        <circle cx="22" cy="16" r="3" fill="#ccfbf1" />
        {/* Wave Beam */}
        <path d="M22 22 L36 42" stroke="#2dd4bf" strokeWidth="3" />
        {/* Frequency Meter Anvil */}
        <rect x="10" y="44" width="44" height="14" rx="3" fill="#134e4a" stroke="#2dd4bf" strokeWidth="2" />
        <path d="M14 51 Q 23 44, 32 51 T 50 51" stroke="#ccfbf1" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  if (v === 'B4') { // Glitch Overlord AI - Cyber 8-Bit Pixel Head & Glitch Grid Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Glitch Pixel Head */}
        <rect x="8" y="6" width="24" height="16" rx="2" fill="#3b0764" stroke="#a855f7" strokeWidth="2" />
        <rect x="12" y="10" width="6" height="6" fill="#f43f5e" />
        <rect x="22" y="10" width="6" height="6" fill="#00f0ff" />
        {/* Pixel Hammer */}
        <path d="M24 22 L38 42" stroke="#a855f7" strokeWidth="3.5" />
        <rect x="34" y="6" width="16" height="12" fill="#f43f5e" stroke="#00f0ff" strokeWidth="2" />
        {/* Pixel Block Anvil */}
        <rect x="10" y="44" width="44" height="14" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
        <rect x="16" y="48" width="8" height="6" fill="#f43f5e" />
        <rect x="28" y="48" width="8" height="6" fill="#a855f7" />
        <rect x="40" y="48" width="8" height="6" fill="#00f0ff" />
      </svg>
    );
  }
  if (v === 'B5') { // Spectre Zero-Slippage HFT - Ghost Shield & Floating Oval Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Ghost Hood */}
        <path d="M8 20 C8 8, 32 8, 32 20 C32 28, 8 28, 8 20 Z" fill="#0284c7" opacity="0.9" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="16" cy="18" r="2.5" fill="#ffffff" />
        <circle cx="24" cy="18" r="2.5" fill="#ffffff" />
        {/* Beam */}
        <path d="M20 28 L36 42" stroke="#38bdf8" strokeWidth="3" />
        {/* Floating Ring Anvil */}
        <ellipse cx="32" cy="46" rx="20" ry="7" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="32" cy="46" rx="11" ry="3.5" fill="#7dd3fc" />
      </svg>
    );
  }
  if (v === 'B6') { // Eclipse Dark Matter - Black Hole Core & Dark Pulsar Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Black Hole Core */}
        <circle cx="20" cy="18" r="12" fill="#000000" stroke="#6366f1" strokeWidth="3" />
        <circle cx="20" cy="18" r="5" fill="#818cf8" />
        {/* Dark Ray */}
        <path d="M20 30 L34 44" stroke="#6366f1" strokeWidth="3.5" />
        {/* Dark Pulsar Base Anvil */}
        <ellipse cx="32" cy="46" rx="20" ry="7" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
        <circle cx="32" cy="46" r="5" fill="#6366f1" />
      </svg>
    );
  }

  // --- CATEGORY C: INFERNOS (C1 - C6) ---
  if (v === 'C1' || v === 'C' || v === 'INFERNO') { // Inferno Magma Dragon - Horned Dragon Head & Lava Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Dragon Horns */}
        <polygon points="6,4 12,14 2,12" fill="#dc2626" stroke={strokeColor} strokeWidth="1" />
        <polygon points="26,4 20,14 30,12" fill="#dc2626" stroke={strokeColor} strokeWidth="1" />
        {/* Dragon Snout */}
        <rect x="8" y="12" width="16" height="14" rx="4" fill="#7f1d1d" stroke="#f97316" strokeWidth="2" />
        <circle cx="14" cy="18" r="2.5" fill="#facc15" />
        {/* Flame Hammer */}
        <path d="M20 24 L38 42" stroke="#f97316" strokeWidth="3.5" />
        <polygon points="34,6 48,14 38,22" fill="#dc2626" stroke="#facc15" strokeWidth="1.5" />
        {/* Magma Anvil */}
        <polygon points="8,48 56,48 48,34 16,34" fill="#991b1b" stroke="#f97316" strokeWidth="2" />
        <path d="M16 34 Q 24 42, 32 34 T 48 34" fill="#facc15" />
      </svg>
    );
  }
  if (v === 'C2') { // Solar Flare Sun-Grid - Sunburst Crown & Solar Core Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Sunburst Head */}
        <circle cx="20" cy="18" r="9" fill="#f97316" stroke="#facc15" strokeWidth="2" />
        <path d="M20 4 V8 M20 28 V32 M6 18 H10 M34 18 H30 M10 8 L13 11 M30 8 L27 11" stroke="#facc15" strokeWidth="2" />
        {/* Flare Beam */}
        <path d="M20 27 L34 42" stroke="#f97316" strokeWidth="3.5" />
        {/* Sun Anvil */}
        <polygon points="10,46 54,46 46,34 18,34" fill="#c2410c" stroke="#facc15" strokeWidth="2" />
        <circle cx="32" cy="40" r="5" fill="#facc15" />
      </svg>
    );
  }
  if (v === 'C3') { // Supernova Spark Tracker - Exploding Star Head & Flame Tooth Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Exploding Star Head */}
        <polygon points="20,2 24,12 34,12 26,18 30,28 20,22 10,28 14,18 6,12 16,12" fill="#ef4444" stroke="#facc15" strokeWidth="1.5" />
        <circle cx="20" cy="15" r="3.5" fill="#ffffff" />
        {/* Spark Beam */}
        <path d="M20 25 L34 42" stroke="#facc15" strokeWidth="3" />
        {/* Flame Tooth Anvil */}
        <polygon points="12,46 52,46 44,34 20,34" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
        <polygon points="20,34 25,41 30,34 35,41 40,34 45,41" fill="#facc15" />
      </svg>
    );
  }
  if (v === 'C4') { // Zeus Lightning Flash Buyer - Lightning Bolt Head & Voltage Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Lightning Bolt Crest */}
        <polygon points="18,2 26,2 20,12 28,12 14,24 18,14 10,14" fill="#facc15" stroke="#b45309" strokeWidth="1.5" />
        <circle cx="18" cy="13" r="2.5" fill="#ffffff" />
        {/* Lightning Arm */}
        <path d="M20 22 L36 42" stroke="#facc15" strokeWidth="3.5" />
        {/* High Voltage Anvil */}
        <polygon points="8,48 56,48 46,36 18,36" fill="#78350f" stroke="#facc15" strokeWidth="2" />
        <polyline points="14,42 26,42 20,46 36,46 30,50 48,50" stroke="#facc15" strokeWidth="3" fill="none" />
      </svg>
    );
  }
  if (v === 'C5') { // Firestorm Martingale Grid - Multi-Chamber Fire Head & Crucible Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Fire Chambers */}
        <rect x="6" y="8" width="28" height="14" rx="4" fill="#991b1b" stroke="#f97316" strokeWidth="2" />
        <circle cx="12" cy="15" r="2.5" fill="#facc15" />
        <circle cx="20" cy="15" r="2.5" fill="#f97316" />
        <circle cx="28" cy="15" r="2.5" fill="#ef4444" />
        {/* Flame Arm */}
        <path d="M20 22 L36 42" stroke="#f97316" strokeWidth="4" />
        {/* Crucible Anvil */}
        <polygon points="8,48 56,48 48,36 16,36" fill="#7f1d1d" stroke="#f97316" strokeWidth="2" />
        <rect x="20" y="48" width="24" height="8" fill="#450a0a" stroke="#f97316" />
      </svg>
    );
  }
  if (v === 'C6') { // Volcano Core Eruptor - Volcanic Cone Head & Magma Pool Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Volcano Cone Head */}
        <polygon points="8,22 20,6 32,22" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
        <circle cx="20" cy="15" r="3.5" fill="#facc15" />
        {/* Eruption Beam */}
        <path d="M20 22 L36 42" stroke="#ef4444" strokeWidth="3.5" />
        {/* Erupting Anvil */}
        <polygon points="6,48 58,48 48,34 16,34" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
        <ellipse cx="32" cy="34" rx="16" ry="4.5" fill="#f97316" />
      </svg>
    );
  }

  // --- CATEGORY D: MATRIX (D1 - D6) ---
  if (v === 'D1' || v === 'D' || v === 'MATRIX') { // Matrix Cyber-Sentinel - Hex Shield Helmet & Cyber Grid Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Hex Helmet */}
        <polygon points="10,6 22,2 34,6 34,18 22,22 10,18" fill="#052e16" stroke="#22c55e" strokeWidth="2" />
        <circle cx="16" cy="11" r="2" fill="#4ade80" />
        <circle cx="28" cy="11" r="2" fill="#4ade80" />
        {/* Matrix Arm */}
        <path d="M22 22 L36 42" stroke="#22c55e" strokeWidth="3" />
        {/* Cyber Base Anvil */}
        <rect x="10" y="44" width="44" height="14" rx="2" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <line x1="10" y1="51" x2="54" y2="51" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    );
  }
  if (v === 'D2') { // Hyperion Laser Sniper - Crosshair Reticle Head & Laser Beam Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Crosshair Eye */}
        <circle cx="20" cy="16" r="11" fill="#052e16" stroke="#22c55e" strokeWidth="2" />
        <circle cx="20" cy="16" r="6" stroke="#4ade80" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="2.5" fill="#f43f5e" />
        {/* Laser Line */}
        <line x1="20" y1="27" x2="34" y2="44" stroke="#f43f5e" strokeWidth="3" strokeDasharray="4 2" />
        {/* Laser Target Anvil */}
        <rect x="10" y="44" width="44" height="12" rx="3" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <circle cx="32" cy="50" r="4" fill="#f43f5e" />
      </svg>
    );
  }
  if (v === 'D3') { // Cyberpunk Neon Samurai - Samurai Kabuto Mask & Katana Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Kabuto Mask */}
        <path d="M6 10 L22 2 L38 10 L34 20 L10 20 Z" fill="#052e16" stroke="#4ade80" strokeWidth="2" />
        <rect x="12" y="13" width="20" height="4" fill="#22c55e" />
        {/* Katana Arm */}
        <path d="M22 20 L38 42" stroke="#4ade80" strokeWidth="3" />
        {/* Katana Blade Anvil */}
        <polygon points="10,46 54,46 48,34 16,34" fill="#022c22" stroke="#22c55e" strokeWidth="2" />
        <line x1="16" y1="34" x2="48" y2="46" stroke="#4ade80" strokeWidth="2.5" />
      </svg>
    );
  }
  if (v === 'D4') { // Phantom Shadow Stealth - Stealth Hood & Darkpool Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Stealth Hood */}
        <polygon points="20,4 6,14 10,24 30,24 34,14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <rect x="12" y="14" width="16" height="3" fill="#38bdf8" />
        {/* Stealth Arm */}
        <path d="M20 24 L36 42" stroke="#38bdf8" strokeWidth="3" />
        {/* Stealth Anvil */}
        <rect x="12" y="44" width="40" height="12" rx="2" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <line x1="12" y1="50" x2="52" y2="50" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
      </svg>
    );
  }
  if (v === 'D5') { // Apex Orderbook Sweeper - Multi-Segment Scanner Head & Orderbook Bar Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Multi-Segment Scanner */}
        <rect x="6" y="8" width="28" height="14" rx="3" fill="#042f2e" stroke="#14b8a6" strokeWidth="2" />
        <rect x="10" y="12" width="6" height="6" fill="#14b8a6" />
        <rect x="17" y="12" width="6" height="6" fill="#14b8a6" />
        <rect x="24" y="12" width="6" height="6" fill="#14b8a6" />
        {/* Sweeper Arm */}
        <path d="M20 22 L36 42" stroke="#14b8a6" strokeWidth="3.5" />
        {/* Orderbook Bar Anvil */}
        <rect x="10" y="44" width="44" height="14" rx="2" fill="#134e4a" stroke="#14b8a6" strokeWidth="2" />
        <rect x="14" y="47" width="8" height="8" fill="#14b8a6" />
        <rect x="28" y="47" width="8" height="8" fill="#2dd4bf" />
        <rect x="42" y="47" width="8" height="8" fill="#5eead4" />
      </svg>
    );
  }
  if (v === 'D6') { // Pulse Engine MACD 9000 - Audio/Frequency Head & MACD Histogram Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Frequency Meter Head */}
        <rect x="6" y="6" width="28" height="18" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
        <path d="M10 15 Q 16 8, 20 15 T 30 15" stroke="#34d399" strokeWidth="2" fill="none" />
        {/* Pulse Arm */}
        <path d="M20 24 L36 42" stroke="#34d399" strokeWidth="3.5" />
        {/* Histogram Anvil */}
        <rect x="10" y="44" width="44" height="14" rx="2" fill="#022c22" stroke="#34d399" strokeWidth="2" />
        <rect x="14" y="49" width="6" height="5" fill="#34d399" />
        <rect x="23" y="47" width="6" height="7" fill="#34d399" />
        <rect x="32" y="46" width="6" height="8" fill="#10b981" />
        <rect x="41" y="50" width="6" height="4" fill="#047857" />
      </svg>
    );
  }

  // --- CATEGORY E: IMPERIALS (E1 - E6) ---
  if (v === 'E1' || v === 'E' || v === 'IMPERIAL') { // Golden Sovereign Monarch - Imperial Crown & Diamond Core Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Crown Spikes */}
        <polygon points="6,8 10,2 16,8 22,1 28,8 34,2 38,8" fill="#eab308" stroke="#78350f" strokeWidth="1" />
        {/* Sovereign Visor */}
        <rect x="8" y="8" width="30" height="14" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        {/* Gold Arm */}
        <path d="M23 22 L38 42" stroke="#eab308" strokeWidth="4" />
        {/* Diamond Core Anvil */}
        <polygon points="12,46 52,46 44,32 20,32" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,32 39,39 32,46 25,39" fill="#38bdf8" />
      </svg>
    );
  }
  if (v === 'E2') { // Chronos Time Weaver - Hourglass Head & Clockwork Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Hourglass Head */}
        <polygon points="10,4 34,4 22,14 34,24 10,24 22,14" fill="#eab308" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="22" cy="14" r="3" fill="#ffffff" />
        {/* Chronos Arm */}
        <path d="M22 24 L38 42" stroke="#eab308" strokeWidth="3.5" />
        {/* Clockwork Anvil */}
        <polygon points="12,46 52,46 44,32 20,32" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="32" cy="39" r="5" fill="#ca8a04" />
        <line x1="32" y1="39" x2="32" y2="36" stroke="#ffffff" strokeWidth="1.5" />
        <line x1="32" y1="39" x2="35" y2="39" stroke="#ffffff" strokeWidth="1.5" />
      </svg>
    );
  }
  if (v === 'E3') { // Omega Protocol X - Greek Omega Crest & Consensus Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Omega Crest */}
        <path d="M10 22 C10 10, 34 10, 34 22 H28 C28 14, 16 14, 16 22 Z" fill="#eab308" stroke="#78350f" strokeWidth="2" />
        <rect x="8" y="20" width="8" height="4" fill="#eab308" />
        <rect x="28" y="20" width="8" height="4" fill="#eab308" />
        {/* Protocol Arm */}
        <path d="M22 22 L38 42" stroke="#eab308" strokeWidth="3.5" />
        {/* Consensus Anvil */}
        <rect x="12" y="44" width="40" height="12" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,44 38,50 32,56 26,50" fill="#38bdf8" />
      </svg>
    );
  }
  if (v === 'E4') { // Cyber Kraken Arbitrage - Multi-Tentacle Crown & Triangular Arb Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Kraken Head */}
        <circle cx="20" cy="14" r="10" fill="#ca8a04" stroke="#eab308" strokeWidth="2" />
        <circle cx="16" cy="12" r="2" fill="#ffffff" />
        <circle cx="24" cy="12" r="2" fill="#ffffff" />
        {/* Tentacles */}
        <path d="M6 20 Q 10 28, 14 22 T 22 22 T 30 22 T 34 20" stroke="#eab308" strokeWidth="3" fill="none" />
        {/* Triangular Arb Anvil */}
        <polygon points="12,46 52,46 44,34 20,34" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <polygon points="32,36 24,44 40,44" fill="#0284c7" />
      </svg>
    );
  }
  if (v === 'E5') { // Astral Beacon Whale Tracker - Whale Tail Crest & Beacon Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Whale Body */}
        <path d="M6 18 C6 10, 38 10, 38 18 C38 24, 22 26, 6 18 Z" fill="#0284c7" stroke="#eab308" strokeWidth="2" />
        <path d="M38 18 L46 12 L44 22 Z" fill="#0284c7" />
        <circle cx="16" cy="16" r="2" fill="#ffffff" />
        {/* Beacon Arm */}
        <path d="M22 22 L38 42" stroke="#eab308" strokeWidth="3.5" />
        {/* Beacon Ring Anvil */}
        <ellipse cx="32" cy="46" rx="20" ry="7" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="32" cy="46" r="4.5" fill="#0284c7" />
      </svg>
    );
  }
  if (v === 'E6') { // Omni Mind AI Overlord - Neural Network Brain Head & Quantum Core Anvil
    return (
      <svg className={`${className} overflow-visible`} viewBox="0 0 64 64" fill="none">
        {/* Neural Brain Dome */}
        <path d="M8 20 C8 10, 36 10, 36 20 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="16" cy="15" r="2.5" fill="#38bdf8" />
        <circle cx="28" cy="15" r="2.5" fill="#38bdf8" />
        <circle cx="22" cy="10" r="2.5" fill="#10b981" />
        <line x1="16" y1="15" x2="28" y2="15" stroke="#ca8a04" strokeWidth="1.5" />
        <line x1="16" y1="15" x2="22" y2="10" stroke="#ca8a04" strokeWidth="1.5" />
        <line x1="28" y1="15" x2="22" y2="10" stroke="#ca8a04" strokeWidth="1.5" />
        {/* Overlord Arm */}
        <path d="M22 22 L38 42" stroke="#eab308" strokeWidth="3.5" />
        {/* Quantum Core Anvil */}
        <polygon points="12,46 52,46 44,32 20,32" fill="#eab308" stroke="#78350f" strokeWidth="2" />
        <polygon points="32,32 38,39 32,46 26,39" fill="#ffffff" />
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
