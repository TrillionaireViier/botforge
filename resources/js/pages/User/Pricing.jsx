import React, { useState, useEffect } from 'react';
import { CreditCard, Zap, Check, ShieldCheck, History, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Pricing() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async (provider, plan = 'trial') => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("botforge_token");
      const res = await fetch(`/api/invoice/${provider}`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ plan })
      });
      
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseErr) {
        console.error("Non-JSON response:", text);
        setError("Ошибка сервера (ответ не в JSON). Посмотрите консоль. Возможно Laravel упал с 500 ошибкой.");
        setLoading(false);
        return;
      }
      
      if (res.ok && data.success) {
        if (provider === 'test' && data.user) {
          localStorage.setItem('botforge_user', JSON.stringify(data.user));
          window.location.reload();
          return;
        }
        if (data.payment_url) {
          window.location.href = data.payment_url;
        }
      } else {
        setError(data.message || "Ошибка при создании инвойса. Попробуйте позже.");
      }
    } catch (err) {
      console.error(err);
      setError("Ошибка сети: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("botforge_token");
      const res = await fetch(`/api/invoice/test-reset`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      const data = await res.json();
      if (res.ok && data.success && data.user) {
        localStorage.setItem('botforge_user', JSON.stringify(data.user));
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto space-y-12">
      
      <div className="text-center space-y-4 relative">
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
        <div className="bg-yellow-300 text-black border-4 border-black p-8 flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:-translate-y-4 hover:-translate-y-6 transition-all relative z-10">
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
            {user?.tier !== 'Free' ? (
              <button disabled className="w-full bg-gray-400 text-white border-4 border-black font-black uppercase tracking-widest py-3 flex justify-center items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] cursor-not-allowed">
                Недоступно
              </button>
            ) : (
              <button disabled={loading} onClick={() => handlePayment('nowpayments', 'trial')} className="w-full bg-blue-600 text-white border-4 border-black font-black uppercase tracking-widest py-3 hover:bg-blue-700 transition-colors flex justify-center items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] disabled:opacity-50">
                <Zap className="w-5 h-5" /> Купить за $10
              </button>
            )}
          </div>
        </div>

        {/* PRO */}
        <div className="bg-white text-black border-4 border-black p-8 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all relative">
          <h3 className="text-2xl font-black uppercase mb-2">Pro</h3>
          <div className="text-5xl font-black mb-6">$29<span className="text-lg text-gray-500">/мес</span></div>
          
          <ul className="space-y-4 mb-8 flex-1 font-bold text-sm uppercase">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> До 10 активных ботов</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Спот + Фьючерсы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Трейлинг стопы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Доступ в Маркетплейс</li>
          </ul>
          
          {user?.tier === 'Pro' ? (
            <button disabled className="w-full mt-auto bg-green-400 text-black border-4 border-black font-black uppercase tracking-widest py-4 flex justify-center gap-2 cursor-not-allowed">
              Ваш тариф
            </button>
          ) : user?.tier === 'Ultra' ? (
            <button disabled className="w-full mt-auto bg-gray-300 text-gray-500 border-4 border-black font-black uppercase tracking-widest py-4 flex justify-center gap-2 cursor-not-allowed">
              Младший тариф
            </button>
          ) : (
            <button disabled={loading} onClick={() => handlePayment('nowpayments', 'pro')} className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2 disabled:opacity-50">
              Купить Pro
            </button>
          )}
        </div>

        {/* ULTRA */}
        <div className="bg-white text-black border-4 border-black p-8 flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all relative">
          <h3 className="text-2xl font-black uppercase mb-2">Ultra</h3>
          <div className="text-5xl font-black mb-6">$99<span className="text-lg text-gray-500">/мес</span></div>
          
          <ul className="space-y-4 mb-8 flex-1 font-bold text-sm uppercase">
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Безлимит ботов</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> API Доступ</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> AI Сигналы</li>
            <li className="flex items-center gap-3"><Check className="w-5 h-5 text-black"/> Выделенный сервер</li>
          </ul>
          
          {user?.tier === 'Ultra' ? (
            <button disabled className="w-full mt-auto bg-green-400 text-black border-4 border-black font-black uppercase tracking-widest py-4 flex justify-center gap-2 cursor-not-allowed">
              Ваш тариф
            </button>
          ) : (
            <button disabled={loading} onClick={() => handlePayment('nowpayments', 'ultra')} className="w-full mt-auto bg-white text-black border-4 border-black font-black uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors flex justify-center gap-2 disabled:opacity-50">
              Купить Ultra
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-50 text-black border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="font-black uppercase text-2xl flex items-center gap-3 mb-6">
          <CreditCard className="w-8 h-8" /> Способы Оплаты
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-white border-2 border-black p-6 flex flex-col items-center justify-center gap-4 group">
            <ShieldCheck className="w-10 h-10 text-yellow-400" />
            <span className="font-bold uppercase tracking-widest text-center text-sm">Оплата Криптовалютой<br/><span className="text-xs text-gray-500">Через шлюз NOWPayments</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
