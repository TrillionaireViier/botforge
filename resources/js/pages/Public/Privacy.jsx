import { Lock } from "lucide-react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
        <Lock className="w-10 h-10" /> Политика конфиденциальности
      </h1>
      <div className="border-2 border-black p-8 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-800 space-y-6">
        <h2 className="text-2xl font-bold uppercase">Сбор данных</h2>
        <p>Мы собираем только ту информацию, которая необходима для работы сервиса: ваш email, зашифрованные ключи API и статистику торгов.</p>
        <h2 className="text-2xl font-bold uppercase">Хранение ключей</h2>
        <p>Ваши API-ключи хранятся в зашифрованном виде (AES-256). Мы никогда не запрашиваем ключи с правами на вывод средств.</p>
        <h2 className="text-2xl font-bold uppercase">Передача третьим лицам</h2>
        <p>Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законом.</p>
      </div>
    </div>
  );
}
