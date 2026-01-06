import { SlideContent } from './slides';
import { cn } from '@/lib/utils';

interface SlideProps {
  slide: SlideContent;
  direction: 'left' | 'right' | 'none';
}

const Slide = ({ slide, direction }: SlideProps) => {
  const animationClass = 
    direction === 'right' ? 'animate-slide-right' : 
    direction === 'left' ? 'animate-slide-left' : '';

  if (slide.variant === 'title') {
    return (
      <div 
        className={cn(
          "flex flex-col items-center justify-center text-center h-full bg-primary text-primary-foreground px-8 md:px-16",
          animationClass
        )}
      >
        <div className="stagger-children max-w-4xl">
          {slide.image && (
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-2xl"
            />
          )}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 mb-4">
              {slide.subtitle}
            </p>
          )}
          {slide.description && (
            <p className="text-base md:text-lg lg:text-xl mt-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
              {slide.description}
            </p>
          )}
          {slide.footer && (
            <p className="text-base md:text-lg mt-12 opacity-70">
              {slide.footer}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (slide.variant === 'dark') {
    return (
      <div 
        className={cn(
          "flex flex-col justify-center h-full px-8 md:px-16 lg:px-24",
          "bg-[hsl(var(--slide-dark))] text-[hsl(var(--slide-dark-foreground))]",
          animationClass
        )}
      >
        <div className="stagger-children max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-10">
            {slide.title}
          </h2>
          
          {slide.image && (
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full max-w-xl mb-8 rounded-lg shadow-xl"
            />
          )}
          
          {slide.steps && (
            <div className="space-y-4 md:space-y-5">
              {slide.steps.map((step, index) => (
                <p key={index} className="text-base md:text-lg lg:text-xl">
                  <span className="text-[hsl(var(--success))] font-semibold mr-3">{step.label}:</span>
                  <span className="opacity-90">{step.text}</span>
                </p>
              ))}
            </div>
          )}

          {slide.principles && (
            <div className="space-y-5 md:space-y-6">
              {slide.principles.map((principle, index) => (
                <p key={index} className="text-base md:text-lg leading-relaxed">
                  <span className="text-[hsl(var(--success))] font-bold">{principle.title}</span>
                  <span className="opacity-90"> – {principle.description}</span>
                </p>
              ))}
            </div>
          )}

          {slide.applications && (
            <div className="grid gap-4 md:gap-5">
              {slide.applications.map((app, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-2xl">{app.emoji}</span>
                  <p className="text-base md:text-lg">
                    <span className="text-[hsl(var(--success))] font-semibold">{app.title}:</span>
                    <span className="opacity-90 ml-2">{app.description}</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          {slide.footer && (
            <p className="text-sm md:text-base mt-10 opacity-70 leading-relaxed">
              {slide.footer}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Content variant (light)
  return (
    <div 
      className={cn(
        "flex flex-col justify-center h-full bg-secondary px-8 md:px-16 lg:px-24",
        animationClass
      )}
    >
      <div className="stagger-children max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 md:mb-8">
          {slide.title}
        </h2>

        {slide.image && (
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full max-w-xl mb-8 rounded-lg shadow-xl"
          />
        )}

        {slide.question && (
          <p className="text-lg md:text-xl lg:text-2xl text-primary italic mb-8">
            {slide.question.split(/(\bmeasure\b|\bunderstand\b)/).map((part, i) => 
              ['measure', 'understand'].includes(part) ? 
                <span key={i} className="font-semibold not-italic">{part}</span> : part
            )}
          </p>
        )}

        {slide.subtitle && !slide.question && (
          <h3 className="text-lg md:text-xl text-primary font-semibold mb-6">
            {slide.subtitle}
          </h3>
        )}

        {slide.description && !slide.formula && (
          <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
            {slide.description}
          </p>
        )}

        {slide.items && (
          <ul className="space-y-3 md:space-y-4">
            {slide.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-base md:text-lg text-secondary-foreground">
                <span className="text-primary font-bold text-xl mt-0.5">→</span>
                <span>
                  {item.includes('→') ? (
                    <>
                      <span className="text-primary font-medium">{item.split('→')[0]}</span>
                      <span className="text-muted-foreground">→ {item.split('→')[1]}</span>
                    </>
                  ) : item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {slide.formula && (
          <>
            <p className="text-base md:text-lg text-muted-foreground mb-4">{slide.description}</p>
            <div className="bg-card border-l-4 border-primary py-4 px-6 font-mono text-xl md:text-2xl text-foreground my-6 shadow-sm">
              {slide.formula}
            </div>
            {slide.formulaItems && (
              <ul className="space-y-2 mt-4">
                {slide.formulaItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                    <span className="text-primary font-semibold font-mono">{item.label}</span>
                    <span>=</span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {slide.highlightBox && (
          <div className="bg-primary/10 border-l-4 border-primary p-5 mt-8 rounded-r-lg">
            <p className="text-base md:text-lg text-foreground font-medium">
              {slide.highlightBox.startsWith('Key insight:') ? slide.highlightBox : (
                <>
                  <span className="font-semibold">Key insight: </span>
                  {slide.highlightBox}
                </>
              )}
            </p>
          </div>
        )}

        {slide.futureItems && (
          <div className="space-y-4 md:space-y-5">
            {slide.futureItems.map((item, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed">
                <span className="text-primary font-semibold">{item.title}</span>
                <span className="text-muted-foreground"> – {item.description}</span>
              </p>
            ))}
          </div>
        )}

        {slide.footer && (
          <p className="text-sm md:text-base mt-8 text-muted-foreground italic">
            {slide.footer}
          </p>
        )}
      </div>
    </div>
  );
};

export default Slide;
