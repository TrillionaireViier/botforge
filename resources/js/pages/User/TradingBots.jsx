import { useState } from "react";
import { Bot, Zap, Shield, TrendingUp, Clock, BarChart2, Star, Users, DollarSign, Lock, Unlock, ChevronDown, ChevronUp } from "lucide-react";

const bots = [
  {
    name: "ScalpBot Pro",
    tag: "Скальпинг",
    color: "#D3F55F",
    icon: Zap,
    desc: "Высокочастотный бот для краткосрочных сделок. Открывает до 200 позиций в сутки на минутных свечах BTC/ETH.",
    stats: { winrate: "71%", avg_profit: "+0.3%", trades_day: "200", drawdown: "4%" },
    features: ["BTC, ETH, SOL", "Bybit, Binance", "Минутный таймфрейм", "Автостоп-лосс"],
    badge: "🔥 Популярный",
    pools: [
      { name: "Консервативный", apy: "18% годовых", min: "$100", total: "$142 500", filled: 71, locked: false },
      { name: "Агрессивный", apy: "34% годовых", min: "$500", total: "$89 000", filled: 44, locked: false },
      { name: "VIP", apy: "52% годовых", min: "$5 000", total: "$250 000", filled: 90, locked: true },
    ],
  },
  {
    name: "TrendRider",
    tag: "Трендовый",
    color: "#A5F3FC",
    icon: TrendingUp,
    desc: "Торгует по направлению тренда на 4H и дневных графиках. Оптимален для спокойного рынка с чётким направлением.",
    stats: { winrate: "64%", avg_profit: "+2.1%", trades_day: "8", drawdown: "7%" },
    features: ["Топ-20 альткоинов", "Binance Futures", "4H / 1D таймфрейм", "Трейлинг-стоп"],
    badge: "⭐ Рекомендован",
    pools: [
      { name: "Стандартный", apy: "22% годовых", min: "$200", total: "$310 000", filled: 55, locked: false },
      { name: "Усиленный", apy: "41% годовых", min: "$1 000", total: "$500 000", filled: 82, locked: false },
    ],
  },
  {
    name: "GridMaster",
    tag: "Сеточный",
    color: "#FDE68A",
    icon: BarChart2,
    desc: "Сеточная стратегия в боковом рынке. Зарабатывает на волатильности без прогнозирования направления.",
    stats: { winrate: "83%", avg_profit: "+0.8%", trades_day: "40", drawdown: "2%" },
    features: ["Стейблкоин-пары", "OKX, Bybit", "Любой таймфрейм", "Без стоп-лосса"],
    badge: "🛡️ Низкий риск",
    pools: [
      { name: "USDT Сетка", apy: "14% годовых", min: "$50", total: "$780 000", filled: 93, locked: false },
      { name: "BTC Сетка", apy: "28% годовых", min: "$300", total: "$420 000", filled: 67, locked: false },
      { name: "Институционал", apy: "19% годовых", min: "$10 000", total: "$2 000 000", filled: 38, locked: true },
    ],
  },
  {
    name: "ArbitrageX",
    tag: "Арбитраж",
    color: "#DDD6FE",
    icon: Shield,
    desc: "Межбиржевой арбитраж. Использует разницу цен между биржами для безрискового заработка.",
    stats: { winrate: "96%", avg_profit: "+0.15%", trades_day: "120", drawdown: "0.5%" },
    features: ["BTC, ETH, USDT", "3+ биржи", "Секундный цикл", "Автовывод"],
    badge: "💎 Премиум",
    pools: [
      { name: "Арб Базовый", apy: "16% годовых", min: "$500", total: "$1 200 000", filled: 88, locked: false },
      { name: "Арб Макс", apy: "24% годовых", min: "$5 000", total: "$3 000 000", filled: 95, locked: true },
    ],
  },
  {
    name: "NewsTrader AI",
    tag: "Новостной",
    color: "#FCA5A5",
    icon: Clock,
    desc: "ИИ-бот анализирует новости и твиты в реальном времени. Реагирует на события раньше рынка.",
    stats: { winrate: "58%", avg_profit: "+3.5%", trades_day: "5", drawdown: "12%" },
    features: ["Все пары", "Все биржи", "Событийный", "GPT-анализ"],
    badge: "🤖 AI",
    pools: [
      { name: "AI Новости", apy: "45% годовых", min: "$250", total: "$95 000", filled: 33, locked: false },
    ],
  },
  {
    name: "DCA Bot",
    tag: "Усреднение",
    color: "#BBF7D0",
    icon: Star,
    desc: "Классическая стратегия усреднения (DCA). Идеален для долгосрочного накопления BTC.",
    stats: { winrate: "—", avg_profit: "+18%/год", trades_day: "1–3", drawdown: "30%" },
    features: ["BTC, ETH", "Любая биржа", "Дневной / недельный", "Для новичков"],
    badge: "🟢 Для новичков",
    pools: [
      { name: "BTC Накопление", apy: "18% годовых", min: "$25", total: "$560 000", filled: 60, locked: false },
      { name: "ETH Накопление", apy: "21% годовых", min: "$25", total: "$340 000", filled: 48, locked: false },
    ],
  },
  {
    name: "Liquidity Sweep + FVG Reversal",
    tag: "Ликвидность / разворот",
    color: "#BAE6FD",
    icon: TrendingUp,
    desc: "Учебная стратегия для криптодеривативов: 1H контекст, sweep локальной ликвидности, MSS и ретест FVG на 15m/5m. Это описание правил, не действующий автоматический исполнитель ордеров.",
    stats: { winrate: "—", avg_profit: "—", trades_day: "—", drawdown: "—" },
    features: ["BTC, ETH и ликвидные альткоины", "1H контекст · 15m/5m исполнение", "Sweep → MSS → FVG", "Риск на сделку: 0,5–1%"],
    badge: "📘 Учебная стратегия",
    pools: [],
  },
];

