import React, { useState } from 'react';
import { Play, Settings2, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Backtesting = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'running' | 'finished'
  const [error, setError] = useState(null);
  
  // Form State
  const [pair, setPair] = useState('BTC/USDT');
  const [strategy, setStrategy] = useState('Grid Bot (Сетка)');
  const [timeframe, setTimeframe] = useState('1h');
  const [capital, setCapital] = useState(10000);
  
  // Results State
  const [results, setResults] = useState(null);

  const handleRunBacktest = async () => {
    if (status === 'running') {
      setStatus('idle');
      return;
    }
    
    setStatus('running');
    setError(null);
    setResults(null);

    try {
      const response = await fetch('/api/backtest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          pair,
          timeframe,
          strategy,
          capital
        })
      });

      const data = await response.json();
      
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Ошибка сервера при бэктестинге');
      }

      setResults(data.data);
      setStatus('finished');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

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
                <select value={pair} onChange={e => setPair(e.target.value)} className="w-full p-2 border-2 border-black rounded-md focus:ring-black focus:border-black">
                  {['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT', 'XRP/USDT', 'ADA/USDT', 'DOGE/USDT', 'TRX/USDT', 'DOT/USDT', 'MATIC/USDT', 'LTC/USDT', 'BCH/USDT', 'SHIB/USDT', 'LINK/USDT', 'AVAX/USDT', 'XLM/USDT', 'UNI/USDT', 'ATOM/USDT', 'XMR/USDT', 'ETC/USDT', 'ALGO/USDT', 'ICP/USDT', 'FIL/USDT', 'HBAR/USDT', 'VET/USDT', 'NEAR/USDT', 'QNT/USDT', 'APT/USDT', 'ARB/USDT', 'MKR/USDT', 'AAVE/USDT', 'OP/USDT', 'GRT/USDT', 'SNX/USDT', 'RNDR/USDT', 'IMX/USDT', 'STX/USDT', 'INJ/USDT', 'NEO/USDT', 'EOS/USDT'].map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Стратегия бота</label>
                <select value={strategy} onChange={e => setStrategy(e.target.value)} className="w-full p-2 border-2 border-black rounded-md focus:ring-black focus:border-black">
                  <option value="Grid Bot (Сетка)">Grid Bot (Сетка)</option>
                  <option value="DCA Bot (Усреднение)">DCA Bot (Усреднение)</option>
                  <option value="Scalping Bot (Скальпинг)">Scalping Bot (Скальпинг)</option>
                  <option value="Arbitrage (Арбитраж)">Arbitrage (Арбитраж)</option>
                  <option value="AI Trend Bot (Нейросеть)">AI Trend Bot (Нейросеть)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Таймфрейм</label>
                <select value={timeframe} onChange={e => setTimeframe(e.target.value)} className="w-full p-2 border-2 border-black rounded-md focus:ring-black focus:border-black">
                  <option value="1h">1h</option>
                  <option value="4h">4h</option>
                  <option value="1d">1d</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Период дат (Опционально)</label>
                <div className="flex space-x-2">
                  <input type="date" className="w-1/2 p-2 border-2 border-black rounded-md opacity-50 cursor-not-allowed" disabled title="Автоматически используется 1000 последних свечей" />
                  <input type="date" className="w-1/2 p-2 border-2 border-black rounded-md opacity-50 cursor-not-allowed" disabled title="Автоматически используется 1000 последних свечей" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Начальный капитал (USDT)</label>
                <input type="number" value={capital} onChange={e => setCapital(Number(e.target.value))} min="1" className="w-full p-2 border-2 border-black rounded-md" />
              </div>
              <button 
                onClick={handleRunBacktest}
                disabled={status === 'running'}
                className={`w-full py-3 rounded-md font-bold flex justify-center items-center transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] ${status === 'running' ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-green-500 hover:bg-green-600 text-black'}`}
              >
                {status === 'running' ? 'Тестирование...' : <><Play className="w-5 h-5 mr-2" /> Запустить тест</>}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black min-h-[400px] flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center"><BarChart2 className="mr-2" /> Результаты</h2>
            
            {error && (
              <div className="p-4 mb-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p className="font-bold">Ошибка</p>
                <p>{error}</p>
              </div>
            )}

            {status === 'running' && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-semibold animate-pulse">Скачивание OHLCV и запуск симуляции...</p>
              </div>
            )}

            {status === 'idle' && !error && (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <p>Настройте параметры и запустите тест, чтобы увидеть результаты.</p>
              </div>
            )}

            {status === 'finished' && results && (
              <div className="flex-1 flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className={`p-4 border-2 border-black ${results.roi >= 0 ? 'bg-[#D3F55F]' : 'bg-red-200'}`}>
                    <p className="text-xs font-bold uppercase">ROI</p>
                    <p className="text-2xl font-black mt-1">{results.roi > 0 ? '+' : ''}{results.roi}%</p>
                  </div>
                  <div className={`p-4 border-2 border-black ${results.net_profit >= 0 ? 'bg-[#A5F3FC]' : 'bg-red-200'}`}>
                    <p className="text-xs font-bold uppercase">Чистая Прибыль</p>
                    <p className="text-2xl font-black mt-1">{results.net_profit > 0 ? '+' : ''}${results.net_profit}</p>
                  </div>
                  <div className="p-4 border-2 border-black bg-white">
                    <p className="text-xs font-bold uppercase">Винрейт</p>
                    <p className="text-2xl font-black mt-1">{results.winrate}%</p>
                    <p className="text-xs text-gray-500 mt-1">Всего сделок: {results.total_trades}</p>
                  </div>
                  <div className="p-4 border-2 border-black bg-white">
                    <p className="text-xs font-bold uppercase">Макс. Просадка</p>
                    <p className="text-2xl font-black mt-1 text-red-500">-{results.max_drawdown}%</p>
                  </div>
                </div>
                
                <div className="flex-1 border-2 border-black flex flex-col p-4 bg-gray-50 min-h-[350px]">
                  <h3 className="font-bold mb-4">Кривая доходности (Equity Curve)</h3>
                  <div className="flex-1 w-full min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={results.equity_curve}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="time" 
                          tick={{fontSize: 10}} 
                          minTickGap={50}
                        />
                        <YAxis 
                          domain={['auto', 'auto']} 
                          tick={{fontSize: 10}}
                          tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip 
                          contentStyle={{ border: '2px solid black', borderRadius: '8px', boxShadow: '4px 4px 0 0 rgba(0,0,0,1)' }}
                          formatter={(value) => [`$${value}`, 'Капитал']}
                          labelStyle={{ fontWeight: 'bold', color: 'black' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="equity" 
                          stroke="#000000" 
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 6, fill: '#D3F55F', stroke: 'black', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backtesting;
