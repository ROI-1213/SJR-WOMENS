import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Briefcase,
  Calculator,
  CheckCircle2,
  Code2,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  MessagesSquare,
  Sparkles,
  Target,
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

const filterTabs = [
  { id: 'all', label: 'All', count: 7 },
  { id: 'tech', label: 'Tech & Data', count: 2 },
  { id: 'finance', label: 'Finance & Banking', count: 2 },
  { id: 'career', label: 'Career Skills', count: 3 },
];

export const EnrichmentCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<EnrichmentCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const openCourse = (course: EnrichmentCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const filteredCourses = enrichmentCourses.filter(course => {
    if (activeTab === 'all') return true;
    if (activeTab === 'finance') {
      return course.category === 'Accounting & Finance' || course.category === 'Banking & Finance';
    }
    if (activeTab === 'tech') {
      return course.category === 'Data & Productivity' || course.category === 'Programming & Technology';
    }
    if (activeTab === 'career') {
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
      className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-10 text-[#177249] sm:px-8 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Section Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="home-section-eyebrow">BEYOND THE CLASSROOM</span>
            </div>
            <h2 id="enrichment-courses-title" className="home-section-title mt-1">
              Enrichment Courses
            </h2>
            <p className="mt-0.5 text-xs text-[#52645a] sm:text-sm">
              Vocational, skill-oriented certifications designed to complement degree education with practical competencies.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#177249] transition-colors hover:text-[#c28422] sm:text-sm"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Enquire About Enrichment Programmes</span>
            <ArrowRight size={14} className="text-[#c28422] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Space-Efficient 2-Column Layout */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-8">
          
          {/* Executive Value Addition Plaque */}
          <article className="plaque-card relative isolate flex flex-col justify-between overflow-hidden p-6 text-white shadow-xl sm:p-7">
            {/* Watermark Crest */}
            <Award className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-52 w-52 text-white/[0.04]" strokeWidth={0.7} aria-hidden="true" />

            <div>
              {/* Badge */}
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#dfa03e]">
                <Sparkles size={12} className="text-[#dfa03e]" aria-hidden="true" />
                <span>Value-Added Certifications</span>
              </div>

              {/* Stat & Title */}
              <div className="flex items-baseline gap-3">
                <span className="home-display-title text-5xl font-normal leading-none tracking-tight text-[#dfa03e] drop-shadow-sm sm:text-6xl">
                  7+
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Career Skill Tracks</span>
                  <span className="text-[11px] text-[#dfa03e]">Integrated with Degree Curricula</span>
                </div>
              </div>

              {/* Brief narrative */}
              <p className="mt-3.5 text-xs leading-relaxed text-white/85">
                Our enrichment courses go beyond textbooks to empower students with hands-on technical skills, financial acumen, and professional readiness for an evolving job market.
              </p>

              {/* Institutional Hallmarks */}
              <ul className="mt-4 space-y-2 border-t border-white/15 pt-3.5 text-xs text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="shrink-0 text-[#dfa03e]" aria-hidden="true" />
                  <span>Hands-on lab training in computing &amp; finance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="shrink-0 text-[#dfa03e]" aria-hidden="true" />
                  <span>Industry-relevant syllabus with formal certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="shrink-0 text-[#dfa03e]" aria-hidden="true" />
                  <span>Interview preparedness &amp; communication enhancement</span>
                </li>
              </ul>
            </div>

            {/* Action */}
            <div className="mt-5 border-t border-white/15 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#dfa03e] bg-[#dfa03e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#125c3a] shadow-sm transition-all hover:bg-white hover:text-[#125c3a]"
              >
                <span>Enquire With Department</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </article>

          {/* Compact Course Offerings Matrix */}
          <div>
            {/* Subheader with Filter Tabs Embedded */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#dde5de] pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#177249] sm:text-sm">
                Available Courses ({filteredCourses.length})
              </h3>

              {/* Compact Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Course categories">
                {filterTabs.map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#177249] text-white shadow-2xs'
                        : 'border border-[#d2dcd3] bg-white text-[#486353] hover:border-[#177249]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`text-[10px] ${activeTab === tab.id ? 'text-[#dfa03e]' : 'text-[#718579]'}`}>
                      ({tab.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Compact 2-Column Course Cards Grid */}
            <div className="grid gap-2.5 sm:grid-cols-2">
              {filteredCourses.map((course, idx) => {
                const Icon = iconMap[course.iconName as keyof typeof iconMap] || BookOpenCheck;
                return (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => openCourse(course)}
                    className="luxury-glass-card group flex items-start gap-3 p-3 text-left transition-all duration-300 hover:border-[#c28422] hover:shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
                  >
                    {/* Icon */}
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#c4dcce] bg-gradient-to-br from-[#eef5f0] to-[#e0ede4] text-[#177249] shadow-2xs transition-all duration-300 group-hover:bg-[#177249] group-hover:text-white group-hover:border-[#177249]">
                      <Icon size={18} aria-hidden="true" />
                    </span>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="truncate text-xs font-bold text-[#177249] group-hover:text-[#185e3c]">
                          {course.displayTitle || course.officialTitle}
                        </span>
                        <span className="rounded bg-[#f0f4f0] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#486353] shrink-0">
                          {course.category.split(' ')[0]}
                        </span>
                      </div>
                      
                      <p className="mt-0.5 line-clamp-1 text-[11px] text-[#566c5f]">
                        {course.shortDescription}
                      </p>

                      <div className="mt-1.5 flex items-center justify-between text-[10px] font-semibold text-[#8b6528]">
                        <span>Skill Certification</span>
                        <span className="inline-flex items-center gap-0.5 text-[#c28422] group-hover:translate-x-0.5 transition-transform">
                          Syllabus <ArrowRight size={11} aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

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
