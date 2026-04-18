import { motion } from 'motion/react';
import { 
  History, 
  SplitSquareHorizontal, 
  Users, 
  Verified, 
  AlertCircle,
  Database,
  ArrowDown
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AuthorSlideFour() {
  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden font-sans snap-start py-8 sm:py-16 px-4 sm:px-8">
      
      {/* Background with deep graphite and subtle spot light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0B09]/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[1200px] h-[600px] lg:h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#905E26]/5 via-transparent to-transparent opacity-60 mix-blend-screen blur-[120px]" />
      </div>

      {/* Noise filter */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_4">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_4)" />
      </svg>

      <div className="relative z-20 w-full max-w-7xl 2xl:max-w-[1800px] mx-auto flex flex-col items-center justify-center h-full min-h-0">
        
        {/* Top Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl 2xl:max-w-5xl flex-shrink-0 mb-6 sm:mb-10 2xl:mb-14"
        >
          <h2 className="text-[9px] sm:text-[10px] 2xl:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#A39B92] mb-3 sm:mb-4 2xl:mb-6 font-light drop-shadow-md">
            Здесь важен не только результат, но и его основание
          </h2>
          <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl 2xl:leading-[1.7] font-light leading-relaxed text-[#EAEADF] text-balance mb-0 max-w-3xl 2xl:max-w-4xl mx-auto px-4">
            На платформе работа существует не как случайная картинка в ленте, а как результат, у которого есть источник, исторический контекст, сравнение с оригиналом, оценка сообщества, экспертный вклад, Индекс соответствия и обратная связь по проблемным зонам.
          </p>
        </motion.div>

        {/* Central Product Mockup Area - Hybrid Product Media */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative flex flex-col items-center flex-1 min-h-0 justify-center mb-8 sm:mb-12 2xl:mb-16"
        >
          {/* Main Case-Canvas */}
          <div className="w-full max-w-4xl lg:max-w-5xl 2xl:max-w-[1300px] h-full max-h-[460px] sm:max-h-[500px] lg:max-h-[600px] 2xl:max-h-[750px] relative rounded-xl sm:rounded-2xl lg:rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-[#2A2621]/60 bg-[#12100E] group">
            
            {/* The Image (Reconstruction) */}
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1669413542695-2cd33b903367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbWVkaWV2YWwlMjBhcmNoaXRlY3R1cmUlMjByZWNvbnN0cnVjdGlvbiUyMDNkfGVufDF8fHx8MTc3NjQ0Mjc3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Historical Reconstruction Case Study"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[3s] ease-out"
            />
            
            {/* Inner shadows / Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-[#0A0908]/10 to-[#0A0908]/50 pointer-events-none" />
            <div className="absolute inset-0 border border-white/5 mix-blend-overlay pointer-events-none rounded-xl sm:rounded-2xl lg:rounded-[32px]" />

            {/* PRODUCT LAYER MARKERS */}

            {/* 1. Источник (Source) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 flex items-center gap-2 sm:gap-3 bg-[#0A0908]/80 backdrop-blur-md border border-[#2A2621] rounded-lg sm:rounded-xl p-1.5 sm:p-2 pr-3 sm:pr-4 shadow-xl"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded border border-white/10 bg-[#161412] overflow-hidden flex-shrink-0 hidden sm:block">
                <ImageWithFallback src="https://images.unsplash.com/photo-1720264715239-29338d845802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcnVpbmVkJTIwYXJ0aWZhY3QlMjBhcnRpZmFjdCUyMG1hbnVzY3JpcHR8ZW58MXx8fHwxNzc2NDQyNzc4fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Source" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
              </div>
              <div className="flex flex-col justify-center px-1">
                <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-[#A39B92] uppercase tracking-widest mb-0.5">
                  <Database className="w-2.5 h-2.5" /> Источник
                </div>
                <div className="text-[10px] sm:text-xs text-[#EAEADF] font-mono leading-none">OBJ-742-A</div>
              </div>
            </motion.div>

            {/* 2. Сравнение с оригиналом (Comparison) */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-6 lg:top-8 bg-[#0A0908]/80 backdrop-blur-md border border-[#2A2621] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 sm:gap-3 shadow-xl"
            >
              <SplitSquareHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A39B92]" />
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#EAEADF] uppercase tracking-widest whitespace-nowrap">Diff Mode</span>
              <div className="w-6 h-3 sm:w-8 sm:h-4 bg-[#161412] rounded-full p-0.5 border border-[#2A2621] flex">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#905E26] rounded-full" />
              </div>
            </motion.div>

            {/* 3. Экспертный вклад (Expert Input) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 bg-gradient-to-br from-[#12100E]/90 to-[#0A0908]/90 backdrop-blur-md border border-[#905E26]/30 rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-[0_0_30px_rgba(144,94,38,0.15)]"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#905E26]/20 flex items-center justify-center border border-[#905E26]/40">
                <Verified className="w-3 h-3 sm:w-4 sm:h-4 text-[#F5EC9B]" />
              </div>
              <div className="flex flex-col justify-center px-1">
                <div className="text-[8px] sm:text-[9px] text-[#F5EC9B] uppercase tracking-widest mb-0.5">Верификация</div>
                <div className="text-[9px] sm:text-[10px] lg:text-xs text-[#EAEADF] leading-none">Редакционный совет</div>
              </div>
            </motion.div>

            {/* 4. Индекс соответствия (Match Index) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-8 bg-[#0A0908]/90 backdrop-blur-xl border border-[#2A2621] rounded-xl p-3 sm:p-4 lg:p-5 flex flex-col items-center shadow-2xl"
            >
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-[#A39B92] uppercase tracking-widest mb-2 sm:mb-3 whitespace-nowrap">Match Index</span>
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="50%" cy="50%" r="42%" stroke="#161412" strokeWidth="3" fill="none" />
                  <motion.circle cx="50%" cy="50%" r="42%" stroke="#905E26" strokeWidth="3" fill="none" 
                    strokeDasharray="264" 
                    initial={{ strokeDashoffset: 264 }}
                    whileInView={{ strokeDashoffset: 26 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1.6, ease: "easeOut" }}
                  />
                </svg>
                <div className="flex items-baseline relative z-10">
                  <span className="text-sm sm:text-lg lg:text-xl text-[#EAEADF] font-light">94</span>
                  <span className="text-[8px] sm:text-[10px] lg:text-xs text-[#8A837A] ml-0.5">%</span>
                </div>
              </div>
            </motion.div>

            {/* 5. Исторический контекст */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 bg-[#0A0908]/80 backdrop-blur-md border border-[#2A2621] rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 max-w-[160px] sm:max-w-[220px] shadow-xl"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <History className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#905E26]" />
                <span className="text-[8px] sm:text-[9px] text-[#905E26] uppercase tracking-widest">Контекст</span>
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-xs text-[#A39B92] leading-relaxed line-clamp-2 sm:line-clamp-3">
                Реконструкция на базе архивных чертежей и гравировок XV века.
              </div>
            </motion.div>

            {/* 6. Обратная связь / Problem Zones */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 1.8 }}
              className="absolute bottom-[20%] right-1/4 sm:bottom-[30%] sm:right-[35%] flex items-center gap-2"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-full animate-ping" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full border-2 border-white/80 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              </div>
              <div className="bg-[#0A0908]/90 backdrop-blur-md border border-red-500/30 rounded-md sm:rounded-lg px-2 py-1.5 flex items-center gap-1.5 shadow-lg hidden sm:flex">
                <AlertCircle className="w-3 h-3 text-red-400" />
                <span className="text-[8px] sm:text-[9px] text-red-400 uppercase tracking-wider">Узел крепления</span>
              </div>
            </motion.div>

            {/* 7. Оценка сообщества */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 2.0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 lg:bottom-8 bg-[#0A0908]/90 backdrop-blur-md border border-[#2A2621] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-3 sm:gap-4 shadow-xl"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A39B92]" />
                <span className="text-[9px] sm:text-[10px] lg:text-xs text-[#EAEADF] font-mono">1.2k</span>
              </div>
              <div className="w-[1px] h-3 sm:h-4 bg-[#2A2621]" />
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[8px] sm:text-[9px] text-[#A39B92] uppercase tracking-widest hidden sm:inline">Оценка</span>
                <div className="flex gap-0.5 sm:gap-1">
                  <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-[#F5EC9B] rounded-sm" />
                  <div className="w-0.5 sm:w-1 h-2.5 sm:h-3.5 bg-[#F5EC9B] rounded-sm" />
                  <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-[#F5EC9B] rounded-sm" />
                  <div className="w-0.5 sm:w-1 h-3.5 sm:h-5 bg-[#F5EC9B] rounded-sm" />
                  <div className="w-0.5 sm:w-1 h-2.5 sm:h-3.5 bg-[#A39B92] rounded-sm opacity-50" />
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Bottom Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl 2xl:max-w-4xl flex-shrink-0"
        >
          <p className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl text-[#F5EC9B] font-light tracking-wide text-balance drop-shadow-lg">
            Мы хотим, чтобы ценность работы определялась не шумом, а качеством.
          </p>
        </motion.div>
        
        {/* Progress / Step indicator at bottom */}
        <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-12 flex items-center gap-4 z-20 pointer-events-none hidden sm:flex">
          <span className="text-[10px] uppercase tracking-widest text-[#A39B92]">04</span>
          <div className="w-12 h-[1px] bg-white/10">
            <div className="w-full h-full bg-[#905E26] origin-left" />
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 z-20 flex flex-col items-center justify-center opacity-60 pointer-events-none hidden sm:flex"
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
    </div>
  );
}