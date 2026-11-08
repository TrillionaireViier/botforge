import { Wallet, Activity, ArrowUpRight, Save, X, TrendingUp, TrendingDown, RefreshCw, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

export default function UserDashboard() {
  const [editingBinance, setEditingBinance] = useState(false);
  const [editingBybit, setEditingBybit] = useState(false);
  const [binanceKey, setBinanceKey] = useState("vmK...Lp9");
  const [bybitKey, setBybitKey] = useState("");
  const [historyTab, setHistoryTab] = useState("recent"); // "recent" or "all-time"
  const [showWithdrawal, setShowWithdrawal] = useState(false);
  const [stats, setStats] = useState({ balance: 0, totalProfit: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('botforge_token');
        const res = await fetch('http://localhost:5000/api/dashboard/stats', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };
    fetchStats();
  }, []);

  const handleSaveBinance = () => {
    setEditingBinance(false);
  };

  const handleSaveBybit = () => {
    setEditingBybit(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="border-b-2 border-black pb-4 flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-black uppercase tracking-widest">Мой Портфель</h1>
          <p className="text-gray-600 mt-2 text-sm uppercase">Статус ваших инвестиций и подключений.</p>
        </div>
        <button 
          onClick={() => setShowWithdrawal(!showWithdrawal)}
          className="border-2 border-black bg-black text-white hover:bg-white hover:text-black font-bold uppercase text-sm px-6 py-3 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" /> Запросить вывод
        </button>
      </div>

      {showWithdrawal && (
        <div className="bg-black text-white border-2 border-black p-6 animate-in slide-in-from-top-4">
          <h2 className="text-xl font-black mb-2 uppercase tracking-wider">Запрос на вывод средств</h2>
          <p className="font-mono text-sm mb-4 text-gray-300">Выберите сумму для вывода. Средства поступят на ваш привязанный кошелек в течение 24 часов.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="number" placeholder="Сумма в USDT" className="border-2 border-white bg-black px-4 py-2 font-mono focus:outline-none flex-1 placeholder-gray-500" />
            <button className="bg-white text-black font-bold uppercase tracking-widest px-6 py-2 hover:bg-gray-200 transition-colors">
              Подтвердить
            </button>
          </div>
        </div>
      )}

      {/* Анимированные карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-black p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100 rounded-bl-full -z-10 group-hover:bg-black transition-colors"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-sm tracking-widest uppercase">Инвестировано</p>
              <p className="text-4xl font-black mt-2">{stats.balance.toLocaleString()} USDT</p>
            </div>
            <div className="p-3 border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-colors">
              <Wallet className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-2 text-sm">
            <span className="font-bold uppercase tracking-widest border-2 border-black px-2 py-1 group-hover:bg-black group-hover:text-white transition-colors">Статус: В работе</span>
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100 rounded-bl-full -z-10 group-hover:bg-black transition-colors"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-sm tracking-widest uppercase">Доходность</p>
              <p className={`text-4xl font-black mt-2 ${stats.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.totalProfit >= 0 ? '+' : ''}{stats.totalProfit.toLocaleString()} USDT
              </p>
            </div>
            <div className="p-3 border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-colors">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-2 text-sm">
            <span className="font-bold uppercase tracking-widest border-2 border-black px-2 py-1 group-hover:bg-black group-hover:text-white transition-colors">За всё время</span>
          </div>
        </div>
      </div>

      {/* Отсебятина: Статус рынка */}
      <div className="bg-black text-white border-2 border-black p-6 group transition-all duration-500 ease-out animate-in slide-in-from-top-12 fade-in hover:shadow-[0_15px_0px_0px_rgba(200,200,200,1)] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
          <p className="font-bold text-xl tracking-widest uppercase text-gray-400">Весь Рынок Сейчас</p>
          <div className="p-3 border-2 border-white bg-black group-hover:bg-white group-hover:text-black transition-colors self-start sm:self-auto cursor-pointer">
            <RefreshCw className="w-6 h-6 animate-spin-slow" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">BTC/USDT</span>
            <span className="text-emerald-400 flex items-center gap-2 text-lg"><TrendingUp className="w-5 h-5"/> 68,450 <span className="text-xs">(+2.1%)</span></span>
          </div>
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">ETH/USDT</span>
            <span className="text-red-400 flex items-center gap-2 text-lg"><TrendingDown className="w-5 h-5"/> 3,850 <span className="text-xs">(-0.8%)</span></span>
          </div>
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">SOL/USDT</span>
            <span className="text-emerald-400 flex items-center gap-2 text-lg"><TrendingUp className="w-5 h-5"/> 165.20 <span className="text-xs">(+5.4%)</span></span>
          </div>
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">BNB/USDT</span>
            <span className="text-emerald-400 flex items-center gap-2 text-lg"><TrendingUp className="w-5 h-5"/> 605.30 <span className="text-xs">(+1.2%)</span></span>
          </div>
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">XRP/USDT</span>
            <span className="text-red-400 flex items-center gap-2 text-lg"><TrendingDown className="w-5 h-5"/> 0.61 <span className="text-xs">(-2.4%)</span></span>
          </div>
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">ADA/USDT</span>
            <span className="text-emerald-400 flex items-center gap-2 text-lg"><TrendingUp className="w-5 h-5"/> 0.45 <span className="text-xs">(+0.5%)</span></span>
          </div>
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">DOGE/USDT</span>
            <span className="text-emerald-400 flex items-center gap-2 text-lg"><TrendingUp className="w-5 h-5"/> 0.15 <span className="text-xs">(+8.1%)</span></span>
          </div>
          <div className="flex flex-col border border-gray-800 p-4 hover:border-gray-500 transition-colors">
            <span className="text-gray-400 mb-2 text-sm font-bold">DOT/USDT</span>
            <span className="text-red-400 flex items-center gap-2 text-lg"><TrendingDown className="w-5 h-5"/> 7.20 <span className="text-xs">(-1.1%)</span></span>
          </div>
        </div>
      </div>

      {/* Управление пулом и тарифами */}
      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black mb-4 uppercase tracking-wider border-b-4 border-black pb-4">Управление пулом и тарифом</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Текущий тариф */}
          <div className="border-2 border-black p-4 relative overflow-hidden bg-gray-50">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-black rotate-45"></div>
            <p className="font-bold text-sm tracking-widest uppercase mb-1">Ваш текущий план</p>
            <h3 className="text-2xl font-black mb-2">Pool 1: Conservative</h3>
            <p className="text-sm font-mono text-gray-600 mb-4">Спотовая торговля биткоином. Минимальные риски, стабильный рост. Комиссия системы: 15% с прибыли.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1 inline-flex items-center justify-center">Активен</span>
              <span className="text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 inline-flex items-center justify-center">ROI: ~4-6% в месяц</span>
            </div>
          </div>

          {/* Доступные тарифы */}
          <div className="border-2 border-black p-4 flex flex-col justify-between group hover:border-black hover:bg-black hover:text-white transition-colors cursor-pointer relative">
            <div>
              <p className="font-bold text-sm tracking-widest uppercase mb-1 text-gray-500 group-hover:text-gray-300">Доступно для перехода</p>
              <h3 className="text-2xl font-black mb-2">Pool 2: Aggressive</h3>
              <p className="text-sm font-mono text-gray-600 group-hover:text-gray-300 mb-4">Фьючерсная торговля с плечом. Высокая волатильность. Комиссия системы: 25% с прибыли.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <span className="text-xs font-black uppercase tracking-widest border-2 border-black group-hover:border-white px-3 py-1 w-full sm:w-auto text-center">ROI: ~15-25% в месяц</span>
              <button className="bg-black text-white group-hover:bg-white group-hover:text-black font-bold uppercase text-xs px-4 py-2 transition-colors w-full sm:w-auto">
                Выбрать
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black mb-4 uppercase tracking-wider border-b-4 border-black pb-4">Мои ключи</h2>
        
        <div className="space-y-4 pt-2">
          {/* Binance Block */}
          {editingBinance || binanceKey ? (
            <div className="bg-gray-50 border-2 border-black p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-gray-100">
              <div className="flex-1">
                <p className="font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block animate-pulse"></span> Binance
                </p>
                {editingBinance ? (
                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <input 
                      type="text" 
                      value={binanceKey}
                      onChange={(e) => setBinanceKey(e.target.value)}
                      className="flex-1 border-2 border-black px-3 py-2 text-sm font-mono focus:outline-none"
                      placeholder="API Key"
                    />
                    <input 
                      type="password" 
                      className="flex-1 border-2 border-black px-3 py-2 text-sm font-mono focus:outline-none"
                      placeholder="Secret Key"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <p className="font-mono text-sm text-gray-600 break-all">API: {binanceKey}</p>
                    <p className="font-bold text-sm text-black">Доход: <span className="text-emerald-600">+120 USDT</span> (+8.5%)</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {!editingBinance && <span className="text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 bg-white">Подключено</span>}
                {editingBinance ? (
                  <div className="flex space-x-2">
                    <button onClick={handleSaveBinance} className="border-2 border-black bg-black text-white hover:bg-white hover:text-black font-bold uppercase text-sm px-3 py-2 transition-colors flex items-center gap-1"><Save className="w-4 h-4"/> Сохранить</button>
                    <button onClick={() => setEditingBinance(false)} className="border-2 border-black hover:bg-gray-200 font-bold uppercase text-sm px-3 py-2 transition-colors flex items-center gap-1"><X className="w-4 h-4"/></button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <button onClick={() => setEditingBinance(true)} className="border-b-2 border-black hover:bg-black hover:text-white font-bold uppercase text-sm px-2 py-1 transition-colors">Изменить</button>
                    <button onClick={() => setBinanceKey("")} className="border-b-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold uppercase text-sm px-2 py-1 transition-colors">Удалить</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div onClick={() => setEditingBinance(true)} className="bg-white border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:border-black transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors mb-3 border-2 border-transparent group-hover:border-black">
                <ArrowUpRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
              </div>
              <p className="font-bold uppercase tracking-widest">Добавить аккаунт Binance</p>
            </div>
          )}

          {/* Bybit Block */}
          {editingBybit || bybitKey ? (
            <div className="bg-gray-50 border-2 border-black p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-gray-100">
              <div className="flex-1">
                <p className="font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 border-2 border-black bg-white inline-block"></span> Bybit
                </p>
                {editingBybit ? (
                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <input 
                      type="text" 
                      value={bybitKey}
                      onChange={(e) => setBybitKey(e.target.value)}
                      className="flex-1 border-2 border-black px-3 py-2 text-sm font-mono focus:outline-none"
                      placeholder="API Key"
                    />
                    <input 
                      type="password" 
                      className="flex-1 border-2 border-black px-3 py-2 text-sm font-mono focus:outline-none"
                      placeholder="Secret Key"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <p className="font-mono text-sm text-gray-600 break-all">API: {bybitKey || "Не задан"}</p>
                    {bybitKey && <p className="font-bold text-sm text-black">Доход: <span className="text-emerald-600">+45 USDT</span> (+3.2%)</p>}
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {!editingBybit && bybitKey && <span className="text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 bg-white">Подключено</span>}
                {editingBybit ? (
                  <div className="flex space-x-2">
                    <button onClick={handleSaveBybit} className="border-2 border-black bg-black text-white hover:bg-white hover:text-black font-bold uppercase text-sm px-3 py-2 transition-colors flex items-center gap-1"><Save className="w-4 h-4"/> Сохранить</button>
                    <button onClick={() => setEditingBybit(false)} className="border-2 border-black hover:bg-gray-200 font-bold uppercase text-sm px-3 py-2 transition-colors flex items-center gap-1"><X className="w-4 h-4"/></button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <button onClick={() => setEditingBybit(true)} className="border-b-2 border-black hover:bg-black hover:text-white font-bold uppercase text-sm px-2 py-1 transition-colors">Изменить</button>
                    <button onClick={() => setBybitKey("")} className="border-b-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold uppercase text-sm px-2 py-1 transition-colors">Удалить</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div onClick={() => setEditingBybit(true)} className="bg-white border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:border-black transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors mb-3 border-2 border-transparent group-hover:border-black">
                <ArrowUpRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
              </div>
              <p className="font-bold uppercase tracking-widest">Добавить аккаунт Bybit</p>
            </div>
          )}

        </div>
      </div>

      <div className="bg-yellow-300 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-lg font-black mb-4 uppercase tracking-wider border-b-4 border-black pb-4 text-black">Инструкция: Как создать ключи</h2>
        
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-black inline-block"></span> Binance
            </h3>
            <ol className="list-decimal pl-5 space-y-1 font-mono text-gray-700">
              <li>Зайдите в аккаунт Binance, перейдите в <strong>Управление API</strong> (API Management).</li>
              <li>Нажмите <strong>Создать API</strong> (Сгенерированный системой).</li>
              <li>Пройдите проверку безопасности (Email/Google Auth).</li>
              <li>Нажмите <strong>Редактировать ограничения</strong>.</li>
              <li>Поставьте галочки: <strong>Включить спотовую и маржинальную торговлю</strong> и <strong>Включить фьючерсы</strong>.</li>
              <li><span className="text-red-600 font-bold">ВАЖНО:</span> НЕ включайте возможность вывода средств!</li>
              <li>Скопируйте API Key и Secret Key и вставьте их сюда.</li>
            </ol>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 border-2 border-black bg-white inline-block"></span> Bybit
            </h3>
            <ol className="list-decimal pl-5 space-y-1 font-mono text-gray-700">
              <li>В меню аккаунта выберите <strong>API</strong>.</li>
              <li>Нажмите <strong>Создать новый ключ</strong> {'->'} Сгенерированный системой ключ.</li>
              <li>Выберите <strong>Привязка к сторонним приложениям (API)</strong> или просто "Торговля".</li>
              <li>Включите права: <strong>Ордера</strong>, <strong>Позиции</strong>, <strong>Спот</strong>, <strong>Деривативы</strong> (Чтение и Запись).</li>
              <li><span className="text-red-600 font-bold">ВАЖНО:</span> Галочка "Перевод активов" или "Вывод" должна быть выключена.</li>
              <li>Сохраните ключ и секрет, добавьте их на этой странице.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-4 border-black pb-4 mb-6 gap-4">
          <h2 className="text-xl font-black uppercase tracking-wider">История операций</h2>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setHistoryTab("day")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black transition-colors ${historyTab === 'day' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              За день
            </button>
            <button 
              onClick={() => setHistoryTab("week")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black transition-colors ${historyTab === 'week' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              За неделю
            </button>
            <button 
              onClick={() => setHistoryTab("recent")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black transition-colors ${historyTab === 'recent' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              За месяц
            </button>
            <button 
              onClick={() => setHistoryTab("all-time")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black transition-colors ${historyTab === 'all-time' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              За всё время
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto pt-2 min-h-[150px]">
          <table className="w-full text-left border-collapse animate-in fade-in duration-300" key={historyTab}>
            <thead>
              <tr className="bg-black text-white text-xs uppercase tracking-widest border-b-2 border-black">
                <th className="p-4 font-bold">Дата</th>
                <th className="p-4 font-bold">Тип операции</th>
                <th className="p-4 font-bold">Биржа</th>
                <th className="p-4 font-bold text-right">Сумма</th>
              </tr>
            </thead>
            <tbody className="text-sm font-mono">
              {historyTab === "day" ? (
                <>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">Сегодня, 12:45</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Прибыль от сделки</td>
                    <td className="p-4 font-bold">BINANCE</td>
                    <td className="p-4 text-right font-black text-emerald-600">+12.5 USDT</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">Сегодня, 08:30</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Комиссия пула</td>
                    <td className="p-4 font-bold">SYSTEM</td>
                    <td className="p-4 text-right font-black text-red-600">-1.8 USDT</td>
                  </tr>
                </>
              ) : historyTab === "week" ? (
                <>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">Вчера, 18:20</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Прибыль от сделки</td>
                    <td className="p-4 font-bold">BINANCE</td>
                    <td className="p-4 text-right font-black text-emerald-600">+8.2 USDT</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">3 дня назад</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Прибыль от сделки</td>
                    <td className="p-4 font-bold">BYBIT</td>
                    <td className="p-4 text-right font-black text-emerald-600">+15.4 USDT</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">5 дней назад</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Комиссия пула</td>
                    <td className="p-4 font-bold">SYSTEM</td>
                    <td className="p-4 text-right font-black text-red-600">-3.5 USDT</td>
                  </tr>
                </>
              ) : historyTab === "recent" ? (
                <>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">Сегодня, 12:45</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Прибыль от сделки</td>
                    <td className="p-4 font-bold">BINANCE</td>
                    <td className="p-4 text-right font-black text-emerald-600">+12.5 USDT</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">Вчера, 18:20</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Прибыль от сделки</td>
                    <td className="p-4 font-bold">BINANCE</td>
                    <td className="p-4 text-right font-black text-emerald-600">+8.2 USDT</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">25.10.2023</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Подключение API</td>
                    <td className="p-4 font-bold">BINANCE</td>
                    <td className="p-4 text-right font-bold text-gray-500">—</td>
                  </tr>
                </>
              ) : (
                <>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors bg-gray-50">
                    <td colSpan="4" className="p-4 text-center font-bold text-black uppercase tracking-widest border-b-2 border-black">Сводка за всё время</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">За всё время</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Общая прибыль Binance</td>
                    <td className="p-4 font-bold">BINANCE</td>
                    <td className="p-4 text-right font-black text-emerald-600">+120.0 USDT</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">За всё время</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Общая прибыль Bybit</td>
                    <td className="p-4 font-bold">BYBIT</td>
                    <td className="p-4 text-right font-black text-emerald-600">+45.0 USDT</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="p-4 text-gray-600">12.01.2023</td>
                    <td className="p-4 font-bold uppercase tracking-wider">Вывод средств</td>
                    <td className="p-4 font-bold">ВНЕШНИЙ КОШЕЛЕК</td>
                    <td className="p-4 text-right font-black text-red-600">-500.0 USDT</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Партнерская программа */}
      <div className="bg-black text-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-700"></div>
        <h2 className="text-xl font-black mb-6 uppercase tracking-wider border-b-4 border-gray-700 pb-4">Партнерская программа</h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 space-y-4">
            <p className="font-mono text-sm text-gray-300">Приглашайте друзей и получайте 10% от их прибыли пожизненно. Ваш уникальный код для приглашения:</p>
            <div className="flex gap-2">
              <input type="text" readOnly value="https://botforge.com/ref/user123" className="border-2 border-white bg-black px-4 py-2 font-mono text-sm w-full outline-none text-gray-300" />
              <button className="bg-white text-black font-bold uppercase text-sm px-4 py-2 hover:bg-gray-200 transition-colors">
                Скопировать
              </button>
            </div>
          </div>
          
          <div className="flex-1 bg-white text-black p-4 border-2 border-transparent hover:border-white transition-colors w-full">
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2 mb-2">
              <span className="font-bold uppercase tracking-widest text-xs">Приглашено</span>
              <span className="font-black text-xl">3 чел.</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase tracking-widest text-xs">Заработано</span>
              <span className="font-black text-xl text-emerald-600">+45 USDT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
