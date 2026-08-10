import React from 'react';
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight } from 'lucide-react';

const PlatformAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Platform Analytics</h1>
        <select className="p-2 border-2 border-black rounded-lg bg-white font-bold focus:ring-black">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500">Total Volume</p>
              <h3 className="text-2xl font-black mt-1">$45.2M</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg border-2 border-black"><Activity className="w-6 h-6 text-blue-600" /></div>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" /> +12.5% from last week
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500">Active Traders</p>
              <h3 className="text-2xl font-black mt-1">8,452</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-lg border-2 border-black"><Users className="w-6 h-6 text-green-600" /></div>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" /> +5.2% from last week
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500">Platform Revenue</p>
              <h3 className="text-2xl font-black mt-1">$125K</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg border-2 border-black"><DollarSign className="w-6 h-6 text-yellow-600" /></div>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" /> +18.1% from last week
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500">Avg. Bot ROI</p>
              <h3 className="text-2xl font-black mt-1">+14.2%</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg border-2 border-black"><TrendingUp className="w-6 h-6 text-purple-600" /></div>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" /> +2.4% from last week
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black h-80 flex flex-col items-center justify-center">
           <h3 className="font-bold text-xl mb-4 self-start">Trading Volume Trend</h3>
           <div className="w-full flex-1 flex items-end justify-between px-4 pb-4">
             {/* Fake Chart Bars */}
             <div className="w-8 bg-blue-500 rounded-t-sm h-1/4 border-2 border-black"></div>
             <div className="w-8 bg-blue-500 rounded-t-sm h-2/4 border-2 border-black"></div>
             <div className="w-8 bg-blue-500 rounded-t-sm h-1/3 border-2 border-black"></div>
             <div className="w-8 bg-blue-500 rounded-t-sm h-3/4 border-2 border-black"></div>
             <div className="w-8 bg-blue-500 rounded-t-sm h-1/2 border-2 border-black"></div>
             <div className="w-8 bg-blue-500 rounded-t-sm h-full border-2 border-black"></div>
             <div className="w-8 bg-blue-500 rounded-t-sm h-2/3 border-2 border-black"></div>
           </div>
           <div className="w-full flex justify-between text-xs font-bold text-gray-500 px-4">
             <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
           </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <h3 className="font-bold text-xl mb-4">Top Performing Bots</h3>
          <div className="space-y-4">
            {['Arbitrage Pro', 'Grid Master', 'DCA Aggressive', 'Trend Follower'].map((bot, i) => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border-2 border-transparent hover:border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">{i+1}</div>
                  <span className="font-bold">{bot}</span>
                </div>
                <span className="text-green-600 font-black">+{24 - (i*4)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformAnalytics;
