import { useEffect, useRef, useState } from 'react';
import { BookOpen, ChevronDown, FileText, GraduationCap } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { menuItems, type MainMenuItem } from '@/data/navigationData';
import { cn } from '@/lib/utils';
import { MobileNavigation } from './MobileNavigation';

const compactKeys = ['about', 'academics', 'departments', 'student-services'];

const panelWidths: Record<string, string> = {
  about: 'left-0 w-64',
  academics: 'left-0 w-80',
  departments: 'left-0 w-[30rem]',
  admissions: 'left-0 w-[35rem]',
  infrastructure: 'left-0 w-64',
  'student-services': 'right-0 w-[49rem] [@media(max-height:480px)]:w-[53.5rem]',
  'media-center': 'left-0 w-64',
  placements: 'right-0 w-[32rem]',
  research: 'right-0 w-64',
};

const DesktopDropdown = ({ item, close }: { item: MainMenuItem; close: () => void }) => {
  const { key, dropdown } = item;
  const isAdmissions = key === 'admissions';
  const isStudentServices = key === 'student-services';

  return (
    <div
      id={`${key}-navigation-desktop`}
      className={cn(
        'absolute top-full z-50 max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain rounded-b-xl border border-[#177249]/20 border-t-4 border-t-[#ff8c00] bg-white p-2 shadow-2xl',
        panelWidths[key],
        isAdmissions && 'p-5',
        isStudentServices && 'p-3 [@media(max-height:480px)]:p-2'
      )}
    >
      <ul className={cn(
        'grid gap-0.5',
        (key === 'departments' || key === 'placements') && 'grid-cols-2 gap-1',
        isAdmissions && 'grid-cols-2 gap-4',
        isStudentServices && 'grid-cols-3 gap-1 [@media(max-height:480px)]:grid-cols-4'
      )}>
        {dropdown?.map(link => {
          const Icon = link.label === 'Application Process' ? FileText : link.label === 'Scholarships' ? GraduationCap : BookOpen;
          const linkClass = ({ isActive }: { isActive: boolean }) => cn(
            'block rounded-md px-3 py-2 text-sm font-medium text-[#177249] transition-colors duration-75 hover:bg-[#edf5ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
            isActive && 'bg-[#edf5ef] font-semibold underline decoration-[#ff8c00] underline-offset-4',
            isStudentServices && 'whitespace-nowrap border-l-2 border-transparent px-2.5 font-semibold hover:border-l-[#ff8c00] [@media(max-height:480px)]:px-2 [@media(max-height:480px)]:py-1 [@media(max-height:480px)]:text-xs',
            isStudentServices && isActive && 'border-l-[#ff8c00]'
          );
          return (
            <li key={link.href}>
              <NavLink to={link.href} end onClick={close} className={linkClass}>
                {isAdmissions ? <span className="flex items-center gap-2 font-semibold"><Icon size={16} className="shrink-0 text-[#177249]" aria-hidden="true" />{link.label}</span> : link.label}
              </NavLink>
              {link.submenu?.length ? (
                <ul className="mt-1 border-t border-[#177249]/15 pt-1">
                  {link.submenu.map(sub => <li key={sub.href}><NavLink to={sub.href} end onClick={close} className={linkClass}>{sub.label}</NavLink></li>)}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const { pathname } = useLocation();
  const [activeDropdown, setActiveDropdown] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveDropdown('');
  };

  const handlePointerEnter = (key: string, hasDropdown: boolean) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActiveDropdown(hasDropdown ? key : '');
  };

  const handlePointerLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setActiveDropdown('');
    }, 60);
  };

  useEffect(() => close(), [pathname]);

  useEffect(() => {
    if (!activeDropdown) return;
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) close();
    };

    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('pointerdown', outside);
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, [activeDropdown]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className={`z-50 border-b border-black/10 bg-[#177249] shadow-lg ${
        isScrolled ? 'fixed inset-x-0 top-0 shadow-md' : 'relative'
      }`}
    >
      <div className="container mx-auto flex items-center px-4">
        <ul className="hidden w-full items-stretch border-l border-white/20 xl:flex">
          {menuItems.map(item => {
            const open = activeDropdown === item.key;
            const current =
              item.dropdown?.some(link => link.href === pathname || link.submenu?.some(sub => sub.href === pathname)) ||
              item.href === pathname;
            const panelId = `${item.key}-navigation-desktop`;
            return (
              <li
                key={item.key}
                className="relative flex-1 border-r border-white/20"
                onMouseEnter={() => handlePointerEnter(item.key, !!item.dropdown)}
                onMouseLeave={handlePointerLeave}
                onBlur={event => {
                  if (!event.currentTarget.contains(event.relatedTarget)) close();
                }}
                onKeyDown={event => {
                  if (event.key === 'Escape' && open) {
                    event.currentTarget.querySelector('a')?.focus();
                    close();
                  }
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  <NavLink
                    end={!item.dropdown}
                    to={item.href}
                    onClick={close}
                    aria-expanded={item.dropdown ? open : undefined}
                    aria-controls={open && item.dropdown ? panelId : undefined}
                    className={cn(
                      'flex min-h-[48px] w-full items-center justify-center gap-1.5 px-2 py-3 text-center whitespace-nowrap text-[13.5px] 2xl:text-[14.5px] font-bold tracking-[0.01em] text-white transition-colors duration-100 hover:bg-[#0e2b1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white',
                      current && 'bg-[#0e2b1e] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#ff8c00]'
                    )}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={cn('shrink-0 transition-transform duration-150', open && 'rotate-180')}
                        aria-hidden="true"
                      />
                    )}
                  </NavLink>
                </div>
                {open && item.dropdown && (
                  <DesktopDropdown
                    item={item}
                    close={close}
                  />
                )}
              </li>
            );
          })}
        </ul>
        <MobileNavigation />
      </div>
    </nav>
  );
};
