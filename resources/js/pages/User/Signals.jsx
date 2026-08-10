import React from 'react';
import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';

const Signals = () => {
  const signals = [
    { id: 1, pair: 'BTC/USDT', type: 'Buy', confidence: 92, time: '2 mins ago', price: '$64,200' },
    { id: 2, pair: 'ETH/USDT', type: 'Sell', confidence: 85, time: '15 mins ago', price: '$3,450' },
    { id: 3, pair: 'SOL/USDT', type: 'Buy', confidence: 78, time: '1 hour ago', price: '$145' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">AI Trading Signals</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg"><Activity className="w-6 h-6 text-blue-600" /></div>
            <div>
              <p className="text-sm text-gray-500">Active Signals</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg"><TrendingUp className="w-6 h-6 text-green-600" /></div>
            <div>
              <p className="text-sm text-gray-500">Win Rate</p>
              <h3 className="text-2xl font-bold">78.5%</h3>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-lg"><AlertTriangle className="w-6 h-6 text-yellow-600" /></div>
            <div>
              <p className="text-sm text-gray-500">High Risk Signals</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Recent Signals</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Pair</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Confidence</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Time</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {signals.map((signal) => (
                <tr key={signal.id}>
                  <td className="px-6 py-4 font-medium">{signal.pair}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${signal.type === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {signal.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">{signal.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${signal.confidence}%` }}></div>
                      </div>
                      <span className="text-sm font-medium">{signal.confidence}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{signal.time}</td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 bg-black text-white text-sm rounded-md font-semibold hover:bg-gray-800 transition-colors">Trade</button>
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

export default Signals;
