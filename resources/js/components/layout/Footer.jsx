import { Link } from 'react-router-dom';
import BotForgeLogo from '../BotForgeLogo';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-[#f9f9fb] text-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <BotForgeLogo size={28} className="text-[#0d0d0d]" />
              <span className="font-bold text-xl tracking-tight text-[#0d0d0d]">
                Bot<span className="text-[#7360F2]">Forge</span>
              </span>
            </Link>
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
                  <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Навигация</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Главная', href: '/' },
                { label: 'Преимущества', href: '/#advantages' },
                { label: 'Как работает', href: '/#how-it-works' },
                { label: 'Стратегии', href: '/#strategies' },
                { label: 'Инвестиционные пулы', href: '/#pools' },
                { label: 'Партнёрская программа', href: '/#partners' },
                { label: 'Частые вопросы', href: '/#faq' },
                { label: 'Контакты', href: '/#contact' },
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
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Личный кабинет</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Войти в кабинет', href: '/login' },
                { label: 'Регистрация', href: '/login?mode=register' },
                { label: 'Мои стратегии', href: '/cabinet' },
                { label: 'Подключённые пулы', href: '/cabinet' },
                { label: 'История сделок', href: '/cabinet' },
                { label: 'Партнёрская статистика', href: '/cabinet' },
                { label: 'Рефералы и ранги', href: '/cabinet' },
                { label: 'Настройки API-ключей', href: '/cabinet' },
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
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Правовая информация</p>
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
            BotForge не является инвестиционным советником, брокером, управляющей компанией или иным субъектом, оказывающим финансовые услуги. Платформа предоставляет исключительно программные алгоритмы для совершения операций через API бирж Binance и Bybit. Пользователь самостоятельно принимает решения и несёт полную ответственность за результаты торговли.
          </p>
          <p className="text-[11px] leading-relaxed text-gray-400">
            Участие в пулах организовано непосредственно между участниками сообщества на условиях Публичной оферты. BotForge не принимает средства пользователей в управление и не несёт ответственности за убытки или сбои бирж.
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
  );
}
