import React from 'react';
import { Shield, Search, Filter, Download } from 'lucide-react';

const AuditLogs = () => {
  const logs = [
    { id: 'LOG-8842', admin: 'sys_admin', action: 'Изменил глобальный Stop Loss', target: 'Настройки рисков', ip: '192.168.1.104', date: '2026-06-28 10:14:22' },
    { id: 'LOG-8841', admin: 'support_sarah', action: 'Заблокировал пользователя', target: 'User ID: 8842', ip: '10.0.0.15', date: '2026-06-28 09:42:11' },
    { id: 'LOG-8840', admin: 'sys_admin', action: 'Ротация API ключей', target: 'Binance Prod Key', ip: '192.168.1.104', date: '2026-06-27 22:15:00' },
    { id: 'LOG-8839', admin: 'system', action: 'Авто-пауза бота (просадка)', target: 'Bot ID: bot-102', ip: 'internal', date: '2026-06-27 18:30:45' },
    { id: 'LOG-8838', admin: 'billing_sys', action: 'Выпущен возврат', target: 'User ID: 1045', ip: 'internal', date: '2026-06-27 14:20:00' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Аудит безопасности</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
          <Download className="w-4 h-4 mr-2" /> Экспорт логов (CSV)
        </button>
      </div>

      <div className="bg-yellow-50 p-4 border-2 border-yellow-400 rounded-lg flex items-start space-x-4">
        <Shield className="w-6 h-6 text-yellow-600 mt-1" />
        <div>
          <h3 className="font-bold text-yellow-800">Уведомление о соответствии</h3>
          <p className="text-sm text-yellow-700">Аудит-логи неизменяемы и хранятся в течение 365 дней в соответствии с финансовым законодательством. Вы не можете удалить эти записи.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black bg-gray-50 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder="Поиск по действию, админу или IP..." className="w-full p-2 pl-10 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border-2 border-black rounded-lg font-bold bg-white flex items-center hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" /> Фильтр
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Log ID</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Время</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Исполнитель</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Выполненное действие</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Целевой ресурс</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">IP адрес</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 text-sm">
                  <td className="px-6 py-4 font-mono font-bold text-gray-500">{log.id}</td>
                  <td className="px-6 py-4 text-gray-600">{log.date}</td>
                  <td className="px-6 py-4 font-bold">{log.admin}</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 px-2 py-1 rounded border border-gray-200 font-medium">
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4">{log.target}</td>
                  <td className="px-6 py-4 font-mono text-gray-500">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t-2 border-black flex justify-between items-center text-sm font-bold text-gray-500 bg-gray-50">
          <span>Показано от 1 до 5 из 1,240 записей</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border-2 border-black rounded bg-white hover:bg-gray-100 text-black">Пред.</button>
            <button className="px-3 py-1 border-2 border-black rounded bg-white hover:bg-gray-100 text-black">След.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;
