import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowDown, PenLine, ThermometerSun, ScanLine } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const FEEDBACK_CHIPS = [
  { id: '01', label: 'Быстрая оценка' },
  { id: '02', label: 'Оценка с комментарием' },
  { id: '03', label: 'Разметка зон' },
  { id: '04', label: 'Тепловая карта' },
];

// Heatmap blobs on the artwork
const HEAT_BLOBS = [
  { left: '18%', top: '22%', w: '22%', h: '28%', color: 'rgba(200, 110, 40, 0.52)', blur: 28 },
  { left: '52%', top: '42%', w: '18%', h: '20%', color: 'rgba(185, 140, 50, 0.4)', blur: 22 },
  { left: '35%', top: '60%', w: '14%', h: '16%', color: 'rgba(160, 90, 30, 0.3)', blur: 18 },
];

export function AuthorSlideEight() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-100px' });

  const [showPin, setShowPin] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showHeat, setShowHeat] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setShowPin(true), 700);
    const t2 = setTimeout(() => setShowComment(true), 1300);
    const t3 = setTimeout(() => setShowHeat(true), 1900);
    const t4 = setTimeout(() => setShowStatus(true), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [isInView]);

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell py-8 sm:py-12 lg:py-14 px-4 sm:px-8 lg:px-12 2xl:px-24">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_8">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_8)" />
      </svg>

      {/* Ambient warm glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[55%] h-[45%] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(144,94,38,0.09)_0%,transparent_70%)]" />

      <SlideEyebrow toneClassName="border-[#905E26]/30 text-[#A39B92] bg-[#905E26]/5">
        Инструмент доработки
      </SlideEyebrow>

      <div className="relative z-20 w-full max-w-[1400px] 2xl:max-w-[2000px] mx-auto flex flex-col h-full min-h-0 pt-[4vh] sm:pt-[5vh]">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 flex flex-col gap-4 sm:gap-5 mb-5 sm:mb-6 2xl:mb-8"
        >
          <h2 className="pr-36 text-xl sm:pr-44 sm:text-2xl lg:pr-52 lg:text-[clamp(1.35rem,2.4vw,1.85rem)] 2xl:text-[2.35rem] font-light leading-[1.18] text-[#EAEADF] tracking-tight max-w-3xl 2xl:max-w-4xl text-balance">
            Обратная связь привязана{' '}
            <span className="text-[#D5A86B]">к конкретным зонам</span> работы
          </h2>

          <div className="flex flex-wrap gap-2 2xl:gap-3">
            {FEEDBACK_CHIPS.map((chip, i) => (
              <motion.span
                key={chip.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-1.5 px-2.5 py-1 2xl:px-3 2xl:py-1.5 rounded-full bg-[#0D0B09]/70 border border-white/[0.08] text-fluid-micro text-fluid-caption text-fluid-label text-[#A39B92] uppercase tracking-widest backdrop-blur-sm"
              >
                <span className="text-[#905E26]/70 font-mono">{chip.id}</span>
                {chip.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Artwork Demo Card — hero ── */}
        <motion.div
          ref={sceneRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 min-h-0 relative rounded-2xl sm:rounded-3xl 2xl:rounded-[2.5rem] border border-[#2A2621]/60 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] bg-[#0A0908]"
          style={{ minHeight: 'min(60svh, 620px)' }}
        >
          {/* Base image */}
          <ImageWithFallback
            src="/images/author-flow/slide-08/review-session-painting.jpg"
            alt="Work in review session"
            className="absolute inset-0 w-full h-full object-cover object-[50%_80%] opacity-80"
          />

          {/* Vignette layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/60 via-transparent to-[#0A0908]/75 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/50 via-transparent to-[#0A0908]/30 pointer-events-none z-10" />

          {/* ── Heatmap zones ── */}
          {HEAT_BLOBS.map((blob, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none z-20 rounded-full"
              style={{
                left: blob.left,
                top: blob.top,
                width: blob.w,
                height: blob.h,
                background: `radial-gradient(ellipse at center, ${blob.color} 0%, transparent 70%)`,
                filter: `blur(${blob.blur}px)`,
                mixBlendMode: 'screen',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: showHeat ? 1 : 0 }}
              transition={{ duration: 1.8, ease: 'easeInOut', delay: i * 0.25 }}
            />
          ))}

          {/* ── Primary annotation pin — upper-left ── */}
          <div className="absolute z-30" style={{ left: '18%', top: '60%', transform: 'translate(-50%, -50%)' }}>
            {/* Pulsing ring */}
            <motion.div
              className="absolute rounded-full border border-[#D5A86B]/50"
              style={{ width: '48px', height: '48px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 1, opacity: 0 }}
              animate={showPin ? { scale: [1, 2.2, 1], opacity: [0, 0.55, 0] } : { opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
            />

            {/* Pin dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={showPin ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-8 h-8 sm:w-9 sm:h-9 2xl:w-12 2xl:h-12 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md"
              style={{ background: 'rgba(213,168,107,0.22)', border: '1.5px solid rgba(213,168,107,0.85)' }}
            >
              <PenLine className="w-3 h-3 sm:w-3.5 sm:h-3.5 2xl:w-5 2xl:h-5 text-[#D5A86B]" strokeWidth={1.5} />
            </motion.div>

            {/* Comment card — floats right */}
            <motion.div
              className="absolute top-1/2 left-full ml-2 sm:ml-4 2xl:ml-6 -translate-y-1/2 w-[170px] sm:w-[220px] lg:w-[255px] 2xl:w-[360px] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={showComment ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute right-full top-1/2 w-3 sm:w-5 h-[1px] bg-[#D5A86B]/35" />
              <div className="p-3 sm:p-4 2xl:p-6 rounded-xl sm:rounded-2xl bg-[#0D0B09]/92 backdrop-blur-xl border border-[#D5A86B]/18 shadow-[0_8px_40px_rgba(0,0,0,0.7)]">
                <div className="flex items-center justify-between mb-2 2xl:mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D5A86B]" />
                    <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#D5A86B]/80 font-mono">
                      Замечание эксперта
                    </span>
                  </div>
                  <span className="text-fluid-micro text-fluid-caption font-mono text-[#905E26]/60">зона A</span>
                </div>
                <p className="text-fluid-caption text-fluid-label text-fluid-label 2xl:text-sm text-[#D5CCC3] font-light leading-relaxed mb-2 2xl:mb-3">
                  Одежда явно из другой эпохи. Рекомендую изучить аналоги из источника и сверить с оригиналом.
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                  <div className="w-5 h-5 2xl:w-7 2xl:h-7 rounded-full bg-[#1A1613] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-fluid-micro text-fluid-caption text-[#A39B92] font-mono">Эк</span>
                  </div>
                  <p className="flex-1 text-fluid-micro text-fluid-caption text-fluid-label text-[#8A837A] font-light truncate">
                    Реставрационный эксперт
                  </p>
                  <div className="px-1.5 py-0.5 2xl:px-2 2xl:py-1 rounded-md bg-[#905E26]/15 border border-[#905E26]/25">
                    <span className="text-fluid-micro text-fluid-micro text-fluid-caption text-[#D5A86B] uppercase tracking-widest font-mono">
                      Улучшить
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Secondary pin — middle-right ── */}
          <div className="absolute z-30" style={{ left: '58%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <motion.div
              className="absolute rounded-full border border-[#A39B92]/35"
              style={{ width: '36px', height: '36px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 1, opacity: 0 }}
              animate={showPin ? { scale: [1, 2, 1], opacity: [0, 0.4, 0] } : { opacity: 0 }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={showPin ? { scale: 1, opacity: 0.75 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-6 h-6 sm:w-7 sm:h-7 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center backdrop-blur-md"
              style={{ background: 'rgba(163,155,146,0.15)', border: '1.5px solid rgba(163,155,146,0.6)' }}
            >
              <ScanLine className="w-2.5 h-2.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-[#A39B92]" strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* ── Heatmap badge — top-right ── */}
          <motion.div
            className="absolute top-4 right-4 sm:top-5 sm:right-5 2xl:top-8 2xl:right-8 z-40 flex items-center gap-2 px-3 py-1.5 2xl:px-4 2xl:py-2 rounded-full bg-[#0A0908]/85 backdrop-blur-xl border border-white/[0.08]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: showHeat ? 1 : 0, y: showHeat ? 0 : -10 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ThermometerSun className="w-3 h-3 2xl:w-4 2xl:h-4 text-[#D5A86B]" strokeWidth={1.5} />
            <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#D5A86B]/80 font-mono">
              Тепловая карта
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D5A86B] animate-pulse" />
          </motion.div>

          {/* Work label — top-left */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 2xl:top-8 2xl:left-8 z-40">
            <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#EAEADF]/25 font-mono">
              Работа / сессия оценки
            </span>
          </div>

          {/* ── Session status bar — bottom overlay ── */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-40"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: showStatus ? 1 : 0, y: showStatus ? 0 : 14 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-3 sm:mx-5 2xl:mx-8 mb-3 sm:mb-5 2xl:mb-8 p-3 sm:p-4 2xl:p-5 rounded-xl sm:rounded-2xl bg-[#0A0908]/90 backdrop-blur-xl border border-white/[0.06] shadow-2xl">
              <div className="flex items-center gap-4 sm:gap-6 2xl:gap-10">

                {/* Live indicator */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-emerald-500/70 font-mono hidden sm:block">
                    Активна
                  </span>
                </div>

                <div className="hidden sm:block w-[1px] h-4 bg-white/[0.08] flex-shrink-0" />

                {/* Stats */}
                {[
                  { n: '4', label: 'оценщика' },
                  { n: '2', label: 'комментария' },
                  { n: '2', label: 'метки' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-1 flex-shrink-0">
                    <span className="text-sm sm:text-base 2xl:text-xl font-light text-[#D5CCC3]">{stat.n}</span>
                    <span className="text-fluid-micro text-fluid-caption text-fluid-label text-[#6B645D] font-light uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}

                <div className="flex-1 hidden sm:block" />

                {/* Heatmap density bar */}
                <div className="hidden sm:flex items-center gap-2 2xl:gap-3 flex-shrink-0">
                  <span className="text-fluid-micro text-fluid-caption uppercase tracking-widest text-[#6B645D] font-mono">
                    Плотность
                  </span>
                  <div className="w-20 sm:w-24 2xl:w-36 h-1.5 2xl:h-2 rounded-full overflow-hidden bg-[#1A1613]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#905E26]/50 via-[#D5A86B] to-[#905E26]"
                      initial={{ width: '0%' }}
                      animate={{ width: showStatus ? '72%' : '0%' }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-fluid-micro text-fluid-caption text-[#D5A86B] font-mono">72%</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* ── Bottom text + chips (mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mt-5 sm:mt-6 2xl:mt-10 z-30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5"
        >
          <p className="text-fluid-label sm:text-sm lg:text-[0.95rem] 2xl:text-base text-[#A39B92] font-light tracking-wide leading-snug text-balance max-w-3xl 2xl:max-w-5xl">
            Это позволяет автору увидеть не только общую реакцию, но и понять,{' '}
            <span className="text-[#D5CCC3]">где именно результат вызывает сомнения</span>{' '}
            и что можно улучшить.
          </p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-5 right-6 lg:bottom-8 lg:right-12 z-20 flex flex-col items-center justify-center opacity-60 pointer-events-none hidden sm:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 lg:p-3 rounded-full border border-white/10 bg-white/5 text-[#EAEADF]"
        >
          <ArrowDown className="w-3 h-3 lg:w-4 lg:h-4" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
      <SlideFooter step="08" />
    </div>
  );
}
