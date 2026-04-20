type SlideFooterProps = {
  step: string;
};

export function SlideFooter({ step }: SlideFooterProps) {
  return (
    <footer className="pointer-events-none absolute right-4 top-4 z-[45] sm:right-8 sm:top-8 lg:right-10 lg:top-10">
      <div className="inline-flex items-center rounded-full border border-[#A39B92]/20 bg-[#070605]/45 px-2.5 py-0.5 backdrop-blur-md sm:px-3">
        <span className="meta-label uppercase tracking-widest text-[#A39B92]">{step}</span>
      </div>
    </footer>
  );
}
