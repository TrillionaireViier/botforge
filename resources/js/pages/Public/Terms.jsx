import { ShieldAlert } from "lucide-react";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
        <ShieldAlert className="w-10 h-10" /> Условия сервиса
      </h1>
      <div className="border-2 border-black p-8 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-800 space-y-6">
        <p><strong>Последнее обновление:</strong> 11 августа 2026 г.</p>
        <h2 className="text-2xl font-bold uppercase">1. Общие положения</h2>
        <p>Используя платформу BotForgee, вы соглашаетесь с данными условиями. Наш сервис предоставляет инструменты для автоматизированной торговли, но не дает финансовых рекомендаций.</p>
        <h2 className="text-2xl font-bold uppercase">2. Риски</h2>
        <p>Торговля криптовалютами связана с высоким риском потери капитала. Пользователь несет полную ответственность за любые финансовые убытки, возникшие в результате использования ботов.</p>
        <h2 className="text-2xl font-bold uppercase">3. Ограничения</h2>
        <p>Запрещается использовать платформу для отмывания денег, финансирования терроризма или любых других незаконных действий.</p>
      </div>
    </div>
  );
}
