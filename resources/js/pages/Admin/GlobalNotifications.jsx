import React, { useState } from 'react';
import { Send, Bell, AlertTriangle, Info, MessageSquare } from 'lucide-react';

const GlobalNotifications = () => {
  const [history] = useState([
    { id: 1, title: 'Scheduled Maintenance', type: 'Warning', target: 'All Users', date: 'Yesterday, 14:00', reach: '12,450' },
    { id: 2, title: 'New Trading Pair: SOL/USDT', type: 'Info', target: 'Active Traders', date: 'Oct 20, 09:15', reach: '8,120' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Global Notifications</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
          <h2 className="text-xl font-bold mb-4 flex items-center"><Send className="mr-2" /> Broadcast Message</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Notification Title</label>
              <input type="text" placeholder="E.g., Important System Update" className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message Body</label>
              <textarea rows={4} placeholder="Type your message here..." className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Message Type</label>
                <select className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black font-bold">
                  <option>Information</option>
                  <option>Warning</option>
                  <option>Action Required</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Target Audience</label>
                <select className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black font-bold">
                  <option>All Users</option>
                  <option>Active Traders</option>
                  <option>Pro Subscribers</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 bg-black text-white rounded-md font-bold flex justify-center items-center hover:bg-gray-800 transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)] border-2 border-black mt-4">
              <Bell className="w-5 h-5 mr-2" /> Send Broadcast
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center"><MessageSquare className="mr-2" /> Broadcast History</h2>
          <div className="flex-1 space-y-4 overflow-y-auto">
            {history.map((item) => (
              <div key={item.id} className="p-4 border-2 border-gray-100 rounded-lg hover:border-black transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    {item.type === 'Warning' ? <AlertTriangle className="w-5 h-5 text-yellow-500" /> : <Info className="w-5 h-5 text-blue-500" />}
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <span className="text-xs font-bold text-gray-500">{item.date}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-gray-600">Target: {item.target}</span>
                  <span className="font-bold text-green-600">Reach: {item.reach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNotifications;
