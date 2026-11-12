import { Building2, GraduationCap, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { placementSources } from '@/data/placementRecords';
import { PlacementCards, PlacementReportLinks, placementAction, placementHeading } from './PlacementContent';

const collaboration = [
  { icon: GraduationCap, title: 'Skills sessions', description: 'Discuss a guest session or practical workshop that connects course material with tasks students may encounter at work.' },
  { icon: Building2, title: 'Workplace exposure', description: 'Outline how a visit, internship, or supervised project would work, including the roles and preparation expected of students.' },
  { icon: Handshake, title: 'Recruitment opportunities', description: 'Share the role, eligibility, and selection stages so the Placement Cell can discuss timing and student preparation with your organisation.' },
];

const IndustrialCollaboration = () => (
  <PlacementLayout page="collaboration" related={['brochure', 'companies', 'activities']}>
    <section aria-labelledby="industry-collaboration">
      <h2 id="industry-collaboration" className={placementHeading}>Work with the Placement Cell</h2>
      <p className="mb-5 mt-2 max-w-3xl leading-relaxed text-neutral-700">Employers and training organisations can propose activities that give students a clearer understanding of workplace expectations and career paths.</p>
      <PlacementCards items={collaboration} />
      <Link to="/contact" className={`${placementAction} mt-5`}>Discuss a collaboration</Link>
    </section>

    <section aria-labelledby="industry-records" className="rounded-xl border-l-4 border-[#ff8c00] bg-[#177249]/5 p-5 sm:p-7">
      <h2 id="industry-records" className={`${placementHeading} mb-4`}>Examples from the college’s records</h2>
      <PlacementReportLinks reports={[
        { label: 'Anudip Foundation training collaboration', href: `${placementSources.reports}#page=5`, description: 'The 2022–23 accounting and IT fundamentals course included practical training in Tally.' },
        { label: 'Mega Job Fair collaboration', href: placementSources.jobFair, description: 'The college worked with Magic Bus Foundation and the Employment Exchange, Bengaluru, on the 2022 fair.' },
      ]} />
    </section>
  </PlacementLayout>
);

export default IndustrialCollaboration;
