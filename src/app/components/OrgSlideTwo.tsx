import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const PROBLEM_POINTS = [
  {
    id: '01',
    text: 'Такие материалы часто выглядят эффектно, но существуют вне системной среды доверия.',
  },
  {
    id: '02',
    text: 'Организациям трудно работать с подобным контентом, если нет структуры, проверки, атрибуции и понятного статуса использования.',
  },
  {
    id: '03',
    text: 'Между визуальным результатом и профессиональным применением сегодня часто отсутствует промежуточный слой качества.',
  },
];

export function OrgSlideTwo() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#090807]">

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_2">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_2)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#A39B92]/25 text-[#A39B92] bg-[#A39B92]/5">
        Институциональная проблема
      </SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto min-h-[100svh] flex flex-col lg:flex-row items-stretch px-[2vw] pt-[8vh] pb-[5vh] gap-[4vh] lg:gap-[6vw]"
      >

        {/* ── LEFT: Text block ── */}
        <div className="flex flex-col justify-center lg:w-[46%] flex-shrink-0 order-2 lg:order-1">

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: '3vh' }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '3vh' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="pr-32 text-[clamp(1.35rem,3.5vh,3.25rem)] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance mb-[4vh] sm:pr-40 lg:pr-48"
          >
            Исторические реконструкции редко существуют внутри понятного{' '}
            <span className="text-[#A39B92]">институционального контура</span>
          </motion.h2>

          {/* Problem points */}
          <div className="flex flex-col gap-[2.5vh] mb-[4vh]">
            {PROBLEM_POINTS.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: '-2vw' }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-2vw' }}
                transition={{ duration: 0.9, delay: 0.3 + index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-[1vw]"
              >
                {/* Accent line */}
                <div className="flex-shrink-0 mt-[0.8vh] w-[1.5vw] max-w-[24px] h-[1px] bg-[#D5A86B]/30" />
                <p className="text-[clamp(14px,1.8vh,22px)] text-[#6B645D] font-light leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final statement */}
          <motion.div
            initial={{ opacity: 0, y: '2vh' }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
            transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pt-[3vh] border-t border-white/[0.05]"
          >
            <p className="text-[clamp(14px,2vh,24px)] text-[#D5CCC3] font-light leading-relaxed text-balance">
              Феникс.Наследие строится именно как такой промежуточный слой: между авторской работой и{' '}
              <span className="text-[#D5A86B]">более ответственным сценарием использования.</span>
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: Media block ── */}
        <motion.div
          initial={{ opacity: 0, x: '4vw' }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '4vw' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 min-h-[30vh] lg:min-h-0 relative order-1 lg:order-2 rounded-[2vh] overflow-hidden border border-white/[0.05] shadow-[0_0_80px_rgba(0,0,0,0.95)] bg-[#0A0908] z-20"
        >
          {/* Base image — historical manuscript */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763318156213-37e41cd0dfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbWFudXNjcmlwdCUyMGRvY3VtZW50JTIwYXJjaGl2ZSUyMHJlc2VhcmNoJTIwcGFwZXJ8ZW58MXx8fHwxNzc2NDQ4MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Historical manuscript document"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            style={{ filter: 'saturate(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/95 via-transparent to-[#0A0908]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/60 to-transparent pointer-events-none" />

          {/* Top-left label */}
          <div className="absolute top-[3vh] left-[2vw] z-30">
            <span className="text-[clamp(8px,1vh,12px)] uppercase tracking-widest text-[#EAEADF]/30 font-mono">
              Материал без контура
            </span>
          </div>

          {/* "Scattered" problem visual overlay */}
          <motion.div
            className="absolute inset-0 z-30 p-[3vh] flex flex-col justify-end"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="flex flex-col gap-[1.5vh]">
              {[
                { label: 'Источник', status: 'Не указан' },
                { label: 'Атрибуция', status: 'Отсутствует' },
                { label: 'Статус использования', status: 'Не определён' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: '2vh' }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
                  transition={{ duration: 0.7, delay: 1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between px-[1.5vw] py-[1.5vh] rounded-[1vh] bg-[#0A0908] border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-20"
                >
                  <span className="text-[clamp(9px,1.2vh,14px)] text-[#6B645D] uppercase tracking-widest font-mono">
                    {item.label}
                  </span>
                  <span className="text-[clamp(9px,1.2vh,14px)] text-[#A39B92] font-mono flex items-center gap-[0.5vw]">
                    <span className="w-[0.5vw] max-w-[6px] aspect-square rounded-full bg-[#3A3530]" />
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom right annotation */}
          <motion.div
            className="absolute top-[3vh] right-[2vw] z-30 flex items-center gap-[0.5vw] px-[1vw] py-[0.8vh] rounded-full bg-[#0A0908] border border-white/[0.08]"
            initial={{ opacity: 0, y: '-1vh' }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '-1vh' }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="w-[0.5vw] max-w-[6px] aspect-square rounded-full bg-[#6B645D]/60" />
            <span className="text-[clamp(8px,1vh,12px)] uppercase tracking-widest text-[#6B645D] font-mono">
              Вне системы
            </span>
          </motion.div>
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
      <SlideFooter step="02" />
    </div>
  );
}
