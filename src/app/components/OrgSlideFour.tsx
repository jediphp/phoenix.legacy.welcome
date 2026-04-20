import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, ShieldCheck, Eye, BarChart, CheckCircle, MessageSquare, Layers } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const TRUST_LAYERS = [
  { id: 'source', label: 'Работа с источником', icon: Layers, position: 'top-[10%] left-[-10%]' },
  { id: 'moderation', label: 'Модерация и статус публикации', icon: CheckCircle, position: 'top-[35%] right-[-15%]' },
  { id: 'evaluation', label: 'Пользовательская и экспертная оценка', icon: Eye, position: 'bottom-[25%] left-[-15%]' },
  { id: 'match', label: 'Индекс соответствия', icon: BarChart, position: 'bottom-[10%] right-[-10%]' },
  { id: 'feedback', label: 'Обратная связь по проблемным зонам', icon: MessageSquare, position: 'top-[-5%] right-[20%]' },
  { id: 'usage', label: 'Режимы использования', icon: ShieldCheck, position: 'bottom-[-5%] left-[20%]' }
];

export function OrgSlideFour() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#080705]">
      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_4">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_4)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#A39B92]/25 text-[#A39B92] bg-[#A39B92]/5">
        Почему проекту можно доверять
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
          className="flex-shrink-0 mb-[6vh] text-center lg:text-left flex flex-col lg:flex-row gap-[2vw] items-center lg:items-start"
        >
          <div className="flex-1">
            <h2 className="pr-36 text-[clamp(1.35rem,3.5vh,3.25rem)] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance max-w-[60vw] sm:pr-44 lg:pr-52 lg:text-left">
              Платформа строится вокруг качества,{' '}
              <span className="text-[#A39B92]">а не только вокруг визуального эффекта</span>
            </h2>
          </div>
          <div className="flex-1 lg:max-w-[30vw] pt-[1vh]">
            <p className="text-[clamp(12px,1.6vh,18px)] text-[#8A837A] font-light leading-relaxed">
              В основе подхода: работа с источником; модерация и статус публикации; пользовательская и экспертная оценка; Индекс соответствия; обратная связь по проблемным зонам; различие между запрошенными и фактически активированными режимами использования.
            </p>
          </div>
        </motion.div>

        {/* Central Trust Case Layout */}
        <div className="flex-1 min-h-0 flex items-center justify-center relative w-full mb-[4vh]">
          {/* Subtle glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-[#D5A86B]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* The Product Case Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: '4vh' }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: '4vh' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-[40vw] max-w-[600px] aspect-[4/3] rounded-[2vh] bg-[#0A0908] border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-[2vh] z-20 flex flex-col"
          >
            <div className="relative w-full h-[60%] rounded-[1vh] overflow-hidden mb-[2vh]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770910196320-59fc1254680e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwYXJ0aWZhY3QlMjBtdXNldW0lMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NzY0NDg5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artifact Reconstruction"
                className="w-full h-full object-cover opacity-80"
                style={{ filter: 'saturate(0.6)' }}
              />
              {/* Match Index overlay */}
              <div className="absolute top-[1.5vh] right-[1vw] bg-[#0A0908]/80 backdrop-blur-md px-[1vw] py-[0.5vh] rounded-full border border-[#D5A86B]/30 flex items-center gap-[0.5vw]">
                <div className="w-[0.8vh] h-[0.8vh] rounded-full bg-[#D5A86B]" />
                <span className="text-[#D5A86B] font-mono text-[clamp(8px,1vh,12px)] tracking-widest uppercase">Match 94%</span>
              </div>
            </div>

            {/* Mockup UI rows */}
            <div className="flex-1 flex gap-[1.5vw]">
              <div className="flex-1 space-y-[1.5vh]">
                <div className="h-[2vh] w-3/4 bg-white/[0.05] rounded-full" />
                <div className="h-[1vh] w-1/2 bg-white/[0.03] rounded-full" />
                <div className="h-[1vh] w-full bg-white/[0.02] rounded-full" />
              </div>
              <div className="w-[1px] bg-white/[0.05]" />
              <div className="w-[30%] flex flex-col justify-end gap-[1vh]">
                <div className="h-[3vh] w-full border border-white/[0.1] rounded-[0.5vh] flex items-center justify-center">
                  <span className="text-[#6B645D] font-mono text-[clamp(7px,0.9vh,10px)] uppercase">Verified</span>
                </div>
              </div>
            </div>

            {/* Orbiting Trust Layers */}
            {TRUST_LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute ${layer.position} flex items-center gap-[1vw] bg-[#0A0908]/90 backdrop-blur-xl px-[1.2vw] py-[1vh] rounded-[1.5vh] border border-[#D5A86B]/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-30 hidden sm:flex`}
                  style={{ minWidth: 'max-content' }}
                >
                  <div className="p-[0.5vh] rounded-full bg-[#D5A86B]/10">
                    <Icon className="w-[clamp(14px,1.8vh,20px)] h-[clamp(14px,1.8vh,20px)] text-[#D5A86B]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#D5CCC3] font-light text-[clamp(9px,1.2vh,14px)] tracking-wide">{layer.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, delay: 1.5, ease: 'easeOut' }}
          className="flex-shrink-0 flex items-center justify-center pt-[3vh] border-t border-white/[0.05] mt-auto"
        >
          <div className="flex items-center gap-[1vw]">
            <div className="w-[1.5vw] h-[1px] bg-[#D5A86B]/40" />
            <p className="text-[clamp(12px,1.6vh,20px)] text-[#EAEADF] font-light tracking-wide text-center">
              Для нас важно не просто показать результат, а выстроить <span className="text-[#D5A86B]">контур доверия</span> вокруг него.
            </p>
            <div className="w-[1.5vw] h-[1px] bg-[#D5A86B]/40" />
          </div>
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
      <SlideFooter step="04" />
    </div>
  );
}