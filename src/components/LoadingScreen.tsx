import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'reveal' | 'done'>('enter');

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Text enters
    timers.push(setTimeout(() => setPhase('hold'), 100));
    // Hold for reading
    timers.push(setTimeout(() => setPhase('reveal'), 2400));
    // Complete
    timers.push(setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3600));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Left curtain */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1/2 bg-primary origin-left",
          "transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
          phase === 'reveal' && "-translate-x-full"
        )}
      />

      {/* Right curtain */}
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-1/2 bg-primary origin-right",
          "transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
          phase === 'reveal' && "translate-x-full"
        )}
      />

      {/* Center content - stays on top during reveal */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center z-10",
          "transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
          phase === 'reveal' && "opacity-0 scale-95"
        )}
      >
        {/* Designed by */}
        <div
          className={cn(
            "overflow-hidden mb-2",
            "transition-all duration-700 ease-out",
            phase === 'enter' && "opacity-0",
            phase === 'hold' && "opacity-100",
          )}
        >
          <span 
            className={cn(
              "block text-primary-foreground/70 text-sm md:text-base tracking-[0.4em] uppercase font-body font-light",
              "transition-transform duration-700 ease-out delay-100",
              phase === 'enter' && "translate-y-full",
              phase === 'hold' && "translate-y-0"
            )}
          >
            designed by
          </span>
        </div>

        {/* Om */}
        <div className="overflow-hidden">
          <h1 
            className={cn(
              "font-display text-7xl md:text-8xl lg:text-9xl text-primary-foreground tracking-tight",
              "transition-transform duration-700 ease-out delay-200",
              phase === 'enter' && "translate-y-full",
              phase === 'hold' && "translate-y-0"
            )}
          >
            Om
          </h1>
        </div>

        {/* Subtle underline */}
        <div
          className={cn(
            "mt-6 h-px bg-primary-foreground/30",
            "transition-all duration-700 ease-out delay-300",
            phase === 'enter' && "w-0 opacity-0",
            phase === 'hold' && "w-20 opacity-100"
          )}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
