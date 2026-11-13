import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Atom,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ChartNoAxesCombined,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Laptop,
  Scroll,
  Sparkles,
} from 'lucide-react';
import { naacGrade } from '@/data/institute';
import { AdmissionDialog } from './AdmissionDialog';

interface AcademicProgramme {
  id: string;
  name: string;
  fullName: string;
  faculty: string;
  duration: string;
  summary: string;
  href: string;
  icon: typeof Atom;
}

const academicOfferings: AcademicProgramme[] = [
  {
    id: 'bsc',
    name: 'B.Sc',
    fullName: 'Bachelor of Science',
    faculty: 'Science',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Physics, Chemistry, Mathematics, Botany, Biotech & Computer Science',
    href: '/academics/bsc',
    icon: Atom,
  },
  {
    id: 'bcom',
    name: 'B.Com',
    fullName: 'Bachelor of Commerce',
    faculty: 'Commerce',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Corporate Accounting, Business Taxation, Banking & Commercial Law',
    href: '/academics/bcom',
    icon: ChartNoAxesCombined,
  },
  {
    id: 'bba',
    name: 'BBA',
    fullName: 'Bachelor of Business Administration',
    faculty: 'Management',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Strategic Management, Marketing Analytics, Human Resources & Finance',
    href: '/academics/bba',
    icon: BriefcaseBusiness,
  },
  {
    id: 'bca',
    name: 'BCA',
    fullName: 'Bachelor of Computer Applications',
    faculty: 'Computing',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Software Engineering, Web Technologies, Database Systems & Cloud Labs',
    href: '/academics/bca',
    icon: Laptop,
  },
  {
    id: 'mcom',
    name: 'M.Com',
    fullName: 'Master of Commerce',
    faculty: 'Postgraduate',
    duration: '2-Year Master (4 Sems)',
    summary: 'Advanced Financial Management, Direct & Indirect Taxes & Research',
    href: '/academics/mcom',
    icon: GraduationCap,
  },
  {
    id: 'enrichment',
    name: 'Skill Add-ons',
    fullName: 'Value-Added Certifications',
    faculty: 'Career Skills',
    duration: 'Parallel Certifications',
    summary: 'Tally Prime GST, Advanced Excel, Python & Professional Soft Skills',
    href: '#enrichment-courses',
    icon: BookOpenCheck,
  },
];

const accreditationBadges = [
  'Bengaluru City University Affiliated',
  'UGC Recognised · 2(f) & 12(B)',
  'NEP 2020 Multi-Disciplinary',
  '35+ Years Heritage (Est. 1988)',
];

