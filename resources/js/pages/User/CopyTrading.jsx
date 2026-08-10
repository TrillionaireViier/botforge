import React from 'react';
import { Users, Star, TrendingUp } from 'lucide-react';

const CopyTrading = () => {
  const topTraders = [
    { id: 1, name: 'CryptoKing', roi: '+145.2%', followers: 1205, risk: 'High', avatar: 'CK' },
    { id: 2, name: 'SafeGains', roi: '+42.8%', followers: 3420, risk: 'Low', avatar: 'SG' },
    { id: 3, name: 'AlphaSeeker', roi: '+89.5%', followers: 856, risk: 'Medium', avatar: 'AS' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Copy Trading Marketplace</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800">
          My Copied Traders
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topTraders.map((trader) => (
          <div key={trader.id} className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold mb-4 border-2 border-black">
              {trader.avatar}
            </div>
            <h3 className="text-xl font-bold">{trader.name}</h3>
            <div className="flex items-center space-x-1 text-green-600 my-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-bold text-lg">{trader.roi} ROI</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center"><Users className="w-4 h-4 mr-1" /> {trader.followers}</div>
              <div className="flex items-center"><Star className="w-4 h-4 mr-1 text-yellow-500" /> {trader.risk} Risk</div>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              Copy Trader
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopyTrading;
