import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { availableProgrammes, programmeTitle } from '@/data/institute';
import { courseDetails } from '@/data/courseDetails';

const academicSection = { label: 'Academics', href: '/academics' };

export default function AcademicsHome({ level }: { level?: 'undergraduate' | 'postgraduate' }) {
  const title = level === 'undergraduate' ? 'Undergraduate Programmes' : level === 'postgraduate' ? 'Postgraduate Programmes' : 'Academic Programmes';
  const programmes = availableProgrammes.filter(programme => !level || courseDetails[programme.id].level === level);

  return (
    <SectionPageLayout section={academicSection} pageTitle={title} breadcrumbPath={level ? title : 'Overview'}>
      <section aria-label={title} className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <ul className="grid gap-4 sm:grid-cols-2">
          {programmes.map(programme => (
            <li key={programme.id}>
              <Link to={programme.href} className="flex h-full items-center gap-4 rounded-xl border border-neutral-200 border-l-4 border-l-[#ff8c00] p-5 transition-colors hover:border-[#177249]">
                <div className="min-w-0 flex-1">
                  <h2 className="font-bold text-[color:var(--section-heading-color)]">{programmeTitle(programme)}</h2>
                  <p className="mt-1 text-sm text-neutral-700">{courseDetails[programme.id].summary}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-[#177249]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SectionPageLayout>
  );
}
