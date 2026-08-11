import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3">
        <Mail className="w-10 h-10" /> Контакты
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-2 border-black p-8 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] space-y-6">
          <h2 className="text-2xl font-bold uppercase">Свяжитесь с нами</h2>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" /> <span className="font-bold">support@botforge.example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MessageCircle className="w-6 h-6" /> <span className="font-bold">@BotForge_Support (Telegram)</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6" /> <span className="font-bold">Dubai, UAE</span>
          </div>
        </div>
        
        <div className="border-2 border-black p-8 bg-black text-white shadow-[8px_8px_0_0_rgba(200,200,200,1)]">
          <h2 className="text-2xl font-bold uppercase mb-6">Форма связи</h2>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Ваше имя" className="w-full bg-white text-black border-2 border-white p-3 font-bold" />
            <input type="email" placeholder="Ваш Email" className="w-full bg-white text-black border-2 border-white p-3 font-bold" />
            <textarea placeholder="Сообщение" className="w-full bg-white text-black border-2 border-white p-3 font-bold h-32"></textarea>
            <button className="w-full bg-[#D3F55F] text-black border-2 border-black p-4 font-black uppercase hover:bg-white transition-colors">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
