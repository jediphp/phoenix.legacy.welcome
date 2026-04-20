import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowDown, MessageSquare, Layers, Zap, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';

const FEEDBACK_TYPES = [
  {
    id: '01',
    icon: Zap,
    label: 'Быстрая оценка',
    desc: 'Реакция без объяснений — да или нет.',
    color: '#EAEADF',
    bg: 'bg-[#EAEADF]/8',
  },
  {
    id: '02',
    icon: MessageSquare,
    label: 'Оценка с комментарием',
    desc: 'Оценщик оставляет короткое пояснение.',
    color: '#F5EC9B',
    bg: 'bg-[#F5EC9B]/10',
  },
  {
    id: '03',
    icon: Layers,
    label: 'Детальная разметка зон',
    desc: 'Конкретные области работы отмечаются как проблемные.',
    color: '#D5A86B',
    bg: 'bg-[#D5A86B]/10',
  },
  {
    id: '04',
    icon: BarChart3,
    label: 'Тепловая карта замечаний',
    desc: 'Агрегированный слой всех отмеченных зон по всем оценщикам.',
    color: '#905E26',
    bg: 'bg-[#905E26]/20',
  },
];

// Marker positions relative to the image (in percent)
const MARKERS = [
  {
    id: 1,
    x: '28%',
    y: '32%',
    severity: 'high',
    comment: 'Детализация фактуры ткани не соответствует стилю эпохи — слишком гладко.',
    commentPos: 'right',
  },
  {
    id: 2,
    x: '62%',
    y: '58%',
    severity: 'medium',
    comment: 'Источник света не согласован с остальными элементами композиции.',
    commentPos: 'left',
  },
];

// Heatmap "zones" — purely CSS radial gradient blobs
const HEATMAP_ZONES = [
  { x: '25%', y: '30%', w: '28%', h: '30%', opacity: 0.38, color: 'rgba(200, 100, 40, 0.55)' },
  { x: '55%', y: '50%', w: '24%', h: '25%', opacity: 0.28, color: 'rgba(180, 130, 40, 0.45)' },
  { x: '40%', y: '65%', w: '16%', h: '18%', opacity: 0.16, color: 'rgba(160, 100, 30, 0.3)' },
];

