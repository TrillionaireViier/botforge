import { Globe, Users, Cpu, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-black mb-8 flex items-center"><Globe className="mr-3 w-8 h-8" /> О проекте BotForge</h1>
      
      <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-8">
        <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          BotForge — это платформа нового поколения для алгоритмического копитрейдинга. Мы демократизируем доступ к профессиональным HFT-алгоритмам (High-Frequency Trading), позволяя обычным инвесторам копировать сделки институциональных ботов.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col items-center text-center">
          <Cpu className="w-12 h-12 mb-4 text-[#D3F55F] fill-current stroke-black" />
          <h3 className="font-bold text-xl mb-2">Алгоритмы</h3>
          <p className="text-gray-600">15 нейросетей, анализирующих рынок 24/7</p>
        </div>
        <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col items-center text-center">
          <Shield className="w-12 h-12 mb-4 text-[#D3F55F] fill-current stroke-black" />
          <h3 className="font-bold text-xl mb-2">Безопасность</h3>
          <p className="text-gray-600">Ваши средства остаются на ваших биржах (API без вывода)</p>
        </div>
        <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col items-center text-center">
          <Users className="w-12 h-12 mb-4 text-[#D3F55F] fill-current stroke-black" />
          <h3 className="font-bold text-xl mb-2">Комьюнити</h3>
          <p className="text-gray-600">Более 10,000 активных трейдеров в пуле</p>
        </div>
      </div>
    </div>
  );
}
