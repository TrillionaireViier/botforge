import React from 'react';
import { CreditCard, Zap, Check, ShieldCheck, History } from 'lucide-react';

export default function Billing() {
  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto space-y-12">
      
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black uppercase tracking-widest text-black">Тарифные Планы</h1>
        <p className="text-xl font-bold text-gray-600 uppercase max-w-2xl mx-auto">Управляйте подпиской и увеличивайте лимиты своих торговых систем.</p>
        <div className="w-24 h-2 bg-black mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {/* FREE */}
        <div className="bg-white border-4 border-black p-8 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all relative">
          <h3 className="text-2xl font-black uppercase mb-2">Basic</h3>
          <div className="text-5xl font-black mb-6">$0<span className="text-lg text-gray-500">/мес</span></div>
          
          <ul className="space-y-4 mb-8 flex-1 font-bold text-sm uppercase">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> 1 Активный бот</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Только Спот</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Базовые индикаторы</li>
            <li className="flex items-center gap-3 text-gray-400"><Check className="w-5 h-5 opacity-50"/> <s>Трейлинг стопы</s></li>
          </ul>
          
          <button className="w-full bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">
            Текущий План
          </button>
        </div>

        {/* PRO */}
        <div className="bg-yellow-300 border-4 border-black p-8 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:-translate-y-4 hover:-translate-y-6 transition-all relative z-10">
          <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-black uppercase text-xs tracking-widest border-l-4 border-b-4 border-black">Популярный</div>
          <h3 className="text-2xl font-black uppercase mb-2">Pro</h3>
          <div className="text-5xl font-black mb-6">$29<span className="text-lg text-gray-800">/мес</span></div>
          
          <ul className="space-y-4 mb-8 flex-1 font-bold text-sm uppercase">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> До 10 активных ботов</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Спот + Фьючерсы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Трейлинг стопы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Доступ в Маркетплейс</li>
          </ul>
          
          <button className="w-full bg-black text-white border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <Zap className="w-5 h-5 fill-white group-hover:fill-black" /> Купить Pro
          </button>
        </div>

        {/* ULTRA */}
        <div className="bg-white border-4 border-black p-8 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all relative">
          <h3 className="text-2xl font-black uppercase mb-2">Ultra</h3>
          <div className="text-5xl font-black mb-6">$99<span className="text-lg text-gray-500">/мес</span></div>
          
          <ul className="space-y-4 mb-8 flex-1 font-bold text-sm uppercase">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Безлимит ботов</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> API Доступ</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> AI Сигналы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Выделенный сервер</li>
          </ul>
          
          <button className="w-full bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">
            Купить Ultra
          </button>
        </div>
      </div>

      <div className="bg-gray-50 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase text-2xl flex items-center gap-3 mb-6">
          <CreditCard className="w-8 h-8" /> Способы Оплаты
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-white border-2 border-black p-6 flex flex-col items-center justify-center gap-4 hover:bg-black hover:text-white transition-colors cursor-pointer group">
            <ShieldCheck className="w-10 h-10 group-hover:text-yellow-400" />
            <span className="font-bold uppercase tracking-widest">Криптовалюта (USDT/USDC)</span>
          </div>
          <div className="flex-1 bg-white border-2 border-black p-6 flex flex-col items-center justify-center gap-4 hover:bg-black hover:text-white transition-colors cursor-pointer group">
            <CreditCard className="w-10 h-10 group-hover:text-blue-400" />
            <span className="font-bold uppercase tracking-widest">Банковская Карта (Stripe)</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="p-6 border-b-4 border-black flex items-center gap-3 bg-gray-50">
          <History className="w-6 h-6" />
          <h3 className="font-black uppercase text-xl">История платежей</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-black text-white text-xs uppercase tracking-widest border-b-4 border-black">
              <tr>
                <th className="p-4">Дата</th>
                <th className="p-4">Сумма</th>
                <th className="p-4">План</th>
                <th className="p-4">Статус</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold font-mono">
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">12 Oct 2026</td>
                <td className="p-4">$29.00</td>
                <td className="p-4">PRO (1 Month)</td>
                <td className="p-4"><span className="text-green-600 bg-green-100 px-2 py-1 uppercase text-xs">Успешно</span></td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">12 Sep 2026</td>
                <td className="p-4">$29.00</td>
                <td className="p-4">PRO (1 Month)</td>
                <td className="p-4"><span className="text-green-600 bg-green-100 px-2 py-1 uppercase text-xs">Успешно</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
