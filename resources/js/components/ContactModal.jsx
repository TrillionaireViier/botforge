import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ContactModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setContact('');
      setMessage('');
      onClose();
    }, 2000);
  };

  const socials = [
    {
      label: 'WhatsApp',
      href: 'https://wa.me/79991234567',
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: 'Viber',
      href: 'viber://chat?number=79991234567',
      color: '#7360F2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017z" />
        </svg>
      ),
    },
    {
      label: 'Telegram',
      href: 'https://t.me/botforge_support',
      color: '#229ED9',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      label: 'MLM OS',
      href: 'https://mlmos.com',
      color: '#FF6B35',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="5" cy="17" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="19" cy="17" r="2.5" fill="currentColor" stroke="none" />
          <line x1="12" y1="7.5" x2="5.8" y2="14.8" />
          <line x1="12" y1="7.5" x2="18.2" y2="14.8" />
          <line x1="7.5" y1="17" x2="16.5" y2="17" />
        </svg>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="px-6 pt-6 pb-2">
              <h3 className="text-xl font-bold text-gray-900">Написать менеджеру</h3>
              <p className="text-sm text-gray-500 mt-1">Оставьте заявку — менеджер свяжется с вами в течение часа.</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-gray-900">Заявка отправлена!</h4>
                <p className="text-sm text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 pb-4 space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="cf-name" className="text-xs font-semibold text-gray-700">
                    Ваше имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cf-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как к вам обращаться?"
                    required
                    className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-contact" className="text-xs font-semibold text-gray-700">
                    Telegram / WhatsApp / телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cf-contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="@username или +1 (000) 000-00-00"
                    required
                    className="w-full h-11 px-3.5 text-sm rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-message" className="text-xs font-semibold text-gray-700">
                    Сообщение <span className="text-gray-400 font-normal">(необязательно)</span>
                  </label>
                  <textarea
                    id="cf-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Расскажите о своих целях или задайте вопрос..."
                    rows={3}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 bg-gray-50/60 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7360F2] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 rounded-full bg-black hover:bg-gray-800 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-black/10"
                >
                  Отправить заявку
                </button>
              </form>
            )}

            <div className="border-t border-gray-100 bg-gray-50/70 px-6 py-4">
              <p className="text-xs text-gray-400 text-center mb-3">Или напишите напрямую</p>
              <div className="flex items-center justify-center gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${s.color}15`, color: s.color }}
                    >
                      {s.icon}
                    </div>
                    <span className="text-[10px] text-gray-500 group-hover:text-gray-900 transition-colors">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
