import { useState, useEffect } from "react";
import { PieChart, Wallet, ArrowUpRight, RefreshCcw, Zap, TrendingUp, BarChart2, Shield, Clock, Star, ChevronRight } from "lucide-react";

const spheres = [
  {
    key: "all",
    label: "Все",
    color: "#111111",
    textColor: "#ffffff",
  },
  {
    key: "scalp",
    label: "Скальпинг",
    color: "#D3F55F",
    textColor: "#111111",
    icon: Zap,
  },
  {
    key: "trend",
    label: "Трендовые",
    color: "#A5F3FC",
    textColor: "#111111",
    icon: TrendingUp,
  },
  {
    key: "grid",
    label: "Сеточные",
    color: "#FDE68A",
    textColor: "#111111",
    icon: BarChart2,
  },
  {
    key: "arb",
    label: "Арбитраж",
    color: "#DDD6FE",
    textColor: "#111111",
    icon: Shield,
  },
  {
    key: "ai",
    label: "AI / Новостные",
    color: "#FCA5A5",
    textColor: "#111111",
    icon: Clock,
  },
  {
    key: "dca",
    label: "Усреднение",
    color: "#BBF7D0",
    textColor: "#111111",
    icon: Star,
  },
];

const sphereMap = Object.fromEntries(spheres.slice(1).map((s) => [s.key, s]));

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [myBots, setMyBots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("/api/bots", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          // Map DB bots to Portfolio UI format
          const formattedBots = data.map(bot => ({
            id: bot.id,
            sphere: bot.strategy === 'scalping' ? 'scalp' : 
                    bot.strategy === 'grid' ? 'grid' : 
                    bot.strategy === 'arbitrage' ? 'arb' : 'dca',
            name: bot.name,
            pool: bot.pair, // using pair as pool name for now
            invested: bot.invested,
            profit: bot.profit,
            apy: "N/A", // APY not in DB currently
            status: bot.status,
          }));
          setMyBots(formattedBots);
        }
      } catch (error) {
        console.error("Failed to fetch bots", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBots();
  }, []);

  const totalInvested = myBots.reduce((s, b) => s + b.invested, 0);
  const totalProfit = myBots.reduce((s, b) => s + b.profit, 0);

  const filteredBots = activeTab === "all" ? myBots : myBots.filter((b) => b.sphere === activeTab);

  // Distribution for bar
  const sphereTotals = spheres.slice(1).map((s) => ({
    ...s,
    total: myBots.filter((b) => b.sphere === s.key).reduce((sum, b) => sum + b.invested, 0),
  }));

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
      {/* Header */}
      <div className="border-b-2 border-black pb-4">
        <h1 className="text-3xl font-black text-black uppercase tracking-widest">Мой Портфель</h1>
        <p className="text-gray-600 mt-2 font-mono text-sm uppercase">Ваши боты по сферам и распределение средств.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black text-white border-2 border-black p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(200,200,200,1)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="w-8 h-8" />
            <h2 className="font-bold uppercase tracking-wider">Инвестировано</h2>
          </div>
          <p className="text-4xl font-black">${totalInvested.toLocaleString()}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white text-black px-3 py-1 font-bold text-sm">
            <ArrowUpRight className="w-4 h-4" />
            <span>{myBots.filter((b) => b.status === "active").length} ботов активно</span>
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <ArrowUpRight className="w-8 h-8" />
            <h2 className="font-bold uppercase tracking-wider">Прибыль</h2>
          </div>
          <p className={`text-4xl font-black ${totalProfit >= 0 ? "text-emerald-600" : "text-red-600"}`}>
            {totalProfit >= 0 ? "+" : ""}${totalProfit.toFixed(2)}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 border-2 border-black px-3 py-1 font-bold text-sm">
            <span>+{((totalProfit / totalInvested) * 100).toFixed(1)}% от вложенного</span>
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold uppercase tracking-wider flex items-center gap-2">
              <PieChart className="w-5 h-5" /> Сферы
            </h2>
            <button className="border-2 border-black p-2 hover:bg-black hover:text-white transition-colors">
              <RefreshCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Distribution bar */}
          <div className="flex h-6 w-full border-2 border-black mb-3 overflow-hidden">
            {sphereTotals.map((s) => (
              <div
                key={s.key}
                style={{ width: `${(s.total / totalInvested) * 100}%`, background: s.color }}
                title={`${s.label}: $${s.total}`}
                className="h-full transition-all duration-500"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {sphereTotals.map((s) => (
              <div key={s.key} className="flex items-center gap-1 font-mono text-xs font-bold">
                <div className="w-2.5 h-2.5 border border-black flex-shrink-0" style={{ background: s.color }} />
                {s.label}: {Math.round((s.total / totalInvested) * 100)}%
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sphere tabs */}
      <div className="flex flex-wrap gap-2">
        {spheres.map((s) => {
          const isActive = activeTab === s.key;
          const Ico = s.icon;
          return (
            <button
              key={s.key}
              onClick={() => setActiveTab(s.key)}
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black font-bold uppercase text-xs tracking-widest transition-all duration-150 ${
                isActive ? "bg-black text-white shadow-[3px_3px_0_0_rgba(100,100,100,1)]" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {Ico && (
                <span
                  className="w-4 h-4 flex items-center justify-center rounded-sm"
                  style={isActive ? {} : { background: s.color }}
                >
                  <Ico className="w-3 h-3" style={isActive ? { color: "white" } : { color: "#111" }} />
                </span>
              )}
              {s.label}
              <span className={`text-xs font-black ml-1 ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                ({(s.key === "all" ? myBots : myBots.filter((b) => b.sphere === s.key)).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Bots table */}
      <div className="bg-white border-2 border-black overflow-hidden">
        <table className="w-full text-left font-mono">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 font-bold uppercase tracking-wider">Сфера</th>
              <th className="p-4 font-bold uppercase tracking-wider">Бот</th>
              <th className="p-4 font-bold uppercase tracking-wider">Пул</th>
              <th className="p-4 font-bold uppercase tracking-wider">Вложено</th>
              <th className="p-4 font-bold uppercase tracking-wider">Прибыль</th>
              <th className="p-4 font-bold uppercase tracking-wider">APY</th>
              <th className="p-4 font-bold uppercase tracking-wider">Статус</th>
              <th className="p-4 font-bold uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {filteredBots.map((bot, i) => {
              const sphere = sphereMap[bot.sphere];
              const Ico = sphere?.icon;
              return (
                <tr key={i} className="border-b-2 border-black hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2 py-1 border border-black text-xs font-black uppercase"
                      style={{ background: sphere?.color }}
                    >
                      {Ico && <Ico className="w-3 h-3" />}
                      {sphere?.label}
                    </span>
                  </td>
                  <td className="p-4 font-black text-base">{bot.name}</td>
                  <td className="p-4 text-sm">{bot.pool}</td>
                  <td className="p-4 font-bold">${bot.invested.toLocaleString()}</td>
                  <td className={`p-4 font-black ${bot.profit >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                    {bot.profit >= 0 ? "+" : ""}${bot.profit.toFixed(2)}
                  </td>
                  <td className="p-4 font-bold">{bot.apy}</td>
                  <td className="p-4">
                    <span
                      className={`text-xs font-black uppercase px-2 py-1 border-2 ${
                        bot.status === "active"
                          ? "border-emerald-600 text-emerald-600"
                          : "border-gray-400 text-gray-400"
                      }`}
                    >
                      {bot.status === "active" ? "● Активен" : "⏸ Пауза"}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="flex items-center gap-1 border-2 border-black bg-white hover:bg-black hover:text-white px-3 py-1 text-xs font-bold uppercase transition-colors">
                      Детали <ChevronRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              );
            })}
            {filteredBots.length === 0 && (
              <tr>
                <td colSpan={8} className="p-8 text-center text-gray-400 font-mono">
                  Нет ботов в этой категории
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Sphere breakdown cards */}
      {activeTab === "all" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sphereTotals.filter((s) => s.total > 0).map((s) => {
            const Ico = s.icon;
            const sphereBots = myBots.filter((b) => b.sphere === s.key);
            const sphereProfit = sphereBots.reduce((sum, b) => sum + b.profit, 0);
            return (
              <div
                key={s.key}
                className="border-2 border-black bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
                onClick={() => setActiveTab(s.key)}
              >
                <div className="p-3 border-b-2 border-black flex items-center gap-2" style={{ background: s.color }}>
                  {Ico && <Ico className="w-4 h-4" />}
                  <span className="font-black uppercase text-sm tracking-widest">{s.label}</span>
                  <span className="ml-auto text-xs font-bold opacity-60">{sphereBots.length} бот(а)</span>
                </div>
                <div className="p-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-0.5">Вложено</p>
                    <p className="font-black">${s.total.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-0.5">Прибыль</p>
                    <p className={`font-black ${sphereProfit >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                      {sphereProfit >= 0 ? "+" : ""}${sphereProfit.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase mb-0.5">Доля портфеля</p>
                    <p className="font-black">{Math.round((s.total / totalInvested) * 100)}%</p>
                  </div>
                  <div className="flex items-end">
                    <button className="text-xs font-bold uppercase border-b-2 border-black hover:text-gray-500 transition-colors">
                      Смотреть →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
