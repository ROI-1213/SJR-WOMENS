import { useEffect } from 'react';

/**
 * useScrollReveal Hook
 * High-performance, hardware-accelerated scroll reveal engine with dual trigger:
 * 1. Immediate viewport check on mount so initial sections are instantly visible.
 * 2. IntersectionObserver + passive scroll listener for silky-smooth reveals.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // If reduced motion is preferred, reveal everything immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const checkVisibility = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      const triggerBottom = window.innerHeight * 0.94;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerBottom) {
          el.classList.add('is-revealed');
        }
      });
    };

    // Immediate check so content in or near viewport reveals instantly
    checkVisibility();
    // Second check after render paint
    const timer = setTimeout(checkVisibility, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: '120px 0px 80px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);
};
