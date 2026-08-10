import React, { useState } from 'react';
import { ShieldAlert, Save, TrendingDown } from 'lucide-react';

const RiskManagement = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Risk Management</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
          <ShieldAlert className="w-8 h-8 text-red-500" />
          <div>
            <h2 className="text-xl font-bold">Global Safety Limits</h2>
            <p className="text-gray-500">These settings apply to all your active bots and copy trades.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Global Stop Loss (%)</label>
              <div className="relative">
                <input type="number" defaultValue={10} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black pr-10" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Halt all trading if total portfolio drops by this amount in 24h.</p>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">Max Open Positions</label>
              <input type="number" defaultValue={5} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
              <p className="text-xs text-gray-500 mt-1">Maximum number of trades allowed across all bots.</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Max Position Size (USDT)</label>
              <input type="number" defaultValue={1000} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Daily Loss Limit (USDT)</label>
              <input type="number" defaultValue={500} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
            </div>
          </div>

          <div className="pt-6 border-t-2 border-gray-100">
            <h3 className="font-bold mb-4 flex items-center"><TrendingDown className="mr-2 w-5 h-5" /> Drawdown Protection</h3>
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 border-black text-black focus:ring-black" />
              <span className="font-medium">Automatically close all open positions if Global Stop Loss is hit</span>
            </label>
            <label className="flex items-center space-x-3 mt-4">
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 border-black text-black focus:ring-black" />
              <span className="font-medium">Pause all bots for 24h after hitting daily loss limit</span>
            </label>
          </div>

          <div className="pt-6 flex justify-end">
            <button 
              onClick={handleSave}
              className="px-6 py-3 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
            >
              <Save className="w-5 h-5 mr-2" />
              {saved ? 'Saved!' : 'Save Risk Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
