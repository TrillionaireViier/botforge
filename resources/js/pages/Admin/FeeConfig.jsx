import React, { useState } from 'react';
import { Percent, Save, DollarSign } from 'lucide-react';

const FeeConfig = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Fee & Commission Configuration</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
          <Percent className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-xl font-bold">Trading & Platform Fees</h2>
            <p className="text-gray-500">Configure global platform fees and limits.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Bot Trading Fee (%)</label>
              <div className="relative">
                <input type="number" step="0.01" defaultValue={0.10} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black pr-10" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Fee taken per successful trade volume.</p>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">Copy Trading Commission (%)</label>
              <div className="relative">
                <input type="number" step="0.1" defaultValue={10.0} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black pr-10" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Percentage of follower profit given to the lead trader.</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Withdrawal Fee (USDT)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input type="number" defaultValue={2.5} className="w-full p-3 pl-10 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Platform Profit Share (%)</label>
              <div className="relative">
                <input type="number" defaultValue={2.0} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black pr-10" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Platform cut from copy-trading commissions.</p>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-gray-100 flex justify-end">
            <button 
              onClick={handleSave}
              className="px-6 py-3 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
            >
              <Save className="w-5 h-5 mr-2" />
              {saved ? 'Saved Successfully!' : 'Save Configurations'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeConfig;
