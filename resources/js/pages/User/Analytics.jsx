import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, PieChart as PieChartIcon, BarChart2, Loader2 } from 'lucide-react';

const Analytics = () => {
  const [stats, setStats] = useState({
    totalProfit: 0,
    winRate: 0,
    totalTrades: 0,
    maxDrawdown: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/dashboard/stats", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setStats({
            totalProfit: data.totalProfit,
            winRate: data.winRate,
            totalTrades: data.totalTrades,
            maxDrawdown: data.maxDrawdown
          });
        }
      } catch (error) {
        console.error("Failed to fetch analytics stats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
        <select className="p-2 border-2 border-black rounded-lg bg-white font-bold">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>All Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center text-center">
          <p className="text-sm font-bold text-gray-500 mb-2">Total Profit</p>
          <h3 className={`text-3xl font-black ${stats.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stats.totalProfit >= 0 ? '+' : ''}${Number(stats.totalProfit || 0).toFixed(2)}
          </h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center text-center">
          <p className="text-sm font-bold text-gray-500 mb-2">Win Rate</p>
          <h3 className="text-3xl font-black">{stats.winRate}%</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center text-center">
          <p className="text-sm font-bold text-gray-500 mb-2">Total Trades</p>
          <h3 className="text-3xl font-black">{stats.totalTrades}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center justify-center text-center">
          <p className="text-sm font-bold text-gray-500 mb-2">Max Drawdown</p>
          <h3 className="text-3xl font-black text-red-600">-{stats.maxDrawdown}%</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black min-h-[400px] flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center"><TrendingUp className="mr-2" /> Portfolio Growth</h2>
          <div className="flex-1 w-full flex items-end justify-between px-4 pb-4">
             {/* Fake Line Chart Representation */}
             <div className="w-4 bg-green-500 rounded-t-sm h-1/6"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-1/4"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-1/3"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-2/5 border-2 border-black"></div>
             <div className="w-4 bg-red-500 rounded-t-sm h-1/5"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-1/2"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-3/5"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-3/4 border-2 border-black"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-5/6"></div>
             <div className="w-4 bg-red-500 rounded-t-sm h-2/3 border-2 border-black"></div>
             <div className="w-4 bg-green-500 rounded-t-sm h-full"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
            <h2 className="text-xl font-bold mb-4 flex items-center"><PieChartIcon className="mr-2" /> Asset Allocation</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-bold mb-1"><span>USDT</span><span>60%</span></div>
                <div className="w-full bg-gray-200 h-2 rounded"><div className="bg-green-500 h-2 rounded" style={{ width: '60%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-1"><span>BTC</span><span>25%</span></div>
                <div className="w-full bg-gray-200 h-2 rounded"><div className="bg-orange-500 h-2 rounded" style={{ width: '25%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-1"><span>ETH</span><span>15%</span></div>
                <div className="w-full bg-gray-200 h-2 rounded"><div className="bg-blue-500 h-2 rounded" style={{ width: '15%' }}></div></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
            <h2 className="text-xl font-bold mb-4 flex items-center"><BarChart2 className="mr-2" /> Best Performing Pairs</h2>
            <div className="space-y-3">
              <div className="flex justify-between font-bold border-b-2 border-gray-100 pb-2">
                <span>BTC/USDT</span><span className="text-green-600">+$1,240</span>
              </div>
              <div className="flex justify-between font-bold border-b-2 border-gray-100 pb-2">
                <span>ETH/USDT</span><span className="text-green-600">+$850</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>SOL/USDT</span><span className="text-green-600">+$360</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
