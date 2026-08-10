import React, { useState } from 'react';
import { Newspaper, Plus, Edit2, Trash2, Globe } from 'lucide-react';

const NewsCMS = () => {
  const [news, setNews] = useState([
    { id: 1, title: 'Botforgee Platform Update v2.1', category: 'Platform Update', status: 'Published', date: 'Oct 15, 2025' },
    { id: 2, title: 'New Binance API limits coming soon', category: 'Exchange News', status: 'Published', date: 'Nov 02, 2025' },
    { id: 3, title: 'Holiday Trading Schedule', category: 'Announcement', status: 'Draft', date: 'Dec 10, 2025' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">News CMS</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5 mr-2" /> Post News
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Latest Platform News</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Headline</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Category</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Actions</th>
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
                  <td className="px-6 py-4 font-bold text-gray-600">{item.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black ${item.status === 'Published' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 border-2 border-black rounded hover:bg-gray-100"><Globe className="w-4 h-4" /></button>
                      <button className="p-2 border-2 border-black rounded hover:bg-gray-100"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-2 border-2 border-black rounded text-red-600 hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsCMS;
