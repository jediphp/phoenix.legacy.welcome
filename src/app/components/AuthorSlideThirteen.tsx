import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const LAUNCH_PHASES = [
  {
    id: '01',
    title: 'Мягкий запуск',
    desc: 'Платформа открывается без анонса — для тех, кто уже внутри.',
    isActive: true,
  },
  {
    id: '02',
    title: 'Ограниченный контур',
    desc: 'Ограниченный набор сильных участников: авторы с верифицированным профилем и первыми работами.',
    isActive: true,
  },
  {
    id: '03',
    title: 'Демонстрационные кейсы',
    desc: 'Первые завершённые работы становятся эталонными примерами для всей платформы.',
    isActive: false,
  },
  {
    id: '04',
    title: 'Витрина лучших работ',
    desc: 'Публичный слой с отобранными работами — первый контакт внешней аудитории с платформой.',
    isActive: false,
  },
  {
    id: '05',
    title: 'Постепенное расширение',
    desc: 'Новые участники входят по мере готовности среды, а не по маркетинговому расписанию.',
    isActive: false,
  },
];

export function AuthorSlideThirteen() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-80px' });

  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden font-sans snap-start py-[4vh] lg:py-[6vh] px-4 sm:px-8 lg:px-12 2xl:px-24 bg-[#090807]">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_13">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_13)" />
      </svg>

      {/* Ambient light — launch warmth */}
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] pointer-events-none z-0 rounded-full blur-[80px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(213,168,107,0.07) 0%, transparent 60%)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      />

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[1500px] 2xl:max-w-[2400px] mx-auto flex flex-col h-full min-h-0 pt-[2vh] lg:pt-[4vh]"
      >

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[4vh] lg:mb-[5vh]"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[9px] sm:text-[10px] 2xl:text-xs tracking-[0.25em] uppercase border border-[#D5A86B]/30 text-[#D5A86B] bg-[#D5A86B]/5 mb-[2vh] sm:mb-[3vh]">
            Запуск проекта
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[clamp(2.2rem,3.8vw,3.4rem)] 2xl:text-[4.2rem] font-light leading-[1.1] text-[#EAEADF] tracking-tight text-balance max-w-4xl 2xl:max-w-6xl">
            Запуск начинается{' '}
            <span className="text-[#D5A86B]">с сильного авторского ядра</span>
          </h2>
        </motion.div>

        {/* Content: phases + image */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-[3vh] lg:gap-[5vw] 2xl:gap-[6vw]">

          {/* Left: phase timeline */}
          <div className="flex-1 min-h-0 flex flex-col gap-0 pb-[10vh] lg:pb-0 relative">

            {/* Vertical line */}
            <div className="absolute left-[15px] sm:left-[18px] 2xl:left-[24px] top-0 bottom-0 w-[1px] bg-white/[0.04]">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#D5A86B]/60 via-[#D5A86B]/20 to-transparent"
                initial={{ height: '0%' }}
                animate={isInView ? { height: '40%' } : { height: '0%' }}
                transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
              />
            </div>

            {LAUNCH_PHASES.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.9, delay: 0.4 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 2xl:gap-6 group pb-[2.5vh] 2xl:pb-[3vh]"
              >
                {/* Node */}
                <div className="flex-shrink-0 relative mt-1">
                  <motion.div
                    className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] 2xl:w-[48px] 2xl:h-[48px] rounded-full flex items-center justify-center border z-10 relative"
                    style={{
                      borderColor: phase.isActive ? 'rgba(213,168,107,0.5)' : 'rgba(255,255,255,0.06)',
                      background: phase.isActive
                        ? 'radial-gradient(circle, rgba(213,168,107,0.15) 0%, rgba(9,8,7,0.95) 70%)'
                        : 'rgba(9,8,7,0.9)',
                    }}
                    initial={phase.isActive ? { boxShadow: '0 0 0px rgba(213,168,107,0)' } : {}}
                    animate={isInView && phase.isActive
                      ? { boxShadow: ['0 0 0px rgba(213,168,107,0)', '0 0 18px rgba(213,168,107,0.3)', '0 0 8px rgba(213,168,107,0.15)'] }
                      : {}
                    }
                    transition={{ duration: 2, delay: 0.5 + index * 0.2, ease: 'easeInOut' }}
                  >
                    <span
                      className="text-[8px] sm:text-[9px] 2xl:text-xs font-mono"
                      style={{ color: phase.isActive ? '#D5A86B' : '#3A3530' }}
                    >
                      {phase.id}
                    </span>
                  </motion.div>
                </div>

                {/* Text */}
                <div className="flex-1 pt-0.5 2xl:pt-1">
                  <div className="flex items-center gap-3 mb-1 2xl:mb-2">
                    <h3
                      className="text-sm sm:text-base 2xl:text-xl font-light tracking-wide"
                      style={{ color: phase.isActive ? '#EAEADF' : '#4A4540' }}
                    >
                      {phase.title}
                    </h3>
                    {phase.isActive && (
                      <motion.div
                        className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#D5A86B]/25 bg-[#D5A86B]/05"
                        initial={{ opacity: 0, x: -8 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      >
                        <div className="w-1 h-1 rounded-full bg-[#D5A86B] animate-pulse" />
                        <span className="text-[7px] sm:text-[8px] 2xl:text-[10px] uppercase tracking-widest text-[#D5A86B]/70 font-mono">
                          Сейчас
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <p
                    className="text-[10px] sm:text-xs 2xl:text-sm font-light leading-relaxed max-w-lg 2xl:max-w-2xl"
                    style={{ color: phase.isActive ? '#6B645D' : '#2A2520' }}
                  >
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:w-[38%] 2xl:w-[35%] flex-shrink-0 relative rounded-2xl sm:rounded-3xl 2xl:rounded-[2.5rem] overflow-hidden border border-white/[0.05] shadow-[0_0_60px_rgba(0,0,0,0.9)] hidden lg:block"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608080969021-dd6328f897ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwbGlnaHQlMjBtaW5pbWFsJTIwb3BlbiUyMHNwYWNlJTIwbGF1bmNofGVufDF8fHx8MTc3NjQ0NzEwMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Open architectural space"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-[#090807]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#090807]/60 pointer-events-none" />

            {/* Top label */}
            <div className="absolute top-5 left-5 2xl:top-8 2xl:left-8 z-10">
              <span className="text-[7px] sm:text-[8px] 2xl:text-[10px] uppercase tracking-widest text-[#EAEADF]/25 font-mono">
                Старт
              </span>
            </div>

            {/* Phase indicator overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              <div
                className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] 2xl:w-[150px] 2xl:h-[150px] rounded-full border border-[#D5A86B]/15 flex items-center justify-center mx-auto"
                style={{ background: 'radial-gradient(circle, rgba(213,168,107,0.06) 0%, transparent 70%)' }}
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl 2xl:text-3xl font-light text-[#D5A86B]/80 mb-0.5">I</div>
                  <div className="text-[7px] sm:text-[8px] 2xl:text-[10px] uppercase tracking-widest text-[#A39B92]/50 font-mono">Этап</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom text */}
            <div className="absolute bottom-5 left-5 right-5 2xl:bottom-8 2xl:left-8 2xl:right-8 z-10">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm 2xl:text-base text-[#8A837A] font-light leading-relaxed"
              >
                На этом этапе особенно важны{' '}
                <span className="text-[#D5CCC3]">те, кто входит в момент формирования</span>
              </motion.p>
            </div>
          </motion.div>

        </div>

        {/* Footer insight */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mt-auto pt-[2vh] border-t border-white/[0.04] hidden sm:block"
        >
          <p className="text-sm sm:text-base 2xl:text-xl text-[#A39B92] font-light leading-relaxed">
            Сейчас особенно важны те, кто хочет войти в платформу{' '}
            <span className="text-[#D5CCC3]">не после того, как ниша сложилась, а в момент её формирования.</span>
          </p>
        </motion.div>

      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-5 left-6 lg:bottom-[4vh] lg:left-12 flex items-center gap-4 z-20 pointer-events-none hidden sm:flex">
        <span className="text-[10px] uppercase tracking-widest text-[#A39B92]">13</span>
        <div className="w-12 h-[1px] bg-white/10">
          <div className="w-full h-full bg-[#905E26] origin-left" />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-5 right-6 lg:bottom-[4vh] lg:right-12 z-20 flex items-center justify-center opacity-60 pointer-events-none hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
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
  );
}
