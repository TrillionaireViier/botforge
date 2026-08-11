import React from 'react';
import { UserMinus, AlertTriangle, PieChart } from 'lucide-react';

export default function ChurnStats() {
  const reasons = [
    { text: 'Слишком сложно использовать', count: 45, percentage: '40%' },
    { text: 'Дорого для моего депозита', count: 30, percentage: '26%' },
    { text: 'Мало AI сигналов', count: 20, percentage: '18%' },
    { text: 'Перешел к конкурентам', count: 18, percentage: '16%' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">Отток Пользователей</h1>
          <p className="text-gray-600 mt-2 font-mono uppercase font-bold">Аналитика отмен подписок (Churn Rate)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-red-400 border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-black">
          <div className="flex justify-between items-start">
            <span className="font-black uppercase text-sm tracking-widest">Churn Rate (Месяц)</span>
            <UserMinus className="w-6 h-6" />
          </div>
          <div className="text-5xl font-black mt-4">4.2%</div>
          <p className="font-bold text-sm mt-2 flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> На 0.5% больше, чем в июле</p>
        </div>

        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-black md:col-span-2">
          <h3 className="font-black uppercase mb-4 flex items-center gap-2 border-b-2 border-black pb-2">
            <PieChart className="w-5 h-5" /> Причины отмены (Опрос при отписке)
          </h3>
          <div className="space-y-4 mt-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-48 font-bold text-sm uppercase truncate">{r.text}</div>
                <div className="flex-1 h-6 bg-gray-200 border-2 border-black relative">
                  <div className="absolute top-0 left-0 h-full bg-black" style={{ width: r.percentage }}></div>
                </div>
                <div className="w-16 text-right font-black">{r.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
