import { useState } from "react";
import { BookOpen, ArrowRight, X, Clock, Calendar, Share2, ThumbsUp } from "lucide-react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [liked, setLiked] = useState(false);

  const posts = [
    { 
      id: 1, 
      title: "Топ-5 алгоритмов для скальпинга в 2026 году", 
      category: "Стратегии", 
      readTime: "5 мин",
      date: "02 Октября 2026",
      author: "Александр Громов, Head of Quant Strategy",
      content: `
Скальпинг на криптовалютном рынке требует ультра-низкой задержки и высокой точности точек входа. В 2026 году традиционные индикаторы (RSI, MACD) работают эффективнее в сочетании с нейросетевым анализом стакана (Order Book Heatmap).

### 1. Adaptive Grid Scalper (Логарифмический Grid)
Автоматически адаптирует динамический шаг сетки на основе волатильности (ATR). При резких сквизах вниз объем ордера рассчитывается по Мартингейлу с множителем 1.35.

### 2. Liquidity Cluster Tracker
Бот сканирует крупные лимитные плотности на биржах (Binance, Bybit, OKX) и вступает в сделку при импульсном разъедании стенок с Take Profit на уровне +0.4% - +0.8%.

### 3. Volume Spread Analysis (VSA) Bot
Определяет присутствие маркетмейкера по соотношению аномального объема и размера свечи. Входит в импульс сразу после консолидации.

### 4. Funding Arbitrage Rate Scalper
Зарабатывает на разнице фандинга между бессрочными фьючерсами и спотовым рынком, открывая дельта-нейтральные позиции каждые 8 часов.

### 5. Multi-Indicator Momentum Engine
Использует кастомную связку RSI + Bollinger Bands + Volume Delta на 1-минутном таймфрейме с жесточайшим Stop-Loss в 0.3%.
      `
    },
    { 
      id: 2, 
      title: "Как нейросети меняют копитрейдинг", 
      category: "Технологии", 
      readTime: "8 мин",
      date: "28 Сентября 2026",
      author: "Елена Смирнова, AI Research Lead",
      content: `
Копитрейдинг 2.0 — это не просто слепое дублирование сделок мастер-трейдера. Нейросети BotForge фильтруют сделки ведущих трейдеров в реальном времени.

### Главные проблемы классического копитрейдинга:
- **Проскальзывание (Slippage):** Сделки подписчиков исполняются по худшей цене.
- **Эмоциональные риски:** Трейдеры склонны «тильтовать» и увеличивать плечи.

### Как помогает ИИ в BotForge:
1. **Smart Execution Engine:** Алгоритм рассчитывает оптимальный путь ордера через нескольких провайдеров ликвидности.
2. **Dynamic Risk-Guard:** Если мастер-трейдер превышает заданный лимит риска (например, риск более 5% на сделку), бот автоматически блокирует копирование.
3. **Sentiment Filtering:** Нейросеть оценивает текущий новостной фон перед подтверждением входа.
      `
    },
    { 
      id: 3, 
      title: "Риск-менеджмент: почему это важнее прибыли", 
      category: "Обучение", 
      readTime: "12 мин",
      date: "15 Сентября 2026",
      author: "Дмитрий Ковалев, Senior Risk Analyst",
      content: `
90% начинающих алготрейдеров теряют депозит не из-за слабой стратегии, а из-за отсутствия риск-менеджмента и калькуляции просадок.

### Золотые правила алготрейдинга:
- **Правило 1-2%:** Никогда не рискуйте более чем 1-2% от общего капитала в одной сделке.
- **Расчет максимальной просадки (Max Drawdown):** Ваша торговая система должна выдерживать серию из 10 непрерывных убыточных сделок.
- **Автоматический Kill-Switch:** В BotForge встроен экстренный выключатель: при дневной просадке в 5% бот закрывает все ордера и ставит торговлю на паузу на 24 часа.
      `
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black mb-8 flex items-center gap-3 uppercase tracking-wider">
        <BookOpen className="w-8 h-8 text-yellow-500" /> Блог и Аналитика BotForge
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div 
            key={post.id} 
            onClick={() => { setSelectedPost(post); setLiked(false); }}
            className="bg-white border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-yellow-300 text-black border border-black text-xs font-black px-3 py-1 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-black mt-2 mb-3 leading-snug">{post.title}</h2>
              <p className="text-gray-600 text-xs font-mono mb-4">Дата: {post.date}</p>
            </div>
            <button className="flex items-center justify-between w-full text-black font-black uppercase text-sm border-t-2 border-black pt-4 mt-2 hover:text-yellow-600 transition-colors">
              <span>Читать статью</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Article Viewer Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white border-4 border-black max-w-3xl w-full p-6 md:p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative my-8">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-yellow-300 border-2 border-black p-2 hover:bg-black hover:text-yellow-300 transition-colors font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-black text-yellow-300 font-mono text-xs font-bold px-3 py-1 border border-black uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <span className="text-xs font-mono text-gray-600 flex items-center gap-1">
                <Clock className="w-4 h-4" /> {selectedPost.readTime}
              </span>
              <span className="text-xs font-mono text-gray-600 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {selectedPost.date}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-black border-b-4 border-black pb-4">
              {selectedPost.title}
            </h1>

            <div className="text-xs font-mono text-gray-700 font-bold mb-6 flex items-center gap-2">
              <span>Автор:</span>
              <span className="bg-gray-100 px-2 py-0.5 border border-black">{selectedPost.author}</span>
            </div>

            <div className="prose prose-slate max-w-none text-gray-800 font-sans leading-relaxed space-y-4 mb-8 whitespace-pre-line text-sm md:text-base">
              {selectedPost.content}
            </div>

            <div className="border-t-4 border-black pt-6 flex items-center justify-between flex-wrap gap-4">
              <button 
                onClick={() => setLiked(!liked)}
                className={`px-4 py-2 border-2 border-black font-mono text-xs font-bold uppercase flex items-center gap-2 transition-all shadow-[3px_3px_0_0_rgba(0,0,0,1)] ${
                  liked ? 'bg-emerald-400 text-black' : 'bg-yellow-300 hover:bg-yellow-400 text-black'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{liked ? 'Полезно! (129)' : 'Статья Полезна? (128)'}</span>
              </button>

              <button 
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2 border-2 border-black bg-black text-white font-mono text-xs font-bold uppercase hover:bg-gray-800 transition-all shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
              >
                Закрыть Гайд
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

