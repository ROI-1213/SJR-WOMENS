import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Atom,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
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
    faculty: 'Faculty of Science',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Physics, Chemistry, Mathematics, Botany, Biotech & Computer Science',
    href: '/academics/bsc',
    icon: Atom,
  },
  {
    id: 'bcom',
    name: 'B.Com',
    fullName: 'Bachelor of Commerce',
    faculty: 'Faculty of Commerce',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Corporate Accounting, Business Taxation, Banking & Commercial Law',
    href: '/academics/bcom',
    icon: ChartNoAxesCombined,
  },
  {
    id: 'bba',
    name: 'BBA',
    fullName: 'Bachelor of Business Administration',
    faculty: 'Faculty of Management',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Strategic Management, Marketing Analytics, Human Resources & Finance',
    href: '/academics/bba',
    icon: BriefcaseBusiness,
  },
  {
    id: 'bca',
    name: 'BCA',
    fullName: 'Bachelor of Computer Applications',
    faculty: 'Faculty of Computing',
    duration: '3 / 4-Yr NEP Honours',
    summary: 'Software Engineering, Web Technologies, Database Systems & Cloud Labs',
    href: '/academics/bca',
    icon: Laptop,
  },
  {
    id: 'mcom',
    name: 'M.Com',
    fullName: 'Master of Commerce',
    faculty: 'Postgraduate Studies',
    duration: '2-Year Master (4 Sems)',
    summary: 'Advanced Financial Management, Direct & Indirect Taxes & Research',
    href: '/academics/mcom',
    icon: GraduationCap,
  },
  {
    id: 'enrichment',
    name: 'Skill Add-ons',
    fullName: 'Value-Added Certifications',
    faculty: 'Career Readiness',
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
      id="admissions"
      aria-labelledby="excellence-title"
      className="scroll-mt-24 border-b border-[#dde5de] bg-[#fbf9f4] px-4 py-8 text-[#177249] sm:px-6 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Section Formal Header */}
        <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-[#dde5de] pb-3.5">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#c28422]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#8b6528]">
                ACADEMIC PROGRAMMES &amp; ACCREDITATION
              </span>
            </div>
            <h2 id="excellence-title" className="mt-1 font-serif text-2xl font-bold tracking-tight text-[#177249] sm:text-3xl">
              Programmes of Study
            </h2>
            <p className="mt-0.5 text-xs text-[#52645a] sm:text-sm">
              Undergraduate and postgraduate degree courses affiliated to Bengaluru City University under NEP 2020.
            </p>
          </div>
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#177249] transition-colors hover:text-[#c28422]"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Admissions 2026–27 Guidelines</span>
            <ArrowRight size={13} className="text-[#c28422] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Executive Accreditation Ribbon (Compact & Formal Institutional Credential) */}
        <div className="mb-5 overflow-hidden rounded-xl border border-[#c28422]/35 bg-gradient-to-r from-[#0e4b30] via-[#177249] to-[#0e4b30] p-3.5 text-white shadow-sm sm:p-4">
          <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: NAAC Grade Crest */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-[#dfa03e]/30 bg-[#dfa03e]/10 px-3 py-1 backdrop-blur-xs">
                <span className="font-serif text-2xl font-bold text-[#dfa03e] sm:text-3xl">
                  {naacGrade}
                </span>
                <div className="flex flex-col border-l border-[#dfa03e]/30 pl-2 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dfa03e]">NAAC Grade Level</span>
                  <span className="text-[11px] font-semibold text-white/95">CGPA 2.95 / 4.00</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
                    <Sparkles size={11} className="text-[#dfa03e]" aria-hidden="true" />
                    NAAC Re-Accredited · Cycle 4 (2023–2028)
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-white/80">
                  Affiliated to Bengaluru City University · UGC Recognised under Sections 2(f) &amp; 12(B)
                </p>
              </div>
            </div>

            {/* Center: Institutional Badges */}
            <div className="hidden flex-wrap items-center gap-2 xl:flex">
              {accreditationBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90"
                >
                  <span className="h-1 w-1 rounded-full bg-[#dfa03e]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Right: Quick Links */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/naac"
                className="luxury-btn-shine inline-flex items-center gap-1.5 rounded-lg border border-[#dfa03e] bg-gradient-to-r from-[#dfa03e] to-[#c28422] px-3.5 py-1.5 text-xs font-bold text-[#0a2316] shadow-2xs transition-all hover:bg-white hover:text-[#0a2316]"
              >
                <span>NAAC &amp; AQAR Portal</span>
                <ArrowRight size={12} aria-hidden="true" />
              </Link>
              <a
                href="/documents/Annual-Report-23-24.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/20"
              >
                <span>Annual Report</span>
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Sub-heading */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 size={14} className="text-[#177249]" aria-hidden="true" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#177249] sm:text-sm">
              Available Programmes
            </h3>
          </div>
          <span className="rounded-full border border-[#c4dcce] bg-[#eef5f0] px-2.5 py-0.5 text-[10px] font-semibold text-[#177249]">
            Affiliated to BCU · NEP 2020
          </span>
        </div>

        {/* Academic Programmes Grid (Formal 3-Column Balanced Architecture: 2 Rows of 3 Cards) */}
        <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {academicOfferings.map((prog, idx) => {
            const Icon = prog.icon;
            const isAnchor = prog.href.startsWith('#');
            const CardWrapper = isAnchor ? 'a' : Link;
            const wrapperProps = isAnchor ? { href: prog.href } : { to: prog.href };

            return (
              <li key={prog.id} className={`min-w-0 stagger-${(idx % 6) + 1}`}>
                <CardWrapper
                  {...(wrapperProps as any)}
                  className="academic-card group flex flex-col justify-between p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
                >
                  <div>
                    {/* Top: Faculty Badge & Icon */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md border border-[#d8e3da] bg-[#f8faf8] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#486353]">
                        {prog.faculty}
                      </span>
                      <span className="academic-icon-box grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#c4dcce] bg-[#f4f7f4] text-[#177249] shadow-2xs transition-all duration-300">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                    </div>

                    {/* Degree Title & Full Name */}
                    <div className="mt-2.5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold leading-tight text-[#177249] transition-colors group-hover:text-[#185e3c]">
                          {prog.name}
                        </span>
                        <span className="text-xs font-semibold text-[#566c5f]">
                          {prog.fullName}
                        </span>
                      </div>
                    </div>

                    {/* Disciplines & Curriculum Preview */}
                    <p className="mt-1.5 text-xs leading-relaxed text-[#687e72]">
                      {prog.summary}
                    </p>
                  </div>

                  {/* Footer: Duration pill & Curriculum CTA */}
                  <div className="mt-3.5 flex items-center justify-between border-t border-[#f0f4f0] pt-2.5 text-xs font-semibold text-[#177249]">
                    <span className="text-[10px] font-medium text-[#718579]">{prog.duration}</span>
                    <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-[#177249] transition-colors group-hover:text-[#c28422]">
                      <span>Curriculum</span>
                      <ChevronRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </CardWrapper>
              </li>
            );
          })}
        </ul>

        {/* Compact Admissions CTA Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#d5ded7] bg-gradient-to-r from-[#edf4ef] via-[#f7faf8] to-[#edf4ef] p-3.5 shadow-2xs sm:p-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#177249] text-[#dfa03e] shadow-2xs">
              <GraduationCap size={18} />
            </span>
            <div>
              <p className="text-xs font-bold text-[#177249] sm:text-sm">
                Admissions Open for Academic Session 2026–27
              </p>
              <p className="text-[11px] text-[#52645a]">
                Direct counselling, merit scholarships, and campus guidance at our Rajajinagar campus.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/admissions"
              className="inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-[#c4dcce] bg-white px-3 py-1.5 text-xs font-bold text-[#177249] shadow-2xs transition-colors hover:border-[#177249] hover:bg-[#f4f7f4]"
            >
              <Scroll size={13} className="text-[#c28422]" />
              <span>Guidelines</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="luxury-btn-shine inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-[#dfa03e]/40 bg-gradient-to-r from-[#177249] to-[#125c3a] px-4 py-1.5 text-xs font-bold text-white shadow-xs transition-all hover:scale-[1.02] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]"
            >
              <span>Apply Online</span>
              <ArrowRight size={13} className="text-[#dfa03e]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <AdmissionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </section>
  );
};
