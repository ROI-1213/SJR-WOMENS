import { useEffect } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionPageLayout } from '@/components/layout/SectionPageLayout';
import { instituteName } from '@/data/institute';
import { studentServicesPages, type StudentServicesPageKey } from '@/data/navigation/studentServicesMenuData';
import { studentServicesContent } from '@/data/studentServicesContent';

const demoPhone = '+91 9876543210';
const actionClass = 'inline-flex max-w-full items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8c00]';

export const StudentServicesPage = ({ pageKey }: { pageKey: StudentServicesPageKey }) => {
  const page = studentServicesPages[pageKey];
  const content = studentServicesContent[pageKey];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${page.label} | ${instituteName}`;
    return () => { document.title = previousTitle; };
  }, [page.label]);

  return (
    <SectionPageLayout
      pageTitle={page.label}
      breadcrumbPath={page.label}
      section={{ label: 'Student Services', href: studentServicesPages.support.href }}
      contactPhone={demoPhone}
      brandedBreadcrumb
      showFloatingApply={false}
    >
      <article className="mx-auto max-w-6xl space-y-10 px-4 py-8 text-neutral-800 sm:space-y-14 sm:px-6 sm:py-12">
        <section aria-labelledby="student-introduction" className="grid overflow-hidden rounded-2xl border border-[#177249]/15 bg-[#177249]/5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)]">
          <div className="flex flex-col items-start justify-center p-5 sm:p-8 lg:p-11">
            <h2 id="student-introduction" className="border-l-4 border-[#ff8c00] pl-4 text-2xl font-bold leading-tight text-[#177249] sm:text-3xl lg:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-neutral-700 sm:mt-5">{content.introduction}</p>
            <a href="#student-guide" className={`${actionClass} mt-5 bg-[#177249] text-white hover:bg-[#135c3b]`}>
              {pageKey === 'antiRagging' ? 'How to report' : 'Read the guide'} <ArrowDown className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
          <div className="relative aspect-[3/2] md:aspect-auto md:min-h-72">
            <img
              src={`/images${page.href}.webp`}
              alt={content.imageAlt}
              className="absolute inset-0 size-full object-cover"
              decoding="async"
            />
          </div>
        </section>

        <section aria-labelledby="student-highlights">
          <h2 id="student-highlights" className="mb-5 border-b border-[#177249]/20 pb-3 text-2xl font-bold text-[#177249] sm:text-3xl">{content.highlightsHeading}</h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {content.highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-xl border border-[#177249]/15 bg-white p-5 sm:p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-lg bg-[#177249]/10 text-[#177249]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold leading-snug text-[#177249] sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="student-guide" aria-labelledby="student-guide-heading" className="grid scroll-mt-20 gap-6 rounded-2xl bg-[#153b2a] p-5 text-white sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-10">
          <div>
            <h2 id="student-guide-heading" className="border-l-4 border-[#ff8c00] pl-4 text-2xl font-bold sm:text-3xl">{content.guideHeading}</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/90">{content.guide}</p>
            {content.resource && (
              <a href={content.resource.href} className={`${actionClass} mt-5 bg-white text-[#177249] hover:bg-[#ff8c00] hover:text-neutral-950`}>
                {content.resource.label} <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
              </a>
            )}
          </div>
          <ol className="space-y-2.5">
            {content.steps.map(({ title, text }, index) => (
              <li key={title} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-3.5 sm:p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#ff8c00] text-xs font-bold text-neutral-950" aria-hidden="true">{index + 1}</span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/90">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          <section aria-labelledby="student-enquiries" className="rounded-xl border border-[#177249]/15 bg-[#177249]/5 p-5 sm:p-7">
            <h2 id="student-enquiries" className="text-2xl font-bold text-[#177249]">Enquiries</h2>
            <p className="mt-2 leading-relaxed text-neutral-700">{content.enquiry}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-700">
              <Phone className="size-4 text-[#177249]" aria-hidden="true" />
              <span className="font-semibold tabular-nums text-[#177249]">{demoPhone}</span>
              <span>(demo number)</span>
            </p>
            <Link to="/contact" className={`${actionClass} mt-5 bg-[#177249] text-white hover:bg-[#135c3b]`}>
              College contact page <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
          </section>
          <section aria-labelledby="related-student-services" className="rounded-xl border border-[#177249]/15 p-5 sm:p-7">
            <h2 id="related-student-services" className="text-2xl font-bold text-[#177249]">Related student services</h2>
            <ul className="mt-3 divide-y divide-[#177249]/15">
              {content.related.map(key => (
                <li key={key}>
                  <Link to={studentServicesPages[key].href} className="group flex items-center justify-between gap-3 py-2.5 text-sm font-semibold text-[#177249] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff8c00]">
                    {studentServicesPages[key].label}
                    <ArrowRight className="size-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </SectionPageLayout>
  );
};
