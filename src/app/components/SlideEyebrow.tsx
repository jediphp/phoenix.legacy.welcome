'use client';

import type { ReactNode } from 'react';

type SlideEyebrowProps = {
  children: ReactNode;
  /** Border + text + background utilities (same palette as before) */
  toneClassName: string;
};

/**
 * Eyebrow label pinned to the slide’s top-right, using the same inset as
 * `PresentationFlow` back control (`p-4 sm:p-8 lg:p-10`) so it reads on one line with «К выбору сценария».
 */
export function SlideEyebrow({ children, toneClassName }: SlideEyebrowProps) {
  return (
    <span
      className={`pointer-events-auto absolute top-4 right-4 z-[45] max-w-[min(52vw,17rem)] text-right sm:top-8 sm:right-8 lg:top-10 lg:right-10 inline-block rounded-full border px-2.5 py-0.5 text-[8px] font-light tracking-[0.18em] uppercase sm:px-3 sm:text-[9px] 2xl:text-[10px] ${toneClassName}`}
    >
      {children}
    </span>
  );
}
