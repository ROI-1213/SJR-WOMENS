import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';
import {
  enrichmentCourses,
  enrichmentFilters,
  type EnrichmentCourse,
  type EnrichmentFilter,
} from '@/data/enrichmentCourses';
import { EnrichmentCourseCard } from './enrichment/EnrichmentCourseCard';
import { EnrichmentCourseModal } from './enrichment/EnrichmentCourseModal';

export const EnrichmentCourses: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'tech' | 'finance' | 'career'>('all');
  const [activeCourse, setActiveCourse] = useState<EnrichmentCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCourses = enrichmentCourses.filter((course) => {
    if (selectedFilter === 'all') return true;
    return course.filterGroup === selectedFilter;
  });

  const handleExplore = (course: EnrichmentCourse) => {
    setActiveCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="enrichment-courses"
      aria-labelledby="enrichment-courses-heading"
      className="border-b border-[#e5dfce] bg-[#faf8f2] px-5 py-14 text-[#143a29] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c28422]/30 bg-[#c28422]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8b6528]">
            <Sparkles size={14} className="text-[#c28422]" aria-hidden="true" />
            <span>BEYOND THE CLASSROOM</span>
          </div>

          <h2
            id="enrichment-courses-heading"
            className="home-section-title home-section-title--center text-3xl font-bold tracking-tight text-[#123625] sm:text-4xl lg:text-5xl"
          >
            Enrichment Courses
          </h2>

          <p className="mt-2 text-base font-medium text-[#8b6528] sm:text-lg">
            Empowering Students with Skills for a Brighter Future
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#43534a] sm:text-base">
            At SJR College for Women, education goes beyond traditional academics. Our enrichment courses are designed to complement classroom learning through practical knowledge, industry-relevant skills, professional development, and career readiness. Through vocational and skill-oriented training, we aim to empower students with the confidence and capabilities to pursue opportunities in an evolving professional world.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {enrichmentFilters.map((filter) => {
            const count =
              filter.id === 'all'
                ? enrichmentCourses.length
                : enrichmentCourses.filter((c) => c.filterGroup === filter.id).length;
            const isSelected = selectedFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedFilter(filter.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'border border-[#123625] bg-[#123625] text-[#dfa03e] shadow-sm'
                    : 'border border-[#d6cfb8] bg-white text-[#43534a] hover:border-[#c28422] hover:text-[#123625]'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`grid size-5 place-items-center rounded-full text-[10px] font-bold ${
                    isSelected ? 'bg-[#dfa03e] text-[#123625]' : 'bg-[#faf8f2] text-[#8b6528]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => {
            const isSeventhInAll = filteredCourses.length === 7 && index === 6;
            return (
              <div
                key={course.id}
                className={isSeventhInAll ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
              >
                <EnrichmentCourseCard course={course} onExplore={handleExplore} />
              </div>
            );
          })}
        </div>

        {/* Section Bottom Call-to-Action */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#c28422]/30 bg-gradient-to-br from-[#123625] via-[#16432f] to-[#0d2a1c] p-7 text-white shadow-md sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <BookOpen size={18} className="text-[#dfa03e]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
                  Skill-Oriented Practical Training
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold leading-snug sm:text-3xl text-white">
                Build Skills Beyond Academics
              </h3>
              <p className="mt-2 text-sm text-emerald-100/85">
                Explore opportunities to develop practical knowledge, strengthen professional abilities, and prepare for the next stage of your academic and career journey.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-lg border border-[#dfa03e] bg-[#dfa03e] px-6 py-3.5 text-sm font-bold text-[#102d21] shadow transition-all duration-200 hover:bg-[#e8b158] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dfa03e]"
            >
              <span>Enquire About Enrichment Courses</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Accessible Exploration Modal */}
        <EnrichmentCourseModal
          course={activeCourse}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};
