import { Code, Terminal } from "lucide-react";

export default function ApiReference() {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
        <Terminal className="w-10 h-10" /> API Reference
      </h1>
      <div className="border-2 border-black p-8 bg-gray-50 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold uppercase mb-4">Авторизация</h2>
        <p className="text-gray-700 mb-4 font-medium">Все запросы к API требуют передачи Bearer токена в заголовке <code className="bg-black text-white px-2 py-1">Authorization</code>.</p>
        
        <h2 className="text-2xl font-bold uppercase mb-4 mt-8">Эндпоинты</h2>
        <div className="space-y-4">
          <div className="border-2 border-black p-4 bg-white">
            <span className="font-black bg-[#D3F55F] px-2 py-1 border-2 border-black mr-3">GET</span>
            <span className="font-bold">/api/v1/bots</span>
            <p className="text-sm text-gray-600 mt-2">Получить список активных ботов.</p>
          </div>
          <div className="border-2 border-black p-4 bg-white">
            <span className="font-black bg-[#A5F3FC] px-2 py-1 border-2 border-black mr-3">POST</span>
            <span className="font-bold">/api/v1/trade</span>
            <p className="text-sm text-gray-600 mt-2">Разместить новый ордер.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
