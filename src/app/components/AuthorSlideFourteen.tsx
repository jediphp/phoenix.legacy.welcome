import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowUpRight, Send, BookMarked, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ACTIONS = [
  {
    id: '01',
    icon: Eye,
    label: 'Следить за проектом',
    desc: 'Подписаться на обновления',
  },
  {
    id: '02',
    icon: BookMarked,
    label: 'Оставить заявку интереса',
    desc: 'Зафиксировать участие',
  },
  {
    id: '03',
    icon: Send,
    label: 'Прислать работы',
    desc: 'Войти в оценочный контур',
  },
];

export function AuthorSlideFourteen() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-60px' });
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start bg-[#0B0907]">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_14">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_14)" />
      </svg>

      {/* Hero background image — full bleed */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1769002783651-52db678cadd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBsaWdodCUyMGhvcml6b24lMjBsYW5kc2NhcGUlMjBkcmFtYXRpYyUyMGR1c2t8ZW58MXx8fHwxNzc2NDQ3MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dramatic golden horizon"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Multi-layer vignette to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907]/98 via-[#0B0907]/60 to-[#0B0907]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0907]/80 via-transparent to-[#0B0907]/60" />
      </div>

      {/* Warm golden glow — center-left bloom */}
      <motion.div
        className="absolute left-[-5%] top-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] pointer-events-none z-0 rounded-full blur-[100px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(213,168,107,0.12) 0%, rgba(144,94,38,0.04) 45%, transparent 70%)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      />

      {/* Second smaller glow — upper right */}
      <motion.div
        className="absolute right-[-10%] top-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] pointer-events-none z-0 rounded-full blur-[80px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(234,234,223,0.04) 0%, transparent 65%)' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.5, ease: 'easeOut' }}
      />

      <div
        ref={sceneRef}
        className="relative z-20 w-full h-full flex flex-col"
      >

        {/* Main content — vertically centered with slight upward bias */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-12 2xl:px-24 pt-[10vh]">

          <div className="w-full max-w-[1500px] 2xl:max-w-[2400px] mx-auto">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-[4vh] sm:mb-[5vh]"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[9px] sm:text-[10px] 2xl:text-xs tracking-[0.25em] uppercase border border-[#D5A86B]/40 text-[#D5A86B] bg-[#D5A86B]/08">
                Ранний контур
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(3rem,5vw,4.5rem)] 2xl:text-[6rem] font-light leading-[1.08] text-[#EAEADF] tracking-tight text-balance max-w-4xl 2xl:max-w-7xl mb-[5vh] sm:mb-[6vh]"
            >
              Если вам близка эта идея —{' '}
              <span className="text-[#D5A86B]">входите в ранний контур</span>
            </motion.h2>

            {/* Two-column bottom area */}
            <div className="flex flex-col lg:flex-row gap-[4vh] lg:gap-[8vw] 2xl:gap-[10vw] items-start">

              {/* Left: action list */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="flex flex-col gap-[2vh] 2xl:gap-[2.5vh]"
              >
                {ACTIONS.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <motion.div
                      key={action.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                      transition={{ duration: 0.9, delay: 0.6 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredAction(action.id)}
                      onMouseLeave={() => setHoveredAction(null)}
                      className="flex items-center gap-4 2xl:gap-6 group cursor-default"
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14 rounded-full border flex items-center justify-center transition-all duration-500"
                        style={{
                          borderColor: hoveredAction === action.id ? 'rgba(213,168,107,0.5)' : 'rgba(255,255,255,0.08)',
                          background: hoveredAction === action.id ? 'rgba(213,168,107,0.08)' : 'rgba(255,255,255,0.02)',
                        }}
                      >
                        <Icon
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 transition-colors duration-500"
                          style={{ color: hoveredAction === action.id ? '#D5A86B' : '#4A4540' }}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <p
                          className="text-sm sm:text-base 2xl:text-xl font-light transition-colors duration-500"
                          style={{ color: hoveredAction === action.id ? '#EAEADF' : '#8A837A' }}
                        >
                          {action.label}
                        </p>
                        <p className="text-[9px] sm:text-[10px] 2xl:text-xs text-[#4A4540] uppercase tracking-widest font-mono mt-0.5">
                          {action.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Right: CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-3 2xl:gap-4"
              >
                {/* Primary CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden flex items-center gap-3 2xl:gap-4 px-6 py-4 sm:px-7 sm:py-4.5 2xl:px-10 2xl:py-6 rounded-xl 2xl:rounded-2xl cursor-pointer transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(213,168,107,0.18) 0%, rgba(144,94,38,0.10) 100%)',
                    border: '1px solid rgba(213,168,107,0.35)',
                    boxShadow: '0 0 40px rgba(213,168,107,0.06)',
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(135deg, rgba(213,168,107,0.12) 0%, transparent 60%)' }}
                  />
                  <span className="relative z-10 text-sm sm:text-base 2xl:text-lg text-[#EAEADF] font-light tracking-wide whitespace-nowrap">
                    Войти в ранний контур
                  </span>
                  <ArrowUpRight
                    className="relative z-10 w-4 h-4 2xl:w-5 2xl:h-5 text-[#D5A86B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 2xl:gap-4 px-6 py-4 sm:px-7 sm:py-4.5 2xl:px-10 2xl:py-6 rounded-xl 2xl:rounded-2xl cursor-pointer transition-all duration-500 border border-white/[0.06] hover:border-white/[0.12]"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <span className="text-sm sm:text-base 2xl:text-lg text-[#6B645D] group-hover:text-[#A39B92] font-light tracking-wide transition-colors duration-300 whitespace-nowrap">
                    Прислать работу
                  </span>
                  <Send
                    className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#3A3530] group-hover:text-[#6B645D] transition-colors duration-300 flex-shrink-0"
                    strokeWidth={1.5}
                  />
                </motion.button>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Bottom strip — final statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.4, ease: 'easeOut' }}
          className="flex-shrink-0 px-4 sm:px-8 lg:px-12 2xl:px-24 py-[3vh] sm:py-[4vh] border-t border-white/[0.04]"
        >
          <div className="w-full max-w-[1500px] 2xl:max-w-[2400px] mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <p className="text-xs sm:text-sm 2xl:text-base text-[#4A4540] font-light leading-relaxed max-w-2xl 2xl:max-w-3xl">
              Феникс.Наследие — это место, где историческая реконструкция может стать{' '}
              не разрозненным экспериментом, а{' '}
              <span className="text-[#6B645D]">новой осмысленной средой.</span>
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: 2, ease: 'easeOut' }}
              className="text-xs sm:text-sm 2xl:text-base text-[#D5A86B]/50 font-light tracking-wide whitespace-nowrap"
            >
              Ниша только формируется.
            </motion.p>
          </div>
        </motion.div>

      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-[calc(3vh+2px)] left-6 lg:bottom-[calc(4vh+2px)] lg:left-12 flex items-center gap-4 z-30 pointer-events-none hidden sm:flex">
        <span className="text-[10px] uppercase tracking-widest text-[#A39B92]">14</span>
        <div className="w-12 h-[1px] bg-white/10">
          <div className="w-full h-full bg-[#D5A86B]/40 origin-left" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-[#D5A86B]/40 font-mono">Финал</span>
      </div>

    </div>
  );
}
