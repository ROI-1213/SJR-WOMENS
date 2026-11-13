import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Calculator,
  Code2,
  FileSpreadsheet,
  Landmark,
  MessagesSquare,
  Sparkles,
  Target,
  BookOpenCheck,
} from 'lucide-react';
import { enrichmentCourses, type EnrichmentCourse } from '@/data/enrichmentCourses';
import { EnrichmentCourseModal } from './enrichment/EnrichmentCourseModal';

const iconMap = {
  Calculator,
  FileSpreadsheet,
  Code2,
  Briefcase,
  Target,
  Landmark,
  MessagesSquare,
};

export const EnrichmentCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<EnrichmentCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCourse = (course: EnrichmentCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section
      id="enrichment-courses"
      aria-labelledby="enrichment-courses-title"
      className="border-b border-[#e1e6e1] bg-[#f8faf8] px-5 home-section text-[#182d23] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Header with formal title & quick link (matching image 1) */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c28422]">
              BEYOND THE CLASSROOM
            </span>
            <h2 id="enrichment-courses-title" className="home-section-title mt-1">
              Enrichment Courses
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
          >
            Enquire About Enrichment Courses
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {/* 2-Column Grid (matching image 1) */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-8">
          {/* Formal Spotlight Card (matching image 1 NAAC card) */}
          <article className="relative isolate flex min-h-56 flex-col justify-between overflow-hidden rounded-xl border border-[#c28422]/40 bg-gradient-to-br from-[#123625] via-[#16432f] to-[#0d2a1c] p-6 text-white shadow-md sm:p-8">
            <Sparkles
              className="pointer-events-none absolute -bottom-10 -right-8 -z-10 h-60 w-60 text-white/[0.07]"
              strokeWidth={0.8}
              aria-hidden="true"
            />
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[#c28422]/40 bg-[#c28422]/20 text-[#dfa03e]">
                  <Sparkles size={18} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
                  SKILL &amp; CAREER READINESS
                </span>
              </div>
              <p className="home-display-title text-7xl font-normal leading-none tracking-tight text-[#dfa03e] sm:text-8xl">
                07
              </p>
              <p className="mt-2 text-sm font-semibold text-white/95">Certified Enrichment Programmes</p>
              <p className="mt-1 text-xs leading-relaxed text-white/75">
                Vocational and skill-oriented training complementing undergraduate &amp; postgraduate degrees at SJR College for Women.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openCourse(enrichmentCourses[0])}
              className="mt-6 inline-flex items-center gap-1.5 self-start text-xs font-semibold uppercase tracking-wider text-[#dfa03e] underline decoration-[#dfa03e]/60 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Explore Course Syllabi &amp; Highlights
              <ArrowRight size={13} aria-hidden="true" />
            </button>
          </article>

          {/* Programmes Grid (matching image 1 right column) */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-bold uppercase tracking-wider text-[#143a29]">
                Available Enrichment Courses
              </h3>
              <span className="text-xs text-neutral-500">Karnataka Skill Dev &amp; Industry Aligned</span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {enrichmentCourses.map((course, index) => {
                const Icon = iconMap[course.iconName] || BookOpenCheck;
                const isSeventh = index === enrichmentCourses.length - 1;
                return (
                  <li key={course.id} className={isSeventh ? 'min-w-0 sm:col-span-2' : 'min-w-0'}>
                    <button
                      type="button"
                      onClick={() => openCourse(course)}
                      className="group flex h-full w-full items-start gap-3 rounded-xl border border-[#d8e2d9] bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#143a29] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29] lg:p-5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#c8decb] bg-[#eef5f0] text-[#143a29] transition-colors group-hover:bg-[#143a29] group-hover:text-white">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-bold leading-tight text-[#143a29] group-hover:text-[#17563b]">
                          {course.displayTitle}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-[#45584d]">
                          {course.category}
                          {course.association ? ' · In Assoc. with KSDC' : ''}
                        </span>
                      </span>
                      <ArrowRight
                        size={16}
                        className="mt-1 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-[#143a29]"
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Action Button (matching image 1 bottom row) */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#123625] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#194c34] hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123625]"
          >
            Enquire About Enrichment Courses
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <span className="text-xs text-[#52645a]">
            Enrichment courses run concurrently with regular degree semesters. Contact department coordinators during college hours.
          </span>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <EnrichmentCourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
