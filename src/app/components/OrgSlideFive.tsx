import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown, FileText, SplitSquareHorizontal, FileSearch, Box, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';

const CONTENT_LAYERS = [
  { id: '1', title: 'Оригинал или исходный материал', icon: Box, delay: 0.4 },
  { id: '2', title: 'Реконструкция', icon: Box, delay: 0.6 },
  { id: '3', title: 'Описание и исторический контекст', icon: FileText, delay: 0.8 },
  { id: '4', title: 'Связанные метаданные', icon: FileSearch, delay: 1.0 },
  { id: '5', title: 'Режим сравнения «до/после»', icon: SplitSquareHorizontal, delay: 1.2 },
  { id: '6', title: 'Показатели качества и статусы', icon: Activity, delay: 1.4 },
];

export function OrgSlideFive() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#090807]">
      {/* Noise */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay w-full min-h-[100svh] z-0">
        <filter id="noise_org_5">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_org_5)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#A39B92]/25 text-[#A39B92] bg-[#A39B92]/5">
        Структурированная работа
      </SlideEyebrow>

      <div
        ref={sceneRef}
        className="relative z-20 w-full max-w-[90vw] mx-auto min-h-[100svh] flex flex-col px-[2vw] pt-[8vh] pb-[5vh]"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mb-[6vh] text-center"
        >
          <h2 className="mx-auto max-w-[70vw] pr-36 text-[clamp(1.35rem,3.5vh,3.25rem)] font-light leading-[1.12] text-[#EAEADF] tracking-tight text-balance sm:pr-44 lg:pr-52">
            Публикуется не просто изображение, а{' '}
            <span className="text-[#A39B92]">структурированная работа</span>
          </h2>
        </motion.div>

        {/* Central Content Structure */}
        <div className="flex-1 min-h-0 w-full flex flex-col lg:flex-row items-center justify-center gap-[4vw] mb-[4vh]">
          {/* Visual Display (Left) */}
          <motion.div
            initial={{ opacity: 0, x: '-4vw' }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-4vw' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[45vw] aspect-[16/9] flex items-center justify-center bg-[#0A0908] border border-white/[0.05] rounded-[2vh] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden z-20"
          >
            {/* Split Screen Concept */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full border-r border-white/[0.1] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1766415007388-ce128e47fbe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbWFudXNjcmlwdCUyMGRvY3VtZW50JTIwYXJjaGl2ZXxlbnwxfHx8fDE3NzY0NDg5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Original"
                  className="w-full h-full object-cover opacity-30 grayscale"
                />
                <div className="absolute bottom-[2vh] left-[2vw] px-[1vw] py-[0.5vh] rounded-md bg-[#0A0908]/80 text-[#A39B92] font-mono text-[clamp(8px,1vh,12px)] tracking-widest uppercase">
                  Источник
                </div>
              </div>
              <div className="w-1/2 h-full relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770910196320-59fc1254680e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwYXJ0aWZhY3QlMjBtdXNldW0lMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NzY0NDg5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Reconstruction"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute bottom-[2vh] right-[2vw] px-[1vw] py-[0.5vh] rounded-md bg-[#D5A86B]/20 border border-[#D5A86B]/30 text-[#D5A86B] font-mono text-[clamp(8px,1vh,12px)] tracking-widest uppercase">
                  Реконструкция
                </div>
              </div>
            </div>

            {/* Floating Metadata Mockup Box */}
            <motion.div
              initial={{ opacity: 0, y: '2vh' }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="absolute top-[4vh] left-[4vw] bg-[#0A0908]/90 backdrop-blur-xl border border-white/[0.08] p-[1.5vh] rounded-[1vh] shadow-2xl max-w-[15vw]"
            >
              <div className="flex items-center gap-[1vw] mb-[1vh]">
                <FileSearch className="w-[1.5vh] h-[1.5vh] text-[#A39B92]" />
                <span className="text-[#A39B92] font-mono text-[clamp(8px,1vh,12px)] uppercase tracking-widest">Metadata</span>
              </div>
              <div className="space-y-[0.8vh]">
                <div className="h-[0.4vh] w-full bg-white/[0.1] rounded-full" />
                <div className="h-[0.4vh] w-3/4 bg-white/[0.05] rounded-full" />
                <div className="h-[0.4vh] w-1/2 bg-[#D5A86B]/40 rounded-full mt-[1vh]" />
              </div>
            </motion.div>
          </motion.div>

          {/* List of layers (Right) */}
          <div className="flex-1 max-w-[40vw] flex flex-col justify-center gap-[2vh]">
            <h3 className="text-[clamp(14px,2vh,24px)] text-[#D5CCC3] font-light mb-[2vh] tracking-wide">
              Внутри платформы работа может включать:
            </h3>
            {CONTENT_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: '2vw' }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '2vw' }}
                  transition={{ duration: 0.9, delay: layer.delay, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-[1.5vw] p-[1.5vh] rounded-[1vh] hover:bg-white/[0.02] border border-transparent hover:border-white/[0.05] transition-colors"
                >
                  <div className="p-[1vh] bg-[#0A0908] border border-white/[0.08] rounded-md shadow-md">
                    <Icon className="w-[clamp(14px,2vh,20px)] h-[clamp(14px,2vh,20px)] text-[#8A837A]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[clamp(12px,1.6vh,20px)] text-[#A39B92] font-light leading-relaxed">
                    {layer.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, delay: 1.6, ease: 'easeOut' }}
          className="flex-shrink-0 flex justify-center pt-[3vh] border-t border-white/[0.05] mt-auto"
        >
          <p className="text-[clamp(12px,1.6vh,20px)] text-[#D5CCC3] font-light tracking-wide text-center max-w-[70vw]">
            Это делает материал более пригодным не только для просмотра, но и для дальнейшей <span className="text-[#D5A86B]">культурной, образовательной и презентационной</span> работы.
          </p>
        </motion.div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-[5vh] left-[2vw] flex items-center gap-[1vw] z-20 pointer-events-none hidden sm:flex">
        <span className="text-[clamp(10px,1.2vh,14px)] uppercase tracking-widest text-[#A39B92]">05</span>
        <div className="w-[4vw] h-[1px] bg-white/10">
          <div className="w-full h-full bg-[#905E26] origin-left" />
        </div>
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
    </div>
  );
}