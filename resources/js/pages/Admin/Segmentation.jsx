import React from 'react';
import { Users, Filter, Download } from 'lucide-react';

export default function Segmentation() {
  const segments = [
    { name: 'Киты (Whales)', criteria: 'Депозит > $100k', usersCount: 12, arpu: '$250', color: 'bg-purple-300' },
    { name: 'Активные Трейдеры', criteria: '> 50 сделок в день', usersCount: 340, arpu: '$45', color: 'bg-blue-300' },
    { name: 'Спящие', criteria: 'Не заходили > 30 дней', usersCount: 1250, arpu: '$0', color: 'bg-gray-300' },
    { name: 'Новички', criteria: 'Регистрация < 7 дней', usersCount: 89, arpu: '$10', color: 'bg-green-300' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">Сегментация</h1>
          <p className="text-gray-600 mt-2 font-mono uppercase font-bold">Когортный анализ базы пользователей</p>
        </div>
        <button className="bg-black text-white px-4 py-2 font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
          <Filter className="w-4 h-4" /> Создать Сегмент
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {segments.map((seg, i) => (
          <div key={i} className={`${seg.color} border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform`}>
            <h3 className="font-black uppercase text-xl mb-1">{seg.name}</h3>
            <p className="font-mono text-xs uppercase font-bold border-b-2 border-black pb-2 mb-4">{seg.criteria}</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-white border-2 border-black p-2">
                <span className="font-bold uppercase text-xs">Юзеров</span>
                <span className="font-black">{seg.usersCount}</span>
              </div>
              <div className="flex justify-between items-center bg-white border-2 border-black p-2">
                <span className="font-bold uppercase text-xs">ARPU</span>
                <span className="font-black">{seg.arpu}</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-white border-2 border-black font-black uppercase text-xs py-2 hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
              <Download className="w-3 h-3" /> Экспорт CSV
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
