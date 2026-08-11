import React, { useState, useEffect } from 'react';
import { Search, Plus, Filter, Database, Tag, Trash2, Edit2, Eye } from 'lucide-react';

export default function Promocodes() {
  const [promocodes, setPromocodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromocodes = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("/api/admin/promocodes", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setPromocodes(data);
        }
      } catch (error) {
        console.error("Failed to fetch promocodes", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPromocodes();
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black">Управление Промокодами</h1>
          <div className="w-16 h-2 bg-black mt-2"></div>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <Filter className="w-5 h-5" />
          </button>
          <button className="bg-black text-white border-2 border-black px-4 py-2 font-bold uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Добавить
          </button>
        </div>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="p-4 border-b-4 border-black flex justify-between items-center bg-gray-50">
          <div className="flex items-center border-2 border-black bg-white px-3 py-2 w-full max-w-md shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)]">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input type="text" placeholder="Поиск по коду..." className="w-full outline-none font-bold text-sm" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-black text-white text-xs uppercase tracking-widest">
                <th className="p-4 font-black border-r border-gray-700">Код</th>
                <th className="p-4 font-black border-r border-gray-700">Скидка</th>
                <th className="p-4 font-black border-r border-gray-700">Использования</th>
                <th className="p-4 font-black border-r border-gray-700">Статус</th>
                <th className="p-4 font-black border-r border-gray-700">Истекает</th>
                <th className="p-4 font-black text-right">Действия</th>
              </tr>
            </thead>
            <tbody>
              {promocodes.map((promo) => (
                <tr key={promo.id} className="border-b-2 border-gray-200 hover:bg-yellow-100 transition-colors group">
                  <td className="p-4 font-mono font-bold text-sm text-blue-600">{promo.code}</td>
                  <td className="p-4 font-bold">
                    {promo.discount_type === 'percentage' ? `${promo.discount_value}%` : `$${promo.discount_value}`}
                  </td>
                  <td className="p-4 text-sm font-medium">
                    {promo.used} / {promo.max_uses}
                  </td>
                  <td className="p-4">
                    <span className={`inline-block border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${promo.status === 'active' ? 'bg-green-300' : 'bg-red-300'}`}>
                      {promo.status}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-sm font-bold text-gray-700">
                    {promo.expires_at ? new Date(promo.expires_at).toLocaleDateString() : 'Бессрочно'}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 border-2 border-black rounded hover:bg-white transition-colors opacity-0 group-hover:opacity-100"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-2 border-2 border-black rounded text-red-600 hover:bg-white transition-colors opacity-0 group-hover:opacity-100"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {promocodes.length === 0 && !loading && (
                <tr>
                  <td colSpan="6" className="p-8 text-center font-bold text-gray-500">Нет промокодов</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
