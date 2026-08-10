import React from 'react';
import { Search, Plus, Filter, ArrowRight, Settings, Save, CheckCircle, AlertTriangle, RefreshCw, Server, FileText, BarChart3, Database } from 'lucide-react';
export default function Affiliate() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black">Партнерская программа</h1>
          <div className="w-16 h-2 bg-black mt-2"></div>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <Filter className="w-5 h-5" />
          </button>
          <button className="bg-black text-white border-2 border-black px-4 py-2 font-bold uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <Database className="w-4 h-4" /> Экспорт
          </button>
        </div>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="p-4 border-b-4 border-black flex justify-between items-center bg-gray-50">
          <div className="flex items-center border-2 border-black bg-white px-3 py-2 w-full max-w-md shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)]">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input type="text" placeholder="Поиск по ID, почте или имени..." className="w-full outline-none font-bold text-sm" />
          </div>
          <button className="p-2 hover:bg-gray-200 border-2 border-transparent hover:border-black transition-all rounded-full">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-black text-white text-xs uppercase tracking-widest">
                <th className="p-4 font-black border-r border-gray-700">ID</th>
                <th className="p-4 font-black border-r border-gray-700">Пользователь</th>
                <th className="p-4 font-black border-r border-gray-700">Статус</th>
                <th className="p-4 font-black border-r border-gray-700">Дата</th>
                <th className="p-4 font-black border-r border-gray-700">Детали</th>
                <th className="p-4 font-black text-right">Действия</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <tr key={i} className="border-b-2 border-gray-200 hover:bg-yellow-100 transition-colors group">
                  <td className="p-4 font-mono font-bold text-sm">#{i}8X9{i*2}</td>
                  <td className="p-4">
                    <div className="font-black text-sm">user_{i}@example.com</div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Tier {i%3 + 1}</div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-block border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${i%2===0 ? 'bg-green-300' : 'bg-red-300'}`}>
                      {i%2===0 ? 'Approved' : 'Pending'}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-sm font-bold text-gray-700">1{i} Oct 2026</td>
                  <td className="p-4 text-sm font-medium text-gray-600 truncate max-w-[150px]">Обновлен профиль по API</td>
                  <td className="p-4 text-right">
                    <button className="text-black font-black uppercase text-xs border-2 border-black px-3 py-1 bg-white opacity-0 group-hover:opacity-100 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      Смотреть
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t-4 border-black flex justify-between items-center bg-gray-50 text-sm font-bold uppercase tracking-wider">
          <span>Показано 1-7 из 450</span>
          <div className="flex gap-2">
            <button className="border-2 border-black px-3 py-1 bg-white hover:bg-black hover:text-white transition-colors">&lt;</button>
            <button className="border-2 border-black px-3 py-1 bg-white hover:bg-black hover:text-white transition-colors">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
