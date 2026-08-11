import React, { useState } from 'react';
import { Star, TrendingUp, TrendingDown, Search, Plus } from 'lucide-react';

const Watchlist = () => {
  const [assets] = useState([
    { symbol: 'BTC/USDT', price: '$64,200.50', change: '+2.4%', up: true, volume: '$1.2B' },
    { symbol: 'ETH/USDT', price: '$3,450.20', change: '-1.2%', up: false, volume: '$800M' },
    { symbol: 'SOL/USDT', price: '$145.80', change: '+5.7%', up: true, volume: '$350M' },
    { symbol: 'XRP/USDT', price: '$0.54', change: '-0.5%', up: false, volume: '$120M' },
  ]);

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Избранное</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5 mr-2" /> Добавить актив
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black bg-gray-50">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder="Поиск по сохраненным парам..." className="w-full p-3 pl-10 border-2 border-black rounded-lg focus:ring-black focus:border-black font-bold" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 w-12"></th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Торговая пара</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Текущая цена</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Изм. 24ч</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Объем 24ч</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Действие</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {assets.map((asset, i) => (
                <tr key={i} className="hover:bg-gray-50 group">
                  <td className="px-6 py-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 cursor-pointer hover:scale-110 transition-transform" />
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">{asset.symbol}</td>
                  <td className="px-6 py-4 font-mono font-bold">{asset.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-black rounded-md flex items-center w-max border-2 border-transparent ${asset.up ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {asset.up ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                      {asset.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-500">{asset.volume}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 border-2 border-black rounded-lg font-bold text-sm hover:bg-black hover:text-white transition-colors">Торговать</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
