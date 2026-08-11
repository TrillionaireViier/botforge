import { Link } from 'react-router-dom';
import { Globe, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-12 px-6 border-t-[8px] border-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rotate-45 translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rotate-45 -translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-3xl font-black uppercase tracking-widest text-white inline-block border-b-4 border-white pb-2">
              BotForgee
            </span>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              Инновационная no-code платформа для создания и автоматизации крипто-торговых стратегий. Торгуйте умно, а не усердно.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white text-black flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-black flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-black flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xl font-black uppercase tracking-widest mb-6">Продукт</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Функции</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Тарифы</a></li>
              <li><Link to="/marketplace" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Маркетплейс</Link></li>
              <li><Link to="/changelog" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Обновления</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-black uppercase tracking-widest mb-6">Ресурсы</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li><Link to="/docs" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Документация</Link></li>
              <li><Link to="/api" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> API Reference</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Блог</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Гайды</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-black uppercase tracking-widest mb-6">Правовая Инфа</h4>
            <ul className="space-y-3 font-medium text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Условия сервиса</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Политика кондф.</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Cookies</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white block"></span> Контакты</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">
            © 2026 Экосистема BotForgee. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-gray-500">
            <span>Статус: Все системы работают</span>
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
