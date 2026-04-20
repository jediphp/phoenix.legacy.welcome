type SlideFooterProps = {
  step: string;
};

export function SlideFooter({ step }: SlideFooterProps) {
  return (
    <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-40">
      <div className="mx-auto flex w-full items-end px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 sm:px-6 lg:px-12">
        <div className="flex items-center gap-3 rounded-full border border-white/5 bg-[#0A0908]/70 px-3 py-1.5 backdrop-blur-md">
          <span className="text-[10px] uppercase tracking-widest text-[#A39B92]">{step}</span>
          <div className="h-[1px] w-10 bg-white/10">
            <div className="h-full w-full bg-[#905E26]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
