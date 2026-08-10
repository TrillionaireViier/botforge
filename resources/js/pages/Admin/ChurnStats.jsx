import React from 'react';
import { Search, Plus, Filter, ArrowRight, Settings, Save, CheckCircle, AlertTriangle, RefreshCw, Server, FileText, BarChart3, Database } from 'lucide-react';
export default function ChurnStats() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black">Статистика Оттока</h1>
          <div className="w-16 h-2 bg-black mt-2"></div>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border-2 border-black px-4 py-2 font-bold uppercase text-sm outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
            <option>Последние 7 дней</option>
            <option>Этот месяц</option>
            <option>За все время</option>
          </select>
          <button className="bg-black text-white border-2 border-black px-4 py-2 font-bold uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <BarChart3 className="w-4 h-4" /> Экспорт CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-100 rounded-full group-hover:scale-150 transition-transform duration-500 z-0"></div>
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-wider">Всего</p>
            <p className="text-5xl font-black mt-2 mb-1">14,291</p>
            <p className="text-xs font-bold text-green-600 flex items-center gap-1">+12% с прошлой недели</p>
          </div>
        </div>
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] col-span-1 md:col-span-2 relative overflow-hidden">
          <p className="text-xs font-bold uppercase tracking-wider mb-4">График активности</p>
          <div className="flex items-end gap-2 h-24">
            {[30,50,40,70,60,90,40,60,80,50,70,100,60,80].map((h, i) => (
              <div key={i} className="w-full bg-black hover:bg-yellow-400 transition-colors cursor-pointer" style={{height: `${h}%`}}></div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xs font-bold uppercase tracking-wider">Конверсия</p>
          <p className="text-5xl font-black mt-2 mb-1">4.8%</p>
          <p className="text-xs font-bold text-black opacity-75 flex items-center gap-1">Цель: 5.0%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-black uppercase text-xl mb-6">Топ показатели</h3>
          <div className="space-y-4">
            {['Показатель А', 'Событие Б', 'Параметр В'].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm font-bold uppercase mb-1">
                  <span>{item}</span>
                  <span>{80 - idx * 15}%</span>
                </div>
                <div className="h-4 w-full border-2 border-black bg-gray-100">
                  <div className="h-full bg-black" style={{width: `${80 - idx * 15}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-black uppercase text-xl mb-6">Аномалии и Инсайты</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
              <p className="font-medium text-sm">Обнаружен аномальный рост метрики "Удержание" на 15% за последние 48 часов.</p>
            </li>
            <li className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0" />
              <p className="font-medium text-sm">Падение показателей в мобильной версии на iOS-устройствах.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
