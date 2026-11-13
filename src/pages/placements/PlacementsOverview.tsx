import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  Calculator,
  Calendar,
  ChevronRight,
  FileText,
  GraduationCap,
  Maximize2,
  MessagesSquare,
  Quote,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { dishaActivities, departmentActivitiesPhotos, type DepartmentActivityPhoto } from '@/data/dishaActivities';
import { recruitingPartners, type RecruitingPartner } from '@/data/recruitingPartners';
import { placementPages } from '@/data/navigation/placementsMenuData';
import { dishaCampusDrives, placementSources } from '@/data/placementRecords';
import { PlacementReportLinks, placementAction, placementHeading } from './PlacementContent';

const activityIconMap = {
  Building2,
  Target,
  BookOpenCheck,
  MessagesSquare,
  Calculator,
  FileText,
};

const PlacementsOverview: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<DepartmentActivityPhoto | null>(null);

  return (
    <PlacementLayout
      page="overview"
      customTitle="Placement"
      subtitle="DISHA — Placement Cell · Empowering Students for Successful Careers"
      breadcrumbPath="Placement"
      related={['brochure', 'companies', 'statistics', 'training', 'collaboration']}
    >
      {/* 1. Placement Cell — DISHA (Original Heading, Quote, & Intro) */}
      <section aria-labelledby="disha-heading" className="rounded-2xl border border-[#d6cfb8] bg-[#fbfaf6] p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c28422]/30 bg-[#c28422]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8b6528]">
              <Sparkles size={13} className="text-[#c28422]" aria-hidden="true" />
              <span>Placement Cell</span>
            </div>

            <h2 id="disha-heading" className="font-serif text-3xl font-bold tracking-tight text-[#123625] sm:text-4xl">
              PLACEMENT CELL: “DISHA”.
            </h2>

            {/* Original Motivational Quotation */}
            <div className="my-5 rounded-xl border-l-4 border-[#c28422] bg-[#f4f0e6] p-4 text-[#143a29] sm:p-5">
              <Quote size={20} className="mb-2 text-[#8b6528] opacity-80" aria-hidden="true" />
              <blockquote className="font-serif text-sm font-semibold italic leading-relaxed text-[#123625] sm:text-base">
                "DO NOT HIRE A PERSON WHO DOES YOUR WORK FOR MONEY, BUT HIRE A PERSON WHO DOES IT FOR IT”.
              </blockquote>
            </div>

            {/* Original Placement Introduction Paragraph */}
            <p className="text-sm leading-relaxed text-[#43534a] sm:text-base">
              Placements are increasingly playing a major role in Higher level educational Institutions. We are very proud of success of our Systematic approach in helping our students in a Consequential career path. The Placement cell “ Disha ” plays a vital role in Shaping the Careers of Students.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link to="/contact" className={placementAction}>
                <span>Connect with Placement Cell</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                to={placementPages.brochure.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#d6cfb8] bg-white px-4 py-2.5 text-sm font-semibold text-[#143a29] transition-colors hover:bg-[#edf5ef]"
              >
                <span>View Placement Brochure</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Verified Campus Training Photograph */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#d6cfb8] bg-[#123625] shadow-md sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[340px]">
            <img
              src="/images/placements/soft-skills-training.jpg"
              alt="Employability and soft skills training session at SJR College for Women"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
                Disha Training in Action
              </p>
              <p className="mt-0.5 text-xs text-white/90">
                Employability and soft skills training session at SJR College for Women
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Activities of Placement Cell “Disha”. */}
      <section aria-labelledby="disha-activities-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#d6cfb8] pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">Career Development Initiatives</span>
            </div>
            <h2 id="disha-activities-heading" className={placementHeading}>
              Activities of Placement Cell “Disha”.
            </h2>
          </div>
          <span className="text-xs font-medium text-[#67776f]">6 Core Developmental Pillars</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dishaActivities.map((activity, index) => {
            const IconComponent = activityIconMap[activity.iconName] || BriefcaseBusiness;
            return (
              <article
                key={activity.id}
                className="formal-card group flex h-full flex-col justify-between p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c28422] hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-xl border border-[#c28422]/30 bg-[#f4f7f4] text-[#123625] transition-colors group-hover:bg-[#123625] group-hover:text-[#dfa03e]">
                      <IconComponent size={20} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tabular-nums text-[#8b6528]">0{index + 1}</span>
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-[#143a29] group-hover:text-[#0f2e20]">
                    {activity.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#43534a]">
                    {activity.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. RECRUITING PARTNERS (15 Logos in 5x3 Grid) */}
      <section aria-labelledby="recruiting-partners-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#d6cfb8] pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">Corporate Recruiters</span>
            </div>
            <h2 id="recruiting-partners-heading" className={placementHeading}>
              RECRUITING PARTNERS
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#67776f]">
            Organizations featured in the recruiting-partner section of the college's placement website.
          </p>
        </div>

        {/* 5 columns on desktop, 3 columns on tablet, 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {recruitingPartners.map((partner) => (
            <div
              key={partner.id}
              className="formal-card group flex flex-col items-center justify-center rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c28422] hover:shadow-md"
            >
              <div className="flex h-16 w-full items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.fullName}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 w-auto max-w-[120px] object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-[#143a29] line-clamp-1">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Activities @ Department */}
      <section aria-labelledby="department-activities-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#d6cfb8] pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">On-Campus Workshops &amp; Training</span>
            </div>
            <h2 id="department-activities-heading" className={placementHeading}>
              Activities @ Department
            </h2>
          </div>
          <span className="text-xs text-[#67776f]">Official Departmental Documentation</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departmentActivitiesPhotos.map((item) => (
            <article
              key={item.id}
              className="formal-card group overflow-hidden rounded-xl border border-[#d6cfb8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c28422] hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => setActivePhoto(item)}
                  aria-label={`Enlarge photo for ${item.title}`}
                  className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-lg bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Maximize2 size={16} aria-hidden="true" />
                </button>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-serif text-base font-bold leading-snug text-[#143a29]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#43534a]">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Published Placement Documents & Reports */}
      <section aria-labelledby="placement-docs-heading">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4 border-b border-[#d6cfb8] pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8b6528]">Official Records</span>
            </div>
            <h2 id="placement-docs-heading" className={placementHeading}>
              Published Placement Documents
            </h2>
          </div>
          <span className="text-xs text-[#67776f]">Verified Institutional Records</span>
        </div>

        <PlacementReportLinks
          reports={[
            {
              label: 'Placement Cell activity reports',
              href: placementSources.reports,
              description: 'Read the college’s official records of recruitment, training workshops, and career preparation.',
            },
            {
              label: '2025–26 Mandatory Disclosures',
              href: placementSources.disclosure,
              description: 'Review the reported provisional placement entries for 2024–25 in Section 16.',
            },
          ]}
        />
      </section>

      {/* 6. Historical Campus Recruitment Drives & Outcomes */}
      <section aria-labelledby="historical-drives-heading" className="rounded-2xl border border-[#d6cfb8] bg-[#fbfaf6] p-6 shadow-sm sm:p-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-[#e5dfce] pb-3">
          <div>
            <h3 id="historical-drives-heading" className="font-serif text-2xl font-bold text-[#123625]">
              Historical Placement Drives &amp; Training (2023–24)
            </h3>
            <p className="mt-1 text-xs text-[#67776f]">
              Documented past drives and employability initiatives from the Annual Report 2023–24.
            </p>
          </div>
          <a
            href={placementSources.annualReport2324}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#143a29] underline decoration-[#c28422] underline-offset-4 hover:text-[#8b6528]"
          >
            Source: Annual Report 2023–24 (PDF)
          </a>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {dishaCampusDrives.map((drive) => (
            <li
              key={`${drive.date}-${drive.title}`}
              className="rounded-xl border border-[#e5dfce] bg-white p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef5f0] px-2.5 py-0.5 text-[11px] font-semibold text-[#143a29]">
                  <Calendar size={11} aria-hidden="true" />
                  {drive.date}
                </span>
                <span className="rounded bg-[#faf8f2] px-2 py-0.5 text-[11px] font-semibold text-[#8b6528] border border-[#d6cfb8]">
                  {drive.type}
                </span>
              </div>
              <h4 className="mt-2 text-sm font-bold text-[#123625]">{drive.title}</h4>
              <p className="mt-1 text-xs text-[#43534a]">
                <strong className="text-[#143a29]">Partner / Recruiters:</strong> {drive.partner}
              </p>
              <p className="mt-0.5 text-xs text-[#43534a]">
                <strong className="text-[#143a29]">Eligible Stream:</strong> {drive.eligibility}
              </p>
              {drive.outcome && (
                <p className="mt-2 inline-block rounded bg-[#123625]/10 px-2 py-0.5 text-[11px] font-bold text-[#143a29]">
                  Outcome: {drive.outcome}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="max-h-[75vh] w-full object-contain"
            />
            <div className="flex items-center justify-between border-t border-neutral-200 bg-white p-4">
              <div>
                <p className="font-serif text-base font-bold text-[#143a29]">{activePhoto.title}</p>
                <p className="text-xs text-[#43534a]">{activePhoto.caption}</p>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="grid size-9 place-items-center rounded-lg bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </PlacementLayout>
  );
};

export default PlacementsOverview;
