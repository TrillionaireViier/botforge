import React, { useState } from 'react';
import { PenTool, Plus, Edit2, Trash2, Eye } from 'lucide-react';

const BlogCMS = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Top 5 Crypto Strategies for 2026', author: 'Alex King', status: 'Published', views: '12.4K', date: 'Oct 12, 2025' },
    { id: 2, title: 'How to use the new Backtesting Engine', author: 'Sarah Connor', status: 'Draft', views: '0', date: 'Nov 05, 2025' },
    { id: 3, title: 'Understanding Copy Trading Risks', author: 'John Doe', status: 'Published', views: '8.2K', date: 'Jan 20, 2026' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Blog CMS</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5 mr-2" /> New Post
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Manage Articles</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Title</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Author</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Views</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900 max-w-xs truncate">{post.title}</td>
                  <td className="px-6 py-4 text-gray-500">{post.author}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold">{post.views}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 border-2 border-black rounded hover:bg-gray-100"><Eye className="w-4 h-4" /></button>
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

export default BlogCMS;
