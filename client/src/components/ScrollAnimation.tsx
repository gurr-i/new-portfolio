import { useRef, useEffect, ReactNode, useState } from 'react';

export type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'flip-up' 
  | 'rotate-in';

interface ScrollAnimationProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation = ({
  children,
  type = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Add a small delay before applying the visible class
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay, isVisible]);

  // Map animation types to CSS classes
  const getAnimationClass = () => {
    switch (type) {
      case 'fade-up':
        return 'translate-y-10 opacity-0';
      case 'fade-down':
        return '-translate-y-10 opacity-0';
      case 'fade-left':
        return 'translate-x-10 opacity-0';
      case 'fade-right':
        return '-translate-x-10 opacity-0';
      case 'zoom-in':
        return 'scale-95 opacity-0';
      case 'flip-up':
        return 'rotateX-90 opacity-0';
      case 'rotate-in':
        return 'rotate-12 opacity-0';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible
          ? 'translate-y-0 translate-x-0 scale-100 rotate-0 opacity-100'
          : getAnimationClass()
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;