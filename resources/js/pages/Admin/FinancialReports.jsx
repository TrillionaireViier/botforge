import React from 'react';
import { TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';

export default function FinancialReports() {
  const metrics = [
    { label: 'MRR (Регулярный доход)', value: '$12,450', change: '+15%', positive: true },
    { label: 'ARPU (Ср. доход на юзера)', value: '$45', change: '+2%', positive: true },
    { label: 'Новые оплаты за месяц', value: '312', change: '-5%', positive: false },
    { label: 'Возвраты (Refunds)', value: '$120', change: '-10%', positive: true },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">Финансовые Отчеты</h1>
          <p className="text-gray-600 mt-2 font-mono uppercase font-bold">Аналитика выручки и ключевые показатели (SaaS)</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black px-4 py-2 font-black uppercase border-4 border-black hover:bg-black hover:text-white transition-colors flex items-center gap-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <Calendar className="w-4 h-4" /> Этот Месяц
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <span className="font-bold text-xs uppercase tracking-widest text-gray-500">{m.label}</span>
              <DollarSign className="w-5 h-5 text-black" />
            </div>
            <div className="text-3xl font-black mb-2">{m.value}</div>
            <div className={`flex items-center text-sm font-bold ${m.positive ? 'text-green-600' : 'text-red-600'}`}>
              {m.positive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
              {m.change} с прошлого месяца
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] mt-8">
        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6" /> Динамика Выручки
        </h2>
        <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-400 flex items-center justify-center font-mono text-gray-500 uppercase tracking-widest">
          [Место для графика Chart.js / Recharts]
        </div>
      </div>
    </div>
  );
}
