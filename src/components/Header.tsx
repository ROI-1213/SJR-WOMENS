import { useEffect, useRef, useState } from 'react';
import { TopBar } from './header/TopBar';
import { LogoSection } from './header/LogoSection';
import { Navigation } from './header/Navigation';

export const Header = ({ contactPhone }: { contactPhone?: string }) => {
  const navSlot = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const syncNavigation = () => setIsScrolled((navSlot.current?.getBoundingClientRect().top ?? 0) < 0);
    syncNavigation();
    window.addEventListener('scroll', syncNavigation, { passive: true });
    window.addEventListener('resize', syncNavigation);
    return () => {
      window.removeEventListener('scroll', syncNavigation);
      window.removeEventListener('resize', syncNavigation);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <TopBar contactPhone={contactPhone} />
      <LogoSection />
      <div ref={navSlot} className="h-[49px] xl:h-[53px]">
        <Navigation isScrolled={isScrolled} />
      </div>
    </header>
  );
};
