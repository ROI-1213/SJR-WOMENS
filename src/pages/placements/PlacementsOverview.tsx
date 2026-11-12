import { ArrowRight, BriefcaseBusiness, Calendar, GraduationCap, Handshake, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { placementPages } from '@/data/navigation/placementsMenuData';
import { dishaCampusDrives, placementSources } from '@/data/placementRecords';
import { PlacementCards, PlacementHighlights, placementAction, placementHeading } from './PlacementContent';

const support = [
  { icon: MessageSquareText, title: 'Career guidance', description: 'Explore job roles and further study, discuss how they fit your interests, and prepare for competitive examinations.' },
  { icon: GraduationCap, title: 'Recruitment preparation', description: 'Build your résumé and practise aptitude tests, communication skills, and mock interviews with KSDC and Nandi Foundation.' },
  { icon: Handshake, title: 'Employer engagement', description: 'Campus recruitment drives by leading IT, BFSI, and corporate employers coordinated by Placement Cell “Disha”.' },
];

const PlacementsOverview = () => (
  <PlacementLayout page="overview" related={['vision', 'activities', 'brochure']}>
    <section aria-labelledby="placement-overview-intro" className="grid overflow-hidden rounded-2xl border border-[#177249]/15 bg-[#177249]/5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)]">
      <div className="flex flex-col items-start justify-center p-5 sm:p-8 lg:p-10">
        <span className="text-xs font-bold uppercase tracking-wider text-[#177249]">Placement Cell “Disha”</span>
        <h2 id="placement-overview-intro" className={`mt-1 border-l-4 border-[#ff8c00] pl-4 ${placementHeading}`}>Shaping Careers at SJR College for Women</h2>
        <p className="mt-4 leading-relaxed text-neutral-700">
          The Placement Cell “Disha” plays a vital role in shaping the careers of students through campus recruitment drives, employability training, aptitude workshops, and mock interviews.
        </p>
        <Link to={placementPages.training.href} className={`${placementAction} mt-5`}>
          Explore placement training <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-72">
        <img src="/images/placements/soft-skills-training.jpg" alt="Employability and soft skills training session at SJR College for Women" className="absolute inset-0 size-full object-cover" decoding="async" />
      </div>
    </section>

    <section aria-labelledby="placement-highlights">
      <h2 id="placement-highlights" className={`${placementHeading} mb-2`}>Placement Highlights (2023–24)</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-neutral-700">Verified historical outcomes from the SJR College for Women Annual Report 2023–24.</p>
      <PlacementHighlights />
    </section>

    <section aria-labelledby="campus-drives-heading">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-[#177249]/20 pb-3">
        <div>
          <h2 id="campus-drives-heading" className={placementHeading}>Historical Campus Drives &amp; Training (2023–24)</h2>
          <p className="mt-1 text-sm text-neutral-600">Documented past drives and employability initiatives from the 2023–24 Annual Report.</p>
        </div>
        <a href={placementSources.annualReport2324} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#177249] underline underline-offset-4">
          Source: Annual Report 2023–24 (PDF)
        </a>
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {dishaCampusDrives.map(drive => (
          <li key={`${drive.date}-${drive.title}`} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef4ef] px-3 py-1 text-xs font-semibold text-[#177249]">
                <Calendar size={12} aria-hidden="true" />
                {drive.date}
              </span>
              <span className="rounded bg-[#faf7ef] px-2 py-0.5 text-xs font-semibold text-[#153b2a] border border-[#e0ddce]">{drive.type}</span>
            </div>
            <h3 className="mt-3 font-bold text-[#153b2a]">{drive.title}</h3>
            <p className="mt-1 text-sm text-neutral-700"><strong>Partner / Recruiters:</strong> {drive.partner}</p>
            <p className="mt-1 text-sm text-neutral-700"><strong>Eligible Stream:</strong> {drive.eligibility}</p>
            {drive.outcome && (
              <p className="mt-2 inline-block rounded bg-[#177249]/10 px-2.5 py-1 text-xs font-bold text-[#177249]">
                Outcome: {drive.outcome}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>

    <section aria-labelledby="placement-support">
      <h2 id="placement-support" className={`${placementHeading} mb-5 border-b border-[#177249]/20 pb-3`}>Activities of Placement Cell “Disha”</h2>
      <PlacementCards items={support} />
    </section>

    <section aria-labelledby="start-career" className="rounded-2xl bg-[#153b2a] p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
      <div>
        <BriefcaseBusiness className="mb-3 size-6 text-white" aria-hidden="true" />
        <h2 id="start-career" className="text-2xl font-bold">Connect with Placement Cell “Disha”</h2>
        <p className="mt-2 max-w-xl leading-relaxed text-white/90">Contact the college office for upcoming placement schedules, training sessions, or campus recruitment collaborations.</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3 sm:mt-0">
        <Link to={placementPages.companies.href} className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#177249] hover:bg-[#ff8c00] hover:text-neutral-950">Recruiting companies</Link>
        <Link to="/contact" className="inline-flex items-center rounded-lg border border-white/50 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Contact the college</Link>
      </div>
    </section>
  </PlacementLayout>
);

export default PlacementsOverview;
