import { useEffect, useRef, useState } from 'react';
import { TopBar } from './header/TopBar';
import { LogoSection } from './header/LogoSection';
import { Navigation } from './header/Navigation';

export const Header = ({ contactPhone }: { contactPhone?: string }) => {
  const navSlot = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const syncNavigation = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const next = (navSlot.current?.getBoundingClientRect().top ?? 0) < 0;
          setIsScrolled(prev => (prev !== next ? next : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    syncNavigation();
    window.addEventListener('scroll', syncNavigation, { passive: true });
    window.addEventListener('resize', syncNavigation, { passive: true });
    return () => {
      window.removeEventListener('scroll', syncNavigation);
      window.removeEventListener('resize', syncNavigation);
    };
  }, []);

  return (
    <header className="bg-[#153c2a] text-white shadow-sm">
      <TopBar contactPhone={contactPhone} />
      <LogoSection />
      <div ref={navSlot} className="h-[49px] xl:h-[53px]">
        <Navigation isScrolled={isScrolled} />
      </div>
    </header>
  );
};
