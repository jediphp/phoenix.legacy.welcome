import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import brandLogo from '../../imports/image.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import LogoVertical from '../../imports/LogoVertical';

export function OrgSlideOne() {
  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#080705]">

      {/* Full-bleed hero image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1776090188970-3248a223a03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXZlJTIwdmF1bHQlMjBkYXJrJTIwY29ycmlkb3IlMjBpbnN0aXR1dGlvbmFsJTIwaGVyaXRhZ2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzY0NDgyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Institutional heritage corridor"
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'saturate(0.4)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080705]/90 via-[#080705]/60 to-[#080705]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/80 via-transparent to-[#080705]/50" />
      </div>

      {/* Noise - above image, below content */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_1">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_1)" />
      </svg>

      {/* Content layer */}
      <div className="relative z-20 flex flex-col min-h-[100svh] w-full max-w-[90vw] mx-auto px-[2vw]">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: '-2vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between pt-[8vh] flex-shrink-0"
        >
          <div className="flex items-center gap-[1vw]">
            <div className="w-[1.5vw] h-[1px] bg-[#D5A86B]/40" />
            <span className="text-[clamp(9px,1vh,14px)] uppercase tracking-[0.3em] text-[#A39B92]/70 font-mono">
              Феникс.Наследие
            </span>
          </div>
          <span className="text-[clamp(9px,1vh,14px)] uppercase tracking-[0.25em] text-[#6B645D]/60 font-mono">
            Сценарий организации
          </span>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: '3vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-[6vh]"
          >
            <ImageWithFallback
              src={brandLogo}
              alt="Феникс Наследие"
              className="h-[clamp(40px,10vh,150px)] w-auto object-contain"
            />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-[5vw] h-[1px] bg-gradient-to-r from-[#D5A86B]/50 to-transparent mb-[4vh] origin-left"
          />

          {/* Headlines */}
          <motion.div
            initial={{ opacity: 0, y: '3vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-[80vw] max-w-[1400px]"
          >
            <h1 className="text-[clamp(1.5rem,5.5vh,6rem)] font-light leading-[1.1] text-[#EAEADF] tracking-tight text-balance mb-[3vh]">
              Платформа для исторических реконструкций, их оценки, структурирования и контролируемого использования
            </h1>
          </motion.div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: '2vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            className="w-[60vw] max-w-[900px]"
          >
            <p className="text-[clamp(14px,2vh,24px)] text-[#8A837A] font-light leading-relaxed text-balance">
              Феникс.Наследие создается как культурно-технологическая среда, где исторические реконструкции получают источник, контекст, оценку качества и понятный режим дальнейшего использования.
            </p>
          </motion.div>

          {/* Institutional chips row */}
          <motion.div
            initial={{ opacity: 0, y: '2vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="flex flex-wrap gap-[1vw] mt-[5vh]"
          >
            {['Музеи', 'Архивы', 'Образовательные организации', 'Культурные фонды'].map((label) => (
              <span
                key={label}
                className="px-[1vw] py-[0.8vh] rounded-full border border-white/[0.07] bg-white/[0.02] text-[clamp(9px,1.2vh,16px)] uppercase tracking-widest text-[#6B645D] font-mono"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex-shrink-0 pb-[5vh] flex items-end justify-between">
          <div className="flex items-center gap-[1vw] pointer-events-none">
            <span className="text-[clamp(10px,1.2vh,14px)] uppercase tracking-widest text-[#A39B92]">01</span>
            <div className="w-[3vw] h-[1px] bg-white/10">
              <div className="w-full h-full bg-[#905E26] origin-left" />
            </div>
          </div>

          <motion.div
            className="flex items-center justify-center opacity-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 1.4 }}
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
      </div>
    </div>
  );
}
