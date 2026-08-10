import { useState } from "react";
import { FileText, ChevronRight, Search, Book, Zap, Shield, TrendingUp, Bot, CreditCard, HelpCircle } from "lucide-react";

const docs = [
  {
    category: "Начало работы",
    icon: Zap,
    color: "#D3F55F",
    articles: [
      {
        title: "Как зарегистрироваться и верифицировать аккаунт",
        content: `## Регистрация

1. Нажмите кнопку **«Начать»** на главной странице
2. Введите email и придумайте надёжный пароль
3. Подтвердите email — письмо придёт в течение 2 минут
4. Пройдите KYC верификацию (загрузите паспорт и селфи)

> Верификация занимает от 5 минут до 24 часов.

## Двухфакторная аутентификация

Настоятельно рекомендуем включить 2FA через Google Authenticator:

\`Настройки → Безопасность → Включить 2FA\`

Это защитит ваш аккаунт даже при утечке пароля.`,
      },
      {
        title: "Пополнение баланса и вывод средств",
        content: `## Пополнение

Поддерживаемые методы:
- **Криптовалюта** — BTC, ETH, USDT (TRC-20, ERC-20, BEP-20)
- **Банковская карта** — Visa, Mastercard
- **Банковский перевод** — SWIFT, SEPA

Минимальное пополнение: **$25**

## Вывод средств

Минимальный вывод: **$50**
Время обработки: **до 24 часов** в рабочие дни
Комиссия: **0%** для Профи-тарифа, **1%** для остальных

\`Портфель → Вывод → Выберите метод\``,
      },
      {
        title: "Выбор торгового бота и пула",
        content: `## Как выбрать бота

Ориентируйтесь на ваш риск-профиль:

| Профиль | Бот | Ожидаемый доход |
|---------|-----|----------------|
| Низкий риск | GridMaster, DCA | 14–21% годовых |
| Средний риск | TrendRider, ScalpBot | 22–34% годовых |
| Высокий риск | NewsTrader AI | до 45% годовых |
| Без риска | ArbitrageX | 16–24% годовых |

## Инвестирование в пул

1. Выберите бота в разделе **«Торговые боты»**
2. Нажмите **«Пулы для инвестиций»**
3. Выберите пул и нажмите **«Инвестировать»**
4. Введите сумму (не менее минимального вклада)
5. Подтвердите транзакцию`,
      },
    ],
  },
  {
    category: "Торговые боты",
    icon: Bot,
    color: "#A5F3FC",
    articles: [
      {
        title: "ScalpBot Pro — руководство",
        content: `## Что такое ScalpBot Pro

Высокочастотный скальпинг-бот, совершающий до **200 сделок в сутки** на парах BTC, ETH, SOL.

## Стратегия

Бот использует комбинацию индикаторов:
- **RSI** (14) для определения перекупленности/перепроданности
- **EMA** (9/21) для направления тренда
- **Volume Profile** для определения уровней поддержки

## Риск-менеджмент

- Стоп-лосс: **0.8%** от входа
- Тейк-профит: **0.4%** (x2 RR)
- Максимальная просадка: **4%** от депозита

## Настройки (Профи-тариф)

\`\`\`
risk_per_trade: 0.5%
max_open_positions: 3
timeframe: 1m
exchanges: Bybit, Binance
\`\`\``,
      },
      {
        title: "ArbitrageX — как работает арбитраж",
        content: `## Принцип работы

ArbitrageX мониторит цены на **3+ биржах** одновременно и использует разницу цен для безрискового заработка.

**Пример:**
- BTC на Binance: $67,200
- BTC на OKX: $67,248
- Спред: $48 → бот покупает на Binance, продаёт на OKX

## Почему это безопасно

Обе сделки исполняются **одновременно** — нет риска изменения цены между покупкой и продажей.

## Требования

- Минимальный депозит: **$500**
- Аккаунты на 2+ биржах (настраивает наша команда)
- Верификация уровня 2

## Ожидаемая доходность

**0.1–0.2% за сделку** × 120 сделок в день = **~18–25% годовых**`,
      },
    ],
  },
  {
    category: "Тарифы и оплата",
    icon: CreditCard,
    color: "#FDE68A",
    articles: [
      {
        title: "Сравнение тарифных планов",
        content: `## Тарифы BotForge

| | Старт | Трейдер | Профи |
|--|-------|---------|-------|
| Цена | Бесплатно | $49/мес | $149/мес |
| Ботов | 1 | 5 | ∞ |
| Макс. депозит | $500 | $50 000 | Без лимита |
| Арбитраж | ❌ | ❌ | ✅ |
| AI-сигналы | ❌ | ❌ | ✅ |
| Поддержка | Email | 24/7 | Персональный |
| VIP пулы | ❌ | ❌ | ✅ |

## Пробный период

Тарифы Трейдер и Профи включают **14 дней бесплатного использования** без ввода данных карты.`,
      },
      {
        title: "Реферальная программа",
        content: `## Как работает реферальная программа

Приглашайте друзей и получайте **20% от комиссий** партнёра пожизненно.

## Условия

- Реферал должен пополнить баланс от **$100**
- Выплаты каждую пятницу на баланс BotForge
- Нет лимита на количество рефералов

## Как начать

1. Перейдите в раздел **«Партнёрам»**
2. Скопируйте вашу реферальную ссылку
3. Поделитесь с друзьями

Средний партнёр зарабатывает **$300–$800/мес** при 10–20 активных рефералах.`,
      },
    ],
  },
  {
    category: "Безопасность",
    icon: Shield,
    color: "#DDD6FE",
    articles: [
      {
        title: "Как защищены ваши средства",
        content: `## Многоуровневая защита

**Холодное хранение:** 95% средств хранится в холодных кошельках, недоступных онлайн.

**Страховой фонд:** 5% от всех комиссий направляется в резервный фонд на случай непредвиденных ситуаций.

**Шифрование:** Все данные шифруются по стандарту AES-256.

## API-ключи бирж

Мы используем **только API с правами на торговлю** — без права вывода средств. Даже при компрометации API-ключей ваши средства на бирже недоступны для вывода.

## Аудит

Смарт-контракты и торговые алгоритмы проходят аудит у **CertiK** каждые 6 месяцев.`,
      },
    ],
  },
];

