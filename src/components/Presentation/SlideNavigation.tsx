import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  variant: 'light' | 'dark';
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  variant,
}: SlideNavigationProps) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  const buttonBase = cn(
    "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
  );

  const buttonVariant = variant === 'dark'
    ? cn(
        "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white",
        "focus:ring-white/50 focus:ring-offset-[hsl(var(--slide-dark))]",
        "hover:scale-110 active:scale-95"
      )
    : cn(
        "bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground",
        "focus:ring-primary/50 focus:ring-offset-background",
        "hover:scale-110 active:scale-95"
      );

  const progressColor = variant === 'dark' ? 'bg-white/60' : 'bg-primary';
  const progressBg = variant === 'dark' ? 'bg-white/20' : 'bg-foreground/10';

  return (
    <div className="absolute inset-x-0 bottom-0 px-4 md:px-8 pb-6 md:pb-8">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={cn(buttonBase, buttonVariant)}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Progress Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === currentSlide 
                    ? cn("w-8", progressColor)
                    : cn("w-1.5", progressBg)
                )}
              />
            ))}
          </div>
          <span className={cn(
            "text-xs font-medium ml-2 tabular-nums",
            variant === 'dark' ? "text-white/50" : "text-muted-foreground"
          )}>
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={isLast}
          className={cn(buttonBase, buttonVariant)}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
