'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { AuthorSlideOne } from './AuthorSlideOne';
import { AuthorSlideTwo } from './AuthorSlideTwo';
import { AuthorSlideThree } from './AuthorSlideThree';
import { AuthorSlideFour } from './AuthorSlideFour';
import { AuthorSlideFive } from './AuthorSlideFive';
import { AuthorSlideSix } from './AuthorSlideSix';
import { AuthorSlideSeven } from './AuthorSlideSeven';
import { AuthorSlideEight } from './AuthorSlideEight';
import { AuthorSlideNine } from './AuthorSlideNine';
import { AuthorSlideTen } from './AuthorSlideTen';
import { AuthorSlideEleven } from './AuthorSlideEleven';
import { AuthorSlideTwelve } from './AuthorSlideTwelve';
import { AuthorSlideThirteen } from './AuthorSlideThirteen';
import { AuthorSlideFourteen } from './AuthorSlideFourteen';
import { OrgSlideOne } from './OrgSlideOne';
import { OrgSlideTwo } from './OrgSlideTwo';
import { OrgSlideThree } from './OrgSlideThree';
import { OrgSlideFour as OrgTrustFour } from './OrgSlideFour';
import { OrgSlideFive as OrgTrustFive } from './OrgSlideFive';
import { OrgSlideSix as OrgTrustSix } from './OrgSlideSix';
import { OrgSlideSeven as OrgExportSeven } from './OrgSlideSeven';
import { OrgSlideEight as OrgUsageEight } from './OrgSlideEight';
import { OrgSlideNine as OrgPilotNine } from './OrgSlideNine';
import { OrgSlideTen as OrgClosingTen } from './OrgSlideTen';

export function PresentationFlow({ type }: { type: 'author' | 'org' }) {
  const router = useRouter();

  const isAuthor = type === 'author';

  // Global Parallax Spotlight Logic
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const handleMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  const spotlightLeft = useTransform(smoothX, [0, 1], ["calc(0% - (var(--glow-size) / 2))", "calc(100% - (var(--glow-size) / 2))"]);
  const spotlightTop = useTransform(smoothY, [0, 1], ["calc(0% - (var(--glow-size) / 2))", "calc(100% - (var(--glow-size) / 2))"]);

  // ── Shared wrapper props ──
  const sharedWrapper = (
    <>
      {/* Global Mouse Glow */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-[clamp(3.5rem,8vw,6.25rem)] opacity-85 mix-blend-screen"
          style={{
            width: 'var(--glow-size)',
            height: 'var(--glow-size)',
            background: 'radial-gradient(circle, rgba(190, 130, 60, 0.25) 0%, rgba(0,0,0,0) 70%)',
            left: spotlightLeft,
            top: spotlightTop,
          }}
        />
      </div>

      {/* Fixed back-navigation header */}
      <header className="fixed top-0 w-full z-50 flex justify-start p-4 sm:p-8 lg:p-10 pointer-events-none">
        <button
          onClick={() => router.push('/')}
          className="group flex items-center gap-3 text-sm text-[#A39B92] hover:text-white transition-colors duration-300 cursor-pointer pointer-events-auto backdrop-blur-md bg-[#070605]/30 rounded-full pr-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="meta-label">К выбору сценария</span>
        </button>
      </header>
    </>
  );

  if (isAuthor) {
    return (
      <div
        className="flow-shell author-flow relative w-full h-[100svh] bg-[#070605] overflow-y-auto overflow-x-hidden snap-y snap-mandatory font-sans scroll-smooth"
        onMouseMove={handleMouseMove}
      >
        {sharedWrapper}
        <AuthorSlideOne />
        <AuthorSlideTwo />
        <AuthorSlideThree />
        <AuthorSlideFour />
        <AuthorSlideFive />
        <AuthorSlideSix />
        <AuthorSlideSeven />
        <AuthorSlideEight />
        <AuthorSlideNine />
        <AuthorSlideTen />
        <AuthorSlideEleven />
        <AuthorSlideTwelve />
        <AuthorSlideThirteen />
        <AuthorSlideFourteen />
      </div>
    );
  }

  // ── Organisation flow ──
  return (
    <div
      className="flow-shell org-flow relative w-full h-[100svh] bg-[#080705] overflow-y-auto overflow-x-hidden snap-y snap-mandatory font-sans scroll-smooth"
      onMouseMove={handleMouseMove}
    >
      {sharedWrapper}
      <OrgSlideOne />
      <OrgSlideTwo />
      <OrgSlideThree />
      <OrgTrustFour />
      <OrgTrustFive />
      <OrgTrustSix />
      <OrgExportSeven />
      <OrgUsageEight />
      <OrgPilotNine />
      <OrgClosingTen />
    </div>
  );
}
