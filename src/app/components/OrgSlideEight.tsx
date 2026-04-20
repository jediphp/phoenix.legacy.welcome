import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, Eye, Download, ShieldAlert, Key } from 'lucide-react';
import { SlideEyebrow } from './SlideEyebrow';

const LOGIC_LEVELS = [
  {
    id: 'view',
    title: 'Публичный показ',
    desc: 'Базовая видимость в витрине',
    icon: Eye,
    delay: 0.4
  },
  {
    id: 'export',
    title: 'Экспорт',
    desc: 'Формирование пакета материалов',
    icon: Download,
    delay: 0.6
  },
  {
    id: 'usage',
    title: 'Режим использования',
    desc: 'Определение доступных сценариев',
    icon: ShieldAlert,
    delay: 0.8
  },
  {
    id: 'rights',
    title: 'Выдача прав',
    desc: 'Подтверждение на конкретный сценарий',
    icon: Key,
    delay: 1.0
  }
];

const CONDITIONS = [
  'Качество',
  'Модерация',
  'Правовой статус',
  'Цель использования'
];

export function OrgSlideEight() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#090807]">
      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_8">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_8)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#A39B92]/25 text-[#A39B92] bg-[#A39B92]/5">
        Лицензирование и использование
      </SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto min-h-[100svh] flex flex-col px-[2vw] pt-[8vh] pb-[5vh]"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[6vh] text-center"
        >
          <h2 className="mx-auto max-w-[70vw] pr-36 text-[clamp(1.35rem,3.5vh,3.25rem)] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance sm:pr-44 lg:pr-52">
            Публикация не равна автоматической <span className="text-[#A39B92]">передаче всех прав</span>
          </h2>
          <p className="mt-[2vh] text-[clamp(12px,1.6vh,20px)] text-[#8A837A] font-light max-w-[60vw] mx-auto leading-relaxed">
            Не каждый материал автоматически доступен для любого использования. Включение оригинала, состав пакета и объем допустимого применения зависят от качества работы, правового статуса и цели использования.
          </p>
        </motion.div>

        {/* Central Product-Logic Scheme */}
        <div className="flex-1 min-h-0 w-full flex flex-col items-center justify-center relative mb-[4vh]">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#D5A86B]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Logic Chain */}
          <div className="relative z-20 flex flex-col items-center w-full max-w-[60vw]">
            
            {/* The 4 Levels */}
            <div className="flex w-full justify-between items-start relative px-[2vw]">
              {LOGIC_LEVELS.map((level, index) => {
                const Icon = level.icon;
                return (
                  <div key={level.id} className="flex flex-col items-center relative z-20 w-1/4">
                    <motion.div
                      initial={{ opacity: 0, y: '3vh' }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '3vh' }}
                      transition={{ duration: 0.9, delay: level.delay, ease: [0.16, 1, 0.3, 1] }}
                      className="relative p-[2vh] w-[8vw] aspect-square rounded-[2vh] bg-[#0A0908] border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center justify-center group hover:border-[#D5A86B]/30 transition-colors"
                    >
                      <Icon className="w-[clamp(24px,3vh,40px)] h-[clamp(24px,3vh,40px)] text-[#8A837A] group-hover:text-[#D5A86B] transition-colors" strokeWidth={1.5} />
                      {/* Step Number */}
                      <span className="absolute top-[1vh] left-[1vw] text-[#4A4540] font-mono text-[clamp(8px,1vh,12px)]">0{index + 1}</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: level.delay + 0.3 }}
                      className="mt-[2vh] text-center"
                    >
                      <h4 className="text-[clamp(12px,1.6vh,18px)] text-[#EAEADF] font-light mb-[0.5vh] whitespace-nowrap">{level.title}</h4>
                      <p className="text-[clamp(10px,1.2vh,14px)] text-[#6B645D] font-light max-w-[12vw] mx-auto leading-snug hidden sm:block">{level.desc}</p>
                    </motion.div>
                  </div>
                );
              })}

              {/* Connecting Line behind nodes */}
              <div className="absolute top-[4vw] left-[10vw] right-[10vw] h-[1px] bg-white/[0.05] z-10">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
                  className="w-full h-full bg-gradient-to-r from-[#D5A86B]/20 via-[#D5A86B]/40 to-[#D5A86B]/10 origin-left"
                />
              </div>
            </div>

            {/* Conditions Block Below the Line */}
            <motion.div
              initial={{ opacity: 0, y: '2vh' }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
              transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-[6vh] w-full flex justify-center"
            >
              <div className="flex items-center gap-[1.5vw] bg-[#0A0908]/80 backdrop-blur-xl px-[3vw] py-[2vh] rounded-full border border-white/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                <span className="text-[#A39B92] text-[clamp(10px,1.4vh,16px)] font-light tracking-widest uppercase mr-[1vw]">Условия перехода:</span>
                {CONDITIONS.map((cond, i) => (
                  <div key={cond} className="flex items-center gap-[1vw]">
                    <span className="text-[#D5CCC3] text-[clamp(12px,1.6vh,18px)] font-light whitespace-nowrap">{cond}</span>
                    {i < CONDITIONS.length - 1 && <div className="w-[0.5vh] h-[0.5vh] bg-[#D5A86B]/50 rounded-full" />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
          className="flex-shrink-0 flex justify-center pt-[3vh] border-t border-white/[0.05] mt-auto"
        >
          <p className="text-[clamp(12px,1.6vh,20px)] text-[#EAEADF] font-light tracking-wide text-center max-w-[60vw]">
            Феникс.Наследие различает эти уровни, формируя <span className="text-[#D5A86B]">аккуратную модель доверия</span> и допуска.
          </p>
        </motion.div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-[5vh] left-[2vw] flex items-center gap-[1vw] z-20 pointer-events-none hidden sm:flex">
        <span className="text-[clamp(10px,1.2vh,14px)] uppercase tracking-widest text-[#A39B92]">08</span>
        <div className="w-[4vw] h-[1px] bg-white/10">
          <div className="w-full h-full bg-[#905E26] origin-left" />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-[5vh] right-[2vw] z-20 flex items-center justify-center opacity-50 pointer-events-none hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.div
          animate={{ y: [0, '1vh', 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-[1vh] rounded-full border border-white/10 bg-white/[0.03] text-[#EAEADF]"
        >
          <ArrowDown className="w-[2vh] h-[2vh]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </div>
  );
}