'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import LogoVertical from '../../imports/LogoVertical';

function Zone({ 
  type, 
  title, 
  subtitle, 
  titleClassName,
  hoveredZone, 
  setHoveredZone 
}: { 
  type: 'author' | 'org';
  title: string;
  subtitle: string;
  titleClassName?: string;
  hoveredZone: 'author' | 'org' | null;
  setHoveredZone: (val: 'author' | 'org' | null) => void;
}) {
  const isHovered = hoveredZone === type;
  const isOtherHovered = hoveredZone !== null && hoveredZone !== type;
  const router = useRouter();

  return (
    <div 
      className="flex-1 min-w-0 relative flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 xl:px-20 cursor-pointer group z-20"
      onMouseEnter={() => setHoveredZone(type)}
      onMouseLeave={() => setHoveredZone(null)}
      onClick={() => router.push(`/${type}`)}
    >
      {/* Мягкий фон при наведении */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-out z-0
          ${type === 'author' 
            ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#905E26]/10 via-[#905E26]/5 to-transparent' 
            : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-500/10 via-stone-500/5 to-transparent'
          }
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />

      <motion.div 
        animate={{ 
          opacity: isOtherHovered ? 0.25 : 1,
          scale: isHovered ? 1.03 : 1,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center pt-8 sm:pt-4 w-full max-w-[38rem]"
      >
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light mb-6 transition-colors duration-700 text-balance break-words ${titleClassName ?? ''}
          ${isHovered 
            ? (type === 'author' ? 'text-[#F5EC9B]' : 'text-white') 
            : 'text-[#EAEADF]'
          }
        `}>
          {title}
        </h2>
        
        <p className={`text-sm sm:text-base lg:text-lg font-light tracking-wide leading-relaxed transition-colors duration-700 text-balance
          ${isHovered ? 'text-[#D5CCC3]' : 'text-[#8A837A]'}
        `}>
          {subtitle}
        </p>

        {/* Индикатор действия при наведении */}
        <motion.div 
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.95
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-10 sm:mt-12 rounded-full p-4 border transition-colors duration-700
            ${type === 'author' 
              ? 'border-[#905E26]/40 text-[#F5EC9B] bg-[#905E26]/15' 
              : 'border-stone-500/40 text-stone-200 bg-stone-500/15'
            }
          `}
        >
          <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 font-light ${type === 'author' ? 'rotate-180' : ''}`} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Home() {
  const [hoveredZone, setHoveredZone] = useState<'author' | 'org' | null>(null);

  // Логика параллакса
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

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0a0908] bg-gradient-to-br from-[#12100d] via-[#0a0907] to-[#040403] text-white overflow-hidden flex flex-col font-sans selection:bg-[#8F6D1F]/30"
    >
      
      {/* Стабильная текстура шума (Museum-tech) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-screen z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Интерактивный свет (Parallax Spotlight) - сделал чуть ярче */}
      <motion.div
        className="absolute pointer-events-none z-10 rounded-full blur-[clamp(3.5rem,8vw,6.25rem)] opacity-85 mix-blend-screen"
        style={{
          width: 'var(--glow-size)',
          height: 'var(--glow-size)',
          background: 'radial-gradient(circle, rgba(190, 130, 60, 0.25) 0%, rgba(0,0,0,0) 70%)',
          left: spotlightLeft,
          top: spotlightTop,
        }}
      />

      {/* Базовые цветовые акценты */}
      <motion.div 
        animate={{ opacity: hoveredZone === 'author' ? 0.7 : hoveredZone === 'org' ? 0.2 : 0.4 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full lg:w-1/2 h-1/2 lg:h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#905E26]/20 via-transparent to-transparent z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ opacity: hoveredZone === 'org' ? 0.6 : hoveredZone === 'author' ? 0.2 : 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-500/20 via-transparent to-transparent z-0 pointer-events-none"
      />

      {/* Header: Отдельный блок во всю ширину экрана */}
      <header className="relative w-full z-40 pt-12 sm:pt-16 lg:pt-20 pb-6 flex flex-col items-center justify-center pointer-events-none shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[clamp(22rem,36vw,35rem)] h-[clamp(6rem,10.8vw,9.6rem)] relative flex justify-center items-center drop-shadow-2xl translate-x-[21.3%]"
        >
          <LogoVertical />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg tracking-[0.18em] text-[#F5EC9B] text-center"
        >
          Одна платформа — два сценария входа
        </motion.p>
      </header>

      {/* Контейнер интерактивных зон */}
      <main className="flex-1 flex flex-col lg:flex-row lg:items-stretch relative w-full z-20 pb-16 sm:pb-24 lg:pb-32 lg:gap-6 xl:gap-10 2xl:gap-14">
        {/* Центральные разделители (теперь привязаны только к main, не пересекают header) */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#8F6D1F]/20 to-transparent z-10 pointer-events-none" />
        <div className="block lg:hidden absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#8F6D1F]/20 to-transparent z-10 pointer-events-none" />

        <Zone
          type="author"
          title="Я автор"
          subtitle="Хочу публиковать работы, получать оценку и расти внутри новой ниши"
          hoveredZone={hoveredZone}
          setHoveredZone={setHoveredZone}
        />
        <Zone
          type="org"
          title="Я организация"
          subtitle="Хочу понять, как платформа работает с качеством, форматами и сотрудничеством"
          hoveredZone={hoveredZone}
          setHoveredZone={setHoveredZone}
        />
      </main>

    </div>
  );
}