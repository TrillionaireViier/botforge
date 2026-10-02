import { useState } from 'react';
import RobotForgeIcon from './RobotForgeIcon';
import { Bot, Flame, Plus, Play, Pause, Trash2 } from 'lucide-react';

export default function ForgerRobotStudio() {
  const [isStriking, setIsStriking] = useState(false);
  const [sparks, setSparks] = useState(false);
  const [robots, setRobots] = useState([
    { id: 1, name: "AlphaGrid Bot v4.2", strategy: "Grid Spot BTC/USDT", status: "Active", pnl: "+18.4%", trades: 142, icon: "🤖" },
    { id: 2, name: "Quantum HFT Scalper", strategy: "Futures Scalping ETH/USDT", status: "Active", pnl: "+24.8%", trades: 310, icon: "⚡" },
    { id: 3, name: "Lumen Trend Follower", strategy: "DCA Accumulator SOL/USDT", status: "Active", pnl: "+12.1%", trades: 89, icon: "🔥" }
  ]);

  const [botNameInput, setBotNameInput] = useState("");
  const [strategySelect, setStrategySelect] = useState("Grid Spot");
  const [pairSelect, setPairSelect] = useState("BTC/USDT");

  const forgeNewRobot = () => {
    setIsStriking(true);
    setSparks(true);

    setTimeout(() => {
      setSparks(false);
    }, 800);

    setTimeout(() => {
      setIsStriking(false);
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
      setBotNameInput("");
    }, 1200);
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
            <div className="p-2 border-2 border-black bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <RobotForgeIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-black">Робот-Кузнец (Robot Forger)</h2>
          </div>
          <p className="text-gray-600 font-mono text-sm mt-2">
            Кузница AI-ботов на наковальне. Нажмите "Сковать Бота" для запуска анимации молота и генерации нового робота!
          </p>
        </div>

        <div className="bg-black text-white px-4 py-2 border-2 border-black font-mono text-xs uppercase font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Скованно ботов в кузнице: {robots.length}
        </div>
      </div>

      {/* Forger Anvil Interactive Stage */}
      <div className="bg-gray-900 border-4 border-black p-8 rounded-xl text-white mb-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Animated Forger Graphic Stage */}
        <div className="flex-1 flex flex-col items-center justify-center relative min-h-[220px]">
          
          {/* Spark Particles Effect */}
          {sparks && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-yellow-400/20 blur-xl animate-ping"></div>
              <span className="absolute -top-4 text-4xl animate-bounce">⚡</span>
              <span className="absolute top-2 left-10 text-3xl animate-ping">💥</span>
              <span className="absolute top-4 right-10 text-3xl animate-ping">✨</span>
              <span className="absolute bottom-4 left-16 text-3xl animate-ping">🔥</span>
            </div>
          )}

          {/* Robot Anvil Visual */}
          <div className={`transition-transform duration-300 ${isStriking ? 'scale-110 rotate-2' : ''}`}>
            <RobotForgeIcon className={`w-36 h-36 ${isStriking ? 'text-yellow-400 animate-bounce' : 'text-white'}`} isDark={true} />
          </div>

          <div className="mt-4 font-mono text-center">
            {isStriking ? (
              <span className="text-yellow-400 font-black text-lg uppercase tracking-widest animate-pulse">
                🔨 КУЕМ НОВОГО AI БОТА НА НАКОВАЛЬНЕ... 💥
              </span>
            ) : (
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                Кузнец ready to forge new trading bots
              </span>
            )}
          </div>
        </div>

        {/* Forge Controls */}
        <div className="w-full md:w-96 bg-gray-800 border-2 border-gray-700 p-6 rounded-lg space-y-4">
          <h3 className="font-black uppercase tracking-wider text-lg text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-yellow-400" /> Параметры Кузницы
          </h3>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Имя Нового Робота</label>
            <input 
              type="text" 
              value={botNameInput}
              onChange={(e) => setBotNameInput(e.target.value)}
              placeholder="e.g. Forged Bot Alpha #1"
              className="w-full bg-gray-900 border-2 border-gray-600 px-3 py-2 text-sm font-mono text-white outline-none focus:border-yellow-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Стратегия</label>
              <select 
                value={strategySelect}
                onChange={(e) => setStrategySelect(e.target.value)}
                className="w-full bg-gray-900 border-2 border-gray-600 px-2 py-2 text-xs font-mono text-white outline-none"
              >
                <option value="Grid Spot">Grid Spot</option>
                <option value="Futures Scalp">Futures Scalp</option>
                <option value="DCA Accumulator">DCA Accumulator</option>
                <option value="AI Signal Follower">AI Signal Follower</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Пара</label>
              <select 
                value={pairSelect}
                onChange={(e) => setPairSelect(e.target.value)}
                className="w-full bg-gray-900 border-2 border-gray-600 px-2 py-2 text-xs font-mono text-white outline-none"
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
              isStriking ? 'bg-yellow-500 text-black cursor-wait' : 'bg-yellow-400 text-black hover:bg-yellow-300 hover:translate-x-0.5 hover:translate-y-0.5'
            }`}
          >
            <Flame className="w-5 h-5" />
            <span>{isStriking ? 'Ковка в процессе...' : '🔨 Сковать Нового Бота'}</span>
          </button>
        </div>

      </div>

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
