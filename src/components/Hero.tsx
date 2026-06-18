'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { useNavigation } from '@/hooks/useNavigation';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────
interface EventItem {
  key: string;
  titleKey: string;
  recurrenceKey: string;
  dayOfWeek: number; // 0 = Sunday … 6 = Saturday
  hour: number;
  minute: number;
  icon: React.ReactNode;
}

interface Countdown {
  d: number;
  h: number;
  m: number;
  s: number;
}

// ─── Timer logic (FIXED) ──────────────────────────────────────────────────────
// Returns the next future Date for a weekly recurring event.
// Key fix: we ONLY skip to next week when the event has already passed today —
// never when it hasn't happened yet.
function getNextOccurrence(dayOfWeek: number, hour: number, minute: number): Date {
  const now = new Date();

  // Build a candidate for THIS week's occurrence
  const candidate = new Date(now);
  const diff = dayOfWeek - now.getDay(); // may be negative, 0, or positive
  candidate.setDate(now.getDate() + diff);
  candidate.setHours(hour, minute, 0, 0);

  // If the candidate is in the past (even by 1 second), push to next week
  if (candidate.getTime() <= now.getTime()) {
    candidate.setDate(candidate.getDate() + 7);
  }

  return candidate;
}

function msToCountdown(ms: number): Countdown {
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const totalSec = Math.floor(ms / 1000);
  return {
    d: Math.floor(totalSec / 86400),
    h: Math.floor((totalSec % 86400) / 3600),
    m: Math.floor((totalSec % 3600) / 60),
    s: totalSec % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

// ─── Countdown cell ──────────────────────────────────────────────────────────
function TimerCell({ value, label }: { value: number; label: string }) {
  const prevRef = useRef(value);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (prevRef.current !== value) {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 350);
      prevRef.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center min-w-[34px]">
      <span
        className={`font-semibold text-xl leading-none tracking-tight transition-colors duration-300 ${flash ? 'text-blue-300' : 'text-slate-200'
          }`}
      >
        {pad(value)}
      </span>
      <span className="mt-1 text-[9px] font-medium uppercase tracking-widest text-slate-500">
        {label}
      </span>
    </div>
  );
}

// ─── Event card ──────────────────────────────────────────────────────────────
function EventCard({
  event,
  isNext,
  countdown,
  t,
}: {
  event: EventItem;
  isNext: boolean;
  countdown: Countdown;
  t: (key: string) => string;
}) {
  return (
    <div
      className={`relative rounded-[24px] p-5 text-left overflow-hidden transition-all duration-500
        backdrop-blur-2xl backdrop-saturate-[1.5] group
        ${isNext
          ? 'bg-white/10 border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]'
          : 'bg-white/[0.03] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]'
        }`}
    >
      {/* Soft shine gradient across the card on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* "Next up" badge */}
      {isNext && (
        <div className="flex items-center gap-1.5 mb-3 relative z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-200 drop-shadow-sm">
            {t('nextUp') || 'Найближче'}
          </span>
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-5 relative z-10">
        <div>
          <p className="text-[15px] font-semibold text-white leading-snug mb-1 drop-shadow-md">
            {t(event.titleKey)}
          </p>
          <p className="text-[11px] text-white/70 font-medium tracking-wider drop-shadow-sm">
            {t(event.recurrenceKey)}
          </p>
        </div>

        <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-colors duration-500
          ${isNext ? 'bg-amber-400/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]' : 'bg-white/10 group-hover:bg-white/20'}`}>
          <svg
            className={`w-[20px] h-[20px] fill-none ${isNext ? 'stroke-amber-300' : 'stroke-white/90'}`}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            {event.icon}
          </svg>
        </div>
      </div>

      {/* Countdown */}
      <div className="flex items-end gap-1.5 relative z-10">
        <TimerCell value={countdown.d} label={t('days') || 'днів'} />
        <span className="text-xl font-light text-white/40 mb-1.5 drop-shadow-sm">:</span>
        <TimerCell value={countdown.h} label={t('hours') || 'год'} />
        <span className="text-xl font-light text-white/40 mb-1.5 drop-shadow-sm">:</span>
        <TimerCell value={countdown.m} label={t('minutes') || 'хв'} />
        <span className="text-xl font-light text-white/40 mb-1.5 drop-shadow-sm">:</span>
        <TimerCell value={countdown.s} label={t('seconds') || 'сек'} />
      </div>
    </div>
  );
}

// ─── Stars (client-only, stable seed via useMemo) ─────────────────────────────
function Stars() {
  // Generate once; no hydration mismatch because this component renders
  // only after mount (called inside a useEffect-gated render, or just accepted
  // as a client component that's fine with a small hydration diff).
  const stars = useRef(
    Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: ((i * 137.508) % 100),          // golden-angle spread — deterministic
      y: ((i * 97.3) % 100),
      size: 0.8 + (i % 5) * 0.35,
      dur: (2.5 + (i % 7) * 0.5).toFixed(1),
      delay: ((i % 9) * 0.5).toFixed(1),
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.current.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-[twinkle_var(--dur)_ease-in-out_var(--delay)_infinite_alternate]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            // Use CSS custom props so Tailwind JIT doesn't need to know the values
            ['--dur' as string]: `${s.dur}s`,
            ['--delay' as string]: `${s.delay}s`,
            opacity: 0,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%   { opacity: 0.03; }
          100% { opacity: 0.42; }
        }
      `}</style>
    </div>
  );
}

// ─── EVENTS CONFIG ────────────────────────────────────────────────────────────
const EVENT_DEFS: EventItem[] = [
  {
    key: 'sunday',
    titleKey: 'sundayService',
    recurrenceKey: 'sunday',
    dayOfWeek: 0, // Неділя
    hour: 14,
    minute: 0,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    key: 'prayer',
    titleKey: 'prayer',
    recurrenceKey: 'thursday',
    dayOfWeek: 3,  // Середа
    hour: 19,
    minute: 0,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    key: 'school',
    titleKey: 'sundaySchool',
    recurrenceKey: 'saturdaySchool',
    dayOfWeek: 4,  // Четвер
    hour: 19,
    minute: 0,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    key: 'youth',
    titleKey: 'youth',
    recurrenceKey: 'saturdayYouth',
    dayOfWeek: 6, // Субота
    hour: 18,
    minute: 0,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Hero() {
  const { t } = useLanguage();
  const { joinService, learnMore } = useNavigation();

  const [sortedEvents, setSortedEvents] = useState<
    (EventItem & { nextTime: Date })[]
  >([]);
  const [countdowns, setCountdowns] = useState<Record<string, Countdown>>({});

  // Initialise once on client (avoids SSR / hydration mismatch)
  useEffect(() => {
    const evts = EVENT_DEFS.map((ev) => ({
      ...ev,
      nextTime: getNextOccurrence(ev.dayOfWeek, ev.hour, ev.minute),
    })).sort((a, b) => a.nextTime.getTime() - b.nextTime.getTime());

    setSortedEvents(evts);

    const now = new Date();
    const initial: Record<string, Countdown> = {};
    evts.forEach((ev) => {
      initial[ev.key] = msToCountdown(ev.nextTime.getTime() - now.getTime());
    });
    setCountdowns(initial);
  }, []);

  // Tick every second
  useEffect(() => {
    if (!sortedEvents.length) return;
    const id = setInterval(() => {
      const now = new Date();
      const next: Record<string, Countdown> = {};
      sortedEvents.forEach((ev) => {
        next[ev.key] = msToCountdown(ev.nextTime.getTime() - now.getTime());
      });
      setCountdowns(next);
    }, 1000);
    return () => clearInterval(id);
  }, [sortedEvents]);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#05090f]">

      {/* ── BACKGROUND PHOTO ── */}
      {/* Strategy: photo is split-layered. Top half (~60%) is visible at
          moderate opacity so the baptism scene is clearly readable.
          Bottom half fades to dark so text on the lower section stays legible. */}
      <div className="absolute inset-0 z-0">
        {/* The actual photo — 100% opacity for maximum brightness */}
        <Image
          src="/img/baptizing.JPG"
          alt="Church Baptism"
          fill
          className="object-cover object-top"
          style={{ opacity: 1 }}
          priority
        />

        {/* Removed dark base underneath since opacity is 1 */}

        {/* Lighter and shorter bottom fade: only covers the bottom 45% 
            just enough so the cards and CTAs are readable */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#05090f] via-[#05090f]/70 to-transparent" />

        {/* Very gentle top darkening so the white navbar is visible */}
        <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-[#05090f]/30 to-transparent" />

        {/* Removed side vignettes and multiply blend to keep the photo bright and natural */}
      </div>

      {/* ── Decorative cross lines ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]" aria-hidden>
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2" />
        <div className="absolute top-[36%] left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      {/* ── Stars (visible in the upper darker region) ── */}
      <div className="absolute inset-0 z-0">
        <Stars />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center pt-12 pb-20 lg:pt-36">

        {/* Subtle radial dark overlay behind just the text to guarantee readability without darkening the whole image */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,transparent_70%)] pointer-events-none -z-10" />

        {/* Badge */}
        <div className="mb-2 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-amber-100">
            {t('churchName')}
          </span>
          <Image src="img/logo.svg" alt="Logo" width={55} height={27} />
        </div>

        {/* Headline */}
        <h1
          className="font-bold leading-[1.1] text-white mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_10px_rgba(0,0,0,1)]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(38px, 7.5vw, 76px)',
          }}
        >
          {t('heroSubtitle')}
        </h1>

        {/* Event countdown cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {sortedEvents.map((ev, i) => (
            <EventCard
              key={ev.key}
              event={ev}
              isNext={i === 0}
              countdown={countdowns[ev.key] ?? { d: 0, h: 0, m: 0, s: 0 }}
              t={t}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
        <svg className="w-5 h-5 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}