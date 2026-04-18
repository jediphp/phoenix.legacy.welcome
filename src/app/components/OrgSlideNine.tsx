import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, MessageSquare, PlayCircle, FolderOpen, Blocks, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';

const PILOT_FORMATS = [
  { id: '1', label: 'Демонстрационный кейс', icon: PlayCircle },
  { id: '2', label: 'Ограниченная тематическая подборка', icon: FolderOpen },
  { id: '3', label: 'Цифровой пакет для публикации', icon: Blocks },
  { id: '4', label: 'Презентационный набор материалов', icon: Users },
  { id: '5', label: 'Обсуждение будущего специального проекта', icon: MessageSquare }
];

export function OrgSlideNine() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full h-[100vh] flex flex-col overflow-hidden font-sans snap-start bg-[#080705]">
      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full h-[100vh] z-0">
        <filter id="noise_org_9">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_9)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#A39B92]/25 text-[#A39B92] bg-[#A39B92]/5">
        Ранний формат сотрудничества
      </SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto h-[100vh] flex flex-col px-[2vw] pt-[8vh] pb-[5vh]"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[6vh] text-center"
        >
          <h2 className="mx-auto max-w-[75vw] pr-36 text-[clamp(1.35rem,3.5vh,3.25rem)] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance sm:pr-44 lg:pr-52">
            На текущем этапе речь прежде всего о{' '}
            <span className="text-[#A39B92]">пилотах и демонстрационных кейсах</span>
          </h2>
        </motion.div>

        {/* Central Pilot Scene & Formats */}
        <div className="flex-1 min-h-0 w-full flex flex-col lg:flex-row items-center justify-center gap-[6vw] mb-[4vh]">
          {/* Pilot Scene Visual (Left) */}
          <motion.div
            initial={{ opacity: 0, x: '-3vw' }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-3vw' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full lg:w-[45vw] aspect-[4/3] rounded-[2vh] overflow-hidden border border-white/[0.05] shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-[#0A0908] z-20 flex flex-col"
          >
            {/* The "Table/Screen" meeting scene feeling */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1732841021211-2dbc5eef3e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBkaXJlY3RvciUyMGN1cmF0b3JzJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NzY0NDkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Curators discussing pilot"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/60 to-[#0A0908]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_40%,rgba(213,168,107,0.08)_0%,transparent_100%)]" />

            {/* Curated "On table" package feeling */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-end p-[4vh] pb-[6vh]">
              <motion.div
                initial={{ opacity: 0, y: '4vh' }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '4vh' }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-[70%] aspect-video bg-[#0D0C0B]/90 backdrop-blur-xl rounded-[1vh] border border-[#D5A86B]/20 shadow-2xl p-[2vh] flex flex-col justify-between"
              >
                <div className="flex items-center gap-[1vw] mb-[2vh]">
                  <div className="w-[1vh] h-[1vh] rounded-full bg-[#D5A86B]/50 animate-pulse" />
                  <span className="text-[#A39B92] font-mono text-[clamp(8px,1vh,12px)] uppercase tracking-widest">Pilot Session _ Active</span>
                </div>
                <div className="flex gap-[1vw]">
                  <div className="w-1/3 aspect-square bg-[#1A1816] rounded-md border border-white/[0.05]" />
                  <div className="w-1/3 aspect-square bg-[#1A1816] rounded-md border border-white/[0.05]" />
                  <div className="w-1/3 aspect-square bg-[#1A1816] rounded-md border border-white/[0.05] opacity-50 border-dashed" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formats List (Right) */}
          <div className="flex-1 max-w-[35vw] flex flex-col gap-[2.5vh]">
            <h3 className="text-[clamp(14px,2vh,24px)] text-[#D5CCC3] font-light mb-[2vh] tracking-wide border-b border-white/[0.05] pb-[2vh]">
              Реалистичные ранние форматы:
            </h3>
            
            {PILOT_FORMATS.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, x: '2vw' }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '2vw' }}
                  transition={{ duration: 0.9, delay: 0.4 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-[1.5vw] group cursor-default"
                >
                  <div className="p-[1vh] rounded-full border border-white/[0.05] bg-[#0A0908] group-hover:border-[#D5A86B]/30 group-hover:bg-[#D5A86B]/5 transition-colors">
                    <Icon className="w-[clamp(14px,2vh,20px)] h-[clamp(14px,2vh,20px)] text-[#8A837A] group-hover:text-[#D5A86B] transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-[clamp(12px,1.6vh,20px)] text-[#A39B92] font-light group-hover:text-[#EAEADF] transition-colors">
                    {format.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, delay: 1.5, ease: 'easeOut' }}
          className="flex-shrink-0 flex justify-center pt-[3vh] border-t border-white/[0.05] mt-auto"
        >
          <p className="text-[clamp(12px,1.6vh,20px)] text-[#D5CCC3] font-light tracking-wide text-center max-w-[80vw]">
            Сейчас мы рассматриваем точечные сценарии сотрудничества без переобещания <span className="text-[#D5A86B]">незапущенной инфраструктуры</span>.
          </p>
        </motion.div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-[5vh] left-[2vw] flex items-center gap-[1vw] z-20 pointer-events-none hidden sm:flex">
        <span className="text-[clamp(10px,1.2vh,14px)] uppercase tracking-widest text-[#A39B92]">09</span>
        <div className="w-[4vw] h-[1px] bg-white/10">
          <div className="w-full h-full bg-[#905E26] origin-left" />
        </div>
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
    </div>
  );
}