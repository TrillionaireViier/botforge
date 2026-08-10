import { Bell, CreditCard, Check, Zap, Star, Crown } from "lucide-react";

// Plans data
const plans = [
  {
    name: "Старт",
    price: "$0",
    period: "навсегда",
    color: "#F3F4F6",
    icon: Zap,
    current: false,
    features: [
      { text: "1 торговый пул", ok: true },
      { text: "Только Pool 1 (Conservative)", ok: true },
      { text: "До $500 депозит", ok: true },
      { text: "Комиссия 15% с прибыли", ok: true },
      { text: "Email поддержка", ok: true },
    ],
    cta: "Текущий план",
    disabled: true,
  },
  {
    name: "Трейдер",
    price: "$49",
    period: "в месяц",
    color: "#D3F55F",
    icon: Star,
    current: true,
    badge: "⭐ Популярный",
    features: [
      { text: "5 торговых пулов", ok: true },
      { text: "Pool 1 + Pool 2", ok: true },
      { text: "До $50 000 депозит", ok: true },
      { text: "Пониженная комиссия −5%", ok: true },
      { text: "Поддержка 24/7", ok: true },
    ],
    cta: "Ваш план",
    disabled: true,
  },
  {
    name: "Профи",
    price: "$149",
    period: "в месяц",
    color: "#A5F3FC",
    icon: Crown,
    current: false,
    badge: "💎 Максимум",
    features: [
      { text: "Все 4 пула", ok: true },
      { text: "Без лимита депозита", ok: true },
      { text: "Комиссия −10% от стандарта", ok: true },
      { text: "Приоритет исполнения", ok: true },
      { text: "VIP аналитика и отчёты", ok: true },
    ],
    cta: "Перейти на Профи",
    disabled: false,
    highlight: true,
  },
];

export default function News() {
  const news = [
    { id: 1, date: "Сегодня, 14:30", text: "Добавлена интеграция с Bybit API V5. Теперь сделки копируются в 3 раза быстрее." },
    { id: 2, date: "Вчера, 09:15", text: "Апдейт системы безопасности: внедрена обязательная 2FA для вывода средств." },
    { id: 3, date: "20 Июня 2024", text: "Новый алгоритм 'Titan' показал +42% профита за месяц на бета-тестах. Скоро в общем доступе." },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mb-8">
        <h1 className="text-3xl font-black uppercase tracking-widest flex items-center gap-3">
          <Bell className="w-8 h-8" /> Новости платформы
        </h1>
        <p className="text-gray-500 mt-2 font-mono text-sm">Последние обновления и анонсы</p>
      </div>
      
      <div className="space-y-6 mb-16">
        {news.map(item => (
          <div key={item.id} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center gap-4 hover:translate-x-1 transition-transform">
            <div className="bg-black text-white px-4 py-2 font-bold whitespace-nowrap text-sm">
              {item.date}
            </div>
            <p className="font-mono text-base">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-black pt-12">
        <h2 className="text-2xl font-black uppercase tracking-widest mb-2 flex items-center gap-2">
          <CreditCard className="w-6 h-6" /> Обновите ваш тариф
        </h2>
        <p className="text-gray-500 mb-8 font-mono text-sm">Получите больше возможностей и ботов для максимизации профита</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`border-2 border-black bg-white flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "shadow-[8px_8px_0_0_rgba(0,0,0,1)] -translate-y-1"
                  : plan.current
                  ? "shadow-[4px_4px_0_0_rgba(0,0,0,1)] ring-2 ring-black ring-offset-2"
                  : "shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5"
              }`}
            >
              <div className="p-5 border-b-2 border-black" style={{ background: plan.color }}>
                {plan.badge && (
                  <span className="inline-block bg-black text-white text-xs font-bold px-2 py-0.5 mb-3">{plan.badge}</span>
                )}
                {plan.current && !plan.badge && (
                  <span className="inline-block bg-black text-white text-xs font-bold px-2 py-0.5 mb-3 animate-pulse">● Ваш план</span>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <plan.icon className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-widest text-lg">{plan.name}</h3>
                </div>
                <div className="mt-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm font-mono text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <div className="p-5 flex-1 bg-white space-y-2">
                {plan.features.map((f, j) => (
                  <div key={j} className={`flex items-start gap-2 text-sm font-mono ${!f.ok ? "text-gray-400" : ""}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${f.ok ? "text-emerald-500" : "text-gray-200"}`} />
                    {f.text}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t-2 border-black bg-white">
                <button
                  disabled={plan.disabled}
                  className={`w-full py-3 font-bold uppercase tracking-widest text-sm border-2 border-black transition-all ${
                    plan.disabled
                      ? plan.current
                        ? "bg-black text-white cursor-default"
                        : "bg-gray-100 text-gray-400 cursor-default"
                      : "bg-black text-white hover:bg-white hover:text-black hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
