import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, Layers, Target, Handshake } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideFooter } from './SlideFooter';

const CURRENT_STATE = [
  { id: '1', text: 'Авторская платформа с растущей витриной сильных работ', icon: Layers },
  { id: '2', text: 'Система оценки и верификации качества', icon: Target },
  { id: '3', text: 'Будущая база для более зрелых институциональных сценариев', icon: Handshake }
];

export function OrgSlideTen() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#080705]">
      {/* Full-bleed closing hero image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1775152495033-29e0643901c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcmNoaXRlY3R1cmUlMjBhdHJpdW0lMjBzdW5saWdodHxlbnwxfHx8fDE3NzY0NDkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Museum Atrium Sunlight"
          className="w-full h-full object-cover opacity-20"
          style={{ filter: 'saturate(0.5)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080705]/95 via-[#080705]/80 to-[#080705]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/90 via-transparent to-[#080705]/90" />
        
        {/* Soft, confident golden glow */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none z-0 rounded-full blur-[150px] mix-blend-screen"
          style={{ background: 'radial-gradient(circle, rgba(213,168,107,0.15) 0%, transparent 70%)' }}
        />
      </div>

      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_10">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_10)" />
      </svg>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto min-h-[100svh] flex flex-col justify-center px-[2vw] pt-[15vh] pb-[10vh]"
      >
        <div className="max-w-[75vw] mx-auto text-center flex flex-col items-center">
          
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: '2vh' }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-[1.5vw] py-[0.8vh] rounded-full text-[clamp(10px,1.4vh,16px)] tracking-[0.3em] uppercase border border-[#D5A86B]/30 text-[#D5A86B] bg-[#D5A86B]/10 mb-[4vh]"
          >
            Ранний контакт
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: '3vh' }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '3vh' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[clamp(1.8rem,5vh,5rem)] font-light leading-[1.1] text-[#EAEADF] tracking-tight text-balance mb-[6vh]"
          >
            Проект находится на стадии, где особенно важны{' '}
            <span className="text-[#A39B92] italic">ранние профессиональные контакты</span>
          </motion.h1>

          {/* Current State Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw] mb-[6vh] w-full">
            {CURRENT_STATE.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: '3vh' }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '3vh' }}
                  transition={{ duration: 0.9, delay: 0.4 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center p-[3vh] rounded-[2vh] border border-white/[0.05] bg-[#0A0908]/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                  <div className="p-[1.5vh] rounded-full border border-white/[0.1] bg-[#0A0908] mb-[2vh]">
                    <Icon className="w-[clamp(20px,2.5vh,32px)] h-[clamp(20px,2.5vh,32px)] text-[#D5A86B]" strokeWidth={1.2} />
                  </div>
                  <p className="text-[clamp(12px,1.6vh,20px)] text-[#D5CCC3] font-light leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Explanation Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
            className="max-w-[60vw]"
          >
            <p className="text-[clamp(14px,2vh,24px)] text-[#8A837A] font-light leading-relaxed mb-[6vh]">
              Именно поэтому уже сейчас уместны ранние диалоги, пилоты и обсуждение того, какие форматы действительно могут быть полезны <span className="text-[#D5CCC3]">музеям, архивам и культурным проектам</span>.
            </p>
          </motion.div>

          {/* Final Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="px-[3vw] py-[2vh] rounded-[1.5vh] border border-[#D5A86B]/20 bg-[#D5A86B]/5 backdrop-blur-sm"
          >
            <p className="text-[clamp(14px,1.8vh,22px)] text-[#EAEADF] font-light tracking-wide text-center">
              Следующий шаг — показать демо, обсудить задачу и определить реалистичный формат сотрудничества.
            </p>
          </motion.div>
        </div>
      </div>
      <SlideFooter step="10" />
    </div>
  );
}