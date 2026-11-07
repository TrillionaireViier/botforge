import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Flame, Sparkles, LayoutDashboard, Cpu, Store, ShieldCheck, Zap, Waves } from 'lucide-react';
import RobotForgeIcon from '../RobotForgeIcon';

export default function PublicNavbar() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="border-b-2 border-black bg-white shadow-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:p-5">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative"><div className="flex items-center justify-center border-2 border-black bg-yellow-300 p-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:rotate-6 group-hover:scale-110"><div className="absolute -inset-1 rounded bg-gradient-to-r from-yellow-400 via-orange-500 to-cyan-400 opacity-0 blur-sm transition-opacity group-hover:opacity-100" /><RobotForgeIcon className="relative z-10 h-9 w-9 animate-[bounce_3s_infinite]" animated /></div><span className="absolute -right-1 -top-1 h-3.5 w-3.5 animate-ping rounded-full border-2 border-black bg-emerald-400" /></div>
            <div className="flex flex-col"><div className="flex items-center gap-1.5"><span className="text-2xl font-black uppercase leading-none tracking-widest text-black transition-colors group-hover:text-yellow-600">BotForge</span><span className="border border-black bg-black px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-yellow-300">PRO</span></div><span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">No-Code Trading Bot Studio</span></div>
          </Link>
          <div className="hidden items-center gap-5 whitespace-nowrap lg:flex">
            <a href="#features" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-600">Функции</a>
            <a href="#how-it-works" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-600">Как это работает</a>
            <a href="#pricing" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-600">Тарифы</a>
            <Link to="/liquidity-fvg-strategy" className={`flex items-center gap-1 text-xs font-black uppercase tracking-wide hover:text-cyan-700 ${location.pathname === '/liquidity-fvg-strategy' ? 'text-cyan-700' : 'text-black'}`}><Waves className="h-4 w-4" /> Стратегия FVG</Link>
            <Link to="/app/user" className="text-sm font-bold uppercase tracking-widest hover:text-yellow-600">Демо Кабинет</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/liquidity-fvg-strategy" className="flex items-center gap-1 border-2 border-black bg-cyan-200 px-2 py-2 text-[10px] font-black uppercase sm:px-3 sm:text-xs lg:hidden"><Waves className="h-4 w-4" /><span className="hidden sm:inline">Стратегия FVG</span></Link>
            <Link to="/login?mode=register" className="hidden items-center gap-2 border-2 border-black bg-yellow-300 px-4 py-2.5 text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:flex"><Sparkles className="h-4 w-4" /> Регистрация</Link>
            <Link to="/login" className="flex items-center gap-2 border-2 border-black bg-black px-4 py-2.5 font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Войти <ChevronRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
