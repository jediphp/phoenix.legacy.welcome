'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Props = {
  src: string;
  alt: string;
};

export function SlideBottomScreenshot({ src, alt }: Props) {
  return (
    <motion.div
      className="w-full flex flex-col justify-end min-h-0 flex-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full h-[min(38vh,420px)] sm:h-[min(42vh,480px)] lg:h-[min(46vh,520px)] rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0908]/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain object-center sm:object-bottom bg-[#0A0908]"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070605]/50 via-transparent to-[#070605]/15" />
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#5A8F7A]/80 font-mono">
          Карточка оригинала
        </span>
      </div>
    </motion.div>
  );
}
