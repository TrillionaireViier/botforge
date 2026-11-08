import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Lock,
  ChevronDown,
  CheckCircle2,
  Clock,
  Wallet,
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import BotForgeLogo from '../components/BotForgeLogo';
import RobotForgerHero from '../components/RobotForgerHero';
import HowItWorksCircle from '../components/HowItWorksCircle';
import PoolMechanicsDiagram from '../components/PoolMechanicsDiagram';
import StrategyIcon from '../components/StrategyIcon';
import ContactModal from '../components/ContactModal';
import {
  strategies,
  advantages,
  howItWorksSteps,
  alternativeConditions,
  pools,
  classicLevels,
  rankBonusProgram,
  faqs,
  navLinks
} from '../data/landingData';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Lead form state
  const [leadName, setLeadName] = useState('');
  const [leadContact, setLeadContact] = useState('');
  const [leadCapital, setLeadCapital] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Auto-cycle through the 4 steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll to hash anchor on mount (e.g. /#contact)
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadName('');
      setLeadContact('');
      setLeadCapital('');
      setLeadMessage('');
    }, 3500);
  };

  const activeStrat = strategies[selectedStrategy];

  return (
    <div className="min-h-screen bg-white text-[#0d0d0d] font-sans selection:bg-[#7360F2]/20 selection:text-[#0d0d0d] overflow-x-hidden relative">
      {/* Subtle Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="fixed top-0 w-full border-b border-gray-100 bg-white/85 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1">
              <a href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group">
                <BotForgeLogo size={32} className="text-[#0d0d0d] group-hover:scale-105 transition-transform" />
                <span className="font-bold text-lg sm:text-2xl tracking-tight text-[#0d0d0d]">
                  Bot<span className="text-[#7360F2]">Forge</span>
                </span>
              </a>
            </div>

            {/* Center Animated Menu Button & Dropdown */}
            <div className="relative" onMouseLeave={() => setMenuOpen(false)}>
              <button
                aria-label="Меню навигации"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7360F2]"
              >
                <motion.span
                  className="block w-5 h-[1.5px] bg-[#0d0d0d] rounded-full"
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                />
                <motion.span
                  className="block w-5 h-[1.5px] bg-[#0d0d0d] rounded-full"
                  animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.18, ease: 'easeInOut' }}
                />
                <motion.span
                  className="block w-5 h-[1.5px] bg-[#0d0d0d] rounded-full"
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                />
              </button>

              {/* Floating Navigation Menu Card */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'top center' }}
                    className="fixed sm:absolute inset-x-3 sm:inset-x-auto top-[68px] sm:top-[calc(100%+10px)] sm:left-1/2 sm:-translate-x-1/2 sm:w-[540px] bg-white border border-gray-200/90 rounded-2xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 px-2 pt-2.5 pb-1">
                      {navLinks.map((item, idx) => (
                        <motion.a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.18, delay: idx * 0.02 }}
                          className="flex items-center gap-2.5 px-3 py-2 sm:py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100/70 transition-all group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#7360F2] transition-colors shrink-0" />
                          {item.label}
                        </motion.a>
                      ))}
                    </div>

                    <div className="mx-3 border-t border-gray-100" />

                    <div className="p-3 grid grid-cols-1 min-[540px]:grid-cols-2 gap-2.5">
                      <Link
                        to="/user/apikeys"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center gap-2 h-11 rounded-xl bg-black text-white text-xs min-[540px]:text-sm font-semibold hover:bg-gray-800 transition-colors"
                      >
                        <Lock className="w-4 h-4 shrink-0 text-white/80" />
                        Подключить API-ключ
                      </Link>
                      <Link
                        to="/user"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center gap-2 h-11 rounded-xl border border-gray-200 bg-gray-50 text-xs min-[540px]:text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="10" cy="7" r="3" />
                          <path d="M3 18c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" />
                        </svg>
                        Войти в кабинет
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Action Button */}
            <div className="flex-1 flex justify-end">
              <Link
                to="/user"
                className="inline-flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-3.5 sm:px-5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-all shrink-0 hover:shadow-md"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                В личный кабинет
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen pt-28 sm:pt-36 pb-16 px-4 sm:px-6 flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-[#7360F2] animate-pulse" />
                Алготрейдинг на Binance/Bybit
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.12] text-[#0d0d0d]">
                Сложный процент — по математике, <br className="hidden sm:block" />
                <span className="text-[#0d0d0d]">а не по эмоциям.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl leading-relaxed font-normal">
                BotForge — платформа алготрейдинга для прогнозируемого роста капитала.
              </p>

              <p className="text-sm text-gray-500 mb-8 max-w-xl leading-relaxed">
                Платформа подключается к вашей бирже Binance/Bybit через API. Деньги остаются под вашим полным контролем, а торговлю ведут строгие алгоритмы — 5 лет опыта и минимум 6 месяцев теста для каждой из пяти стратегий.
              </p>

              <div className="flex flex-col items-start gap-3">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="h-12 px-8 text-base font-semibold rounded-full bg-black hover:bg-gray-800 text-white transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                >
                  Подключиться <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <span className="flex items-center gap-1.5 text-xs text-gray-400 pl-1">
                  <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  API-ключи подключаются без права вывода средств
                </span>
              </div>
            </motion.div>

            {/* Right Column: Animated Robot Blacksmith */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            >
              <RobotForgerHero />
            </motion.div>
          </div>
        </section>

        {/* Advantages Section ("Почему безопаснее") */}
        <section id="advantages" className="py-20 bg-gray-50/70 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeIn}
              className="mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0d0d0d]">Почему безопаснее</h2>
              <div className="w-20 h-1 bg-[#7360F2] rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {advantages.map((adv, idx) => {
                const icons = [
                  <Shield key="1" className="w-8 h-8 text-[#7360F2]" />,
                  <TrendingUp key="2" className="w-8 h-8 text-[#7360F2]" />,
                  <Zap key="3" className="w-8 h-8 text-[#7360F2]" />,
                ];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.55 }}
                    className="h-full"
                  >
                    <div className="h-full p-8 bg-white rounded-2xl border border-gray-200/80 hover:border-[#7360F2]/40 hover:shadow-lg transition-all group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#7360F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-gray-100/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          {icons[idx]}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#0d0d0d]">{adv.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column Steps */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0d0d0d]">Как это работает</h2>
                <p className="text-lg text-gray-500 mb-12">
                  Процесс подключения занимает не более 15 минут. Вы сохраняете полный контроль над своим капиталом на каждом этапе.
                </p>

                <div className="space-y-4">
                  {howItWorksSteps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`flex items-start gap-4 rounded-2xl px-5 py-4 transition-all cursor-pointer border ${
                          isActive
                            ? 'bg-gray-100/70 border-gray-300/80 shadow-sm'
                            : 'bg-transparent border-transparent hover:bg-gray-50'
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full border flex items-center justify-center font-mono font-bold shrink-0 transition-all ${
                            isActive
                              ? 'bg-black border-black text-white scale-105'
                              : 'bg-gray-100 border-gray-200 text-gray-500'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <div className="pt-2">
                          <h4
                            className={`text-base sm:text-lg font-medium transition-opacity ${
                              isActive ? 'text-black font-semibold' : 'text-gray-500'
                            }`}
                          >
                            {step}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Column Interactive SVG Circle */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <HowItWorksCircle activeStep={activeStep} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5 Strategies Section */}
        <section id="strategies" className="py-24 bg-gray-50/50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-semibold mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7360F2] animate-pulse" />
                Торговые алгоритмы
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0d0d0d]">5 проверенных стратегий</h2>
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Каждая стратегия прошла минимум 6 месяцев реального тестирования. Выбирайте под свой стиль и горизонт.
              </p>
            </motion.div>

            {/* Strategy Tabbed Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto rounded-3xl border border-gray-200/90 bg-white overflow-hidden shadow-xl"
            >
              {/* Mobile Horizontal Tabs */}
              <div className="md:hidden flex overflow-x-auto scrollbar-none border-b border-gray-100 bg-gray-50/50 p-2 gap-2">
                {strategies.map((st, idx) => (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStrategy(idx)}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                      selectedStrategy === idx
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <StrategyIcon id={st.id} gradient={st.gradient} size={22} />
                    {st.name}
                  </button>
                ))}
              </div>

              {/* Desktop Tabs & Content Split */}
              <div className="hidden md:grid md:grid-cols-[260px_1fr]">
                {/* Left Tabs List */}
                <div className="divide-y divide-gray-100 border-r border-gray-100 bg-gray-50/40">
                  {strategies.map((st, idx) => {
                    const isCurrent = selectedStrategy === idx;
                    return (
                      <button
                        key={st.id}
                        onClick={() => setSelectedStrategy(idx)}
                        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all ${
                          isCurrent
                            ? 'bg-white border-l-4 border-l-[#7360F2] shadow-sm'
                            : 'hover:bg-gray-100/60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <StrategyIcon id={st.id} gradient={st.gradient} size={32} />
                          <span
                            className={`font-semibold text-sm transition-colors ${
                              isCurrent ? 'text-black font-bold' : 'text-gray-600'
                            }`}
                          >
                            {st.name}
                          </span>
                        </div>
                        {!isCurrent && (
                          <span className="text-[11px] text-gray-400 font-medium ml-2 shrink-0">
                            {st.tag}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Right Strategy Details */}
                <div className="flex flex-col justify-between p-8 lg:p-10 min-h-[340px]">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <StrategyIcon id={activeStrat.id} gradient={activeStrat.gradient} size={42} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">
                          Активная стратегия
                        </p>
                        <h3 className="font-bold text-xl md:text-2xl text-[#0d0d0d]">{activeStrat.name}</h3>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {activeStrat.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                      <div className="rounded-2xl bg-gray-50 border border-gray-200/80 px-4 py-3">
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                          Тип рынка
                        </p>
                        <p className="text-sm font-bold text-gray-900">{activeStrat.market}</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 border border-gray-200/80 px-4 py-3">
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                          Ср. время в сделке
                        </p>
                        <p className="text-sm font-bold text-gray-900">{activeStrat.avgTime}</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 border border-gray-200/80 px-4 py-3">
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                          Мин. депозит
                        </p>
                        <p className="text-sm font-bold text-gray-900">{activeStrat.minDeposit}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                    <button
                      onClick={() => setContactModalOpen(true)}
                      className="inline-flex items-center gap-2 text-sm font-semibold border border-gray-200 hover:border-black rounded-full h-11 px-6 transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#7360F2] animate-pulse" />
                      Написать менеджеру
                    </button>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold rounded-full h-11 px-6 bg-black text-white hover:bg-gray-800 transition-all shadow-md"
                    >
                      Подключиться <ArrowRight className="w-4 h-4 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile View Strategy Details */}
              <div className="md:hidden p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <StrategyIcon id={activeStrat.id} gradient={activeStrat.gradient} size={36} />
                    <h3 className="font-bold text-lg">{activeStrat.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{activeStrat.description}</p>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="rounded-xl bg-gray-50 p-3">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase block">Тип рынка</span>
                      <span className="text-sm font-bold text-gray-900">{activeStrat.market}</span>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-3">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase block">Ср. время в сделке</span>
                      <span className="text-sm font-bold text-gray-900">{activeStrat.avgTime}</span>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-3">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase block">Мин. депозит</span>
                      <span className="text-sm font-bold text-gray-900">{activeStrat.minDeposit}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="w-full h-11 rounded-full border border-gray-200 text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#7360F2] animate-pulse" />
                    Написать менеджеру
                  </button>
                  <a
                    href="#contact"
                    className="w-full h-11 rounded-full bg-black text-white text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    Подключиться <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Alternative Conditions Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="w-px h-10 bg-gray-200" />
              <div className="my-3 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-xs font-bold font-mono">
                VS
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                Альтернатива для старта
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-center">
                Если у вас нет аккаунта или капитал меньше 1500 USDT
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {alternativeConditions.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-gray-200 bg-gray-50/60">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 text-[#7360F2] font-bold">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-base mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Trading Pools Section */}
        <section id="pools" className="py-24 bg-gray-50/70 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Торговые пулы
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0d0d0d]">6 торговых пулов</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
                Выберите пул под свой горизонт и капитал. Доходность указана со сложным процентом и является ориентировочной — зависит от рыночных условий.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {pools.map((p, idx) => {
                const isPremium = p.badge === 'Премиум';
                const isPopular = p.badge === 'Популярный';

                return (
                  <motion.div
                    key={p.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="h-full"
                  >
                    <div
                      className={`h-full p-7 rounded-3xl flex flex-col justify-between relative overflow-hidden transition-all bg-white border ${
                        p.locked
                          ? 'border-gray-200/70 bg-gray-50/50 opacity-80'
                          : isPremium
                          ? 'border-2 border-black shadow-xl'
                          : isPopular
                          ? 'border-2 border-black/40 shadow-lg'
                          : 'border-gray-200 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {/* Badge Top Right */}
                      {p.badge && (
                        <div
                          className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                            p.locked
                              ? 'bg-gray-200 text-gray-500'
                              : isPremium
                              ? 'bg-black text-white'
                              : 'bg-black/10 text-black border border-black/20'
                          }`}
                        >
                          {p.locked && <span className="mr-1">🔒</span>}
                          {p.badge}
                        </div>
                      )}

                      <div>
                        {/* Pool Header */}
                        <div className="flex items-center gap-2.5 mb-5">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                            #{p.num}
                          </span>
                          <h3 className={`text-2xl font-bold ${p.locked ? 'text-gray-400' : 'text-gray-900'}`}>
                            {p.name}
                          </h3>
                        </div>

                        {/* Yield / Returns */}
                        {!p.locked && (
                          <div className="mb-6 pb-6 border-b border-gray-100">
                            <div className="text-xs text-gray-400 mb-1">≈ суточная доходность</div>
                            <div className="text-3xl font-mono font-bold text-gray-900">{p.daily}</div>
                            {p.yieldLabel && (
                              <div className="text-sm font-semibold text-[#7360F2] mt-1.5">{p.yieldLabel}</div>
                            )}
                          </div>
                        )}

                        {/* Pool Conditions */}
                        <div className="space-y-3 mb-8 text-xs text-gray-600">
                          {p.minDeposit && (
                            <div className="flex items-center gap-2">
                              <Wallet className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              <span>
                                Минимум: <strong className="text-gray-900">{p.minDeposit}</strong>
                              </span>
                            </div>
                          )}
                          {p.lock && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              <span>{p.lock}</span>
                            </div>
                          )}
                          {p.withdrawal && (
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              <span>{p.withdrawal}</span>
                            </div>
                          )}
                          {p.settleDays && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              <span>{p.settleDays}</span>
                            </div>
                          )}
                          {p.fee && (
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                              <span className={p.fee.startsWith('Без') ? 'font-semibold text-gray-900' : ''}>
                                {p.fee}
                              </span>
                            </div>
                          )}
                          {p.support && (
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-[#7360F2] shrink-0" />
                              <span className="font-semibold text-gray-900">{p.support}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div>
                        {p.locked ? (
                          <a
                            href="#contact"
                            className="w-full h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-sm flex items-center justify-center transition-colors"
                          >
                            Связаться с поддержкой
                          </a>
                        ) : (
                          <a
                            href="#contact"
                            className={`w-full h-11 rounded-full font-semibold text-sm flex items-center justify-center transition-all ${
                              isPremium || isPopular
                                ? 'bg-black hover:bg-gray-800 text-white shadow-md'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                            }`}
                          >
                            Войти в {p.name}
                          </a>
                        )}

                        {!p.locked && (
                          <p className="text-[10px] text-gray-400 leading-relaxed mt-3 text-center">
                            * бот работает по принципу сложного процента, капитализируя каждую сделку.
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 text-center italic">
              Ориентиры по доходности не являются гарантией. Результаты торговли зависят от рыночных условий; возможны просадки и убытки.
            </p>
          </div>
        </section>

        {/* Pool Mechanics Section */}
        <section id="pool-mechanics" className="py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left Explanations */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                  Механика пулов
                </p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#0d0d0d]">
                  Как работает <br className="hidden sm:block" /> система пулов?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Пул — это объединение участников вокруг одного доверенного управляющего. Средства аккумулируются на его биржевом аккаунте, а торговлю за всех ведёт алгоритм BotForge.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      n: '01',
                      title: 'Участники переводят средства десятнику',
                      desc: 'Каждый участник добровольно переводит свои средства на биржевой счёт десятника — верифицированного управляющего пула.',
                    },
                    {
                      n: '02',
                      title: 'Десятник — доверенный и проверенный',
                      desc: 'Десятник прошёл многоступенчатую верификацию и модерацию BotForge. Он давно торгует на платформе и пользуется полным доверием компании.',
                    },
                    {
                      n: '03',
                      title: 'Максимум 24 участника на пул',
                      desc: 'Ограничение защищает управляемость: десятник лично контролирует каждого участника и несёт ответственность перед платформой.',
                    },
                    {
                      n: '04',
                      title: 'Алгоритм торгует на едином счёте',
                      desc: 'BotForge запускает выбранную стратегию на аккаунте десятника. Прибыль рассчитывается и распределяется пропорционально вкладу каждого участника.',
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.45 }}
                      className="flex gap-4"
                    >
                      <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-black text-white text-[11px] font-bold flex items-center justify-center font-mono tracking-tight">
                        {item.n}
                      </span>
                      <div>
                        <h3 className="font-semibold text-base mb-1 text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right SVG Diagram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <PoolMechanicsDiagram />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Program Section */}
        <section id="partners" className="py-24 bg-gray-50/70 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-14 max-w-3xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0d0d0d]">Партнёрская программа</h2>
              <p className="text-lg text-gray-600">
                Партнёрская программа позволяет вам зарабатывать вместе с приглашенными вами партнёрами от их чистой прибыли в месяц.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Card: Classic Program */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Классическая партнёрская программа</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    Получайте процент от чистой прибыли ваших партнёров каждый месяц — по всей глубине структуры. Выплаты начисляются автоматически.
                  </p>

                  <div className="divide-y divide-gray-100">
                    {classicLevels.map((lvl) => (
                      <div key={lvl.level} className="flex items-center justify-between py-3.5">
                        <span className="text-sm font-semibold text-gray-700">{lvl.level}</span>
                        <span className="text-base font-mono font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">
                          {lvl.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Проценты начисляются от фактической чистой прибыли рефералов за расчетный торговый цикл.
                  </p>
                </div>
              </motion.div>

              {/* Right Card: Rank Bonus Program */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-full p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Ранговая бонусная программа</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    Ранг открывается при достижении суммарной чистой прибыли партнёров первой линии. Бонус начисляется единоразово на основной баланс.
                  </p>

                  {/* Table Header */}
                  <div
                    className="grid py-2 px-1 text-[10px] font-mono text-gray-400 uppercase tracking-wider border-b border-gray-200"
                    style={{ gridTemplateColumns: '1.4rem 1fr 1.8fr 3.6rem 4.8rem' }}
                  >
                    <span>#</span>
                    <span>Ранг</span>
                    <span>Прибыль 1 линии</span>
                    <span className="text-center">Множ.*</span>
                    <span className="text-right">Бонус</span>
                  </div>

                  {/* Scrollable Rank List */}
                  <div className="overflow-y-auto bf-scroll max-h-[380px] divide-y divide-gray-100">
                    {rankBonusProgram.map((r) => {
                      const isHigh = r.num >= 10;
                      const isMax = r.num === 12;

                      return (
                        <div
                          key={r.num}
                          className="grid py-3 px-1 items-center gap-x-2 text-sm hover:bg-gray-50/80 transition-colors"
                          style={{ gridTemplateColumns: '1.4rem 1fr 1.8fr 3.6rem 4.8rem' }}
                        >
                          <span className={`font-mono text-xs font-bold ${isMax ? 'text-[#7360F2]' : 'text-gray-400'}`}>
                            {r.num}
                          </span>
                          <div className="flex items-center gap-1 min-w-0">
                            <span className={`font-semibold text-xs truncate ${isMax ? 'text-[#7360F2] font-bold' : 'text-gray-800'}`}>
                              {r.name}
                            </span>
                            {isMax && (
                              <span className="text-[8px] font-bold bg-[#7360F2] text-white px-1 py-0.5 rounded-full leading-none">
                                MAX
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 truncate">от {r.threshold} USDT</span>
                          <span className={`font-mono text-xs font-bold text-center ${isMax ? 'text-[#7360F2]' : 'text-gray-700'}`}>
                            {r.multiplier}×
                          </span>
                          <span className={`font-mono text-xs font-bold text-right ${isMax ? 'text-[#7360F2]' : 'text-gray-900'}`}>
                            {r.bonus} <span className="text-[10px] font-normal text-gray-400">USDT</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    <strong className="text-gray-700">* Ранговый множитель</strong> увеличивает процент бонусов в рамках Классической партнёрской программы. Например, на ранге «Эмиссар» множитель 1.1 — бонус с первой линии составит уже 11%.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0d0d0d]">Часто задаваемые вопросы</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Собрали самые острые вопросы, которые задают новые клиенты.
              </p>
            </motion.div>

            {/* 2-Column Responsive FAQ Grid */}
            <div className="grid lg:grid-cols-2 gap-4 items-start max-w-6xl mx-auto">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-200/90 bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900 hover:text-black transition-colors"
                    >
                      <span>{item.q}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ready to Start / Contact Section */}
        <section id="contact" className="py-24 bg-gray-50/80 border-t border-gray-100 relative overflow-hidden">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0d0d0d]">Готовы начать?</h2>
              <p className="text-lg text-gray-500 mb-6">
                Подключите стратегию напрямую в личном кабинете или задайте вопрос нашему специалисту.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/user"
                  className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  <span>Войти в личный кабинет</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 bg-white border border-gray-200/90 rounded-3xl shadow-xl"
            >
              {leadSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Заявка успешно отправлена!</h3>
                  <p className="text-gray-500 text-sm">Наш специалист свяжется с вами в течение часа.</p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="cta-name" className="font-semibold text-xs text-gray-700">
                        Ваше имя <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cta-name"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="Как к вам обращаться?"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="cta-phone" className="font-semibold text-xs text-gray-700">
                        Телефон / Telegram <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cta-phone"
                        required
                        value={leadContact}
                        onChange={(e) => setLeadContact(e.target.value)}
                        placeholder="+1 999 ... или @username"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="cta-capital" className="font-semibold text-xs text-gray-700">
                      Планируемая сумма инвестиций
                    </label>
                    <input
                      id="cta-capital"
                      value={leadCapital}
                      onChange={(e) => setLeadCapital(e.target.value)}
                      placeholder="Например: 2 000 USDT"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="cta-message" className="font-semibold text-xs text-gray-700">
                      Вопрос или комментарий
                    </label>
                    <textarea
                      id="cta-message"
                      rows={4}
                      value={leadMessage}
                      onChange={(e) => setLeadMessage(e.target.value)}
                      placeholder="Опишите ситуацию или задайте вопрос — менеджер ответит лично"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/60 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-13 py-3.5 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-base transition-all shadow-lg hover:shadow-xl"
                  >
                    Отправить заявку
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Отправляя форму, вы соглашаетесь с обработкой персональных данных.
                  </p>
                </form>
              )}

              {/* Direct Messengers Contact Row */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-wider mb-6">
                  Или напишите нам напрямую
                </p>
                <div className="flex items-center justify-center gap-6 sm:gap-10">
                  <a
                    href="https://wa.me/79991234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center group-hover:bg-[#25D366]/20 group-hover:scale-105 transition-all">
                      <svg className="w-7 h-7 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-black transition-colors">
                      WhatsApp
                    </span>
                  </a>

                  <a
                    href="viber://chat?number=79991234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#7360F2]/10 border border-[#7360F2]/25 flex items-center justify-center group-hover:bg-[#7360F2]/20 group-hover:scale-105 transition-all">
                      <svg className="w-7 h-7 text-[#7360F2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-black transition-colors">
                      Viber
                    </span>
                  </a>

                  <a
                    href="https://t.me/botforge_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#229ED9]/10 border border-[#229ED9]/25 flex items-center justify-center group-hover:bg-[#229ED9]/20 group-hover:scale-105 transition-all">
                      <svg className="w-7 h-7 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-black transition-colors">
                      Telegram
                    </span>
                  </a>

                  <a
                    href="https://mlmos.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center group-hover:bg-orange-100 group-hover:scale-105 transition-all">
                      <svg className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.18L19 8v8l-7 3.88L5 16V8l7-3.82z" />
                        <path d="M12 6.5L7 9.25v5.5L12 17.5l5-2.75v-5.5L12 6.5zm0 1.73l3 1.65v3.24L12 14.77l-3-1.65V9.88L12 8.23z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-black transition-colors">
                      MLM OS
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 bg-[#f9f9fb]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              {/* Brand Column */}
              <div className="col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <BotForgeLogo size={28} className="text-[#0d0d0d]" />
                  <span className="font-bold text-xl tracking-tight text-[#0d0d0d]">
                    Bot<span className="text-[#7360F2]">Forge</span>
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  Платформа алгоритмического копитрейдинга на Binance и Bybit. Алгоритм торгует — вы наблюдаете.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://t.me/botforge_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-[#229ED9] hover:bg-[#229ED9]/10 transition-colors"
                    aria-label="Telegram"
                  >
                    <svg className="w-4 h-4 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/79991234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </a>
                  <a
                    href="viber://chat?number=79991234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:border-[#7360F2] hover:bg-[#7360F2]/10 transition-colors"
                    aria-label="Viber"
                  >
                    <svg className="w-4 h-4 text-[#7360F2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation Columns */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Навигация
                </p>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Главная', href: '/' },
                    { label: 'Преимущества', href: '#advantages' },
                    { label: 'Как работает', href: '#how-it-works' },
                    { label: 'Стратегии', href: '#strategies' },
                    { label: 'Инвестиционные пулы', href: '#pools' },
                    { label: 'Партнёрская программа', href: '#partners' },
                    { label: 'Частые вопросы', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                  ].map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Личный кабинет
                </p>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Войти в кабинет', href: '/user' },
                    { label: 'Регистрация', href: '/login?mode=register' },
                    { label: 'Мои стратегии', href: '/user/bots' },
                    { label: 'Подключённые пулы', href: '/user/portfolio' },
                    { label: 'История сделок', href: '/user/history' },
                    { label: 'Партнёрская статистика', href: '/user/partners' },
                    { label: 'Рефералы и ранги', href: '/user/partners' },
                    { label: 'Настройки API-ключей', href: '/user/apikeys' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Правовая информация
                </p>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Политика конфиденциальности', href: '/privacy' },
                    { label: 'Правила использования', href: '/terms' },
                    { label: 'Публичная оферта', href: '/terms' },
                    { label: 'Политика Cookies', href: '/cookies' },
                    { label: 'Политика AML/KYC', href: '/privacy' },
                    { label: 'Раскрытие рисков', href: '/privacy' },
                    { label: 'Условия партнёрской программы', href: '/terms' },
                    { label: 'Правила пула (Pool Agreement)', href: '/terms' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal Disclaimers */}
            <div className="pt-8 border-t border-gray-200/80 mb-8 space-y-3">
              <p className="text-[11px] leading-relaxed text-gray-400">
                <span className="font-semibold text-gray-500 uppercase tracking-wider text-[9px]">
                  Важный правовой дисклеймер ·{' '}
                </span>
                BotForge не является инвестиционным советником, брокером, управляющей компанией или иным субъектом, оказывающим финансовые услуги. Платформа предоставляет исключительно программные алгоритмы для автоматического совершения операций на биржевых аккаунтах пользователя через API бирж Binance и Bybit. Пользователь самостоятельно принимает решения и несёт полную ответственность за результаты торговли.
              </p>
              <p className="text-[11px] leading-relaxed text-gray-400">
                Участие в пулах организовано непосредственно между участниками сообщества на условиях Публичной оферты. BotForge не принимает средства пользователей в управление, не является стороной в сделках и не несёт ответственности за убытки, возникшие в результате торговых операций или сбоев бирж.
              </p>
              <p className="text-[11px] leading-relaxed text-gray-400">
                Торговля криптоактивами сопряжена с высоким риском и может привести к частичной или полной потере вложенных средств. Прошлые результаты не гарантируют доходность в будущем.
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-mono">© 2026 BotForge. Все права защищены.</p>
              <div className="flex items-center gap-5 text-xs text-gray-400">
                <Link to="/privacy" className="hover:text-black transition-colors">Конфиденциальность</Link>
                <Link to="/terms" className="hover:text-black transition-colors">Условия</Link>
                <Link to="/cookies" className="hover:text-black transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Lead Consultation Modal */}
        <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      </div>
    </div>
  );
}
