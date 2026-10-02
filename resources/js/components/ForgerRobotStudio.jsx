import { useState, useEffect } from 'react';
import RobotForgeIcon from './RobotForgeIcon';
import { Bot, Flame, Play, Pause, Trash2, Zap, Sparkles, CheckCircle2, Sliders, BarChart3, Shield, Award, Cpu, Filter, Layers, ChevronDown } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState('All'); // "All" | "Titan" | "Quantum" | "Inferno" | "Matrix" | "Imperial"
  const [isStriking, setIsStriking] = useState(false);
  const [strikePhase, setStrikePhase] = useState(0); // 0, 1, 2, 3
  const [sparks, setSparks] = useState([]);
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

  // Auto-Strike Animation effect for Landing Page
  useEffect(() => {
    if (!autoAnimate) return;
    const interval = setInterval(() => {
      forgeNewRobot();
    }, 3800);
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
      A: ["⚡", "✨", "💥", "🔥", "⚙️"],
      B: ["⚡", "💎", "🌐", "🔮", "✨"],
      C: ["🔥", "💥", "🌋", "☄️", "⚡"],
      D: ["🟢", "⚡", "💻", "❇️", "🎯"],
      E: ["👑", "⭐", "💰", "✨", "🏆"]
    };

    const symbols = symbolMap[currentVariantData.skin] || symbolMap.A;

    const newSparks = Array.from({ length: 14 }).map((_, i) => ({
      id: Math.random(),
      angle: (i * 25.7) + (Math.random() * 15 - 7.5),
      dist: 70 + Math.random() * 90,
      size: Math.random() > 0.5 ? 'text-2xl' : 'text-xl',
      symbol: symbols[Math.floor(Math.random() * symbols.length)]
    }));
    setSparks(newSparks);
  };

  const forgeNewRobot = () => {
    if (isStriking) return;
    setIsStriking(true);
    setLastForgedBot(null);

    // Strike 1
    setStrikePhase(1);
    generateSparkParticles();

    // Strike 2
    setTimeout(() => {
      setStrikePhase(2);
      generateSparkParticles();
    }, 450);

    // Strike 3
    setTimeout(() => {
      setStrikePhase(3);
      generateSparkParticles();
    }, 900);

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
    }, 1400);
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
                <RobotForgeIcon className="w-8 h-8" variant={currentVariantData.id} animated={true} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl font-black uppercase tracking-widest text-black">Мульти-Кузница 30 Моделей ИИ-Роботов</h2>
                  <span className="bg-black text-yellow-300 font-mono text-xs font-bold px-2 py-0.5 border border-black uppercase tracking-widest">
                    30 Версий Роботов & Наковален
                  </span>
                </div>
                <p className="text-gray-600 font-mono text-xs mt-1">
                  Выберите любого из 30 профессиональных AI-ботов. Выбери скин и тип наковальни для мгновенной ковки!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black text-white px-4 py-2 border-2 border-black font-mono text-xs uppercase font-bold flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
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

      {/* Interactive Animated Stage for Selected 30 Variant */}
      <div className="bg-gray-950 border-4 border-black p-6 md:p-8 rounded-xl text-white mb-8 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]">
        
        {/* Stage Backdrop Effect */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[280px] w-full">
          
          {/* Variant-specific Glow backdrop */}
          <div className={`absolute w-56 h-56 rounded-full transition-all duration-300 pointer-events-none ${
            isStriking ? 'scale-130 blur-3xl opacity-70' : 'scale-100 blur-2xl opacity-30'
          } ${
            currentVariantData.skin === 'A' ? 'bg-yellow-500' :
            currentVariantData.skin === 'B' ? 'bg-cyan-400' :
            currentVariantData.skin === 'C' ? 'bg-red-500' :
            currentVariantData.skin === 'D' ? 'bg-emerald-400' : 'bg-amber-400'
          }`}></div>

          {/* Flying Spark Particles */}
          {sparks.map((s) => {
            const rad = (s.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * s.dist;
            const ty = Math.sin(rad) * s.dist;
            return (
              <span
                key={s.id}
                style={{
                  transform: `translate(${tx}px, ${ty}px)`,
                  transition: 'all 0.45s cubic-bezier(0.1, 0.8, 0.3, 1)',
                  opacity: isStriking ? 1 : 0
                }}
                className={`absolute ${s.size} pointer-events-none animate-ping z-20`}
              >
                {s.symbol}
              </span>
            );
          })}

          {/* Large Animated Robot Variant */}
          <div className={`relative transition-all duration-200 z-10 ${
            strikePhase === 1 ? 'scale-125 rotate-6 translate-y-2' :
            strikePhase === 2 ? 'scale-125 -rotate-6 translate-y-3' :
            strikePhase === 3 ? 'scale-135 rotate-12 translate-y-4' : 'scale-100 rotate-0'
          }`}>
            <RobotForgeIcon className={`w-44 h-44 transition-all duration-200 ${
              isStriking ? 'drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]' : ''
            }`} isDark={true} variant={currentVariantData.id} animated={true} />
          </div>

          {/* Impact Status Indicator */}
          <div className="mt-4 font-mono text-center z-10">
            {isStriking ? (
              <div className="flex flex-col items-center gap-1">
                <span className="text-yellow-300 font-black text-lg md:text-xl uppercase tracking-widest animate-pulse">
                  {strikePhase === 1 && `🔨 ${currentVariantData.name} — УДАР #1: КОВКА СИГНАЛА! 💥`}
                  {strikePhase === 2 && `⚡ ${currentVariantData.name} — УДАР #2: ПРОШИВКА СЕТКИ! ✨`}
                  {strikePhase === 3 && `🏆 ${currentVariantData.name} — УДАР #3: ЗАПУСК В HFT! 🚀`}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Скорость ковки: {currentVariantData.speed} | Рейтинг: {currentVariantData.rating}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Модель [{currentVariantData.id}]: <strong className="text-yellow-300">{currentVariantData.name}</strong> готова к ковке</span>
              </div>
            )}
          </div>
        </div>

        {/* Controls and Variant Details */}
        <div className="w-full lg:w-96 bg-gray-900 border-2 border-gray-700 p-6 rounded-lg space-y-4 shadow-xl z-10">
          <div className="flex items-center justify-between border-b border-gray-800 pb-3">
            <h3 className="font-black uppercase tracking-wider text-sm text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-yellow-400 animate-pulse" /> Настройки {currentVariantData.name}
            </h3>
            <span className="text-[10px] font-mono font-bold bg-gray-800 text-yellow-300 px-2 py-0.5 border border-gray-700">
              {currentVariantData.pnl}
            </span>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Имя Кастомного Робота</label>
            <input 
              type="text" 
              value={botNameInput}
              onChange={(e) => setBotNameInput(e.target.value)}
              placeholder={`e.g. ${currentVariantData.name} Alpha`}
              className="w-full bg-black border-2 border-gray-700 px-3 py-2 text-xs font-mono text-white outline-none focus:border-yellow-400 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Стратегия</label>
              <select 
                value={strategySelect}
                onChange={(e) => setStrategySelect(e.target.value)}
                className="w-full bg-black border-2 border-gray-700 px-2 py-1.5 text-xs font-mono text-white outline-none"
              >
                <option value="Grid Spot">Grid Spot</option>
                <option value="Futures Scalp">Futures Scalp</option>
                <option value="DCA Accumulator">DCA Accumulator</option>
                <option value="AI Signal Follower">AI Signal Follower</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Торговая Пара</label>
              <select 
                value={pairSelect}
                onChange={(e) => setPairSelect(e.target.value)}
                className="w-full bg-black border-2 border-gray-700 px-2 py-1.5 text-xs font-mono text-white outline-none"
              >
                <option value="BTC/USDT">BTC/USDT</option>
                <option value="ETH/USDT">ETH/USDT</option>
                <option value="SOL/USDT">SOL/USDT</option>
                <option value="BNB/USDT">BNB/USDT</option>
              </select>
            </div>
          </div>

          {/* Forge Action Button */}
          <button
            disabled={isStriking}
            onClick={forgeNewRobot}
            className={`w-full py-3.5 font-black uppercase tracking-widest text-xs border-2 border-black flex items-center justify-center gap-2 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] ${
              isStriking ? 'bg-yellow-400 text-black cursor-wait animate-pulse' : 'bg-yellow-300 text-black hover:bg-yellow-200 hover:translate-x-0.5 hover:translate-y-0.5'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>{isStriking ? '🔨 Идет Ковка Робота...' : `🔨 Сковать ${currentVariantData.name}`}</span>
          </button>
        </div>

      </div>

      {/* Newly Forged Alert */}
      {lastForgedBot && (
        <div className="bg-yellow-300 border-4 border-black p-5 mb-8 animate-in fade-in slide-in-from-top-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{lastForgedBot.icon}</span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 inline-block mb-1">
                  Успешно Скован в Студии!
                </span>
                <h4 className="text-lg font-black uppercase tracking-wider text-black">{lastForgedBot.name}</h4>
                <p className="font-mono text-xs text-gray-900">{lastForgedBot.strategy} — Ожидаемая доходность {lastForgedBot.pnl}</p>
              </div>
            </div>
            <button 
              onClick={() => setLastForgedBot(null)}
              className="text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 bg-white hover:bg-black hover:text-white transition-colors"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Fleet of Forged Robots */}
      <div>
        <h3 className="text-base font-black uppercase tracking-wider mb-4 border-b-2 border-black pb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" /> Скованные Роботы во Флотилии ({robots.length})
          </div>
          <span className="text-xs font-mono text-gray-600 uppercase">30 Доступных Моделей в Каталоге</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {robots.map((bot) => (
            <div key={bot.id} className="bg-gray-50 border-2 border-black p-3 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-6 h-6 flex items-center justify-center overflow-visible">
                    <RobotForgeIcon variant={bot.variantId || 'A1'} className="w-6 h-6" animated={true} />
                  </div>
                  <span className="text-[9px] font-black uppercase px-1.5 py-0.5 border border-black bg-black text-white">
                    {bot.variantId || `Скин ${bot.skin}`}
                  </span>
                </div>
                <h4 className="font-black text-xs uppercase tracking-wider truncate">{bot.name}</h4>
                <p className="font-mono text-[10px] text-gray-600 mt-0.5 truncate">{bot.strategy}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-300 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 block">PnL</span>
                  <span className="font-black text-xs text-emerald-600">{bot.pnl}</span>
                </div>

                <div className="flex gap-1">
                  <button 
                    onClick={() => toggleBotStatus(bot.id)}
                    className="p-1 border border-black bg-white hover:bg-black hover:text-white transition-colors"
                  >
                    {bot.status === 'Active' ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button 
                    onClick={() => deleteBot(bot.id)}
                    className="p-1 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
