import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { SlideEyebrow } from './SlideEyebrow';
import { SlideFooter } from './SlideFooter';

const TRAJECTORY_STEPS = [
  {
    id: '01',
    title: 'Видимость сильных работ',
    desc: 'Качественный результат поднимается органически, минуя шум.'
  },
  {
    id: '02',
    title: 'Более содержательная связь',
    desc: 'Детальные комментарии и разметка вместо поверхностных лайков.'
  },
  {
    id: '03',
    title: 'Рост опыта и доверия',
    desc: 'Укрепление позиции внутри платформы за счет полезного вклада.'
  },
  {
    id: '04',
    title: 'Шанс войти в раннее ядро',
    desc: 'Возможность стать частью сообщества экспертов на этапе старта.'
  },
  {
    id: '05',
    title: 'Профессиональные сценарии',
    desc: 'Открытие новых возможностей для монетизации и сотрудничества.'
  }
];

export function AuthorSlideNine() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { once: true, margin: '-50px' });

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col overflow-hidden font-sans snap-start slide-shell bg-[#090807]">

      {/* Noise filter */}
      <svg className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay w-full h-full z-0">
        <filter id="noise_slide_9">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise_slide_9)" />
      </svg>

      {/* Airy Ambient Glow for "emotional breather" */}
      <motion.div 
        className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] pointer-events-none z-0 rounded-full bg-[radial-gradient(circle,rgba(213,168,107,0.08)_0%,rgba(144,94,38,0.02)_40%,transparent_70%)] mix-blend-screen blur-[80px]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      <SlideEyebrow toneClassName="border-[#D5A86B]/30 text-[#D5A86B] bg-[#D5A86B]/5">Личная ценность</SlideEyebrow>

      <div className="relative z-20 w-full max-w-[90vw] mx-auto flex flex-col min-h-[100svh] pt-[8vh] pb-[5vh]" ref={sceneRef}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex-shrink-0 mb-[4vh]"
        >
          <h2 className="pr-36 text-[clamp(1.65rem,3.4vh,3.25rem)] sm:pr-44 font-light leading-[1.1] text-[#EAEADF] tracking-tight text-balance max-w-[70vw] lg:pr-52">
            Здесь можно не просто публиковать,{' '}
            <span className="text-[#A39B92]">а накапливать репутацию</span>
          </h2>
        </motion.div>

        {/* ── Main Content: Trajectory ── */}
        <div className="flex-1 min-h-0 relative flex flex-col lg:flex-row justify-start items-center">
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[4vh] gap-x-[2vw] relative z-10">
            {TRAJECTORY_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative flex items-start gap-[1vw] group"
                initial={{ opacity: 0, y: '2vh' }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
                transition={{ duration: 0.9, delay: 0.4 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                
                {/* Node marker */}
                <div className="relative mt-[0.5vh] flex-shrink-0">
                  <motion.div
                    className="w-[clamp(24px,3vh,36px)] h-[clamp(24px,3vh,36px)] rounded-full border border-white/10 flex items-center justify-center bg-[#090807] backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10"
                    initial={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    animate={isInView ? { borderColor: ['rgba(255,255,255,0.1)', 'rgba(213,168,107,0.6)', 'rgba(213,168,107,0.2)'] } : {}}
                    transition={{ duration: 2, delay: 0.6 + index * 0.15, ease: "easeInOut" }}
                  >
                    <motion.div 
                      className="w-[clamp(4px,1vh,8px)] h-[clamp(4px,1vh,8px)] rounded-full bg-white/20"
                      initial={{ backgroundColor: 'rgba(255,255,255,0.2)', scale: 1 }}
                      animate={isInView ? { backgroundColor: 'rgba(213,168,107,1)', scale: [1, 1.5, 1], boxShadow: ['0 0 0px rgba(213,168,107,0)', '0 0 15px rgba(213,168,107,0.8)', '0 0 5px rgba(213,168,107,0.4)'] } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + index * 0.15, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-[0.5vw] mb-[0.5vh]">
                    <span className="text-[clamp(10px,1.2vh,14px)] text-[#905E26] font-mono tracking-widest">{step.id}</span>
                    <h3 className="text-[clamp(14px,1.8vh,22px)] text-[#EAEADF] font-light tracking-wide">{step.title}</h3>
                  </div>
                  <p className="text-[clamp(12px,1.4vh,18px)] text-[#8A837A] font-light leading-relaxed max-w-[20vw] text-balance">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ── Bottom Conclusion ── */}
        <motion.div
          initial={{ opacity: 0, y: '2vh' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mt-auto ml-auto max-w-[78vw] lg:max-w-[74vw] z-30"
        >
          <div className="p-[2vh] rounded-[2vh] bg-gradient-to-br from-[#12100E] to-[#0A0908] border border-white/[0.05] shadow-2xl relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-[15vw] h-[15vw] bg-[#905E26] opacity-[0.03] blur-[40px] rounded-full mix-blend-screen" />
            
            <p className="text-[clamp(11px,1.15vw,22px)] text-[#D5CCC3] font-light leading-relaxed xl:whitespace-nowrap relative z-10 text-right">
              На платформе ценится не шумная активность, а{' '}
              <span className="text-[#D5A86B]">полезный вклад</span> в качество среды.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-[5vh] right-[2vw] z-20 flex flex-col items-center justify-center opacity-60 pointer-events-none hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
      >
        <motion.div
          animate={{ y: [0, '1vh', 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-[1vh] rounded-full border border-white/10 bg-white/5 text-[#EAEADF]"
        >
          <ArrowDown className="w-[2vh] h-[2vh]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
      <SlideFooter step="09" />
    </div>
  );
}
