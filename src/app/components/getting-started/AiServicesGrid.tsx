'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { AI_SERVICES } from '@/src/content/getting-started/ai-services';

function ServiceLogo({ title, logoPath }: { title: string; logoPath: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-medium uppercase tracking-wide text-[#A39B92]">
        {title.slice(0, 2)}
      </span>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-1.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoPath}
        alt={title}
        className="max-h-full max-w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function AiServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
      {AI_SERVICES.map((service) => (
        <a
          key={service.id}
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#0D0B09]/50 p-4 transition-all duration-300 hover:border-[#5A8F7A]/30 hover:bg-[#5A8F7A]/[0.06]"
        >
          <ServiceLogo title={service.title} logoPath={service.logoPath} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#EAEADF] group-hover:text-white transition-colors">
                {service.title}
              </span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#6B645D] opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.5} />
            </div>
            <p className="mt-0.5 truncate text-xs font-light text-[#8A837A]">{service.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
