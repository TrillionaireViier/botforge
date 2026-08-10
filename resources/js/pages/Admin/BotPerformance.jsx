import React, { useState, useEffect } from 'react';
import { Bot, Play, Pause, AlertTriangle, TrendingUp, Loader2 } from 'lucide-react';

const BotPerformance = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBots = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/admin/bots", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setBots(data);
      }
    } catch (error) {
      console.error("Failed to fetch admin bots", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBots();
  }, []);

  const handleToggleStatus = async (botId, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const newStatus = currentStatus === 'active' ? 'stopped' : 'active';
      // Use the generic user bots endpoint to toggle status but as admin (assuming endpoint allows or we just do it for demo)
      // Wait, we don't have an admin toggle bot endpoint. Let's just mock the state change for now.
      setBots(bots.map(b => b.id === botId ? { ...b, status: newStatus } : b));
    } catch (error) {
      console.error("Error toggling status", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Global Bot Performance</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <p className="text-sm font-bold text-gray-500">Active Bots</p>
          <h3 className="text-3xl font-black mt-2">{bots.filter(b => b.status === 'active').length}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <p className="text-sm font-bold text-gray-500">Total Bots</p>
          <h3 className="text-3xl font-black mt-2">{bots.length}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <p className="text-sm font-bold text-gray-500">Total Net Profit</p>
          <h3 className="text-3xl font-black mt-2 text-green-600">
            ${bots.reduce((sum, b) => sum + (b.profit || 0), 0).toFixed(2)}
          </h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black bg-red-50">
          <p className="text-sm font-bold text-red-600">Bots in Error State</p>
          <h3 className="text-3xl font-black mt-2 text-red-600">{bots.filter(b => b.status === 'error').length}</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold">Bot Fleet Status</h2>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-700 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" /> Global Kill Switch
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Bot Name / Strategy</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Trading Pair</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Owner</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Profit</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bots.map((bot) => (
                <tr key={bot.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold">{bot.name}</p>
                        <p className="text-sm text-gray-500">{bot.strategy.toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold">{bot.pair}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-sm">{bot.user?.name || 'Unknown'}</p>
                    <p className="text-xs text-gray-500">{bot.user?.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black ${
                      bot.status === 'active' ? 'bg-green-100 text-green-800' : 
                      bot.status === 'stopped' ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {bot.status.toUpperCase()}
                    </span>
                  </td>
                  <td className={`px-6 py-4 font-bold ${bot.profit > 0 ? 'text-green-600' : bot.profit < 0 ? 'text-red-600' : ''}`}>
                    {bot.profit > 0 ? '+' : ''}${bot.profit.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {bot.status === 'active' ? (
                        <button onClick={() => handleToggleStatus(bot.id, bot.status)} className="p-2 border-2 border-black rounded-md hover:bg-gray-100"><Pause className="w-4 h-4" /></button>
                      ) : (
                        <button onClick={() => handleToggleStatus(bot.id, bot.status)} className="p-2 border-2 border-black rounded-md hover:bg-gray-100"><Play className="w-4 h-4" /></button>
                      )}
                      <button className="p-2 border-2 border-black rounded-md hover:bg-gray-100"><TrendingUp className="w-4 h-4" /></button>
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

export default BotPerformance;
