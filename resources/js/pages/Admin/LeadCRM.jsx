import React, { useState, useEffect } from 'react';
import { Users, Phone, Mail, MoreVertical, Plus } from 'lucide-react';

const LeadCRM = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const token = localStorage.getItem("botforge_token");
        const res = await fetch("/api/admin/leads", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setLeads(data);
        }
      } catch (error) {
        console.error("Failed to fetch leads", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">CRM управления лидами</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
          <Plus className="w-5 h-5 mr-2" /> Добавить лид вручную
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black bg-blue-50">
          <p className="text-sm font-bold text-blue-600">Всего лидов (30дн)</p>
          <h3 className="text-3xl font-black mt-2 text-blue-800">452</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black bg-red-50">
          <p className="text-sm font-bold text-red-600">Новые / Без ответа</p>
          <h3 className="text-3xl font-black mt-2 text-red-800">28</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black bg-yellow-50">
          <p className="text-sm font-bold text-yellow-600">В процессе</p>
          <h3 className="text-3xl font-black mt-2 text-yellow-800">145</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black bg-green-50">
          <p className="text-sm font-bold text-green-600">Сконвертированы</p>
          <h3 className="text-3xl font-black mt-2 text-green-800">89</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold flex items-center"><Users className="w-5 h-5 mr-2" /> База лидов</h2>
          <select className="p-2 border-2 border-black rounded-lg font-bold">
            <option>Все статусы</option>
            <option>Новые</option>
            <option>В работе</option>
            <option>Сконвертированы</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Имя / Контакты</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Источник</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Статус</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Дата добавления</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900 mb-1">{lead.name}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-3">
                      <span className="flex items-center"><Mail className="w-3 h-3 mr-1" /> {lead.email}</span>
                      <span className="flex items-center font-bold text-green-600">${lead.value || 0}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-600">{lead.source || 'Прямой заход'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black ${
                      lead.status === 'New' ? 'bg-red-100 text-red-800' : 
                      lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-bold">{new Date(lead.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-200 rounded-md transition-colors"><MoreVertical className="w-5 h-5" /></button>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && !loading && (
                <tr>
                  <td colSpan="5" className="p-8 text-center font-bold text-gray-500">Нет лидов</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadCRM;
