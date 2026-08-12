import React, { useState, useEffect } from 'react';
import { Percent, Save, DollarSign } from 'lucide-react';

const FeeConfig = () => {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    trading_fee: 0.1,
    copy_fee: 10.0,
    withdraw_fee: 2.5,
    platform_share: 2.0
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem("botforge_token");
        const res = await fetch("/api/admin/settings", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          const newSettings = { ...settings };
          data.forEach(s => {
            if (newSettings[s.key] !== undefined) {
              newSettings[s.key] = parseFloat(s.value) || 0;
            }
          });
          setSettings(newSettings);
        }
      } catch (error) {
        console.error("Failed to fetch settings", error);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("botforge_token");
      await fetch("/api/admin/settings", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(settings)
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error("Failed to save settings", error);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Настройка комиссий платформы</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black">
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-gray-100">
          <Percent className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-xl font-bold">Торговые комиссии и сборы</h2>
            <p className="text-gray-500">Настройте глобальные комиссии и лимиты платформы.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Комиссия торгового бота (%)</label>
              <div className="relative">
                <input type="number" name="trading_fee" value={settings.trading_fee} onChange={handleChange} step="0.01" className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black pr-10" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Комиссия взимается с объема успешных сделок.</p>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">Комиссия за копитрейдинг (%)</label>
              <div className="relative">
                <input type="number" name="copy_fee" value={settings.copy_fee} onChange={handleChange} step="0.1" className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black pr-10" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Процент от прибыли подписчиков, который передается лидеру-трейдеру.</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Комиссия за вывод (USDT)</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input type="number" name="withdraw_fee" value={settings.withdraw_fee} onChange={handleChange} className="w-full p-3 pl-10 border-2 border-black rounded-lg focus:ring-black focus:border-black" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Доля платформы от прибыли (%)</label>
              <div className="relative">
                <input type="number" name="platform_share" value={settings.platform_share} onChange={handleChange} className="w-full p-3 border-2 border-black rounded-lg focus:ring-black focus:border-black pr-10" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Процент, который забирает платформа с комиссий за копитрейдинг.</p>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-gray-100 flex justify-end">
            <button 
              onClick={handleSave}
              className="px-6 py-3 bg-black text-white rounded-md font-bold flex items-center hover:bg-gray-800 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
            >
              <Save className="w-5 h-5 mr-2" />
              {saved ? 'Успешно сохранено!' : 'Сохранить настройки'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeConfig;
