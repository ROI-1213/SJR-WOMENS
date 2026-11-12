import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 0);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      disabled={!isVisible}
      className={`fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-30 rounded-full bg-[#177249] p-3 text-white shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#177249] focus-visible:ring-offset-2 motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:scale-110 ${
        isVisible ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none opacity-0 motion-safe:translate-y-10'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  );
};
