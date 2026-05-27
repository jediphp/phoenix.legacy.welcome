'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
  accentClass?: string;
};

export function ImageLightbox({ src, alt, onClose, accentClass = 'hover:border-[#5A8F7A]/40' }: Props) {
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!portalReady) return null;

  return createPortal(
    <div
      className="fixed inset-0 isolate flex items-center justify-center bg-[#070605]/95 p-4 sm:p-8 backdrop-blur-md"
      style={{ zIndex: 999_999 }}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Закрыть"
        className={`absolute right-4 top-4 z-[2] rounded-full border border-white/15 bg-[#0A0908]/90 p-2.5 text-[#EAEADF] shadow-lg transition-colors hover:text-white ${accentClass}`}
      >
        <X className="h-5 w-5" strokeWidth={1.5} />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="relative z-[1] max-h-[min(100dvh,100svh)] max-w-full object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body,
  );
}
