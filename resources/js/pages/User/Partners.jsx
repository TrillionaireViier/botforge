import React, { useState } from 'react';
import { Users, DollarSign, Link as LinkIcon, Copy, Share2, Award } from 'lucide-react';

const Partners = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://botforgee.com/ref/john_doe_99';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Affiliate Dashboard</h1>
        <div className="bg-yellow-300 border-2 border-black px-4 py-2 rounded-full font-bold flex items-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
          <Award className="w-5 h-5 mr-2" /> Gold Tier (20% Commision)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-4 bg-blue-100 rounded-lg border-2 border-black"><Users className="w-8 h-8 text-blue-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Total Referrals</p>
            <h3 className="text-3xl font-black">142</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-4 bg-green-100 rounded-lg border-2 border-black"><DollarSign className="w-8 h-8 text-green-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Total Earnings</p>
            <h3 className="text-3xl font-black text-green-600">$4,250</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex items-center space-x-4">
          <div className="p-4 bg-purple-100 rounded-lg border-2 border-black"><LinkIcon className="w-8 h-8 text-purple-600" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500">Link Clicks</p>
            <h3 className="text-3xl font-black">1,845</h3>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
        <h2 className="text-xl font-bold mb-4">Your Referral Link</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex border-2 border-black rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-3 border-r-2 border-black flex items-center justify-center">
              <LinkIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input 
              type="text" 
              readOnly 
              value={referralLink} 
              className="flex-1 px-4 font-mono font-bold focus:outline-none"
            />
            <button 
              onClick={handleCopy}
              className={`px-6 py-3 font-bold border-l-2 border-black transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'}`}
            >
              {copied ? 'Copied!' : <><Copy className="w-4 h-4 inline mr-2" /> Copy Link</>}
            </button>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold flex items-center justify-center hover:bg-blue-700 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            <Share2 className="w-5 h-5 mr-2" /> Share
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden mt-6">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Recent Payouts</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-black">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Tx Hash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-600">Oct {15 - i}, 2025</td>
                  <td className="px-6 py-4 font-bold text-green-600">+$245.00</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold border-2 border-black">Paid</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-500">0x8f4d...3a2{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Partners;
