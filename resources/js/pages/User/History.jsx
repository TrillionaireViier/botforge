import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/history", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          // Map backend structure to frontend structure
          const mappedHistory = data.map(trade => ({
            id: `TRD-${trade.id}`,
            pair: trade.pair,
            type: trade.type.charAt(0).toUpperCase() + trade.type.slice(1).toLowerCase(),
            amount: trade.amount.toString(),
            price: `$${trade.price.toLocaleString()}`,
            total: `$${(trade.amount * trade.price).toLocaleString()}`,
            date: new Date(trade.createdAt).toLocaleString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
            status: trade.status.charAt(0).toUpperCase() + trade.status.slice(1),
            profit: trade.profit ? `${trade.profit > 0 ? '+' : ''}$${trade.profit.toFixed(2)}` : '$0.00'
          }));
          setHistory(mappedHistory);
        }
      } catch (error) {
        console.error("Failed to fetch history", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Trade History</h1>
        <button className="px-4 py-2 border-2 border-black rounded-md font-bold flex items-center hover:bg-gray-50 transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
          <Download className="w-4 h-4 mr-2" /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black bg-gray-50 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 flex-1">
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search pair, ID..." className="w-full p-2 pl-10 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
            </div>
            <select className="p-2 border-2 border-black rounded-lg font-bold bg-white">
              <option>All Pairs</option>
              <option>BTC/USDT</option>
              <option>ETH/USDT</option>
              <option>SOL/USDT</option>
            </select>
            <select className="p-2 border-2 border-black rounded-lg font-bold bg-white">
              <option>All Types</option>
              <option>Buy</option>
              <option>Sell</option>
            </select>
            <input type="date" className="p-2 border-2 border-black rounded-lg font-bold bg-white" />
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors">
            <Filter className="w-4 h-4 mr-2" /> Apply Filters
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Trade ID</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Pair / Date</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Amount / Price</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Total</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Profit/Loss</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {history.map((trade) => (
                <tr key={trade.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono font-bold text-gray-500">{trade.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{trade.pair}</p>
                    <p className="text-sm text-gray-500">{trade.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border-2 border-black flex items-center w-max ${trade.type === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {trade.type === 'Buy' ? <ArrowDownRight className="w-3 h-3 mr-1" /> : <ArrowUpRight className="w-3 h-3 mr-1" />}
                      {trade.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold">{trade.amount}</p>
                    <p className="text-sm text-gray-500">@ {trade.price}</p>
                  </td>
                  <td className="px-6 py-4 font-bold">{trade.total}</td>
                  <td className={`px-6 py-4 font-bold ${trade.profit.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {trade.profit}
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

export default History;
