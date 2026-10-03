import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Flame, Sparkles, LayoutDashboard, Cpu, Store, ShieldCheck, Zap } from 'lucide-react';
import RobotForgeIcon from '../RobotForgeIcon';

export default function PublicNavbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* Main Navigation Bar */}
      <nav className="border-b-2 border-black bg-white shadow-md">
        <div className="flex items-center justify-between p-4 md:p-5 max-w-7xl mx-auto w-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="bg-yellow-300 p-2.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-visible">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-cyan-400 rounded blur-xs opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <RobotForgeIcon className="w-9 h-9 relative z-10 animate-[bounce_3s_infinite]" animated={true} />
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-black rounded-full animate-ping"></span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black uppercase tracking-widest text-black leading-none group-hover:text-yellow-600 transition-colors">BotForge</span>
                <span className="bg-black text-yellow-300 font-mono text-[9px] font-extrabold px-1.5 py-0.2 border border-black uppercase tracking-wider animate-pulse">PRO</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors">No-Code Trading Bot Studio</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">
            <a href="#features" className="text-sm font-bold uppercase tracking-widest text-black hover:text-yellow-600 transition-colors">Функции</a>
            <a href="#how-it-works" className="text-sm font-bold uppercase tracking-widest text-black hover:text-yellow-600 transition-colors">Как это работает</a>
            <a href="#pricing" className="text-sm font-bold uppercase tracking-widest text-black hover:text-yellow-600 transition-colors">Тарифы</a>
            <Link to="/app/user" className="text-sm font-bold uppercase tracking-widest text-black hover:text-yellow-600 transition-colors">Демо Кабинет</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              to="/app/user/configurator" 
              className="hidden sm:flex items-center gap-2 bg-yellow-300 text-black font-black uppercase tracking-widest py-2.5 px-4 text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <Cpu className="w-4 h-4" /> Сделать Бота
            </Link>

            <Link 
              to="/login" 
              className="flex items-center gap-2 bg-black text-white font-bold uppercase tracking-widest py-2.5 px-5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-xs sm:text-sm"
            >
              Войти <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
