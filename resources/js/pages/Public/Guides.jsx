import { BookOpen } from "lucide-react";

export default function Guides() {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
        <BookOpen className="w-10 h-10" /> Гайды и Обучение
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-black p-6 bg-[#D3F55F] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
          <h2 className="text-xl font-bold uppercase mb-2">Гайд по Скальпингу</h2>
          <p className="text-sm font-medium">Научитесь настраивать ботов для 1-минутных таймфреймов.</p>
        </div>
        <div className="border-2 border-black p-6 bg-[#A5F3FC] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
          <h2 className="text-xl font-bold uppercase mb-2">Настройка Сеток</h2>
          <p className="text-sm font-medium">Как правильно рассчитать шаг и депозит для Grid-бота.</p>
        </div>
        <div className="border-2 border-black p-6 bg-[#FDE68A] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
          <h2 className="text-xl font-bold uppercase mb-2">Риск-Менеджмент</h2>
          <p className="text-sm font-medium">Управление капиталом при автоматизированной торговле.</p>
        </div>
      </div>
    </div>
  );
}
