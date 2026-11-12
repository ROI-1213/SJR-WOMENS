import { ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness, Calculator, Check, Code2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { courseDetails } from '@/data/courseDetails';
import { programmeTitle, type AvailableProgramme } from '@/data/institute';

const programmeIcons = { bcom: Calculator, bba: BriefcaseBusiness, bca: Code2, mcom: BarChart3 };
const heading = 'text-2xl font-bold leading-tight text-[color:var(--section-heading-color)]';

export default function CoursePage({ programme }: { programme: AvailableProgramme }) {
  const course = courseDetails[programme.id];
  const title = programmeTitle(programme);
  const ProgrammeIcon = programmeIcons[programme.id];

  return (
    <SectionPageLayout section={{ label: 'Academics', href: '/academics' }} pageTitle={title} breadcrumbPath={programme.name} showFloatingApply={false}>
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:space-y-10 sm:px-6 sm:py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <section aria-labelledby="course-intro" className="rounded-xl border border-neutral-200 border-l-4 border-l-[#ff8c00] p-5 sm:p-7">
            <ProgrammeIcon size={26} className="mb-3 text-[#177249]" aria-hidden="true" />
            <h2 id="course-intro" className={heading}>About {programme.name}</h2>
            <p className="mt-3 leading-relaxed text-neutral-700">{course.introduction}</p>
          </section>
          <section aria-labelledby="course-overview" className="rounded-xl border border-neutral-200 bg-[#177249]/5 p-5 sm:p-7">
            <h2 id="course-overview" className={heading}>Programme Overview</h2>
            <p className="mt-3 leading-relaxed text-neutral-700">{course.overview}</p>
          </section>
        </div>

        <section aria-labelledby="course-learning">
          <h2 id="course-learning" className={heading}>Key Learning Areas</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.learning.map(({ title, description }) => (
              <li key={title} className="rounded-lg border border-neutral-200 p-4 sm:p-5">
                <h3 className="font-semibold text-[color:var(--section-heading-color)]">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-700">{description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-2 font-semibold text-neutral-700"><FileText size={16} aria-hidden="true" /> University syllabus</span>
            {course.syllabi.map(({ label, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-[#177249] underline underline-offset-4">
                {label}<ArrowUpRight size={14} className="shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="course-careers" className="rounded-xl bg-[#177249]/5 p-5 sm:p-7">
          <h2 id="course-careers" className={heading}>Skills &amp; Career Opportunities</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="font-semibold text-[color:var(--section-heading-color)]">Skills you can develop</h3>
              <ul className="mt-2 space-y-2 text-sm text-neutral-700">
                {course.skills.map(skill => (
                  <li key={skill} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#177249]" aria-hidden="true" />{skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[color:var(--section-heading-color)]">Potential pathways</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{course.careers}</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="course-benefits">
          <h2 id="course-benefits" className={heading}>Why Choose This Programme?</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {course.benefits.map(({ title, description }) => (
              <li key={title} className="border-l-2 border-[#ff8c00] pl-4">
                <h3 className="font-semibold text-[color:var(--section-heading-color)]">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-700">{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="course-admission" className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-[#177249] p-5 text-white sm:p-7">
          <div>
            <h2 id="course-admission" className="text-2xl font-bold">Admission Enquiry</h2>
            <p className="mt-1">Start your application for {programme.name}.</p>
          </div>
          <Link to="/admissions/online-application" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-[#177249] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8c00]">
            Apply Now <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </SectionPageLayout>
  );
}
