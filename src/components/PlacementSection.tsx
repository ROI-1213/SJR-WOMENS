import { ArrowUpRight, BriefcaseBusiness, Compass, GraduationCap, Presentation, FileText, CheckCircle2 } from 'lucide-react';
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
  <section aria-labelledby="career-title" className="border-b border-[#dde5de] bg-[#f8faf8] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      {/* Header */}
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="home-section-eyebrow">
            Career Development &amp; Training
          </span>
          <h2 id="career-title" className="home-section-title mt-1.5">
            Placement Cell “Disha”
          </h2>
          <p className="mt-1 text-sm text-[#4d6355]">
            Empowering students with verified career guidance, industrial training, and campus recruitment drives.
          </p>
        </div>
        <Link
          to="/placements"
          className="group inline-flex min-h-10 items-center gap-1.5 text-sm font-bold text-[#143a29] transition-colors hover:text-[#c28422]"
        >
          <span className="underline decoration-[#c28422] underline-offset-4">View All Placement Drives &amp; Reports</span>
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#c28422]" aria-hidden="true" />
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        
        {/* Services List: Formal White Cards */}
        <div className="space-y-3.5">
          {careerServices.map(({ title, detail, icon: Icon, badge }) => (
            <div
              key={title}
              className="academic-card flex items-start gap-4 p-5 shadow-xs transition-all duration-300 hover:border-[#143a29] hover:shadow-lg"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#c4dcce] bg-gradient-to-br from-[#edf4ef] to-[#dfede3] text-[#143a29] shadow-xs">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-[#143a29]">{title}</h3>
                  <span className="rounded-full bg-[#f4f7f4] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#54705e]">
                    {badge}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#43534a] sm:text-sm">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Outcome Plaque Card */}
        <article className="plaque-card relative flex flex-col justify-between overflow-hidden p-7 text-white shadow-xl sm:p-9">
          <GraduationCap className="pointer-events-none absolute -bottom-10 -right-8 h-64 w-64 text-white/[0.05]" strokeWidth={0.8} aria-hidden="true" />
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dfa03e]">
              <span>Documented Outcomes · Academic Year 2023–24</span>
            </div>

            <h3 className="home-display-title mt-3 text-2xl font-normal text-white sm:text-3xl">
              Q-Spiders Campus Connect Drives
            </h3>
            <p className="mt-1 text-xs text-white/80">
              Drives conducted on 13 January 2024 &amp; 12 April 2024 at SJR College for Women campus.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="rounded-xl border border-white/20 bg-white/[0.08] p-4 backdrop-blur-xs">
                <dd className="home-display-title text-4xl font-normal text-[#dfa03e]">19</dd>
                <dt className="mt-1 text-xs font-semibold text-white/90">
                  BCA &amp; B.Sc (CS) Students Placed
                </dt>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/[0.08] p-4 backdrop-blur-xs">
                <dd className="home-display-title text-4xl font-normal text-[#dfa03e]">20</dd>
                <dt className="mt-1 text-xs font-semibold text-white/90">
                  B.Com &amp; BBA Students Placed
                </dt>
              </div>
            </dl>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/15 pt-5">
            <a
              href={placementSources.annualReport2324}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#dfa03e]/40 bg-[#dfa03e]/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#dfa03e] transition-all hover:bg-[#dfa03e] hover:text-[#0c2619]"
            >
              <FileText size={15} />
              <span>Placement Report 2023–24 (PDF)</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5" />
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
          <p className="text-xs font-bold uppercase tracking-wider text-[#143a29]">
            Major Corporate Recruiting Partners
          </p>
          <span className="text-xs text-[#718579]">Over 15+ Top Employers</span>
        </div>
        <RecruiterMarquee />
      </div>
    </div>
  </section>
);
