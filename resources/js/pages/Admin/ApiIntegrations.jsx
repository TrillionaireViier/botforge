import React, { useState } from 'react';
import { Link, CheckCircle, XCircle, RefreshCw, Key } from 'lucide-react';

const ApiIntegrations = () => {
  const [integrations] = useState([
    { id: 1, name: 'Binance API', type: 'Exchange', status: 'Connected', lastSync: '2 mins ago', calls: '145K / day' },
    { id: 2, name: 'Bybit API', type: 'Exchange', status: 'Connected', lastSync: '5 mins ago', calls: '82K / day' },
    { id: 3, name: 'OpenAI GPT-4', type: 'AI Service', status: 'Connected', lastSync: '1 min ago', calls: '12K / day' },
    { id: 4, name: 'Stripe Payments', type: 'Billing', status: 'Error', lastSync: '2 hours ago', calls: '150 / day' },
    { id: 5, name: 'SendGrid Email', type: 'Communication', status: 'Connected', lastSync: '10 mins ago', calls: '5K / day' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">API Integration Settings</h1>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black bg-gray-50 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center"><Link className="w-5 h-5 mr-2" /> Connected Services</h2>
          <button className="px-4 py-2 bg-black text-white rounded-md font-bold hover:bg-gray-800 transition-colors">
            Add New Integration
          </button>
        </div>
        <div className="p-6 space-y-4">
          {integrations.map((integration) => (
            <div key={integration.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-2 border-gray-200 rounded-xl hover:border-black transition-colors bg-white">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className={`p-3 rounded-lg border-2 border-black ${integration.status === 'Connected' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {integration.status === 'Connected' ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{integration.name}</h3>
                  <p className="text-sm font-bold text-gray-500">{integration.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
                <div className="flex flex-col px-4 border-r-2 border-gray-200">
                  <span className="text-xs font-bold text-gray-500">API Calls</span>
                  <span className="font-bold text-gray-900">{integration.calls}</span>
                </div>
                <div className="flex flex-col px-4 border-r-2 border-gray-200">
                  <span className="text-xs font-bold text-gray-500">Last Sync</span>
                  <span className="font-bold text-gray-900">{integration.lastSync}</span>
                </div>
                <div className="flex space-x-2 pl-2">
                  <button className="px-3 py-2 border-2 border-black rounded-lg font-bold hover:bg-gray-50 flex items-center text-sm">
                    <Key className="w-4 h-4 mr-2" /> Rotate Key
                  </button>
                  <button className="p-2 border-2 border-black rounded-lg hover:bg-gray-50">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiIntegrations;
