import React, { useState } from 'react';
import { Settings2, Rocket, Save, Zap, AlertTriangle, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Configurator() {
  const [exchange, setExchange] = useState('BINANCE');
  const [pair, setPair] = useState('BTC/USDT');
  const [strategy, setStrategy] = useState('GRID');
  
  const [gridLevels, setGridLevels] = useState(20);
  const [leverage, setLeverage] = useState(5);
  const [investment, setInvestment] = useState(1000);

  const calculateRisk = () => {
    if (leverage > 20) return 'ЭКСТРЕМАЛЬНЫЙ';
    if (leverage > 10) return 'ВЫСОКИЙ';
    if (leverage > 5) return 'СРЕДНИЙ';
    return 'НИЗКИЙ';
  };

  const calculateEstProfit = () => {
    const base = (investment * 0.05) * (leverage / 5);
    return `~$${base.toFixed(2)} / мес`;
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">Создание Бота</h1>
          <p className="text-gray-600 font-bold uppercase mt-2">Конфигуратор торговой стратегии</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <Save className="w-5 h-5" />
          </button>
          <button className="bg-black text-white border-4 border-black px-6 py-3 font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors flex items-center gap-2 hover:-translate-y-1">
            <Rocket className="w-5 h-5" /> Запустить
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Form Settings */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-black block"></span> Основные настройки
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Биржа</label>
                <div className="flex gap-2">
                  {['BINANCE', 'BYBIT', 'OKX'].map(ex => (
                    <button 
                      key={ex}
                      onClick={() => setExchange(ex)}
                      className={`flex-1 py-3 text-sm font-bold uppercase border-2 border-black transition-colors ${exchange === ex ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Торговая Пара</label>
                <select 
                  value={pair} 
                  onChange={(e) => setPair(e.target.value)}
                  className="w-full bg-white border-2 border-black p-3 font-bold uppercase outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <option>BTC/USDT</option>
                  <option>ETH/USDT</option>
                  <option>SOL/USDT</option>
                  <option>DOGE/USDT</option>
                </select>
              </div>

              <div className="md:col-span-2 mt-4">
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Тип Стратегии</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'GRID', name: 'Grid Bot', desc: 'Сетка ордеров в канале' },
                    { id: 'DCA', name: 'DCA Bot', desc: 'Усреднение позиции' },
                    { id: 'AI', name: 'AI Signal', desc: 'По сигналам нейросети' }
                  ].map(s => (
                    <div 
                      key={s.id}
                      onClick={() => setStrategy(s.id)}
                      className={`border-2 border-black p-4 cursor-pointer transition-all ${strategy === s.id ? 'bg-yellow-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1' : 'bg-white hover:bg-gray-50'}`}
                    >
                      <h3 className="font-black uppercase mb-1">{s.name}</h3>
                      <p className="text-xs font-bold text-gray-600">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-black block"></span> Параметры Риска & Маржи
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Инвестиции (USDT)</label>
                  <span className="font-black text-lg">${investment}</span>
                </div>
                <input 
                  type="range" min="100" max="10000" step="100" 
                  value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full accent-black h-2 bg-gray-200 rounded-none appearance-none"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Уровни сетки (Grids)</label>
                  <span className="font-black text-lg">{gridLevels} уровней</span>
                </div>
                <input 
                  type="range" min="2" max="100" 
                  value={gridLevels} onChange={(e) => setGridLevels(Number(e.target.value))}
                  className="w-full accent-black h-2 bg-gray-200 rounded-none appearance-none"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Плечо (Leverage)</label>
                  <span className="font-black text-lg text-red-600">{leverage}x</span>
                </div>
                <input 
                  type="range" min="1" max="50" 
                  value={leverage} onChange={(e) => setLeverage(Number(e.target.value))}
                  className="w-full accent-red-600 h-2 bg-gray-200 rounded-none appearance-none"
                />
              </div>
            </div>

            <div className="mt-8 border-t-4 border-black pt-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-6 h-6 border-2 border-black accent-black" defaultChecked />
                <span className="font-bold uppercase text-sm tracking-wider">Включить Trailing Stop-Loss</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Sidebar Summary */}
        <div className="space-y-6">
          <div className="bg-black text-white border-4 border-black p-6 relative overflow-hidden group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <h2 className="text-xl font-black uppercase mb-6 tracking-widest border-b-2 border-gray-700 pb-4">Сводка</h2>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Биржа:</span>
                <span className="font-bold text-white">{exchange}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Пара:</span>
                <span className="font-bold text-yellow-300">{pair}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Стратегия:</span>
                <span className="font-bold text-white">{strategy}</span>
              </div>
              <div className="w-full h-px bg-gray-700 my-4"></div>
              <div className="flex justify-between">
                <span className="text-gray-400">Капитал:</span>
                <span className="font-bold text-white">${investment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Объем (с плечом):</span>
                <span className="font-bold text-white">${investment * leverage}</span>
              </div>
              <div className="flex justify-between items-center mt-6 p-3 border-2 border-gray-700 bg-gray-900">
                <span className="text-gray-400 uppercase font-sans font-bold text-xs">Уровень Риска</span>
                <span className={`font-black uppercase ${leverage > 10 ? 'text-red-500' : 'text-emerald-400'}`}>
                  {calculateRisk()}
                </span>
              </div>
            </div>
            
            <div className="mt-8 bg-white text-black p-4 border-2 border-transparent hover:border-white transition-colors cursor-default">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Прогноз доходности</p>
              <p className="text-3xl font-black">{calculateEstProfit()}</p>
            </div>
          </div>

          <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black uppercase flex items-center gap-2 mb-2"><ShieldCheck className="w-6 h-6" /> Защита Капитала</h3>
            <p className="text-sm font-bold">Убедитесь, что на вашем балансе {exchange} достаточно средств для поддержания маржи.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
