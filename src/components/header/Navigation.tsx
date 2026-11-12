import { useEffect, useRef, useState } from 'react';
import { BookOpen, ChevronDown, FileText, GraduationCap } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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

const DesktopDropdown = ({ item, room, close }: { item: MainMenuItem; room: number; close: () => void }) => {
  const { key, dropdown } = item;
  const isAdmissions = key === 'admissions';
  const isStudentServices = key === 'student-services';

  return (
    <div
      id={`${key}-navigation-desktop`}
      style={{ maxHeight: room }}
      className={cn(
        'absolute top-full z-50 overflow-y-auto overscroll-contain rounded-b-xl border border-[#177249]/20 bg-white p-2 shadow-xl',
        panelWidths[key],
        isAdmissions && 'p-5',
        !compactKeys.includes(key) && 'border-t-4 border-t-[#ff8c00]',
        isStudentServices && 'border-t-4 border-t-[#ff8c00] p-3 [@media(max-height:480px)]:p-2'
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
            'block rounded-md px-3 py-2 text-sm font-medium text-[#164633] hover:bg-[#edf5ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]',
            isActive && 'bg-[#edf5ef] underline decoration-[#ff8c00] underline-offset-4',
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
  const close = () => setActiveDropdown('');

  useEffect(() => setActiveDropdown(''), [pathname, isScrolled]);

  useEffect(() => {
    if (!activeDropdown) return;
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setActiveDropdown('');
    };
    const closeOnViewportChange = () => setActiveDropdown('');
    document.addEventListener('pointerdown', outside);
    window.addEventListener('resize', closeOnViewportChange);
    window.addEventListener('scroll', closeOnViewportChange, { passive: true });
    return () => {
      document.removeEventListener('pointerdown', outside);
      window.removeEventListener('resize', closeOnViewportChange);
      window.removeEventListener('scroll', closeOnViewportChange);
    };
  }, [activeDropdown]);

  return (
    <nav ref={navRef} aria-label="Primary navigation" className={`z-50 border-b border-black/10 bg-[#177249] shadow-lg ${isScrolled ? 'fixed inset-x-0 top-0' : 'relative'}`}>
      <div className="container mx-auto flex items-center px-4">
        <ul className="hidden w-full items-center xl:flex">
          {menuItems.map(item => {
            const open = activeDropdown === item.key;
            const compact = compactKeys.includes(item.key);
            const current = item.dropdown?.some(link => link.href === pathname || link.submenu?.some(sub => sub.href === pathname)) || item.href === pathname;
            const panelId = `${item.key}-navigation-desktop`;
            return (
              <li
                key={item.key}
                className="relative flex-1"
                onPointerEnter={event => { if (event.pointerType === 'mouse') setActiveDropdown(item.dropdown ? item.key : ''); }}
                onPointerLeave={event => { if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) close(); }}
                onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}
                onKeyDown={event => {
                  if (event.key === 'Escape' && open) {
                    event.currentTarget.querySelector('button')?.focus();
                    close();
                  }
                }}
              >
                <div className={cn('group relative flex items-center justify-center border-r border-white/20 text-sm font-semibold text-white hover:bg-black/15', current && item.dropdown && 'after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-[#ff8c00]')}>
                  {!compact && <NavLink end to={item.href} onClick={close} className={cn('flex min-h-[52px] items-center whitespace-nowrap pl-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white', !item.dropdown && 'w-full justify-center px-3')}>{item.label}</NavLink>}
                  {item.dropdown && (
                    <button
                      type="button"
                      aria-label={compact ? undefined : `${item.label} menu`}
                      aria-expanded={open}
                      aria-controls={open ? panelId : undefined}
                      onClick={() => setActiveDropdown(open ? '' : item.key)}
                      className={cn('flex min-h-[52px] items-center justify-center gap-2 whitespace-nowrap px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white', compact && 'w-full px-3')}
                    >
                      {compact && item.label}
                      <ChevronDown size={16} className={cn('shrink-0 transition-transform', open && 'rotate-180')} aria-hidden="true" />
                    </button>
                  )}
                </div>
                {open && item.dropdown && <DesktopDropdown item={item} room={Math.max(96, window.innerHeight - (navRef.current?.getBoundingClientRect().bottom ?? 0) - 12)} close={close} />}
              </li>
            );
          })}
        </ul>
        <MobileNavigation />
      </div>
    </nav>
  );
};
