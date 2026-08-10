import { Users, TrendingUp, DollarSign, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [adminStats, setAdminStats] = useState({
    userCount: 0,
    botCount: 0,
    activeBotCount: 0,
    tradeCount: 0,
    totalVolume: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setAdminStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch admin stats", error);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    { name: "TOTAL USERS", value: adminStats.userCount.toString(), change: "+12%", icon: Users },
    { name: "TOTAL BOTS", value: adminStats.botCount.toString(), change: `${adminStats.activeBotCount} Active`, icon: Activity },
    { name: "TRADE VOLUME", value: `$${adminStats.totalVolume.toLocaleString()}`, change: "+18%", icon: DollarSign },
    { name: "TOTAL TRADES", value: adminStats.tradeCount.toString(), change: "+2.1%", icon: TrendingUp },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-black pb-4">
        <h1 className="text-3xl font-black text-black uppercase tracking-widest">PLATFORM OVERVIEW</h1>
        <p className="text-gray-600 mt-2 font-mono text-sm uppercase">Global system statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white border-2 border-black p-6 relative group hover:bg-black hover:text-white transition-colors duration-150">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-sm tracking-wider">{stat.name}</p>
                  <p className="text-3xl font-black mt-2">{stat.value}</p>
                </div>
                <div className="p-3 border-2 border-black group-hover:border-white">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2 font-mono text-xs">
                <span className="font-bold">{stat.change}</span>
                <span className="text-gray-500 group-hover:text-gray-400">ЗА МЕСЯЦ</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-black p-6">
          <h2 className="text-xl font-black mb-4 uppercase tracking-wider border-b-2 border-black pb-2">Platform Activity</h2>
          <div className="flex flex-col items-center justify-center py-8 text-gray-500 font-mono text-sm">
            Platform analytics charts will be displayed here
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6">
          <h2 className="text-xl font-black mb-4 uppercase tracking-wider border-b-2 border-black pb-2">API Status</h2>
          <div className="space-y-4 pt-2">
            {['Binance Spot', 'Binance Futures', 'Bybit'].map((server, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-black bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 border border-black"></div>
                  </div>
                  <span className="font-bold uppercase tracking-wider">{server}</span>
                </div>
                <span className="text-xs font-black uppercase tracking-widest border border-black px-3 py-1 bg-white text-green-600">Online</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
