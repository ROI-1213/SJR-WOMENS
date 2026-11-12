import { ArrowUpRight, BriefcaseBusiness, Compass, GraduationCap, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RecruiterMarquee } from './RecruiterMarquee';
import { placementSources } from '@/data/placementRecords';

const careerServices = [
  { title: 'Campus Recruitment by Leading Companies', detail: 'Organized through Placement Cell “Disha” with IT, BFSI, and corporate employers.', icon: BriefcaseBusiness },
  { title: 'Employability & Competitive Exam Training', detail: 'Soft skills training with KSDC / Nandi Foundation, aptitude test training, and competitive exam workshops.', icon: Compass },
  { title: 'Communication, Resume & Mock Interviews', detail: 'Knowledge-building sessions, communication training, resume writing, and mock interviews.', icon: Presentation },
];

export const PlacementSection = () => (
  <>
    <section aria-labelledby="career-title" className="bg-[#edf4ee] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="career-title" className="home-section-title">Placement Cell “Disha”</h2>
            <p className="mt-1 text-sm text-[#43534a]">Verified 2023–24 campus drives, employability training, and recruiting partners.</p>
          </div>
          <Link to="/placements/overview" className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#185d40] underline underline-offset-4 hover:text-[#177249]">
            View all campus drives <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
          <ul className="divide-y divide-[#d7e5d9] overflow-hidden rounded-xl border border-[#d7e5d9] bg-white px-5 sm:px-7">
            {careerServices.map(({ title, detail, icon: Icon }) => (
              <li key={title} className="flex items-start gap-4 py-5">
                <span className="shrink-0 rounded-lg bg-[#edf4ee] p-2.5 text-[#177249]"><Icon size={21} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#43534a]">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <article className="flex flex-col justify-center rounded-xl bg-[#183c2b] p-5 text-white sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ffbf73]">Historical Placement Outcomes (2023–24)</p>
            <h3 className="home-display-title mt-1 text-2xl sm:text-3xl">Q-Spiders Campus Connect Drives</h3>
            <p className="mt-1 text-sm text-green-50">13 January 2024 &amp; 12 April 2024</p>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/20 p-3 sm:p-4">
                <dd className="home-display-title text-4xl text-[#ffbf73]">19</dd>
                <dt className="mt-1 text-sm">BCA &amp; B.Sc (CS) students placed (Jan 2024)</dt>
              </div>
              <div className="rounded-lg border border-white/20 p-3 sm:p-4">
                <dd className="home-display-title text-4xl text-[#ffbf73]">20</dd>
                <dt className="mt-1 text-sm">B.Com &amp; BBA students placed (Apr 2024)</dt>
              </div>
            </dl>
            <a href={placementSources.annualReport2324} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-white underline underline-offset-4">
              <GraduationCap size={16} aria-hidden="true" /> Annual Report 2023–24 (PDF) <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        </div>

        <RecruiterMarquee />
      </div>
    </section>
  </>
);
