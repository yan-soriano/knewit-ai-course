import React, { useState } from 'react';
import { COURSE_DETAILS } from './data/courseData';
import { VisualPipeline } from './components/VisualPipeline';
import { IdeBento } from './components/IdeBento';
import { EnrollModal } from './components/EnrollModal';
import { 
  Sparkles, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  Rocket, 
  BrainCircuit, 
  Database, 
  Terminal, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Award,
  Zap,
  Building2,
  Phone,
  Mail,
  Heart,
  MessageCircle,
  Clock,
  Layers
} from 'lucide-react';

const MODULE_ICONS = {
  BrainCircuit,
  Sparkles,
  Database,
  Rocket
};

export function App() {
  const [openModId, setOpenModId] = useState('mod-1');
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const [enrollState, setEnrollState] = useState({ isOpen: false, tier: 'Mentored Flagship' });

  const handleOpenEnroll = (tier = 'Mentored Flagship') => {
    setEnrollState({ isOpen: true, tier });
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* ========================================================================= */}
      {/* HEADER */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-glow-cyan">
            <span className="font-mono text-xs font-black">&lt;/&gt;</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white">
                Knew<span className="text-cyan-400">IT</span> AI
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px] font-mono font-bold">
                Vibe Coding Bootcamp 2026
              </span>
            </div>
            <p className="text-[10px] text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-orange-400" />
              Казахстан, Алматы • ул. Манаса 34/1
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <a href="#pipeline" className="hover:text-cyan-400 transition">Пайплайн</a>
          <a href="#modules" className="hover:text-cyan-400 transition">Программа</a>
          <a href="#stack" className="hover:text-cyan-400 transition">Стек</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Тарифы</a>
          <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleOpenEnroll("Mentored Flagship (189 000 ₸)")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-glow-cyan transition"
          >
            Записаться
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 1. HERO BENTO GRID SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 mesh-glow overflow-hidden">
        {/* Glow ambient background spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Title Block */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{COURSE_DETAILS.cohortBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6">
              Build Tech Products with AI in{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                4 Weeks
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              {COURSE_DETAILS.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenEnroll("Mentored Flagship (Поток 2026)")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-base shadow-glow-orange transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Забронировать место на потоке</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#modules"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 backdrop-blur-md transition flex items-center justify-center gap-2"
              >
                <span>Учебный силлабус</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                С нуля без кода
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-400" />
                Кампус в Алматы (ул. Манаса 34/1)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                Kaspi 0-0-12
              </span>
            </div>
          </div>

          {/* Asymmetric Bento Layout: IDE Preview + Model Connectors */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative">
              {/* Connector Badges around IDE */}
              <div className="hidden md:flex items-center justify-between px-6 pb-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Pipeline Active: Claude 3.5 Sonnet Engine</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Supabase DB Connected</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Vercel Edge Ready</span>
                </div>
              </div>

              <IdeBento />
            </div>
          </div>

          {/* Bento Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {COURSE_DETAILS.stats.map((st, idx) => (
              <div
                key={idx}
                className="bento-card p-6 rounded-3xl text-center hover:border-cyan-500/40 transition"
              >
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-1">
                  {st.value}
                </div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 font-mono">
                  {st.label}
                </div>
                <div className="text-xs text-slate-400">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VISUAL PIPELINE WORKFLOW */}
      {/* ========================================================================= */}
      <div id="pipeline">
        <VisualPipeline />
      </div>

      {/* ========================================================================= */}
      {/* 3. COURSE MODULES ACCORDION BENTO */}
      {/* ========================================================================= */}
      <section id="modules" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              Пошаговый план
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
              4 недели от идеи до работающего стартапа
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Каждый модуль завершается готовым задеплоенным проектом с базой данных и пользователями.
            </p>
          </div>

          <div className="space-y-4">
            {COURSE_DETAILS.modules.map((mod) => {
              const isOpen = openModId === mod.id;
              const IconComp = MODULE_ICONS[mod.icon] || Sparkles;

              return (
                <div
                  key={mod.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bento-card-active ring-1 ring-cyan-500/30'
                      : 'bento-card hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenModId(isOpen ? null : mod.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg transition ${
                        isOpen ? 'bg-cyan-500 text-black shadow-glow-cyan' : 'bg-slate-800 text-white'
                      }`}>
                        {mod.number}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {mod.duration}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`p-2 rounded-xl border transition-transform ${
                      isOpen ? 'border-cyan-500/50 bg-cyan-500/10 rotate-180 text-cyan-400' : 'border-slate-800 bg-slate-900 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-7 pt-2 border-t border-white/5 text-slate-300 animate-fade-in">
                      <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                        {mod.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 font-mono">
                          Практические темы модуля:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {mod.topics.map((t, i) => (
                            <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center gap-3">
                        <Rocket className="w-5 h-5 text-cyan-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-cyan-200">
                          {mod.project}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECH STACK GRID */}
      {/* ========================================================================= */}
      <section id="stack" className="py-20 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              Инструменты SOTA 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
              Стек, на котором пишут современные AI-продукты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_DETAILS.techStack.map((tech) => (
              <div
                key={tech.name}
                className="bento-card p-6 rounded-3xl hover:border-cyan-500/40 hover:shadow-glow-cyan transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-cyan-300">
                      {tech.category}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {tech.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {tech.role}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Практика в кампусе</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRICING BENTO CARDS */}
      {/* ========================================================================= */}
      <section id="pricing" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
              Инвестиция в карьеру
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
              Выберите удобный формат
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Рассрочка до 12 месяцев через Kaspi Red и 0-0-12
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {COURSE_DETAILS.pricing.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bento-card-active -translate-y-2 ring-2 ring-cyan-500/50'
                    : 'bento-card hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-black text-xs font-black tracking-wide shadow-glow-cyan">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {!plan.popular && (
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300 mb-3">
                      {plan.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{plan.desc}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white font-mono">{plan.price}</span>
                      <span className="text-sm text-slate-500 line-through font-mono">{plan.oldPrice}</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-medium mt-1">
                      {plan.installment}
                    </div>
                  </div>

                  <hr className="border-white/10 my-6" />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenEnroll(`Тариф: ${plan.name} (${plan.price})`)}
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white shadow-glow-orange hover:scale-[1.02]'
                      : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-glow-cyan hover:scale-[1.02]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ SECTION */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              Частые вопросы
            </span>
            <h2 className="text-3xl font-black text-white mt-2">
              Ответы на популярные вопросы
            </h2>
          </div>

          <div className="space-y-3">
            {COURSE_DETAILS.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;

              return (
                <div key={idx} className="bento-card rounded-2xl overflow-hidden transition">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-cyan-400 transition"
                  >
                    <span>{faq.q}</span>
                    <div className={`p-1.5 rounded-lg border transition-transform ${
                      isOpen ? 'border-cyan-500 bg-cyan-500/10 rotate-180 text-cyan-400' : 'border-slate-800 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ALMATY CAMPUS FOOTER BANNER */}
      {/* ========================================================================= */}
      <footer className="bg-slate-950 text-white border-t border-slate-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-500 text-black flex items-center justify-center font-mono font-bold text-sm">
                  &lt;/&gt;
                </div>
                <span className="text-xl font-black text-white">
                  Knew<span className="text-cyan-400">IT</span> AI
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Флагманская AI-академия нового поколения. Обучаем созданию стартапов и веб-сервисов со скоростью мысли через Vibe Coding.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                Кампус в Алматы
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>Казахстан, Алматы • ул. Манаса 34/1 (IT Hub)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+7 (707) 123-45-67 (WhatsApp / Звонки)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>almaty@knewit.kz</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                Забронировать место
              </h4>
              <button
                onClick={() => handleOpenEnroll("AI Bootcamp 2026")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-bold text-xs text-white shadow-glow-cyan transition"
              >
                Записаться на курс со скидкой
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 KnewIT Academy. Все права защищены. Алматы, Казахстан.
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span>Сделано в Алматы</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </div>
          </div>
        </div>
      </footer>

      <EnrollModal
        isOpen={enrollState.isOpen}
        onClose={() => setEnrollState({ isOpen: false, tier: '' })}
        selectedTier={enrollState.tier}
      />
    </div>
  );
}

export default App;
