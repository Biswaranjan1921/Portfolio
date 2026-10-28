import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-y-0 translate-x-0 opacity-100 scale-100';
    if (direction === 'up') return 'translate-y-8 opacity-0 scale-[0.98]';
    if (direction === 'down') return '-translate-y-8 opacity-0 scale-[0.98]';
    if (direction === 'left') return 'translate-x-8 opacity-0';
    if (direction === 'right') return '-translate-x-8 opacity-0';
    return 'opacity-0 scale-95';
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
}
