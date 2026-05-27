'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Compass } from 'lucide-react';
import { START_PATH_STEPS } from '@/src/content/getting-started/slides';

type Props = {
  isDimmed: boolean;
  onHover: (active: boolean) => void;
};

export function StartHomeCard({ isDimmed, onHover }: Props) {
  const router = useRouter();

  return (
    <motion.button
      type="button"
      onClick={() => router.push('/start')}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      animate={{ opacity: isDimmed ? 0.45 : 1, scale: isDimmed ? 0.98 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full max-w-xl lg:max-w-2xl text-center cursor-pointer z-20"
    >
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5A8F7A]/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0D0B09]/40 backdrop-blur-sm px-6 sm:px-10 py-8 sm:py-10 transition-colors duration-500 group-hover:border-[#5A8F7A]/25 group-hover:bg-[#0D0B09]/60">
        <div className="flex flex-col items-center">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#5A8F7A]/30 bg-[#5A8F7A]/10 text-[#C8E6D8]">
            <Compass className="h-5 w-5" strokeWidth={1.5} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-light text-[#EAEADF] mb-3 group-hover:text-[#C8E6D8] transition-colors duration-500 text-balance">
            С чего начать
          </h2>

          <p className="text-sm sm:text-base text-[#8A837A] font-light leading-relaxed mb-6 max-w-lg mx-auto text-balance">
            Пошагово: выберите исторический оригинал, сделайте реконструкцию в удобном ИИ-сервисе и загрузите результат на платформу.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3 mb-6 max-w-md">
            {START_PATH_STEPS.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#5A8F7A]/80 font-mono whitespace-nowrap">
                  {step}
                </span>
                {i < START_PATH_STEPS.length - 1 && (
                  <span className="text-[#6B645D] hidden sm:inline" aria-hidden>
                    →
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <span className="inline-flex items-center gap-2 text-sm text-[#C8E6D8] border border-[#5A8F7A]/30 rounded-full px-4 py-2 bg-[#5A8F7A]/10 group-hover:bg-[#5A8F7A]/20 transition-colors">
              Открыть инструкцию
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </span>

            <div className="flex items-center justify-center gap-2" aria-hidden>
              {['01', '02', '03'].map((n) => (
                <span
                  key={n}
                  className="text-[10px] font-mono uppercase tracking-widest text-[#6B645D]/60 border border-white/[0.06] rounded px-2 py-0.5"
                >
                  {n}
                </span>
              ))}
              <span className="text-[#6B645D]/40 text-xs">…</span>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
