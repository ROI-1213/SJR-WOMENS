import { ArrowUpRight, BriefcaseBusiness, Compass, GraduationCap, Presentation, FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RecruiterMarquee } from './RecruiterMarquee';
import { placementSources } from '@/data/placementRecords';

const careerServices = [
  {
    title: 'Campus Recruitment by Leading Corporates',
    detail: 'Organized systematically through Placement Cell “Disha” connecting final-year students with IT, BFSI, and multinational recruiters.',
    icon: BriefcaseBusiness,
    badge: 'Campus Drives',
  },
  {
    title: 'Employability & Soft Skill Training',
    detail: 'Structured skill enhancement in association with Karnataka Skill Development Corporation (KSDC) and Nandi Foundation.',
    icon: Compass,
    badge: 'Skill Certification',
  },
  {
    title: 'Aptitude, Mock Interviews & Communication',
    detail: 'Comprehensive knowledge sessions, resume writing workshops, mock interview panels, and competitive examination orientation.',
    icon: Presentation,
    badge: 'Career Prep',
  },
];

export const PlacementSection = () => (
  <section
    aria-labelledby="career-title"
    className="border-b border-[#dde5de] bg-[#fbf9f4] px-5 py-12 text-[#177249] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
  >
    <div className="mx-auto max-w-[1284px]">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-[#c28422]" aria-hidden="true" />
            <span className="home-section-eyebrow tracking-widest text-[#8b6528]">CAREER DEVELOPMENT &amp; TRAINING</span>
          </div>
          <h2 id="career-title" className="home-section-title mt-1.5 font-serif text-3xl font-bold tracking-tight text-[#177249] sm:text-4xl">
            Placement Cell “Disha”
          </h2>
          <p className="mt-1 text-xs text-[#52645a] sm:text-sm">
            Empowering students with verified career guidance, industrial training, and campus recruitment drives.
          </p>
        </div>
        <Link
          to="/placements"
          className="group inline-flex min-h-10 items-center gap-1.5 text-xs font-bold text-[#177249] transition-colors hover:text-[#c28422] sm:text-sm"
        >
          <span className="underline decoration-[#c28422] underline-offset-4">Placement Drives &amp; Reports</span>
          <ArrowUpRight size={15} className="text-[#c28422] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        
        {/* Services List: Formal Pillar Cards */}
        <div className="space-y-3.5">
          {careerServices.map(({ title, detail, icon: Icon, badge }, idx) => (
            <div
              key={title}
              className={`placement-pillar-card flex items-start gap-4 p-5 transition-all duration-300 stagger-${idx + 1}`}
            >
              <span className="pillar-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#c4dcce] bg-gradient-to-br from-[#edf4ef] to-[#dfede3] text-[#177249] shadow-2xs transition-all duration-300">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#177249] sm:text-base">{title}</h3>
                  <span className="rounded-full border border-[#dce4dd] bg-[#f8faf8] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#54705e] shrink-0">
                    {badge}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#43534a] sm:text-sm">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Outcome Plaque Card */}
        <article className="plaque-card relative flex flex-col justify-between overflow-hidden p-7 text-white shadow-xl sm:p-9">
          <div className="plaque-ambient-glow" aria-hidden="true" />
          <GraduationCap className="pointer-events-none absolute -bottom-10 -right-8 h-64 w-64 text-white/[0.04]" strokeWidth={0.8} aria-hidden="true" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
              <Sparkles size={12} className="text-[#dfa03e]" aria-hidden="true" />
              <span>Documented Outcomes · Academic Year 2023–24</span>
            </div>

            <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
              Q-Spiders Campus Connect Drives
            </h3>
            <p className="mt-1 text-xs text-white/80">
              Drives conducted on 13 January 2024 &amp; 12 April 2024 at SJR College for Women campus.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="rounded-xl border border-white/20 bg-white/[0.08] p-4 backdrop-blur-xs">
                <dd className="font-serif text-4xl font-bold text-[#dfa03e]">19</dd>
                <dt className="mt-1 text-xs font-semibold text-white/90">
                  BCA &amp; B.Sc (CS) Students Placed
                </dt>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/[0.08] p-4 backdrop-blur-xs">
                <dd className="font-serif text-4xl font-bold text-[#dfa03e]">20</dd>
                <dt className="mt-1 text-xs font-semibold text-white/90">
                  B.Com &amp; BBA Students Placed
                </dt>
              </div>
            </dl>
          </div>

          <div className="relative z-10 mt-7 flex flex-wrap items-center gap-3 border-t border-white/15 pt-5">
            <a
              href={placementSources.annualReport2324}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#ff8c00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#e67e00]"
            >
              <FileText size={14} className="text-white" />
              <span>Placement Report 2023–24 (PDF)</span>
              <ArrowUpRight size={13} className="text-white transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={placementSources.mandatoryDisclosure}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-white/90 underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white"
            >
              <span>Mandatory Disclosures (PDF)</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </article>
      </div>

      {/* Recruiter Showcase Marquee */}
      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between border-b border-[#dde5de] pb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-[#177249]">
            Major Corporate Recruiting Partners
          </p>
          <span className="rounded-full bg-[#eef5f0] px-2.5 py-0.5 text-[11px] font-semibold text-[#177249]">
            Over 15+ Verified Corporate Employers
          </span>
        </div>
        <RecruiterMarquee />
      </div>
    </div>
  </section>
);
