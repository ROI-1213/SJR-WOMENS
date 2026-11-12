import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { departmentDetails } from '@/data/departmentDetails';
import { departmentsDropdownData } from '@/data/navigation/departmentsMenuData';

export default function DepartmentsOverview() {
  return (
    <SectionPageLayout section={{ label: 'Departments', href: '/departments' }} pageTitle="Departments" breadcrumbPath="Overview" showFloatingApply={false}>
      <section aria-labelledby="department-directory" className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-12">
        <h2 id="department-directory" className="mb-5 text-2xl font-bold text-[color:var(--section-heading-color)]">Department Directory</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departmentsDropdownData.map(({ slug, label, href }) => (
            <li key={slug}>
              <Link to={href} className="flex h-full items-start gap-3 rounded-xl border border-neutral-200 border-l-4 border-l-[#ff8c00] p-4 transition-colors hover:border-[#177249]">
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-[color:var(--section-heading-color)]">{label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-700">{departmentDetails[slug].intro}</p>
                </div>
                <ArrowRight size={17} className="shrink-0 text-[#177249]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SectionPageLayout>
  );
}