export default function Documentation() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({ cat: 0, art: 0 });

  const allArticles = docs.flatMap((d, ci) => d.articles.map((a, ai) => ({ ...a, ci, ai, category: d.category })));
  const filtered = search
    ? allArticles.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.content.toLowerCase().includes(search.toLowerCase()))
    : null;

  const currentArticle = docs[selected.cat]?.articles[selected.art];

  // Simple markdown renderer
  const renderContent = (text) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-black uppercase mt-6 mb-3 pb-2 border-b-2 border-black">{line.slice(3)}</h2>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-bold mb-2">{line.slice(2, -2)}</p>;
      if (line.startsWith("- ")) return <li key={i} className="ml-4 mb-1 list-disc font-mono text-sm">{line.slice(2).replace(/\*\*(.*?)\*\*/g, '$1')}</li>;
      if (line.startsWith("|")) {
        const cells = line.split("|").filter(Boolean).map(c => c.trim());
        return <tr key={i} className="border-b border-gray-200">{cells.map((c, j) => <td key={j} className="px-3 py-2 text-sm font-mono">{c}</td>)}</tr>;
      }
      if (line.startsWith("> ")) return <blockquote key={i} className="border-l-4 border-black pl-4 italic text-gray-600 my-3 font-mono text-sm">{line.slice(2)}</blockquote>;
      if (line.startsWith("```")) return null;
      if (line.trim() === "") return <div key={i} className="h-2" />;
      return <p key={i} className="font-mono text-sm text-gray-700 mb-2">{line.replace(/\*\*(.*?)\*\*/g, (_, m) => m)}</p>;
    });
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mb-6">
        <h1 className="text-3xl font-black uppercase tracking-widest flex items-center gap-3">
          <FileText className="w-8 h-8" /> Документация
        </h1>
        <p className="text-gray-500 mt-2 font-mono text-sm">Руководства, инструкции и ответы на вопросы</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Поиск по документации..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border-2 border-black pl-10 pr-4 py-3 font-mono text-sm focus:outline-none focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
        />
      </div>

      {/* Search results */}
      {search && (
        <div className="border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-6">
          {filtered.length === 0 ? (
            <p className="p-4 font-mono text-gray-500">Ничего не найдено</p>
          ) : filtered.map((a, i) => (
            <button key={i} onClick={() => { setSelected({ cat: a.ci, art: a.ai }); setSearch(""); }}
              className="w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 flex items-center gap-3">
              <HelpCircle className="w-4 h-4 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm">{a.title}</p>
                <p className="text-xs text-gray-500 font-mono">{a.category}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-72 flex-shrink-0 space-y-3">
          {docs.map((section, ci) => (
            <div key={ci} className="border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] bg-white">
              <div className="p-3 border-b-2 border-black flex items-center gap-2" style={{ background: section.color }}>
                <section.icon className="w-4 h-4" />
                <span className="font-black uppercase text-xs tracking-widest">{section.category}</span>
              </div>
              {section.articles.map((art, ai) => (
                <button
                  key={ai}
                  onClick={() => setSelected({ cat: ci, art: ai })}
                  className={`w-full text-left px-4 py-3 text-xs font-mono border-b border-gray-100 last:border-b-0 flex items-center gap-2 transition-colors ${
                    selected.cat === ci && selected.art === ai ? "bg-black text-white" : "hover:bg-gray-50"
                  }`}
                >
                  <ChevronRight className="w-3 h-3 flex-shrink-0" />
                  {art.title}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white">
          <div className="p-4 border-b-2 border-black bg-black text-white flex items-center gap-2">
            <Book className="w-4 h-4" />
            <span className="font-bold text-sm">{currentArticle?.title}</span>
          </div>
          <div className="p-6">
            {currentArticle && renderContent(currentArticle.content)}
          </div>
        </div>
      </div>
    </div>
  );
}
