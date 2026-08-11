import React, { useState } from 'react';
import { Search, ShieldAlert, CheckCircle, XCircle, Eye, FileText } from 'lucide-react';

export default function KYCAML() {
  const [requests] = useState([
    { id: 'KYC-1001', user: 'Alexey V.', email: 'alex@example.com', date: '2026-08-11', status: 'pending', riskScore: 'Low' },
    { id: 'KYC-1002', user: 'Ivan D.', email: 'ivan.d@example.com', date: '2026-08-10', status: 'approved', riskScore: 'Low' },
    { id: 'KYC-1003', user: 'Unknown Entity', email: 'crypto.boss@mail.com', date: '2026-08-09', status: 'rejected', riskScore: 'High' },
    { id: 'KYC-1004', user: 'Maria S.', email: 'maria@example.com', date: '2026-08-09', status: 'pending', riskScore: 'Medium' },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">KYC / AML Контроль</h1>
          <p className="text-gray-600 mt-2 font-mono uppercase font-bold">Управление верификацией пользователей</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-black text-white px-4 py-2 font-black uppercase border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
            <FileText className="w-4 h-4" /> Выгрузить лог
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input type="text" placeholder="ПОИСК ПО EMAIL ИЛИ ID..." className="w-full bg-white border-4 border-black p-3 pl-12 font-bold uppercase placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)]" />
        </div>
        <select className="bg-white border-4 border-black p-3 font-bold uppercase focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-[4px_4px_0_0_rgba(0,0,0,1)] cursor-pointer">
          <option>ВСЕ СТАТУСЫ</option>
          <option>ОЖИДАЮТ</option>
          <option>ОДОБРЕНЫ</option>
          <option>ОТКЛОНЕНЫ</option>
        </select>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black text-white uppercase font-black text-sm tracking-wider">
              <th className="p-4 border-r-2 border-gray-800">ID Заявки</th>
              <th className="p-4 border-r-2 border-gray-800">Пользователь</th>
              <th className="p-4 border-r-2 border-gray-800">Дата</th>
              <th className="p-4 border-r-2 border-gray-800">AML Риск</th>
              <th className="p-4 border-r-2 border-gray-800">Статус</th>
              <th className="p-4 text-center">Действия</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, i) => (
              <tr key={req.id} className="border-b-4 border-black last:border-b-0 hover:bg-yellow-50 transition-colors font-bold uppercase text-sm">
                <td className="p-4 border-r-4 border-black">{req.id}</td>
                <td className="p-4 border-r-4 border-black">
                  <div>{req.user}</div>
                  <div className="text-gray-500 text-xs mt-1">{req.email}</div>
                </td>
                <td className="p-4 border-r-4 border-black">{req.date}</td>
                <td className="p-4 border-r-4 border-black">
                  <span className={`px-2 py-1 border-2 border-black ${req.riskScore === 'High' ? 'bg-red-400' : req.riskScore === 'Medium' ? 'bg-yellow-400' : 'bg-green-400'}`}>
                    {req.riskScore}
                  </span>
                </td>
                <td className="p-4 border-r-4 border-black">
                  {req.status === 'pending' && <span className="flex items-center gap-2 text-yellow-600"><ShieldAlert className="w-4 h-4"/> На проверке</span>}
                  {req.status === 'approved' && <span className="flex items-center gap-2 text-green-600"><CheckCircle className="w-4 h-4"/> Одобрен</span>}
                  {req.status === 'rejected' && <span className="flex items-center gap-2 text-red-600"><XCircle className="w-4 h-4"/> Отклонен</span>}
                </td>
                <td className="p-4 flex items-center justify-center gap-2">
                  <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors" title="Просмотр документов">
                    <Eye className="w-4 h-4" />
                  </button>
                  {req.status === 'pending' && (
                    <>
                      <button className="p-2 border-2 border-black bg-green-400 hover:bg-green-500 transition-colors" title="Одобрить">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 border-2 border-black bg-red-400 hover:bg-red-500 transition-colors" title="Отклонить">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
