import { motion } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import myImage from '../../imports/image-1.png'; // Fallback if image-1.png is what the user provided

export function AuthorSlideTwo() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden font-sans snap-start selection:bg-[#8F6D1F]/30"
    >
      {/* Background base and noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#12100D]/40 via-[#0A0907]/40 to-[#040403]/40 z-0" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-screen z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Subtle warm glow around the media area (right side) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#905E26]/10 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />

      <SlideEyebrow toneClassName="border-[#905E26]/30 text-[#F5EC9B] bg-[#905E26]/10">Проблема</SlideEyebrow>

      {/* Grid Layout: Left Text (35-40%), Right Media (60-65%) */}
      <div className="relative z-10 w-full max-w-[1600px] 2xl:max-w-[1800px] px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 2xl:gap-32 h-full pt-20 pb-16 lg:py-0">
        
        {/* Left: Text Block */}
        <motion.div 
          className="w-full lg:w-[40%] xl:w-[38%] flex flex-col justify-center order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 lg:mb-10">
            <h2 className="pr-32 text-2xl sm:pr-40 sm:text-3xl lg:pr-48 lg:text-4xl 2xl:text-[3rem] font-light leading-[1.15] text-[#EAEADF] tracking-tight">
              Историческая реконструкция сегодня почти не имеет своей среды
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-base lg:text-lg 2xl:text-xl text-[#A39B92] font-light leading-[1.6]">
              Исторические ИИ-работы чаще всего существуют как разрозненные результаты. Красивая картинка еще не означает сильную реконструкцию.
            </p>
            <p className="text-base lg:text-lg 2xl:text-xl text-[#A39B92] font-light leading-[1.6]">
              Почти нигде нет среды, где можно сопоставить результат с источником, собрать содержательную оценку и накапливать доверие к качеству.
            </p>
          </div>

          <div className="mt-10 lg:mt-14 pt-8 lg:pt-10 border-t border-[#8F6D1F]/20">
            <p className="text-sm lg:text-base 2xl:text-lg text-[#D5CCC3] font-normal leading-relaxed">
              Феникс.Наследие строится как отдельная культурно-технологическая среда для такой работы.
            </p>
          </div>
        </motion.div>

        {/* Right: Media Block */}
        <motion.div 
          className="w-full lg:w-[60%] xl:w-[62%] h-[40vh] sm:h-[50vh] lg:h-[70vh] max-h-[500px] lg:max-h-[750px] 2xl:max-h-[900px] relative order-1 lg:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Media Container with soft frame and depth */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#12100d]/50 group">
            
            {/* The main image / media piece */}
            <ImageWithFallback
              src={myImage}
              alt="Historical Reconstruction Visual"
              className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            
            {/* Subtle internal shadows and glows */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-transparent to-[#0A0908]/30 pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,9,8,0.8)] pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none mix-blend-overlay" />
            
            {/* Small UI detail overlay to give a "museum-tech / digital vitrine" feel */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3 opacity-60">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F5EC9B] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#F5EC9B]">Source / Analysis</span>
            </div>
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-widest text-[#A39B92] opacity-50 font-mono">
              Fig. 01 / Context
            </div>
          </div>
        </motion.div>
      </div>

      {/* Progress / Step indicator at bottom */}
      <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-12 flex items-center gap-4 z-20">
        <span className="text-[10px] uppercase tracking-widest text-[#A39B92]">02</span>
        <div className="w-12 h-[1px] bg-white/10">
          <div className="w-full h-full bg-[#905E26] origin-left" />
        </div>
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 z-20 flex flex-col items-center justify-center opacity-60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 lg:p-3 rounded-full border border-white/10 bg-white/5 text-[#EAEADF]"
        >
          <ArrowDown className="w-3 h-3 lg:w-4 lg:h-4" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

    </div>
  );
}
