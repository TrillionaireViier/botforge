import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  LayoutDashboard,
  Cpu,
  Key,
  Users,
  Bell,
  Shield,
  Clock,
  Sparkles,
  TrendingUp,
  Wallet
} from 'lucide-react';
import BotForgeLogo from '../components/BotForgeLogo';
import ContactModal from '../components/ContactModal';

export default function Cabinet() {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    {
      label: 'Баланс счёта',
      value: '—',
      sub: 'USDT',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      icon: Wallet,
    },
    {
      label: 'Общая прибыль',
      value: '—',
      sub: 'за всё время',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
      icon: TrendingUp,
    },
    {
      label: 'Активных стратегий',
      value: '—',
      sub: 'из 5 доступных',
      color: 'text-violet-500',
      bg: 'bg-violet-50',
      icon: Cpu,
    },
    {
      label: 'Партнёрский доход',
      value: '—',
      sub: 'USDT',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
      icon: Users,
    },
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Обзор портфеля', soon: false },
    { icon: Cpu, label: 'Мои стратегии', soon: true },
    { icon: Key, label: 'API-ключи', soon: true },
    { icon: Users, label: 'Партнёрская программа', soon: true },
    { icon: Bell, label: 'Уведомления', soon: true },
    { icon: Shield, label: 'Безопасность', soon: true },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0d0d0d] font-sans">
      {/* Sticky Top Navbar */}
      <nav className="border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>На главную</span>
          </Link>

          <Link to="/" className="flex items-center gap-2.5">
            <BotForgeLogo size={28} className="text-[#0d0d0d]" />
            <span className="font-bold text-lg tracking-tight text-[#0d0d0d]">
              Bot<span className="text-[#7360F2]">Forge</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Left Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block space-y-4"
          >
            <div className="rounded-3xl border border-gray-200/90 bg-gray-50/50 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7360F2] to-violet-600 flex items-center justify-center text-white font-bold text-base select-none shadow-sm">
                  ?
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight text-gray-900">Гость</p>
                  <p className="text-xs text-gray-400">Не авторизован</p>
                </div>
              </div>
              <Link
                to="/login"
                className="flex items-center justify-center w-full h-10 rounded-xl bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors shadow-sm"
              >
                Войти / Зарегистрироваться
              </Link>
            </div>

            <div className="rounded-3xl border border-gray-200/90 bg-gray-50/40 p-2.5 space-y-1">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:text-black hover:bg-white transition-all cursor-default select-none"
                >
                  <item.icon className="w-4 h-4 shrink-0 text-gray-400" />
                  <span className="flex-1 font-medium">{item.label}</span>
                  {item.soon && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-200/70 text-gray-500">
                      скоро
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.aside>

          {/* Right Main Content */}
          <main>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                В разработке
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900">
                Личный кабинет
              </h1>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Ваш центр управления алгоритмическим трейдингом. Полный функционал будет доступен после запуска платформы.
              </p>
            </motion.div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="rounded-3xl border border-gray-200/90 bg-white p-5 shadow-sm"
                >
                  <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                    <s.icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-2xl font-bold tracking-tight text-gray-900 mb-0.5">{s.value}</p>
                  <p className="text-[11px] text-gray-400 font-medium">{s.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Teaser Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-gray-200/90 bg-white shadow-xl overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center text-center py-16 px-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative mb-6"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-100 border border-indigo-200/60 flex items-center justify-center shadow-sm">
                    <BotForgeLogo size={42} className="text-[#7360F2]" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-white"
                  >
                    <Sparkles className="w-2.5 h-2.5" />
                  </motion.div>
                </motion.div>

                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  Скоро здесь будет ваш кабинет
                </h2>
                <p className="text-gray-500 text-sm max-w-md leading-relaxed mb-8">
                  Личный кабинет находится в разработке. После запуска здесь появятся: управление API-ключами, мониторинг стратегий в реальном времени, статистика прибыли и партнёрская программа.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-xl">
                  {[
                    '📊 Аналитика портфеля',
                    '🤖 Управление ботами',
                    '🔑 API-ключи',
                    '👥 Партнёрская программа',
                    '📈 История сделок',
                    '🔔 Push-уведомления',
                  ].map((feat) => (
                    <span
                      key={feat}
                      className="text-xs px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 h-11 px-8 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  Подать заявку на ранний доступ
                </button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
