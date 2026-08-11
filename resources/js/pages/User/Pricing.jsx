import React, { useState } from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Базовый',
      price: billingCycle === 'monthly' ? '$19' : '$190',
      description: 'Идеально для новичков, начинающих свой путь в крипте.',
      features: ['До 2 активных ботов', 'Базовые торговые сигналы', 'Поддержка по Email', '1 Подключенная биржа'],
      icon: <Shield className="w-8 h-8 text-blue-500 mb-4" />,
      color: 'border-blue-500'
    },
    {
      name: 'Профи',
      price: billingCycle === 'monthly' ? '$49' : '$490',
      description: 'Продвинутые функции для серьезных трейдеров.',
      features: ['До 10 активных ботов', 'Премиум AI сигналы', 'Приоритетная поддержка 24/7', '3 Подключенные биржи', 'Продвинутый бэктестинг'],
      icon: <Star className="w-8 h-8 text-yellow-500 mb-4" />,
      color: 'border-yellow-500',
      popular: true
    },
    {
      name: 'Элит',
      price: billingCycle === 'monthly' ? '$99' : '$990',
      description: 'Максимальная мощность для институциональных объемов.',
      features: ['Безлимитные активные боты', 'API доступ в реальном времени', 'Персональный менеджер', 'Безлимитные биржи', 'Кастомная логика ботов'],
      icon: <Zap className="w-8 h-8 text-purple-500 mb-4" />,
      color: 'border-purple-500'
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-gray-900">Управление подпиской</h1>
        <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto">Текущий план: <span className="text-black bg-yellow-300 px-2 py-1 rounded">Профи (Активен)</span></p>
      </div>

      <div className="flex justify-center">
        <div className="bg-white p-1 rounded-lg border-2 border-black inline-flex">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-md font-bold transition-colors ${billingCycle === 'monthly' ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-600'}`}
          >
            Ежемесячно
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-md font-bold transition-colors ${billingCycle === 'yearly' ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-600'}`}
          >
            Ежегодно (Экономия 20%)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-white rounded-2xl p-8 border-4 relative flex flex-col ${plan.color} ${plan.popular ? 'shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform md:-translate-y-4' : 'shadow-[4px_4px_0_0_rgba(0,0,0,1)]'}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 border-2 border-black px-4 py-1 rounded-full font-bold text-sm">
                Самый популярный
              </div>
            )}
            
            {plan.icon}
            <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-black">{plan.price}</span>
              <span className="text-gray-500 font-bold">/{billingCycle === 'monthly' ? 'мес' : 'год'}</span>
            </div>
            <p className="text-gray-600 font-medium mb-6 h-12">{plan.description}</p>
            
            <div className="flex-1">
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="font-bold text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className={`w-full py-4 rounded-xl font-black text-lg border-2 border-black transition-transform hover:-translate-y-1 ${plan.name === 'Профи' ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'}`}>
              {plan.name === 'Профи' ? 'Текущий план' : `Перейти на ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 mt-12 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-red-800 text-lg">Отменить подписку</h3>
          <p className="text-red-600">Вы потеряете доступ к Pro-функциям в конце вашего расчетного периода.</p>
        </div>
        <button className="px-6 py-2 border-2 border-red-800 text-red-800 font-bold rounded-lg hover:bg-red-100 transition-colors">
          Отменить план
        </button>
      </div>
    </div>
  );
};

export default Pricing;
