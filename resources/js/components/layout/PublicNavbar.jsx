import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Flame, Sparkles, LayoutDashboard, Cpu, Store, ShieldCheck, Zap } from 'lucide-react';
import RobotForgeIcon from '../RobotForgeIcon';

export default function PublicNavbar() {
  const location = useLocation();

  const navPages = [
    { name: 'Главная', path: '/', icon: <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> },
    { name: 'Кабинет / Дэшборд', path: '/app/user', icon: <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400" /> },
    { name: 'Кузница Ботов', path: '/app/user/configurator', icon: <Cpu className="w-3.5 h-3.5 text-emerald-400" /> },
    { name: 'Маркетплейс', path: '/app/user/marketplace', icon: <Store className="w-3.5 h-3.5 text-amber-400" /> },
    { name: 'Мои Боты', path: '/app/user/trading-bots', icon: <Zap className="w-3.5 h-3.5 text-purple-400" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner Ticker Bar (Сайт Стр вверху страницы) */}
      <div className="bg-black text-white border-b-2 border-black py-2 px-4 font-mono text-xs overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-yellow-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>BotForge Studio Live: Анимированная кузница роботов задействована</span>
          </div>

          {/* Quick Page Links Bar */}
          <div className="flex items-center gap-3 overflow-x-auto py-0.5 scrollbar-none">
            {navPages.map((pg) => {
              const isActive = location.pathname === pg.path;
              return (
                <Link
                  key={pg.path}
                  to={pg.path}
                  className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded border text-[11px] font-bold uppercase tracking-wider transition-all ${
                    isActive 
                      ? 'bg-yellow-300 text-black border-yellow-400 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)]'
                      : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-yellow-400 hover:text-white'
                  }`}
                >
                  {pg.icon}
                  <span>{pg.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="border-b-2 border-black bg-white shadow-md">
        <div className="flex items-center justify-between p-4 md:p-5 max-w-7xl mx-auto w-full">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-yellow-300 p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:scale-105 transition-transform">
              <RobotForgeIcon className="w-8 h-8" animated={true} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black uppercase tracking-widest text-black leading-none">BotForge</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">No-Code Trading Bot Studio</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex gap-8 items-center">
            <a href="#features" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Функции</a>
            <a href="#how-it-works" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Как это работает</a>
            <a href="#pricing" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Тарифы</a>
            <Link to="/app/user" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4 flex items-center gap-1">
              <LayoutDashboard className="w-4 h-4 text-emerald-600" /> Демо Кабинет
            </Link>
            <Link to="/login" className="text-sm font-bold uppercase tracking-widest text-black hover:underline underline-offset-4">Войти</Link>
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
