import { useEffect, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instituteName } from '@/data/institute';
import { placementPages, type PlacementPageKey } from '@/data/navigation/placementsMenuData';
import { SectionPageLayout } from './SectionPageLayout';

interface PlacementLayoutProps {
  page: PlacementPageKey;
  related: readonly PlacementPageKey[];
  children: ReactNode;
}

export const PlacementLayout = ({ page, related, children }: PlacementLayoutProps) => {
  const title = page === 'photos' ? 'Placement Photos' : placementPages[page].label;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ${instituteName}`;
    return () => { document.title = previousTitle; };
  }, [title]);

  return (
    <SectionPageLayout
      pageTitle={title}
      breadcrumbPath={title}
      section={{ label: 'Placements', href: placementPages.overview.href }}
      brandedBreadcrumb
      showFloatingApply={false}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 text-neutral-800 sm:px-6 sm:py-12">
        <div className="space-y-10 sm:space-y-14">{children}</div>
        <nav aria-labelledby="placement-related-title" className="mt-12 border-t border-[#177249]/20 pt-6 sm:mt-16">
          <h2 id="placement-related-title" className="mb-4 text-xl font-bold text-[#177249]">Explore Placements</h2>
          <ul className="grid gap-2 sm:grid-cols-3 sm:gap-3">
            {related.map(key => (
              <li key={key}>
                <Link to={placementPages[key].href} className="group flex h-full items-center justify-between gap-3 rounded-lg border border-[#177249]/20 bg-[#177249]/5 px-4 py-3 text-sm font-semibold text-[#177249] transition-colors hover:border-[#177249] hover:bg-[#177249]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]">
                  {placementPages[key].label}
                  <ArrowRight className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </SectionPageLayout>
  );
};
