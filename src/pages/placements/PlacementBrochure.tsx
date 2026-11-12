import { ArrowRight, BriefcaseBusiness, ClipboardList, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { availableProgrammes } from '@/data/institute';
import { placementSources } from '@/data/placementRecords';
import { PlacementCards, PlacementReportLinks, placementAction, placementHeading } from './PlacementContent';

const recruiterBrief = [
  { icon: BriefcaseBusiness, title: 'Share the opportunity', description: 'Include the role description, location, key responsibilities, and expected start date.' },
  { icon: GraduationCap, title: 'Specify eligibility', description: 'Indicate the programmes, skills, and academic requirements relevant to the role.' },
  { icon: ClipboardList, title: 'Outline selection', description: 'Provide the proposed dates, assessment stages, and details students need to prepare.' },
];

const PlacementBrochure = () => (
  <PlacementLayout page="brochure" related={['companies', 'statistics', 'collaboration']}>
    <section aria-labelledby="recruiter-brief">
      <h2 id="recruiter-brief" className={placementHeading}>Recruiter briefing</h2>
      <p className="mb-5 mt-2 max-w-3xl leading-relaxed text-neutral-700">Use this page to prepare an employer enquiry and review the college’s programmes and published placement records.</p>
      <PlacementCards items={recruiterBrief} />
      <Link to="/contact" className={`${placementAction} mt-5`}>Request the current placement brochure <ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
    </section>

    <section aria-labelledby="recruiter-programmes" className="rounded-xl border-l-4 border-[#ff8c00] bg-[#177249]/5 p-5 sm:p-7">
      <h2 id="recruiter-programmes" className={`${placementHeading} mb-4`}>Programmes offered</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {availableProgrammes.map(programme => (
          <li key={programme.id}>
            <Link to={programme.href} className="flex h-full flex-wrap items-baseline gap-x-2 rounded-lg border border-[#177249]/20 bg-white px-4 py-3 text-sm text-[#177249] hover:underline">
              <span className="font-bold">{programme.name}</span> <span>{programme.fullName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <section aria-labelledby="recruiter-documents">
      <h2 id="recruiter-documents" className={`${placementHeading} mb-4`}>Published placement documents</h2>
      <PlacementReportLinks reports={[
        { label: 'Placement Cell activity reports', href: placementSources.reports, description: 'Read the college’s records of recruitment, workshops, and career preparation.' },
        { label: '2025–26 Mandatory Disclosures', href: placementSources.disclosure, description: 'Review the reported provisional placement entries for 2024–25.' },
      ]} />
    </section>
  </PlacementLayout>
);

export default PlacementBrochure;
