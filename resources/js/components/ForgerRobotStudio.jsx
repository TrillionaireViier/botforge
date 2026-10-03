import { useState, useEffect } from 'react';
import RobotForgeIcon from './RobotForgeIcon';
import { Bot, Flame, Play, Pause, Trash2, Zap, Sparkles, CheckCircle2, Sliders, BarChart3, Shield, Award, Cpu, Filter, Layers, ChevronDown, Activity, Radio, RefreshCw } from 'lucide-react';

export default function ForgerRobotStudio({ autoAnimate = false }) {
  // 30 Robot Variants Catalog Definition
  const robotVariants30 = [
    // Category A: Heavy Titan Mechanics
    { id: 'A1', name: "CyberForge Titan 3000", cat: "Titan", strategy: "Grid Spot BTC/USDT", icon: "🤖", skin: "A", conversion: "18.4%", speed: "920ms", rating: "4.9★", pnl: "+24.5%", color: "bg-yellow-300 text-black border-black" },
    { id: 'A2', name: "Titanium Dreadnought", cat: "Titan", strategy: "Spot DCA Accumulator ETH", icon: "🛡️", skin: "A", conversion: "21.2%", speed: "890ms", rating: "4.85★", pnl: "+19.2%", color: "bg-yellow-400 text-black border-black" },
    { id: 'A3', name: "Centurion 100-Grid", cat: "Titan", strategy: "100-Level Grid SOL/USDT", icon: "⚙️", skin: "A", conversion: "20.1%", speed: "940ms", rating: "4.92★", pnl: "+31.0%", color: "bg-amber-300 text-black border-black" },
    { id: 'A4', name: "Valkyrie Shield Guard", cat: "Titan", strategy: "Max Drawdown Protection", icon: "⚔️", skin: "A", conversion: "19.8%", speed: "870ms", rating: "4.90★", pnl: "+15.8%", color: "bg-yellow-200 text-black border-black" },
    { id: 'A5', name: "Ironclad Bear Accumulator", cat: "Titan", strategy: "Bear Market Spot DCA", icon: "📦", skin: "A", conversion: "22.5%", speed: "910ms", rating: "4.88★", pnl: "+28.4%", color: "bg-amber-400 text-black border-black" },
    { id: 'A6', name: "Obsidian Heavy Crusher", cat: "Titan", strategy: "Futures Leverage Grid 10x", icon: "🔨", skin: "A", conversion: "23.4%", speed: "860ms", rating: "4.95★", pnl: "+38.9%", color: "bg-yellow-500 text-black border-black" },

    // Category B: Quantum & Plasma Orbs
    { id: 'B1', name: "Quantum Plasma Scalper", cat: "Quantum", strategy: "Futures Scalping ETH/USDT", icon: "⚡", skin: "B", conversion: "22.8%", speed: "650ms", rating: "4.95★", pnl: "+34.2%", color: "bg-cyan-300 text-black border-cyan-500" },
    { id: 'B2', name: "Nebula Cosmic Voyager", cat: "Quantum", strategy: "Cross-Chain Yield HFT", icon: "🌌", skin: "B", conversion: "25.1%", speed: "590ms", rating: "4.98★", pnl: "+41.5%", color: "bg-cyan-400 text-black border-cyan-600" },
    { id: 'B3', name: "Aether Flux Oscillator", cat: "Quantum", strategy: "RSI Divergence AI Core", icon: "🔮", skin: "B", conversion: "24.0%", speed: "620ms", rating: "4.91★", pnl: "+27.8%", color: "bg-teal-300 text-black border-teal-500" },
    { id: 'B4', name: "Glitch Overlord AI", cat: "Quantum", strategy: "Arbitrage Micro-Gap Sweep", icon: "👾", skin: "B", conversion: "26.3%", speed: "490ms", rating: "4.99★", pnl: "+45.0%", color: "bg-cyan-200 text-black border-cyan-400" },
    { id: 'B5', name: "Spectre Zero-Slippage HFT", cat: "Quantum", strategy: "Zero Slippage Liquidity HFT", icon: "👻", skin: "B", conversion: "23.9%", speed: "530ms", rating: "4.93★", pnl: "+32.1%", color: "bg-sky-300 text-black border-sky-500" },
    { id: 'B6', name: "Eclipse Dark Matter Options", cat: "Quantum", strategy: "Options Volatility Straddle", icon: "🌑", skin: "B", conversion: "21.7%", speed: "680ms", rating: "4.87★", pnl: "+29.4%", color: "bg-indigo-300 text-black border-indigo-500" },

    // Category C: Inferno & Magma Beasts
    { id: 'C1', name: "Inferno Magma Dragon", cat: "Inferno", strategy: "DCA Accumulator SOL/USDT", icon: "🔥", skin: "C", conversion: "19.7%", speed: "810ms", rating: "4.88★", pnl: "+29.1%", color: "bg-red-400 text-white border-red-600" },
    { id: 'C2', name: "Solar Flare Sun-Grid", cat: "Inferno", strategy: "Sun-Grid High Volatility BTC", icon: "☀️", skin: "C", conversion: "23.8%", speed: "760ms", rating: "4.94★", pnl: "+36.7%", color: "bg-[#FA4616] text-white border-orange-700" },
    { id: 'C3', name: "Supernova Spark Tracker", cat: "Inferno", strategy: "Pump & Momentum Breakout", icon: "💥", skin: "C", conversion: "25.9%", speed: "710ms", rating: "4.97★", pnl: "+48.2%", color: "bg-red-500 text-white border-red-700" },
    { id: 'C4', name: "Zeus Lightning Flash Buyer", cat: "Inferno", strategy: "Flash-Crash Limit Order Buyer", icon: "⚡", skin: "C", conversion: "27.4%", speed: "430ms", rating: "5.0★", pnl: "+52.0%", color: "bg-orange-500 text-white border-orange-700" },
    { id: 'C5', name: "Firestorm Martingale Grid", cat: "Inferno", strategy: "Martingale Volume Multiplier", icon: "🌋", skin: "C", conversion: "22.1%", speed: "780ms", rating: "4.89★", pnl: "+33.6%", color: "bg-rose-500 text-white border-rose-700" },
    { id: 'C6', name: "Volcano Core Eruptor", cat: "Inferno", strategy: "High-Frequency Spiking Spot", icon: "☄️", skin: "C", conversion: "24.6%", speed: "740ms", rating: "4.92★", pnl: "+40.1%", color: "bg-red-600 text-white border-red-800" },

    // Category D: Cyber Matrix & Lasers
    { id: 'D1', name: "Matrix Cyber-Sentinel", cat: "Matrix", strategy: "HFT Micro-Grid SOL/USDT", icon: "🟢", skin: "D", conversion: "24.1%", speed: "590ms", rating: "4.98★", pnl: "+37.8%", color: "bg-emerald-300 text-black border-emerald-500" },
    { id: 'D2', name: "Hyperion Laser Sniper", cat: "Matrix", strategy: "Limit Order Breakout Sniper", icon: "🎯", skin: "D", conversion: "26.8%", speed: "460ms", rating: "4.99★", pnl: "+46.3%", color: "bg-green-400 text-black border-green-600" },
    { id: 'D3', name: "Cyberpunk Neon Samurai", cat: "Matrix", strategy: "Trend Following Momentum", icon: "🗡️", skin: "D", conversion: "23.2%", speed: "610ms", rating: "4.91★", pnl: "+30.5%", color: "bg-emerald-400 text-black border-emerald-600" },
    { id: 'D4', name: "Phantom Shadow Stealth", cat: "Matrix", strategy: "Darkpool Stealth Execution", icon: "🥷", skin: "D", conversion: "25.7%", speed: "520ms", rating: "4.96★", pnl: "+42.9%", color: "bg-lime-300 text-black border-lime-500" },
    { id: 'D5', name: "Apex Orderbook Sweeper", cat: "Matrix", strategy: "Depth-of-Market Liquidity Sweep", icon: "📈", skin: "D", conversion: "28.0%", speed: "380ms", rating: "5.0★", pnl: "+55.4%", color: "bg-emerald-500 text-black border-emerald-700" },
    { id: 'D6', name: "Pulse Engine MACD 9000", cat: "Matrix", strategy: "MACD Histogram Pulse Scalp", icon: "📟", skin: "D", conversion: "22.9%", speed: "640ms", rating: "4.89★", pnl: "+28.7%", color: "bg-green-300 text-black border-green-500" },

    // Category E: Imperial Golden Sovereigns
    { id: 'E1', name: "Golden Sovereign Monarch", cat: "Imperial", strategy: "Arbitrage VIP Gold BTC/USDT", icon: "👑", skin: "E", conversion: "26.5%", speed: "480ms", rating: "5.0★", pnl: "+44.0%", color: "bg-amber-300 text-black border-amber-500" },
    { id: 'E2', name: "Chronos Time Weaver", cat: "Imperial", strategy: "Trailing Take-Profit DCA Core", icon: "⏳", skin: "E", conversion: "24.9%", speed: "540ms", rating: "4.94★", pnl: "+39.2%", color: "bg-yellow-300 text-black border-yellow-500" },
    { id: 'E3', name: "Omega Protocol X Consensus", cat: "Imperial", strategy: "Multi-Indicator AI Consensus", icon: "🔱", skin: "E", conversion: "27.1%", speed: "420ms", rating: "4.99★", pnl: "+49.8%", color: "bg-amber-400 text-black border-amber-600" },
    { id: 'E4', name: "Cyber Kraken Arbitrage", cat: "Imperial", strategy: "Multi-Exchange Triangular Arb", icon: "🐙", skin: "E", conversion: "28.5%", speed: "350ms", rating: "5.0★", pnl: "+58.1%", color: "bg-yellow-400 text-black border-yellow-600" },
    { id: 'E5', name: "Astral Beacon Whale Tracker", cat: "Imperial", strategy: "On-Chain Whale Order Copy", icon: "🐋", skin: "E", conversion: "29.2%", speed: "310ms", rating: "5.0★", pnl: "+62.4%", color: "bg-amber-200 text-black border-amber-400" },
    { id: 'E6', name: "Omni Mind AI Overlord", cat: "Imperial", strategy: "Reinforcement Learning Core", icon: "🧠", skin: "E", conversion: "31.0%", speed: "280ms", rating: "5.0★", pnl: "+68.9%", color: "bg-yellow-500 text-black border-yellow-700" }
  ];

  const [activeVariantId, setActiveVariantId] = useState('A1');
  const [activeCategory, setActiveCategory] = useState('All'); 
  const [isStriking, setIsStriking] = useState(false);
  const [strikePhase, setStrikePhase] = useState(0); // 0, 1, 2, 3, 4, 5
  const [sparks, setSparks] = useState([]);
  const [circuitPulse, setCircuitPulse] = useState(0);
  const [lastForgedBot, setLastForgedBot] = useState(null);

  const [robots, setRobots] = useState([
    { id: 1, name: "CyberForge Titan 3000", strategy: "Grid Spot BTC/USDT", status: "Active", pnl: "+24.5%", trades: 142, icon: "🤖", skin: "A", variantId: "A1" },
    { id: 2, name: "Quantum Plasma Scalper", strategy: "Futures Scalping ETH/USDT", status: "Active", pnl: "+34.2%", trades: 310, icon: "⚡", skin: "B", variantId: "B1" },
    { id: 3, name: "Inferno Magma Dragon", strategy: "DCA Accumulator SOL/USDT", status: "Active", pnl: "+29.1%", trades: 89, icon: "🔥", skin: "C", variantId: "C1" },
    { id: 4, name: "Matrix Cyber-Sentinel", strategy: "HFT Micro-Grid SOL/USDT", status: "Active", pnl: "+37.8%", trades: 512, icon: "🟢", skin: "D", variantId: "D1" },
    { id: 5, name: "Golden Sovereign Monarch", strategy: "Arbitrage VIP Gold BTC/USDT", status: "Active", pnl: "+44.0%", trades: 890, icon: "👑", skin: "E", variantId: "E1" }
  ]);

  const [botNameInput, setBotNameInput] = useState("");
  const [strategySelect, setStrategySelect] = useState("Grid Spot");
  const [pairSelect, setPairSelect] = useState("BTC/USDT");

  // Selected Variant Data
  const currentVariantData = robotVariants30.find(v => v.id === activeVariantId) || robotVariants30[0];

  // Auto Pulse background effect
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setCircuitPulse(prev => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(pulseInterval);
  }, []);

  // Auto-Strike Animation effect for Landing Page
  useEffect(() => {
    if (!autoAnimate) return;
    const interval = setInterval(() => {
      forgeNewRobot();
    }, 4200);
    const initialTimer = setTimeout(() => {
      forgeNewRobot();
    }, 600);
    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, [autoAnimate, activeVariantId]);

  const generateSparkParticles = () => {
    const symbolMap = {
      A: ["⚡", "✨", "💥", "🔥", "⚙️", "🛠️", "🦾", "🔨"],
      B: ["⚡", "💎", "🌐", "🔮", "✨", "🪐", "🌀", "💠"],
      C: ["🔥", "💥", "🌋", "☄️", "⚡", "☀️", "🏮", "♨️"],
      D: ["🟢", "⚡", "💻", "❇️", "🎯", "🤖", "📟", "🔋"],
      E: ["👑", "⭐", "💰", "✨", "🏆", "🔱", "💎", "🏵️"]
    };

    const symbols = symbolMap[currentVariantData.skin] || symbolMap.A;

    const newSparks = Array.from({ length: 22 }).map((_, i) => ({
      id: Math.random(),
      angle: (i * 16.3) + (Math.random() * 20 - 10),
      dist: 80 + Math.random() * 120,
      size: Math.random() > 0.4 ? 'text-3xl' : 'text-xl',
      symbol: symbols[Math.floor(Math.random() * symbols.length)]
    }));
    setSparks(newSparks);
  };

  const forgeNewRobot = () => {
    if (isStriking) return;
    setIsStriking(true);
    setLastForgedBot(null);

    // Sequence of 5 Strike/Assembly Animations
    setStrikePhase(1);
    generateSparkParticles();

    setTimeout(() => {
      setStrikePhase(2);
      generateSparkParticles();
    }, 350);

    setTimeout(() => {
      setStrikePhase(3);
      generateSparkParticles();
    }, 700);

    setTimeout(() => {
      setStrikePhase(4);
      generateSparkParticles();
    }, 1050);

    setTimeout(() => {
      setStrikePhase(5);
      generateSparkParticles();
    }, 1400);

    // Assembly Complete
    setTimeout(() => {
      setIsStriking(false);
      setStrikePhase(0);
      setSparks([]);

      const name = botNameInput.trim() || `${currentVariantData.name} #${Math.floor(100 + Math.random() * 900)}`;

      const newBot = {
        id: Date.now(),
        name: name,
        strategy: `${strategySelect} ${pairSelect}`,
        status: "Active",
        pnl: currentVariantData.pnl,
        trades: Math.floor(10 + Math.random() * 80),
        icon: currentVariantData.icon,
        skin: currentVariantData.skin,
        variantId: currentVariantData.id
      };

      setRobots([newBot, ...robots]);
      setLastForgedBot(newBot);
      setBotNameInput("");
    }, 1850);
  };

  const toggleBotStatus = (id) => {
    setRobots(robots.map(r => r.id === id ? { ...r, status: r.status === 'Active' ? 'Paused' : 'Active' } : r));
  };

  const deleteBot = (id) => {
    setRobots(robots.filter(r => r.id !== id));
  };

  // Filtered variants list
  const filteredVariants = activeCategory === 'All' 
    ? robotVariants30 
    : robotVariants30.filter(v => v.cat === activeCategory);

  return (
    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      
      {/* 30 Variants Catalog Header & Filter Bar */}
      <div className="border-b-4 border-black pb-6 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2 border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                <RobotForgeIcon className="w-8 h-8 animate-pulse" variant={currentVariantData.id} animated={true} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl font-black uppercase tracking-widest text-black">Мульти-Кузница 30 ИИ-Роботов На Наковальне</h2>
                  <span className="bg-black text-yellow-300 font-mono text-xs font-bold px-2 py-0.5 border border-black uppercase tracking-widest animate-pulse">
                    Heavy Anvil Forge & Robotic Arms
                  </span>
                </div>
                <p className="text-gray-600 font-mono text-xs mt-1">
                  Анимированная плазменная наковальня: кузнечные молоты, сварка лазером и сборка ядер роботов!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black text-white px-4 py-2 border-2 border-black font-mono text-xs uppercase font-bold flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Модель #{currentVariantData.id}: <strong className="text-yellow-300">{currentVariantData.name}</strong></span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          <span className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5 text-yellow-600" /> Категории:
          </span>
          {["All", "Titan", "Quantum", "Inferno", "Matrix", "Imperial"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-xs font-mono font-bold uppercase border-2 transition-all shrink-0 ${
                activeCategory === cat 
                  ? 'bg-black text-yellow-300 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]' 
                  : 'bg-gray-100 text-gray-800 border-gray-400 hover:bg-gray-200'
              }`}
            >
              {cat === 'All' ? 'Все 30 Моделей' : cat}
            </button>
          ))}
        </div>

        {/* 30 Variants Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 max-h-[220px] overflow-y-auto p-1 border-2 border-gray-300 bg-gray-50">
          {filteredVariants.map((item) => {
            const isSelected = activeVariantId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveVariantId(item.id)}
                className={`p-2 border-2 font-mono text-left transition-all relative flex flex-col justify-between ${
                  isSelected 
                    ? `${item.color} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold z-10 scale-102` 
                    : 'bg-white text-gray-800 border-gray-300 hover:border-black hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1 w-full">
                  <div className="w-7 h-7 flex items-center justify-center overflow-visible">
                    <RobotForgeIcon variant={item.id} className="w-6 h-6" animated={isSelected} />
                  </div>
                  <span className="text-[9px] font-black uppercase px-1 bg-black text-white">{item.id}</span>
                </div>
                <div className="font-black text-[11px] uppercase truncate">{item.name}</div>
                <div className="text-[9px] text-gray-600 truncate mt-0.5">{item.pnl} | {item.rating}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 3D Cyber Forge Stage Box with Volumetric Isometric Perspective */}
      <div 
        className="relative mb-8 p-8 border-4 border-black bg-gray-950 overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center min-h-[460px]"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Layer 1: Cartoon Blue Robotic Assembly Arm Artwork */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none transition-all duration-700"
          style={{ backgroundImage: `url('/robot_assembly_blue.png')` }}
        ></div>

        {/* Layer 2: Cartoon Cyber Forge Anvil Background Image with 3D Depth Tiling */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none transition-opacity duration-500"
          style={{ backgroundImage: `url('/cartoon_forge.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent pointer-events-none"></div>

        {/* --- 3D ISOMETRIC STEEL ANVIL WITH REALISTIC DEPTH & BEVEL SHADOWS --- */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none z-10 transition-transform duration-200"
          style={{ transform: "translateX(-50%) rotateX(25deg) rotateY(-5deg) translateZ(10px)" }}
        >
          {/* Anvil Magma & 3D Volumetric Lighting Glow */}
          <div className={`absolute inset-0 bg-gradient-to-t from-red-600/70 via-yellow-400/50 to-transparent rounded-full blur-3xl transition-opacity duration-300 ${isStriking ? 'opacity-100 scale-125 animate-pulse' : 'opacity-40 scale-100'}`}></div>
          
          <svg className="w-full h-full overflow-visible drop-shadow-[0_25px_35px_rgba(0,0,0,0.98)]" viewBox="0 0 240 100" fill="none">
            {/* 3D Wooden Base Block with Isometric Side Panels */}
            <polygon points="45,75 195,75 205,95 55,95" fill="#290e02" stroke="#000" strokeWidth="3" />
            <rect x="55" y="75" width="140" height="20" rx="4" fill="#451a03" stroke="#000" strokeWidth="4" />
            <line x1="80" y1="75" x2="80" y2="95" stroke="#78350f" strokeWidth="3.5" />
            <line x1="160" y1="75" x2="160" y2="95" stroke="#78350f" strokeWidth="3.5" />
            
            {/* 3D Anvil Base Foot */}
            <polygon points="45,75 195,75 175,55 65,55" fill="#0f172a" stroke="#000" strokeWidth="4" />
            <polygon points="195,75 205,65 185,45 175,55" fill="#020617" opacity="0.8" />

            {/* Anvil Central Waist */}
            <rect x="80" y="38" width="80" height="20" fill="#1e293b" stroke="#000" strokeWidth="4" />
            
            {/* Anvil Horn Left (3D Tapered Bevel Horn) */}
            <path d="M5 20 C25 20 45 22 70 38 L70 20 Z" fill="#334155" stroke="#000" strokeWidth="4" />
            <path d="M12 23 C28 23 45 25 65 35 Z" fill="#94a3b8" opacity="0.7" />

            {/* 3D Anvil Main Heavy Steel Top Deck */}
            <rect x="68" y="14" width="112" height="26" rx="4" fill="#1e293b" stroke="#000" strokeWidth="4" />
            {/* Glowing 3D Hot Steel Working Surface */}
            <rect x="72" y="17" width="104" height="8" rx="2" fill="#facc15" opacity={isStriking ? "1" : "0.5"} className="transition-opacity duration-150" />
            <rect x="74" y="19" width="100" height="3" fill="#ffffff" opacity={isStriking ? "0.9" : "0.2"} />

            {/* Anvil Heel Right */}
            <rect x="180" y="20" width="30" height="18" rx="2" fill="#334155" stroke="#000" strokeWidth="4" />
            <path d="M210 20 L230 20 L210 38 Z" fill="#1e293b" stroke="#000" strokeWidth="4" />
          </svg>
        </div>

        {/* Overhead Spotlights Scan Lines */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent pointer-events-none animate-pulse"></div>

        {/* --- 3D ANIMATED BLACKSMITH ROBOT FORGER (Кузнец-Робот) STANDING BEHIND THE ANVIL --- */}
        <div 
          className="absolute top-14 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-all duration-300"
          style={{ transform: "translateX(-50%) translateZ(-40px)" }}
        >
          <div className="relative">
            {/* 3D Blacksmith Robot Back Energy Aura */}
            <div className={`absolute -inset-6 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 blur-xl transition-opacity ${isStriking ? 'opacity-90 animate-pulse' : 'opacity-25'}`}></div>
            
            {/* Heavy Blacksmith Robot SVG standing behind */}
            <svg className="w-36 h-40 drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] overflow-visible" viewBox="0 0 140 160" fill="none">
              {/* Robot Legs & Stance */}
              <rect x="30" y="105" width="26" height="45" rx="5" fill="#0f172a" stroke="#000" strokeWidth="3.5" />
              <rect x="84" y="105" width="26" height="45" rx="5" fill="#0f172a" stroke="#000" strokeWidth="3.5" />
              
              {/* Robot Heavy Mechanical Torso */}
              <rect x="22" y="50" width="96" height="65" rx="10" fill="#1e293b" stroke="#000" strokeWidth="4.5" />
              <rect x="38" y="62" width="64" height="30" rx="5" fill="#facc15" stroke="#000" strokeWidth="3.5" />
              <circle cx="70" cy="77" r="10" fill="#ef4444" className={isStriking ? "animate-ping" : ""} />
              <circle cx="70" cy="77" r="6" fill="#ffffff" />
              
              {/* Robot Helmet & Visor */}
              <rect x="42" y="10" width="56" height="44" rx="8" fill="#090d16" stroke="#000" strokeWidth="4.5" />
              <rect x="48" y="22" width="44" height="15" rx="4" fill="#00f0ff" stroke="#000" strokeWidth="2.5" />
              <circle cx="58" cy="29.5" r="4" fill="#ffffff" />
              <circle cx="82" cy="29.5" r="4" fill="#ffffff" />
              {/* Blacksmith Horns */}
              <polygon points="42,12 28,-4 48,12" fill="#eab308" stroke="#000" strokeWidth="2.5" />
              <polygon points="98,12 112,-4 92,12" fill="#eab308" stroke="#000" strokeWidth="2.5" />

              {/* Both Arms Overhead Holding Big Forging Hammer Swinging Down from Behind */}
              <g 
                className="transition-transform duration-100 ease-out origin-[70px_60px]"
                style={{
                  transform: strikePhase === 1 ? 'rotate(-60deg) translateY(-20px) rotateX(15deg)' : // High backswing
                             strikePhase === 2 ? 'rotate(15deg) translateY(35px) scale(1.1) rotateX(-10deg)' :   // Powerful downward slam
                             strikePhase === 3 ? 'rotate(-70deg) translateY(-25px) rotateX(20deg)' : // Higher backswing
                             strikePhase === 4 ? 'rotate(20deg) translateY(40px) scale(1.15) rotateX(-15deg)' :   // Hardest slam
                             strikePhase === 5 ? 'rotate(10deg) translateY(30px) rotateX(0deg)' :   // Final impact
                             'rotate(-40deg) translateY(-10px)'                      // Ready stance
                }}
              >
                {/* Shoulder Joints */}
                <circle cx="20" cy="65" r="11" fill="#eab308" stroke="#000" strokeWidth="4" />
                <circle cx="120" cy="65" r="11" fill="#eab308" stroke="#000" strokeWidth="4" />
                
                {/* Mechanical Arms */}
                <rect x="10" y="60" width="45" height="16" rx="6" fill="#475569" stroke="#000" strokeWidth="4" transform="rotate(-40 20 65)" />
                <rect x="85" y="60" width="45" height="16" rx="6" fill="#475569" stroke="#000" strokeWidth="4" transform="rotate(40 120 65)" />

                {/* Big Hammer Long Handle Vertical */}
                <rect x="64" y="-50" width="12" height="120" rx="4" fill="#78350f" stroke="#000" strokeWidth="4" />
                {/* Massive Forging Hammer Head */}
                <rect x="35" y="-85" width="70" height="42" rx="7" fill="#facc15" stroke="#000" strokeWidth="4.5" />
                <rect x="42" y="-78" width="56" height="12" fill="#ffffff" />
                <path d="M105 -85 L120 -72 L120 -50 L105 -43 Z" fill="#ca8a04" stroke="#000" strokeWidth="3.5" />
              </g>
            </svg>
          </div>
        </div>

        {/* Stage Backdrop Effect & Robot Resting on Anvil */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[340px] w-full z-10 pb-6">
          
          {/* Variant-specific 3D Volumetric Glow backdrop */}
          <div className={`absolute w-72 h-72 rounded-full transition-all duration-300 pointer-events-none ${
            isStriking ? 'scale-150 blur-3xl opacity-90' : 'scale-100 blur-2xl opacity-40'
          } ${
            currentVariantData.skin === 'A' ? 'bg-yellow-500' :
            currentVariantData.skin === 'B' ? 'bg-cyan-400' :
            currentVariantData.skin === 'C' ? 'bg-red-500' :
            currentVariantData.skin === 'D' ? 'bg-emerald-400' : 'bg-amber-400'
          }`}></div>

          {/* Flying Spark 3D Particles */}
          {sparks.map((s) => {
            const rad = (s.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * s.dist;
            const ty = Math.sin(rad) * s.dist;
            return (
              <span
                key={s.id}
                style={{
                  transform: `translate3d(${tx}px, ${ty}px, 50px)`,
                  transition: 'all 0.45s cubic-bezier(0.1, 0.8, 0.3, 1)',
                  opacity: isStriking ? 1 : 0
                }}
                className={`absolute ${s.size} pointer-events-none animate-ping z-30 drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]`}
              >
                {s.symbol}
              </span>
            );
          })}

          {/* Large Animated Robot Lying Down Horizontally on its Side across the 3D Anvil Deck */}
          <div 
            className={`relative transition-all duration-200 z-20 translate-y-12 ${
              strikePhase === 1 ? 'rotate-[85deg] scale-105 translate-y-14' :
              strikePhase === 2 ? 'rotate-[95deg] scale-110 translate-y-16' :
              strikePhase === 3 ? 'rotate-[82deg] scale-108 translate-y-12' :
              strikePhase === 4 ? 'rotate-[98deg] scale-112 translate-y-15' :
              strikePhase === 5 ? 'rotate-[90deg] scale-115 translate-y-14' : 'rotate-[90deg] scale-100'
            }`}
            style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateZ(90deg) translateZ(20px)" }}
          >
            <RobotForgeIcon className={`w-40 h-40 transition-all duration-200 ${
              isStriking ? 'drop-shadow-[0_20px_40px_rgba(255,255,255,1)]' : 'drop-shadow-[0_15px_30px_rgba(0,240,255,0.5)]'
            }`} isDark={true} variant={currentVariantData.id} animated={true} />
          </div>

        </div>
      </div>

      {/* Forged Notification Banner */}
      {lastForgedBot && (
        <div className="bg-emerald-400 border-4 border-black p-4 mb-8 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <RobotForgeIcon className="w-8 h-8" variant={lastForgedBot.variantId} animated={true} />
            </div>
            <div>
              <div className="font-black text-black text-sm uppercase">Успешно Скован Новый ИИ-Бот На Наковальне!</div>
              <div className="font-mono text-xs text-gray-900">
                <strong>{lastForgedBot.name}</strong> • {lastForgedBot.strategy} • Ожидаемый PnL: <span className="font-bold">{lastForgedBot.pnl}</span>
              </div>
            </div>
          </div>
          <span className="bg-black text-emerald-400 font-mono text-xs font-bold px-3 py-1 border border-black uppercase tracking-widest">
            Запущен в Флот
          </span>
        </div>
      )}

      {/* Active Fleet List Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black">
        <h3 className="font-black text-lg uppercase tracking-wider text-black flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          <span>Активный Флот ИИ-Ботов ({robots.length})</span>
        </h3>
        <span className="font-mono text-xs text-gray-600 font-bold">
          Авто-Обновление: <strong className="text-black">Включено</strong>
        </span>
      </div>

      {/* Active Fleet Table / Grid */}
      <div className="space-y-3">
        {robots.map((bot) => (
          <div
            key={bot.id}
            className={`p-4 border-2 border-black flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all ${
              bot.status === 'Active' 
                ? 'bg-amber-50/50 hover:bg-yellow-100/60 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                : 'bg-gray-100 opacity-60 border-dashed'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                bot.skin === 'A' ? 'bg-yellow-300' :
                bot.skin === 'B' ? 'bg-cyan-300' :
                bot.skin === 'C' ? 'bg-red-400 text-white' :
                bot.skin === 'D' ? 'bg-emerald-300' : 'bg-amber-400'
              }`}>
                <RobotForgeIcon className="w-8 h-8" variant={bot.variantId || 'A1'} animated={bot.status === 'Active'} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-black text-sm uppercase text-black">{bot.name}</h4>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 border border-black uppercase ${
                    bot.status === 'Active' ? 'bg-emerald-300 text-black' : 'bg-gray-300 text-gray-700'
                  }`}>
                    {bot.status}
                  </span>
                </div>
                <div className="text-xs font-mono text-gray-600 mt-0.5">
                  {bot.strategy} • <strong className="text-black">{bot.trades} сделок</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto gap-6 border-t md:border-t-0 pt-2 md:pt-0 border-gray-300">
              <div className="text-left md:text-right font-mono">
                <div className="text-[10px] text-gray-500 uppercase font-bold">Прибыль (PnL)</div>
                <div className="text-sm font-black text-emerald-600">{bot.pnl}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBotStatus(bot.id)}
                  className={`p-2 border-2 border-black font-mono text-xs font-bold uppercase flex items-center gap-1 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                    bot.status === 'Active' 
                      ? 'bg-yellow-300 hover:bg-yellow-400 text-black' 
                      : 'bg-emerald-300 hover:bg-emerald-400 text-black'
                  }`}
                >
                  {bot.status === 'Active' ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{bot.status === 'Active' ? 'Пауза' : 'Старт'}</span>
                </button>

                <button
                  onClick={() => deleteBot(bot.id)}
                  className="p-2 border-2 border-black bg-red-400 hover:bg-red-500 text-white font-mono text-xs font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
