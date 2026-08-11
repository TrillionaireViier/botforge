import { RefreshCw } from "lucide-react";

export default function Changelog() {
  const updates = [
    { version: "v2.4.0", date: "11 Авг 2026", desc: "Добавлен AI NewsTrader, поддержка логарифмической сетки, оптимизация WebSocket." },
    { version: "v2.3.5", date: "25 Июл 2026", desc: "Новые индикаторы (MACD, Bollinger Bands), улучшен интерфейс Dashboard." },
    { version: "v2.3.0", date: "10 Июн 2026", desc: "Интеграция с OKX, трейлинг-стопы для Grid-ботов." }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
        <RefreshCw className="w-10 h-10" /> Обновления
      </h1>
      <div className="space-y-6">
        {updates.map((u, i) => (
          <div key={i} className="border-2 border-black p-6 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#D3F55F] px-3 py-1 border-2 border-black font-black uppercase tracking-widest">{u.version}</span>
              <span className="text-gray-500 font-bold">{u.date}</span>
            </div>
            <p className="font-medium text-gray-800 text-lg">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
