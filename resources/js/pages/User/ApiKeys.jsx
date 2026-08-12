import React, { useState, useEffect } from 'react';
import { Key, Plus, Trash2, Eye, EyeOff, Shield, Loader2 } from 'lucide-react';

const ApiKeys = () => {
  const [keys, setKeys] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ api_key: '', api_secret: '' });
  const [saving, setSaving] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null);

  const fetchKeys = async () => {
    try {
      const token = localStorage.getItem("botforge_token");
      const res = await fetch("/api/trading/keys", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setKeys(data);
      }
    } catch (error) {
      console.error("Failed to fetch API keys", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeys();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg(null);
    try {
      const token = localStorage.getItem("botforge_token");
      const res = await fetch("/api/trading/keys", {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setShowForm(false);
        setFormData({ api_key: '', api_secret: '' });
        fetchKeys();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.message || "Ошибка при сохранении ключей на сервере (Возможно, вы не авторизованы или БД сброшена)");
      }
    } catch (error) {
      setErrorMsg("Ошибка сети или сервера");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Управление API ключами</h1>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-black text-white rounded-md font-semibold hover:bg-gray-800 flex items-center">
          <Plus className="w-5 h-5 mr-2" /> Добавить / Обновить ключ
        </button>
      </div>

      <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 flex items-start space-x-3 rounded-r-md">
        <Shield className="w-6 h-6 text-yellow-600 mt-0.5" />
        <div>
          <h3 className="font-bold text-yellow-800">Рекомендации по безопасности</h3>
          <p className="text-sm text-yellow-700">Никогда не делитесь своими API ключами. Убедитесь, что для ваших API ключей включено ограничение по IP и НЕ включены разрешения на вывод средств.</p>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black space-y-4">
          <h2 className="text-xl font-bold">Подключение Binance (Testnet)</h2>
          
          {errorMsg && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded shadow-sm flex items-start">
              <Shield className="w-5 h-5 mr-2 mt-0.5" />
              <div>
                <p className="font-bold uppercase tracking-widest text-xs mb-1">Ошибка сохранения</p>
                <p className="text-sm font-medium">{errorMsg}</p>
              </div>
            </div>
          )}

          <div>
            <label className="block font-bold mb-2">API Key</label>
            <input required type="text" value={formData.api_key} onChange={e => setFormData({...formData, api_key: e.target.value})} className="w-full border-2 border-black p-3 rounded" placeholder="Введите API ключ" />
          </div>
          <div>
            <label className="block font-bold mb-2">Secret Key</label>
            <input required type="password" value={formData.api_secret} onChange={e => setFormData({...formData, api_secret: e.target.value})} className="w-full border-2 border-black p-3 rounded" placeholder="Введите Secret ключ" />
          </div>
          <button type="submit" disabled={saving} className="bg-black text-white px-6 py-3 font-bold rounded hover:bg-gray-800 disabled:opacity-50">
            {saving ? 'Сохранение...' : 'Сохранить ключи'}
          </button>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black overflow-hidden">
        <div className="p-6 border-b-2 border-black">
          <h2 className="text-xl font-bold">Подключенные биржи</h2>
        </div>
        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center p-4"><Loader2 className="animate-spin" /></div>
          ) : keys ? (
            <div className="flex items-center justify-between bg-gray-50 border-2 border-black p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Binance Testnet</h3>
                  <p className="text-gray-600 font-mono text-sm">API Key: {keys.api_key}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-green-100 text-green-800 px-3 py-1 font-bold text-xs rounded-full border-2 border-black uppercase tracking-wider">Подключено</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 font-bold p-8">Нет подключенных ключей. Пожалуйста, добавьте ключи Binance.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
