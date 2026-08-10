import React from 'react';
import { Search, Plus, Filter, ArrowRight, Settings, Save, CheckCircle, AlertTriangle, RefreshCw, Server, FileText, BarChart3, Database } from 'lucide-react';
export default function Themes() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black">Настройки White-label</h1>
          <div className="w-16 h-2 bg-black mt-2"></div>
        </div>
        <button className="bg-black text-white border-2 border-black px-6 py-3 font-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors flex items-center gap-2 hover:-translate-y-1">
          <Save className="w-5 h-5" /> Сохранить Изменения
        </button>
      </div>

      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl font-black uppercase mb-6 border-b-2 border-gray-200 pb-2">Основные параметры</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">Глобальный Статус</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" className="w-5 h-5 accent-black" defaultChecked />
                <span className="font-bold">Включено</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" className="w-5 h-5 accent-black" />
                <span className="font-bold">Выключено</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">Основной Ключ / Токен</label>
            <input type="text" defaultValue="sk_live_1234567890" className="w-full bg-gray-50 border-2 border-black p-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2">Описание (Внутреннее)</label>
            <textarea rows="4" className="w-full bg-gray-50 border-2 border-black p-4 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></textarea>
          </div>
          
          <div className="pt-6 border-t-2 border-gray-200">
            <h3 className="font-bold uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" /> Опасная Зона</h3>
            <button className="bg-red-500 text-white border-2 border-black px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-red-500 transition-colors">Сбросить настройки к заводским</button>
          </div>
        </div>
      </div>
    </div>
  );
}
