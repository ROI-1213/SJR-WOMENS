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
  CheckCircle2,
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

const filterCategories = [
  { id: 'all', label: 'All Programmes', count: 7 },
  { id: 'Finance & Banking', label: 'Finance & Banking', count: 2 },
  { id: 'Technology & Data', label: 'Technology & Data', count: 2 },
  { id: 'Career & Personal Skills', label: 'Career & Personal Skills', count: 3 },
];

export const EnrichmentCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<EnrichmentCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const openCourse = (course: EnrichmentCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const filteredCourses = enrichmentCourses.filter(course => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Finance & Banking') {
      return course.category === 'Accounting & Finance' || course.category === 'Banking & Finance';
    }
    if (activeFilter === 'Technology & Data') {
      return course.category === 'Data & Productivity' || course.category === 'Programming & Technology';
    }
    if (activeFilter === 'Career & Personal Skills') {
      return (
        course.category === 'Career Readiness' ||
        course.category === 'Communication & Soft Skills' ||
        course.category === 'Personality Development'
      );
    }
    return true;
  });

  return (
    <section
      id="enrichment-courses"
      aria-labelledby="enrichment-courses-title"
      className="border-b border-[#e5dfce] bg-[#f9f7f2] px-5 home-section text-[#182d23] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Header with formal title & quick link */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <span className="home-section-eyebrow">
              BEYOND THE CLASSROOM
            </span>
            <h2 id="enrichment-courses-title" className="home-section-title mt-1.5">
              Enrichment Courses
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#8b6528]">
              Empowering Students with Skills for a Brighter Future
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#143a29] transition-colors hover:text-[#c28422]"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Enquire About Enrichment Courses</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 text-[#c28422]" aria-hidden="true" />
          </Link>
        </div>

        {/* Narrative Description Banner */}
        <div className="mb-7 rounded-xl border border-[#e4ded0] bg-white/80 p-5 shadow-xs backdrop-blur-sm sm:p-6">
          <p className="text-sm leading-relaxed text-[#3b4e42] sm:text-base">
            At SJR College for Women, education goes beyond traditional academics. Our enrichment courses are designed to complement classroom learning through practical knowledge, industry-relevant skills, professional development, and career readiness. Through vocational and skill-oriented training, we aim to empower students with the confidence and capabilities to pursue opportunities in an evolving professional world.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-7 flex flex-wrap items-center gap-2" role="group" aria-label="Filter enrichment courses">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all shadow-xs ${
                activeFilter === cat.id
                  ? 'bg-[#143a29] text-white shadow-sm ring-2 ring-[#c28422]/50'
                  : 'border border-[#dcd6c5] bg-white text-[#455c4d] hover:border-[#143a29] hover:bg-[#faf9f5]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`grid h-4.5 w-4.5 place-items-center rounded-full text-[10px] font-bold ${
                  activeFilter === cat.id ? 'bg-[#dfa03e] text-[#0a2316]' : 'bg-[#eef2ed] text-[#143a29]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course, idx) => {
            const Icon = iconMap[course.iconName as keyof typeof iconMap] || BookOpenCheck;
            return (
              <article
                key={course.id}
                className="luxury-glass-card flex h-full flex-col justify-between p-5.5 transition-all duration-400 hover:border-[#c28422]"
              >
                <div>
                  {/* Card Top: Icon & Category Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#c28422]/30 bg-gradient-to-br from-[#faf4e6] to-[#f4e8cc] text-[#935e12] shadow-xs">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="rounded-md border border-[#c28422]/25 bg-[#faf6ee] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8b6528]">
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base font-bold text-[#143a29] transition-colors group-hover:text-[#185e3c]">
                    {course.displayTitle || course.officialTitle}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs leading-relaxed text-[#4d5e53]">
                    {course.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 border-t border-[#f0ece1] pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6528]">Key Highlights</p>
                    <ul className="mt-1.5 space-y-1">
                      {(course.learningHighlights || []).slice(0, 3).map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-xs text-[#3b4e42]">
                          <CheckCircle2 size={12} className="text-[#143a29] shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-5 border-t border-[#f0ece1] pt-3">
                  <button
                    type="button"
                    onClick={() => openCourse(course)}
                    className="group/btn flex w-full items-center justify-between rounded-lg border border-[#d6dfd8] bg-[#f8faf8] px-3.5 py-2 text-xs font-bold text-[#143a29] transition-all hover:border-[#143a29] hover:bg-[#143a29] hover:text-white"
                  >
                    <span>Course Details &amp; Syllabus</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <EnrichmentCourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
