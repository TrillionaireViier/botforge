import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Activity, Layers, ArrowRight, ChevronRight } from 'lucide-react';
import PublicNavbar from '../components/layout/PublicNavbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "Что такое BotForgee?", a: "BotForgee — это продвинутый конструктор крипто-торговых ботов без кода." },
    { q: "Нужно ли уметь программировать?", a: "Нет, всё настраивается через удобный визуальный интерфейс." },
    { q: "Какие биржи поддерживаются?", a: "Мы нативно поддерживаем Binance, Bybit и OKX." },
    { q: "Где хранятся мои средства?", a: "Ваши средства надежно хранятся на вашем биржевом аккаунте." },
    { q: "Может ли бот вывести мои деньги?", a: "Нет, API-ключи должны быть ограничены только торговлей." },
    { q: "Есть ли демо-торговля?", a: "Да, вы можете тестировать стратегии на виртуальных средствах." },
    { q: "Что такое Grid-стратегия?", a: "Она размещает множество ордеров на покупку и продажу с заданным интервалом." },
    { q: "Что такое DCA-бот?", a: "Бот Dollar Cost Averaging докупает актив при падении цены для снижения средней цены входа." },
    { q: "Поддерживаются ли трейлинг-стопы?", a: "Да, мы поддерживаем как Trailing Take Profit, так и Trailing Stop Loss." },
    { q: "Сколько ботов можно запустить?", a: "Зависит от вашего тарифа, вплоть до неограниченного количества." },
    { q: "Нужно ли держать компьютер включенным?", a: "Нет, наши облачные серверы обеспечивают работу ботов 24/7." },
    { q: "Какие технические индикаторы доступны?", a: "RSI, MACD, Bollinger Bands, EMA, SMA и многие другие." },
    { q: "Насколько быстро исполняются ордера?", a: "Мы используем WebSocket для миллисекундной задержки." },
    { q: "Могу ли я копировать других трейдеров?", a: "Да, на нашей платформе есть маркетплейс копитрейдинга." },
    { q: "Есть ли бесплатный пробный период?", a: "Мы предоставляем 7 дней бесплатного тест-драйва новым пользователям." },
    { q: "Как оплатить подписку?", a: "Мы принимаем криптовалюты (USDT/USDC) и банковские карты." },
    { q: "Работает ли служба поддержки?", a: "Да, поддержка доступна 24/7 в чате и через систему тикетов." },
    { q: "Что если биржа зависнет?", a: "Боты автоматически приостановят работу и возобновят её после восстановления API." },
    { q: "Можно ли торговать фьючерсами?", a: "Да, поддерживаются как спотовый, так и фьючерсный рынки." },
    { q: "Есть ли ограничения по объему торгов?", a: "Нет, мы не ограничиваем ваш торговый оборот." },
    { q: "Как вы обходите лимиты запросов к API?", a: "Наш умный планировщик оптимизирует запросы во избежание банов." },
    { q: "Можно ли подключить несколько ключей API?", a: "Да, вы можете подключить несколько субаккаунтов и бирж." },
    { q: "Есть ли партнерская программа?", a: "Да, получайте до 30% рекуррентной комиссии за рефералов." },
    { q: "Можно ли поделиться настройками бота?", a: "Вы можете сгенерировать ссылку для шеринга или оставить их приватными." },
    { q: "Предоставляете ли вы доступ по API?", a: "Enterprise-пользователи получают доступ к нашему API управления." },
    { q: "Требуется ли 2FA?", a: "Мы настоятельно рекомендуем использовать 2FA через приложения-аутентификаторы." },
    { q: "Как защищены мои данные?", a: "Все чувствительные данные и API-ключи надежно зашифрованы в базе." },
    { q: "Можно ли настроить шаг сетки?", a: "Да, выбирайте между арифметическим или логарифмическим шагом." },
    { q: "Есть ли встроенные лимиты рисков?", a: "Да, вы можете установить максимальную просадку для аккаунта." },
    { q: "Можно ли запускать ботов на альткоинах?", a: "Вы можете торговать любой парой, доступной на подключенной бирже." }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-black selection:text-white">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center border-b-2 border-black">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-block border-2 border-black bg-gray-900 px-4 py-2 uppercase tracking-widest text-xs font-black text-white mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Ультимативный No-Code Конфигуратор
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            Автоматизируй <br/>
            <span className="text-white bg-gray-900 px-2 border-4 border-black inline-block mt-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Свою Прибыль</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-wide">
            Создавайте сложные Grid-стратегии, настраивайте технические индикаторы и управляйте рисками с помощью трейлинг-стопов. Мгновенное подключение к Binance, Bybit и OKX.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/login" 
              className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-black uppercase tracking-widest py-5 px-10 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 text-lg"
            >
              Открыть Конфигуратор <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#pricing" 
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-200 text-white font-black uppercase tracking-widest py-5 px-10 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center text-lg"
            >
              Смотреть Тарифы
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 border-b-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-black">Профессиональные Инструменты</h2>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-lg max-w-2xl mx-auto">Всё необходимое для создания прибыльных автоматизированных систем без написания единой строчки кода.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <Activity className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Технические Фильтры</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Подключайте индикаторы RSI, MACD и Bollinger Bands, чтобы ваш бот входил в сделку только при идеальных условиях.
              </p>
            </div>

            <div className="bg-black text-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <Zap className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Трейлинг Стопы</h3>
              <p className="text-gray-300 font-medium leading-relaxed">
                Максимизируйте прибыль во время сильных пампов с помощью Trailing Take Profit и защищайте капитал динамическим Trailing Stop Loss.
              </p>
            </div>

            <div className="bg-gray-900 border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <Layers className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Умные Сетки</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Используйте логарифмический или арифметический шаг сетки в комбинации с множителями объема Мартингейла.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bots Showcase Section */}
      <section className="py-24 px-6 border-b-2 border-black bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Готовые Торговые Боты</h2>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-lg max-w-2xl mx-auto">Выберите проверенную стратегию или создайте свою с нуля.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#D3F55F] border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-black uppercase mb-2">ScalpBot Pro</h3>
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 inline-block mb-4">Скальпинг</span>
              <p className="text-gray-900 font-medium leading-relaxed">
                Высокочастотный бот для краткосрочных сделок. Открывает до 200 позиций в сутки на минутных свечах BTC/ETH.
              </p>
            </div>

            <div className="bg-[#A5F3FC] border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-black uppercase mb-2">TrendRider</h3>
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 inline-block mb-4">Трендовый</span>
              <p className="text-gray-900 font-medium leading-relaxed">
                Торгует по направлению тренда на 4H и дневных графиках. Оптимален для спокойного рынка с чётким направлением.
              </p>
            </div>

            <div className="bg-[#FDE68A] border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-black uppercase mb-2">GridMaster</h3>
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 inline-block mb-4">Сеточный</span>
              <p className="text-gray-900 font-medium leading-relaxed">
                Сеточная стратегия в боковом рынке. Зарабатывает на волатильности без прогнозирования направления.
              </p>
            </div>

            <div className="bg-[#DDD6FE] border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-black uppercase mb-2">ArbitrageX</h3>
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 inline-block mb-4">Арбитраж</span>
              <p className="text-gray-900 font-medium leading-relaxed">
                Межбиржевой арбитраж. Использует разницу цен между биржами для безрискового заработка.
              </p>
            </div>

            <div className="bg-[#FCA5A5] border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-black uppercase mb-2">NewsTrader AI</h3>
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 inline-block mb-4">Новостной</span>
              <p className="text-gray-900 font-medium leading-relaxed">
                ИИ-бот анализирует новости и твиты в реальном времени. Реагирует на события раньше рынка.
              </p>
            </div>

            <div className="bg-[#BBF7D0] border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-black uppercase mb-2">DCA Bot</h3>
              <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 inline-block mb-4">Усреднение</span>
              <p className="text-gray-900 font-medium leading-relaxed">
                Классическая стратегия усреднения (DCA). Идеален для долгосрочного накопления активов при падении.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Block */}
      <section id="how-it-works" className="py-24 px-6 border-b-2 border-black bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Как Запустить Бота</h2>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-lg max-w-2xl mx-auto">От идеи до реализации за три простых шага.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8 text-center bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 bg-black text-white font-black text-2xl border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">1</div>
              <h3 className="text-2xl font-black uppercase mb-3">Настройка</h3>
              <p className="text-gray-700 font-medium">Используйте визуальный конструктор для настройки пары, структуры сетки и индикаторов.</p>
            </div>
            <div className="border-2 border-black p-8 text-center bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 bg-black text-white font-black text-2xl border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">2</div>
              <h3 className="text-2xl font-black uppercase mb-3">Подключение</h3>
              <p className="text-gray-700 font-medium">Подключите API ключи от вашей биржи. Мы нативно поддерживаем Binance, Bybit и OKX.</p>
            </div>
            <div className="border-2 border-black p-8 text-center bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 bg-black text-white font-black text-2xl border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">3</div>
              <h3 className="text-2xl font-black uppercase mb-3">Запуск</h3>
              <p className="text-gray-700 font-medium">Запустите бота. Он будет автоматически торговать 24/7 строго по вашим правилам.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Features */}
      <section className="py-24 px-6 border-b-2 border-black bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Создано для Масштабирования</h2>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-lg max-w-2xl mx-auto">Надежная бэкенд инфраструктура в сочетании с молниеносным фронтендом.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Фронтенд Block */}
            <div className="border-4 border-black p-10 bg-gray-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black rotate-45 translate-x-16 -translate-y-16"></div>
              <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                <span className="w-4 h-4 bg-black block"></span>
                Фронтенд
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black mt-1 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">1</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-1">Визуальный Конфигуратор</h4>
                    <p className="text-gray-700 font-medium">Интуитивно понятный React-интерфейс, который рассчитывает параметры сетки и визуализирует риски до запуска.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black mt-1 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">2</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-1">Валидация в Реальном Времени</h4>
                    <p className="text-gray-700 font-medium">Мгновенная проверка на стороне клиента предотвращает ввод конфликтующих параметров и перерасход капитала.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black mt-1 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">3</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-1">Управление Состоянием</h4>
                    <p className="text-gray-700 font-medium">Глобальный стейт-менеджмент надежно управляет состояниями сложных стратегий при редактировании.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Бэкенд Block */}
            <div className="border-4 border-black p-10 bg-black text-white shadow-[12px_12px_0px_0px_rgba(200,200,200,1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 rotate-45 translate-x-16 -translate-y-16"></div>
              <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                <span className="w-4 h-4 bg-gray-900 block"></span>
                Бэкенд
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center font-black mt-1 shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-1">Мгновенное Исполнение</h4>
                    <p className="text-gray-400 font-medium">Node.js Express сервер обеспечивает передачу торговых сигналов по API бирж с миллисекундной задержкой.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center font-black mt-1 shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-1">Безопасная База Данных</h4>
                    <p className="text-gray-400 font-medium">Архитектура на PostgreSQL/SQLite безопасно хранит ваши настройки, токены и зашифрованные данные.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center font-black mt-1 shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-1">Бесперебойная Работа 24/7</h4>
                    <p className="text-gray-400 font-medium">Фоновые процессы постоянно отслеживают WebSocket-потоки для корректировки стопов и сеток, даже когда вы спите.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 border-b-2 border-black bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Тарифы</h2>
            <p className="text-gray-600 font-bold uppercase tracking-widest text-lg max-w-2xl mx-auto">Выберите подходящий план для ваших торговых амбиций.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-black bg-gray-900 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
              <h3 className="text-2xl font-black uppercase mb-2">Бесплатный</h3>
              <div className="text-4xl font-black mb-6">$0<span className="text-lg text-gray-400">/мес</span></div>
              <ul className="space-y-4 mb-8 flex-1 font-medium text-gray-300">
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-white"/> 1 Активный бот</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-white"/> Спотовая торговля</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-white"/> Базовые индикаторы</li>
              </ul>
              <Link to="/login" className="w-full text-center bg-gray-900 text-white border-2 border-black font-black uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors">Войти / Регистрация</Link>
            </div>

            <div className="border-4 border-black bg-yellow-300 text-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col transform md:-translate-y-4 relative">
              <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 font-black uppercase text-xs tracking-widest border-l-2 border-b-2 border-black">Популярный</div>
              <h3 className="text-2xl font-black uppercase mb-2 text-black">Про</h3>
              <div className="text-4xl font-black mb-6 text-black">$29<span className="text-lg text-gray-800">/мес</span></div>
              <ul className="space-y-4 mb-8 flex-1 font-medium text-black">
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-black"/> До 10 активных ботов</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-black"/> Спот и Фьючерсы</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-black"/> Трейлинг стопы</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-black"/> Продвинутые индикаторы</li>
              </ul>
              <Link to="/login" className="w-full text-center bg-black text-white border-2 border-black font-black uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">Войти / Регистрация</Link>
            </div>

            <div className="border-2 border-black bg-gray-900 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
              <h3 className="text-2xl font-black uppercase mb-2">Ультра</h3>
              <div className="text-4xl font-black mb-6">$99<span className="text-lg text-gray-400">/мес</span></div>
              <ul className="space-y-4 mb-8 flex-1 font-medium text-gray-300">
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-white"/> Неограниченно ботов</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-white"/> API Доступ</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-white"/> Персональный менеджер</li>
                <li className="flex items-center gap-2"><Zap className="w-5 h-5 text-white"/> Копитрейдинг</li>
              </ul>
              <Link to="/login" className="w-full text-center bg-gray-900 text-white border-2 border-black font-black uppercase tracking-widest py-3 hover:bg-gray-800 transition-colors">Войти / Регистрация</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">FAQ</h2>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-900 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300">
                <button 
                  className="w-full text-left p-3 flex justify-between items-center font-bold uppercase text-sm"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  {faq.q}
                  <ChevronRight className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-3 text-gray-700 font-medium text-xs leading-relaxed border-t-2 border-black pt-2 bg-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
