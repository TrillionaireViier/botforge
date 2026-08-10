import { useState } from "react";
import { Search, Filter, Download, UserCircle, MessageCircle, Trash } from "lucide-react";

export default function Leads() {
  const [leads, setLeads] = useState([
    { id: 1, contact: "@alex_invest", type: "telegram", sum: "5 000 USDT", status: "НОВАЯ", date: "2023-10-25 14:30" },
    { id: 2, contact: "+7 (999) 123-45-67", type: "phone", sum: "10 000 USDT", status: "В РАБОТЕ", date: "2023-10-25 12:15" },
    { id: 3, contact: "@crypto_whale", type: "telegram", sum: "50 000 USDT", status: "ПОДКЛЮЧЕН", date: "2023-10-24 18:00" },
    { id: 4, contact: "+7 (900) 000-00-00", type: "phone", sum: "2 000 USDT", status: "ОТКАЗ", date: "2023-10-24 10:20" },
  ]);

  const handleDelete = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-black pb-4">
        <div>
          <h1 className="text-3xl font-black text-black uppercase tracking-widest">УПРАВЛЕНИЕ ЗАЯВКАМИ</h1>
          <p className="text-gray-600 mt-2 text-sm uppercase">Список всех лидов с лендинга.</p>
        </div>
        <button className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 transition-colors border-2 border-black uppercase font-bold text-sm tracking-wider">
          <Download className="w-4 h-4" />
          <span>ЭКСПОРТ CSV</span>
        </button>
      </div>

      <div className="bg-white border-2 border-black overflow-hidden">
        <div className="p-4 border-b-2 border-black flex flex-col sm:flex-row gap-4 bg-gray-50">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
            <input 
              type="text" 
              placeholder="ПОИСК ПО КОНТАКТУ..." 
              className="w-full bg-white border-2 border-black pl-12 pr-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all uppercase text-sm font-bold placeholder-gray-400"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 px-6 py-3 transition-colors border-2 border-black text-black uppercase font-bold text-sm">
            <Filter className="w-4 h-4" />
            <span>ФИЛЬТРЫ</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white text-xs uppercase tracking-widest border-b-2 border-black">
                <th className="p-4 font-bold">Контакт</th>
                <th className="p-4 font-bold">Сумма</th>
                <th className="p-4 font-bold">Статус</th>
                <th className="p-4 font-bold">Дата</th>
                <th className="p-4 font-bold text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-100 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border-2 border-black flex items-center justify-center bg-white">
                        {lead.type === 'telegram' ? <MessageCircle className="w-4 h-4 text-black" /> : <UserCircle className="w-4 h-4 text-black" />}
                      </div>
                      <span className="font-bold text-black uppercase">{lead.contact}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-black text-black">{lead.sum}</span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-bold border-2 uppercase tracking-wider
                      ${lead.status === 'НОВАЯ' ? 'bg-white text-black border-black' : 
                        lead.status === 'В РАБОТЕ' ? 'bg-gray-200 text-black border-black' : 
                        lead.status === 'ПОДКЛЮЧЕН' ? 'bg-black text-white border-black' : 
                        'bg-gray-100 text-gray-500 border-gray-300'
                      }
                    `}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 font-medium">{lead.date}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-black font-bold uppercase tracking-wider border-b-2 border-black hover:bg-black hover:text-white transition-all px-2 py-1">
                        Открыть
                      </button>
                      <button 
                        onClick={() => handleDelete(lead.id)}
                        className="text-red-500 font-bold uppercase tracking-wider border-b-2 border-red-500 hover:bg-red-500 hover:text-white transition-all px-2 py-1 flex items-center gap-1"
                      >
                        <Trash className="w-4 h-4" /> Удалить
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t-2 border-black flex items-center justify-between text-xs font-bold uppercase tracking-widest bg-gray-50">
          <span>Показано 1-4 из 128 заявок</span>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors disabled:opacity-50">Пред.</button>
            <button className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors">След.</button>
          </div>
        </div>
      </div>
    </div>
  );
}
