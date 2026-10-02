import { useState, useEffect } from 'react';
import RobotForgeIcon from './RobotForgeIcon';
import { Bot, Flame, Play, Pause, Trash2, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ForgerRobotStudio() {
  const [isStriking, setIsStriking] = useState(false);
  const [strikePhase, setStrikePhase] = useState(0); // 0, 1, 2, 3
  const [sparks, setSparks] = useState([]);
  const [lastForgedBot, setLastForgedBot] = useState(null);
  const [robots, setRobots] = useState([
    { id: 1, name: "AlphaGrid Bot v4.2", strategy: "Grid Spot BTC/USDT", status: "Active", pnl: "+18.4%", trades: 142, icon: "🤖" },
    { id: 2, name: "Quantum HFT Scalper", strategy: "Futures Scalping ETH/USDT", status: "Active", pnl: "+24.8%", trades: 310, icon: "⚡" },
    { id: 3, name: "Lumen Trend Follower", strategy: "DCA Accumulator SOL/USDT", status: "Active", pnl: "+12.1%", trades: 89, icon: "🔥" }
  ]);

  const [botNameInput, setBotNameInput] = useState("");
  const [strategySelect, setStrategySelect] = useState("Grid Spot");
  const [pairSelect, setPairSelect] = useState("BTC/USDT");

  const generateSparkParticles = () => {
    const newSparks = Array.from({ length: 12 }).map((_, i) => ({
      id: Math.random(),
      angle: (i * 30) + (Math.random() * 15 - 7.5),
      dist: 60 + Math.random() * 80,
      size: Math.random() > 0.5 ? 'text-2xl' : 'text-xl',
      symbol: ["⚡", "✨", "💥", "🔥", "⭐"][Math.floor(Math.random() * 5)]
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

      const name = botNameInput.trim() || `ForgeBot #${Math.floor(100 + Math.random() * 900)}`;
      const icons = ["🤖", "⚡", "🔥", "🛡️", "🚀", "⚙️"];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];

      const newBot = {
        id: Date.now(),
        name: name,
        strategy: `${strategySelect} ${pairSelect}`,
        status: "Active",
        pnl: "+0.0%",
        trades: 0,
        icon: randomIcon
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

  return (
    <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-black pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <RobotForgeIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-black">Робот-Кузнец (Forge Bot Animator)</h2>
          </div>
          <p className="text-gray-600 font-mono text-sm mt-2">
            Анимированная кузница роботов. Молот робота бьет по наковальне, выбивает искры и кует новых автономных AI-ботов!
          </p>
        </div>

        <div className="bg-black text-white px-4 py-2 border-2 border-black font-mono text-xs uppercase font-bold flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          Сковано ботов: {robots.length}
        </div>
      </div>

      {/* Forger Anvil Interactive Animated Stage */}
      <div className="bg-gray-950 border-4 border-black p-8 rounded-xl text-white mb-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
        
        {/* Animated Forger Graphic Stage */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[260px] w-full">
          
          {/* Molten Glow Backdrop */}
          <div className={`absolute w-48 h-48 rounded-full transition-all duration-300 pointer-events-none ${
            isStriking ? 'bg-yellow-500/40 blur-2xl scale-125' : 'bg-orange-600/10 blur-xl scale-100'
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
                  transition: 'all 0.4s cubic-bezier(0.1, 0.8, 0.3, 1)',
                  opacity: isStriking ? 1 : 0
                }}
                className={`absolute ${s.size} pointer-events-none animate-ping z-20`}
              >
                {s.symbol}
              </span>
            );
          })}

          {/* Hammering Robot Visual Animation */}
          <div className={`relative transition-all duration-200 z-10 ${
            strikePhase === 1 ? 'scale-125 rotate-6 translate-y-2' :
            strikePhase === 2 ? 'scale-125 -rotate-6 translate-y-3' :
            strikePhase === 3 ? 'scale-130 rotate-12 translate-y-4' : 'scale-100 rotate-0'
          }`}>
            <RobotForgeIcon className={`w-40 h-40 transition-colors duration-200 ${
              isStriking ? 'text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]' : 'text-white'
            }`} isDark={true} />
          </div>

          {/* Impact Status Indicator */}
          <div className="mt-4 font-mono text-center z-10">
            {isStriking ? (
              <div className="flex flex-col items-center gap-1">
                <span className="text-yellow-400 font-black text-xl uppercase tracking-widest animate-pulse">
                  {strikePhase === 1 && "🔨 УДАР #1: КОВКА КОРПУСА! 💥"}
                  {strikePhase === 2 && "🔨 УДАР #2: УСТАНОВКА ПРОЦЕССОРА AI! ⚡"}
                  {strikePhase === 3 && "💥 УДАР #3: ЗАПУСК ИСПОЛНЕНИЯ СЕТКИ! ✨"}
                </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Температура наковальни: 1450°C</span>
              </div>
            ) : (
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" /> Робот-Кузнец готов к ковке новых алгоритмов
              </span>
            )}
          </div>
        </div>

        {/* Forge Controls */}
        <div className="w-full md:w-96 bg-gray-900 border-2 border-gray-700 p-6 rounded-lg space-y-4 shadow-xl z-10">
          <h3 className="font-black uppercase tracking-wider text-lg text-white flex items-center gap-2 border-b border-gray-800 pb-3">
            <Flame className="w-5 h-5 text-yellow-400 animate-pulse" /> Настройки Робота-Кузнеца
          </h3>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Имя Нового Робота</label>
            <input 
              type="text" 
              value={botNameInput}
              onChange={(e) => setBotNameInput(e.target.value)}
              placeholder="e.g. Forged Bot Alpha #1"
              className="w-full bg-black border-2 border-gray-700 px-3 py-2 text-sm font-mono text-white outline-none focus:border-yellow-400 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Стратегия</label>
              <select 
                value={strategySelect}
                onChange={(e) => setStrategySelect(e.target.value)}
                className="w-full bg-black border-2 border-gray-700 px-2 py-2 text-xs font-mono text-white outline-none"
              >
                <option value="Grid Spot">Grid Spot</option>
                <option value="Futures Scalp">Futures Scalp</option>
                <option value="DCA Accumulator">DCA Accumulator</option>
                <option value="AI Signal Follower">AI Signal Follower</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Торговая Пара</label>
              <select 
                value={pairSelect}
                onChange={(e) => setPairSelect(e.target.value)}
                className="w-full bg-black border-2 border-gray-700 px-2 py-2 text-xs font-mono text-white outline-none"
              >
                <option value="BTC/USDT">BTC/USDT</option>
                <option value="ETH/USDT">ETH/USDT</option>
                <option value="SOL/USDT">SOL/USDT</option>
                <option value="BNB/USDT">BNB/USDT</option>
              </select>
            </div>
          </div>

          <button
            disabled={isStriking}
            onClick={forgeNewRobot}
            className={`w-full py-4 font-black uppercase tracking-widest text-sm border-2 border-black flex items-center justify-center gap-2 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] ${
              isStriking ? 'bg-yellow-500 text-black cursor-wait animate-pulse' : 'bg-yellow-400 text-black hover:bg-yellow-300 hover:translate-x-0.5 hover:translate-y-0.5'
            }`}
          >
            <Flame className="w-5 h-5" />
            <span>{isStriking ? '🔨 Ковка в процессе...' : '🔨 Сковать Нового Бота'}</span>
          </button>
        </div>

      </div>

      {/* Newly Forged Robot Alert Card */}
      {lastForgedBot && (
        <div className="bg-yellow-300 border-4 border-black p-6 mb-8 animate-in fade-in slide-in-from-top-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{lastForgedBot.icon}</span>
              <div>
                <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 inline-block mb-1">Успешно Скован!</span>
                <h4 className="text-xl font-black uppercase tracking-wider text-black">{lastForgedBot.name}</h4>
                <p className="font-mono text-xs text-gray-800">{lastForgedBot.strategy} — Подключен к HFT исполнению</p>
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

      {/* List of Forged Robots */}
      <div>
        <h3 className="text-lg font-black uppercase tracking-wider mb-4 border-b-2 border-black pb-2 flex items-center gap-2">
          <Bot className="w-5 h-5" /> Скованные Роботы в Флотилии ({robots.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {robots.map((bot) => (
            <div key={bot.id} className="bg-gray-50 border-2 border-black p-4 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{bot.icon}</span>
                  <span className={`text-xs font-black uppercase px-2 py-0.5 border border-black ${bot.status === 'Active' ? 'bg-emerald-300 text-black' : 'bg-gray-200 text-gray-700'}`}>
                    {bot.status}
                  </span>
                </div>
                <h4 className="font-black text-base uppercase tracking-wider">{bot.name}</h4>
                <p className="font-mono text-xs text-gray-600 mt-1">{bot.strategy}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-300 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Доходность</span>
                  <span className="font-black text-sm text-emerald-600">{bot.pnl}</span>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleBotStatus(bot.id)}
                    className="p-1.5 border border-black bg-white hover:bg-black hover:text-white transition-colors"
                    title={bot.status === 'Active' ? 'Приостановить' : 'Запустить'}
                  >
                    {bot.status === 'Active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => deleteBot(bot.id)}
                    className="p-1.5 border border-black bg-white hover:bg-red-600 hover:text-white transition-colors"
                    title="Удалить бота"
                  >
                    <Trash2 className="w-4 h-4" />
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
