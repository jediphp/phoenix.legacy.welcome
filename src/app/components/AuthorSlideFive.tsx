'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { ArrowDown, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const COLUMNS = [
  {
    id: "01",
    tag: "РЕСТАВРАЦИЯ",
    title: "Реставрационная",
    subtitle: "работа",
    desc: "Бережное восстановление того, что уже дано источником.",
    img: "/images/author-flow/slide-05/typology-restore.jpg",
    color: "#EAEADF"
  },
  {
    id: "02",
    tag: "РЕКОНСТРУКЦИЯ",
    title: "Реконструкционная",
    subtitle: "работа",
    desc: "Воссоздание утраченных или неясных элементов с опорой на источник, аналоги и историческую логику.",
    img: "/images/author-flow/slide-05/typology-reconstruct.jpg",
    color: "#F5EC9B"
  },
  {
    id: "03",
    tag: "ГЕНЕРАЦИЯ",
    title: "Генеративная",
    subtitle: "работа",
    desc: "Более свободная визуальная интерпретация по мотивам исторической темы.",
    img: "/images/author-flow/slide-05/typology-generate.jpg",
    color: "#905E26"
  }
];

export function AuthorSlideFive() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden font-sans snap-start slide-shell py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-12 2xl:px-24">
      {/* Background is removed so that the global presentation mouse glow can shine through from beneath */}
      
      {/* Noise filter */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_5">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_5)" />
      </svg>

      <SlideEyebrow toneClassName="border-[#905E26]/30 text-[#A39B92] bg-[#905E26]/5">Типология результата</SlideEyebrow>

      <div className="relative z-20 w-full max-w-[1400px] 2xl:max-w-[2000px] mx-auto flex flex-col items-center justify-center h-full min-h-0 pt-[6vh]">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex-shrink-0 mb-8 sm:mb-10 lg:mb-14 2xl:mb-20 w-full px-2 sm:px-8"
        >
          <h2 className="mx-auto w-full max-w-4xl text-lg sm:text-2xl lg:text-3xl 2xl:text-[2.85rem] font-light leading-[1.2] text-[#EAEADF] tracking-tight drop-shadow-xl text-balance">
            Не все ИИ-результаты одинаковы по своей природе
          </h2>
        </motion.div>

        {/* The 3 Columns - Editorial Comparison Layout */}
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 2xl:gap-14 flex-1 min-h-0 justify-center">
          {COLUMNS.map((col, idx) => (
            <motion.div 
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 + idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col group relative bg-[#070605]/40 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/5 p-4 sm:p-5 2xl:p-8 hover:border-white/10 transition-colors duration-700"
            >
              {/* Image Block — клик открывает полноэкранный просмотр */}
              <button
                type="button"
                onClick={() => setLightbox({ src: col.img, alt: col.title })}
                aria-label={`Открыть изображение: ${col.title}`}
                className="relative w-full aspect-square max-h-[20vh] sm:max-h-[22vh] lg:max-h-[24vh] 2xl:max-h-[26vh] rounded-xl sm:rounded-2xl overflow-hidden border border-[#2A2621]/60 shadow-2xl mb-4 sm:mb-6 2xl:mb-10 bg-[#12100E] text-left cursor-pointer hover:cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#905E26]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] transition-[border-color,box-shadow] hover:border-[#905E26]/35"
              >
                <ImageWithFallback 
                  src={col.img}
                  alt=""
                  role="presentation"
                  className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-[#0A0908]/10 to-[#0A0908]/50 pointer-events-none transition-opacity duration-1000 group-hover:opacity-50" />
                
                {/* Overlay Tags */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 2xl:top-8 2xl:left-8 flex items-center gap-2 sm:gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <span className="text-fluid-caption text-fluid-label text-fluid-label font-mono text-[#A39B92]">{col.id}</span>
                  <div className="w-3 sm:w-4 h-[1px] bg-[#905E26]" />
                  <span className="text-fluid-caption text-fluid-caption text-fluid-label uppercase tracking-[0.2em]" style={{ color: col.color }}>{col.tag}</span>
                </div>
              </button>

              {/* Text Block */}
              <div className="flex flex-col flex-shrink-0 text-left h-auto">
                <div className="flex items-baseline gap-2 mb-2 sm:mb-3 2xl:mb-4">
                  <h3 className="text-xl sm:text-2xl 2xl:text-4xl font-light text-[#EAEADF] leading-[1.2]">
                    {col.title}
                  </h3>
                </div>
                <span className="text-fluid-label text-fluid-label 2xl:text-sm text-[#A39B92] uppercase tracking-[0.2em] font-light mb-3 sm:mb-4 2xl:mb-6 block opacity-70">
                  {col.subtitle}
                </span>
                <p className="text-fluid-label sm:text-sm 2xl:text-xl text-[#8A837A] font-light leading-relaxed">
                  {col.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full max-w-4xl mx-auto flex-shrink-0 mt-8 sm:mt-10 lg:mt-14 2xl:mt-20 pb-[6vh]"
        >
          <p className="text-base sm:text-lg lg:text-xl 2xl:text-3xl text-[#D5CCC3] font-light tracking-wide text-balance leading-relaxed">
            Для нас важно различать не только силу картинки, но и <span className="text-[#F5EC9B]">природу самой работы</span>.
          </p>
        </motion.div>

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
      <SlideFooter step="05" />

      {portalReady &&
        lightbox &&
        createPortal(
          <div
            className="fixed inset-0 isolate flex items-center justify-center bg-[#070605]/95 p-4 sm:p-8 backdrop-blur-md"
            style={{ zIndex: 999_999 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label="Закрыть"
              className="absolute right-4 top-4 z-[2] rounded-full border border-white/15 bg-[#0A0908]/90 p-2.5 text-[#EAEADF] shadow-lg transition-colors hover:border-[#905E26]/40 hover:text-white"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="relative z-[1] max-h-[min(100dvh,100svh)] max-w-full object-contain select-none"
            />
          </div>,
          document.body,
        )}
    </div>
  );
}