import { motion } from 'motion/react';
import { Database, Image as ImageIcon, ScanSearch, CheckCircle2, ShieldCheck, DownloadCloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideFooter } from './SlideFooter';

export function AuthorSlideThree() {
  const flowSteps = [
    { label: 'Оригинал', icon: Database, bg: 'bg-[#905E26]/10', border: 'border-[#905E26]/20' },
    { label: 'Реконструкция', icon: ImageIcon, bg: 'bg-[#905E26]/10', border: 'border-[#905E26]/20' },
    { label: 'Оценка', icon: ScanSearch, bg: 'bg-[#EAEADF]/5', border: 'border-[#EAEADF]/10' },
    { label: 'Качество', icon: CheckCircle2, bg: 'bg-[#EAEADF]/5', border: 'border-[#EAEADF]/10' },
    { label: 'Доверие', icon: ShieldCheck, bg: 'bg-[#EAEADF]/10', border: 'border-[#EAEADF]/20' },
    { label: 'Использование', icon: DownloadCloud, bg: 'bg-[#EAEADF]/10', border: 'border-[#EAEADF]/20' },
  ];

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden font-sans snap-start slide-shell py-8 sm:py-16 px-4 sm:px-8">
      
      {/* Background with deep graphite and warm light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0B09]/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#905E26]/10 via-transparent to-transparent opacity-60 mix-blend-screen blur-3xl" />
      </div>

      {/* Noise filter */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_3">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_3)" />
      </svg>

      <div className="relative z-20 mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col items-center justify-center">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 max-w-5xl flex-shrink-0 text-center sm:mb-8"
        >
          <h2 className="text-fluid-caption text-fluid-label tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#F5EC9B] mb-2 sm:mb-4 font-light drop-shadow-md">
            Это не генератор картинок
          </h2>
          <p className="mx-auto mb-0 max-w-4xl px-2 text-base font-light leading-relaxed text-[#EAEADF] text-balance sm:px-4 sm:text-lg lg:text-xl">
            Феникс.Наследие — это платформа для публикации исторических реконструкций, привязки результата к оригиналу и контексту, оценки качества и соответствия источнику, верификации сильных работ и контролируемого использования.
          </p>
        </motion.div>

        {/* Systemic Explanatory Media (Cards Layer System) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex min-h-0 w-full flex-1 flex-col items-center justify-center sm:mb-8"
        >
          {/* Mockup Container for Platform Logic - Hybrid Layout */}
          <div className="relative flex h-full min-h-0 w-full max-w-6xl flex-col justify-center overflow-hidden rounded-2xl border border-[#2A2621]/50 bg-gradient-to-br from-[#12100E] to-[#0A0908] p-4 shadow-2xl backdrop-blur-xl group max-h-[760px] sm:rounded-[32px] sm:p-6 lg:p-8">
            
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#905E26]/50 to-transparent opacity-50" />
            
            {/* Decorative Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-5"
                 style={{ backgroundImage: 'linear-gradient(#EAEADF 1px, transparent 1px), linear-gradient(90deg, #EAEADF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch h-full min-h-0">
              
              {/* Media Placeholders (Original vs Reconstruction) */}
              <div className="flex flex-row md:flex-col gap-3 sm:gap-4 h-full min-h-0">
                <div className="flex-1 relative rounded-xl overflow-hidden border border-[#2A2621] bg-[#161412] group-hover:border-[#905E26]/30 transition-colors duration-500 min-h-[80px]">
                  <div className="absolute inset-0 bg-[#EAEADF]/5 flex items-center justify-center z-10 pointer-events-none">
                    <span className="text-fluid-caption text-fluid-label uppercase tracking-widest text-[#A39B92] font-light bg-[#070605]/60 px-2 py-1 rounded backdrop-blur-sm">Скан оригинала</span>
                  </div>
                  {/* Image Placeholder */}
                  <ImageWithFallback 
                    src="/images/author-flow/slide-03/original-scan-manuscript.jpg"
                    alt="Original scan placeholder"
                    className="absolute inset-0 w-full h-full object-cover object-bottom opacity-40 mix-blend-luminosity"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-[#070605]/80 backdrop-blur-md px-2 py-1 rounded-full border border-white/5 text-fluid-micro text-fluid-caption text-[#A39B92] tracking-wider uppercase z-20">
                    <Database className="w-2.5 h-2.5" />
                    <span className="hidden sm:inline">ID_SOURCE:</span> 1042
                  </div>
                </div>
                
                <div className="flex-1 relative rounded-xl overflow-hidden border border-[#2A2621] bg-[#161412] group-hover:border-[#905E26]/40 transition-colors duration-500 min-h-[80px]">
                  <div className="absolute inset-0 bg-[#EAEADF]/5 flex items-center justify-center z-10 pointer-events-none">
                    <span className="text-fluid-caption text-fluid-label uppercase tracking-widest text-[#EAEADF] font-light bg-[#070605]/60 px-2 py-1 rounded backdrop-blur-sm shadow-[0_0_10px_rgba(144,94,38,0.2)]">Реконструкция</span>
                  </div>
                  {/* Image Placeholder */}
                  <ImageWithFallback 
                    src="/images/author-flow/slide-03/reconstruction-museum-art.jpg"
                    alt="Reconstruction placeholder"
                    className="absolute inset-0 w-full h-full object-cover object-bottom opacity-60"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-[#070605]/80 backdrop-blur-md px-2 py-1 rounded-full border border-[#905E26]/30 text-fluid-micro text-fluid-caption text-[#EAEADF] tracking-wider uppercase shadow-[0_0_15px_rgba(144,94,38,0.2)] z-20">
                    <ImageIcon className="w-2.5 h-2.5 text-[#905E26]" />
                    <span className="hidden sm:inline">Авторская работа</span>
                  </div>
                </div>
              </div>

              {/* Product Logic Data Layer */}
              <div className="flex flex-col justify-center h-full gap-3 sm:gap-4 lg:gap-6 min-h-0">
                <div className="bg-[#161412]/80 backdrop-blur-sm border border-[#2A2621] rounded-xl p-4 relative flex-1 flex flex-col justify-center min-h-[80px]">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#905E26]/10 to-transparent rounded-tr-xl pointer-events-none" />
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <div className="p-1.5 sm:p-2 bg-[#905E26]/20 rounded-lg text-[#F5EC9B]">
                      <ScanSearch className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-fluid-caption tracking-widest uppercase text-[#A39B92]">Индекс соответствия</span>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#EAEADF] mb-1">
                    94<span className="text-sm sm:text-base text-[#8A837A]">%</span>
                  </div>
                  <div className="w-full h-1 bg-[#2A2621] rounded-full overflow-hidden mt-1 sm:mt-2">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#905E26] to-[#F5EC9B]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "94%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="bg-[#161412]/80 backdrop-blur-sm border border-[#2A2621] rounded-xl p-4 flex-1 flex flex-col justify-center min-h-[240px]">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-fluid-caption tracking-widest uppercase text-[#A39B92]">Статус верификации</span>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <div className="flex justify-between items-center text-fluid-caption text-fluid-label">
                      <span className="text-[#8A837A]">Оценка сообщества</span>
                      <span className="text-[#EAEADF]">4.8</span>
                    </div>
                    <div className="flex justify-between items-center text-fluid-caption text-fluid-label">
                      <span className="text-[#8A837A]">Соответствие эпохе</span>
                      <span className="text-[#EAEADF]">4 из 5</span>
                    </div>
                    <div className="flex justify-between items-center text-fluid-caption text-fluid-label">
                      <span className="text-[#8A837A]">Качество деталей</span>
                      <span className="text-[#EAEADF]">5 из 5</span>
                    </div>
                    <div className="flex justify-between items-center text-fluid-caption text-fluid-label">
                      <span className="text-[#8A837A]">Реализм</span>
                      <span className="text-[#EAEADF]">5 из 5</span>
                    </div>
                    <div className="flex justify-between items-center text-fluid-caption text-fluid-label">
                      <span className="text-[#8A837A]">Тепловая карта</span>
                      <span className="text-[#EAEADF]">Доступна</span>
                    </div>
                    <div className="flex justify-between items-center text-fluid-caption text-fluid-label pt-1.5 sm:pt-2 border-t border-[#2A2621]">
                      <span className="text-[#8A837A]">Права использования</span>
                      <span className="text-[#F5EC9B]">Социальное некоммерческое</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>

        {/* Linear Process / Formula */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl flex-shrink-0"
        >
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-4 lg:gap-6">
                <div className={`flex flex-col items-center gap-1.5 sm:gap-2 group`}>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${step.bg} ${step.border}`}>
                    <step.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${index < 2 ? 'text-[#905E26]' : 'text-[#A39B92] group-hover:text-[#EAEADF]'} transition-colors duration-500`} />
                  </div>
                  <span className="text-fluid-micro text-fluid-caption text-fluid-caption tracking-widest uppercase text-[#8A837A] font-light group-hover:text-[#EAEADF] transition-colors duration-300">
                    {step.label}
                  </span>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="w-3 sm:w-6 lg:w-8 h-[1px] bg-gradient-to-r from-[#2A2621] via-[#4A433A] to-[#2A2621] -mt-4 sm:-mt-5 lg:-mt-6" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <SlideFooter step="03" />
    </div>
  );
}
