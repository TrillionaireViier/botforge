import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  UserCircle, LogOut, LayoutDashboard, Briefcase, Settings, FileText, ArrowRight, Users, Headset, History,
  BarChart2, Bell, Book, MessageSquare, Bot, CreditCard, TrendingUp, Activity, Database, Key, ShieldAlert,
  Moon, Sun
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function UserLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { name: "Дашборд", path: "/user", icon: LayoutDashboard },
    { name: "Торговые боты", path: "/user/bots", icon: Bot },
    { name: "Тарифы", path: "/user/pricing", icon: CreditCard },

    { name: "Мой Портфель", path: "/user/portfolio", icon: Briefcase },
    { name: "API Ключи", path: "/user/apikeys", icon: Key },
    { name: "Риск-менеджмент", path: "/user/risks", icon: ShieldAlert },
    { name: "История операций", path: "/user/history", icon: History },
    { name: "Аналитика", path: "/user/analytics", icon: BarChart2 },
    { name: "Новости", path: "/user/news", icon: Bell },
    { name: "О проекте", path: "/user/about", icon: TrendingUp },
    { name: "Блог", path: "/user/blog", icon: Book },
    { name: "Партнерам", path: "/user/partners", icon: Users },
    { name: "Документация", path: "/user/docs", icon: FileText },
    { name: "Настройки", path: "/user/settings", icon: Settings },
    { name: "Поддержка", path: "/user/support", icon: Headset },
  ];

  return (
    <div className={`min-h-screen font-mono flex flex-col md:flex-row ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      
      {/* Sidebar (Left) */}
      <aside className={`w-full md:w-80 border-r-2 flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-black'}`}>
        
        {/* Animated Profile Card */}
        <div className="p-6 border-b-2 border-black bg-black text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] animate-[slide_15s_linear_infinite] opacity-50 pointer-events-none"></div>
          
          <div className="flex items-center space-x-4 relative z-10 group-hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="w-14 h-14 border-2 border-white rounded-full bg-black flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-shadow">
                <UserCircle className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-black rounded-full animate-bounce"></div>
            </div>
            
            <div>
              <p className="font-black text-xl uppercase tracking-widest leading-none">user123</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-1 bg-white text-black inline-block px-2 py-0.5">VIP Инвестор</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} style={{ animation: `slideInLeft 0.5s ease-out both` }}>Меню управления</p>
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ animation: `slideInLeft 0.5s ease-out ${(index + 1) * 0.1}s both` }}
              className={`flex items-center justify-between p-3 border-2 transition-all duration-300 group overflow-hidden relative ${
                location.pathname === item.path 
                  ? (isDarkMode ? "border-white bg-white text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]" : "border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(200,200,200,1)]") 
                  : (isDarkMode ? "border-transparent hover:border-white hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:-translate-x-1 bg-gray-800" : "border-transparent hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 bg-white")
              }`}
            >
              <div className={`absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0 hidden md:block ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
              <div className={`flex items-center space-x-3 relative z-10 transition-colors duration-300 ${location.pathname === item.path ? (isDarkMode ? 'text-black' : 'text-white') : (isDarkMode ? 'text-white group-hover:text-black' : 'text-black group-hover:text-white')}`}>
                <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`} />
                <span className="font-bold uppercase text-sm tracking-wider transition-transform duration-300 group-hover:translate-x-2">{item.name}</span>
              </div>
              <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 relative z-10 ${location.pathname === item.path ? (isDarkMode ? 'text-black' : 'text-white') : (isDarkMode ? 'text-white group-hover:text-black' : 'text-black group-hover:text-white')}`} />
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className={`p-6 border-t-2 space-y-3 ${isDarkMode ? 'border-gray-700' : 'border-black'}`}>
          {user?.role === 'admin' && (
            <Link
              to="/admin"
              className={`w-full flex items-center justify-center space-x-2 border-2 p-3 transition-colors hover:-translate-y-1 uppercase tracking-wider text-sm font-bold group bg-yellow-300 text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1`}
            >
              <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>ADMIN PANEL</span>
            </Link>
          )}
          <button
            onClick={logout}
            className={`w-full flex items-center justify-center space-x-2 border-2 p-3 transition-colors hover:-translate-y-1 uppercase tracking-wider text-sm font-bold group ${isDarkMode ? 'bg-gray-800 text-white border-white hover:bg-red-600 hover:border-red-600 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1' : 'bg-white text-black border-black hover:bg-red-500 hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1'}`}
          >
            <LogOut className="w-5 h-5 group-hover:animate-bounce" />
            <span>Выход</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col overflow-y-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        
        {/* Trial / Subscription Banner */}
        {user && (!user.trial_ends_at || new Date(user.trial_ends_at) < new Date()) && (
          <div className="bg-red-500 text-white p-4 border-b-4 border-black text-center shadow-[0_4px_0_0_rgba(0,0,0,1)] z-20">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
                <span className="font-bold uppercase tracking-widest text-sm sm:text-base">
                  Ваша подписка или тестовый период не активны.
                </span>
              </div>
              <Link 
                to="/user/pricing" 
                className="bg-black text-white px-6 py-2 uppercase font-black tracking-widest text-sm hover:bg-white hover:text-black border-2 border-transparent hover:border-black transition-colors"
              >
                Оплатить $10
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Header */}
        <header className={`md:hidden p-4 flex items-center justify-between border-b-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-black'}`}>
          <span className="font-black text-xl uppercase tracking-widest">Кабинет</span>
          <div className="flex items-center space-x-2">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className={`w-8 h-8 border-2 flex items-center justify-center ${isDarkMode ? 'border-white bg-white text-black' : 'border-black bg-black text-white'}`}>
              <UserCircle className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Desktop Top Bar */}
        <div className="hidden md:flex justify-end p-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`p-2 rounded-full transition-colors flex items-center justify-center border-2 ${isDarkMode ? 'bg-gray-800 border-gray-600 text-yellow-400 hover:bg-gray-700' : 'bg-white border-gray-200 text-gray-800 hover:bg-gray-100'}`}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      <style>{`
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
