import { useEffect, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { instituteName } from '@/data/institute';
import { researchPages, type ResearchPageKey } from '@/data/navigation/researchMenuData';

export const researchHeading = 'text-2xl font-bold leading-tight text-[#177249] sm:text-3xl';
export const researchCard = 'rounded-2xl border border-[#177249]/15 bg-white p-5 sm:p-7';
export const researchLink = 'inline-flex max-w-full items-center gap-2 rounded-sm font-semibold text-[#177249] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#177249]';

interface ResearchLayoutProps {
  page: ResearchPageKey;
  related: readonly ResearchPageKey[];
  children: ReactNode;
}

export const ResearchLayout = ({ page, related, children }: ResearchLayoutProps) => {
  const title = researchPages[page].label;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ${instituteName}`;
    return () => { document.title = previousTitle; };
  }, [title]);

  return (
    <SectionPageLayout
      pageTitle={title}
      breadcrumbPath={title}
      section={{ label: 'Research', href: researchPages.activities.href }}
      brandedBreadcrumb
      showFloatingApply={false}
    >
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 text-neutral-800 sm:space-y-14 sm:px-6 sm:py-12">
        {children}
        <nav aria-labelledby="research-related-title" className="border-t border-[#177249]/20 pt-6">
          <h2 id="research-related-title" className="mb-4 text-xl font-bold text-[#177249]">Explore Research</h2>
          <ul className="grid gap-2 sm:grid-cols-3 sm:gap-3">
            {related.map(key => (
              <li key={key}>
                <Link to={researchPages[key].href} className="group flex h-full items-center justify-between gap-2 rounded-lg border border-[#177249]/20 bg-[#177249]/5 px-4 py-3 text-sm font-semibold text-[#177249] hover:border-[#177249] hover:bg-[#177249]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]">
                  {researchPages[key].label}
                  <ArrowRight className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </SectionPageLayout>
  );
};

export const ResearchIntro = ({ title, image, alt, children }: { title: string; image: string; alt: string; children: ReactNode }) => (
  <section aria-label={title} className="grid overflow-hidden rounded-2xl border border-[#177249]/15 bg-[#177249]/5 md:grid-cols-[1fr_0.9fr]">
    <div className="flex flex-col justify-center gap-4 p-5 sm:p-8 lg:p-10">
      <div className="h-1 w-10 rounded-full bg-[#ff8c00]" aria-hidden="true" />
      <h2 className={researchHeading}>{title}</h2>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </div>
    <div className="relative aspect-[16/9] overflow-hidden bg-[#177249]/10 md:aspect-auto md:min-h-64">
      <img src={image} alt={alt} className="absolute inset-0 size-full object-cover" />
    </div>
  </section>
);

export const ResearchIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-grid size-11 shrink-0 place-items-center rounded-xl border-b-2 border-[#ff8c00] bg-[#177249]/10 text-[#177249]" aria-hidden="true">
    <Icon className="size-5" />
  </span>
);

export const ResearchSource = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`${researchLink} text-sm`}>
    <span>{children}</span>
    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);
