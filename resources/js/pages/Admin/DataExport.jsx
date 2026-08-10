import React, { useState } from 'react';
import { Download, Database, Users, Activity, FileSpreadsheet, FileJson, Clock } from 'lucide-react';

const DataExport = () => {
  const [exporting, setExporting] = useState(false);

  const handleExport = () => {
    setExporting(true);
    setTimeout(() => setExporting(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Data Export Hub</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center border-2 border-black mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">User Database</h3>
          <p className="text-sm font-medium text-gray-500 mb-4">Export all active, suspended, and deleted user accounts with profile data.</p>
          <div className="text-xs font-bold text-gray-400 flex items-center">
            <Clock className="w-3 h-3 mr-1" /> Last exported: Yesterday
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="p-3 bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center border-2 border-black mb-4">
            <Activity className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Trade History logs</h3>
          <p className="text-sm font-medium text-gray-500 mb-4">Complete log of all bot and manual trades executed across the platform.</p>
          <div className="text-xs font-bold text-gray-400 flex items-center">
            <Clock className="w-3 h-3 mr-1" /> Last exported: 1 week ago
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="p-3 bg-yellow-100 rounded-lg w-12 h-12 flex items-center justify-center border-2 border-black mb-4">
            <Database className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Financial Reports</h3>
          <p className="text-sm font-medium text-gray-500 mb-4">Revenue, MRR, subscriptions, and affiliate payout ledgers.</p>
          <div className="text-xs font-bold text-gray-400 flex items-center">
            <Clock className="w-3 h-3 mr-1" /> Last exported: Oct 1, 2025
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black mt-8">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-4">Custom Export Generator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-bold mb-2">Date Range</label>
            <div className="flex space-x-2">
              <input type="date" className="w-1/2 p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black font-medium" />
              <input type="date" className="w-1/2 p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black font-medium" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Export Format</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="format" defaultChecked className="w-4 h-4 text-black border-2 border-black focus:ring-black" />
                <span className="font-bold flex items-center"><FileSpreadsheet className="w-4 h-4 mr-1 text-green-600" /> CSV / Excel</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="format" className="w-4 h-4 text-black border-2 border-black focus:ring-black" />
                <span className="font-bold flex items-center"><FileJson className="w-4 h-4 mr-1 text-yellow-600" /> JSON</span>
              </label>
            </div>
          </div>
        </div>

        <button 
          onClick={handleExport}
          disabled={exporting}
          className={`w-full py-4 text-white rounded-lg font-black text-lg flex justify-center items-center transition-all border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 ${exporting ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}
        >
          {exporting ? (
            <><div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mr-3"></div> Generating Export...</>
          ) : (
            <><Download className="w-6 h-6 mr-3" /> Generate & Download</>
          )}
        </button>
      </div>
    </div>
  );
};

export default DataExport;
