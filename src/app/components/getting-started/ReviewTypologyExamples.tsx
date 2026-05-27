'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import type { WorkTypologyExample } from '@/src/content/getting-started/slides';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ImageLightbox } from './ImageLightbox';

type Props = {
  examples: WorkTypologyExample[];
};

export function ReviewTypologyExamples({ examples }: Props) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="flex flex-row gap-3 sm:gap-4 lg:gap-5 w-full h-[min(52vh,520px)] sm:h-[min(58vh,600px)] lg:h-[min(62vh,680px)]">
        {examples.map((example, idx) => {
          const isPreferred = example.intent === 'preferred';

          return (
            <motion.article
              key={example.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-1 min-w-0 flex-col h-full rounded-2xl border p-2.5 sm:p-3 backdrop-blur-md ${
                isPreferred
                  ? 'border-[#5A8F7A]/35 bg-[#5A8F7A]/[0.05]'
                  : 'border-white/[0.08] bg-[#0D0B09]/40'
              }`}
            >
              <button
                type="button"
                onClick={() => setLightbox({ src: example.image, alt: example.title })}
                aria-label={`Увеличить: ${example.title}`}
                className={`relative flex-1 min-h-0 w-full rounded-xl overflow-hidden border bg-[#12100E] text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] transition-[border-color,box-shadow] ${
                  isPreferred
                    ? 'border-[#2A3D35]/80 hover:border-[#5A8F7A]/45 focus-visible:ring-[#5A8F7A]/55'
                    : 'border-[#2A2621]/60 hover:border-white/20 focus-visible:ring-white/30'
                }`}
              >
                <ImageWithFallback
                  src={example.image}
                  alt=""
                  role="presentation"
                  className="pointer-events-none absolute inset-0 w-full h-full object-contain object-center opacity-88 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070605]/70 via-transparent to-[#070605]/25 pointer-events-none opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                <span
                  className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-mono px-2 py-0.5 rounded-full border backdrop-blur-sm pointer-events-none ${
                    isPreferred
                      ? 'border-[#5A8F7A]/45 text-[#C8E6D8] bg-[#5A8F7A]/25'
                      : 'border-white/15 text-[#A39B92] bg-black/35'
                  }`}
                >
                  {example.tag}
                </span>
              </button>

              <div className="flex-shrink-0 pt-2.5 sm:pt-3 px-0.5">
                <h3 className="text-xs sm:text-sm font-light text-[#EAEADF] leading-snug mb-1">
                  {example.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#8A837A] font-light leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {example.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
