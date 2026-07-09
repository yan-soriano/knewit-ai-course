import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Database, 
  Rocket, 
  ArrowRight, 
  Zap, 
  CheckCircle,
  FileCode,
  Globe,
  Cpu
} from 'lucide-react';

export function VisualPipeline() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 0,
      step: "01",
      title: "Human Intention",
      name: "Промпт & Спецификация",
      icon: Sparkles,
      color: "from-indigo-500 to-blue-500",
      accent: "#4F46E5",
      desc: "Вы формулируете бизнес-логику задачи на русском языке, создавая системный .cursorrules контекст.",
      codePreview: `@context: "Маркетплейс услуг Алматы"\n@rules: "Использовать Tailwind CSS и PostgreSQL RLS"\n"Создай форму онлайн-записи с Kaspi QR"`
    },
    {
      id: 1,
      step: "02",
      title: "AI Synthesis",
      name: "Cursor IDE & Claude 3.5",
      icon: Terminal,
      color: "from-cyan-500 to-blue-500",
      accent: "#06B6D4",
      desc: "Cursor Composer параллельно редактирует 8 файлов проекта, создавая компоненты со строгой типизацией.",
      codePreview: `// Cursor Composer generated\nexport async function handleBooking(slotId) {\n  const res = await supabase.from('bookings').insert(...);\n  return res;\n}`
    },
    {
      id: 2,
      step: "03",
      title: "Data & Security",
      name: "Supabase & Postgres",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      accent: "#10B981",
      desc: "Реляционная база данных в облаке: Row Level Security, авторизация по SMS и хранилище файлов.",
      codePreview: `CREATE POLICY "Students see own bookings"\nON bookings FOR SELECT\nUSING (auth.uid() = student_id);`
    },
    {
      id: 3,
      step: "04",
      title: "Live Production",
      name: "Деплой на Vercel & .kz",
      icon: Rocket,
      color: "from-orange-500 to-amber-500",
      accent: "#F97316",
      desc: "Мгновенная доставка в продакшн с автоматическими превью-ветками и подключением Kaspi Pay.",
      codePreview: `✓ Production deployed to https://almaty-services.kz\n✓ Kaspi Pay Webhook Active (Status: 200 OK)\n✓ 140+ real users in Almaty`
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Инженерный пайплайн Vibe Coding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Как мы строим сервисы: от идеи до продакшна
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Сквозная цепочка разработки, которую осваивают студенты кампуса KnewIT в Алматы.
          </p>
        </div>

        {/* Desktop Interactive SVG Pipeline Connectors */}
        <div className="hidden lg:block mb-12 relative">
          <svg className="w-full h-24" viewBox="0 0 1000 90" fill="none">
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="35%" stopColor="#06B6D4" />
                <stop offset="70%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
              <filter id="wireGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Dotted Wire Path */}
            <path
              d="M 125 45 C 250 45, 250 45, 375 45 C 500 45, 500 45, 625 45 C 750 45, 750 45, 875 45"
              stroke="#1E293B"
              strokeWidth="3"
              strokeDasharray="6 6"
            />

            {/* Active Flowing Wire */}
            <path
              d={`M 125 45 L ${125 + (activeStage / 3) * 750} 45`}
              stroke="url(#pipeGrad)"
              strokeWidth="4"
              className="animate-flow-dash"
              filter="url(#wireGlow)"
            />

            {/* Nodes */}
            {stages.map((st, i) => {
              const cx = 125 + i * 250;
              const isSelected = activeStage === i;
              const isPast = activeStage > i;

              return (
                <g 
                  key={st.id} 
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveStage(i)}
                >
                  {isSelected && (
                    <circle
                      cx={cx}
                      cy={45}
                      r="22"
                      fill="none"
                      stroke={st.accent}
                      strokeWidth="1.5"
                      className="animate-ping"
                      opacity="0.6"
                    />
                  )}
                  <circle
                    cx={cx}
                    cy={45}
                    r="15"
                    fill={isSelected ? st.accent : isPast ? "#10B981" : "#0F172A"}
                    stroke={isSelected ? "#FFFFFF" : isPast ? "#10B981" : "#334155"}
                    strokeWidth="2.5"
                  />
                  <text
                    x={cx}
                    y="76"
                    textAnchor="middle"
                    fill={isSelected ? "#FFFFFF" : "#94A3B8"}
                    fontSize="11"
                    fontWeight={isSelected ? "700" : "500"}
                    fontFamily="Outfit, sans-serif"
                  >
                    {st.name}
                  </text>
                  <text
                    x={cx}
                    y="22"
                    textAnchor="middle"
                    fill={isSelected ? st.accent : "#64748B"}
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="monospace"
                  >
                    STAGE {st.step}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bento Grid: 4 Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((st, i) => {
            const isSelected = activeStage === i;
            const IconC = st.icon;

            return (
              <div
                key={st.id}
                onClick={() => setActiveStage(i)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bento-card-active -translate-y-1'
                    : 'bento-card hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      STEP {st.step}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-tr ${st.color} text-white shadow-md`}>
                      <IconC className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {st.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mb-3">
                    {st.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Micro Code Snippet */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 font-mono text-[10px] text-slate-300 leading-snug overflow-x-auto whitespace-pre">
                    {st.codePreview}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
