'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { GETTING_STARTED_SLIDES } from '@/src/content/getting-started/slides';
import { GettingStartedSlide } from './GettingStartedSlide';

export function GettingStartedFlow() {
  const router = useRouter();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  const spotlightLeft = useTransform(smoothX, [0, 1], ['calc(0% - (var(--glow-size) / 2))', 'calc(100% - (var(--glow-size) / 2))']);
  const spotlightTop = useTransform(smoothY, [0, 1], ['calc(0% - (var(--glow-size) / 2))', 'calc(100% - (var(--glow-size) / 2))']);

  return (
    <div
      className="flow-shell start-flow relative w-full h-[100svh] bg-[#070605] overflow-y-auto overflow-x-hidden snap-y snap-mandatory font-sans scroll-smooth"
      onMouseMove={handleMouseMove}
    >
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-[clamp(3.5rem,8vw,6.25rem)] opacity-85 mix-blend-screen"
          style={{
            width: 'var(--glow-size)',
            height: 'var(--glow-size)',
            background: 'radial-gradient(circle, rgba(90, 143, 122, 0.22) 0%, rgba(0,0,0,0) 70%)',
            left: spotlightLeft,
            top: spotlightTop,
          }}
        />
      </div>

      <header className="fixed top-0 w-full z-50 flex justify-start p-4 sm:p-8 lg:p-10 pointer-events-none">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="group flex items-center gap-3 text-sm text-[#A39B92] hover:text-white transition-colors duration-300 cursor-pointer pointer-events-auto backdrop-blur-md bg-[#070605]/30 rounded-full pr-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="meta-label">К выбору сценария</span>
        </button>
      </header>

      {GETTING_STARTED_SLIDES.map((slide, index) => {
        const next = GETTING_STARTED_SLIDES[index + 1];
        return (
          <GettingStartedSlide
            key={slide.id}
            slide={slide}
            isLast={index === GETTING_STARTED_SLIDES.length - 1}
            nextSlideId={next?.id}
          />
        );
      })}
    </div>
  );
}
