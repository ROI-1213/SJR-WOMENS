import { useEffect, useState } from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sheet, SheetClose, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { menuItems, type BaseMenuItem, type MainMenuItem } from '@/data/navigationData';
import { collegeLinks } from '@/data/navigation/collegeLinks';
import { mandatoryDisclosureItems } from '@/data/navigation/mandatoryDisclosureData';

const primaryDestinations = new Set(menuItems.flatMap(item => [
  item.href,
  ...(item.dropdown ?? []).flatMap(link => [link.href, ...(link.submenu ?? []).map(sub => sub.href)]),
]));
const secondaryLinks = collegeLinks.filter(link => !primaryDestinations.has(link.href));

const sectionLabels: Record<string, string> = {
  academics: 'All programmes',
  departments: 'Departments overview',
  admissions: 'Admissions overview',
  infrastructure: 'Infrastructure overview',
};

const MobileLink = ({ href, label, close }: BaseMenuItem & { close: () => void }) => (
  <NavLink
    to={href}
    end
    onClick={close}
    className={({ isActive }) => `flex min-h-11 items-center rounded-md px-3 py-2 text-sm leading-snug transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${isActive ? 'bg-white/15 font-semibold underline decoration-[#ff8c00] underline-offset-4' : ''}`}
  >
    {label}
  </NavLink>
);

const MobileGroup = ({ item, close }: { item: MainMenuItem; close: () => void }) => (
  <details className="group">
    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white [&::-webkit-details-marker]:hidden">
      {item.label}
      <ChevronDown size={17} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
    </summary>
    <ul id={`${item.key}-navigation-mobile`} className="mb-2 ml-2 border-l border-[#ff8c00]/75 pl-2">
      {sectionLabels[item.key] && <li><MobileLink href={item.href} label={sectionLabels[item.key]} close={close} /></li>}
      {item.dropdown?.map(link => link.submenu?.length ? (
        <li key={link.href} className="pt-2">
          <p className="px-3 pb-1 text-xs font-bold text-white/90">{link.label}</p>
          <ul>
            {link.submenu.map(sub => <li key={sub.href}><MobileLink {...sub} close={close} /></li>)}
            {!link.submenu.some(sub => sub.href === link.href) && <li><MobileLink {...link} close={close} /></li>}
          </ul>
        </li>
      ) : <li key={link.href}><MobileLink {...link} close={close} /></li>)}
    </ul>
  </details>
);

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const close = () => setOpen(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button type="button" aria-label="Open navigation" className="ml-auto flex size-12 items-center justify-center rounded-md text-white transition-colors hover:bg-black/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white xl:hidden">
          <Menu size={24} aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay className="z-[60] bg-black/55" />
        <SheetPrimitive.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-[61] flex h-dvh w-full max-w-[27rem] flex-col border-l border-white/15 bg-[#177249] text-white shadow-xl motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:slide-in-from-right motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:slide-out-to-right"
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/20 px-4 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-5">
            <SheetTitle className="font-bold text-white">Navigation</SheetTitle>
            <SheetClose aria-label="Close navigation" className="grid size-11 shrink-0 place-items-center rounded-md text-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white">
              <X size={23} aria-hidden="true" />
            </SheetClose>
          </div>
          <nav aria-label="Mobile navigation" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-4">
            <ul className="space-y-0.5">
              {menuItems.map(item => (
                <li key={item.key}>{item.dropdown ? <MobileGroup item={item} close={close} /> : <MobileLink {...item} close={close} />}</li>
              ))}
            </ul>
            <div className="mt-3 border-t border-white/25 pt-3">
              <p className="px-3 pb-1 text-xs font-semibold text-white/90">College links</p>
              <ul className="space-y-0.5">
                {mandatoryDisclosureItems.map(item => <li key={item.key}><MobileGroup item={item} close={close} /></li>)}
                {secondaryLinks.map(link => <li key={link.href}><MobileLink {...link} close={close} /></li>)}
              </ul>
            </div>
          </nav>
        </SheetPrimitive.Content>
      </SheetPortal>
    </Sheet>
  );
};
