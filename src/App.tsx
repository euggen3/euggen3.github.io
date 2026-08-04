import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  HardHat, 
  Wrench, 
  Code
} from 'lucide-react';
import { Header } from './components/Header';

export default function App() {
  const [buildProgress] = useState(68);
  const [procrastinationProgress] = useState(88);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between selection:bg-white selection:text-black relative overflow-x-hidden bg-dot-pattern">

      {/* Top Header */}
      <Header 
        buildProgress={buildProgress}
        procrastinationProgress={procrastinationProgress}
      />

      {/* Top Caution Marquee Tape */}
      <div className="w-full bg-white text-black py-1.5 overflow-hidden border-y border-zinc-800 font-mono text-xs font-bold uppercase tracking-widest select-none z-10 shadow-lg">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <HardHat className="w-4 h-4" />
              <span>/// ВЕДУТСЯ СТРОИТЕЛЬНЫЕ РАБОТЫ ///</span>
              <span className="bg-black text-white px-1.5 py-0.5 text-[10px]">RAW BUILD</span>
              <span>/// SITE IS UNDER CONSTRUCTION ///</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Container - Centered Minimal Layout */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full flex-1 flex flex-col justify-center items-center text-center z-10">
        
        {/* HERO SECTION */}
        <section className="space-y-8 max-w-3xl mx-auto relative">
          {/* Construction Tag Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            <Wrench className="w-3.5 h-3.5 text-zinc-400" />
            <span>ОБЪЕКТ В ПРОЦЕССЕ СБОРКИ</span>
          </motion.div>

          {/* Requested Heading & RAW statement */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white leading-tight sm:leading-none">
              А что вы тут хотели увидеть?
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-zinc-400">
                Сайт еще
              </span>
              <span className="bg-white text-black font-mono font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl px-5 py-1 rounded-sm uppercase tracking-tighter shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                RAW
              </span>
            </div>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900 bg-black/90 py-6 px-4 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
            <span>Personal // BetaVersion © {new Date().getFullYear()}</span>
          </div>

          
          
        </div>
      </footer>
    </div>
  );
}