function PoolBar({ filled }) {
  const color = filled >= 90 ? "#ef4444" : filled >= 70 ? "#f59e0b" : "#10b981";
  return (
    <div className="mt-1 h-3 w-full border border-black bg-gray-200">
      <div className="h-full transition-all duration-500" style={{ width: `${filled}%`, background: color }} />
    </div>
  );
}

export default function TradingBots() {
  const [expanded, setExpanded] = useState({});
  const toggle = (key) => setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mb-8">
        <h1 className="flex items-center gap-3 text-3xl font-black uppercase tracking-widest">
          <Bot className="h-8 w-8" /> Торговые Боты
        </h1>
        <p className="mt-2 font-mono text-sm text-gray-500">Выберите стратегию и пул для инвестиций</p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {bots.map((bot) => {
          const isOpen = expanded[bot.name];
          return (
            <div key={bot.name} className="flex flex-col border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between border-b-2 border-black p-4" style={{ background: bot.color }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-black">
                    <bot.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-base font-black uppercase leading-none">{bot.name}</h2>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">{bot.tag}</span>
                  </div>
                </div>
                <span className="whitespace-nowrap bg-black px-2 py-1 text-xs font-bold text-white">{bot.badge}</span>
              </div>

              <div className="grid grid-cols-4 border-b-2 border-black">
                {[['Винрейт', bot.stats.winrate], ['Прибыль', bot.stats.avg_profit], ['Сделок/д', bot.stats.trades_day], ['Просадка', bot.stats.drawdown]].map(([label, value]) => (
                  <div key={label} className="border-r border-black p-3 text-center last:border-r-0">
                    <p className="text-xs uppercase text-gray-400">{label}</p>
                    <p className="text-sm font-black">{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex-1 p-4">
                <button
                  onClick={() => toggle(bot.name)}
                  aria-expanded={Boolean(isOpen)}
                  className="mb-3 flex w-full items-center justify-between border-2 border-black bg-gray-50 px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    {bot.pools.length > 0 ? <><DollarSign className="h-4 w-4" /> Пулы для инвестиций ({bot.pools.length})</> : "Правила стратегии"}
                  </span>
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                {isOpen && (
                  <div className="animate-in fade-in space-y-3 duration-200">
                    <div className="border-2 border-black bg-gray-50 p-3">
                      <p className="mb-2 font-mono text-sm leading-6 text-gray-700">{bot.desc}</p>
                      <ul className="space-y-1">
                        {bot.features.map((feature) => <li key={feature} className="font-mono text-xs text-gray-600">• {feature}</li>)}
                      </ul>
                    </div>

                    {bot.pools.length > 0 ? bot.pools.map((pool) => (
                      <div key={pool.name} className={`border-2 border-black p-3 ${pool.locked ? "bg-gray-100" : "bg-white"}`}>
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {pool.locked ? <Lock className="h-4 w-4 text-gray-400" /> : <Unlock className="h-4 w-4 text-emerald-500" />}
                            <span className="text-sm font-black uppercase">{pool.name}</span>
                          </div>
                          <span className="bg-black px-2 py-0.5 text-xs font-bold text-white">{pool.apy}</span>
                        </div>
                        <div className="mb-2 grid grid-cols-3 gap-2 font-mono text-xs">
                          <div><span className="text-gray-500">Мин. вклад</span><br /><b>{pool.min}</b></div>
                          <div><span className="text-gray-500">Объём пула</span><br /><b>{pool.total}</b></div>
                          <div><span className="text-gray-500">Заполнен</span><br /><b>{pool.filled}%</b></div>
                        </div>
                        <PoolBar filled={pool.filled} />
                        <button disabled={pool.locked} className={`mt-3 w-full border-2 border-black py-2 text-xs font-bold uppercase tracking-widest transition-colors ${pool.locked ? "cursor-not-allowed bg-gray-200 text-gray-400" : "bg-black text-white hover:bg-white hover:text-black"}`}>
                          {pool.locked ? "🔒 Только Профи тариф" : "Инвестировать"}
                        </button>
                      </div>
                    )) : (
                      <p className="border-2 border-amber-500 bg-amber-50 p-3 font-mono text-xs leading-5 text-gray-700">
                        Инвестиционные пулы и автоматическое исполнение для этой стратегии не настроены. Проверьте правила и протестируйте их отдельно перед торговлей.
                      </p>
                    )}
                  </div>
                )}

                {!isOpen && (
                  bot.pools.length > 0 ? (
                    <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {bot.pools.length} пула</span>
                      <span>от {bot.pools[0].min}</span>
                      <span className="font-bold text-black">до {bot.pools[bot.pools.length - 1].apy}</span>
                    </div>
                  ) : <p className="font-mono text-xs text-gray-500">Таймфреймы: 1H / 15m / 5m · данные о доходности отсутствуют</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
