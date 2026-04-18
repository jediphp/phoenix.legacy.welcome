import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import brandLogo from '../../imports/image.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AuthorSlideOne() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-sans snap-start">
      
      {/* Background Image - Atmospheric Historical Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1697363717000-5b6d8fe70e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBzY3VscHR1cmUlMjBkYXJrJTIwbXVzZXVtJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc3NjQ0MDExOXww&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Classical sculpture in warm light"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070605]/80 via-[#070605]/60 to-[#070605]/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#905E26]/20 via-transparent to-transparent opacity-80" />
      </div>

      {/* Noise filter */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide)" />
      </svg>

      {/* Main Flow Container - Uses flex layout instead of absolute positioning to prevent overlaps */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-5xl px-6 sm:px-12 text-center h-full pt-[8vh] pb-[12vh]">
        
        {/* Custom Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[280px] sm:w-[400px] lg:w-[500px] drop-shadow-2xl mb-6 sm:mb-[6vh] flex-shrink-0"
        >
          <ImageWithFallback 
            src={brandLogo} 
            alt="Феникс Наследие" 
            className="w-full h-auto max-h-[18vh] lg:max-h-[25vh] object-contain mx-auto" 
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center flex-shrink-1"
        >
          <h1 className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#F5EC9B] mb-5 sm:mb-6 font-light drop-shadow-md">
            Феникс.Наследие
          </h1>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light leading-[1.2] text-[#EAEADF] mb-6 sm:mb-8 max-w-4xl mx-auto drop-shadow-xl text-balance">
            Платформа для исторических реконструкций, их оценки, верификации и контролируемого использования
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-[#A39B92] font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Не просто место для красивых ИИ-изображений. Среда, где работа получает источник, контекст, оценку качества и дальнейшую жизнь внутри системы.
          </p>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-[4vh] sm:bottom-[6vh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center opacity-60 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 sm:p-4 rounded-full border border-white/10 bg-white/5 text-[#EAEADF]"
        >
          <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </div>
  );
}
