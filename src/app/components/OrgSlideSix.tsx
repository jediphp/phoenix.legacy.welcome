import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, MonitorSmartphone, BookOpen, Presentation, Grid, Compass } from 'lucide-react';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const SCENARIOS = [
  {
    id: '01',
    title: 'Цифровые публикации',
    icon: MonitorSmartphone,
    colSpan: 'col-span-2 sm:col-span-2 lg:col-span-3',
    rowSpan: 'row-span-1',
    img: 'https://images.unsplash.com/photo-1630862326852-f8ff75a514c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbXVzZXVtJTIwdGFibGV0JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzY0NDg5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    delay: 0.3
  },
  {
    id: '02',
    title: 'Образовательные материалы',
    icon: BookOpen,
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-2',
    rowSpan: 'row-span-1',
    img: null,
    delay: 0.5
  },
  {
    id: '03',
    title: 'Презентационные пакеты',
    icon: Presentation,
    colSpan: 'col-span-1 sm:col-span-1 lg:col-span-2',
    rowSpan: 'row-span-1',
    img: null,
    delay: 0.7
  },
  {
    id: '04',
    title: 'Тематические подборки',
    icon: Grid,
    colSpan: 'col-span-2 sm:col-span-2 lg:col-span-2',
    rowSpan: 'row-span-1',
    img: null,
    delay: 0.9
  },
  {
    id: '05',
    title: 'Выставочные и исследовательские сценарии',
    icon: Compass,
    colSpan: 'col-span-3 sm:col-span-3 lg:col-span-5',
    rowSpan: 'row-span-1',
    img: null,
    delay: 1.1
  }
];

export function OrgSlideSix() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#080705]">
      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_6">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_6)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#A39B92]/25 text-[#A39B92] bg-[#A39B92]/5">Форматы применения</SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto min-h-[100svh] flex flex-col px-[2vw] pt-[8vh] pb-[5vh]"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[4vh]"
        >
          <h2 className="pr-36 text-[clamp(1.35rem,3.5vh,3.25rem)] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance max-w-[70vw] sm:pr-44 lg:pr-52">
            Платформа ориентируется не на один сценарий, а на{' '}
            <span className="text-[#A39B92]">несколько форматов применения</span>
          </h2>
        </motion.div>

        {/* Central Multi-Use Collage Grid */}
        <div className="flex-1 min-h-0 w-full mb-[4vh] flex items-center justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-[1.5vw] w-full max-w-[80vw] h-[55vh]">
            {SCENARIOS.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, scale: 0.95, y: '2vh' }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: '2vh' }}
                  transition={{ duration: 1, delay: scenario.delay, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative group overflow-hidden rounded-[1.5vh] border border-white/[0.05] bg-gradient-to-br from-[#0A0908] to-[#0D0C0B] flex flex-col p-[2vh] shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${scenario.colSpan} ${scenario.rowSpan}`}
                >
                  {/* Optional Background Image */}
                  {scenario.img && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40"
                      style={{ backgroundImage: `url(${scenario.img})` }}
                    />
                  )}
                  {/* Subtle Gradient Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-[#0A0908]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start">
                      <div className="p-[1vh] rounded-[1vh] border border-white/[0.08] bg-[#0A0908]/80 backdrop-blur-md text-[#8A837A] group-hover:text-[#D5A86B] group-hover:border-[#D5A86B]/30 transition-colors duration-500">
                        <Icon className="w-[clamp(14px,2vh,24px)] h-[clamp(14px,2vh,24px)]" strokeWidth={1.5} />
                      </div>
                      <span className="text-[#4A4540] font-mono text-[clamp(8px,1vh,12px)] tracking-widest">{scenario.id}</span>
                    </div>

                    <div className="mt-auto pt-[2vh]">
                      <h3 className="text-[clamp(14px,1.8vh,22px)] text-[#EAEADF] font-light leading-snug tracking-wide group-hover:text-white transition-colors duration-500">
                        {scenario.title}
                      </h3>
                    </div>
                  </div>
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
          className="flex-shrink-0 flex items-center pt-[3vh] border-t border-white/[0.05] mt-auto justify-between"
        >
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[1px] h-[3vh] bg-[#D5A86B]/25 rounded-full flex-shrink-0" />
            <p className="text-[clamp(12px,1.6vh,20px)] text-[#D5CCC3] font-light tracking-wide max-w-[60vw]">
              Речь идет не о «просто файлах», а о <span className="text-[#D5A86B]">разных форматах культурного контента</span> под разные задачи организации.
            </p>
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
      <SlideFooter step="06" />
    </div>
  );
}