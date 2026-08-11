import React, { useState } from 'react';
import { Ticket, Plus, Copy, Trash2, CheckCircle } from 'lucide-react';

export default function Promocodes() {
  const [promos] = useState([
    { code: 'START50', discount: '50%', limit: '100', used: 45, status: 'active' },
    { code: 'VIP2026', discount: '$20', limit: '10', used: 10, status: 'exhausted' },
    { code: 'SUMMER', discount: '15%', limit: '∞', used: 123, status: 'active' },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">Промокоды</h1>
          <p className="text-gray-600 mt-2 font-mono uppercase font-bold">Генерация скидок для маркетинга</p>
        </div>
        <button className="bg-yellow-300 text-black px-4 py-2 font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-colors flex items-center gap-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <Plus className="w-5 h-5" /> Создать Код
        </button>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black text-white uppercase font-black text-sm tracking-wider">
              <th className="p-4 border-r-2 border-gray-800">Код</th>
              <th className="p-4 border-r-2 border-gray-800">Скидка</th>
              <th className="p-4 border-r-2 border-gray-800">Использовано / Лимит</th>
              <th className="p-4 border-r-2 border-gray-800">Статус</th>
              <th className="p-4 text-center">Действия</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo, i) => (
              <tr key={i} className="border-b-4 border-black last:border-b-0 hover:bg-yellow-50 transition-colors font-bold uppercase text-sm">
                <td className="p-4 border-r-4 border-black">
                  <span className="bg-gray-100 border-2 border-black px-2 py-1 font-mono tracking-widest">{promo.code}</span>
                </td>
                <td className="p-4 border-r-4 border-black text-green-600 text-lg">{promo.discount}</td>
                <td className="p-4 border-r-4 border-black font-mono">
                  {promo.used} / {promo.limit}
                </td>
                <td className="p-4 border-r-4 border-black">
                  {promo.status === 'active' ? (
                    <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-4 h-4"/> Активен</span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-600">Исчерпан</span>
                  )}
                </td>
                <td className="p-4 flex items-center justify-center gap-2">
                  <button className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors" title="Копировать">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-2 border-2 border-black bg-red-400 hover:bg-red-500 transition-colors" title="Удалить">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
