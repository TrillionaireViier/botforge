import React, { useState, useEffect } from 'react';
import { Link, CheckCircle, XCircle, RefreshCw, Key } from 'lucide-react';

const ApiIntegrations = () => {
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntegrations = async () => {
      try {
        const token = localStorage.getItem("botforge_token");
        const res = await fetch("/api/admin/integrations", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setIntegrations(data);
        }
      } catch (error) {
        console.error("Failed to fetch integrations", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIntegrations();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Настройки интеграций API</h1>
      </div>

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black bg-gray-50 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center"><Link className="w-5 h-5 mr-2" /> Подключенные сервисы</h2>
          <button className="px-4 py-2 bg-black text-white rounded-md font-bold hover:bg-gray-800 transition-colors">
            Добавить интеграцию
          </button>
        </div>
        <div className="p-6 space-y-4">
          {integrations.map((integration) => (
            <div key={integration.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-2 border-gray-200 rounded-xl hover:border-black transition-colors bg-white">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className={`p-3 rounded-lg border-2 border-black ${integration.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {integration.status === 'active' ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{integration.name}</h3>
                  <p className="text-sm font-bold text-gray-500">{integration.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
                <div className="flex flex-col px-4 border-r-2 border-gray-200">
                  <span className="text-xs font-bold text-gray-500">Подключение</span>
                  <span className="font-bold text-gray-900">{new Date(integration.updated_at).toLocaleDateString()}</span>
                </div>
                <div className="flex space-x-2 pl-2">
                  <button className="px-3 py-2 border-2 border-black rounded-lg font-bold hover:bg-gray-50 flex items-center text-sm">
                    <Key className="w-4 h-4 mr-2" /> Сменить ключ
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
