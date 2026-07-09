import React, { useState } from 'react';
import { 
  Terminal, 
  Sparkles, 
  FileCode, 
  Check, 
  Copy, 
  Cpu, 
  Zap, 
  Layers,
  ArrowRight
} from 'lucide-react';

const PRESETS = [
  {
    id: 'auth',
    label: 'Supabase Auth (.kz SMS)',
    prompt: 'Создай модуль входа студентов KnewIT через SMS код в Казахстане с RLS защитой базы данных Postgres.',
    filename: 'lib/supabase-auth.ts',
    code: `import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function verifyAlmatyStudent(phone: string, token: string) {
  const { data, error } = await supabase.auth.verifyOtp({
    phone: phone.startsWith('+7') ? phone : \`+7\${phone}\`,
    token,
    type: 'sms',
  });
  if (error) throw new Error(error.message);
  return { student: data.user, session: data.session };
}`
  },
  {
    id: 'ai-agent',
    label: 'Claude 3.5 Agent',
    prompt: 'Автономный AI-агент для автоматического ревью pull request студентов KnewIT и поиска утечек памяти.',
    filename: 'agents/code-reviewer.py',
    code: `from anthropic import Anthropic
import json

client = Anthropic()

def review_pull_request(diff: str) -> dict:
    prompt = "Ты Senior AI-ментор в KnewIT (Алматы). Проверь diff на React утечки."
    msg = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=800,
        messages=[{"role": "user", "content": f"Diff: {diff}"}]
    )
    return json.loads(msg.content[0].text)`
  },
  {
    id: 'kaspi',
    label: 'Kaspi Pay Webhook',
    prompt: 'Безопасный вебхук оплаты Kaspi QR с валидацией HMAC подписи и моментальным открытием курса.',
    filename: 'api/kaspi-webhook.ts',
    code: `import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const signature = req.headers.get('x-kaspi-signature');

  if (!validateKaspiHMAC(payload, signature)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await activateStudentAccess(payload.phone, payload.cohortId);
  return NextResponse.json({ ok: true, status: 'ACTIVATED' });
}`
  }
];

export function IdeBento() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = PRESETS[activeIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090D16] border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Top IDE Window Header */}
      <div className="bg-[#0F172A] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-300 font-sans text-xs flex items-center gap-1.5">
            <span className="font-bold text-white">Cursor Composer</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">Claude 3.5 Sonnet</span>
          </span>
        </div>

        {/* Preset switcher */}
        <div className="flex items-center gap-1">
          {PRESETS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-2.5 py-1 rounded-lg text-[10px] transition ${
                activeIdx === idx
                  ? 'bg-cyan-500 text-black font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {p.label}
            </button>
          ))}

          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 ml-2 transition"
            title="Копировать код"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Developer Prompt Bar */}
      <div className="bg-[#111C33] p-3 border-b border-slate-800 flex items-start gap-2.5">
        <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/30">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider font-sans">
              Промпт разработчика KnewIT:
            </span>
            <span className="text-[10px] text-slate-500">@codebase @docs</span>
          </div>
          <p className="text-slate-200 text-xs font-sans leading-relaxed">
            "{current.prompt}"
          </p>
        </div>
      </div>

      {/* Code Editor Content */}
      <div className="p-4 bg-[#070B14] overflow-x-auto text-[11px] leading-relaxed">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-500 text-[10px]">
          <div className="flex items-center gap-1.5 text-cyan-400">
            <FileCode className="w-3.5 h-3.5" />
            <span>{current.filename}</span>
          </div>
          <span className="text-emerald-400 font-sans flex items-center gap-1">
            <Check className="w-3 h-3" /> Type Safe & Verified
          </span>
        </div>

        <pre className="text-slate-300">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="bg-[#0F172A] px-4 py-1.5 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-sans">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-300">
            <Cpu className="w-3 h-3 text-cyan-400" />
            Tokens: 920/s
          </span>
          <span>•</span>
          <span className="text-emerald-400">Vibe Mode: LIVE</span>
        </div>
        <span className="text-cyan-400 font-mono">
          KnewIT Almaty Campus 2026
        </span>
      </div>
    </div>
  );
}
