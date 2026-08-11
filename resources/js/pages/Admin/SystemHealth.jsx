import React from 'react';
import { Server, Database, Cloud, ShieldCheck, AlertCircle } from 'lucide-react';

const SystemHealth = () => {
  const services = [
    { name: 'Основная БД (PostgreSQL)', status: 'Работает', uptime: '99.99%', latency: '24ms', icon: <Database /> },
    { name: 'Ядро Торгового Движка', status: 'Работает', uptime: '99.95%', latency: '12ms', icon: <Server /> },
    { name: 'Binance API WebSocket', status: 'Сбой', uptime: '98.50%', latency: '450ms', icon: <Cloud /> },
    { name: 'Сервис Авторизации', status: 'Работает', uptime: '100%', latency: '18ms', icon: <ShieldCheck /> },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Состояние системы</h1>
        <div className="flex items-center space-x-2 text-sm font-bold px-3 py-1 bg-green-100 text-green-800 rounded-full border-2 border-black">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Все системы в норме</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="text-4xl font-black text-gray-900">99.98%</h2>
          <p className="text-gray-500 font-bold">Аптайм (30 дней)</p>
        </div>
        <div className="h-16 border-r-2 border-gray-200 hidden md:block"></div>
        <div className="flex flex-col text-center">
          <h2 className="text-2xl font-black text-gray-900">1,245</h2>
          <p className="text-gray-500 font-bold">Запросов / сек</p>
        </div>
        <div className="h-16 border-r-2 border-gray-200 hidden md:block"></div>
        <div className="flex flex-col text-right">
          <h2 className="text-2xl font-black text-gray-900">14ms</h2>
          <p className="text-gray-500 font-bold">Средний отклик</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Статус сервисов</h2>
        </div>
        <div className="p-6 space-y-6">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-2 border-gray-100 rounded-lg">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className={`p-3 rounded-lg border-2 border-black ${service.status === 'Работает' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{service.name}</h3>
                  <p className="text-sm text-gray-500">Задержка: {service.latency}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-500">Аптайм</span>
                  <span className="font-black">{service.uptime}</span>
                </div>
                <div className={`px-4 py-2 rounded-md font-bold text-sm border-2 border-black flex-1 text-center ${service.status === 'Работает' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800 flex items-center justify-center'}`}>
                  {service.status === 'Сбой' && <AlertCircle className="w-4 h-4 mr-1" />}
                  {service.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;
