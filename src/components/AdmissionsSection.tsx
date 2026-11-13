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
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Laptop,
  Scroll,
  Sparkles,
} from 'lucide-react';
import { naacGrade } from '@/data/institute';
import { AdmissionDialog } from './AdmissionDialog';

interface AcademicCourseCard {
  id: string;
  name: string;
  fullName: string;
  faculty: string;
  duration: string;
  specialisations: string;
  href: string;
  icon: typeof Atom;
  badgeColor?: string;
  isExternal?: boolean;
}

const academicOfferings: AcademicCourseCard[] = [
  {
    id: 'bsc',
    name: 'B.Sc',
    fullName: 'Bachelor of Science',
    faculty: 'Faculty of Science',
    duration: '3-Yr / 4-Yr NEP Honours',
    specialisations: 'Physics · Mathematics · Computer Science · Chemistry · Botany · Biotech',
    href: '/academics/bsc',
    icon: Atom,
  },
  {
    id: 'bcom',
    name: 'B.Com',
    fullName: 'Bachelor of Commerce',
    faculty: 'Faculty of Commerce',
    duration: '3-Yr / 4-Yr NEP Honours',
    specialisations: 'Financial Accounting · Corporate Taxation · Banking & Insurance · Business Law',
    href: '/academics/bcom',
    icon: ChartNoAxesCombined,
  },
  {
    id: 'bba',
    name: 'BBA',
    fullName: 'Bachelor of Business Administration',
    faculty: 'Faculty of Management',
    duration: '3-Yr / 4-Yr NEP Honours',
    specialisations: 'Strategic Management · HR Management · Marketing Analytics · Entrepreneurship',
    href: '/academics/bba',
    icon: BriefcaseBusiness,
  },
  {
    id: 'bca',
    name: 'BCA',
    fullName: 'Bachelor of Computer Applications',
    faculty: 'Faculty of Computing',
    duration: '3-Yr / 4-Yr NEP Honours',
    specialisations: 'Software Engineering · Python & Web Technologies · Database Systems · Cloud',
    href: '/academics/bca',
    icon: Laptop,
  },
  {
    id: 'mcom',
    name: 'M.Com',
    fullName: 'Master of Commerce',
    faculty: 'Postgraduate Studies',
    duration: '2-Year Master (4 Semesters)',
    specialisations: 'Advanced Corporate Accounting · Financial Management · Direct & Indirect Tax',
    href: '/academics/mcom',
    icon: GraduationCap,
  },
  {
    id: 'enrichment',
    name: 'Skill Add-ons',
    fullName: 'Enrichment & Value-Added Courses',
    faculty: 'Career Readiness',
    duration: 'Integrated Certifications',
    specialisations: 'Tally Prime GST · Advanced Excel · Python · Aptitude & Communication Skills',
    href: '#enrichment-courses',
    icon: BookOpenCheck,
  },
];

const accreditationHallmarks = [
  { label: 'Bengaluru City University', detail: 'Permanent Institutional Affiliation' },
  { label: 'UGC Section 2(f) & 12(B)', detail: 'University Grants Commission Recognised' },
  { label: 'NEP 2020 Multi-Disciplinary', detail: 'Holistic Credit-Based Choice System' },
  { label: '35+ Years Heritage (Est. 1988)', detail: 'Premier Women’s Higher Education' },
];

