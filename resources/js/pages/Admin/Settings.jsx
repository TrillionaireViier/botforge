import { Key, Save, CheckSquare } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl font-mono">
      <div className="border-b-2 border-black pb-4">
        <h1 className="text-3xl font-black text-black uppercase tracking-widest">КЛЮЧИ ДОСТУПА</h1>
        <p className="text-gray-600 mt-2 text-sm uppercase">Настройка доступов для торговых алгоритмов.</p>
      </div>

      <div className="bg-white border-2 border-black p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Key className="w-48 h-48" />
        </div>

        <form onSubmit={handleSave} className="space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-xl font-black text-black flex items-center gap-3 uppercase tracking-wider">
              <span className="w-3 h-3 bg-black"></span>
              Binance (Master)
            </h2>
            
            <div className="grid gap-4 bg-gray-50 p-6 border border-black">
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-widest">API Key</label>
                <input 
                  type="text" 
                  defaultValue="vmK***************************************************Lp9"
                  className="w-full bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-widest">API Secret</label>
                <input 
                  type="password" 
                  defaultValue="*************************************************************"
                  className="w-full bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm transition-all"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-black text-black flex items-center gap-3 uppercase tracking-wider">
              <span className="w-3 h-3 border-2 border-black bg-white"></span>
              Bybit (Master)
            </h2>
            
            <div className="grid gap-4 bg-gray-50 p-6 border border-black">
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-widest">API Key</label>
                <input 
                  type="text" 
                  placeholder="ВВЕДИТЕ КЛЮЧ..."
                  className="w-full bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm transition-all placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-black uppercase tracking-widest">API Secret</label>
                <input 
                  type="password" 
                  placeholder="ВВЕДИТЕ СЕКРЕТ..."
                  className="w-full bg-white border-2 border-black px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black font-mono text-sm transition-all placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 flex items-center gap-4 border-t-2 border-black mt-8">
            <button 
              type="submit"
              className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 px-8 py-4 uppercase tracking-widest font-bold transition-all mt-4 border-2 border-black"
            >
              <Save className="w-5 h-5" />
              <span>СОХРАНИТЬ</span>
            </button>
            
            {saved && (
              <span className="flex items-center gap-2 text-black font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-4 mt-4 bg-gray-100 px-4 py-4 border border-black">
                <CheckSquare className="w-5 h-5" />
                УСПЕШНО
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
