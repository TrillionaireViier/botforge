import React from 'react';
import { Search, Plus, Filter, ArrowRight, Settings, Save, CheckCircle, AlertTriangle, RefreshCw, Server, FileText, BarChart3, Database } from 'lucide-react';
export default function FileManager() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black">Файловый Менеджер</h1>
          <div className="w-16 h-2 bg-black mt-2"></div>
        </div>
        <button className="bg-black text-white border-4 border-black px-6 py-3 font-black uppercase tracking-widest text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors flex items-center gap-2 hover:-translate-y-1">
          <Plus className="w-5 h-5" /> Создать Элемент
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col group">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] mb-6 group-hover:rotate-12 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase mb-2">Элемент {i}00X</h3>
            <p className="text-sm font-medium text-gray-600 mb-6 flex-1">
              Это описание карточки с данными. Здесь может быть информация о рассылке, плагине или файле бэкапа.
            </p>
            <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4 mt-auto">
              <span className={`text-xs font-black uppercase tracking-widest ${i%2===0 ? 'text-green-600' : 'text-gray-400'}`}>
                {i%2===0 ? 'Активно' : 'Архив'}
              </span>
              <button className="font-bold text-sm hover:underline flex items-center gap-1 uppercase">
                Открыть <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
