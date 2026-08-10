import { Terminal, Play, Settings, MessageSquare, Code, Cpu, ArrowRight } from "lucide-react";

export default function VibeCode() {
  return (
    <div className="p-4 md:p-8 h-[calc(100vh-2rem)] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-black flex items-center"><Terminal className="mr-3 w-8 h-8" /> VibeCode Server</h1>
        <div className="flex gap-4">
          <button className="hidden md:flex items-center bg-white border-2 border-black px-4 py-2 font-bold hover:bg-gray-50 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            <Settings className="w-4 h-4 mr-2" /> Настройки API
          </button>
          <button className="flex items-center bg-[#D3F55F] border-2 border-black px-4 py-2 font-bold hover:bg-[#c4eb46] shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            <Play className="w-4 h-4 mr-2" /> Run
          </button>
        </div>
      </div>

      <div className="flex-1 border-2 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden rounded-xl">
        
        {/* Chat / AI Panel */}
        <div className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col bg-gray-50">
          <div className="p-4 border-b-2 border-black bg-black text-white flex justify-between items-center">
            <div className="font-bold flex items-center"><MessageSquare className="w-4 h-4 mr-2" /> AI Ассистент</div>
            <select className="bg-gray-800 border border-gray-600 text-xs p-1 rounded outline-none cursor-pointer text-white">
              <option>Gemini 2.0 Flash (Google — Бесплатно)</option>
              <option>Gemini 1.5 Flash (Google — Бесплатно)</option>
              <option>DeepSeek R1 (Открытый исходный код)</option>
              <option>DeepSeek V3 (Открытый исходный код)</option>
              <option>Llama 3.3 70B (Meta — Открытый)</option>
              <option>Mistral 7B (Открытый исходный код)</option>
              <option>Qwen 2.5 72B (Alibaba — Бесплатно)</option>
            </select>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            <div className="bg-white border-2 border-black p-3 rounded-lg self-start max-w-[85%] shadow-sm">
              <p className="text-sm font-medium">Привет! Я твой локальный VibeCode сервер. У нас нет бюджета на платные API, поэтому я работаю на базе бесплатной <span className="font-bold">Llama 3</span>. Что будем кодить?</p>
            </div>
            <div className="bg-[#D3F55F] border-2 border-black p-3 rounded-lg self-end max-w-[85%] shadow-sm">
              <p className="text-sm font-bold">Напиши мне парсер на Python для цен с Bybit.</p>
            </div>
            <div className="bg-white border-2 border-black p-3 rounded-lg self-start max-w-[85%] shadow-sm">
              <p className="text-sm font-medium">Без проблем! Генерирую код через локальную Llama 3... Вывел скрипт в редактор справа!</p>
            </div>
          </div>

          <div className="p-4 border-t-2 border-black bg-white">
            <div className="flex bg-gray-100 border-2 border-black rounded-lg overflow-hidden">
              <input type="text" placeholder="Опиши приложение..." className="w-full bg-transparent p-3 outline-none font-medium" />
              <button className="bg-black text-white px-4 hover:bg-gray-800 transition-colors"><ArrowRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {/* Code Editor Panel */}
        <div className="w-full md:w-2/3 flex flex-col bg-[#1e1e1e]">
          <div className="p-2 border-b-2 border-black bg-black flex gap-2 overflow-x-auto">
            <div className="bg-[#1e1e1e] text-white px-4 py-1 text-sm font-mono border-t-2 border-l-2 border-r-2 border-gray-700 rounded-t-lg flex items-center cursor-pointer">
              <Code className="w-3 h-3 mr-2" /> parser.py
            </div>
            <div className="text-gray-500 px-4 py-1 text-sm font-mono flex items-center cursor-pointer hover:text-white transition-colors">
              <Cpu className="w-3 h-3 mr-2" /> package.json
            </div>
          </div>
          <div className="flex-1 p-6 font-mono text-sm text-green-400 overflow-y-auto">
            <pre><code>{`import requests
import json
import time

def get_bybit_price(symbol="BTCUSDT"):
    """
    Парсит текущую цену с Bybit API.
    (Сгенерировано локально через VibeCode Server)
    """
    url = f"https://api.bybit.com/v5/market/tickers?category=linear&symbol={symbol}"
    
    try:
        response = requests.get(url)
        data = response.json()
        if data["retCode"] == 0:
            price = data["result"]["list"][0]["lastPrice"]
            return float(price)
    except Exception as e:
        print(f"Error fetching data: {e}")
        
    return None

if __name__ == "__main__":
    print("Starting VibeCode Parser...")
    while True:
        price = get_bybit_price()
        if price:
            print(f"[Bybit] Current {symbol} Price: \${price}")
        time.sleep(5)
`}</code></pre>
          </div>
        </div>

      </div>
    </div>
  );
}
