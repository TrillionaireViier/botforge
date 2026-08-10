import React, { useState, useEffect } from 'react';
import { DollarSign, CreditCard, TrendingUp, DownloadCloud, Activity } from 'lucide-react';

const RevenueTracking = () => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/admin/trades", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setTrades(data);
        }
      } catch (error) {
        console.error("Failed to fetch admin trades", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrades();
  }, []);

  const totalVolume = trades.reduce((sum, t) => sum + (t.amount * t.price), 0);
  const buyCount = trades.filter(t => t.type.toLowerCase() === 'buy').length;
  const sellCount = trades.filter(t => t.type.toLowerCase() === 'sell').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">System Trade Logs</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
          <DownloadCloud className="w-4 h-4 mr-2" /> Export Logs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <p className="text-sm font-bold text-gray-500">Total Trade Volume</p>
          <div className="flex items-center space-x-4 mt-2">
            <h3 className="text-4xl font-black">${totalVolume.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <p className="text-sm font-bold text-gray-500">Total Trades Executed</p>
          <div className="flex items-center space-x-4 mt-2">
            <h3 className="text-4xl font-black">{trades.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <p className="text-sm font-bold text-gray-500">Buy / Sell Ratio</p>
          <div className="flex items-center space-x-4 mt-2">
            <h3 className="text-4xl font-black">{buyCount} / {sellCount}</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black bg-gray-50">
          <h2 className="text-xl font-bold">All Platform Trades</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Trade ID</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">User</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Bot</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Pair / Type</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Amount / Price</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Profit</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {trades.map((trade) => (
                <tr key={trade.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono font-bold text-gray-500">{trade.id.substring(0, 8)}</td>
                  <td className="px-6 py-4 text-sm font-bold">{trade.user?.email || 'Unknown'}</td>
                  <td className="px-6 py-4 text-sm font-bold">{trade.bot?.name || 'Unknown'}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold">{trade.pair}</p>
                    <span className={`text-xs font-bold px-2 py-1 rounded border-2 border-black ${trade.type.toLowerCase() === 'buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {trade.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold">{trade.amount}</p>
                    <p className="text-xs text-gray-500">@ ${trade.price}</p>
                  </td>
                  <td className={`px-6 py-4 font-bold ${trade.profit > 0 ? 'text-green-600' : trade.profit < 0 ? 'text-red-600' : ''}`}>
                    {trade.profit > 0 ? '+' : ''}${trade.profit?.toFixed(2) || '0.00'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                    {new Date(trade.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
              {trades.length === 0 && !loading && (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-gray-500 font-bold">No trades found in the system.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RevenueTracking;
