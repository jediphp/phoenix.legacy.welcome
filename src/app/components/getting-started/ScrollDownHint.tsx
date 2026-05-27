'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

type Props = {
  visible?: boolean;
  nextSlideId?: string;
};

export function gettingStartedSlideDomId(slideId: string): string {
  return `gs-slide-${slideId}`;
}

export function ScrollDownHint({ visible = true, nextSlideId }: Props) {
  if (!visible || !nextSlideId) return null;

  const handleClick = () => {
    const target = document.getElementById(gettingStartedSlideDomId(nextSlideId));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      className="absolute bottom-[3.5vh] sm:bottom-[5vh] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Перейти к следующему шагу"
        className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A8F7A]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] rounded-full"
      >
        <span className="meta-label uppercase tracking-[0.2em] text-[#5A8F7A]/70 text-[10px] sm:text-xs group-hover:text-[#C8E6D8] transition-colors">
          Далее
        </span>
        <motion.span
          animate={{
            y: [0, 10, 0],
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-flex p-3 sm:p-4 rounded-full border border-[#5A8F7A]/35 bg-[#5A8F7A]/10 text-[#C8E6D8] shadow-[0_0_24px_rgba(90,143,122,0.15)] group-hover:border-[#5A8F7A]/55 group-hover:bg-[#5A8F7A]/20 group-active:scale-95 transition-[border-color,background-color,transform]"
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </motion.span>
      </button>
    </motion.div>
  );
}
