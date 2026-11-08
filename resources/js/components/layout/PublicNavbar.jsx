import { Link } from 'react-router-dom';
import BotForgeLogo from '../BotForgeLogo';

export default function PublicNavbar() {
  return (
    <header className="fixed top-0 w-full border-b border-gray-100 bg-white/85 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3 group">
          <BotForgeLogo size={32} className="text-[#0d0d0d] group-hover:scale-105 transition-transform" />
          <span className="font-bold text-lg sm:text-2xl tracking-tight text-[#0d0d0d]">
            Bot<span className="text-[#7360F2]">Forge</span>
          </span>
        </Link>

        {/* Center Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/#strategies" className="hover:text-black transition-colors">
            Стратегии
          </a>
          <a href="/#advantages" className="hover:text-black transition-colors">
            Преимущества
          </a>
          <a href="/#how-it-works" className="hover:text-black transition-colors">
            Как работает
          </a>
          <a href="/#pools" className="hover:text-black transition-colors">
            Пулы
          </a>
          <a href="/#partners" className="hover:text-black transition-colors">
            Партнёрам
          </a>
          <a href="/#faq" className="hover:text-black transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-black transition-colors px-3 py-2"
          >
            Войти
          </Link>
          <Link
            to="/cabinet"
            className="inline-flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-4 sm:px-5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-all shrink-0 shadow-sm"
          >
            <span>Кабинет</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