export function AuthorSlideSeven() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-120px' });

  const [showMarkers, setShowMarkers] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setShowMarkers(true), 900);
    const t2 = setTimeout(() => setShowComment(true), 1500);
    const t3 = setTimeout(() => setShowHeatmap(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isInView]);

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden font-sans snap-start slide-shell py-6 sm:py-10 lg:py-14 px-4 sm:px-8 lg:px-12 2xl:px-24">
      {/* Noise filter */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_7">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_7)" />
      </svg>

      {/* Subtle gold glow behind scene */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_60%_60%_at_65%_55%,rgba(144,94,38,0.08)_0%,transparent_70%)]" />

      <SlideEyebrow toneClassName="border-[#905E26]/30 text-[#A39B92] bg-[#905E26]/5">Инструмент роста</SlideEyebrow>

      <div className="relative z-20 w-full max-w-[1500px] 2xl:max-w-[2300px] mx-auto flex flex-col h-full min-h-0 pt-[6vh] sm:pt-[5vh] pb-[3vh]">

        {/* ── Top: Label + Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-5 sm:mb-7 2xl:mb-12"
        >
          <h2 className="pr-36 text-xl sm:pr-44 sm:text-2xl lg:pr-52 lg:text-[clamp(1.35rem,2.6vw,2.1rem)] 2xl:text-[2.85rem] font-light leading-[1.15] text-[#EAEADF] tracking-tight max-w-3xl 2xl:max-w-5xl text-balance">
            Оценка здесь нужна не только для ранжирования,{' '}
            <span className="text-[#D5A86B]">но и для роста</span>
          </h2>
        </motion.div>

        {/* ── Main Content Area: Left list + Right demo ── */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-7 lg:gap-10 2xl:gap-16 flex-1 min-h-0">

          {/* Left: Feedback type list */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 2xl:gap-6 lg:w-[30%] 2xl:w-[28%] flex-shrink-0 overflow-x-auto lg:overflow-visible lg:justify-between pb-1 lg:pb-0">
            {FEEDBACK_TYPES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, delay: 0.15 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 lg:flex-shrink flex items-start gap-3 2xl:gap-5 p-3 sm:p-4 2xl:p-6 rounded-xl sm:rounded-2xl bg-[#0D0B09]/60 backdrop-blur-md border border-white/5 hover:border-white/10 transition-colors duration-500 min-w-[170px] sm:min-w-[200px] lg:min-w-0"
                >
                  <div className={`flex-shrink-0 p-2 2xl:p-3 rounded-lg ${item.bg}`} style={{ color: item.color }}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-6 2xl:h-6" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 2xl:mb-2">
                      <span className="text-fluid-caption text-fluid-label font-mono text-[#A39B92]/50">{item.id}</span>
                      <p className="text-fluid-label text-fluid-label 2xl:text-sm text-[#D5CCC3] uppercase tracking-[0.15em] font-light leading-snug">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-fluid-caption text-fluid-label text-fluid-label text-[#6B645D] font-light leading-relaxed hidden sm:block">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Product Demo Scene */}
          <motion.div
            ref={sceneRef}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 min-h-0 relative rounded-2xl sm:rounded-3xl 2xl:rounded-[2.5rem] border border-[#2A2621]/60 bg-[#0A0908] shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden"
            style={{ minHeight: '280px' }}
          >
            {/* Base Image */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1604403893213-5c7c88a137e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbWFudXNjcmlwdCUyMHBhaW50aW5nJTIwcmVzdG9yYXRpb24lMjBkZXRhaWx8ZW58MXx8fHwxNzc2NDQ0MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Work under review"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            {/* Dark gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0908]/80 via-transparent to-[#0A0908]/40 pointer-events-none z-10" />

            {/* ── Heatmap overlay zones ── */}
            {HEATMAP_ZONES.map((zone, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none z-20 rounded-full"
                style={{
                  left: zone.x,
                  top: zone.y,
                  width: zone.w,
                  height: zone.h,
                  background: `radial-gradient(ellipse at center, ${zone.color} 0%, transparent 70%)`,
                  filter: 'blur(18px)',
                  mixBlendMode: 'screen',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: showHeatmap ? zone.opacity : 0 }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: i * 0.2 }}
              />
            ))}

            {/* "Heatmap mode" badge */}
            <motion.div
              className="absolute top-4 right-4 sm:top-5 sm:right-5 2xl:top-8 2xl:right-8 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0908]/80 backdrop-blur-xl border border-white/10"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: showHeatmap ? 1 : 0, y: showHeatmap ? 0 : -8 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-1.5 h-1.5 2xl:w-2 2xl:h-2 rounded-full bg-[#D5A86B] animate-pulse" />
              <span className="text-fluid-caption text-fluid-caption text-fluid-label uppercase tracking-widest text-[#D5A86B] font-mono">
                Тепловая карта
              </span>
            </motion.div>

            {/* ── Annotation Markers ── */}
            {MARKERS.map((marker) => (
              <div
                key={marker.id}
                className="absolute z-30"
                style={{ left: marker.x, top: marker.y, transform: 'translate(-50%, -50%)' }}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    width: '32px',
                    height: '32px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: `1px solid ${marker.severity === 'high' ? 'rgba(213,168,107,0.6)' : 'rgba(163,155,146,0.5)'}`,
                  }}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={showMarkers ? { scale: [1, 1.8, 1], opacity: [0, 0.6, 0] } : { opacity: 0 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: marker.id * 0.3 }}
                />

                {/* Main marker dot */}
                <motion.div
                  className="relative flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={showMarkers ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + marker.id * 0.15 }}
                >
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 2xl:w-11 2xl:h-11 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md"
                    style={{
                      background: marker.severity === 'high'
                        ? 'rgba(213, 168, 107, 0.25)'
                        : 'rgba(163, 155, 146, 0.2)',
                      border: `1.5px solid ${marker.severity === 'high' ? 'rgba(213,168,107,0.8)' : 'rgba(163,155,146,0.6)'}`,
                    }}
                  >
                    <span
                      className="text-fluid-caption text-fluid-label 2xl:text-sm font-mono"
                      style={{ color: marker.severity === 'high' ? '#D5A86B' : '#A39B92' }}
                    >
                      {marker.id}
                    </span>
                  </div>
                </motion.div>

                {/* Comment callout — only marker 1 */}
                {marker.id === 1 && (
                  <motion.div
                    className="absolute left-full ml-3 sm:ml-4 2xl:ml-6 top-1/2 -translate-y-1/2 w-[160px] sm:w-[200px] 2xl:w-[280px] pointer-events-none"
                    initial={{ opacity: 0, x: -10 }}
                    animate={showComment ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Connecting line */}
                    <div className="absolute right-full top-1/2 w-3 sm:w-4 2xl:w-6 h-[1px] bg-[#D5A86B]/40" />
                    <div className="p-2.5 sm:p-3 2xl:p-5 rounded-xl sm:rounded-2xl bg-[#0D0B09]/90 backdrop-blur-xl border border-[#D5A86B]/20 shadow-2xl">
                      <div className="flex items-center gap-1.5 mb-1.5 2xl:mb-2">
                        <div className="w-1 h-1 2xl:w-1.5 2xl:h-1.5 rounded-full bg-[#D5A86B]" />
                        <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#D5A86B]/70 font-mono">
                          Замечание
                        </span>
                      </div>
                      <p className="text-fluid-caption text-fluid-caption text-fluid-label text-[#D5CCC3] font-light leading-relaxed">
                        {marker.comment}
                      </p>
                      <div className="mt-2 2xl:mt-3 pt-1.5 2xl:pt-2 border-t border-white/5 flex items-center gap-2">
                        <span className="text-fluid-micro text-fluid-micro text-fluid-caption text-[#6B645D] uppercase tracking-widest">
                          Эксперт
                        </span>
                        <div className="flex-1 h-[1px] bg-white/5" />
                        <span className="text-fluid-micro text-fluid-micro text-fluid-caption font-mono text-[#905E26]">
                          зона #1
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Marker 2: short label on left */}
                {marker.id === 2 && (
                  <motion.div
                    className="absolute right-full mr-3 sm:mr-4 top-1/2 -translate-y-1/2 w-[120px] sm:w-[150px] 2xl:w-[220px] pointer-events-none"
                    initial={{ opacity: 0, x: 10 }}
                    animate={showComment ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Connecting line */}
                    <div className="absolute left-full top-1/2 w-3 sm:w-4 h-[1px] bg-[#A39B92]/30" />
                    <div className="p-2 sm:p-2.5 2xl:p-4 rounded-xl bg-[#0D0B09]/85 backdrop-blur-xl border border-[#A39B92]/15 shadow-xl">
                      <div className="flex items-center gap-1.5 mb-1 2xl:mb-1.5">
                        <div className="w-1 h-1 rounded-full bg-[#A39B92]/60" />
                        <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#A39B92]/60 font-mono">
                          Замечание
                        </span>
                      </div>
                      <p className="text-fluid-caption text-fluid-caption text-fluid-label text-[#A39B92] font-light leading-relaxed">
                        {marker.comment}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Bottom overlay — heatmap legend */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-30 px-4 sm:px-6 2xl:px-10 py-3 sm:py-4 2xl:py-6 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/70 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: showHeatmap ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 sm:gap-5 2xl:gap-8">
                <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#6B645D] font-mono flex-shrink-0">
                  Плотность замечаний
                </span>
                {/* Gradient bar */}
                <div className="flex-1 h-[3px] sm:h-1 2xl:h-1.5 rounded-full overflow-hidden bg-gradient-to-r from-transparent via-[#D5A86B]/50 to-[#905E26]/80" />
                <div className="flex items-center gap-1.5 2xl:gap-2.5">
                  <span className="text-fluid-micro text-fluid-caption text-fluid-label text-[#6B645D] font-mono">низкая</span>
                  <div className="w-1 h-1 rounded-full bg-[#905E26]/40" />
                  <span className="text-fluid-micro text-fluid-caption text-fluid-label text-[#D5A86B] font-mono">высокая</span>
                </div>
              </div>
            </motion.div>

            {/* Corner label — top left */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 2xl:top-8 2xl:left-8 z-40 flex items-center gap-2">
              <div className="w-1 h-1 2xl:w-1.5 2xl:h-1.5 rounded-full bg-[#EAEADF]/40" />
              <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#EAEADF]/30 font-mono">
                Работа / обзор
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mt-4 sm:mt-6 2xl:mt-10 max-w-4xl 2xl:max-w-6xl z-30"
        >
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-2xl text-[#A39B92] font-light tracking-wide leading-relaxed text-balance">
            Это позволяет автору увидеть не только общую реакцию, но и понять,{' '}
            <span className="text-[#D5CCC3]">где именно результат вызывает сомнения</span> и что можно улучшить.
          </p>
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-5 left-6 lg:bottom-8 lg:left-12 flex items-center gap-4 z-20 pointer-events-none hidden sm:flex">
          <span className="text-fluid-label uppercase tracking-widest text-[#A39B92]">07</span>
          <div className="w-12 h-[1px] bg-white/10">
            <div className="w-full h-full bg-[#905E26] origin-left" />
          </div>
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

      </div>
    </div>
  );
}
