'use client';

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import type { GettingStartedSlideConfig } from '@/src/content/getting-started/slides';
import { PromptSlideContent } from './PromptSlideContent';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SlideEyebrow } from '../SlideEyebrow';
import { SlideFooter } from '../SlideFooter';
import { AiServicesGrid } from './AiServicesGrid';
import { ReviewTypologyExamples } from './ReviewTypologyExamples';
import { SlideBottomScreenshot } from './SlideBottomScreenshot';
import { gettingStartedSlideDomId, ScrollDownHint } from './ScrollDownHint';

type Props = {
  slide: GettingStartedSlideConfig;
  isLast?: boolean;
  nextSlideId?: string;
};

function SlideCtaButton({ cta }: { cta: NonNullable<GettingStartedSlideConfig['cta']> }) {
  const className =
    'inline-flex items-center gap-2 rounded-full border border-[#5A8F7A]/40 bg-[#5A8F7A]/15 px-5 py-2.5 text-sm text-[#C8E6D8] transition-colors duration-300 hover:border-[#5A8F7A]/60 hover:bg-[#5A8F7A]/25 hover:text-white';

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
        <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
      </a>
    );
  }

  return (
    <a href={cta.href} className={className}>
      {cta.label}
    </a>
  );
}

function SlideMedia({ slide }: { slide: GettingStartedSlideConfig }) {
  if (slide.variant === 'ai-services') {
    return (
      <div className="w-full">
        <AiServicesGrid />
      </div>
    );
  }

  if (slide.variant === 'checklist' && slide.examples && slide.examples.length > 0) {
    return <ReviewTypologyExamples examples={slide.examples} />;
  }

  if (slide.image) {
    return (
      <div className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#12100d]/50">
        <ImageWithFallback
          src={slide.image}
          alt={slide.imageAlt ?? slide.title}
          className="w-full h-full object-contain object-top bg-[#0A0908]"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070605]/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 text-fluid-label uppercase tracking-widest text-[#5A8F7A]/80 font-mono">
          Интерфейс платформы
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[200px] rounded-2xl border border-dashed border-white/[0.08] bg-[#0D0B09]/40 flex flex-col items-center justify-center p-8 text-center">
      <span className="text-5xl font-light text-[#5A8F7A]/30 mb-4">{slide.step}</span>
      <p className="text-sm text-[#6B645D] font-light max-w-xs">
        Скриншот шага будет добавлен в следующих итерациях
      </p>
    </div>
  );
}

function ReviewChecklist({ bullets }: { bullets: string[] }) {
  return (
    <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2">
      {bullets.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D5CCC3] font-light leading-snug">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5A8F7A]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SlideTextBlock({
  slide,
  compactTitle,
}: {
  slide: GettingStartedSlideConfig;
  compactTitle?: boolean;
}) {
  return (
    <>
      <h2
        className={`font-light leading-[1.15] text-[#EAEADF] tracking-tight text-balance mb-5 sm:mb-6 ${
          compactTitle ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-2xl sm:text-3xl lg:text-4xl'
        }`}
      >
        {slide.title}
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {slide.paragraphs.map((p) => (
          <p
            key={p.slice(0, 40)}
            className={`text-[#A39B92] font-light leading-[1.6] ${
              compactTitle ? 'text-sm sm:text-base' : 'text-base lg:text-lg'
            }`}
          >
            {p}
          </p>
        ))}
      </div>

      {slide.variant === 'checklist' && slide.bullets && (
        <ul className="mt-6 space-y-2.5">
          {slide.bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm lg:text-base text-[#D5CCC3] font-light">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5A8F7A]" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {slide.hint && (
        <div className="mt-6 sm:mt-8 rounded-xl border border-[#5A8F7A]/20 bg-[#5A8F7A]/[0.06] px-4 py-3">
          <p className="text-sm text-[#C8E6D8]/90 font-light leading-relaxed">{slide.hint}</p>
        </div>
      )}

      {slide.cta && (
        <div className="mt-6 sm:mt-8">
          <SlideCtaButton cta={slide.cta} />
        </div>
      )}
    </>
  );
}

export function GettingStartedSlide({ slide, isLast = false, nextSlideId }: Props) {
  const hasExamples = (slide.examples?.length ?? 0) > 0;
  const isReviewLayout = slide.variant === 'checklist' && hasExamples;
  const isPromptLayout = slide.variant === 'prompt' && (slide.promptExamples?.length ?? 0) > 0;
  const isBottomImageLayout = Boolean(slide.image) && slide.imagePlacement === 'bottom';
  const hasMediaColumn =
    !isReviewLayout &&
    !isBottomImageLayout &&
    !isPromptLayout &&
    (slide.variant === 'ai-services' || Boolean(slide.image));

  const contentPadding = isLast ? 'pb-20' : 'pb-28 sm:pb-32';

  if (isPromptLayout && slide.promptExamples) {
    return (
      <div
        id={gettingStartedSlideDomId(slide.id)}
        className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell selection:bg-[#5A8F7A]/20 bg-[#070605] scroll-mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A120F]/30 via-[#070605]/40 to-[#040403]/40 z-0" />
        <SlideEyebrow toneClassName="border-[#5A8F7A]/30 text-[#C8E6D8] bg-[#5A8F7A]/10">
          {slide.eyebrow}
        </SlideEyebrow>

        <div
          className={`relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 pt-24 lg:pt-28 min-h-0 flex flex-col ${contentPadding}`}
        >
          <motion.div
            className="flex-shrink-0 mb-6 sm:mb-8 max-w-3xl"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light leading-[1.15] text-[#EAEADF] tracking-tight text-balance mb-4">
              {slide.title}
            </h2>
            <div className="space-y-3">
              {slide.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm sm:text-base text-[#A39B92] font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="flex-1 min-h-0 flex items-center">
            <PromptSlideContent examples={slide.promptExamples} />
          </div>
        </div>

        <ScrollDownHint visible={!isLast} nextSlideId={nextSlideId} />
        <SlideFooter step={slide.step} />
      </div>
    );
  }

  if (isBottomImageLayout && slide.image) {
    return (
      <div
        id={gettingStartedSlideDomId(slide.id)}
        className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell selection:bg-[#5A8F7A]/20 bg-[#070605] scroll-mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A120F]/30 via-[#070605]/40 to-[#040403]/40 z-0" />
        <SlideEyebrow toneClassName="border-[#5A8F7A]/30 text-[#C8E6D8] bg-[#5A8F7A]/10">
          {slide.eyebrow}
        </SlideEyebrow>

        <div
          className={`relative z-10 flex flex-col flex-1 w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14 pt-24 lg:pt-28 min-h-0 ${contentPadding} gap-6 sm:gap-8 lg:gap-10`}
        >
          <motion.div
            className="flex-shrink-0 w-full max-w-2xl"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SlideTextBlock slide={slide} compactTitle />
          </motion.div>

          <SlideBottomScreenshot src={slide.image} alt={slide.imageAlt ?? slide.title} />
        </div>

        <ScrollDownHint visible={!isLast} nextSlideId={nextSlideId} />
        <SlideFooter step={slide.step} />
      </div>
    );
  }

  if (isReviewLayout && slide.examples) {
    return (
      <div
        id={gettingStartedSlideDomId(slide.id)}
        className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden font-sans snap-start slide-shell selection:bg-[#5A8F7A]/20 bg-[#070605] scroll-mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A120F]/30 via-[#070605]/40 to-[#040403]/40 z-0" />
        <SlideEyebrow toneClassName="border-[#5A8F7A]/30 text-[#C8E6D8] bg-[#5A8F7A]/10">
          {slide.eyebrow}
        </SlideEyebrow>

        <div
          className={`relative z-10 w-full max-w-[1720px] px-6 sm:px-10 lg:px-14 h-full pt-24 lg:pt-28 ${contentPadding} flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14`}
        >
          <motion.div
            className="w-full lg:w-[34%] xl:w-[32%] flex-shrink-0 order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light leading-[1.15] text-[#EAEADF] tracking-tight text-balance mb-4">
              {slide.title}
            </h2>
            <div className="space-y-3">
              {slide.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm lg:text-base text-[#A39B92] font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            {slide.bullets && <ReviewChecklist bullets={slide.bullets} />}
            <p className="mt-5 text-[11px] sm:text-xs text-[#6B645D] font-light hidden lg:block">
              Нажмите на изображение, чтобы рассмотреть детали
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:flex-1 order-2 min-h-0"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ReviewTypologyExamples examples={slide.examples} />
          </motion.div>
        </div>

        <ScrollDownHint visible={!isLast} nextSlideId={nextSlideId} />
        <SlideFooter step={slide.step} />
      </div>
    );
  }

  return (
    <div
      id={gettingStartedSlideDomId(slide.id)}
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden font-sans snap-start slide-shell selection:bg-[#5A8F7A]/20 bg-[#070605] scroll-mt-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A120F]/30 via-[#070605]/40 to-[#040403]/40 z-0" />
      <SlideEyebrow toneClassName="border-[#5A8F7A]/30 text-[#C8E6D8] bg-[#5A8F7A]/10">
        {slide.eyebrow}
      </SlideEyebrow>

      <div
        className={`relative z-10 w-full max-w-[1600px] px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 2xl:gap-24 h-full pt-24 lg:py-0 ${contentPadding}`}
      >
        {/* Media: first on mobile for slides with screenshots */}
        {hasMediaColumn && (
          <motion.div
            className={`w-full lg:w-[52%] order-2 lg:order-1 ${
              slide.variant === 'ai-services'
                ? 'lg:max-h-[70vh] overflow-y-auto'
                : hasExamples
                  ? 'min-h-[280px] sm:min-h-[320px] lg:min-h-0 lg:h-[65vh]'
                  : 'h-[35vh] sm:h-[40vh] lg:h-[65vh]'
            }`}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <SlideMedia slide={slide} />
          </motion.div>
        )}

        {/* Text */}
        <motion.div
          className={`w-full flex flex-col justify-center order-1 lg:order-2 ${hasMediaColumn ? 'lg:w-[42%]' : 'lg:w-[70%] lg:mx-auto'}`}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <SlideTextBlock slide={slide} />
        </motion.div>
      </div>

      <ScrollDownHint visible={!isLast} nextSlideId={nextSlideId} />

      <SlideFooter step={slide.step} />
    </div>
  );
}
