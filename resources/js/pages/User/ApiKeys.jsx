import React, { useState, useEffect } from 'react';
import { Key, Plus, Trash2, Eye, EyeOff, Shield, Loader2 } from 'lucide-react';

const ApiKeys = () => {
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKeys = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/apikeys", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        const mappedKeys = data.map(k => ({
          id: k.id,
          exchange: k.exchange,
          name: k.name,
          lastUsed: k.lastUsed,
          permissions: 'Read, Trade' // Hardcoded for demo since DB doesn't store this yet
        }));
        setKeys(mappedKeys);
      }
    } catch (error) {
      console.error("Failed to fetch API keys", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeys();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this API Key?')) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/apikeys/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        setKeys(keys.filter(k => k.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete key", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">API Key Management</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800 flex items-center">
          <Plus className="w-5 h-5 mr-2" /> Add New Key
        </button>
      </div>

      <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 flex items-start space-x-3 rounded-r-md">
        <Shield className="w-6 h-6 text-yellow-600 mt-0.5" />
        <div>
          <h3 className="font-bold text-yellow-800">Security Recommendation</h3>
          <p className="text-sm text-yellow-700">Never share your API keys. Ensure that your API keys have IP restriction enabled and do NOT have withdrawal permissions enabled.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Connected Exchanges</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Exchange / Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Permissions</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Last Used</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {keys.map((key) => (
                <tr key={key.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-2 border-black">
                        <Key className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">{key.exchange}</p>
                        <p className="text-sm text-gray-500">{key.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{key.permissions}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{key.lastUsed}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"><Eye className="w-5 h-5" /></button>
                      <button onClick={() => handleDelete(key.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"><Trash2 className="w-5 h-5" /></button>
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

export default ApiKeys;
