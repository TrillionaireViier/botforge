import { CheckSquare } from "lucide-react";

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
        <CheckSquare className="w-10 h-10" /> Политика Cookies
      </h1>
      <div className="border-2 border-black p-8 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-gray-800 space-y-6">
        <p>Мы используем файлы cookie для улучшения работы нашего сайта и аналитики.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Необходимые:</strong> Для работы авторизации и сохранения сессии.</li>
          <li><strong>Аналитические:</strong> Для понимания того, как пользователи взаимодействуют с сайтом.</li>
          <li><strong>Маркетинговые:</strong> Для предоставления релевантной рекламы на других площадках.</li>
        </ul>
        <p>Вы можете отключить использование cookie в настройках вашего браузера, однако это может нарушить работу некоторых функций платформы.</p>
      </div>
    </div>
  );
}
