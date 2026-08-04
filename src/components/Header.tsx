import React from 'react';
import { Eye, Code, HardHat, RefreshCw } from 'lucide-react';

interface HeaderProps {
  buildProgress: number;
  procrastinationProgress?: number;
}

export const Header: React.FC<HeaderProps> = ({
  buildProgress,
  procrastinationProgress = 88,
}) => {
  return (
    <header className="w-full border-b border-zinc-800 bg-[#09090b]/90 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-16 py-2 flex items-center justify-between gap-2">
        {/* Left: Brand / Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <span className="font-mono font-extrabold text-sm sm:text-base tracking-widest text-white border border-zinc-700 px-2 sm:px-2.5 py-1 rounded-sm bg-zinc-900">
            RAW
          </span>
          <div className="hidden sm:flex flex-col">
            <span className="font-mono text-xs text-zinc-400 tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              DEV_ENV // BUILD v0.9.4
            </span>
            <span className="text-sm font-semibold text-zinc-200 tracking-tight hidden lg:inline">
              Personal Site / In Construction
            </span>
          </div>
        </div>

        {/* Center/Right: Progress & Procrastination indicators (stacked vertically) */}
        <div className="flex flex-col gap-1 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-mono text-zinc-300 shrink-0">
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5">
              <HardHat className="w-3 h-3 text-zinc-400 shrink-0" />
              <span className="text-zinc-300">ГОТОВНОСТЬ:</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-14 sm:w-16 bg-zinc-800 h-1.5 sm:h-2 rounded-full overflow-hidden border border-zinc-700">
                <div 
                  className="bg-white h-full transition-all duration-500 ease-out"
                  style={{ width: `${buildProgress}%` }}
                />
              </div>
              <span className="font-bold text-white min-w-[28px] text-right">{buildProgress}%</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 flex items-center justify-center text-[10px] shrink-0 text-zinc-400">⏳</span>
              <span className="text-zinc-300">ПРОКРАСТИНАЦИЯ:</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-14 sm:w-16 bg-zinc-800 h-1.5 sm:h-2 rounded-full overflow-hidden border border-zinc-700">
                <div 
                  className="bg-zinc-200 h-full transition-all duration-500 ease-out"
                  style={{ width: `${procrastinationProgress}%` }}
                />
              </div>
              <span className="font-bold text-white min-w-[28px] text-right">{procrastinationProgress}%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
