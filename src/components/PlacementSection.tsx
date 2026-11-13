import { ArrowUpRight, BriefcaseBusiness, Compass, GraduationCap, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RecruiterMarquee } from './RecruiterMarquee';
import { placementSources } from '@/data/placementRecords';

const careerServices = [
  {
    title: 'Campus Recruitment by Leading Companies',
    detail: 'Organized through Placement Cell “Disha” connecting final-year students with IT, BFSI, and corporate recruiters.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Employability & Soft Skill Training',
    detail: 'Structured skill enhancement in association with Karnataka Skill Development Corporation (KSDC) and Nandi Foundation.',
    icon: Compass,
  },
  {
    title: 'Aptitude, Mock Interviews & Communication',
    detail: 'Comprehensive knowledge sessions, resume writing workshops, mock interview panels, and competitive exam guidance.',
    icon: Presentation,
  },
];

export const PlacementSection = () => (
  <section aria-labelledby="career-title" className="border-b border-[#e1e6e1] bg-[#f8faf8] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1284px]">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#c28422]">
            Career Development &amp; Training
          </span>
          <h2 id="career-title" className="home-section-title mt-1">
            Placement Cell “Disha”
          </h2>
          <p className="mt-1.5 text-xs text-[#52645a] sm:text-sm">
            Empowering students with verified career guidance, industrial training, and campus recruitment drives.
          </p>
        </div>
        <Link
          to="/placements"
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[#143a29] underline decoration-[#c28422] underline-offset-4 transition-colors hover:text-[#c28422]"
        >
          View All Placement Drives &amp; Reports
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        {/* Services List */}
        <ul className="divide-y divide-[#e5ece6] overflow-hidden rounded-xl border border-[#dce4dd] bg-white px-5 sm:px-7 shadow-sm">
          {careerServices.map(({ title, detail, icon: Icon }) => (
            <li key={title} className="flex items-start gap-4 py-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#c8decb] bg-[#eef5f0] text-[#143a29]">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-[#143a29]">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#43534a] sm:text-sm">{detail}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Featured Outcome Card */}
        <article className="relative flex flex-col justify-center overflow-hidden rounded-xl border border-[#c28422]/40 bg-gradient-to-br from-[#123625] via-[#16432f] to-[#0d2a1c] p-6 text-white shadow-md sm:p-8">
          <GraduationCap className="pointer-events-none absolute -bottom-10 -right-8 h-60 w-60 text-white/[0.05]" strokeWidth={0.8} aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#dfa03e]">
            Documented Outcomes · Academic Year 2023–24
          </span>
          <h3 className="home-display-title mt-1.5 text-2xl font-normal text-white sm:text-3xl">
            Q-Spiders Campus Connect Drives
          </h3>
          <p className="mt-1 text-xs text-white/80">
            Drives conducted on 13 January 2024 &amp; 12 April 2024
          </p>

          <dl className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-lg border border-white/15 bg-white/[0.06] p-3.5 sm:p-4">
              <dd className="home-display-title text-4xl font-normal text-[#dfa03e]">19</dd>
              <dt className="mt-1 text-xs font-medium text-white/90">
                BCA &amp; B.Sc (CS) Students Placed
              </dt>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/[0.06] p-3.5 sm:p-4">
              <dd className="home-display-title text-4xl font-normal text-[#dfa03e]">20</dd>
              <dt className="mt-1 text-xs font-medium text-white/90">
                B.Com &amp; BBA Students Placed
              </dt>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={placementSources.annualReport2324}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#dfa03e] underline decoration-[#dfa03e]/60 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Annual Report 2023–24 Record (PDF)
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      {/* Recruiter Marquee */}
      <RecruiterMarquee />
    </div>
  </section>
);
