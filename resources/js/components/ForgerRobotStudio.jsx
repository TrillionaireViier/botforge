import { useState, useEffect } from 'react';
import RobotForgeIcon from './RobotForgeIcon';
import { Bot, Flame, Play, Pause, Trash2, Zap, Sparkles, CheckCircle2, Sliders, BarChart3, Shield, Award, Cpu } from 'lucide-react';

export default function ForgerRobotStudio({ autoAnimate = false }) {
  const [activeVariant, setActiveVariant] = useState('A'); // "A" | "B" | "C" | "D" | "E"
  const [isStriking, setIsStriking] = useState(false);
  const [strikePhase, setStrikePhase] = useState(0); // 0, 1, 2, 3
  const [sparks, setSparks] = useState([]);
  const [lastForgedBot, setLastForgedBot] = useState(null);
  
  // A/B Test Stats per variant
  const [abStats, setAbStats] = useState({
    A: { name: "CyberForge Titan", conversion: "18.4%", speed: "920ms", forgedCount: 1420, rating: "4.9★", themeBg: "bg-yellow-300 text-black border-black" },
    B: { name: "Quantum Plasma", conversion: "22.8%", speed: "650ms", forgedCount: 1980, rating: "4.95★", themeBg: "bg-cyan-400 text-black border-cyan-500" },
    C: { name: "Inferno Magma", conversion: "19.7%", speed: "810ms", forgedCount: 1650, rating: "4.88★", themeBg: "bg-red-500 text-white border-red-600" },
    D: { name: "Matrix Sentinel", conversion: "24.1%", speed: "590ms", forgedCount: 2310, rating: "4.98★", themeBg: "bg-emerald-400 text-black border-emerald-500" },
    E: { name: "Golden Sovereign", conversion: "26.5%", speed: "480ms", forgedCount: 3100, rating: "5.0★", themeBg: "bg-amber-400 text-black border-amber-500" },
  });

  const [robots, setRobots] = useState([
    { id: 1, name: "AlphaGrid Bot v4.2", strategy: "Grid Spot BTC/USDT", status: "Active", pnl: "+18.4%", trades: 142, icon: "🤖", skin: "A" },
    { id: 2, name: "Quantum HFT Scalper", strategy: "Futures Scalping ETH/USDT", status: "Active", pnl: "+24.8%", trades: 310, icon: "⚡", skin: "B" },
    { id: 3, name: "Lumen Trend Follower", strategy: "DCA Accumulator SOL/USDT", status: "Active", pnl: "+12.1%", trades: 89, icon: "🔥", skin: "C" },
    { id: 4, name: "Matrix Pulse Scalper", strategy: "HFT Micro-Grid SOL/USDT", status: "Active", pnl: "+31.2%", trades: 512, icon: "🟢", skin: "D" },
    { id: 5, name: "Imperial Sovereign HFT", strategy: "Arbitrage VIP Gold BTC/USDT", status: "Active", pnl: "+42.0%", trades: 890, icon: "👑", skin: "E" }
  ]);

  const [botNameInput, setBotNameInput] = useState("");
  const [strategySelect, setStrategySelect] = useState("Grid Spot");
  const [pairSelect, setPairSelect] = useState("BTC/USDT");

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
  }, [autoAnimate, activeVariant]);

  const generateSparkParticles = () => {
    const symbolMap = {
      A: ["⚡", "✨", "💥", "🔥", "⭐"],
      B: ["⚡", "💎", "🌐", "🔮", "✨"],
      C: ["🔥", "💥", "🌋", "☄️", "⚡"],
      D: ["🟢", "⚡", "💻", "❇️", "✳️"],
      E: ["👑", "⭐", "💰", "✨", "🏆"]
    };

    const symbols = symbolMap[activeVariant] || symbolMap.A;

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

      const variantIcons = { A: "🤖", B: "⚡", C: "🔥", D: "🟢", E: "👑" };
      const name = botNameInput.trim() || `${abStats[activeVariant].name} #${Math.floor(100 + Math.random() * 900)}`;

      const newBot = {
        id: Date.now(),
        name: name,
        strategy: `${strategySelect} ${pairSelect}`,
        status: "Active",
        pnl: "+0.0%",
        trades: 0,
        icon: variantIcons[activeVariant] || "🤖",
        skin: activeVariant
      };

      setRobots([newBot, ...robots]);
      setLastForgedBot(newBot);
      setBotNameInput("");

      // Increment stats for variant
      setAbStats(prev => ({
        ...prev,
        [activeVariant]: {
          ...prev[activeVariant],
          forgedCount: prev[activeVariant].forgedCount + 1
        }
      }));
    }, 1400);
  };

  const toggleBotStatus = (id) => {
    setRobots(robots.map(r => r.id === id ? { ...r, status: r.status === 'Active' ? 'Paused' : 'Active' } : r));
  };

  const deleteBot = (id) => {
    setRobots(robots.filter(r => r.id !== id));
  };

  const currentStat = abStats[activeVariant];

  return (
    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      
      {/* A/B Testing Header Switcher Bar */}
      <div className="border-b-4 border-black pb-6 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2 border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                <RobotForgeIcon className="w-8 h-8" variant={activeVariant} animated={true} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black uppercase tracking-widest text-black">A/B Сравнительный Стенд Роботов-Кузнецов</h2>
                  <span className="bg-black text-yellow-300 font-mono text-[10px] font-bold px-2 py-0.5 border border-black uppercase tracking-widest">
                    5 Скинов / Версий
                  </span>
                </div>
                <p className="text-gray-600 font-mono text-xs mt-1">
                  Переключайтесь между 5 уникальными версиями кузнеца. Каждая модель имеет свою анимацию, визуальные эффекты и показатели конверсии!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black text-white px-4 py-2 border-2 border-black font-mono text-xs uppercase font-bold flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>A/B Монитор: <strong className="text-yellow-300">{currentStat.name}</strong></span>
          </div>
        </div>

        {/* 5 A/B Variant Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Object.keys(abStats).map((variantKey) => {
            const st = abStats[variantKey];
            const isSelected = activeVariant === variantKey;
            return (
              <button
                key={variantKey}
                onClick={() => setActiveVariant(variantKey)}
                className={`p-3 border-2 font-mono text-left transition-all relative flex flex-col justify-between ${
                  isSelected 
                    ? `${st.themeBg} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-0.5 translate-y-0.5 scale-102 z-10` 
                    : 'bg-gray-100 text-gray-800 border-black hover:bg-gray-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-black text-xs uppercase px-1.5 py-0.5 bg-black text-white">Версия {variantKey}</span>
                    <span className="text-[10px] font-bold">{st.rating}</span>
                  </div>
                  <div className="font-black text-sm uppercase truncate mt-1">{st.name}</div>
                </div>

                <div className="mt-3 pt-2 border-t border-black/20 text-[10px] font-bold flex justify-between items-center">
                  <span>Конверсия: <strong className="text-emerald-700">{st.conversion}</strong></span>
                  <span>{st.forgedCount} ботов</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Animated Stage for Selected Variant */}
      <div className="bg-gray-950 border-4 border-black p-6 md:p-8 rounded-xl text-white mb-8 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]">
        
        {/* Stage Backdrop Effect */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[280px] w-full">
          
          {/* Variant-specific Glow backdrop */}
          <div className={`absolute w-56 h-56 rounded-full transition-all duration-300 pointer-events-none ${
            isStriking ? 'scale-130 blur-3xl opacity-70' : 'scale-100 blur-2xl opacity-30'
          } ${
            activeVariant === 'A' ? 'bg-yellow-500' :
            activeVariant === 'B' ? 'bg-cyan-400' :
            activeVariant === 'C' ? 'bg-red-500' :
            activeVariant === 'D' ? 'bg-emerald-400' : 'bg-amber-400'
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
            }`} isDark={true} variant={activeVariant} animated={true} />
          </div>

          {/* Impact Status Indicator */}
          <div className="mt-4 font-mono text-center z-10">
            {isStriking ? (
              <div className="flex flex-col items-center gap-1">
                <span className="text-yellow-300 font-black text-lg md:text-xl uppercase tracking-widest animate-pulse">
                  {strikePhase === 1 && `🔨 ${currentStat.name} — УДАР #1: КОВКА ЯДРА! 💥`}
                  {strikePhase === 2 && `⚡ ${currentStat.name} — УДАР #2: ПРОШИВКА СЕТКИ ИИ! ✨`}
                  {strikePhase === 3 && `🏆 ${currentStat.name} — УДАР #3: ЗАПУСК ИСПОЛНЕНИЯ! 🚀`}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Время скола задержки: {currentStat.speed} | Версия {activeVariant}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-gray-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Скин Версии {activeVariant}: <strong className="text-yellow-300">{currentStat.name}</strong> готов к ковке</span>
              </div>
            )}
          </div>
        </div>

        {/* Controls and A/B Variant Details */}
        <div className="w-full lg:w-96 bg-gray-900 border-2 border-gray-700 p-6 rounded-lg space-y-4 shadow-xl z-10">
          <div className="flex items-center justify-between border-b border-gray-800 pb-3">
            <h3 className="font-black uppercase tracking-wider text-sm text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-yellow-400 animate-pulse" /> Параметры Версии {activeVariant}
            </h3>
            <span className="text-[10px] font-mono font-bold bg-gray-800 text-yellow-300 px-2 py-0.5 border border-gray-700">
              {currentStat.rating}
            </span>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Имя Робота</label>
            <input 
              type="text" 
              value={botNameInput}
              onChange={(e) => setBotNameInput(e.target.value)}
              placeholder={`e.g. ${currentStat.name} Bot #1`}
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
            <span>{isStriking ? '🔨 Идет Ковка Робота...' : `🔨 Сковать Робота (Скин ${activeVariant})`}</span>
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
                  Скован в режиме Версии {lastForgedBot.skin}!
                </span>
                <h4 className="text-lg font-black uppercase tracking-wider text-black">{lastForgedBot.name}</h4>
                <p className="font-mono text-xs text-gray-900">{lastForgedBot.strategy} — Подключен к HFT исполнению</p>
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
            <Bot className="w-5 h-5" /> Скованные Роботы ({robots.length})
          </div>
          <span className="text-xs font-mono text-gray-600 uppercase">Скины A/B/C/D/E в действии</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {robots.map((bot) => (
            <div key={bot.id} className="bg-gray-50 border-2 border-black p-3 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{bot.icon}</span>
                  <span className="text-[9px] font-black uppercase px-1.5 py-0.5 border border-black bg-black text-white">
                    Скин {bot.skin}
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
