import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, Eye, Users, Compass, Star, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const ADVANTAGES = [
  {
    id: '01',
    icon: Eye,
    title: 'Больше видимости',
    desc: 'Работы раннего ядра получают приоритетное место в витрине платформы и в коммуникациях о запуске.',
  },
  {
    id: '02',
    icon: Users,
    title: 'Больше внимания команды',
    desc: 'Личная обратная связь, участие в обсуждениях и прямой доступ к редакционному процессу.',
  },
  {
    id: '03',
    icon: Compass,
    title: 'Ранняя фиксация в нише',
    desc: 'Пока ниша не насыщена, каждая качественная работа становится ориентиром для всей платформы.',
  },
  {
    id: '04',
    icon: Star,
    title: 'Стартовая витрина лучших кейсов',
    desc: 'Самые сильные работы первого этапа формируют эталонный слой платформы — и остаются в нём.',
  },
  {
    id: '05',
    icon: ShieldCheck,
    title: 'Роль в формировании качественного контура',
    desc: 'Ранние участники влияют на стандарты приёмки и критерии оценки новых работ.',
  },
];

export function AuthorSlideEleven() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-80px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell py-[4vh] lg:py-[6vh] px-4 sm:px-8 lg:px-12 2xl:px-24 bg-[#090807]">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_11">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_11)" />
      </svg>

      {/* Spotlight radial glow — upper-center */}
      <motion.div
        className="absolute top-[-15%] left-[30%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] pointer-events-none z-0 rounded-full blur-[80px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(213,168,107,0.09) 0%, transparent 60%)' }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      />

      <SlideEyebrow toneClassName="border-[#D5A86B]/30 text-[#D5A86B] bg-[#D5A86B]/5">Ранний вход</SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[1400px] 2xl:max-w-[2000px] mx-auto flex flex-col h-full min-h-0 pt-[2vh] lg:pt-[4vh]"
      >

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[4vh] lg:mb-[5vh]"
        >
          <h2 className="pr-36 text-2xl sm:pr-44 sm:text-3xl lg:pr-52 lg:text-[clamp(2rem,3.5vw,3rem)] 2xl:text-[3.5rem] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance max-w-4xl 2xl:max-w-6xl">
            Ранний вход —{' '}
            <span className="text-[#D5A86B]">это реальное преимущество</span>
          </h2>
        </motion.div>

        {/* Content: left image + right list */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-[3vh] lg:gap-[2vw] 2xl:gap-[3vw]">

          {/* Left: curated visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:basis-[30%] 2xl:basis-[28%] lg:w-[30%] 2xl:w-[28%] flex-shrink-0 relative rounded-2xl sm:rounded-3xl 2xl:rounded-[2.5rem] overflow-hidden border border-[#D5A86B]/10 shadow-[0_0_60px_rgba(0,0,0,0.9),0_0_80px_rgba(213,168,107,0.04)]"
            style={{ minHeight: '200px' }}
          >
            <ImageWithFallback
              src="/images/author-flow/slide-11/spotlight-early-access.jpg"
              alt="Spotlight early access"
              className="absolute inset-0 w-full h-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/95 via-[#090807]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#090807]/40 pointer-events-none" />

            {/* Corner label */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D5A86B]/60 animate-pulse" />
              <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#D5A86B]/50 font-mono">
                Curated spotlight
              </span>
            </div>

            {/* Central visual emphasis */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <motion.div
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] 2xl:w-[220px] 2xl:h-[220px] rounded-full border border-[#D5A86B]/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                style={{
                  background: 'radial-gradient(circle, rgba(213,168,107,0.12) 0%, transparent 70%)',
                  boxShadow: '0 0 80px rgba(213,168,107,0.08)',
                }}
              />
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
            >
              <div
                className="w-[70px] h-[70px] sm:w-[88px] sm:h-[88px] 2xl:w-[120px] 2xl:h-[120px] rounded-full border border-[#D5A86B]/40"
                style={{
                  background: 'radial-gradient(circle, rgba(213,168,107,0.2) 0%, transparent 70%)',
                }}
              />
            </motion.div>

            {/* Bottom stat */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 2xl:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 h-[1px] w-8 bg-[#D5A86B]/40" />
                <p className="text-fluid-label sm:text-sm 2xl:text-base text-[#A39B92] font-light leading-snug">
                  Сильные участники на старте получают
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: advantage list */}
          <div className="flex-1 lg:basis-[70%] 2xl:basis-[72%] lg:w-[70%] 2xl:w-[72%] min-h-0 flex flex-col gap-[2vh] sm:gap-[2.5vh] 2xl:gap-[3vh] pb-[10vh] lg:pb-0 overflow-y-auto lg:overflow-visible">
            {ADVANTAGES.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                  transition={{ duration: 0.9, delay: 0.5 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 2xl:gap-6 group"
                >
                  {/* Index + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                    <div
                      className="w-8 h-8 2xl:w-11 2xl:h-11 rounded-full border border-[#D5A86B]/20 flex items-center justify-center bg-[#D5A86B]/05 group-hover:border-[#D5A86B]/40 transition-colors duration-500"
                    >
                      <Icon className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 text-[#D5A86B]/70 group-hover:text-[#D5A86B] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    {index !== ADVANTAGES.length - 1 && (
                      <div className="w-[1px] flex-1 min-h-[1.5vh] bg-white/[0.04]" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 w-full pb-[1.5vh] 2xl:pb-[2vh]">
                    <div className="flex items-center gap-2 mb-1 2xl:mb-2">
                      <span className="text-sm sm:text-base 2xl:text-[1.35rem] font-mono text-[#905E26]/60">{adv.id}</span>
                      <h3 className="text-base sm:text-lg 2xl:text-[1.55rem] text-[#EAEADF] font-light tracking-wide">{adv.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base 2xl:text-[1.15rem] text-[#6B645D] font-light leading-relaxed w-full">
                      {adv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mt-auto pt-[2vh] border-t border-white/[0.04] hidden sm:block"
        >
          <p className="text-sm sm:text-base 2xl:text-xl text-[#A39B92] font-light leading-relaxed tracking-wide">
            Когда ниша только формируется,{' '}
            <span className="text-[#D5CCC3]">ранняя сильная позиция особенно ценна.</span>
          </p>
        </motion.div>
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
      <SlideFooter step="11" />
    </div>
  );
}
