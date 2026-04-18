import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, MessageSquare, Users, ShieldAlert, CheckCircle, BrainCircuit } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const SIGNALS = [
  {
    id: 1,
    title: "Независимая оценка",
    icon: Users,
    align: "top-[5%] left-0 -translate-x-full -ml-[2vw]",
    color: "#EAEADF",
    bg: "bg-[#EAEADF]/10",
    borderHover: "hover:border-[#EAEADF]/30"
  },
  {
    id: 2,
    title: "Экспертный вклад",
    icon: CheckCircle,
    align: "top-[15%] right-0 translate-x-full ml-[2vw]",
    color: "#F5EC9B",
    bg: "bg-[#F5EC9B]/15",
    borderHover: "hover:border-[#F5EC9B]/40"
  },
  {
    id: 3,
    title: "Комментарии",
    icon: MessageSquare,
    align: "bottom-[5%] left-0 -translate-x-full -ml-[2vw]",
    color: "#A39B92",
    bg: "bg-[#A39B92]/10",
    borderHover: "hover:border-[#A39B92]/30"
  },
  {
    id: 4,
    title: "Проблемные зоны",
    icon: ShieldAlert,
    align: "bottom-[20%] right-0 translate-x-full ml-[2vw]",
    color: "#905E26",
    bg: "bg-[#905E26]/20",
    borderHover: "hover:border-[#905E26]/40"
  },
  {
    id: 5,
    title: "Логика качества",
    icon: BrainCircuit,
    align: "top-[50%] -translate-y-1/2 left-0 -translate-x-full -ml-[4vw]",
    color: "#D5CCC3",
    bg: "bg-[#D5CCC3]/10",
    borderHover: "hover:border-[#D5CCC3]/30"
  }
];

export function AuthorSlideSix() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden font-sans snap-start bg-transparent py-[4vh] px-[5vw]">
      {/* Noise filter */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_6">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_6)" />
      </svg>

      <div ref={sceneRef} className="relative z-20 w-full max-w-[90vw] mx-auto flex flex-col min-h-[100svh] pt-[8vh] pb-[5vh]">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-shrink-0 mb-[4vh] text-left z-30"
        >
          <span className="inline-block px-[1vw] py-[0.5vh] rounded-full text-[clamp(10px,1.2vh,14px)] tracking-[0.25em] uppercase border border-[#905E26]/30 text-[#A39B92] bg-[#905E26]/5 mb-[2vh]">
            Индекс соответствия
          </span>
          <h2 className="text-[clamp(2rem,4vh,4.5rem)] font-light leading-[1.1] text-[#EAEADF] tracking-tight mb-[2vh]">
            Лайка недостаточно
          </h2>
          <p className="text-[clamp(14px,1.8vh,22px)] text-[#8A837A] font-light leading-relaxed max-w-[50vw]">
            Индекс соответствия помогает оценивать не просто популярность, а то, насколько работа <span className="text-[#D5CCC3]">убедительна</span> внутри логики платформы.
          </p>
        </motion.div>

        {/* Center Product Scene */}
        <div className="w-full flex-1 min-h-0 relative flex items-center justify-center z-10">
          
          {/* Card wrapper */}
          <div className="relative w-[30vw] lg:w-[35vw] 2xl:w-[40vw] max-h-[50vh] lg:max-h-[60vh] aspect-[4/3] flex items-center justify-center">
            
            {/* The Central Work Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-[2vh] border border-[#2A2621]/60 bg-[#0A0908] shadow-[0_0_5vh_rgba(0,0,0,0.8)] overflow-hidden z-20 group"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1651509961850-1e5fbe6fbf9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZnJlc2NvJTIwcmVzdG9yYXRpb24lMjBtdXNldW18ZW58MXx8fHwxNzc2NDQzNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Product work case"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/30 to-transparent pointer-events-none" />
              
              {/* Match Index Big Display Overlay */}
              <div className="absolute bottom-[2vh] left-[2vw] flex items-center gap-[1vw] z-30">
                <div className="relative w-[8vh] h-[8vh] rounded-full border border-[#905E26]/30 bg-[#0A0908]/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_3vh_rgba(144,94,38,0.2)]">
                  {/* Glowing SVG Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(144,94,38,0.15)" strokeWidth="3" />
                    <motion.circle 
                      cx="50" cy="50" r="46" fill="none" stroke="#F5EC9B" strokeWidth="3" 
                      strokeDasharray="289" 
                      strokeDashoffset="289"
                      animate={isInView ? { strokeDashoffset: 289 - (289 * 0.94) } : {}}
                      transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_8px_rgba(245,236,155,0.6)]"
                    />
                  </svg>
                  <span className="text-[clamp(18px,2.5vh,32px)] font-light text-[#EAEADF]">94</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#F5EC9B] text-[clamp(10px,1.2vh,14px)] uppercase tracking-widest font-mono mb-[0.5vh]">Match Index</span>
                  <span className="text-[#8A837A] text-[clamp(10px,1.2vh,14px)] font-light leading-snug max-w-[12vw] text-balance">
                    Высокое подтвержденное соответствие
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Signal Markers */}
            {SIGNALS.map((signal, idx) => {
              const Icon = signal.icon;
              return (
                <div 
                  key={signal.id} 
                  className={`absolute ${signal.align} z-30 pointer-events-none hidden sm:block`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: '2vh' }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: '2vh' }}
                    transition={{ duration: 0.8, delay: 0.8 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex items-center gap-[0.5vw] p-[1.5vh] bg-[#0A0908]/80 backdrop-blur-xl border border-white/5 rounded-[1.5vh] shadow-2xl group transition-colors duration-500 pointer-events-auto ${signal.borderHover}`}
                  >
                    <div className={`p-[1vh] rounded-[1vh] ${signal.bg}`} style={{ color: signal.color }}>
                      <Icon className="w-[clamp(14px,2vh,24px)] h-[clamp(14px,2vh,24px)]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[clamp(10px,1.2vh,14px)] uppercase tracking-wider text-[#D5CCC3] font-light max-w-[10vw] text-balance leading-snug">
                      {signal.title}
                    </span>
                  </motion.div>
                </div>
              );
            })}

            {/* Subtle background radial light for the product scene */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#905E26]/5 via-transparent to-transparent opacity-50 blur-[100px] pointer-events-none z-0" />
          </div>
        </div>

        {/* Bottom Text Block */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-shrink-0 z-30 pt-[4vh]"
        >
          <p className="text-[clamp(12px,1.6vh,20px)] text-[#A39B92] font-light tracking-wide text-balance leading-relaxed">
            Индекс соответствия — это не декоративная цифра, а инструмент более честного разговора о качестве результата.
          </p>
        </motion.div>

        {/* Progress / Step indicator at bottom */}
        <div className="absolute bottom-[5vh] left-0 flex items-center gap-[1vw] z-20 pointer-events-none hidden sm:flex">
          <span className="text-[clamp(10px,1.2vh,14px)] uppercase tracking-widest text-[#A39B92]">06</span>
          <div className="w-[4vw] h-[1px] bg-white/10">
            <div className="w-full h-full bg-[#905E26] origin-left" />
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          className="absolute bottom-[5vh] right-0 z-20 flex flex-col items-center justify-center opacity-60 pointer-events-none hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        >
          <motion.div
            animate={{ y: [0, '1vh', 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-[1vh] rounded-full border border-white/10 bg-white/5 text-[#EAEADF]"
          >
            <ArrowDown className="w-[2vh] h-[2vh]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
