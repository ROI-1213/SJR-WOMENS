import { ArrowUpRight, BriefcaseBusiness, Compass, GraduationCap, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RecruiterMarquee } from './RecruiterMarquee';

const placementReport = 'https://sjrc.edu.in/wp-content/uploads/2024/02/Best-Practice-II-Documents.pdf';
const selfStudyReport = 'https://sjrc.edu.in/wp-content/uploads/2023/06/SSR-2023-24.pdf';

const careerServices = [
  { title: 'Career guidance', detail: 'Sessions on career options and competitive examinations.', icon: Compass },
  { title: 'Skills for work', detail: 'Workshops on aptitude, communication and interview preparation.', icon: Presentation },
  { title: 'Placement support', detail: 'Campus drives and information on roles, eligibility and selection.', icon: BriefcaseBusiness },
];

const alumni = [
  { name: 'Shobha N.', initials: 'SN', role: 'Police inspector, Bengaluru', contribution: 'Spoke to students about legal protections and redress for sexual harassment.', year: '2022' },
  { name: 'Muthu Kumar', initials: 'MK', role: 'CEO, Digi Cloud Tech', contribution: 'Led workshops on professional skills, entrepreneurship and ethics.', year: '2021–22' },
  { name: 'Dr. Girish S. R.', initials: 'GS', role: 'Edkraft 360', contribution: 'Contributed to an advanced Excel course organised by the Computer Science department.', year: '2022' },
  { name: 'Dr. Shivakumar B. N.', initials: 'SB', role: 'Assistant Professor of Mathematics, CMRIT', contribution: 'Led a workshop on using Python in applied mathematics and discussed related careers.', year: '2022' },
];

const textLink = 'inline-flex min-h-11 items-center gap-2 font-semibold text-[#185d40] underline underline-offset-4 hover:text-[#177249]';

export const PlacementSection = () => (
  <>
    <section aria-labelledby="career-title" className="bg-[#edf4ee] px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <h2 id="career-title" className="home-section-title">Career Excellence</h2>
          <Link to="/placements/overview" className={textLink}>Placement Cell <ArrowUpRight size={17} aria-hidden="true" /></Link>
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
            <h3 className="home-display-title text-2xl sm:text-3xl">Infosys campus drive</h3>
            <p className="mt-1 text-sm text-green-50">16 January 2023</p>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/20 p-3 sm:p-4">
                <dd className="home-display-title text-4xl text-[#ffbf73]">22</dd>
                <dt className="mt-1 text-sm">SJRC students selected</dt>
              </div>
              <div className="rounded-lg border border-white/20 p-3 sm:p-4">
                <dd className="home-display-title text-4xl text-[#ffbf73]">150</dd>
                <dt className="mt-1 text-sm">Participants across colleges</dt>
              </div>
            </dl>
            <a href={placementReport} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-white underline underline-offset-4">
              Placement Cell report (PDF) <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        </div>

        <RecruiterMarquee />
      </div>
    </section>

    <section aria-labelledby="alumni-title" className="bg-white px-5 home-section text-[#182d23] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1284px]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="alumni-title" className="home-section-title">Distinguished Alumni of SJR Institutions</h2>
            <p className="mt-2 max-w-2xl text-[#43534a]">Graduates who returned to share their expertise with students. Roles are shown as recorded at the time.</p>
          </div>
          <Link to="/student-services/alumni" className={textLink}>Alumni Association <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <ul className="grid gap-x-8 gap-y-1 border-t border-[#d7e5d9] sm:grid-cols-2">
          {alumni.map(person => (
            <li key={person.name} className="flex items-start gap-4 border-b border-[#d7e5d9] px-2 py-4 hover:bg-[#f5f8f4] motion-safe:transition-colors">
              <span aria-hidden="true" className="home-display-title grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e8f2e9] text-lg text-[#177249]">
                {person.initials}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <span className="text-xs font-medium text-[#185d40]">{person.year}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#43534a]">{person.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#43534a]">{person.contribution}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href={selfStudyReport} target="_blank" rel="noopener noreferrer" className={`mt-4 ${textLink}`}>
          <GraduationCap size={19} aria-hidden="true" /> Alumni engagement records (PDF)
        </a>
      </div>
    </section>
  </>
);
