import { useState } from "react";
import { FileText, ChevronRight, Search, Book, Zap, Shield, TrendingUp, Bot, CreditCard, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const docs = [
  { category: "Начало работы", icon: Zap, color: "#D3F55F", articles: [
    { title: "Как зарегистрироваться и верифицировать аккаунт", content: `## Регистрация

1. Нажмите кнопку **«Начать»** на главной странице
2. Введите email и придумайте надёжный пароль
3. Подтвердите email — письмо придёт в течение 2 минут
4. Пройдите KYC верификацию (загрузите паспорт и селфи)

> Верификация занимает от 5 минут до 24 часов.

## Двухфакторная аутентификация

Настоятельно рекомендуем включить 2FA через Google Authenticator:


eНастройки → Безопасность → Включить 2FA

Это защитит ваш аккаунт даже при утечке пароля.` },
    { title: "Пополнение баланса и вывод средств", content: `## Пополнение

Поддерживаемые методы:
- **Криптовалюта** — BTC, ETH, USDT (TRC-20, ERC-20, BEP-20)
- **Банковская карта** — Visa, Mastercard
- **Банковский перевод** — SWIFT, SEPA

Минимальное пополнение: **$25**

## Вывод средств

Минимальный вывод: **$50**
Время обработки: **до 24 часов** в рабочие дни
Комиссия: **0%** для Профи-тарифа, **1%** для остальных

Портфель → Вывод → Выберите метод` },
    { title: "Выбор торгового бота и пула", content: `## Как выбрать бота

Ориентируйтесь на ваш риск-профиль:

| Профиль | Бот | Ожидаемый доход |
|---------|-----|----------------|
| Низкий риск | GridMaster, DCA | 14–21% годовых |
| Средний риск | TrendRider, ScalpBot | 22–34% годовых |
| Высокий риск | NewsTrader AI | до 45% годовых |
| Без риска | ArbitrageX | 16–24% годовых |

## Инвестирование в пул

1. Выберите бота в разделе **«Торговые боты»**
2. Нажмите кнопку пулов
3. Выберите пул и сумму вклада` },
  ]},
  { category: "Торговые боты", icon: Bot, color: "#A5F3FC", articles: [
    { title: "ScalpBot Pro — руководство", content: `## Стратегия

Комбинация RSI (14), EMA (9/21) и Volume Profile для краткосрочной торговли BTC, ETH и SOL.

## Риск-менеджмент

- Стоп-лосс: **0.8%** от входа
- Тейк-профит: **0.4%** (как описано в существующей конфигурации)
- Настройки: риск 0.5%, до 3 позиций, таймфрейм 1m.` },
    { title: "ArbitrageX — как работает арбитраж", content: `## Принцип работы

ArbitrageX сравнивает котировки на нескольких биржах. Результат зависит от комиссий, ликвидности и скорости исполнения; арбитраж не является безрисковым.

## Требования

- Аккаунты на нескольких биржах
- Проверка комиссий и проскальзывания перед запуском` },
    { title: "Liquidity Sweep + FVG Reversal — руководство", content: `## Назначение

Учебный сетап для BTC/ETH и ликвидных альткоинов: контекст на 1H, подтверждение и исполнение на 15m или 5m.

## Условия сетапа

- Для лонга определите sell-side liquidity (равные минимумы, PDL или минимум сессии); для шорта — зеркальную buy-side liquidity.
- Дождитесь sweep с возвратом закрытия свечи за уровнем.
- Нужен импульсный market structure shift (MSS) и трёхсвечной FVG.
- Планируйте вход на границе FVG или на его 50% после ретеста; стоп ставьте за sweep-экстремумом и не расширяйте.

## Управление риском

- Риск: 0.5–1% капитала, размер позиции рассчитывайте от расстояния до стопа.
- Проверяйте целевое соотношение риск/прибыль не менее 1:2.5.
- TP1: ближайшая внутренняя ликвидность; после частичной фиксации стоп остатка можно перенести в безубыток. TP2: противоположная ликвидность.
- Killzones по Киеву: Лондон 09:00–12:00, Нью-Йорк 15:30–19:00.
- OI/дельта/ликвидации — дополнительные фильтры, не гарантия результата.

## Полная страница и бэктест

Откройте /liquidity-fvg-strategy для полного описания или запустите симуляцию на странице «Бэктестинг». Серверная модель использует OHLCV, но не включает OI, delta, ликвидации, сессии и funding; учитывайте показанные в результатах допущения.` },
  ]},
  { category: "Тарифы и оплата", icon: CreditCard, color: "#FDE68A", articles: [
    { title: "Сравнение тарифных планов", content: `## Тарифы BotForge

Проверьте доступные функции и ограничения в разделе тарифов аккаунта.` },
    { title: "Реферальная программа", content: `## Как работает реферальная программа

Условия программы и доступные выплаты зависят от актуальных правил сервиса. Смотрите раздел «Партнёрам».` },
  ]},
  { category: "Безопасность", icon: Shield, color: "#DDD6FE", articles: [
    { title: "Как защищены ваши средства", content: `## Безопасность

Используйте API-ключи биржи без разрешения на вывод средств, включайте двухфакторную аутентификацию и сначала проверяйте стратегии в демо-режиме.

Криптодеривативы сопряжены с существенным риском и могут привести к потере залога.` },
  ]},
];

export default function Documentation() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({ cat: 0, art: 0 });
  const allArticles = docs.flatMap((section, ci) => section.articles.map((article, ai) => ({ ...article, ci, ai, category: section.category })));
  const filtered = search ? allArticles.filter(article => `${article.title} ${article.content}`.toLowerCase().includes(search.toLowerCase())) : null;
  const currentArticle = docs[selected.cat]?.articles[selected.art];

  const renderContent = (text) => text.split("\n").map((line, i) => {
    if (line.startsWith("## ")) return <h2 key={i} className="mb-3 mt-6 border-b-2 border-black pb-2 text-xl font-black uppercase">{line.slice(3)}</h2>;
    if (line.startsWith("- ")) return <li key={i} className="mb-1 ml-4 list-disc font-mono text-sm">{line.slice(2).replace(/\*\*(.*?)\*\*/g, '$1')}</li>;
    if (line.startsWith("|")) return <p key={i} className="mb-2 font-mono text-xs">{line.split("|").filter(Boolean).join(" · ")}</p>;
    if (line.startsWith("> ")) return <blockquote key={i} className="my-3 border-l-4 border-black pl-4 font-mono text-sm italic text-gray-600">{line.slice(2)}</blockquote>;
    if (!line.trim()) return <div key={i} className="h-2" />;
    return <p key={i} className="mb-2 font-mono text-sm text-gray-700">{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="mb-6">
        <h1 className="flex items-center gap-3 text-3xl font-black uppercase tracking-widest"><FileText className="h-8 w-8" /> Документация</h1>
        <p className="mt-2 font-mono text-sm text-gray-500">Руководства, инструкции и ответы на вопросы</p>
      </div>
      <Link to="/liquidity-fvg-strategy" className="mb-6 flex items-center justify-between gap-4 border-2 border-black bg-cyan-100 p-4 font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-cyan-200">
        <span><TrendingUp className="mr-2 inline h-5 w-5" /> Liquidity Sweep + FVG Reversal — открыть руководство стратегии</span><ChevronRight className="h-5 w-5 shrink-0" />
      </Link>
      <div className="relative mb-6"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Поиск по документации..." value={search} onChange={e => setSearch(e.target.value)} className="w-full border-2 border-black py-3 pl-10 pr-4 font-mono text-sm focus:outline-none" /></div>
      {search && <div className="mb-6 border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">{filtered.length === 0 ? <p className="p-4 font-mono text-gray-500">Ничего не найдено</p> : filtered.map((article, i) => <button key={i} onClick={() => { setSelected({ cat: article.ci, art: article.ai }); setSearch(""); }} className="flex w-full items-center gap-3 border-b border-gray-100 p-4 text-left hover:bg-gray-50"><HelpCircle className="h-4 w-4 shrink-0" /><span><b className="block text-sm">{article.title}</b><small className="font-mono text-gray-500">{article.category}</small></span></button>)}</div>}
      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="w-full shrink-0 space-y-3 lg:w-72">{docs.map((section, ci) => <div key={section.category} className="border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]"><div className="flex items-center gap-2 border-b-2 border-black p-3" style={{ background: section.color }}><section.icon className="h-4 w-4" /><span className="text-xs font-black uppercase tracking-widest">{section.category}</span></div>{section.articles.map((article, ai) => <button key={article.title} onClick={() => setSelected({ cat: ci, art: ai })} className={`flex w-full items-center gap-2 border-b border-gray-100 px-4 py-3 text-left text-xs transition-colors last:border-b-0 ${selected.cat === ci && selected.art === ai ? "bg-black text-white" : "hover:bg-gray-50"}`}><ChevronRight className="h-3 w-3 shrink-0" />{article.title}</button>)}</div>)}</aside>
        <article className="min-w-0 flex-1 border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"><header className="flex items-center gap-2 border-b-2 border-black bg-black p-4 text-white"><Book className="h-4 w-4" /><b className="text-sm">{currentArticle?.title}</b></header><div className="p-6">{currentArticle && renderContent(currentArticle.content)}{currentArticle?.title.startsWith("Liquidity Sweep") && <Link to="/liquidity-fvg-strategy" className="mt-5 inline-flex items-center gap-2 border-2 border-black bg-cyan-200 px-4 py-2 text-sm font-black hover:bg-cyan-300">Полная страница стратегии <ChevronRight className="h-4 w-4" /></Link>}</div></article>
      </div>
    </div>
  );
}
