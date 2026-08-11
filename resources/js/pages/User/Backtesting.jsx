import React, { useState } from 'react';
import { Play, Settings2, BarChart2 } from 'lucide-react';

const Backtesting = () => {
  const [running, setRunning] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Движок Бэктестинга</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
            <h2 className="text-xl font-bold mb-4 flex items-center"><Settings2 className="mr-2" /> Параметры</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Торговая пара</label>
                <select className="w-full p-2 border-2 border-black rounded-md focus:ring-black focus:border-black">
                  {['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT', 'XRP/USDT', 'ADA/USDT', 'DOGE/USDT', 'TRX/USDT', 'DOT/USDT', 'MATIC/USDT', 'LTC/USDT', 'BCH/USDT', 'SHIB/USDT', 'LINK/USDT', 'AVAX/USDT', 'XLM/USDT', 'UNI/USDT', 'ATOM/USDT', 'XMR/USDT', 'ETC/USDT', 'ALGO/USDT', 'ICP/USDT', 'FIL/USDT', 'HBAR/USDT', 'VET/USDT', 'NEAR/USDT', 'QNT/USDT', 'APT/USDT', 'ARB/USDT', 'MKR/USDT', 'AAVE/USDT', 'OP/USDT', 'GRT/USDT', 'SNX/USDT', 'RNDR/USDT', 'IMX/USDT', 'STX/USDT', 'INJ/USDT', 'NEO/USDT', 'EOS/USDT'].map((pair) => (
                    <option key={pair}>{pair}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Стратегия бота</label>
                <select className="w-full p-2 border-2 border-black rounded-md focus:ring-black focus:border-black">
                  <option>Grid Bot (Сетка)</option>
                  <option>DCA Bot (Усреднение)</option>
                  <option>Scalping Bot (Скальпинг)</option>
                  <option>Arbitrage (Арбитраж)</option>
                  <option>AI Trend Bot (Нейросеть)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Таймфрейм</label>
                <select className="w-full p-2 border-2 border-black rounded-md focus:ring-black focus:border-black">
                  <option>1h</option>
                  <option>4h</option>
                  <option>1d</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Период дат</label>
                <div className="flex space-x-2">
                  <input type="date" className="w-1/2 p-2 border-2 border-black rounded-md" />
                  <input type="date" className="w-1/2 p-2 border-2 border-black rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Начальный капитал (USDT)</label>
                <input type="number" defaultValue={10000} className="w-full p-2 border-2 border-black rounded-md" />
              </div>
              <button 
                onClick={() => setRunning(!running)}
                className={`w-full py-3 rounded-md font-bold flex justify-center items-center transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] ${running ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-black'}`}
              >
                {running ? 'Остановить тест' : <><Play className="w-5 h-5 mr-2" /> Запустить тест</>}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black min-h-[400px] flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center"><BarChart2 className="mr-2" /> Результаты</h2>
            {running ? (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-semibold animate-pulse">Запуск симуляции на исторических данных...</p>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <p>Настройте параметры и запустите тест, чтобы увидеть результаты.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backtesting;