export const AdmissionsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      aria-labelledby="excellence-title"
      className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#143a29] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Simple & Elegant Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="home-section-eyebrow tracking-widest text-[#8b6528]">ACADEMIC OFFERINGS &amp; ACCREDITATION</span>
            </div>
            <h2 id="excellence-title" className="home-section-title mt-1.5 font-serif text-3xl font-bold tracking-tight text-[#143a29] sm:text-4xl">
              Excellence in Education
            </h2>
            <p className="mt-1 text-xs text-[#52645a] sm:text-sm">
              Undergraduate and postgraduate degree courses affiliated to Bengaluru City University with continuous mentoring and career labs.
            </p>
          </div>
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#143a29] transition-colors hover:text-[#c28422] sm:text-sm"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Admissions 2026–27 Guidelines</span>
            <ArrowRight size={15} className="text-[#c28422] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* 2-Column Balanced Architecture */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8 lg:items-stretch">
          
          {/* Executive NAAC Accreditation Plaque (Simple, Stately & Breathing) */}
          <article className="plaque-card relative isolate flex flex-col justify-between overflow-hidden p-7 text-white sm:p-9">
            {/* Ambient Pulsing Aura */}
            <div className="plaque-ambient-glow" aria-hidden="true" />
            
            {/* Subtle Watermark Crest */}
            <Award className="pointer-events-none absolute -bottom-10 -right-8 -z-10 h-64 w-64 text-white/[0.04]" strokeWidth={0.7} aria-hidden="true" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e] backdrop-blur-xs">
                <Sparkles size={12} className="text-[#dfa03e]" aria-hidden="true" />
                <span>NAAC Re-Accredited · Cycle 4</span>
              </div>

              {/* Large Grade Display */}
              <div className="mt-6 flex items-baseline gap-4">
                <span className="home-display-title font-serif text-7xl font-bold leading-none tracking-tight text-[#dfa03e] drop-shadow-md sm:text-8xl">
                  {naacGrade}
                </span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">Grade Level</span>
                  <span className="text-xs font-semibold text-[#dfa03e]">CGPA 2.95 / 4.00</span>
                  <span className="text-[11px] text-white/70">Cycle 4 (2023–2028)</span>
                </div>
              </div>

              {/* Refined Institutional Statement */}
              <p className="mt-5 text-xs leading-relaxed text-white/85 sm:text-sm">
                Recognised for sustained academic quality, transparent institutional governance, and dedicated mentoring for women’s empowerment.
              </p>

              {/* Clean Tag Pills */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/15 pt-5">
                {accreditationBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#dfa03e]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Plaque Action Footer */}
            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4 border-t border-white/15 pt-5">
              <Link
                to="/naac"
                className="luxury-btn-shine inline-flex items-center gap-2 rounded-lg border border-[#dfa03e] bg-gradient-to-r from-[#dfa03e] to-[#c28422] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0a2316] shadow-md transition-all hover:scale-[1.02] hover:bg-white hover:text-[#0a2316]"
              >
                <span>View NAAC &amp; AQAR Portal</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
              <a
                href="/documents/Annual-Report-23-24.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/85 underline decoration-[#dfa03e]/60 underline-offset-4 hover:text-[#dfa03e]"
              >
                <span>Annual Report (PDF)</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* Academic Programmes Grid (6 Cards, Simple, Clean & Responsive) */}
          <div>
            <div className="mb-3.5 flex items-center justify-between border-b border-[#dde5de] pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#143a29] sm:text-sm">
                Available Programmes
              </h3>
              <span className="rounded-full border border-[#c4dcce] bg-[#eef5f0] px-3 py-0.5 text-[11px] font-semibold text-[#143a29]">
                Affiliated to BCU · NEP 2020
              </span>
            </div>

            <ul className="grid gap-3.5 sm:grid-cols-2">
              {academicOfferings.map((prog, idx) => {
                const Icon = prog.icon;
                const isAnchor = prog.href.startsWith('#');
                const CardWrapper = isAnchor ? 'a' : Link;
                const wrapperProps = isAnchor ? { href: prog.href } : { to: prog.href };

                return (
                  <li key={prog.id} className={`min-w-0 stagger-${(idx % 6) + 1}`}>
                    <CardWrapper
                      {...(wrapperProps as any)}
                      className="academic-card group flex h-full flex-col justify-between p-4.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
                    >
                      <div>
                        {/* Top: Icon & Faculty Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="academic-icon-box grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#c4dcce] bg-[#f4f7f4] text-[#143a29] shadow-2xs transition-all duration-300">
                            <Icon size={19} aria-hidden="true" />
                          </span>
                          <span className="rounded-full border border-[#d8e3da] bg-[#f8faf8] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#486353]">
                            {prog.faculty}
                          </span>
                        </div>

                        {/* Title & Full Name */}
                        <div className="mt-3">
                          <span className="block text-xl font-bold leading-tight text-[#143a29] transition-colors group-hover:text-[#185e3c]">
                            {prog.name}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium text-[#566c5f]">
                            {prog.fullName}
                          </span>
                        </div>

                        {/* Summary / Disciplines */}
                        <p className="mt-2 text-xs leading-relaxed text-[#687e72]">
                          {prog.summary}
                        </p>
                      </div>

                      {/* Footer with Duration and Animated Arrow */}
                      <div className="mt-4 flex items-center justify-between border-t border-[#f0f4f0] pt-2.5 text-xs font-semibold text-[#143a29]">
                        <span className="text-[11px] font-medium text-[#718579]">{prog.duration}</span>
                        <span className="academic-arrow grid h-6 w-6 place-items-center rounded-full border border-[#d4ded6] bg-[#f8faf8] text-[#143a29] transition-all duration-300">
                          <ChevronRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </CardWrapper>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Admissions CTA Bar (Simple, Elegant & Uncluttered) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#d5ded7] bg-gradient-to-r from-[#edf4ef] via-[#f7faf8] to-[#edf4ef] p-5 shadow-xs sm:p-6">
          <div className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#143a29] text-[#dfa03e] shadow-xs">
              <GraduationCap size={22} />
            </span>
            <div>
              <p className="text-base font-bold text-[#143a29]">Admissions Open for Academic Session 2026–27</p>
              <p className="mt-0.5 text-xs text-[#52645a]">
                Direct counselling, merit scholarships, and campus guidance at our Rajajinagar campus.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/admissions"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-[#c4dcce] bg-white px-4 py-2 text-xs font-bold text-[#143a29] shadow-2xs transition-colors hover:border-[#143a29] hover:bg-[#f4f7f4]"
            >
              <Scroll size={14} className="text-[#c28422]" />
              <span>Admission Guidelines</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="luxury-btn-shine inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#dfa03e]/40 bg-gradient-to-r from-[#143a29] to-[#0d2a1c] px-5 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
            >
              <span>Apply Online for Admission</span>
              <ArrowRight size={14} className="text-[#dfa03e]" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>

      <AdmissionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
