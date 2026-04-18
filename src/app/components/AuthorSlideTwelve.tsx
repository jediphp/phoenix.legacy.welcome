import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, Search, Clock, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';

const CRITERIA = [
  {
    id: '01',
    icon: Search,
    title: 'Источник и контекст',
    desc: 'Авторам важно понимать, откуда материал, как он задокументирован и что за ним стоит исторически.',
  },
  {
    id: '02',
    icon: Clock,
    title: 'Исторический материал',
    desc: 'Интерес к работе с архивными данными, реконструкцией эпохи и культурными слоями.',
  },
  {
    id: '03',
    icon: Target,
    title: 'Сильный, а не случайный результат',
    desc: 'Стремление делать работу, которую можно защитить перед экспертом, а не просто опубликовать.',
  },
  {
    id: '04',
    icon: TrendingUp,
    title: 'Рост внутри новой ниши',
    desc: 'Готовность войти в культурно-технологическую среду раньше других и формировать её стандарты.',
  },
];

export function AuthorSlideTwelve() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-80px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start py-[4vh] lg:py-[6vh] px-4 sm:px-8 lg:px-12 2xl:px-24 bg-[#090807]">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_12">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_12)" />
      </svg>

      {/* Ambient glow — editorial tone */}
      <div className="absolute top-[5%] left-[15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none z-0 rounded-full blur-[70px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(163,155,146,0.05) 0%, transparent 65%)' }}
      />

      <SlideEyebrow toneClassName="border-[#A39B92]/30 text-[#A39B92] bg-[#A39B92]/5">Editorial Selection</SlideEyebrow>

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
          <h2 className="pr-36 text-2xl sm:pr-44 sm:text-3xl lg:pr-52 lg:text-[clamp(1.85rem,3.4vw,2.85rem)] 2xl:text-[3.35rem] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance max-w-4xl 2xl:max-w-6xl">
            Нам нужны не просто{' '}
            <span className="text-[#A39B92]">генераторы изображений</span>
          </h2>
        </motion.div>

        {/* Content: grid layout */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-[3vh] lg:gap-[5vw] 2xl:gap-[6vw]">

          {/* Left: criteria cards 2×2 */}
          <div className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-[2vh] sm:gap-[2.5vh] 2xl:gap-[3vh] content-start pb-[10vh] lg:pb-0">
            {CRITERIA.map((criterion, index) => {
              const Icon = criterion.icon;
              return (
                <motion.div
                  key={criterion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.9, delay: 0.3 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-4 sm:p-5 2xl:p-8 rounded-xl sm:rounded-2xl 2xl:rounded-3xl border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500 group overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(13,11,9,0.9) 0%, rgba(10,9,8,0.95) 100%)' }}
                >
                  {/* Asymmetric glow accent */}
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 2xl:w-32 2xl:h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(163,155,146,0.08) 0%, transparent 70%)' }}
                  />

                  {/* ID + icon row */}
                  <div className="flex items-center justify-between mb-[2vh] relative z-10">
                    <span className="text-[8px] sm:text-[9px] 2xl:text-xs font-mono text-[#A39B92]/40">
                      {criterion.id}
                    </span>
                    <div className="p-2 2xl:p-3 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                      <Icon className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 text-[#A39B92]/60 group-hover:text-[#A39B92] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base 2xl:text-xl text-[#D5CCC3] font-light tracking-wide mb-[1.5vh] 2xl:mb-[2vh]">
                      {criterion.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs 2xl:text-sm text-[#6B645D] font-light leading-relaxed">
                      {criterion.desc}
                    </p>
                  </div>

                  {/* Thin gold bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D5A86B]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* Right: editorial visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:w-[35%] 2xl:w-[32%] flex-shrink-0 relative rounded-2xl sm:rounded-3xl 2xl:rounded-[2.5rem] overflow-hidden border border-white/[0.06] shadow-[0_0_60px_rgba(0,0,0,0.9)] hidden lg:block"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760587162690-95608c8ab2da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBwb3J0cmFpdCUyMGFydGlzdCUyMGNyZWF0aXZlJTIwd29ya3NwYWNlJTIwbHV4dXJ5fGVufDF8fHx8MTc3NjQ0NzA5OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Editorial artist portrait"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-[#090807]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#090807]/60 pointer-events-none" />

            {/* Top label */}
            <div className="absolute top-5 left-5 2xl:top-8 2xl:left-8 z-10 flex items-center gap-2">
              <div className="w-1 h-4 2xl:h-6 bg-[#A39B92]/30 rounded-full" />
              <span className="text-[8px] 2xl:text-[10px] uppercase tracking-widest text-[#A39B92]/40 font-mono">
                Автор
              </span>
            </div>

            {/* Animated selection frame */}
            <motion.div
              className="absolute inset-8 2xl:inset-12 border border-[#A39B92]/10 rounded-lg 2xl:rounded-xl z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              {/* Corner accents */}
              {[
                'top-0 left-0 border-t border-l',
                'top-0 right-0 border-t border-r',
                'bottom-0 left-0 border-b border-l',
                'bottom-0 right-0 border-b border-r',
              ].map((corner, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-4 h-4 2xl:w-6 2xl:h-6 ${corner} border-[#D5A86B]/50`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                />
              ))}
            </motion.div>

            {/* Bottom note */}
            <div className="absolute bottom-5 left-5 right-5 2xl:bottom-8 2xl:left-8 2xl:right-8 z-10">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm 2xl:text-base text-[#8A837A] font-light leading-relaxed"
              >
                Каждый участник — выбор,{' '}
                <span className="text-[#D5CCC3]">не просто регистрация</span>
              </motion.p>
            </div>
          </motion.div>

        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mt-auto pt-[2vh] border-t border-white/[0.04] hidden sm:flex items-center gap-4"
        >
          <div className="w-[2px] h-8 2xl:h-10 bg-[#D5A86B]/30 rounded-full flex-shrink-0" />
          <p className="text-sm sm:text-base 2xl:text-xl text-[#A39B92] font-light leading-relaxed">
            Если вам важно не просто создавать, а{' '}
            <span className="text-[#D5CCC3]">формировать новый стандарт качества</span> — вам сюда.
          </p>
        </motion.div>

      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-5 left-6 lg:bottom-[4vh] lg:left-12 flex items-center gap-4 z-20 pointer-events-none hidden sm:flex">
        <span className="text-[10px] uppercase tracking-widest text-[#A39B92]">12</span>
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
