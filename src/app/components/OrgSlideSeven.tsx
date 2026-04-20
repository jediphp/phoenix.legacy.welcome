import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, Package, FileImage, LayoutTemplate, Library } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const EXPORT_PACKAGES = [
  { id: '01', title: 'Цифровая публикация', desc: 'Базовый пакет метаданных и изображений для онлайн-платформ', icon: FileImage },
  { id: '02', title: 'Сравнение «Оригинал / Реконструкция»', desc: 'Подготовленные материалы для демонстрации изменений', icon: LayoutTemplate },
  { id: '03', title: 'Презентационный пакет', desc: 'Кураторская сборка для внутренних обсуждений и докладов', icon: Package },
  { id: '04', title: 'Расширенный тематический пакет', desc: 'Комплексный набор объектов, объединенных контекстом эпохи', icon: Library },
];

export function OrgSlideSeven() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#090807]">
      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_7">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_7)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#A39B92]/25 text-[#A39B92] bg-[#A39B92]/5">Экспорт и материалы</SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto min-h-[100svh] flex flex-col px-[2vw] pt-[8vh] pb-[5vh]"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[5vh] text-center"
        >
          <h2 className="mx-auto max-w-[75vw] pr-36 text-[clamp(1.35rem,3.5vh,3.25rem)] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance sm:pr-44 lg:pr-52">
            Организация должна получать не хаотичный набор файлов,{' '}
            <span className="text-[#A39B92]">а понятный пакет</span>
          </h2>
        </motion.div>

        {/* Central Content */}
        <div className="flex-1 min-h-0 w-full flex flex-col lg:flex-row items-center justify-center gap-[4vw] mb-[4vh]">
          {/* Main Visual Assembly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full lg:w-[45vw] aspect-[4/3] flex items-center justify-center bg-[#0A0908] border border-white/[0.05] rounded-[2vh] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden z-20"
          >
            {/* Background Texture */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770910200099-745991a725de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9uJTIwYXJ0aWZhY3RzJTIwY3VyYXRpb258ZW58MXx8fHwxNzc2NDQ5MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Curated Collection"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0908]/90 via-[#0A0908]/50 to-[#0A0908]/80" />

            {/* Stylized Pack UI */}
            <div className="relative z-10 w-[80%] h-[70%] bg-[#0D0C0B]/90 backdrop-blur-md rounded-[1.5vh] border border-[#D5A86B]/20 p-[2vh] shadow-2xl flex flex-col justify-between">
              <div className="flex justify-between items-start mb-[2vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="p-[0.8vh] bg-[#D5A86B]/10 rounded-md">
                    <Package className="w-[clamp(16px,2vh,24px)] h-[clamp(16px,2vh,24px)] text-[#D5A86B]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[clamp(12px,1.6vh,20px)] text-[#EAEADF] font-light">Curated Package_v1.0</h4>
                    <span className="text-[clamp(8px,1.2vh,14px)] text-[#6B645D] font-mono tracking-widest uppercase">Verified Assets</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex gap-[1.5vw]">
                {/* Mockup list of items in pack */}
                <div className="flex-1 space-y-[1.5vh]">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-[1vw] p-[1vh] rounded-md bg-white/[0.02] border border-white/[0.05]">
                      <div className="w-[clamp(24px,3vh,36px)] aspect-square bg-[#1A1816] rounded-sm flex-shrink-0" />
                      <div className="flex-1">
                        <div className="h-[0.5vh] w-[60%] bg-white/[0.1] rounded-full mb-[0.5vh]" />
                        <div className="h-[0.4vh] w-[40%] bg-white/[0.05] rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Side Summary */}
                <div className="w-[30%] flex flex-col justify-between p-[1.5vh] bg-[#0A0908] rounded-[1vh] border border-white/[0.05]">
                  <div className="space-y-[1.5vh]">
                    <div>
                      <span className="text-[#6B645D] text-[clamp(7px,1vh,12px)] uppercase tracking-widest font-mono block mb-[0.5vh]">Status</span>
                      <div className="h-[0.4vh] w-full bg-white/[0.05] rounded-full overflow-hidden">
                         <div className="h-full w-full bg-[#D5A86B]/50" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[#6B645D] text-[clamp(7px,1vh,12px)] uppercase tracking-widest font-mono block mb-[0.5vh]">License</span>
                      <div className="h-[0.4vh] w-[80%] bg-white/[0.05] rounded-full overflow-hidden">
                         <div className="h-full w-full bg-[#D5A86B]/50" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-[1vh] border border-[#D5A86B]/30 rounded-md text-center text-[#D5A86B] font-mono text-[clamp(8px,1vh,12px)] uppercase tracking-widest">
                    Ready
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The 4 Packages Right side list */}
          <div className="flex-1 max-w-[40vw] grid grid-cols-1 sm:grid-cols-2 gap-[2vh]">
            {EXPORT_PACKAGES.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, x: '2vw' }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '2vw' }}
                  transition={{ duration: 0.9, delay: 0.4 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="p-[2vh] rounded-[1.5vh] bg-[#0A0908] border border-white/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:border-[#D5A86B]/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-[1.5vh]">
                    <div className="p-[1vh] rounded-[1vh] bg-[#0D0C0B] border border-white/[0.08] group-hover:border-[#D5A86B]/30 transition-colors">
                      <Icon className="w-[clamp(14px,2vh,20px)] h-[clamp(14px,2vh,20px)] text-[#8A837A] group-hover:text-[#D5A86B] transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[#3A3530] font-mono text-[clamp(8px,1.2vh,14px)]">{pkg.id}</span>
                  </div>
                  <h3 className="text-[clamp(12px,1.6vh,18px)] text-[#D5CCC3] font-light mb-[1vh] leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="text-[clamp(10px,1.4vh,16px)] text-[#6B645D] font-light leading-relaxed">
                    {pkg.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
          className="flex-shrink-0 flex justify-center pt-[3vh] border-t border-white/[0.05] mt-auto"
        >
          <p className="text-[clamp(12px,1.6vh,20px)] text-[#EAEADF] font-light tracking-wide text-center max-w-[80vw]">
            Состав пакета зависит от качества работы, цели использования, атрибуции и <span className="text-[#D5A86B]">правового статуса</span> материалов.
          </p>
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
      <SlideFooter step="07" />
    </div>
  );
}