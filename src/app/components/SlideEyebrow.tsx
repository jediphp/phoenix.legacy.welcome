'use client';

import type { ReactNode } from 'react';

type SlideEyebrowProps = {
  children: ReactNode;
  /** Border + text + background utilities (same palette as before) */
  toneClassName: string;
};

/**
 * Eyebrow label pinned to the top-center, aligned with the fixed back control
 * inset in `PresentationFlow` (`p-4 sm:p-8 lg:p-10`).
 */
export function SlideEyebrow({ children, toneClassName }: SlideEyebrowProps) {
  return (
    <span
      className={`pointer-events-auto absolute left-1/2 top-4 z-[45] inline-block max-w-[min(52vw,22rem)] -translate-x-1/2 rounded-full border px-2.5 py-0.5 text-center meta-label font-light sm:top-8 sm:px-3 lg:top-10 ${toneClassName}`}
    >
      {children}
    </span>
  );
}
