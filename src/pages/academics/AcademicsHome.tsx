import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { availableProgrammes, programmeTitle } from '@/data/institute';
import { courseDetails, enrichmentCourses } from '@/data/courseDetails';

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
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#177249]">
                    {courseDetails[programme.id].level}
                  </span>
                  <h2 className="mt-0.5 font-bold text-[color:var(--section-heading-color)]">{programmeTitle(programme)}</h2>
                  <p className="mt-1 text-sm text-neutral-700">{courseDetails[programme.id].summary}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-[#177249]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        {!level && (
          <div className="mt-12 border-t border-neutral-200 pt-10">
            <div className="mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-[#ff8c00]" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-[color:var(--section-heading-color)]">Enrichment &amp; Add-On Programmes</h2>
            </div>
            <p className="mb-6 text-sm text-neutral-700">
              Vocationally and professionally oriented add-on courses documented on the official SJR College for Women website to enhance employability.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {enrichmentCourses.map(item => (
                <li key={item.title} className="rounded-xl border border-neutral-200 bg-[#f8fbf8] p-5">
                  <span className="text-xs font-semibold text-[#177249]">{item.category}</span>
                  <h3 className="mt-1 font-bold text-[#182d23]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.description}</p>
                  {item.partner && <p className="mt-2 text-xs font-medium text-[#185d40]">In association with {item.partner}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </SectionPageLayout>
  );
}
