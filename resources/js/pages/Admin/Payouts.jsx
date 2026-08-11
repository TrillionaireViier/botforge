import React, { useState } from 'react';
import { Download, CheckCircle, XCircle, DollarSign, Clock } from 'lucide-react';

export default function Payouts() {
  const [payouts] = useState([
    { id: 'PAY-8821', affiliate: 'TopCryptoBlogger', amount: '$450.00', wallet: '0x123...456', status: 'pending', date: '2026-08-11' },
    { id: 'PAY-8820', affiliate: 'TradingSignalGroup', amount: '$1,200.00', wallet: 'TRX98...XYZ', status: 'approved', date: '2026-08-10' },
    { id: 'PAY-8819', affiliate: 'Ivan Ivanov', amount: '$50.00', wallet: '0xabc...def', status: 'rejected', date: '2026-08-09' },
    { id: 'PAY-8818', affiliate: 'CryptoNinja', amount: '$320.00', wallet: '0x999...111', status: 'pending', date: '2026-08-08' },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end border-b-4 border-black pb-4">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest text-black">Выплаты</h1>
          <p className="text-gray-600 mt-2 font-mono uppercase font-bold">Управление заявками на вывод средств (Affiliate)</p>
        </div>
        <div className="flex gap-4 font-black uppercase text-sm">
          <div className="bg-yellow-300 border-4 border-black px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            Ожидает: $770.00
          </div>
          <button className="bg-black text-white px-4 py-2 border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center gap-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]">
            <Download className="w-4 h-4" /> CSV Экспорт
          </button>
        </div>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden mt-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black text-white uppercase font-black text-sm tracking-wider">
              <th className="p-4 border-r-2 border-gray-800">ID</th>
              <th className="p-4 border-r-2 border-gray-800">Партнер</th>
              <th className="p-4 border-r-2 border-gray-800">Сумма</th>
              <th className="p-4 border-r-2 border-gray-800">Кошелек (USDT)</th>
              <th className="p-4 border-r-2 border-gray-800">Статус</th>
              <th className="p-4 text-center">Действия</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((pay) => (
              <tr key={pay.id} className="border-b-4 border-black last:border-b-0 hover:bg-blue-50 transition-colors font-bold uppercase text-sm">
                <td className="p-4 border-r-4 border-black">{pay.id}</td>
                <td className="p-4 border-r-4 border-black">{pay.affiliate}</td>
                <td className="p-4 border-r-4 border-black text-green-600 text-lg">{pay.amount}</td>
                <td className="p-4 border-r-4 border-black font-mono text-xs">{pay.wallet}</td>
                <td className="p-4 border-r-4 border-black">
                  {pay.status === 'pending' && <span className="flex items-center gap-2 text-yellow-600"><Clock className="w-4 h-4"/> Ожидание</span>}
                  {pay.status === 'approved' && <span className="flex items-center gap-2 text-green-600"><CheckCircle className="w-4 h-4"/> Выплачено</span>}
                  {pay.status === 'rejected' && <span className="flex items-center gap-2 text-red-600"><XCircle className="w-4 h-4"/> Отклонено</span>}
                </td>
                <td className="p-4 flex items-center justify-center gap-2">
                  {pay.status === 'pending' ? (
                    <>
                      <button className="px-3 py-1 text-xs border-2 border-black bg-green-400 hover:bg-green-500 transition-colors flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Одобрить
                      </button>
                      <button className="px-3 py-1 text-xs border-2 border-black bg-red-400 hover:bg-red-500 transition-colors flex items-center gap-1">
                        <XCircle className="w-3 h-3" /> Отклонить
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400 text-xs">—</span>
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
