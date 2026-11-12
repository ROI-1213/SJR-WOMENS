import { ClipboardCheck, FileText, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlacementLayout } from '@/components/layout/PlacementLayout';
import { placementSources } from '@/data/placementRecords';
import { PlacementCards, PlacementReportLinks, placementAction, placementHeading } from './PlacementContent';

const topics = [
  { icon: ClipboardCheck, title: 'Aptitude and technical practice', description: 'Use timed exercises to practise quantitative reasoning, interpret results, and identify topics to review. Check the employer’s notice for role-specific assessments.' },
  { icon: FileText, title: 'Résumé and application skills', description: 'Describe your contribution to a project or internship in concrete terms. Review your education, dates, and contact information before you submit.' },
  { icon: MessagesSquare, title: 'Group discussion and interviews', description: 'Practise listening, giving a clear answer, and describing your contribution to a team. Ask for feedback on one example you can revise.' },
];

const PlacementTraining = () => (
  <PlacementLayout page="training" related={['activities', 'director', 'companies']}>
    <section aria-labelledby="training-focus">
      <h2 id="training-focus" className={placementHeading}>Preparing for selection</h2>
      <p className="mb-5 mt-2 max-w-3xl leading-relaxed text-neutral-700">Placement training builds the skills students use before and during recruitment, from writing a résumé to discussing coursework and projects with an interviewer.</p>
      <PlacementCards items={topics} />
    </section>
    <section aria-labelledby="training-records" className="rounded-xl border-l-4 border-[#ff8c00] bg-[#177249]/5 p-5 sm:p-7">
      <h2 id="training-records" className={`${placementHeading} mb-5`}>Training reports</h2>
      <PlacementReportLinks reports={[
        { label: 'Aptitude preparation workshop', href: `${placementSources.reports}#page=18`, description: 'The Placement Cell report describes preparation for campus selection and competitive examinations.' },
        { label: 'Accounting and IT fundamentals', href: `${placementSources.reports}#page=5`, description: 'The certificate course report records practical accounting and Tally exercises delivered with Anudip Foundation.' },
      ]} />
      <Link to="/contact" className={`${placementAction} mt-5`}>Enquire about current training</Link>
    </section>
  </PlacementLayout>
);

export default PlacementTraining;