export const AdmissionsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section
      aria-labelledby="excellence-title"
      className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 home-section text-[#143a29] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1284px]">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
              <span className="home-section-eyebrow">Academic Offerings &amp; Accreditation</span>
            </div>
            <h2 id="excellence-title" className="home-section-title mt-1.5">
              Excellence in Education
            </h2>
            <p className="mt-1 text-sm text-[#4b6154]">
              Undergraduate and postgraduate programmes affiliated to Bengaluru City University with continuous mentoring, skill labs, and career pathways.
            </p>
          </div>
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#143a29] transition-colors hover:text-[#c28422]"
          >
            <span className="underline decoration-[#c28422] underline-offset-4">Admissions Information &amp; Guidelines</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 text-[#c28422]" aria-hidden="true" />
          </Link>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          
          {/* Executive NAAC Accreditation Plaque Card */}
          <article className="plaque-card relative isolate flex flex-col justify-between overflow-hidden p-6 text-white shadow-xl sm:p-8">
            {/* Watermark Crest */}
            <Award className="pointer-events-none absolute -bottom-8 -right-8 -z-10 h-64 w-64 text-white/[0.04]" strokeWidth={0.7} aria-hidden="true" />
            
            <div>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
                <Sparkles size={13} className="text-[#dfa03e]" aria-hidden="true" />
                <span>Institutional Accreditation</span>
              </div>

              {/* Large Grade Display */}
              <div className="flex flex-wrap items-baseline gap-3">
                <p className="home-display-title text-7xl font-normal leading-none tracking-tight text-[#dfa03e] drop-shadow-sm sm:text-8xl">
                  {naacGrade}
                </p>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white">NAAC Accreditation</span>
                  <span className="text-xs text-[#dfa03e]">Cycle 4 (2023–2028)</span>
                  <span className="text-xs text-white/70">National Assessment &amp; Accreditation Council</span>
                </div>
              </div>

              {/* CGPA Meter */}
              <div className="mt-4 rounded-xl border border-white/15 bg-white/[0.07] p-3.5 backdrop-blur-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>Institutional CGPA</span>
                  <span className="font-bold text-[#dfa03e]">2.95 / 4.00</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#c28422] to-[#dfa03e]"
                    style={{ width: `${(2.95 / 4) * 100}%` }}
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-white/80">
                  Accredited by NAAC under the stringent Cycle 4 quality framework affirming academic rigor and governance.
                </p>
              </div>

              {/* Key Institutional Hallmarks */}
              <div className="mt-4 space-y-2 border-t border-white/15 pt-3.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#dfa03e]">
                  Institutional Credentials
                </p>
                <ul className="space-y-2 text-xs">
                  {accreditationHallmarks.map((item) => (
                    <li key={item.label} className="flex items-start gap-2 text-white/90">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#dfa03e]" aria-hidden="true" />
                      <div>
                        <strong className="font-semibold text-white">{item.label}</strong>
                        <span className="block text-[11px] text-white/70">{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plaque CTA Footer */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/15 pt-4">
              <Link
                to="/naac"
                className="inline-flex items-center gap-2 rounded-lg border border-[#dfa03e] bg-[#dfa03e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0c2619] shadow-sm transition-all hover:bg-white hover:text-[#0c2619]"
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

          {/* Programmes Grid */}
          <div>
            <div className="mb-3.5 flex items-center justify-between border-b border-[#dde5de] pb-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#143a29]">
                Available Programmes
              </h3>
              <span className="rounded-full bg-[#eef5f0] px-3 py-1 text-[11px] font-semibold text-[#143a29] border border-[#c4dcce]">
                Affiliated to BCU · NEP 2020
              </span>
            </div>

            {/* Perfectly Balanced 6-Card Grid (2 columns on md/lg, 3 rows) */}
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {academicOfferings.map((prog, idx) => {
                const Icon = prog.icon;
                const isAnchor = prog.href.startsWith('#');
                const CardWrapper = isAnchor ? 'a' : Link;
                const wrapperProps = isAnchor
                  ? { href: prog.href }
                  : { to: prog.href };

                return (
                  <li key={prog.id} className={`min-w-0 stagger-${(idx % 6) + 1}`}>
                    <CardWrapper
                      {...(wrapperProps as any)}
                      className="luxury-glass-card group flex h-full flex-col justify-between p-4.5 transition-all duration-300 hover:border-[#c28422] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#143a29]"
                    >
                      <div>
                        {/* Top Row: Icon + Faculty Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#c4dcce] bg-gradient-to-br from-[#eef5f0] to-[#e0ede4] text-[#143a29] shadow-2xs transition-all duration-300 group-hover:bg-[#143a29] group-hover:text-white group-hover:border-[#143a29]">
                            <Icon size={20} aria-hidden="true" />
                          </span>
                          <span className="rounded-full bg-[#f4f7f4] border border-[#d8e3da] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#486353]">
                            {prog.faculty}
                          </span>
                        </div>
                        
                        {/* Title & Full Name */}
                        <div className="mt-3">
                          <span className="block text-lg font-bold leading-tight text-[#143a29] group-hover:text-[#185e3c]">
                            {prog.name}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium text-[#566c5f]">
                            {prog.fullName}
                          </span>
                        </div>

                        {/* Specialisations / Subjects Pill */}
                        <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-[#687e72]">
                          {prog.specialisations}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="mt-3.5 flex items-center justify-between border-t border-[#f0f4f0] pt-2.5 text-xs font-semibold text-[#143a29]">
                        <span className="text-[11px] text-[#718579]">{prog.duration}</span>
                        <span className="inline-flex items-center gap-1 text-[#c28422] transition-transform group-hover:translate-x-1">
                          Curriculum <ArrowRight size={13} aria-hidden="true" />
                        </span>
                      </div>
                    </CardWrapper>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Admissions CTA Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#d5ded7] bg-gradient-to-r from-[#edf4ef] via-[#f7faf8] to-[#edf4ef] p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#143a29] text-[#dfa03e] shadow-xs">
              <GraduationCap size={22} />
            </span>
            <div>
              <p className="text-base font-bold text-[#143a29]">Admissions Open for Academic Session 2024–25</p>
              <p className="mt-0.5 text-xs text-[#52645a]">
                Direct counselling, merit scholarships, and offline application guidance available at our Rajajinagar campus.
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
