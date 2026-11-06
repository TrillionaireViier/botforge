import { ArrowLeft, Clock3, ShieldAlert, Target, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1H контекст и направление",
    points: [
      "Для лонга отметьте sell-side liquidity: равные минимумы (EQL), минимум предыдущего дня (PDL) или минимум азиатской сессии.",
      "Для шорта используйте зеркальную buy-side liquidity: равные максимумы (EQH), максимум предыдущего дня или максимум сессии.",
      "Сначала дождитесь явного выноса уровня; сам факт касания уровня не является сигналом.",
    ],
  },
  {
    title: "Подтверждение на 15m / 5m",
    points: [
      "Свеча прокалывает уровень ликвидности фитилём и закрывается обратно за уровнем в сторону диапазона.",
      "Затем импульсная свеча подтверждает market structure shift (MSS), пробивая ближайший локальный swing в направлении разворота.",
      "Ищите FVG по трёхсвечной модели: для бычьего импульса High первой свечи ниже Low третьей; для медвежьего — Low первой выше High третьей.",
    ],
  },
  {
    title: "Вход и управление риском",
    points: [
      "Планируемый лимитный вход — на ближней границе FVG или на его середине (50%, Consequent Encroachment). Не входите, если цена уже ушла без ретеста.",
      "Стоп ставится за экстремум sweep-свечи. После входа стоп нельзя отодвигать дальше.",
      "Размер позиции рассчитывается от стоп-дистанции так, чтобы денежный риск оставался в пределах 0,5–1% капитала; при широком стопе уменьшайте позицию.",
      "Планируйте потенциальное соотношение риск/прибыль не ниже 1:2,5. TP1 — ближайшая внутренняя ликвидность/локальный противоположный экстремум; после фиксации части позиции стоп остатка можно перенести в безубыток. TP2 — противоположный пул ликвидности.",
    ],
  },
  {
    title: "Временные и объёмные фильтры",
    points: [
      "Киевское время: Лондон 09:00–12:00; Нью-Йорк 15:30–19:00. Учитывайте сезонный переход времени и сверяйте часы с биржей.",
      "Избегайте выходных и низколиквидных часов, если стратегия не проверена на таких данных.",
      "OI-всплеск и каскад ликвидаций против направления sweep могут дать дополнительный контекст, но не гарантируют разворот и не заменяют подтверждение цены.",
    ],
  },
];

export default function LiquidityFvgStrategy() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-8">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 font-bold underline underline-offset-4">
        <ArrowLeft className="h-4 w-4" /> На главную
      </Link>

      <header className="border-4 border-black bg-cyan-200 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:p-10">
        <div className="mb-4 inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-widest">
          <Waves className="h-4 w-4" /> Стратегия · криптодеривативы
        </div>
        <h1 className="max-w-3xl text-3xl font-black uppercase tracking-tight md:text-5xl">
          Liquidity Sweep + FVG Reversal
        </h1>
        <p className="mt-4 max-w-3xl font-mono text-sm leading-6 md:text-base">
          Учебный план для BTC/ETH и ликвидных альткоинов: контекст на 1H, подтверждение и исполнение на 15m/5m.
          Используйте только после проверки на исторических данных и в демо-режиме.
        </p>
      </header>

      <div className="my-8 grid gap-4 md:grid-cols-3">
        <div className="border-2 border-black bg-white p-4"><Clock3 className="mb-2 h-6 w-6" /><b>Таймфреймы</b><p className="mt-1 text-sm text-gray-600">1H контекст · 15m/5m вход</p></div>
        <div className="border-2 border-black bg-white p-4"><Target className="mb-2 h-6 w-6" /><b>Сетап</b><p className="mt-1 text-sm text-gray-600">Sweep → MSS → FVG ретест</p></div>
        <div className="border-2 border-black bg-amber-100 p-4"><ShieldAlert className="mb-2 h-6 w-6" /><b>Риск на сделку</b><p className="mt-1 text-sm text-gray-600">Не более 0,5–1% капитала</p></div>
      </div>

      <div className="space-y-5">
        {sections.map((section) => (
          <section key={section.title} className="border-2 border-black bg-white p-5 md:p-7">
            <h2 className="mb-4 text-xl font-black uppercase">{section.title}</h2>
            <ul className="space-y-3">
              {section.points.map((point) => <li key={point} className="flex gap-3 font-mono text-sm leading-6 text-gray-700"><span className="mt-2 h-2 w-2 shrink-0 bg-cyan-500" />{point}</li>)}
            </ul>
          </section>
        ))}
      </div>

      <aside className="mt-8 border-2 border-black bg-gray-950 p-5 font-mono text-sm leading-6 text-white">
        <strong className="text-amber-300">Важно:</strong> эта страница описывает правила сетапа, но не подключает исполнение ордеров,
        не анализирует рыночные данные в реальном времени и не является инвестиционной рекомендацией. Криптодеривативы
        могут привести к потере всего залога. Перед использованием учитывайте комиссии, проскальзывание, funding и риск ликвидации.
      </aside>
    </div>
  );
}
