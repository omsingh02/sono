import { useState, useCallback, useEffect } from 'react';
import Slide from './Slide';
import SlideNavigation from './SlideNavigation';
import { slides } from './slides';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | 'none'>('none');

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection('right');
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      setDirection('left');
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  const currentSlideData = slides[currentSlide];
  const isDark = currentSlideData.variant === 'dark' || currentSlideData.variant === 'title';

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div key={currentSlide} className="w-full h-full">
        <Slide slide={currentSlideData} direction={direction} />
      </div>
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        variant={isDark ? 'dark' : 'light'}
      />
    </div>
  );
};

export default Presentation;
