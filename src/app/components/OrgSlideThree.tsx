import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, FileText, Link2, CheckSquare, Award, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const PLATFORM_FUNCTIONS = [
  {
    id: '01',
    icon: FileText,
    title: 'Публикация и структурирование',
    desc: 'Исторические реконструкции публикуются в понятном формате с метаданными эпохи и жанра.',
  },
  {
    id: '02',
    icon: Link2,
    title: 'Привязка к источнику и контексту',
    desc: 'Каждый результат сопровождается указанием на оригинал, эпоху и исследовательскую базу.',
  },
  {
    id: '03',
    icon: CheckSquare,
    title: 'Оценка качества и соответствия',
    desc: 'Многоуровневая система оценки от профессионального сообщества — не просто реакция, а структурированная экспертиза.',
  },
  {
    id: '04',
    icon: Award,
    title: 'Верификация сильных работ',
    desc: 'Работы, прошедшие оценочный контур, получают подтверждённый статус внутри платформы.',
  },
  {
    id: '05',
    icon: Shield,
    title: 'Подготовка к контролируемому использованию',
    desc: 'Верифицированные материалы готовы к профессиональному применению — с понятным правовым и контекстным статусом.',
  },
];

const CHAIN_STEPS = [
  { label: 'Источник', sub: 'Оригинал' },
  { label: 'Реконструкция', sub: 'Результат' },
  { label: 'Оценка', sub: 'Экспертиза' },
  { label: 'Качество', sub: 'Верификация' },
  { label: 'Статус', sub: 'Использование' },
];

export function OrgSlideThree() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#090807]">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_3">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_3)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#D5A86B]/25 text-[#D5A86B] bg-[#D5A86B]/5">
        Что такое Феникс.Наследие
      </SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto flex flex-col min-h-[100svh] px-[2vw] pt-[8vh] pb-[5vh]"
      >

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: '3vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '3vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[5vh]"
        >
          <h2 className="pr-36 text-[clamp(1.35rem,4vh,3.75rem)] font-light leading-[1.1] text-[#EAEADF] tracking-tight text-balance max-w-[70vw] sm:pr-44 lg:pr-52">
            Это не генератор и{' '}
            <span className="text-[#A39B92]">не просто галерея изображений</span>
          </h2>
        </motion.div>

        {/* ── Main content: chain + cards ── */}
        <div className="flex-1 min-h-0 flex flex-col gap-[5vh]">

          {/* Flow chain */}
          <motion.div
            initial={{ opacity: 0, y: '2vh' }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-0 overflow-x-auto pb-[1vh] scrollbar-hide">
              {CHAIN_STEPS.map((step, index) => (
                <div key={step.label} className="flex items-center flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.7, delay: 0.4 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col items-center px-[1.5vw] py-[1.5vh] rounded-[1.5vh] border text-center bg-[#0A0908] z-20"
                    style={{
                      borderColor: index <= 1 ? 'rgba(213,168,107,0.3)' : 'rgba(255,255,255,0.06)',
                      background: index <= 1
                        ? 'linear-gradient(135deg, rgba(213,168,107,0.08) 0%, rgba(9,8,7,1) 100%)'
                        : '#0A0908',
                      minWidth: '10vw',
                    }}
                  >
                    {index <= 1 && (
                      <div className="absolute inset-0 rounded-[1.5vh]"
                        style={{ boxShadow: '0 0 20px rgba(213,168,107,0.06)' }}
                      />
                    )}
                    <span
                      className="text-[clamp(8px,1.2vh,14px)] uppercase tracking-[0.2em] font-light mb-[0.5vh]"
                      style={{ color: index <= 1 ? '#D5A86B' : '#4A4540' }}
                    >
                      {step.label}
                    </span>
                    <span className="text-[clamp(8px,1vh,12px)] uppercase tracking-widest font-mono"
                      style={{ color: index <= 1 ? '#8A837A' : '#2A2520' }}
                    >
                      {step.sub}
                    </span>
                  </motion.div>

                  {index < CHAIN_STEPS.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.5, delay: 0.55 + index * 0.12, ease: 'easeOut' }}
                      className="flex items-center px-[1vw] origin-left"
                    >
                      <div className="flex items-center gap-[0.2vw]">
                        <div
                          className="h-[1px] w-[2vw]"
                          style={{ background: index < 2 ? 'rgba(213,168,107,0.35)' : 'rgba(255,255,255,0.06)' }}
                        />
                        <div
                          className="w-0 h-0"
                          style={{
                            borderTop: '3px solid transparent',
                            borderBottom: '3px solid transparent',
                            borderLeft: `4px solid ${index < 2 ? 'rgba(213,168,107,0.35)' : 'rgba(255,255,255,0.06)'}`,
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platform function cards grid */}
          <div className="flex-1 min-h-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1.5vw] pb-[2vh]">
            {PLATFORM_FUNCTIONS.map((fn, index) => {
              const Icon = fn.icon;
              return (
                <motion.div
                  key={fn.id}
                  initial={{ opacity: 0, y: '3vh' }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '3vh' }}
                  transition={{ duration: 0.9, delay: 0.6 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col p-[1.5vw] rounded-[2vh] border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-500 group overflow-hidden bg-[#0A0908] z-20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D5A86B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="mb-[3vh] p-[1vh] rounded-[1vh] border border-white/[0.05] bg-white/[0.02] self-start group-hover:border-[#D5A86B]/15 transition-colors duration-500">
                    <Icon className="w-[clamp(16px,2vh,24px)] h-[clamp(16px,2vh,24px)] text-[#4A4540] group-hover:text-[#A39B92] transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  <span className="text-[clamp(8px,1vh,12px)] font-mono text-[#3A3530] mb-[1vh]">
                    {fn.id}
                  </span>

                  <h3 className="text-[clamp(12px,1.6vh,18px)] text-[#D5CCC3] font-light leading-snug tracking-wide mb-[2vh]">
                    {fn.title}
                  </h3>

                  <p className="text-[clamp(10px,1.4vh,16px)] text-[#4A4540] font-light leading-relaxed hidden sm:block">
                    {fn.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ── Bottom footnote ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: 'easeOut' }}
          className="flex-shrink-0 pt-[2vh] mt-auto hidden sm:flex items-center gap-[1.5vw]"
        >
          <div className="w-[1px] h-[3vh] bg-[#D5A86B]/25 rounded-full flex-shrink-0" />
          <p className="text-[clamp(10px,1.4vh,16px)] text-[#4A4540] font-light tracking-wide">
            Феникс.Наследие — платформа для публикации, структурирования и верификации исторических реконструкций
          </p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-[5vh] right-[2vw] z-20 flex items-center justify-center opacity-50 pointer-events-none hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, '1vh', 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-[1vh] rounded-full border border-white/10 bg-white/[0.03] text-[#EAEADF]"
        >
          <ArrowDown className="w-[2vh] h-[2vh]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
      <SlideFooter step="03" />
    </div>
  );
}
