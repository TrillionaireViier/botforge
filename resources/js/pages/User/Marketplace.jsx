import React, { useState } from 'react';
import { Search, TrendingUp, Users, Copy, Star, Shield, Filter, ArrowUpRight } from 'lucide-react';

export default function Marketplace() {
  const [filter, setFilter] = useState('ALL');

  const strategies = [
    { id: 1, name: 'Safe Haven DCA', author: '@cryptoking', risk: 'Low', roi: '+4.2%', users: 1240, pair: 'BTC/USDT', rating: 4.9 },
    { id: 2, name: 'Aggressive Alt Grid', author: '@degen_bot', risk: 'High', roi: '+28.5%', users: 342, pair: 'SOL/USDT', rating: 4.5 },
    { id: 3, name: 'ETH Stacking', author: '@eth_whale', risk: 'Medium', roi: '+12.1%', users: 890, pair: 'ETH/USDT', rating: 4.8 },
    { id: 4, name: 'Meme Coin Sniper', author: '@moonboy', risk: 'Extreme', roi: '+145.0%', users: 2100, pair: 'DOGE/USDT', rating: 3.9 },
    { id: 5, name: 'Stable Yield', author: '@system', risk: 'Low', roi: '+1.5%', users: 5400, pair: 'USDC/USDT', rating: 5.0 },
    { id: 6, name: 'Trend Follower 5x', author: '@pro_trader', risk: 'High', roi: '+34.2%', users: 67, pair: 'BNB/USDT', rating: 4.2 },
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">Маркетплейс</h1>
          <p className="text-gray-600 font-bold uppercase mt-2">Копитрейдинг и готовые стратегии</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="flex items-center border-4 border-black bg-white px-3 py-2 w-full md:w-64 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input type="text" placeholder="Поиск стратегий..." className="w-full outline-none font-bold text-sm" />
          </div>
          <button className="bg-black text-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors">
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {['ALL', 'LOW RISK', 'HIGH ROI', 'NEW', 'TOP RATED'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 font-black uppercase tracking-widest border-2 border-black transition-all whitespace-nowrap ${filter === f ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]' : 'bg-white hover:bg-gray-100'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {strategies.map(s => (
          <div key={s.id} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col group">
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-black uppercase">{s.name}</h3>
                <p className="text-sm font-bold text-gray-500">{s.author}</p>
              </div>
              <div className="flex items-center gap-1 font-black bg-yellow-300 border-2 border-black px-2 py-1 text-sm">
                <Star className="w-4 h-4 fill-black" /> {s.rating}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 font-mono text-sm border-t-2 border-b-2 border-gray-200 py-4">
              <div>
                <p className="text-gray-500 uppercase font-sans font-bold text-xs">ROI (30д)</p>
                <p className="font-black text-emerald-600 text-lg flex items-center gap-1"><TrendingUp className="w-4 h-4"/> {s.roi}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase font-sans font-bold text-xs">Пара</p>
                <p className="font-bold">{s.pair}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase font-sans font-bold text-xs">Риск</p>
                <p className="font-bold flex items-center gap-1"><Shield className="w-4 h-4" /> {s.risk}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase font-sans font-bold text-xs">Копируют</p>
                <p className="font-bold flex items-center gap-1"><Users className="w-4 h-4" /> {s.users}</p>
              </div>
            </div>

            <div className="mt-auto flex gap-2">
              <button className="flex-1 bg-black text-white border-2 border-black font-black uppercase py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2">
                <Copy className="w-4 h-4" /> Копировать
              </button>
              <button className="w-12 border-2 border-black flex justify-center items-center hover:bg-gray-100 transition-colors group-hover:rotate-12">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
