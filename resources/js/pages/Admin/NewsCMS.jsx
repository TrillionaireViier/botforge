import React, { useState, useEffect } from 'react';
import { Newspaper, Plus, Edit2, Trash2, Globe } from 'lucide-react';

const NewsCMS = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = localStorage.getItem("botforge_token");
        const res = await fetch("/api/admin/articles", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setNews(data.filter(a => a.type === 'news'));
        }
      } catch (error) {
        console.error("Failed to fetch news", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Новости (CMS)</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5 mr-2" /> Добавить новость
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Последние новости платформы</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Заголовок</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Категория</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Статус</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Дата</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {news.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Newspaper className="w-5 h-5 text-gray-400" />
                      <span className="font-bold text-gray-900">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-600">{item.author || 'System'}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black ${item.status === 'published' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(item.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 border-2 border-black rounded hover:bg-gray-100"><Globe className="w-4 h-4" /></button>
                      <button className="p-2 border-2 border-black rounded hover:bg-gray-100"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-2 border-2 border-black rounded text-red-600 hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {news.length === 0 && !loading && (
                <tr>
                  <td colSpan="5" className="p-8 text-center font-bold text-gray-500">Нет новостей</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsCMS;
