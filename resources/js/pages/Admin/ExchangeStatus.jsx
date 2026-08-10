import React from 'react';
import { Search, Plus, Filter, ArrowRight, Settings, Save, CheckCircle, AlertTriangle, RefreshCw, Server, FileText, BarChart3, Database } from 'lucide-react';
export default function ExchangeStatus() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-widest text-black">Статусы Бирж</h1>
          <div className="w-16 h-2 bg-black mt-2"></div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 font-bold text-sm uppercase px-4 py-2 border-2 border-black bg-green-100">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            System Online
          </div>
          <button className="bg-black text-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black transition-colors group">
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black text-green-400 font-mono p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2"><Server className="w-6 h-6 text-gray-600" /></div>
          <h3 className="text-white text-xs uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">Terminal Output</h3>
          <div className="space-y-1 text-sm h-64 overflow-y-auto">
            <p>root@server:~# systemctl status engine</p>
            <p className="text-gray-400">[OK] Engine started successfully.</p>
            <p>[INFO] Initializing worker nodes (0/5)...</p>
            <p>[INFO] Worker 1 connected [10.0.0.1]</p>
            <p>[INFO] Worker 2 connected [10.0.0.2]</p>
            <p className="text-yellow-400">[WARN] High latency detected on API Gateway</p>
            <p>[INFO] Scaling up instances...</p>
            <p className="text-gray-400">[OK] Scaling complete.</p>
            <p className="animate-pulse">_</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black uppercase text-lg mb-4">Uptime</h3>
            <div className="text-4xl font-black">99.98%</div>
            <div className="w-full bg-gray-200 h-2 mt-4 border border-black">
              <div className="bg-green-500 h-full w-[99%]"></div>
            </div>
          </div>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-black uppercase text-lg mb-4">Нагрузка CPU</h3>
            <div className="text-4xl font-black">42%</div>
            <div className="w-full bg-gray-200 h-2 mt-4 border border-black">
              <div className="bg-yellow-400 h-full w-[42%]"></div>
            </div>
          </div>
          <button className="w-full bg-red-500 text-white font-black uppercase tracking-widest p-4 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
            Экстренный Restart
          </button>
        </div>
      </div>
    </div>
  );
}
