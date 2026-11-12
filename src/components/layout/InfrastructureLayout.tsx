import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { instituteName } from '@/data/institute';
import { infrastructureMenuData } from '@/data/navigation/infrastructureMenuData';
import { SectionPageLayout } from './SectionPageLayout';

interface InfrastructureLayoutProps {
  children: ReactNode;
  pageTitle: string;
  breadcrumbPath?: string;
  subtitle?: string;
  showRelated?: boolean;
}

export const InfrastructureLayout = ({
  children,
  pageTitle,
  breadcrumbPath = pageTitle,
  subtitle,
  showRelated = true,
}: InfrastructureLayoutProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${pageTitle} | ${instituteName}`;
    return () => { document.title = previousTitle; };
  }, [pageTitle]);

  return (
    <SectionPageLayout
      pageTitle={pageTitle}
      breadcrumbPath={breadcrumbPath}
      section={{ label: 'Infrastructure', href: '/infrastructure' }}
      brandedBreadcrumb
    >
      {subtitle && <p className="bg-[#177249]/5 px-4 py-4 text-center font-medium text-[#177249]">{subtitle}</p>}
      {children}
      {showRelated && (
        <section aria-labelledby="more-infrastructure" className="border-t border-[#177249]/15 bg-[#177249]/5 px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 id="more-infrastructure" className="mb-6 text-2xl font-bold text-[#177249] sm:text-3xl">Explore More Infrastructure</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {infrastructureMenuData.filter(page => page.label !== pageTitle).map(({ label, href, description }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="group flex h-full items-start justify-between gap-3 rounded-xl border border-[#177249]/15 bg-white p-5 transition-colors hover:border-[#177249] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
                  >
                    <span>
                      <span className="block font-semibold text-[#177249] group-hover:underline">{label}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-neutral-700">{description}</span>
                    </span>
                    <ArrowUpRight className="mt-0.5 size-5 shrink-0 text-[#177249]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </SectionPageLayout>
  );
};
