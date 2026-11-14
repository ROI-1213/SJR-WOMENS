import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  FileSpreadsheet,
  Code2,
  Briefcase,
  Target,
  Landmark,
  MessagesSquare,
  CheckCircle2,
  Building,
  ArrowRight,
  BookOpenCheck,
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
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

interface EnrichmentCourseModalProps {
  course: EnrichmentCourse | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EnrichmentCourseModal: React.FC<EnrichmentCourseModalProps> = ({
  course,
  isOpen,
  onClose,
}) => {
  if (!course) return null;

  const IconComponent = iconMap[course.iconName] || BookOpenCheck;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] w-[92vw] max-w-2xl overflow-y-auto rounded-xl border border-[#d6cfb8] bg-[#fbfaf6] p-6 text-[#177249] shadow-2xl sm:p-8">
        <DialogHeader className="border-b border-[#e5dfce] pb-5 text-left">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c28422]/30 bg-[#c28422]/10 px-3 py-1 text-xs font-semibold text-[#8b6528]">
              {course.category}
            </span>
            {course.association && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#177249]/20 bg-[#177249]/10 px-3 py-1 text-xs font-medium text-[#177249]">
                <Building size={13} className="text-[#8b6528]" aria-hidden="true" />
                In Association with {course.association}
              </span>
            )}
          </div>

          <div className="flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#c28422]/40 bg-[#177249] text-[#dfa03e] shadow-sm">
              <IconComponent size={24} aria-hidden="true" />
            </div>
            <div>
              <DialogTitle className="font-serif text-2xl font-bold leading-snug text-[#177249] sm:text-3xl">
                {course.displayTitle}
              </DialogTitle>
              {course.subtitle && (
                <p className="mt-1 text-sm font-medium text-[#8b6528]">{course.subtitle}</p>
              )}
              {course.officialTitle !== course.displayTitle && (
                <p className="mt-1 text-xs text-[#52645a]">
                  <span className="font-semibold text-[#177249]">Official Designation:</span> {course.officialTitle}
                </p>
              )}
            </div>
          </div>
          <DialogDescription className="sr-only">
            Detailed curriculum highlights and overview for {course.displayTitle}
          </DialogDescription>
        </DialogHeader>

        {/* Content Body */}
        <div className="space-y-6 pt-4 text-sm leading-relaxed text-[#43534a]">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8b6528]">Course Overview</h3>
            <p className="mt-2 text-base text-[#1c3327]">{course.shortDescription}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8b6528]">
              Key Learning Highlights
            </h3>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {course.learningHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 rounded-lg border border-[#e8e2d4] bg-white p-3 text-xs font-medium text-[#177249] shadow-sm"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#8b6528]" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[#d6cfb8] bg-[#f4f0e6] p-4 text-xs text-[#52645a]">
            <p className="font-medium text-[#177249]">Curriculum &amp; Batch Information</p>
            <p className="mt-1">
              Enrichment programmes run concurrently with regular undergraduate semesters. Detailed batch schedules, timings, and faculty coordinators are notified at the commencement of each academic session.
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#e5dfce] pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-[#d6cfb8] bg-white px-4 py-2.5 text-xs font-semibold text-[#177249] transition-colors hover:bg-[#edf5ef]"
          >
            Close Details
          </button>
          <Link
            to="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-lg border border-[#dfa03e]/60 bg-[#177249] px-5 py-2.5 text-xs font-semibold text-white shadow transition-all duration-200 hover:bg-[#135c3b] hover:shadow-md"
          >
            <span>Enquire with Admission / Department</span>
            <ArrowRight size={15} className="text-[#dfa03e]" aria-hidden="true" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
