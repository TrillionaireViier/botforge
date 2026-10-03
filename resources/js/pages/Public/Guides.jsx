import { useState } from "react";
import { BookOpen, X, ChevronRight, CheckCircle, ArrowRight, ShieldCheck, Sliders, Zap } from "lucide-react";

export default function Guides() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guidesList = [
    {
      id: "scalping",
      title: "Гайд по Скальпингу",
      desc: "Научитесь настраивать ботов для 1-минутных таймфреймов.",
      color: "bg-[#D3F55F]",
      icon: <Zap className="w-6 h-6 text-black" />,
      readTime: "7 мин",
      content: `
### Настройка Скальпинг-Ботов на 1M Таймфрейме

Скальпинг — одна из самых прибыльных, но и требовательных стратегий. В этом гайде мы пошагово настроим бота BotForge для работы на 1-минутных графиках BTC/USDT и ETH/USDT.

#### Шаг 1: Выбор фильтров входа
- **RSI (14):** Входить в покупку только при значении ниже 32 (перепроданность), в продажу при значение выше 68.
- **Bollinger Bands (20, 2):** Вход осуществляется при касании или пробитии нижней полосы Боллинджера.

#### Шаг 2: Установка плеча и размера ордера
- **Плечо (Leverage):** Не более 5x - 10x на старте.
- **Маржа:** 2-3% от общего баланса счета на один ордер.

#### Шаг 3: Настройка Take Profit и Stop Loss
- **Take Profit:** Динамический 0.4% - 0.7% с включенным Trailing Stop.
- **Stop Loss:** Фиксированный 0.35% от точки входа.
      `
    },
    {
      id: "grid",
      title: "Настройка Сеток",
      desc: "Как правильно рассчитать шаг и депозит для Grid-бота.",
      color: "bg-[#A5F3FC]",
      icon: <Sliders className="w-6 h-6 text-black" />,
      readTime: "10 мин",
      content: `
### Пошаговый расчет параметров Grid-Бота (Сетки)

Grid-боты идеально подходят для бокового рынка (флэта). Они выставляют каскад лимитных ордеров на покупку и продажу.

#### 1. Арифметический vs Логарифмический шаг
- **Арифметический:** Все уровни сетки имеют одинаковую разницу в ценовом выражении (например, каждые $100).
- **Логарифмический:** Уровни имеют одинаковое процентное расстояние (например, каждые 0.5%). Лучше подходит для широких диапазонов.

#### 2. Расчет количества уровней (Grids)
- Оптимальное количество для пары BTC/USDT: 20–50 уровней.
- Чем больше уровней, тем чаще срабатывают ордера, но меньше прибыль с каждой индивидуальной сделки.

#### 3. Мартингейл-множитель объемов
Для сетки на покупку рекомендуется использовать коэффициент Мартингейла **1.2x - 1.35x**, чтобы усреднять позицию при движении вниз.
      `
    },
    {
      id: "risk",
      title: "Риск-Менеджмент",
      desc: "Управление капиталом при автоматизированной торговле.",
      color: "bg-[#FDE68A]",
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      readTime: "8 мин",
      content: `
### Фундаментальные Правила Управления Капиталом

Автоматизированная торговля исключает эмоции, но без строгих правил риск-менеджмента любой алгоритм рискует получить просадку.

#### Ключевые рекомендации:
1. **Диверсификация пар:** Не запускайте всех ботов на одной валютной паре. Распределите депозит между BTC, ETH и топовыми альткоинами.
2. **Максимальная просадка дня:** Настройте лимит убытка в день не более 3-5%. При его достижении BotForge временно останавливает всех ботов.
3. **Безопасное использование заемных средств:** Для спотовых Grid-ботов плечо не требуется. Для фьючерсов используйте изолированную маржу (Isolated Margin).
      `
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-3xl md:text-4xl font-black uppercase mb-8 flex items-center gap-3 tracking-wider">
        <BookOpen className="w-10 h-10 text-yellow-500" /> Гайды и Обучение BotForge
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guidesList.map((guide) => (
          <div 
            key={guide.id}
            onClick={() => setSelectedGuide(guide)}
            className={`border-4 border-black p-6 ${guide.color} shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  {guide.icon}
                </div>
                <span className="text-xs font-mono font-bold bg-black text-white px-2 py-1 uppercase">
                  {guide.readTime}
                </span>
              </div>
              <h2 className="text-xl font-black uppercase mb-2 text-black leading-snug">{guide.title}</h2>
              <p className="text-xs font-mono text-gray-900 font-bold mb-4">{guide.desc}</p>
            </div>
            <button className="flex items-center justify-between w-full font-black text-xs uppercase border-t-2 border-black pt-4 mt-2 hover:translate-x-1 transition-transform">
              <span>Открыть инструкции</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Guide Detail Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white border-4 border-black max-w-3xl w-full p-6 md:p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative my-8">
            <button 
              onClick={() => setSelectedGuide(null)}
              className="absolute top-4 right-4 bg-yellow-300 border-2 border-black p-2 hover:bg-black hover:text-yellow-300 transition-colors font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-black text-yellow-300 font-mono text-xs font-bold px-3 py-1 border border-black uppercase tracking-wider">
                Обучающий Руководство
              </span>
              <span className="text-xs font-mono text-gray-600 font-bold">
                Время чтения: {selectedGuide.readTime}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-black border-b-4 border-black pb-4">
              {selectedGuide.title}
            </h1>

            <div className="prose prose-slate max-w-none text-gray-800 font-sans leading-relaxed space-y-4 mb-8 whitespace-pre-line text-sm md:text-base">
              {selectedGuide.content}
            </div>

            <div className="border-t-4 border-black pt-6 flex justify-end">
              <button 
                onClick={() => setSelectedGuide(null)}
                className="px-6 py-2.5 border-2 border-black bg-black text-yellow-300 font-mono text-xs font-bold uppercase hover:bg-yellow-300 hover:text-black transition-all shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
              >
                Понятно, Вернуться к Гайдам
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

