import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, MapPin, Phone, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export function EnrollModal({ isOpen, onClose, selectedTier = "Mentored Flagship" }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [format, setFormat] = useState('campus');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.startsWith('8') || input.startsWith('7')) input = input.substring(1);
    input = input.substring(0, 10);
    
    let formatted = '+7 ';
    if (input.length > 0) formatted += `(${input.substring(0, 3)}`;
    if (input.length >= 3) formatted += `) ${input.substring(3, 6)}`;
    if (input.length >= 6) formatted += `-${input.substring(6, 8)}`;
    if (input.length >= 8) formatted += `-${input.substring(8, 10)}`;
    setPhone(input.length === 0 ? '' : formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || phone.length < 16) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newLead = {
        id: 'AI-' + Math.floor(1000 + Math.random() * 9000),
        name: name.trim(),
        phone,
        tier: selectedTier,
        format: format === 'campus' ? 'Кампус Алматы (ул. Манаса 34/1)' : 'Онлайн',
        date: new Date().toLocaleDateString('ru-RU') + ' ' + new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };

      const stored = JSON.parse(localStorage.getItem('knewit_course_enrollments') || '[]');
      localStorage.setItem('knewit_course_enrollments', JSON.stringify([newLead, ...stored]));

      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Бронирование подтверждено!</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Мы закрепили за вами место по тарифу <span className="text-cyan-400 font-semibold">{selectedTier}</span>. Куратор из кампуса Алматы свяжется с вами в течение 10 минут в WhatsApp.
            </p>
            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-bold text-white shadow-glow-cyan transition"
            >
              Готово
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold font-mono border border-cyan-500/30">
                Тариф: {selectedTier}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white mb-1">
              Забронировать место на потоке
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Осталось 4 места в группе. Доступна рассрочка Kaspi 0-0-12.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Ваше имя
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Например: Данияр"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Телефон (WhatsApp) в Казахстане
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+7 (707) 123-45-67"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Где вы хотите учиться?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormat('campus')}
                    className={`p-3 rounded-xl border text-xs font-medium transition flex items-center gap-2 ${
                      format === 'campus'
                        ? 'border-cyan-500 bg-cyan-600/20 text-white'
                        : 'border-slate-700 bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Кампус Алматы (ул. Манаса)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('online')}
                    className={`p-3 rounded-xl border text-xs font-medium transition flex items-center gap-2 ${
                      format === 'online'
                        ? 'border-cyan-500 bg-cyan-600/20 text-white'
                        : 'border-slate-700 bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Онлайн (Zoom/Discord)</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || phone.length < 16}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm shadow-glow-orange transition disabled:opacity-40 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Бронирование...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Подтвердить запись на курс</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Казахстан, Алматы • ул. Манаса 34/1 • Kaspi 0-0-12</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
