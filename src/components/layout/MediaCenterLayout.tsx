import { useEffect, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instituteName } from '@/data/institute';
import { mediaCenterMenuData, mediaCenterPages } from '@/data/navigation/mediaCenterMenuData';
import { SectionPageLayout } from './SectionPageLayout';

interface MediaCenterLayoutProps {
  page: keyof typeof mediaCenterPages;
  previewNote?: string;
  showRelated?: boolean;
  children: ReactNode;
}

export const MediaCenterLayout = ({ page, previewNote, showRelated = true, children }: MediaCenterLayoutProps) => {
  const { label, href } = mediaCenterPages[page];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${label} | ${instituteName}`;
    return () => { document.title = previousTitle; };
  }, [label]);

  return (
    <SectionPageLayout
      pageTitle={label}
      breadcrumbPath={label}
      section={{ label: 'Media Center', href: mediaCenterPages.events.href }}
      showFloatingApply={false}
      brandedBreadcrumb
    >
      <div className="mx-auto max-w-6xl px-4 py-8 text-neutral-800 sm:px-6 sm:py-12">
        {previewNote && (
          <p className="mb-5 rounded-r-lg border-l-4 border-[#ff8c00] bg-[#ff8c00]/10 px-4 py-2.5 text-sm leading-relaxed text-neutral-800">{previewNote}</p>
        )}
        <div className="space-y-10 sm:space-y-14">{children}</div>

        {showRelated && <nav aria-label="More from the Media Center" className="mt-12 border-t border-[#177249]/20 pt-6 sm:mt-16">
          <h2 className="mb-4 text-xl font-bold text-[#177249]">More from the Media Center</h2>
          <ul className="grid gap-2 sm:grid-cols-3 sm:gap-3">
            {mediaCenterMenuData.filter(item => item.href !== href).map(item => (
              <li key={item.href}>
                <Link to={item.href} className="group flex items-center justify-between gap-3 rounded-lg border border-[#177249]/20 bg-[#177249]/5 px-4 py-3 text-sm font-semibold text-[#177249] transition-colors hover:border-[#177249] hover:bg-[#177249]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]">
                  {item.label}
                  <ArrowRight className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>}
      </div>
    </SectionPageLayout>
  );
};
