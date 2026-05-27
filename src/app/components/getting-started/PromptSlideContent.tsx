'use client';

import { motion } from 'motion/react';
import type { PromptExample } from '@/src/content/getting-started/slides';
import { PROMPT_TEMPLATE } from '@/src/content/getting-started/slides';

function PromptBlock({
  label,
  text,
  featured,
}: {
  label: string;
  text: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-3 sm:p-4 ${
        featured
          ? 'border-[#5A8F7A]/30 bg-[#5A8F7A]/[0.06]'
          : 'border-white/[0.08] bg-[#0A0908]/70'
      }`}
    >
      <span
        className={`mb-2.5 block text-xs sm:text-sm uppercase tracking-[0.16em] font-mono ${
          featured ? 'text-[#5A8F7A]' : 'text-[#6B645D]'
        }`}
      >
        {label}
      </span>
      <pre
        className={`whitespace-pre-wrap font-mono leading-relaxed text-[#A39B92] overflow-x-auto ${
          featured ? 'text-sm sm:text-base lg:text-[17px]' : 'text-xs sm:text-sm lg:text-[15px]'
        }`}
      >
        {text}
      </pre>
    </div>
  );
}

type Props = {
  examples: PromptExample[];
};

export function PromptSlideContent({ examples }: Props) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 w-full h-full min-h-0 items-stretch">
      <motion.div
        className="w-full lg:w-[38%] xl:w-[36%] flex flex-col gap-4 sm:gap-5 order-1"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {examples.map((example, idx) => (
          <motion.div
            key={example.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <PromptBlock label={example.label} text={example.text} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="w-full lg:flex-1 order-2 flex flex-col min-h-0"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1.1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <PromptBlock label="Базовый шаблон" text={PROMPT_TEMPLATE} featured />
      </motion.div>
    </div>
  );
}
