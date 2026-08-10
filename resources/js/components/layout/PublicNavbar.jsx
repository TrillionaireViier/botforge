import { Link } from 'react-router-dom';
import { Zap, ChevronRight } from 'lucide-react';

export default function PublicNavbar() {
  return (
    <nav className="border-b-2 border-black bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto w-full h-20">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Zap className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-black uppercase tracking-widest text-black">BotForgee</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="#features" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Функции</a>
          <a href="#how-it-works" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Как это работает</a>
          <a href="#pricing" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Тарифы</a>
          <Link to="/login" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Войти</Link>
        </div>

        <Link 
          to="/login" 
          className="flex items-center gap-2 bg-black text-white font-bold uppercase tracking-widest py-3 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          Создать Бота <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
