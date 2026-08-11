import React, { useState, useEffect } from 'react';
import { CreditCard, Zap, Check, ShieldCheck, History, AlertCircle } from 'lucide-react';

export default function Billing() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async (provider) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/billing/${provider}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      
      if (data.success && data.payment_url) {
        window.location.href = data.payment_url;
      } else {
        setError("Ошибка при создании инвойса. Попробуйте позже.");
      }
    } catch (err) {
      setError("Ошибка сети.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto space-y-12">
      
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black uppercase tracking-widest text-black">Тарифные Планы</h1>
        <p className="text-xl font-bold text-gray-600 uppercase max-w-2xl mx-auto">Управляйте подпиской и увеличивайте лимиты своих торговых систем.</p>
        <div className="w-24 h-2 bg-black mx-auto mt-6"></div>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 p-4 flex items-start space-x-3 rounded">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 font-bold uppercase">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {/* TRIAL */}
        <div className="bg-yellow-300 border-4 border-black p-8 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:-translate-y-4 hover:-translate-y-6 transition-all relative z-10">
          <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-black uppercase text-xs tracking-widest border-l-4 border-b-4 border-black">Хит продаж</div>
          <h3 className="text-2xl font-black uppercase mb-2">Тестовая Неделя</h3>
          <div className="text-5xl font-black mb-6">$10<span className="text-lg text-gray-800">/7 дней</span></div>
          
          <ul className="space-y-4 mb-8 flex-1 font-bold text-sm uppercase">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> 1 Активный бот</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> 1 API Ключ (Binance)</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Защита от слива</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Бэктестинг</li>
          </ul>
          
          <div className="space-y-3 mt-auto">
            <button disabled={loading} onClick={() => handlePayment('cryptomus')} className="w-full bg-black text-white border-4 border-black font-black uppercase tracking-widest py-3 hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] disabled:opacity-50">
              <Zap className="w-5 h-5" /> Cryptomus
            </button>
            <button disabled={loading} onClick={() => handlePayment('whitebit')} className="w-full bg-white text-black border-4 border-black font-black uppercase tracking-widest py-3 hover:bg-black hover:text-white transition-colors flex justify-center items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] disabled:opacity-50">
              <CreditCard className="w-5 h-5" /> WhiteBIT Pay
            </button>
          </div>
        </div>

        {/* PRO */}
        <div className="bg-white border-4 border-black p-8 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all relative">
          <h3 className="text-2xl font-black uppercase mb-2">Pro</h3>
          <div className="text-5xl font-black mb-6">$29<span className="text-lg text-gray-500">/мес</span></div>
          
          <ul className="space-y-4 mb-8 flex-1 font-bold text-sm uppercase">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> До 10 активных ботов</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Спот + Фьючерсы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Трейлинг стопы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Доступ в Маркетплейс</li>
          </ul>
          
          <button className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">
            Купить Pro
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
          
          <button className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2">
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
            <span className="font-bold uppercase tracking-widest text-center">Криптовалюта<br/><span className="text-xs text-gray-500 group-hover:text-gray-300">Cryptomus / WhiteBIT</span></span>
          </div>
          <div className="flex-1 bg-white border-2 border-black p-6 flex flex-col items-center justify-center gap-4 hover:bg-black hover:text-white transition-colors cursor-pointer group">
            <CreditCard className="w-10 h-10 group-hover:text-blue-400" />
            <span className="font-bold uppercase tracking-widest">Банковская Карта (Stripe)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
