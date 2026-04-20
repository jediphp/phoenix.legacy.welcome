import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, BookOpen, Handshake, Award, Layers } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';

const MONETIZATION_SCENARIOS = [
  {
    id: '01',
    icon: BookOpen,
    title: 'Лицензирование работ',
    desc: 'Передача прав на использование исторических реконструкций издательствам, музеям и образовательным платформам.',
    color: '#D5A86B',
  },
  {
    id: '02',
    icon: Handshake,
    title: 'Институциональное сотрудничество',
    desc: 'Совместные проекты с архивами, культурными фондами и исследовательскими организациями.',
    color: '#A39B92',
  },
  {
    id: '03',
    icon: Award,
    title: 'Кураторские позиции',
    desc: 'Участие в экспертных советах, оценке работ и формировании стандартов качества платформы.',
    color: '#EAEADF',
  },
  {
    id: '04',
    icon: Layers,
    title: 'Авторские коллекции',
    desc: 'Публикация тематических серий и исторических циклов с расширенным профилем автора.',
    color: '#905E26',
  },
];

export function AuthorSlideTen() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-80px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell py-[4vh] lg:py-[6vh] px-4 sm:px-8 lg:px-12 2xl:px-24 bg-[#090807]">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_10">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_10)" />
      </svg>

      {/* Ambient warm glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] pointer-events-none z-0 rounded-full bg-[radial-gradient(circle,rgba(213,168,107,0.06)_0%,transparent_65%)] blur-[60px] mix-blend-screen" />
      <div className="absolute bottom-[-5%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none z-0 rounded-full bg-[radial-gradient(circle,rgba(144,94,38,0.05)_0%,transparent_70%)] blur-[50px] mix-blend-screen" />

      <SlideEyebrow toneClassName="border-[#D5A86B]/30 text-[#D5A86B] bg-[#D5A86B]/5">
        Профессиональные возможности
      </SlideEyebrow>

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
          <h2 className="pr-36 text-2xl sm:pr-44 sm:text-3xl lg:pr-52 lg:text-[clamp(1.85rem,3vw,2.75rem)] 2xl:text-[3.25rem] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance max-w-3xl 2xl:max-w-5xl">
            Платформа открывает{' '}
            <span className="text-[#A39B92]">сценарии роста за пределами разовых публикаций</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-[3vh] lg:gap-[4vw] 2xl:gap-[5vw]">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:w-[42%] 2xl:w-[38%] flex-shrink-0 relative rounded-2xl sm:rounded-3xl 2xl:rounded-[2.5rem] overflow-hidden border border-[#2A2621]/60 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            style={{ minHeight: '220px' }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1606819717115-9159c900370b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBnYWxsZXJ5JTIwY3VyYXRvciUyMHByZW1pdW0lMjBhcnQlMjBleGhpYml0aW9ufGVufDF8fHx8MTc3NjQ0NzA5OHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Museum gallery space"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-[#090807]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090807]/50 to-transparent pointer-events-none" />

            {/* Corner label */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 2xl:top-8 2xl:left-8 z-10">
              <span className="text-fluid-micro text-fluid-caption text-fluid-label uppercase tracking-widest text-[#EAEADF]/30 font-mono">
                Профессиональный путь
              </span>
            </div>

            {/* Bottom quote */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 2xl:p-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base 2xl:text-xl text-[#D5CCC3] font-light leading-relaxed text-balance"
              >
                Репутация внутри платформы становится{' '}
                <span className="text-[#D5A86B]">профессиональным активом</span>{' '}
                за её пределами.
              </motion.p>
            </div>
          </motion.div>

          {/* Right: scenario cards */}
          <div className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-[2vh] sm:gap-[2.5vh] 2xl:gap-[3vh] content-start pb-[10vh] lg:pb-0">
            {MONETIZATION_SCENARIOS.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.9, delay: 0.4 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-4 sm:p-5 2xl:p-8 rounded-xl sm:rounded-2xl 2xl:rounded-3xl bg-[#0D0B09]/70 backdrop-blur-sm border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-500 group overflow-hidden"
                >
                  {/* Subtle hover glow */}
                  <div
                    className="absolute top-0 right-0 w-[60%] h-[60%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-[40px]"
                    style={{ background: `radial-gradient(circle, ${scenario.color}15 0%, transparent 70%)` }}
                  />

                  <div className="flex items-start gap-3 2xl:gap-5 relative z-10">
                    <div
                      className="flex-shrink-0 p-2 2xl:p-3 rounded-lg border mt-0.5"
                      style={{
                        color: scenario.color,
                        borderColor: `${scenario.color}30`,
                        background: `${scenario.color}08`,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-6 2xl:h-6" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-[1vh]">
                        <span className="text-fluid-caption text-fluid-label font-mono" style={{ color: `${scenario.color}60` }}>
                          {scenario.id}
                        </span>
                        <h3 className="text-fluid-label text-fluid-label 2xl:text-base text-[#D5CCC3] uppercase tracking-[0.15em] font-light">
                          {scenario.title}
                        </h3>
                      </div>
                      <p className="text-fluid-label text-fluid-label 2xl:text-sm text-[#6B645D] font-light leading-relaxed">
                        {scenario.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
          className="flex-shrink-0 mt-auto pt-[2vh] flex items-center gap-3 2xl:gap-5 hidden sm:flex"
        >
          <div className="w-[1px] h-4 2xl:h-6 bg-[#D5A86B]/30" />
          <p className="text-fluid-label text-fluid-label 2xl:text-sm text-[#6B645D] font-light tracking-wide">
            Каждый из сценариев опирается на верифицированный профиль и историю работ внутри платформы
          </p>
        </motion.div>

      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-5 left-6 lg:bottom-[4vh] lg:left-12 flex items-center gap-4 z-20 pointer-events-none hidden sm:flex">
        <span className="text-fluid-label uppercase tracking-widest text-[#A39B92]">10</span>
        <div className="w-12 h-[1px] bg-white/10">
          <div className="w-full h-full bg-[#905E26] origin-left" />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-5 right-6 lg:bottom-[4vh] lg:right-12 z-20 flex items-center justify-center opacity-60 pointer-events-none hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
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
