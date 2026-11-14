import React from 'react';
import {
  Calculator,
  FileSpreadsheet,
  Code2,
  Briefcase,
  Target,
  Landmark,
  MessagesSquare,
  ArrowRight,
  CheckCircle2,
  Building,
  BookOpenCheck,
} from 'lucide-react';
import type { EnrichmentCourse } from '@/data/enrichmentCourses';

const iconMap = {
  Calculator,
  FileSpreadsheet,
  Code2,
  Briefcase,
  Target,
  Landmark,
  MessagesSquare,
};

interface EnrichmentCourseCardProps {
  course: EnrichmentCourse;
  onExplore: (course: EnrichmentCourse) => void;
}

export const EnrichmentCourseCard: React.FC<EnrichmentCourseCardProps> = ({
  course,
  onExplore,
}) => {
  const IconComponent = iconMap[course.iconName] || BookOpenCheck;
  const visibleHighlights = course.learningHighlights.slice(0, 3);

  return (
    <article className="formal-card group flex h-full flex-col justify-between p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c28422] hover:shadow-md">
      <div>
        {/* Top Header: Icon & Category */}
        <div className="flex items-start justify-between gap-4">
          <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#c28422]/30 bg-[#f4f7f4] text-[#177249] transition-colors duration-300 group-hover:border-[#c28422] group-hover:bg-[#177249] group-hover:text-[#dfa03e]">
            <IconComponent size={22} aria-hidden="true" />
          </div>
          <span className="inline-block rounded-full border border-[#c28422]/20 bg-[#faf8f2] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#8b6528]">
            {course.category}
          </span>
        </div>

        {/* Association Badge if present */}
        {course.association && (
          <div className="mt-3.5 flex items-center gap-1.5 text-[11px] font-medium text-[#177249]">
            <Building size={12} className="text-[#8b6528] shrink-0" aria-hidden="true" />
            <span className="line-clamp-1">In Association with {course.association}</span>
          </div>
        )}

        {/* Course Title & Subtitle */}
        <div className="mt-3">
          <h3 className="font-serif text-xl font-bold leading-snug text-[#177249] transition-colors duration-200 group-hover:text-[#0f2e20]">
            {course.displayTitle}
          </h3>
          {course.subtitle && (
            <p className="mt-0.5 text-xs font-medium text-[#8b6528]">{course.subtitle}</p>
          )}
        </div>

        {/* Short Description */}
        <p className="mt-2.5 text-xs leading-relaxed text-[#43534a] line-clamp-3">
          {course.shortDescription}
        </p>

        {/* Top 3 Learning Highlights */}
        <div className="mt-4 border-t border-[#f0ebe0] pt-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6528]">
            Key Learning Highlights:
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-[#2a4536]">
            {visibleHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2
                  size={14}
                  className="mt-0.5 shrink-0 text-[#8b6528]"
                  aria-hidden="true"
                />
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Explore Button */}
      <div className="mt-6 border-t border-[#f0ebe0] pt-4">
        <button
          type="button"
          onClick={() => onExplore(course)}
          aria-label={`Explore course details for ${course.displayTitle}`}
          className="inline-flex w-full items-center justify-between rounded-lg border border-[#d6cfb8] bg-[#fbfaf6] px-4 py-2.5 text-xs font-semibold text-[#177249] transition-all duration-200 group-hover:border-[#c28422] group-hover:bg-[#177249] group-hover:text-white"
        >
          <span>Explore Course Details</span>
          <ArrowRight
            size={14}
            className="text-[#8b6528] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#dfa03e]"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
};
